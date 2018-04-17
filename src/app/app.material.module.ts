import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatTooltipModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTooltipModule
  ],
  exports: [
    MatTabsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTooltipModule
  ],
})
export class AppMaterialModule { }
