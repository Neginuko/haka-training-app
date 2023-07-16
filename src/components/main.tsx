// import Link from 'next/link';
import Header from './functions/header';
import Footer from './functions/footer';
import Select from './functions/select';
import MostTraining from './functions/mostTraining';
import Contributions from './functions/contributions';
import '../app/globals.css';
// import Calendar from './calendar';

interface MainProps {
  data: any; // 'any'の代わりに、より具体的な型を使用できます。
}

const Main: React.FC<MainProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  console.log(data);
  return (
    <section className="home">
      {' '}
      <Header />
      <section>
        <h1 className="home-title">Step-Up へようこそ！</h1>
        <Select />
      </section>
      <section className="home-main">
        <h1 className="currentYear">{currentYear} 年 コミット数</h1>
        <p>159 contributions in the this year</p>
        <div className="contribute">
          <Contributions />
          <div>
            <p></p>
          </div>
        </div>
        <MostTraining />
      </section>
      <Footer />
    </section>
  );
};

export default Main;
