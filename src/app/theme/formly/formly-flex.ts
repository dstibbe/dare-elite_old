import { Component } from '@angular/core';
import { FormlyForm } from '@ngx-formly/core';

@Component({
  selector: 'formly-form-flex',
  template: `
    <div class="content" fxLayout="row wrap">
      <formly-field *ngFor="let field of fields"
        [fxFlex]="field.templateOptions.fxFlex"
        [field]="field"
        style="padding-right: 10px"
        [ngClass]="field.className">
      </formly-field>
    </div>
    
    <ng-content></ng-content>
  `,
})
export class FormlyFormFlexLayout extends FormlyForm {
}