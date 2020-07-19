import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';
import { TreeComponent } from './tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    TreeRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TreeModule { }
