import { Link, useLocation } from 'react-router-dom';

interface INavbarProps {
  brand: string;
  brandIcon: React.ReactNode;
  links: string[][];
}

export default function Navbar({ brand, brandIcon, links }: INavbarProps) {
  const location = useLocation();
  return (
    <nav className="mb-8 border-b-2 px-6 py-2.5 bg-white shadow-lg rounded-lg">
      <ul className=" container flex flex-wrap gap-4 font-medium justify-center items-center">
        <li className="sm:mr-auto basis-full sm:basis-auto">
          <h1>
            <Link
              to="/"
              className="text-xl font-bold flex gap-2 justify-center items-center"
            >
              {brandIcon}
              {brand}
            </Link>
          </h1>
        </li>
        {links.map(([label, route]) => (
          <li>
            <Link
              to={route}
              className={`block py-2 px-3 border-b-4 transition-colors border-transparent ${
                location.pathname === route
                  ? 'text-blue-700 border-blue-400'
                  : 'text-gray-700'
              } hover:text-blue-700`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
