import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DesignRoutingModule } from './llr-routing.module';

import { DesignColorsComponent } from './colors/colors.component';
import { DesignIconsComponent } from './icons/icons.component';
import { PhmComponent } from './phm/phm.component';
import { IframeDirective } from '../../iframe.directive'

const COMPONENTS: any[] = [DesignColorsComponent, DesignIconsComponent, PhmComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, DesignRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, IframeDirective],
})
export class DesignModule { }
