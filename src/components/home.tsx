import { GetServerSidePropsContext } from 'next';
import Header from './functions/header';
import Footer from './functions/footer';
import Select from './functions/select';
import MostTraining from './functions/mostTraining';
import Contributions from './functions/contributions';
import '../app/globals.css';

interface PageProps {
  session: any; // 適切な型に置き換えてください
}

const Home: React.FC<PageProps> = ({ session }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="home">
      <Header session={session} />
      <section>
        <h1 className="home-title">Step-Up へようこそ！</h1>
        <Select />
      </section>
      <section className="home-main">
        <h1 className="currentYear">{currentYear} 年 コミット数</h1>
        <p>159 contributions in the this year</p>
        <div className="contribute">
          <Contributions />
          <div>
            <p></p>
          </div>
        </div>
        <MostTraining />
      </section>
      <Footer />
    </section>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // セッションを取得する処理
  const session = {}; // 適切なセッションの取得方法に置き換えてください

  return {
    props: {
      session,
    },
  };
}

export default Home;
