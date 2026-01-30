import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = 'chatkit_user_id';
const SESSION_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST() {
  const cookieStore = await cookies();
  let userId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!userId) {
    userId = crypto.randomUUID();
  }

  const response = await fetch('https://api.openai.com/v1/chatkit/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'OpenAI-Beta': 'chatkit_beta=v1',
    },
    body: JSON.stringify({
      workflow: { id: process.env.CHATKIT_WORKFLOW_ID },
      user: userId,
      chatkit_configuration: {
        file_upload: {
          enabled: true,
        },
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    return NextResponse.json(
      { error: error.message || 'Failed to create session' },
      { status: response.status }
    );
  }

  const { client_secret, expires_after } = await response.json();

  const res = NextResponse.json({ client_secret, expires_after });

  res.cookies.set(SESSION_COOKIE_NAME, userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_COOKIE_MAX_AGE,
    path: '/',
  });

  return res;
}
