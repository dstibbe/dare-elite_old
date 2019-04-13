import { Land } from '../../landen/models/land.model';

export class relatie {
    id?: string;
    naam?: string;
    relatietype?: string;
    financieleStatus?: string;
    taal?: string;
    geblokkerd?: boolean;
    failliet?: boolean;
    contact?: Contact;
    financieel?: Financieel;
    inkoop?: Inkoop;
}

export class Contact{
    bezoekadres?: Bezoekadres;
    postadres?: Postadres;
    telefoon?: string;
    fax?: string;
    website?: string;
    email?: string;
}

export class Bezoekadres{
  straat?: string;
  huisnummer?: string;
  toevoeging?: string;
  postcode?: string;
  plaatsnaam?: string;
  land?: Land;
  provincie?: string;
  aanvullendeLocatieInfo?: string;
  bezoekIsAndersDanPost?: boolean;
}

export class Postadres{
  straat?: string;
  huisnummer?: string;
  toevoeging?: string;
  postcode?: string;
  plaatsnaam?: string;
  land?: Land;
  provincie?: string;
  aanvullendeLocatieInfo?: string;
}

export class Financieel{
  bank?: Bank;
  btw?: Btw;
  omzet?: Omzet;
}

export class Bank{
  valuta?: string;
  bankrekeningnummer?: string;
  banknaam?: string;
  plaatsbank?: string;
  iban?: string;
  bic?: Land;
  giro?: string;
}

export class Btw{
  btwBedrijfsgroep?: string;
  btwNummer?: string;
  controledatumBtwNummer?: string;
}

export class Omzet{
  omzetcode?: string;
  kostendrager?: string;
}

export class Inkoop{
  inkoopBestanden: InkoopBestanden;
  inkoopbepalingen: Inkoopbepalingen;
  crediteur: Crediteur;
}

export class InkoopBestanden{
  bestanden: [];
}

export class Inkoopbepalingen{
  inkoopbetalingsconditie?: string;
  inkoopbetalingswijze?: string;
  kleinorderoptieInkoop?: string;
  inkoopkorting?: string;
  minimaalOrderbedragInkoop?: string;
  kleinordertoeslagInkoop?: string;
  transport?: Transport;
  inkoopIncoterm?: string;
  inkoopIncotermsplaats?: string;
}

export class Transport{
  inkoopIncoterm?: string;
  inkoopIncotermsplaats?: string;
}

export class Crediteur{
  isLeverancier?: boolean;
  crediteurennummer?: string;
  automatischBetalen?: boolean;
  klantcodeCrediteur?: string;
  inkoopdagboek?: string;
}