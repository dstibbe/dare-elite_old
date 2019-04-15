import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchPipe } from './search/user-search.pipe';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        UserSearchPipe,
    ],
    exports: [
        UserSearchPipe,
    ]
})

export class PipesModule { }
