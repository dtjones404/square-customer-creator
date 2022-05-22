import { Link } from 'react-router-dom';

interface IHomeProps {
  brand: string;
  logoUrl: string;
}

export default function Home({ brand, logoUrl }: IHomeProps) {
  return (
    <div className="flex flex-row w-full">
      <div className="py-12 flex-1">
        <div className="flex bg-white rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${logoUrl})`, minHeight: '380px' }}
          ></div>
          <div className="w-full p-8 lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-600 text-center">
              {brand}
            </h2>
            <Link
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
              to="/customers"
            >
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Create Customers
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
