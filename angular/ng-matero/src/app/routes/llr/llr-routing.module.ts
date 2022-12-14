import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignColorsComponent } from './colors/colors.component';
import { DesignIconsComponent } from './icons/icons.component';
import { PhmComponent } from './phm/phm.component';

const routes: Routes = [
  { path: 'color', component: DesignColorsComponent },
  { path: 'icons', component: DesignIconsComponent },
  { path: 'phm', component: PhmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignRoutingModule { }
