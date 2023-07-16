'use client';
import '../../globals.css';

import { useSession } from 'next-auth/react';
import { LoginButton, LogoutButton } from '../components/auth_buttons';
import Main from '../../../components/main';

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
              <code className="font-mono font-bold">{session?.user?.name ?? 'guest'}</code>
            </p>
            {!session && <LoginButton></LoginButton>}
            {session && <Main data={session}></Main>}
          </div>
        </main>
      </body>
    </html>
  );
}
