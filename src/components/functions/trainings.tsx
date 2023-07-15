import React, { useState } from 'react';
import '../../app/globals.css';

type Training = {
  name: string;
  count: string;
};

const Trainings = () => {
  const [newTrainingName, setNewTrainingName] = useState('');
  const [showAddTraining, setShowAddTraining] = useState(false);
  const [committedTrainings, setCommittedTrainings] = useState<Training[]>([]);

  const [trainings, setTrainings] = useState<Training[]>([
    { name: '腹筋', count: '' },
    { name: '腕立て', count: '' },
    { name: '背筋', count: '' },
    { name: 'ブルガリアンスクワット', count: '' },
    { name: 'スクワット', count: '' },
    { name: 'フロントランジ', count: '' },
    { name: 'V字腹筋', count: '' },
    { name: 'サイドランジ', count: '' },
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newTrainings = [...trainings];
    newTrainings[index].count = event.target.value.replace(/[^0-9]+/i, '');
    setTrainings(newTrainings);
    setCommittedTrainings(newTrainings.filter((training) => training.count !== ''));
  };

  const handleNewTrainingNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTrainingName(event.target.value);
  };

  const handleShowAddTraining = () => {
    setShowAddTraining(true);
  };

  const handleAddTraining = () => {
    if (newTrainingName.trim() === '') return;

    setTrainings([...trainings, { name: newTrainingName, count: '' }]);
    setNewTrainingName('');
    setShowAddTraining(false);
  };

  const handleCommit = () => {
    const newTrainings = trainings.map((training) => ({ ...training, count: '' }));
    setTrainings(newTrainings);

    // コンソールに確定したトレーニングを表示
    console.log(committedTrainings);
  };

  return (
    <div className="training-container">
      {trainings.map((training, index) => (
        <div key={index} className="training-item">
          <label className="training-label">
            {training.name}：
            <input type="text" className="training-input" maxLength={5} value={training.count} onChange={(e) => handleInputChange(e, index)} />回
          </label>
        </div>
      ))}
      <button onClick={handleShowAddTraining} className="training-add-button">
        新規トレーニング追加
      </button>
      {showAddTraining && (
        <div className="training-add-container">
          <label className="training-label">
            新規トレーニング：
            <input type="text" className="training-input" value={newTrainingName} onChange={handleNewTrainingNameChange} />
            <button onClick={handleAddTraining} className="training-add-confirm-button">
              追加
            </button>
          </label>
        </div>
      )}
      <h2 className="training-committed-title">Committed Trainings</h2>
      <ul className="training-committed-list">
        {committedTrainings.map((training, index) => (
          <li key={index} className="training-committed-item">
            {training.name}: {training.count}回
          </li>
        ))}
      </ul>
      <button onClick={handleCommit} className="training-commit-button">
        Commit
      </button>
    </div>
  );
};

export default Trainings;
