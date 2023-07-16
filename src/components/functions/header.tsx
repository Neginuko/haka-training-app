import User from './user';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();
  const username = session?.user?.name ?? 'Guest';

  return (
    <header className="header">
      <section className="intro-top">
        <div className="header-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 60 60" fill="none">
            <rect x="1" y="30.8738" width="28" height="28" fill="black" stroke="#DBFF00" />
            <rect x="31" y="1" width="28" height="58" fill="black" stroke="#DBFF00" />
          </svg>
          {/* <Image src={src} alt={alt} width={width} height={height} /> */}
          <h1 className="logo-title">Step-Up</h1>
        </div>
      </section>

      <div className="header-user-account">
        <User username={username} />
      </div>
    </header>
  );
};

export default Header;
