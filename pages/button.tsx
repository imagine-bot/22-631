import CounterButton from '../components/CounterButton';
import Link from 'next/link';

const ButtonPage = () => {
  return (
    <div>
      <h1>Button Page</h1>
      <CounterButton />
      <Link href="/">
        <a>Go back to homepage</a>
      </Link>
    </div>
  );
};

export default ButtonPage;