import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

interface INavbarProps {
  brand: string;
  brandIcon: React.ReactNode;
  links: [label: string, route: string][];
  handleChangeDarkMode: (e: React.MouseEvent) => void;
}

export default function Navbar({
  brand,
  brandIcon,
  links,
  handleChangeDarkMode,
}: INavbarProps) {
  const location = useLocation();
  return (
    <nav className="mb-8 border-b-2 px-6 py-2.5 bg-white dark:bg-stone-800 shadow-lg rounded-lg rounded-t-none">
      <ul className="flex flex-wrap gap-4 font-medium justify-center items-center">
        <li className="sm:mr-auto basis-full sm:basis-auto">
          <h1>
            <Link
              to="/"
              className="text-xl text-black dark:text-white font-bold flex gap-2 justify-center items-center"
            >
              {brandIcon}
              {brand}
            </Link>
          </h1>
        </li>
        {links.map(([label, route]) => (
          <li key={label}>
            <Link
              to={route}
              className={`block py-2 px-3 border-b-4 transition-colors border-transparent ${
                location.pathname === route
                  ? 'text-blue-700 border-blue-400 dark:text-blue-300 dark:border-blue-300'
                  : 'text-gray-700 dark:text-zinc-200'
              } hover:text-blue-700 dark:hover:text-blue-400`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <button
            className="py-2 px-4 text-xl hover:text-indigo-600 dark:hover:text-amber-400 transition-colors"
            onClick={handleChangeDarkMode}
            aria-label="toggle dark mode"
          >
            <FontAwesomeIcon icon={faSun} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
