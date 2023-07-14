import { signIn, signOut } from 'next-auth/react';

export const LoginButton = () => {
  const handleSignIn = () => {
    signIn();
  };

  return (
    <div className="login">
      <button className="login-button" onClick={handleSignIn}>
        サインイン
      </button>
    </div>
  );
};

export const LogoutButton = () => {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="login">
      <button className="login-button" onClick={handleSignOut}>
        サインアウト
      </button>
    </div>
  );
};
