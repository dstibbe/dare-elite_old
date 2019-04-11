import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LandenService } from '../services/landen.service';
import { Land } from '../models/land.model';
import { MatSort, MatTableDataSource } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'dare-landen',
  templateUrl: './landen.component.html',
  styleUrls: ['./landen.component.scss']
})
export class LandenComponent implements OnInit {

  displayedColumns: string[] = ['index', 'code', 'naam'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  totalLengthRows: number;
  selectedRowIndex: number;
  selectedRow: any;
  selectedIndex:number=0;

  form = new FormGroup({});
  options: FormlyFormOptions = {};
  tabTitle: string;

  model = [{
    id: null,
    code: 'NL',
    naam: 'Nederland'
  }];

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
    key: 'code',
    type: 'input',
    templateOptions: {
      label: 'code',
      placeholder: 'enter land code',
      required: true,
    }
  }, {
    key: 'naam',
    type: 'input',
    templateOptions: {
      label: 'naam',
      placeholder: 'enter naam van land',
      required: true,
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
      })
      this.dataSource = new MatTableDataSource(array);
      this.dataSource.sort = this.sort;
      console.log('list of landen', array);
      this.totalLengthRows = array.length;
      this.tabTitle = 'nieuw'
    });
  }


  clickMe() {
    this.selectedIndex=0;
    this.selectedRow = null
  }

  selectedIndexChange(val: number){
    this.selectedIndex=val;
  }

  selectRow(row: { [key: string]: any; }) {
    this.selectedRow = row
    this.form.patchValue(row);
    console.log('row', row);
    if (row.id !== null) {
      this.tabTitle = 'Edit'
    }else {
      this.tabTitle = 'nieuw'
    }
  }


  onDelete(id: string) {
    this.firestore.doc('landen/' + id).delete();
  }



  submit(model) {
    console.log('model from submit', model);
    let data = Object.assign({}, model);
    console.log('data from submit', data);
    delete data.id;
    console.log('after del data from submit', data);
    console.log('after del model from submit', model);
    if (model.id == null)
      this.firestore.collection('landen').add(data);
    else
      this.firestore.doc('landen/' + model.id).update(data);
    this.options.resetModel()
    this.clickMe()
  }

}



