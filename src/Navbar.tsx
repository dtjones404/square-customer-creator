import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <ul>
        <li>
          <h1>
            <Link to="/">Business Corp</Link>
          </h1>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/customers">Customer</Link>
        </li>
      </ul>
    </nav>
  );
}
