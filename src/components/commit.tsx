import Footer from './footer';
import Header from './header';
import Select from './select';

const Commit = () => {
  return (
    <div className="home">
      <Header />
      <section>
        <h1 className="home-title">トレーニング</h1>
        <Select />
      </section>
      <section>Hello Commit</section>
      <Footer />
    </div>
  );
};

export default Commit;
