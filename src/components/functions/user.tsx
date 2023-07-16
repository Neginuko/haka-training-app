// src/app/compontnts/functions/user.tsx
import { useSession } from 'next-auth/react';

const User = () => {
  const { data: session } = useSession();

  return (
    <div>
      <p>{session?.user?.email ?? 'Guest'}</p>
    </div>
  );
};

export default User;
