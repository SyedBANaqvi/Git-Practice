import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { validateBasis } from '@angular/flex-layout';
import { FormControl, FormGroup, NgForm, Validators,FormGroupDirective, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs/internal/operators/map';
import{MessageAlert} from '../messagealert/messagealert.service'
// import { debounce } from 'rxjs';
// import { ElementOfForm } from '../element-of-form';

interface division{
  value:string;
  viewValue:string;
} 

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-student-enroll',
  templateUrl: './student-enroll.component.html',
  styleUrls: ['./student-enroll.component.css']
})
export class StudentEnrollComponent implements OnInit {
  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ["Afghanistan","Albania","Algeria","American Samoa","Antarctica",
      "Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan"],
    },
    {
      letter: 'B',
      names: ["Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan",
      "Botswana","Bouvet Island","Brazil","Bulgaria","Burundi"],
    },
    {
      letter: 'C',
      names: ["Cambodia","Cameroon","Canada","Chad","Chile","China","Christmas Island", "Colombia",
      "Comoros","Congo (the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia"],
    },
    {
      letter: 'D',
      names: ["Denmark","Djibouti","Dominica","Dominican Republic",],
    },
    {
      letter: 'E',
      names: ["Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",],
    },
    {
      letter: 'F',
      names: ["Falkland Islands [Malvinas]","Faroe Islands ",
      "Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories"],
    },
    {
      letter: 'G',
      names: ["Gabon","Gambia ","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada",
      "Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana"],
    },
    {
      letter: 'H',
      names: ["Haiti", "Heard Island and McDonald Islands","Holy See",
      "Honduras","Hong Kong","Hungary",],
    },
    {
      letter: 'I',
      names: ["Iceland","India","Indonesia", "Iran (Islamic Republic of)","Iraq",
      "Ireland","Isle of Man","Italy"],
    },
    {
      letter: 'J',
      names: ["Jamaica","Japan","Jersey","Jordan"],
    },
    {
      letter: 'K',
      names: ["Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)",
      "Korea (the Republic of)","Kuwait","Kyrgyzstan"],
    },
    {
      letter: 'L',
      names: ["Lao People's Democratic Republic (the)","Latvia","Lebanon",
      "Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg"],
    },
    {
      letter: 'M',
      names: ["Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania",
	            "Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco",
	            "Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar"
      ],
    },
    {
      letter: 'N',
      names: ["Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue",
              "Norfolk Island","Northern Mariana Islands (the)","Norway",
      ],
    },
    {
      letter: 'O',
      names: ["Oman"],
    },
    {
      letter: 'P',
      names: ["Pakistan","Palau","Palestine, State of","Panama",
              "Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico",],
    },
    {
      letter: 'Q',
      names: ['Qatar'],
    },
    {
      letter: 'R',
      names: ["Republic of North Macedonia","Romania","Russian Federation","Réunion",],
    },
    {
      letter: 'S',
      names: ["Samoa","San Marino","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia",
      "Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland",
      "Syrian Arab Republic",],
    },
    {
      letter: 'T',
      names: ["Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste",
      "Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",],
    },
    {
      letter: 'U',
      names: ["Uganda","Ukraine","Uruguay","Uzbekistan",
      "United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America (the)"],
    },
    {
      letter: 'V',
      names: ["Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam",],
    },
    {
      letter: 'W',
      names: ["Wallis and Futuna","Western Sahara",],
    },
    {
      letter: 'Y',
      names: ['Yemen'],
    },
    {
      letter: 'Z',
      names: ["Zambia","Zimbabwe"],
    },
  ];
  stateGroupOptions: Observable<StateGroup[]>;

  enrollmentReactiveForm: FormGroup;
  public pushCount = 0;

  public number = '23421342142';
  public dataRecieved = false;
  
  
  topics: division[]=[
    {value: '1st Division -0' ,viewValue:'1st Division ' },
    {value: '2ns Division -1' ,viewValue:'2nd Division'},
    {value: '3rd Division -2' ,viewValue:'3rd Division' },
  ];
  minDate: Date;
  maxDate: Date;
  constructor() { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 40, 0, 1);
    this.maxDate = new Date(currentYear - 15, 11, 31);
  }
    get recordControls(){
      return (<FormArray> this.enrollmentReactiveForm.get('record')).controls;
    }

  ngOnInit(): void {
    this.enrollmentReactiveForm=new FormGroup({
      'programName':new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'programCode':new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'firstName':new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'lastName':new FormControl(null,Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')),
      'fatherName':new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'DOB':new FormControl(null,Validators.required),
      'placeOfBirth':new FormControl(null,[Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'gender':new FormControl(null,Validators.required),
      'telephone':new FormControl(null,[Validators.required,Validators.pattern('[0-9 ()-]*')]),
      'mobile':this.dataRecieved == true? new FormControl(this.number,[Validators.required,Validators.pattern('[0-9 ()-]*')]):new FormControl(null,[Validators.required,Validators.pattern('[0-9 ()-]*')]),
      'email':new FormControl(null,[Validators.required,Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      'nationality':new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*'),Validators.minLength(3)]),
      'domicile':new FormControl(null,[Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'religion':new FormControl(null,[Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*')]),
      'parmanentAddress':new FormControl(null, [Validators.required, Validators.minLength(10),Validators.maxLength(200)]),
      'presentAddress':new FormControl(null, [Validators.required, Validators.minLength(10),Validators.maxLength(200)]),
      'guardianOccupation':new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(20)]),
      'guardianName':new FormControl(null,[Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*'), Validators.minLength(3)]),
      'relation':new FormControl(null,[Validators.pattern('[a-zA-Z]+([ ]+[a-zA-Z]*)*'), Validators.minLength(3)]),
      'guardianMobile':new FormControl(null,[Validators.required,Validators.pattern('[0-9 ()-]*')]),

      'record':new FormArray([
      ])
    });

    this.stateGroupOptions = this.enrollmentReactiveForm.get('nationality')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );
   }
   OnAddRecord(){
     if(this.pushCount <=2)
     {
       this.pushCount++;
      const control=new FormControl(null,[Validators.required]);
      (<FormArray> this.enrollmentReactiveForm.get('record')).push(control);
     }

   }
   OnRemoveRecord(i:number){
     (<FormArray>this.enrollmentReactiveForm.get('record')).removeAt(i);
   }

 OnSubmit(){
  //  console.log(this.enrollmentReactiveForm)
   const alert1= new MessageAlert();
   alert1.showmessage();

 }
 

 private _filterGroup(value: string): StateGroup[] {
  if (value) {
    return this.stateGroups
      .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
      .filter(group => group.names.length > 0);
  }

  return this.stateGroups;
}
 phoneMask=['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
















 // checkStuff()
 // {
 //   enrollmentReactiveForm.hasError('email') && !enrollmentReactiveForm.hasError('required')
 //   console.log("email is ",this.enrollmentReactiveForm.hasError('email'))
 //   console.log("required is ", this.enrollmentReactiveForm.hasError('required'))
 //   return( this.enrollmentReactiveForm.hasError('email') && !this.enrollmentReactiveForm.hasError('required'));

 // }








 // [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$

 // Dob(execution:any){
 //   let formContext=execution.getformContext();
 //   let birthDate=formContext.getAttribute('DOB').getValue();
 //   let today=new Date();
 //   let validMinDate=new Date(
 //     today.getFullYear()-18,
 //     today.getMonth(),
 //     today.getDate(),
 //     today.getHours(),
 //     today.getMinutes()),

 //     let birthDateFieldControl =formContext.getControl('DOB');
 //     if(birthDate>validMinDate){
 //       birthDateFieldControl.setNotification("minimum age must be 18")
 //     }


 // }
 // ss(){
 // this.age.name=new this.age().transform(this.year.name)
 //   if(this.age.name<15){
 //     console.log("Error")
 //   }
 // }
}



