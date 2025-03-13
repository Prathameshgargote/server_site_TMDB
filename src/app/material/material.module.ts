import { NgModule } from '@angular/core';
import {CommonModule}from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';

const MatArr=[
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
]



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    [...MatArr]
  ],
  exports:[

    [...MatArr]
  ]

})
export class materialmodule { }
