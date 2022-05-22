import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="mb-8 border-b-2 px-3 py-2.5 rounded">
      <ul className=" container flex flex-wrap space-x-8 font-medium items-center">
        <li className="mr-auto">
          <h1>
            <Link to="/" className="text-xl font-bold">
              <FontAwesomeIcon className="icon mr-0.5 w-9" icon={faGem} />
              Business Corp
            </Link>
          </h1>
        </li>
        <li>
          <Link
            to="/"
            className={`block py-4 px-3 ${
              location.pathname === '/' ? 'text-blue-700' : 'text-gray-700'
            } hover:text-blue-700`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/customers"
            className={`block py-4 px-3 ${
              location.pathname === '/customers'
                ? 'text-blue-700'
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
