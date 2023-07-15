'use client';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Link href="./Header">
        <p>Go to Header</p>
      </Link>
      <h1>Hello Home</h1>
    </div>
  );
};

export default Home;
