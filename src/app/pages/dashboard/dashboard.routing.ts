import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { PipingAssetsComponent } from "./piping-assets/piping-assets.component";
import { PipingCircuitsComponent } from "./piping-circuits/piping-circuits.component";
import { ViewProposalComponent } from "./view-proposal/view-proposal.component";

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'piping-assets',
        component : PipingAssetsComponent
      },
      {
        path: 'piping-circuits',
        component : PipingCircuitsComponent
      },
      {
        path: 'view-proposal',
        component : ViewProposalComponent
      },
    ],
}];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardsRoutingModule { }