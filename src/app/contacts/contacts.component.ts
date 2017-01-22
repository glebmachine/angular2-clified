import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.styl']
})
export class ContactsComponent implements OnInit {
  title = 'Пример формы с валидацией!'
  model: any
  modelErrors = {}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.model = this.formBuilder.group({
      name: [ '', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      ],
      lastname: [ '', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      ],
    });

    console.log(this.model);

    this.model.valueChanges
    .subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data: any) {
    const form = this.model;
    const errors = this.modelErrors;
    const descriptions = this.errorDescriptions;

    for (var name in form.controls) {
      const control = form.controls[name];

      if (control.errors && control.dirty) {
        errors[name] = [];

        for (var error in control.errors) {
          let description = false;

          if (descriptions[name] && descriptions[name][error]) {
            description = descriptions[name][error];
          }

          if (!description && descriptions.default && descriptions.default[error]) {
            description = descriptions.default[error];
          }

          if (!description) {
            throw `У филда "${name}" нет описания ошибки "${error}"`;
          }

          errors[name].push(description);
        }
      } else {
        delete errors[name];
      }
    }
  }

  onSubmit() {

  }

  errorDescriptions = {
    default: {
      required: 'Поле обязательно для заполнения',
      minlength: 'Минимальное количество символов',
      maxlength: 'Максимальное количество символов',
    },
    name: {
      minlength: 'Имя никак не может быть меньше 4х символов',
    }
  }
}
