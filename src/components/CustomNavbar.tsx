import { faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';

export default function CustomNavbar() {
  return (
    <Navbar
      brand="Business Corp"
      brandIcon={<FontAwesomeIcon icon={faGem} />}
      links={[
        ['Home', '/'],
        ['Customers', '/customers'],
      ]}
    />
  );
}
