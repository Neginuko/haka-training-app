import Image from 'next/image';
import '../../app/globals.css';

const RatingGraph = () => {
  return (
    <div className="rating-text">
      <section>
        <h1>バージョン2.0をお待ちください🙇</h1>
      </section>
      <section className="rating-description">
        <h3>【 少しだけ機能紹介..! 】</h3>
        <p>
          Atcoderでお馴染みの<b>レーティンググラフ</b>がついに登場!!
        </p>
        <Image src="/Rating.png" width={200} height={400} alt="Ranking画像" />
      </section>
    </div>
  );
};

export default RatingGraph;
