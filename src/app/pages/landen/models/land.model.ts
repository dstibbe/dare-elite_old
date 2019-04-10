export class Land {
    key: any;
    id: number;
    code: string;
    naam: string;
    landSettings: LandSettings;
}


export class LandSettings{
    isActive: boolean;
    isDeleted: boolean;
    registrationDate: Date;
    joinedDate: Date;
  }