import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl:"./user.component.html" 
    
  ,
  styleUrls: []
})
export class UserComponent implements OnInit,OnDestroy {
  users:User[]=[]
  frmUser:User=new User("","","")
  filterUsers=this.users
  usersDataSubscription:Subscription={} as Subscription;
  userSearch:string="Search Users"
  constructor(private userSvc:UserService) { }
  ngOnDestroy(): void {
    this.usersDataSubscription.unsubscribe()
    console.log("Unsubscribe DONE")
  }

  ngOnInit(): void {
    //this.users=this.userSvc.getUsersData()
    this.usersDataSubscription=this.userSvc.currentUserData.subscribe({
      next:data=>this.users=data
    })
    this.filterUsers=this.users
  }
  // save(uid:string,uname:string,role:string)
  // {
  //   console.log(`Id: ${uid} UserName: ${uname} Role: ${role}`)
  // }
  save(){
   // this.users=[...this.users,this.frmUser]
    //this.clearFormFields()
    let idx=this.users.findIndex(e=>e.uid===this.frmUser.uid)
    if(idx==-1){
      console.log("user added")
      this.userSvc.addUserData(this.frmUser)
    }else{
      //this.users=[...this.users.slice(0,idx),this.frmUser,...this.users.slice(idx+1)]
      this.userSvc.updateUserData(this.frmUser,idx)
    }
    this.clearFormFields()
    this.filterUsers=this.users
  }
  clearFormFields(){
    this.frmUser=new User("","","")
  }
  delete(idx:number)
  {
    //console.log("Delete...")
    //this.users=[...this.users.slice(0,idx),...this.users.slice(idx+1)]
    this.userSvc.deleteUserData(idx)
    this.filterUsers=this.users
  }
  edit(user:User)
  {
    //this.frmUser=user;

  Object.assign(this.frmUser,user)
  }
  handleEvent(searchData:string){
    //console.log("User Component: ",searchData)
    if(searchData!=""){this.filterUsers=this.users.filter(e=>e.uname===searchData)}
    else{
      this.filterUsers=this.users
    }
  }
  }


