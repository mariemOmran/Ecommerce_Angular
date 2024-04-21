import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Istudent } from './iStudent';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-student',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './table-student.component.html',
  styleUrl: './table-student.component.css'
})
export class TableStudentComponent {
  static currentId = 5;
students:Istudent[];
constructor(){
  this.students=[
    {
      id:1,name:"alaa",age:24
    },
    {
      id:2,name:"mariem",age:24
    },{
      id:3,name:"Ola",age:26
    },{
      id:4,name:"Islam",age:28
    },
  ]
 
}
flag:boolean = false;
inputName:string="";
inputAge:string="";
IdEditeOrDelete:number=0;
valueAgeEdDe:string=""
addStudnet(){
  const nameDoesNotExist = this.students.every(student => student.name !== this.inputName);
  const ageDoesNotExist = this.students.every(student => student.age !== parseInt(this.inputAge));
  if(nameDoesNotExist&&ageDoesNotExist){
    const student: Istudent = {
      id: TableStudentComponent.currentId++,
     name:this.inputName,
     age:parseInt(this.inputAge)
    };
    this.students.push(student);
  }
}

edite(id:number){
  this.IdEditeOrDelete=id;
 const std  = this.students.find(item=>item.id==id);
 this.inputName=std?std.name:"";
 this.inputAge=std?String(std.age):"";
}
delete(id:number){
  console.log("delete",id);
  this.IdEditeOrDelete=id;

  this.students = this.students.filter((e)=> e.id!==this.IdEditeOrDelete)

}
saveChanges(){
  const index  = this.students.findIndex(item=>item.id==this.IdEditeOrDelete);
  this.students[index].name= this.inputName;
  this.students[index].age= parseInt(this.inputAge);
  this.inputAge="";
  this.inputName="";
}
}

