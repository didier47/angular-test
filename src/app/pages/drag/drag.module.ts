import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragRoutingModule } from './drag-routing.module';
import { DragComponent } from './drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [DragComponent],
  imports: [
    CommonModule,
    DragRoutingModule,
    DragDropModule
  ]
})
export class DragModule { }
