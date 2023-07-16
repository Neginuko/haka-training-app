interface UserProps {
  username: string;
}

const User: React.FC<UserProps> = ({ username }) => {
  return (
    <div>
      <p>{username}</p>
    </div>
  );
};

export default User;
