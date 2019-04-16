export class User {
  id: string;
  username: string;
  password: string;  
  profile: UserProfile;
  settings: UserSettings;
}

export class UserProfile {  
  firstname: string;
  lastname: string;  
}

export class UserSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
}