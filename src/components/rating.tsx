import Footer from './footer';
import Header from './header';
import Select from './select';

const rating = () => {
  return (
    <div className="home">
      <Header />
      <section>
        <Select />
      </section>
      <section>Hello Rating</section>
      <Footer />
    </div>
  );
};

export default rating;
