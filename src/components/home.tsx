import Link from 'next/link';
import Header from './header';
import Footer from './footer';
import Select from './select';
import '../app/globals.css';
// import Calendar from './calendar';

const Home: React.FC = () => {
  return (
    <div className="home">
      {' '}
      <Header />
      <section>
        <Select />
      </section>
      <section>
        <h1>2023 Commit</h1>
        {/* <Calendar commits={commits} /> */}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
