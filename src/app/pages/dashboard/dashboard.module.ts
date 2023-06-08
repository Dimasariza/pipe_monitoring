import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../@theme/theme.module";
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbOptionModule, NbSelectModule } from "@nebular/theme";
import { NgModule } from "@angular/core";
import { DashboardsRoutingModule } from "./dashboard.routing";
import { DashboardComponent } from "./dashboard.component";
import { TopBarModule } from "../../component/top-bar/top-bar.module";
import { PipingAssetsComponent } from "./piping-assets/piping-assets.component";
import { PipingCircuitsComponent } from "./piping-circuits/piping-circuits.component";
import { ViewProposalComponent } from "./view-proposal/view-proposal.component";
import { MaterialTableModule } from "../../component/mat-table/mat-table.module";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";
import { AddAssetsComponent } from './piping-assets/add-assets/add-assets.component';
import { FormsModule } from "@angular/forms";
import { AddCircuitComponent } from "./piping-circuits/add-circuit/add-circuit.component";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        NbMenuModule,
        NbCardModule,
        NbOptionModule,
        NbSelectModule,
        NbAccordionModule,
        NbInputModule,
        NbDatepickerModule,
        NbButtonModule,
        NgxQRCodeModule,
        FormsModule,
        NbIconModule,
        DashboardsRoutingModule,
        TopBarModule,
        MaterialTableModule,
        MatSlideToggleModule,
        MatTableModule, 
        MatCheckboxModule,
        MatPaginatorModule,
        MatFormFieldModule, 
        MatInputModule,
        MatSelectModule,
    ],
    declarations: [
      DashboardComponent,
      PipingAssetsComponent,
      PipingCircuitsComponent,
      ViewProposalComponent,
      AddAssetsComponent,
      AddCircuitComponent
    ],
  })
export class DashboardModule { }