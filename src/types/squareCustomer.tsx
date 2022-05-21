export interface ISquareCustomer {
  id: string;
  created_at: Date;
  updated_at: Date;
  given_name: string;
  preferences: ICustomerPreferences;
  creation_source: string;
  version: number;
}

interface ICustomerPreferences {
  email_unsubscribed: boolean;
}
