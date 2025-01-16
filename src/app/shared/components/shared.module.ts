// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { UserFormComponent } from './user-form/user-form.component'
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DateFormatPipe } from '../pipes/date-format.pipe';

@NgModule({
  declarations: [
    UserFormComponent,
    ConfirmationDialogComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    UserFormComponent,
    ConfirmationDialogComponent,
    DateFormatPipe,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class SharedModule { }