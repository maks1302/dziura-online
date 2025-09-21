import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { BeehiivClient } from '@beehiiv/sdk';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      return NextResponse.json(
        { error: 'Google Sheet ID not configured' },
        { status: 500 }
      );
    }

    // Add email to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:A', // Column A
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email, new Date().toISOString()]], // Email and timestamp
      },
    });

    // Subscribe to Beehiiv as well
    const beehiivApiKey = process.env.BEEHIIV_API_KEY;
    const beehiivPublicationId = process.env.BEEHIIV_PUBLICATION_ID; // e.g. "pub_********-****-****-****-************"

    if (!beehiivApiKey || !beehiivPublicationId) {
      console.warn('Beehiiv not configured: missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID');
    } else {
      try {
        const client = new BeehiivClient({ token: beehiivApiKey });
        await client.subscriptions.create(beehiivPublicationId, {
          email,
          reactivate_existing: true,
          send_welcome_email: false,
        });
      } catch (beehiivError) {
        // Log and continue — do not fail the whole request if Beehiiv call fails
        console.error('Beehiiv subscription error:', beehiivError);
      }
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error saving email to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}

