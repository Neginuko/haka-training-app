'use client';
import Footer from './functions/footer';
import Header from './functions/header';
import Select from './functions/select';
import Trainings from './functions/trainings';
import '../app/globals.css';

const Commit: React.FC = () => {
  return (
    <div className="home">
      {' '}
      <Header />
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

export default Commit;
