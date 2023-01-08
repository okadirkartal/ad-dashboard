import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Ad } from 'src/app/shared/ad';

@Component({
  standalone: true,
  selector: 'app-add-ad-form',
  templateUrl: './add-ad-form.component.html',
  imports: [ReactiveFormsModule],
})
export class AddAdFormComponent {
  @Output() save = new EventEmitter<Ad>();

  constructor(private fb: FormBuilder) {}

  adForm = this.fb.nonNullable.group({
    title: '',
    content: '',
  });

  handleSubmit() {
    this.save.emit(this.adForm.getRawValue());
  }
}
