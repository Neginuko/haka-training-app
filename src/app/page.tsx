import Link from 'next/link';

const Home = () => {
  return (
    <body>
      <header className="intro-header">
        <section className="intro-top">
          <div className="intro-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 60 60" fill="none">
              <rect x="1" y="30.8738" width="28" height="28" fill="black" stroke="#DBFF00" />
              <rect x="31" y="1" width="28" height="58" fill="black" stroke="#DBFF00" />
            </svg>
            {/* <Image src={src} alt={alt} width={width} height={height} /> */}
            <h1>Step-Up</h1>
          </div>
          {/* <div>
            <Link href="/home">
              {' '}
              <p>Home</p>
            </Link>
          </div> */}

          <div className="intro-login">
            <Link href="./test/login/" className="intro-link">
              {' '}
              <p>ログイン</p>
            </Link>
          </div>
        </section>
        {/*---- /intro-top ----*/}

        <section className="intro-descriptions">
          <div className="intro-title">
            <h1 className="title-top">エンジニアよ、</h1>
            <h1 className="title-buttom">立ち上がれ。</h1>
          </div>

          <div className="intro-about">
            <p>
              <b>GutHub?</b> <b>Atcoder?</b> いや、
            </p>
            <p>エンジニア向けトレーニング継続アプリ</p>
            <h2>Step-Up</h2>
          </div>
        </section>
        <section className="container">
          <div className="wave"></div>
        </section>
      </header>
      {/*---- /header ----*/}

      <main>
        <div className="about-setup">
          <h1>
            Step-Up <span>とは</span>
          </h1>
          <div className="item">
            <p>エンジニアの運動不足を解決し、</p>
            <p>継続率が向上できるために開発された</p>
            <h3>トレーニング継続可視化アプリ</h3>
          </div>
        </div>
        {/*---- /about-setup ----*/}

        <div className="about-goals">
          <h1>Goals</h1>
          <div className="item">
            <p>1. 可視化による継続的なサポート</p>
            <p>2. 継続の天敵「モチベーションの維持」を解決</p>
            <p>3. エンジニアがムキムキに・・・!？</p>
          </div>
        </div>
        {/*---- /about-goals ----*/}

        <div className="about-functions">
          <h1>Functions</h1>
          <div className="functions">
            <div className="function">
              <p>毎日の運動量を一覧で可視化</p>
            </div>
            <div className="function">
              <p>日々の頑張りを記録してコミット！</p>
            </div>
            <div className="function">
              <p>運動量と時間でランクレート表示が可能</p>
            </div>
          </div>
        </div>
        {/*---- /about-functions ----*/}
      </main>

      <footer className="intro-footer">
        <h2>HAKA 2023</h2>
      </footer>
    </body>
  );
};

export default Home;
