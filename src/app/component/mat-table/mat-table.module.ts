import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../@theme/theme.module";
import { NgModule } from "@angular/core";
import { MatTableComponent } from "./mat-table.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { NbCardModule, NbOptionModule, NbSelectModule } from "@nebular/theme";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        MatSlideToggleModule,
        MatTableModule, 
        MatCheckboxModule,
        MatPaginatorModule,
        MatFormFieldModule, 
        MatInputModule,
        NbOptionModule,
        NbSelectModule,
        NbCardModule
    ],
    declarations: [
        MatTableComponent,
    ],
    exports : [
        MatTableComponent
    ]
  })
export class MaterialTableModule { }