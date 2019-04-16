export class User {
  id: string;
  username: string;
  password: string;  
  profile?: Userprofile;
  settings?: Usersettings;
}

export class Userprofile {  
  firstname: string;
  lastname: string;  
}

export class Usersettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
}