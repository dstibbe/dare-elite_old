export class User {
  uid: string;
  id?: string;
  email: string;
  settings?: Usersettings;
  profile?: Userprofile;
  userroles?: Userroles;
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

export class Userroles{
  crm?: boolean;
  inkoop?: boolean;
  verkoop?: boolean;
  artikelen?: boolean;
  financiel?: boolean;
  werknemers?: boolean;
  uren?: boolean;
}