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


  form = new FormGroup({});
  model: any = {}
  fieldsTopSection1: FormlyFieldConfig[] = [
    {
      type: 'input',
      key: 'id',
      templateOptions: {
        label: 'id',
        placeholder: 'id'
      }
    },
    {
      type: 'input',
      key: 'naam',
      templateOptions: {
        type: 'text',
        placeholder: 'Naam van bedrijf'
      }
    },
    {
      type: 'input',
      key: 'relatietype',
      templateOptions: {
        label: 'relatietype',
        placeholder: 'type van de relatie'
      }
    }
  ];

  fieldsTopSection2: FormlyFieldConfig[] = [
    {
      type: 'input',
      key: 'financieleStatus',
      templateOptions: {
        label: 'financiele Status',
        placeholder: 'financiele status'
      }
    },
    {
      type: 'input',
      key: 'geblokkeerd',
      templateOptions: {
        label: 'geblokkeerd',
        placeholder: 'relatie is geblokkeerd'
      }
    },
  ];

  fieldsBezoekadres: FormlyFieldConfig[] = [
    {
      key: 'contact.bezoekadres.straat',
      type: 'input',
      templateOptions: {
        label: 'straat',
        placeholder: 'straatnaam bezoekadres',
        required: false,
      }
    },
    {
      key: 'contact.bezoekadres.huisnummer',
      type: 'input',
      templateOptions: {
        label: 'huisnummer',
        placeholder: 'huisnummer bezoekadres',
        required: false,
      }
    },
    {
      key: 'contact.bezoekadres.toevoeging',
      type: 'input',
      templateOptions: {
        label: 'toevoeging',
        placeholder: 'toevoeging bezoekadres',
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
      type: 'input',
      templateOptions: {
        label: 'land',
        placeholder: 'land bezoekadres',
        required: false,
      }
    },
    {
      key: 'contact.bezoekadres.provincie',
      type: 'input',
      templateOptions: {
        label: 'provincie',
        placeholder: 'provincie bezoekadres',
        required: false,
      }
    },
    {
      key: 'contact.bezoekadres.aanvullendeLocatieInfo',
      type: 'input',
      templateOptions: {
        label: 'aanvullende informatie',
        placeholder: 'een afdeling of verdiepingsnummer wellicht',
        required: false,
      }
    },
    {
      key: 'contact.bezoekadres.bezoekIsAndersDanPost',
      type: 'input',
      templateOptions: {
        label: 'provincie',
        placeholder: 'provincie bezoekadres',
        required: false,
      }
    },
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
      type: 'input',
      templateOptions: {
        label: 'land',
        placeholder: 'land postadres',
        required: false,
      }
    },
    {
      key: 'contact.postadres.provincie',
      type: 'input',
      templateOptions: {
        label: 'provincie',
        placeholder: 'provincie postadres',
        required: false,
      }
    },
    {
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
      key: 'financieel.valuta',
      type: 'input',
      templateOptions: {
        label: 'valuta',
        placeholder: 'valuta bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.bankrekeningnummer',
      type: 'input',
      templateOptions: {
        label: 'bankrekeningnummer',
        placeholder: 'bankrekeningnummer bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.banknaam',
      type: 'input',
      templateOptions: {
        label: 'banknaam',
        placeholder: 'banknaam bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.plaatsbank',
      type: 'input',
      templateOptions: {
        label: 'plaatsbank',
        placeholder: 'plaatsbank bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.iban',
      type: 'input',
      templateOptions: {
        label: 'IBAN Code',
        placeholder: 'IBAN code bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.bic',
      type: 'input',
      templateOptions: {
        label: 'BIC code',
        placeholder: 'BIC code bedrijf',
        required: false,
      }
    },
    {
      key: 'financieel.giro',
      type: 'input',
      templateOptions: {
        label: 'giro',
        placeholder: 'giro bedrijf',
        required: false,
      }
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }



  constructor(private service: RelatieService, private firestore: AngularFirestore) {

  }

  ngOnInit() {

  }


}



