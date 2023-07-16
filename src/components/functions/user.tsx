// src/app/compontnts/functions/user.tsx
'use client';
import { useSession } from 'next-auth/react';

const User = () => {
  const { data: session } = useSession(); // ユーザーセッションを取得

  return (
    <div>
      <p>{session?.user?.name ?? 'Guest'}</p> {/* 認証されたユーザー名を表示 */}
    </div>
  );
};

export default User;
