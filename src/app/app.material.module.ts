import { NgModule } from '@angular/core'
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
  MatSelectModule
} from '@angular/material'

@NgModule({
  imports: [
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
