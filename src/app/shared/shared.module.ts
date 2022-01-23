import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HttpService } from './services/http.service';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, HttpClientModule, DialogModule, ButtonModule],
  providers: [HttpService],
  exports: [DialogComponent],
})
export class SharedModule {}
