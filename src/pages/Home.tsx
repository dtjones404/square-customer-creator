import { Link } from 'react-router-dom';
import SplashCard from '../components/SplashCard';

export default function Home() {
  return (
    <SplashCard
      brand="Square Customer Creator"
      logoUrl="https://1000logos.net/wp-content/uploads/2019/05/Square.jpg"
    >
      <Link
        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
        to="/customers"
      >
        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Create Customers
        </h1>
      </Link>
    </SplashCard>
  );
}
