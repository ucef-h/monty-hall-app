import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { MontyAppFormComponent } from './monty-app-form/monty-app-form.component';
import { MontyAppComponent } from './monty-app.component';
import { MontyAppListComponent } from './monty-app-list/monty-app-list.component';

@NgModule({
  declarations: [MontyAppComponent, MontyAppFormComponent, MontyAppListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ToggleButtonModule,
    CheckboxModule,
    ButtonModule,
    ListboxModule,
  ],
})
export class MontyAppModule {}
