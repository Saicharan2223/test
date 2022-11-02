"use strict";(self.webpackChunkmyngproject=self.webpackChunkmyngproject||[]).push([[690],{690:(P,m,i)=>{i.r(m),i.d(m,{UserModule:()=>x});var l=i(808);class c{constructor(o,t,n){this.uid=o,this.uname=t,this.urole=n}}var e=i(223),_=i(135);let U=(()=>{class r{constructor(){this.usersData=[],this.usersBS=new _.X(this.usersData),this.currentUserData=this.usersBS.asObservable(),this.usersData=[new c("A101","Dev","admin"),new c("A201","Krishna","manager"),new c("B301","Charan","Employee")],this.usersBS.next(this.usersData)}getUsersData(){return this.usersData}addUserData(t){console.log(" Service Add User"),this.usersData=[...this.usersData,t],this.usersBS.next(this.usersData)}updateUserData(t,n){this.usersData=[...this.usersData.slice(0,n),t,...this.usersData.slice(n+1)],this.usersBS.next(this.usersData)}deleteUserData(t){this.usersData=[...this.usersData.slice(0,t),...this.usersData.slice(t+1)],this.usersBS.next(this.usersData)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var u=i(382);let g=(()=>{class r{constructor(){this.searchVal="",this.searchLabel="",this.searchEvent=new e.vpe}handleSearch(){this.searchEvent.emit(this.searchVal)}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["search-text"]],inputs:{searchLabel:"searchLabel"},outputs:{searchEvent:"searchEvent"},decls:4,vars:2,consts:[["type","text",3,"ngModel","ngModelChange"],[1,"btn","btn-info",3,"click"]],template:function(t,n){1&t&&(e._uU(0),e.TgZ(1,"input",0),e.NdJ("ngModelChange",function(s){return n.searchVal=s}),e.qZA(),e.TgZ(2,"button",1),e.NdJ("click",function(){return n.handleSearch()}),e._uU(3,"Go"),e.qZA()),2&t&&(e.hij(" ",n.searchLabel,": "),e.xp6(1),e.Q6J("ngModel",n.searchVal))},directives:[u.Fj,u.JJ,u.On],encapsulation:2}),r})();function f(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"button",9),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().edit(s)}),e._uU(9,"Edit"),e.qZA(),e._uU(10,"\xa0\xa0 "),e.TgZ(11,"button",10),e.NdJ("click",function(){const s=e.CHM(t).index;return e.oxw().delete(s)}),e._uU(12,"Delete"),e.qZA()()()}if(2&r){const t=o.$implicit;e.xp6(2),e.Oqu(t.uid),e.xp6(2),e.Oqu(t.uname),e.xp6(2),e.Oqu(t.urole)}}function Z(r,o){1&r&&(e.TgZ(0,"tr")(1,"td",11),e._uU(2,"No Data Found"),e.qZA()())}let C=(()=>{class r{constructor(t){this.userSvc=t,this.users=[],this.frmUser=new c("","",""),this.filterUsers=this.users,this.usersDataSubscription={},this.userSearch="Search Users"}ngOnDestroy(){this.usersDataSubscription.unsubscribe(),console.log("Unsubscribe DONE")}ngOnInit(){this.usersDataSubscription=this.userSvc.currentUserData.subscribe({next:t=>this.users=t}),this.filterUsers=this.users}save(){let t=this.users.findIndex(n=>n.uid===this.frmUser.uid);-1==t?(console.log("user added"),this.userSvc.addUserData(this.frmUser)):this.userSvc.updateUserData(this.frmUser,t),this.clearFormFields(),this.filterUsers=this.users}clearFormFields(){this.frmUser=new c("","","")}delete(t){this.userSvc.deleteUserData(t),this.filterUsers=this.users}edit(t){Object.assign(this.frmUser,t)}handleEvent(t){this.filterUsers=""!=t?this.users.filter(n=>n.uname===t):this.users}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(U))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-user"]],decls:28,vars:6,consts:[["action",""],["type","text","placeholder","Enter User Id","name","txtId",3,"ngModel","ngModelChange"],["type","text","placeholder","Enter Username","name","txtName",3,"ngModel","ngModelChange"],["type","text","placeholder","Enter Role","name","txtRole",3,"ngModel","ngModelChange"],["type","button",3,"click"],[3,"searchLabel","searchEvent"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger",3,"click"],["colspan","4"]],template:function(t,n){1&t&&(e.TgZ(0,"h3"),e._uU(1,"User Management"),e.qZA(),e.TgZ(2,"form",0),e._uU(3," Id: "),e.TgZ(4,"input",1),e.NdJ("ngModelChange",function(s){return n.frmUser.uid=s}),e.qZA(),e._UZ(5,"br"),e._uU(6," UserName: "),e.TgZ(7,"input",2),e.NdJ("ngModelChange",function(s){return n.frmUser.uname=s}),e.qZA(),e._UZ(8,"br"),e._uU(9," Role: "),e.TgZ(10,"input",3),e.NdJ("ngModelChange",function(s){return n.frmUser.urole=s}),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"button",4),e.NdJ("click",function(){return n.save()}),e._uU(13,"Save"),e.qZA()(),e._UZ(14,"br"),e.TgZ(15,"search-text",5),e.NdJ("searchEvent",function(s){return n.handleEvent(s)}),e.qZA(),e.TgZ(16,"table",6)(17,"tr")(18,"th"),e._uU(19,"User ID"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"UserName"),e.qZA(),e.TgZ(22,"th"),e._uU(23,"User Role"),e.qZA(),e.TgZ(24,"th"),e._uU(25,"Actions"),e.qZA()(),e.YNc(26,f,13,3,"tr",7),e.YNc(27,Z,3,0,"tr",8),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngModel",n.frmUser.uid),e.xp6(3),e.Q6J("ngModel",n.frmUser.uname),e.xp6(3),e.Q6J("ngModel",n.frmUser.urole),e.xp6(5),e.Q6J("searchLabel",n.userSearch),e.xp6(11),e.Q6J("ngForOf",n.filterUsers),e.xp6(1),e.Q6J("ngIf",0==n.users.length))},directives:[u._Y,u.JL,u.F,u.Fj,u.JJ,u.On,g,l.sg,l.O5],encapsulation:2}),r})();var d=i(799);let T=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-crud"]],decls:6,vars:0,consts:[["routerLink","users"],["routerLink","persons"]],template:function(t,n){1&t&&(e.TgZ(0,"a",0),e._uU(1,"User management | "),e.qZA(),e.TgZ(2,"a",1),e._uU(3,"Person Mangement | "),e.qZA(),e._UZ(4,"hr")(5,"router-outlet"))},directives:[d.yS,d.lC],encapsulation:2}),r})();class h{constructor(o,t,n,a,s,p){this.uid=o,this.uname=t,this.uemail=n,this.udob=a,this.ugender=s,this.ucountry=p}}function b(r,o){if(1&r&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"button",15),e._uU(15,"Edit"),e.qZA(),e._uU(16,"\xa0\xa0 "),e.TgZ(17,"button",16),e._uU(18,"Delete"),e.qZA()()()),2&r){const t=o.$implicit;e.xp6(2),e.Oqu(t.uid),e.xp6(2),e.Oqu(t.uname),e.xp6(2),e.Oqu(t.uemail),e.xp6(2),e.Oqu(t.udob),e.xp6(2),e.Oqu(t.ugender),e.xp6(2),e.Oqu(t.ucountry)}}function M(r,o){1&r&&(e.TgZ(0,"tr")(1,"td",17),e._uU(2,"No Data Found"),e.qZA()())}let A=(()=>{class r{constructor(){this.persons=[],this.frmPerson=new h(1,"","","","",""),this.userSearch="Search Persons"}ngOnInit(){this.persons=[new h(1,"charan","abc@gmail.com","13sep2001","male","India")]}save(){this.persons=[...this.persons,this.frmPerson],this.clearFormFields(),-1==this.persons.findIndex(n=>n.uid===this.frmPerson.uid)&&(this.persons=[...this.persons,this.frmPerson])}clearFormFields(){this.frmPerson=new h(this.frmPerson.uid+1,"","","","","")}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-person"]],decls:50,vars:10,consts:[["action",""],["type","text","placeholder","Enter User Id","name","txtId",3,"ngModel","ngModelChange"],["type","text","placeholder","Enter Username","name","txtName",3,"ngModel","ngModelChange"],["type","text","placeholder","Enter Email","name","txtEmail",3,"ngModel","ngModelChange"],["type","date","placeholder","Enter Date of Birth","name","txtDob",3,"ngModel","ngModelChange"],["type","radio","name","gender",3,"ngModel","ngModelChange"],["type","text","placeholder","Enter Country","name","txtCountry",3,"ngModel","ngModelChange"],["type","button",3,"click"],[3,"searchLabel"],[1,"card",2,"width","50rem"],[1,"card-body"],[1,"card-title"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"btn","btn-success"],[1,"btn","btn-danger"],["colspan","4"]],template:function(t,n){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Person Example"),e.qZA(),e.TgZ(2,"form",0),e._uU(3," Id: "),e.TgZ(4,"input",1),e.NdJ("ngModelChange",function(s){return n.frmPerson.uid=s}),e.qZA(),e._UZ(5,"br"),e._uU(6," UserName: "),e.TgZ(7,"input",2),e.NdJ("ngModelChange",function(s){return n.frmPerson.uname=s}),e.qZA(),e._UZ(8,"br"),e._uU(9," Email: "),e.TgZ(10,"input",3),e.NdJ("ngModelChange",function(s){return n.frmPerson.uemail=s}),e.qZA(),e._UZ(11,"br"),e._uU(12," Date of Birth: "),e.TgZ(13,"input",4),e.NdJ("ngModelChange",function(s){return n.frmPerson.udob=s}),e.qZA(),e._UZ(14,"br"),e._uU(15," Gender: "),e.TgZ(16,"input",5),e.NdJ("ngModelChange",function(s){return n.frmPerson.ugender=s}),e.qZA(),e._uU(17,"Male "),e.TgZ(18,"input",5),e.NdJ("ngModelChange",function(s){return n.frmPerson.ugender=s}),e.qZA(),e._uU(19,"Female"),e._UZ(20,"br"),e._uU(21," Country: "),e.TgZ(22,"input",6),e.NdJ("ngModelChange",function(s){return n.frmPerson.ucountry=s}),e.qZA(),e._UZ(23,"br"),e.TgZ(24,"button",7),e.NdJ("click",function(){return n.save()}),e._uU(25,"Save"),e.qZA()(),e._UZ(26,"br")(27,"search-text",8),e.TgZ(28,"div",9)(29,"div",10)(30,"div",11),e._uU(31," Person Details "),e.qZA(),e.TgZ(32,"table",12)(33,"tr")(34,"th"),e._uU(35,"Person Id"),e.qZA(),e.TgZ(36,"th"),e._uU(37,"PersonName"),e.qZA(),e.TgZ(38,"th"),e._uU(39,"Person Email"),e.qZA(),e.TgZ(40,"th"),e._uU(41,"Person Date fo Birth"),e.qZA(),e.TgZ(42,"th"),e._uU(43,"Person Gender"),e.qZA(),e.TgZ(44,"th"),e._uU(45,"Person Country"),e.qZA(),e.TgZ(46,"th"),e._uU(47,"Actions"),e.qZA()(),e.YNc(48,b,19,6,"tr",13),e.YNc(49,M,3,0,"tr",14),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("ngModel",n.frmPerson.uid),e.xp6(3),e.Q6J("ngModel",n.frmPerson.uname),e.xp6(3),e.Q6J("ngModel",n.frmPerson.uemail),e.xp6(3),e.Q6J("ngModel",n.frmPerson.udob),e.xp6(3),e.Q6J("ngModel",n.frmPerson.ugender),e.xp6(2),e.Q6J("ngModel",n.frmPerson.ugender),e.xp6(4),e.Q6J("ngModel",n.frmPerson.ucountry),e.xp6(5),e.Q6J("searchLabel",n.userSearch),e.xp6(21),e.Q6J("ngForOf",n.persons),e.xp6(1),e.Q6J("ngIf",0==n.persons.length))},directives:[u._Y,u.JL,u.F,u.Fj,u.JJ,u.On,u._,g,l.sg,l.O5],encapsulation:2}),r})();var q=i(466);const v=[{path:"crud",component:T,children:[{path:"users",component:C},{path:"persons",component:A},{path:"",redirectTo:"users",pathMatch:"full"}]}];let x=(()=>{class r{constructor(){console.log("User Module constructed...")}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[l.ez,u.u5,d.Bz.forChild(v),q.m]]}),r})()}}]);