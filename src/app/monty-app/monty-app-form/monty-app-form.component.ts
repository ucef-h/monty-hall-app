import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-monty-app-form',
  templateUrl: './monty-app-form.component.html',
  styleUrls: ['./monty-app-form.component.css'],
})
export class MontyAppFormComponent implements OnInit {
  form: FormGroup;

  @Output() formSubmit: EventEmitter<any>;

  constructor(formBuilder: FormBuilder) {
    this.formSubmit = new EventEmitter<any>();
    this.form = formBuilder.group({
      numberOfGames: formBuilder.control(Number(0), Validators.required),
      switchDoor: formBuilder.control(false),
    });
  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm() {
    this.form.reset({ numberOfGames: Number(0), switchDoor: false });
  }

  submitForm() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}
