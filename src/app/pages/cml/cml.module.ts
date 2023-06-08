import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../@theme/theme.module";
import { NgModule } from "@angular/core";
import { CmlComponent } from "./cml.component";
import { CMLRoutingModule } from "./cml-routing.module";
import { TopBarModule } from "../../component/top-bar/top-bar.module";
import { MaterialTableModule } from "../../component/mat-table/mat-table.module";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        CMLRoutingModule,
        TopBarModule,
        MaterialTableModule
    ],
    declarations: [
        CmlComponent
    ],
  })
export class CMLModule { }