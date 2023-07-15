import Footer from './functions/footer';
import Header from './functions/header';
import Select from './functions/select';
import RatingGraph from './functions/ratingGraph';
import '../app/globals.css';

const Rating: React.FC = () => {
  return (
    <div className="home">
      {' '}
      <Header />
      <section>
        <h1 className="home-title">ランクレート</h1>
        <Select />
      </section>
      <section>
        <RatingGraph />
      </section>
      <Footer />
    </div>
  );
};

export default Rating;
