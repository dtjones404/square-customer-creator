interface ICustomerProps {
  givenName: string;
  familyName: string;
  emailAddress: string;
  createdAt: Date;
  emailUnsubscribed: boolean;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
  handleEdit: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Customer({
  givenName,
  createdAt,
  emailAddress,
  familyName,
  emailUnsubscribed,
  handleDelete,
  handleEdit,
}: ICustomerProps) {
  return (
    <div
      className={`container flex justify-between p-4 border-2 rounded border-l-8 ${
        emailUnsubscribed ? 'border-l-rose-500' : 'border-l-lime-500'
      }`}
    >
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">
          {givenName} {familyName}
        </h3>
        <h3 className="text-lg font-semibold">
          {emailAddress ? emailAddress : 'N/A'}
        </h3>
        <h3 className="text-med">{`Created: ${createdAt.toLocaleTimeString()} - ${createdAt.toLocaleDateString()}`}</h3>
        <h3 className="text-med">
          {emailUnsubscribed ? 'Unsubscribed' : 'Subscribed'}
        </h3>
      </div>
      <div className="w-24 flex flex-col justify-center items-center gap-2">
        <button
          className="w-full border-2 border-blue-600 hover:bg-slate-100 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="w-full bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
