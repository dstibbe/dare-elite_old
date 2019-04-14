import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RelatieService } from '../services/relatie.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'dare-relatie',
  templateUrl: './relatie.component.html',
  styleUrls: ['./relatie.component.scss']
})
export class RelatieComponent implements OnInit {

  postAnders: boolean;

  form = new FormGroup({});
  model: any = {}
  fieldsTopSection1: FormlyFieldConfig[] = [
    {
      type: 'input',
      key: 'id',
      templateOptions: {
        label: 'database id',
        placeholder: 'id',
        disabled: true
      }
    },
    {
      type: 'input',
      key: 'naam',
      templateOptions: {
        type: 'text',
        placeholder: 'Naam van bedrijf',
        required: true,
      }
    },
    {
      key: 'relatietype',
      type: 'select',
      templateOptions: {
        label: 'Relatietype',
        required: false,
        options: [
          { value: 1, label: 'Debiteur' },
          { value: 2, label: 'Crediteur' },
          { value: 3, label: 'Debiteur en Crediteur' }
        ],
      },
    }, {
      key: 'taal',
      type: 'select',
      templateOptions: {
        label: 'Taal',
        required: false,
        description: 'wordt gebruikt voor print templates',
        options: [
          { value: 1, label: 'Nederlands' },
          { value: 2, label: 'Frans' },
          { value: 3, label: 'Engels' }
        ],
      },
    },
  ];

  fieldsTopSection2: FormlyFieldConfig[] = [
    {
      type: 'input',
      key: 'financieleStatus',
      templateOptions: {
        label: 'financiele Status',
        placeholder: 'financiele status',
        fxFlex: '100%',
      }
    }, {
      key: 'geblokkeerd',
      type: 'checkbox',
      templateOptions: {
        label: 'geblokkeerd',
        required: false,
        fxFlex: '130px',
        indeterminate: false
      },
    }, {
      key: 'failliet',
      type: 'checkbox',
      templateOptions: {
        label: 'failliet',
        required: false,
        fxFlex: '120px',
        indeterminate: false
      },
    }
  ];

  fieldsBezoekadres: FormlyFieldConfig[] = [
    {
      key: 'contact.bezoekadres.straat',
      type: 'input',
      templateOptions: {
        label: 'straat',
        required: false,
      }
    },
    {
      key: 'contact.bezoekadres.huisnummer',
      type: 'input',
      templateOptions: {
        label: 'huisnummer',
        required: false,
      }
    },
    {
      key: 'contact.bezoekadres.toevoeging',
      type: 'input',
      templateOptions: {
        label: 'toevoeging',
        required: false,
      }
    },
    {
      key: 'contact.bezoekadres.postcode',
      type: 'input',
      templateOptions: {
        label: 'postcode',
        placeholder: 'postcode bezoekadres',
        required: false,
      }
    },
    {
      key: 'contact.bezoekadres.plaatsnaam',
      type: 'input',
      templateOptions: {
        label: 'plaatsnaam',
        placeholder: 'plaatsnaam bezoekadres',
        required: false,
      }
    },
    {
      key: 'contact.bezoekadres.land',
      type: 'select',
      templateOptions: {
        label: 'land',
        required: false,
        options: [
          { value: 1, label: 'Nederland' },
          { value: 2, label: 'Belgie' },
          { value: 3, label: 'Engeland' }
        ],
      },
    },
    {
      key: 'contact.bezoekadres.provincie',
      type: 'select',
      templateOptions: {
        label: 'provincie/staat',
        required: false,
        options: [
          { value: 1, label: 'Flevoland' },
          { value: 2, label: 'Noord-holland' },
          { value: 3, label: 'Brabant' }
        ],
      },
    },
    {
      key: 'contact.bezoekadres.aanvullendeLocatieInfo',
      type: 'textarea',
      templateOptions: {
        label: 'aanvullende informatie',
        placeholder: 'een afdeling of verdiepingsnummer wellicht',
        required: false,
      }
    }
  ];

  fieldsPostadres: FormlyFieldConfig[] = [
    {
      key: 'contact.postadres.straat',
      type: 'input',
      templateOptions: {
        label: 'straat',
        placeholder: 'straatnaam postadres',
        required: false,
      }
    },
    {
      key: 'contact.postadres.huisnummer',
      type: 'input',
      templateOptions: {
        label: 'huisnummer',
        placeholder: 'huisnummer postadres',
        required: false,
      }
    },
    {
      key: 'contact.postadres.toevoeging',
      type: 'input',
      templateOptions: {
        label: 'toevoeging',
        placeholder: 'toevoeging postadres',
        required: false,
      }
    },
    {
      key: 'contact.postadres.postcode',
      type: 'input',
      templateOptions: {
        label: 'postcode',
        placeholder: 'postcode postadres',
        required: false,
      }
    },
    {
      key: 'contact.postadres.plaatsnaam',
      type: 'input',
      templateOptions: {
        label: 'plaatsnaam',
        placeholder: 'plaatsnaam postadres',
        required: false,
      }
    },
    {
      key: 'contact.postadres.land',
      type: 'select',
      templateOptions: {
        label: 'land',
        required: false,
        options: [
          { value: 1, label: 'Nederland' },
          { value: 2, label: 'Belgie' },
          { value: 3, label: 'Engeland' }
        ],
      },
    },
    {
      key: 'contact.postadres.provincie',
      type: 'select',
      templateOptions: {
        label: 'provincie/staat',
        required: false,
        options: [
          { value: 1, label: 'Flevoland' },
          { value: 2, label: 'Noord-holland' },
          { value: 3, label: 'Brabant' }
        ],
      },
    }, {
      key: 'contact.postadres.aanvullendeLocatieInfo',
      type: 'input',
      templateOptions: {
        label: 'aanvullende informatie',
        placeholder: 'een afdeling of verdiepingsnummer wellicht',
        required: false,
      }
    }
  ];

  fieldsContact: FormlyFieldConfig[] = [
    {
      key: 'contact.telefoon',
      type: 'input',
      templateOptions: {
        label: 'telefoon',
        placeholder: 'telefoon bedrijf',
        required: false,
      }
    },
    {
      key: 'contact.fax',
      type: 'input',
      templateOptions: {
        label: 'fax',
        placeholder: 'fax bedrijf',
        required: false,
      }
    },
    {
      key: 'contact.website',
      type: 'input',
      templateOptions: {
        label: 'website',
        placeholder: 'website bedrijf',
        required: false,
      }
    },
    {
      key: 'contact.email',
      type: 'input',
      templateOptions: {
        label: 'email',
        placeholder: 'email bedrijf',
        required: false,
      }
    }
  ];

  fieldsBank: FormlyFieldConfig[] = [
    {
      key: 'financieel.bank.valuta',
      type: 'select',
      templateOptions: {
        label: 'valuta',
        required: false,
        options: [
          { value: 1, label: 'Euro' },
          { value: 2, label: 'Dollar' },
          { value: 3, label: 'Pond' }
        ],
      },
    },
    {
      key: 'financieel.bank.bankrekeningnummer',
      type: 'input',
      templateOptions: {
        label: 'bankrekeningnummer',
        placeholder: 'bankrekeningnummer bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.bank.banknaam',
      type: 'input',
      templateOptions: {
        label: 'banknaam',
        placeholder: 'banknaam bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.bank.plaatsbank',
      type: 'input',
      templateOptions: {
        label: 'plaatsbank',
        placeholder: 'plaatsbank bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.bank.iban',
      type: 'input',
      templateOptions: {
        label: 'IBAN Code',
        placeholder: 'IBAN code bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.bank.bic',
      type: 'input',
      templateOptions: {
        label: 'BIC code',
        placeholder: 'BIC code bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.bank.giro',
      type: 'input',
      templateOptions: {
        label: 'giro',
        placeholder: 'giro bedrijf',
        required: false,
      }
    }
  ];

  fieldsBtwOmzet: FormlyFieldConfig[] = [
    {
      key: 'financieel.btw.btwBedrijfsgroep',
      type: 'input',
      templateOptions: {
        label: 'BTW bedrijfsgroep',
        placeholder: 'BTW bedrijfsgroep bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.btw.btwNummer',
      type: 'input',
      templateOptions: {
        label: 'BTW nummer',
        placeholder: 'BTW nummer bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.btw.controledatumBtwNummer',
      type: 'datepicker',
      templateOptions: {
        label: 'controledatum BTW-nummer',
        placeholder: 'datum',
        required: false,
      },
    },
    {
      key: 'financieel.omzet.omzetcode',
      type: 'input',
      templateOptions: {
        label: 'omzetcode',
        placeholder: 'omzetcode bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.omzet.kostendrager',
      type: 'input',
      templateOptions: {
        label: 'Kostendrager',
        placeholder: 'Kostendrager bedrijf',
        required: false
      }
    }
  ];

  fieldsInkoopbepalingen: FormlyFieldConfig[] = [
    {
      type: 'input',
      key: 'inkoopbetalingsconditie',
      templateOptions: {
        label: 'inkoopbetalingsconditie',
        placeholder: 'inkoopbetalingsconditie',
        required: false
      }
    },
    {
      type: 'input',
      key: 'inkoopbetalingswijze',
      templateOptions: {
        label: 'inkoopbetalingswijze',
        placeholder: 'inkoopbetalingswijze',
        required: false
      }
    },
    {
      type: 'input',
      key: 'kleinorderoptieInkoop',
      templateOptions: {
        label: 'kleinorderoptie inkoop',
        placeholder: 'kleinorderoptie inkoop',
        required: false
      }
    },
    {
      type: 'input',
      key: 'inkoopkorting',
      templateOptions: {
        label: 'inkoop korting',
        placeholder: 'inkoop korting',
        required: false
      }
    },
    {
      type: 'input',
      key: 'minimaalOrderbedragInkoop',
      templateOptions: {
        label: 'minimaal orderbedrag inkoop',
        placeholder: 'minimaal orderbedrag inkoop',
        required: false
      }
    },
    {
      type: 'input',
      key: 'kleinordertoeslagInkoop',
      templateOptions: {
        label: 'kleinordertoeslag inkoop',
        placeholder: 'kleinordertoeslag inkoop',
        required: false
      }
    },
    {
      type: 'input',
      key: 'inkoopIncoterm',
      templateOptions: {
        label: 'inkoop-incoterm',
        placeholder: 'inkoop incoterm',
        required: false
      }
    },
    {
      type: 'input',
      key: 'inkoopIncotermsplaats',
      templateOptions: {
        label: 'inkoop incotermsplaats',
        placeholder: 'inkoop incotermsplaats',
        required: false
      }
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }


  index = 0;

  constructor(private service: RelatieService, private firestore: AngularFirestore) {

  }

  ngOnInit() {

  }

  postClickAnders() {
    if (this.postAnders === true) {
      this.postAnders = false;
    } else {
      this.postAnders = true;
    }
  }


}



