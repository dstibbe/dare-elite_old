export interface User {
  uid: string;
  firstname?: string;
  lastname?: string;
  email: string;
  crm?: boolean;
  inkoop?: boolean;
  verkoop?: boolean;
  isDeleted?: boolean;
}