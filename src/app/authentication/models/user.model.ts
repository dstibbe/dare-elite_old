export interface User {
  uid: string;
  email: string;
  settings?: Usersettings;
  profile?: Userprofile
}

export class Userprofile {  
  firstname?: string;
  lastname?: string;  
}

export class Usersettings{
  isActive?: boolean;
  isDeleted?: boolean;
  registrationDate?: Date;
}