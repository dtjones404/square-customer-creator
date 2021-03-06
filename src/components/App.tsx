import { faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerWrapper from '../pages/CustomerWrapper';
import Home from '../pages/Home';
import Navbar from './Navbar';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
  }, []);
  const handleChangeDarkMode = () => {
    setDarkMode((oldState) => {
      localStorage.setItem('darkMode', (!oldState).toString());
      return !oldState;
    });
  };
  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark' : ''}>
        <div className="bg-gray-25 dark:bg-stone-900 h-screen">
          <div className="container mx-auto text-gray-700 dark:text-zinc-100">
            <Navbar
              brand="Business Corp"
              brandIcon={<FontAwesomeIcon icon={faGem} />}
              links={[
                ['Home', '/'],
                ['Customers', '/customers'],
              ]}
              handleChangeDarkMode={handleChangeDarkMode}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customers" element={<CustomerWrapper />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
