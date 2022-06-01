interface ICustomerProps {
  givenName: string;
  familyName: string;
  emailAddress: string;
  createdAt: Date;
  emailUnsubscribed: boolean;
  handleEdit: React.MouseEventHandler<HTMLButtonElement>;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Customer({
  givenName,
  familyName,
  emailAddress,
  createdAt,
  emailUnsubscribed,
  handleEdit,
  handleDelete,
}: ICustomerProps) {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between p-4 gap-4 bg-white dark:bg-stone-800 shadow-lg border-2 rounded-lg border-l-8 ${
        emailUnsubscribed ? 'border-l-rose-500' : 'border-l-lime-500'
      }`}
    >
      {/* details container */}
      <div className="flex flex-col overflow-hidden">
        <h2 className="text-lg font-bold">
          {givenName} {familyName}
        </h2>
        <h3 className="text-lg font-semibold">
          {emailAddress ? emailAddress : 'N/A'}
        </h3>
        <h3 className="text-med">{`Created: ${createdAt.toLocaleTimeString()} - ${createdAt.toLocaleDateString()}`}</h3>
        <h3 className="text-med">
          {emailUnsubscribed ? 'Unsubscribed' : 'Subscribed'}
        </h3>
      </div>

      {/* button container */}
      <div className="w-full md:w-24 my-1.5 flex flex-col justify-center items-center gap-2">
        <button
          className="w-full border-2 border-blue-600 bg-white dark:bg-stone-800 hover:bg-slate-200 dark:hover:bg-stone-700 transition-colors text-black dark:text-white font-bold py-2 px-4 rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="w-full bg-red-600 hover:bg-red-800 dark:hover:bg-red-500 transition-colors text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
