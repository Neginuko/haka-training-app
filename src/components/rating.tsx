import Footer from './footer';
import Header from './header';
import Select from './select';

const rating = () => {
  return (
    <div className="home">
      <Header />
      <section>
        <h1 className="home-title">ランクレート</h1>
        <Select />
      </section>
      <section>Hello Rating</section>
      <Footer />
    </div>
  );
};

export default rating;
