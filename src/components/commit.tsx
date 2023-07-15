import Footer from './footer';
import Header from './header';
import Select from './select';

const commit = () => {
  return (
    <div className="home">
      <Header />
      <section>
        <Select />
      </section>
      <section>Hello Commit</section>
      <Footer />
    </div>
  );
};

export default commit;
