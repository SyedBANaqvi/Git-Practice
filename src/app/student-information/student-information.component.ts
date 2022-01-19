import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { validateBasis } from '@angular/flex-layout';
import { FormControl, FormGroup, NgForm, Validators,FormGroupDirective, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs/internal/operators/map';
import{MessageAlert} from '../messagealert/messagealert.service'
import { StudentData } from './data/student';
import { StudentCourses } from './data/Courses';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {
  enrollmentReactiveForm: FormGroup;
  public obj;
  public obj1;
  public TotalHeld;
  public TotalPresent;
  public TotalAbsent;
  public TotalCreditHours;
  constructor() {
    this.obj= new StudentData();
    this.obj1=new StudentCourses();
    console.log(this.obj.data)

    // console.log(this.obj1);
    // this.TotalHeld=this.sum + this.obj1;

  }
  addTotalHeld(){
    let sum=0;
    console.log("totalHeldid", this.TotalHeld,this.obj1.courses[0]);
    for(let obj of this.obj1.courses)
    {
      sum += obj.heldClasses;
    }

    this.TotalHeld=sum;

    return this.TotalHeld;
  }
  addTotalPresent(){
    let sum=0;
    // console.log( this.TotalPresent,this.obj1.courses[0]);
    for(let obj of this.obj1.courses)
    {
      sum += obj.present;
    }

    this.TotalPresent=sum;

    return this.TotalPresent;
  }
  addTotalAbsent(){
    let sum=0;
   for(let obj of this.obj1.courses)
   {
     sum +=obj.absent
   }
   this.TotalAbsent=sum;
   return this.TotalAbsent;
  }
  addTotalCreditsHours(){
    let sum=0;
   for(let obj of this.obj1.courses)
   {
     sum +=obj.creditHours
   }
   this.TotalCreditHours=sum;
   return this.TotalCreditHours;
  }

  ngOnInit(): void {

    this.enrollmentReactiveForm=new FormGroup({
      'program':new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'name':new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'mobile':new FormControl(null,[Validators.required,Validators.pattern('[0-9 ()-]*')]),
      'CNIC':new FormControl(null,[Validators.required,Validators.pattern('[0-9 ()-]*')]),
      'email':new FormControl(null,[Validators.required,Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      'fatherName':new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'fatherMobile':new FormControl(null,[Validators.required,Validators.pattern('[0-9 ()-]*')]),
      'fatherEmail':new FormControl(null,[Validators.required,Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      'domicileCity':new FormControl(null,[Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'province':new FormControl(null,[Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'quota':new FormControl(null,[Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),

  });

  }
  OnSubmit(){
     console.log(this.enrollmentReactiveForm)
    //  const alert1= new MessageAlert();
    //  alert1.showmessage();

   }
  phoneMask=['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
