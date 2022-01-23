import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontyAppComponent } from './monty-app/monty-app.component';

const routes: Routes = [{ path: '', component: MontyAppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
