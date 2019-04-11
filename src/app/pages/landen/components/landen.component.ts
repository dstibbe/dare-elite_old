import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LandenService } from '../services/landen.service';
import { Land } from '../models/land.model';
import { tap } from 'rxjs/operators';
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
  dataSource: MatTableDataSource<any>;;
  @ViewChild(MatSort) sort: MatSort;
  totalLengthRows: number;
  selectedRowIndex: number;
  selectedRow: any;

  constructor(private service: LandenService, private firestore: AngularFirestore) {

  }

  ngOnInit() {

    this.service.getLanden().subscribe(actionArray => {
      let array = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Land;
      })
      this.dataSource = new MatTableDataSource(array);
      this.dataSource.sort = this.sort;
      console.log('list of landen', array);
      this.totalLengthRows = array.length

    });
  }

  selectRow(row) {
    this.selectedRow = row;
    console.log('selectRow', this.selectedRow);
}


  onEdit(data: Land) {
    // this.service.formData = Object.assign({}, data);
  }

  onDelete(id: string) {
    this.firestore.doc('landen/' + id).delete();
  }

  form = new FormGroup({});

  model = [{ 
    code: 'NL',
    naam: 'Nederland' 
  }];

  fields: FormlyFieldConfig[] = [{
    key: 'code',
    type: 'input',
    templateOptions: {
      label: 'code',
      placeholder: 'enter land code',
      required: true,
    }
  },
  {
    key: 'naam',
    type: 'input',
    templateOptions: {
      label: 'naam',
      placeholder: 'enter naam van land',
      required: true,
    }
  }
];

  submit(model) {
    console.log(model);
  }

}


