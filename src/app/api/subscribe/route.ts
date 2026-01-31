import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';


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

    // Subscribe to Ghost
    const ghostUrl = process.env.GHOST_URL;
    const ghostJwt = process.env.GHOST_JWT_KEY;

    if (!ghostUrl || !ghostJwt) {
      console.warn('Ghost not configured: missing GHOST_URL or GHOST_JWT_KEY');
    } else {
      try {
        const baseUrl = ghostUrl.replace(/\/$/, '');
        const response = await fetch(`${baseUrl}/ghost/api/admin/members/`, {
          method: 'POST',
          headers: {
            'Authorization': `Ghost ${ghostJwt}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            members: [{
              email,
              note: 'subscribe via website',
              labels: ['website']
            }]
          }),
        });

        if (!response.ok) {
          const errorData = await response.text();
          console.error('Ghost subscription error:', response.status, errorData);
        }
      } catch (ghostError) {
        console.error('Ghost subscription network error:', ghostError);
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

