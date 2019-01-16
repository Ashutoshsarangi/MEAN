import { NgModule } from '@angular/core';

import { MatInputModule, MatToolbarModule, MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [MatInputModule, MatToolbarModule, MatCardModule, FlexLayoutModule],
  exports: [MatInputModule, MatToolbarModule, MatCardModule, FlexLayoutModule],
})
export class materialDesign { }