import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { ReportComponent } from "./report.component";
import { ReportRoutingModule } from "./repot.routing";
import { NbButtonModule, NbCardModule, NbInputModule, NbListModule, NbOptionModule, NbSelectModule } from "@nebular/theme";
import { DashboardThicknessChart } from "./piping-assets/chart/thickness-chart.component";
import { DashboardRemainingChart } from "./piping-assets/chart/remaining-chart.component";
import { ReportPipingAssets } from "./piping-assets/report-piping-assets";
import { MaterialTableModule } from "../../component/mat-table/mat-table.module";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";
import { ReportPipingCircuit } from "./piping-circuits/report-piping-circuit";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        ReportRoutingModule,
        NbCardModule,
        NbOptionModule,
        NbSelectModule,
        NbInputModule,
        NbListModule,
        NbButtonModule,
        MaterialTableModule,
        MatSlideToggleModule,
        MatTableModule, 
        MatCheckboxModule,
        MatPaginatorModule,
        MatFormFieldModule, 
        MatInputModule,
        MatSelectModule,
        NgxQRCodeModule,
    ],
    declarations: [
        ReportComponent,
        DashboardThicknessChart,
        DashboardRemainingChart,
        ReportPipingAssets,
        ReportPipingCircuit
    ],
  })
export class ReportModule { }