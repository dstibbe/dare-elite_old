export class Land {
  id?: string;
  naam?: string;
  isoAlpha2?: string;
  postcodemasker?: string;
  active?: boolean;
  landHistorie?: LandHistorie;
}

export class LandHistorie {
  isCreatedAt?: Date;
  isCreatedBy?: string;
  modified?: Modified;
  deactivated?: Deactivated;
}

export class Modified {
  isModifiedAt?: Date;
  isModifiedBy?: string;
}

export class Deactivated {
  isDeactivatedAt?: Date;
  isDeactivatedBy?: string;
}
