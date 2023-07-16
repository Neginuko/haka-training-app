'use client';
import '../../globals.css';

import { useSession } from 'next-auth/react';
import { LoginButton, LogoutButton } from '../components/auth_buttons';

export default function Home() {
  const { data: session } = useSession();
  return (
    <html className="login-1">
      <body>
        {' '}
        <main>
          <div>
            <p>
              Start&nbsp;
              <code className="font-mono font-bold">{session?.user?.name ?? 'guest !!'}</code>
            </p>
            {!session && <LoginButton></LoginButton>}
            {session && <LogoutButton></LogoutButton>}
          </div>
        </main>
      </body>
    </html>
  );
}
