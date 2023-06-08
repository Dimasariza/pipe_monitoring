import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../@theme/theme.module";
import { NbAccordionModule, NbCardModule, NbCheckboxModule, NbInputModule, NbListModule, NbMenuModule, NbSelectModule } from "@nebular/theme";
import { NgModule } from "@angular/core";
import { AssesmentRoutingModule } from "./assesment.routing";
import { AssesmentComponent } from "./assesment.component";
import { MaterialTableModule } from "../../component/mat-table/mat-table.module";
import { TopBarModule } from "../../component/top-bar/top-bar.module";
import { DemageMechanismComponent } from "./demage-mechanism/demage-mechanism.component";
import { ThicknessComponent } from "./thickness/thickness.component";
import { VisualConditionComponent } from "./visual-condition/visual-condition.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableModule } from "@angular/material/table";

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        NbMenuModule,
        AssesmentRoutingModule,
        TopBarModule,
        MaterialTableModule,
        NbCardModule,
        NbListModule,
        NbSelectModule,
        NbAccordionModule,
        NbInputModule,
        NbCheckboxModule,
        MatSlideToggleModule,
        MatTableModule, 
        MatCheckboxModule,
        MatFormFieldModule, 
        MatInputModule,
        MatSelectModule,
        MatPaginatorModule
    ],
    declarations: [
        AssesmentComponent,
        DemageMechanismComponent,
        ThicknessComponent,
        VisualConditionComponent,
    ],
  })
export class AssesmentModule { }