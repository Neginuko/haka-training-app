import { useEffect, useState } from 'react';
import { getNameFromTrainingId, getCommitsFromUserId } from '../../util/api';
import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';

interface UserProps {
  session: any; // 適切な型に置き換えてください
}

const User: React.FC<UserProps> = ({ session }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function fetchUserName() {
      const userId = session?.user?.id;
      if (userId) {
        const commits = await getCommitsFromUserId(userId);
        if (commits) {
          const trainingId = commits[0]?.trainingId;
          const trainingName = trainingId ? await getNameFromTrainingId(trainingId) : '';
          setUserName(trainingName || 'Unknown User');
        }
      }
    }

    fetchUserName();
  }, [session]);

  return (
    <div>
      <p>{userName}</p>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default User;
export type { UserProps };
