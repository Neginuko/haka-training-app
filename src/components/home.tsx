// import Link from 'next/link';
import Header from './header';
import Footer from './footer';
import Select from './select';
import MostTraining from './functions/mostTraining';
import '../app/globals.css';
// import Calendar from './calendar';

const Home: React.FC = () => {
  return (
    <div className="home">
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
    </div>
  );
};

export default Home;
