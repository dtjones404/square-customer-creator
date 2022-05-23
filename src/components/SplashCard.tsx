interface ISplashCardProps {
  brand: string;
  logoUrl: string;
  children?: React.ReactNode;
}

export default function SplashCard({
  brand,
  logoUrl,
  children,
}: ISplashCardProps) {
  return (
    <div className="flex bg-white rounded-lg shadow-2xl overflow-hidden my-10 mx-auto max-w-med lg:max-w-4xl">
      <div
        className="hidden md:block md:w-1/2 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${logoUrl})`, minHeight: '400px' }}
      ></div>
      <div className="w-full p-8 md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-600 text-center">
          {brand}
        </h2>
        {children}
      </div>
    </div>
  );
}
