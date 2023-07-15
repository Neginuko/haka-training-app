// import Link from 'next/link';
import Header from './functions/header';
import Footer from './functions/footer';
import Select from './functions/select';
import MostTraining from './functions/mostTraining';
import '../app/globals.css';
// import Calendar from './calendar';

const Home: React.FC = () => {
  return (
    <section className="home">
      {' '}
      <Header />
      <section>
        <h1 className="home-title">Step-Up へようこそ！</h1>
        <Select />
      </section>
      <section>
        {/* <Calendar commits={commits} /> */}
        <MostTraining />
      </section>
      <Footer />
    </section>
  );
};

export default Home;
