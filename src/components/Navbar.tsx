import { Link, useLocation } from 'react-router-dom';

interface INavbarProps {
  brand: string;
  brandIcon: React.ReactNode;
}

export default function Navbar({ brand, brandIcon }: INavbarProps) {
  const location = useLocation();
  return (
    <nav className="mb-8 border-b-2 px-4 py-2.5 bg-white shadow-lg rounded-lg">
      <ul className=" container flex flex-wrap space-x-8 font-medium items-center">
        <li className="mr-auto">
          <h1>
            <Link to="/" className="text-xl font-bold flex gap-2 items-center">
              {brandIcon}
              {brand}
            </Link>
          </h1>
        </li>
        <li>
          <Link
            to="/"
            className={`block py-2 px-3 border-b-4 transition-colors border-transparent ${
              location.pathname === '/'
                ? 'text-blue-700 border-blue-400'
                : 'text-gray-700'
            } hover:text-blue-700`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/customers"
            className={`block py-2 px-3 border-b-4 transition-colors border-transparent ${
              location.pathname === '/customers'
                ? 'text-blue-700 border-blue-400'
                : 'text-gray-700'
            } hover:text-blue-700`}
          >
            Customers
          </Link>
        </li>
      </ul>
    </nav>
  );
}
