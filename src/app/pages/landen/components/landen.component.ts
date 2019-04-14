import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {LandenService} from '../services/landen.service';
import {Land} from '../models/land.model';
import {MatSort, MatTableDataSource} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
  selector: 'dare-landen',
  templateUrl: './landen.component.html',
  styleUrls: ['./landen.component.scss']
})
export class LandenComponent implements OnInit {

  displayedColumns: string[] = ['isoAlpha2', 'naam', 'postcodemasker'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  totalLengthRows: number;
  selectedRowIndex: number;
  selectedRow: any;
  selectedIndex: number = 0;

  form = new FormGroup({});
  options: FormlyFormOptions = {};
  tabTitle: string;
  newModel: boolean;

  model:Land = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'id',
      type: 'input',
      className: 'display-none',
      templateOptions: {
        label: 'id',
        placeholder: 'id',
        required: false,
      }
    }, {
      key: 'isoAlpha2',
      type: 'input',
      templateOptions: {
        label: 'ISO Alpha-2',
        required: false,
        placeholder: 'landcode',
      }
    }, {
      key: 'postcodemasker',
      type: 'input',
      templateOptions: {
        label: 'Postcodemasker',
        required: false,
        placeholder: 'voorbeeld masker: [0-9]{4}[A-Z]{2}',
      }
    }, {
      key: 'naam',
      type: 'input',
      templateOptions: {
        label: 'naam',
        placeholder: 'enter naam van land',
        required: false,
      }
    }
  ];

  constructor(private service: LandenService, private firestore: AngularFirestore) {

  }

  ngOnInit() {

    this.service.getLanden().subscribe(actionArray => {
      const array = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Land;
      });
      this.dataSource = new MatTableDataSource(array);
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = function (data, filter: string): boolean {
        return data.isoAlpha2.toLowerCase().includes(filter) || data.naam.toLowerCase().includes(filter);
      };
      console.log('list of landen', array);
      this.totalLengthRows = array.length - 1;
      this.tabTitle = 'nieuw';
      this.newModel = true;
    });
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  clickMe() {
    this.selectedIndex = 0;
    this.selectedRow = null
  }

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
  }

  selectRow(row: { [key: string]: any; }) {
    this.selectedRow = row;
    this.form.patchValue(row);
    console.log('row', row);
    this.tabTitle = 'Edit';
    this.newModel = false;

  }

  // nog niet gedaan
  onDelete(id: string) {
    this.firestore.doc('landen/' + id).delete();
  }

  resetForm() {
    this.options.resetModel()
    this.tabTitle = 'nieuw';
    this.newModel = true;
    this.clickMe()
  }


  submit(model) {
    let data = Object.assign({}, model);
    delete data.id;
    if (this.newModel) {
      this.firestore.collection('events').add(
        {
          type: 'countryDefined',
          details: {
            ...model
          }
        }
      );
    } else {
      this.firestore.collection('events').add(
        {
          type: 'countryUpdated',
          details: {
            ...model
          }
        }
      );
    }
    this.options.resetModel()
    this.clickMe()
  }

}



