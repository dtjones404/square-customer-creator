import { Link } from 'react-router-dom';
import SplashCard from '../components/SplashCard';

export default function Home() {
  return (
    <SplashCard brand="Square Customer Creator" logoUrl="/square.jpg">
      <Link
        className="text-gray-700 dark:text-zinc-100 border-2 text-center text-lg font-bold mt-4 py-2 rounded shadow-md dark:hover:bg-stone-700 transition-colors"
        to="/customers"
      >
        Create Customers
      </Link>
    </SplashCard>
  );
}
