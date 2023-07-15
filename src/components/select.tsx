import Link from 'next/link';

const Select = () => {
  return (
    <div className="select">
      <button className="item1">
        <Link href="/home" className="select-link">
          Home
        </Link>
      </button>
      <button className="item2">
        <Link href="/commit" className="select-link">
          Commit
        </Link>
      </button>
      <button className="item3">
        <Link href="/rating" className="select-link">
          Rating
        </Link>
      </button>
    </div>
  );
};

export default Select;
