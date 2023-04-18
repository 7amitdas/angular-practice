import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-form-practice',
  templateUrl: './ng-form-practice.component.html',
  styleUrls: ['./ng-form-practice.component.css'],
})
export class NgFormPracticeComponent {
  @ViewChild('formData') myForm: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '';
  genders: string[] = ['Male', 'Female', 'Others'];
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };
  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.myForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'Male'
    // });
    this.myForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(formData: NgForm) {
  //   console.log(formData);
  // }

  onReset() {
    this.myForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.myForm);
    this.user.username = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.email;
    this.user.question = this.myForm.value.secret;
    this.user.answer = this.myForm.value.questionAnswer;
    this.user.gender = this.myForm.value.gender;

    this.myForm.reset();
  }
}