import { GetServerSidePropsContext } from 'next';
import Header from './functions/header';
import Footer from './functions/footer';
import Select from './functions/select';
import Trainings from './functions/trainings';
import '../app/globals.css';

interface PageProps {
  session: any; // 適切な型に置き換えてください
}

const Commit: React.FC<PageProps> = ({ session }) => {
  return (
    <div className="home">
      <Header session={session} />
      <section>
        <h1 className="home-title">トレーニング</h1>
        <Select />
      </section>
      <section>
        <Trainings />
      </section>
      <Footer />
    </div>
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

export default Commit;
