import {NgModule} from '@angular/core';

import {
MatCardModule,
MatSidenavModule,
MatListModule,
MatTableModule,
MatNativeDateModule,
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatProgressSpinnerModule,
MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatGridListModule,
  ],
  exports: [
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatGridListModule,
  ]
})
export class MaterialModule {}