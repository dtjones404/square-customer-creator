interface ICustomerProps {
  givenName: string;
  createdAt: Date;
  emailUnsubscribed: boolean;
}
export default function Customer({
  givenName,
  createdAt,
  emailUnsubscribed,
}: ICustomerProps) {
  return (
    <div>
      <h1>{givenName}</h1>
      <h1>{`${createdAt.toLocaleTimeString()} - ${createdAt.toLocaleDateString()}`}</h1>
      <h1>{emailUnsubscribed ? 'Subscribed' : 'Unsubscribed'}</h1>
    </div>
  );
}
