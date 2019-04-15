export class User {
  uid: string;
  firstName: string;
  lastName: string;
  firstname?: string;
  surname?: string;
  email?: string; 
  password?: string;  
  userRoles?: UserRoles;
  userSettings?: UserSettings;
}

export class UserRoles {  
  crm?: boolean;
  inkoop?: boolean;
  verkoop?: boolean;
}

export class UserSettings{
  isActive?: boolean;
  isDeleted?: boolean;
  registrationDate?: Date;
  joinedDate?: Date;
}