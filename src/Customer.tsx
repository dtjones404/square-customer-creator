interface ICustomerProps {
  givenName: string;
  familyName: string;
  createdAt: Date;
  emailUnsubscribed: boolean;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
  handleEdit: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Customer({
  givenName,
  createdAt,
  familyName,
  emailUnsubscribed,
  handleDelete,
  handleEdit,
}: ICustomerProps) {
  return (
    <div>
      <h1>
        {givenName} {familyName}
      </h1>
      <h1>{`${createdAt.toLocaleTimeString()} - ${createdAt.toLocaleDateString()}`}</h1>
      <h1>{emailUnsubscribed ? 'Subscribed' : 'Unsubscribed'}</h1>
      <button onClick={handleDelete}>X</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
