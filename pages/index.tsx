import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the homepage!</h1>
      <Link href="/button">
        <a>Go to button page</a>
      </Link>
    </div>
  );
};

export default HomePage;