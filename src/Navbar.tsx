import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="index.html">Business Corp</a>
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
