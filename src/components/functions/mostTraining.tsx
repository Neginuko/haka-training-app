import '../functions/mostTraining';

const MostTraining = () => {
  return (
    <div className="mostTraining">
      <h1 className="mostTraining-title">あなたが頻繁に行うトレーニングランキング</h1>
      <div className="training-ranking">
        <section className="ranking-1">
          <h3>1</h3>
          <div className="training-ranking-data">
            {' '}
            <p className="training">スクワット</p>
            <p className="count">30回</p>
          </div>
        </section>
        <section className="ranking-2">
          <h3>2</h3>
          <div className="training-ranking-data">
            {' '}
            <p className="training">腹筋</p>
            <p className="count">500回</p>
          </div>
        </section>
        <section className="ranking-3">
          <h3>3</h3>
          <div className="training-ranking-data">
            {' '}
            <p className="training">フロントランジ</p>
            <p className="count">200回</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MostTraining;
