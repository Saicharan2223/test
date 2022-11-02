import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl:"./person.component.html",
  styleUrls: []
})
export class PersonComponent implements OnInit {
    persons:Person[]=[]
    frmPerson:Person=new Person(1,"","","","","")
    userSearch:string="Search Persons"
  constructor() { }

  ngOnInit(): void {
    this.persons=[new Person(1,"charan","abc@gmail.com","13sep2001","male","India")]
  }
  save(){
     this.persons=[...this.persons,this.frmPerson]
     this.clearFormFields()
     let idx=this.persons.findIndex(e=>e.uid===this.frmPerson.uid)
    if(idx==-1){
       this.persons=[...this.persons,this.frmPerson]
    }
    
}
    clearFormFields(){
        this.frmPerson=new Person(this.frmPerson.uid+1,"","","","","")
    }
  }

