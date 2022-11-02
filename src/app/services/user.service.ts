import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersData:User[]=[]
  private usersBS=new BehaviorSubject(this.usersData)
  currentUserData=this.usersBS.asObservable()
  constructor() {
    this.usersData=[new User("A101","Dev","admin"),new User("A201","Krishna","manager"),new User("B301","Charan","Employee")]
    this.usersBS.next(this.usersData)
   }
   getUsersData(){
    return this.usersData
   }
   addUserData(newUser:User){
    console.log(" Service Add User")
    this.usersData=[...this.usersData,newUser]
    this.usersBS.next(this.usersData)
   }
   updateUserData(modifiedUser:User,idx:number){
    this.usersData=[...this.usersData.slice(0,idx),modifiedUser,...this.usersData.slice(idx+1)]
    this.usersBS.next(this.usersData)
   }
   deleteUserData(idx:number){
    this.usersData=[...this.usersData.slice(0,idx),...this.usersData.slice(idx+1)]
    this.usersBS.next(this.usersData)
   }
}
