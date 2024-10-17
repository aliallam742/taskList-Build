import{A as $,K as ee,L as te,a as G,b as U,c as W,d as H,e as J,f as K,h as Q,j as X,k as Y,l as Z}from"./chunk-WEPGOZXB.js";import{e as A,g as F,l as N,p as P,q as z,r as L,s as V,t as B,v as O,w as R,y as j}from"./chunk-D4BBDPWR.js";import"./chunk-EJJBCPAK.js";import{$a as h,Cb as c,Db as o,Fb as v,Ja as t,Kb as D,a as _,b as M,bb as m,ca as x,db as y,eb as E,gb as g,ha as T,kb as a,lb as n,mb as d,mc as q,qa as S,qb as I,ra as b,tb as w,vb as k}from"./chunk-MHZ56P3Z.js";function ie(e,p){if(e&1&&d(0,"mat-icon",19),e&2){k();let i=c(11);y("text-danger",i.invalid&&i.touched)}}function ne(e,p){e&1&&d(0,"mat-icon",20)}function ae(e,p){e&1&&(a(0,"mat-error"),o(1,"this Field is required"),n())}function re(e,p){if(e&1&&(a(0,"mat-error"),o(1),n()),e&2){k();let i=c(11);t(),v("Minimum length is ",i.errors.minlength.requiredLength," Letters ")}}function oe(e,p){e&1&&d(0,"mat-icon",20)}function le(e,p){e&1&&(a(0,"mat-error"),o(1,"this Field is required"),n())}function se(e,p){if(e&1&&(a(0,"mat-error"),o(1),n()),e&2){k();let i=c(22);t(),v("Minimum length is ",i.errors.minlength.requiredLength," Letters ")}}function me(e,p){e&1&&(a(0,"mat-error"),o(1,"this Field is required"),n())}var be=(()=>{class e{constructor(){this.mainlayoutServices=x(te),this.snackBar=x($),this.id=x(A).snapshot.queryParams.id,this.router=x(F),this.btnText="Create",this.btnIcon="fa fa-solid fa-list"}ngOnInit(){this.id!=null&&(this.bindingData(),this.btnText="Edit",this.btnIcon="fa fa-solid fa-edit")}bindingData(){this.mainlayoutServices.getDataById(this.id).subscribe(i=>{this.data=i})}login(i){if(i.invalid)this.markAllAsTouched(i);else{if(this.btnText==="Create")this.mainlayoutServices.CreateTask(i.value).subscribe(s=>{this.snackBar.open("Task Created Successfully","close",{duration:3e3,verticalPosition:"top",horizontalPosition:"right"})});else{let s=M(_({},i.value),{id:this.id,completed:this.data.completed});this.mainlayoutServices.updateTask(s).subscribe(l=>{this.snackBar.open("Updated Successfully","close",{duration:3e3,verticalPosition:"top",horizontalPosition:"right"})})}this.router.navigate(["allTasks"])}}markAllAsTouched(i){Object.values(i.controls).forEach(s=>{s.markAsTouched()})}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=T({type:e,selectors:[["app-create-task"]],standalone:!0,features:[D],decls:40,vars:17,consts:[["createForm","ngForm"],["name","ngModel"],["autosize","cdkTextareaAutosize","desc","ngModel"],["date","ngModel"],["picker",""],[1,"card"],[1,"text-center"],["appearance","outline",1,"example-full-width"],[1,"d-flex","align-items-center","px-2"],["minlength","3","matInput","","required","","placeholder","write task name","ngModel","","name","taskName","value","",3,"ngModel"],["matSuffix","","class","fa fa-tasks fs-5",3,"text-danger",4,"ngIf"],["matSuffix","","class","fa fa-check fs-4 text-success",4,"ngIf"],[1,"d-flex","align-items-center","px-3"],["matInput","","required","","minlength","6","cdkTextareaAutosize","","cdkAutosizeMinRows","1","cdkAutosizeMaxRows","5","placeholder","Write what you want to do","ngModel","","name","taskDescription",3,"ngModel"],["matInput","","required","","name","date","placeholder","Select a date",3,"matDatepicker","ngModel"],["matSuffix","",3,"for"],["type","text","name","completed",1,"d-none",3,"ngModel"],[1,"example-button-container","example-full-width"],["mat-fab","","extended","",3,"click"],["matSuffix","",1,"fa","fa-tasks","fs-5"],["matSuffix","",1,"fa","fa-check","fs-4","text-success"]],template:function(s,l){if(s&1){let r=I();a(0,"div",5)(1,"div")(2,"h2",6),o(3,"Create Task"),n()(),a(4,"form",null,0)(6,"mat-form-field",7)(7,"mat-label"),o(8,"Task Name"),n(),a(9,"div",8),d(10,"input",9,1),h(12,ie,1,2,"mat-icon",10)(13,ne,1,0,"mat-icon",11),n(),h(14,ae,2,0,"mat-error")(15,re,2,1,"mat-error"),n(),a(16,"mat-form-field",7)(17,"mat-label"),o(18,"Task Description "),n(),a(19,"div",12),d(20,"textarea",13,2),h(23,oe,1,0,"mat-icon",11),n(),h(24,le,2,0,"mat-error")(25,se,2,1,"mat-error"),n(),a(26,"mat-form-field",7)(27,"mat-label"),o(28,"Date"),n(),d(29,"input",14,3)(31,"mat-datepicker-toggle",15)(32,"mat-datepicker",null,4),h(34,me,2,0,"mat-error"),n(),d(35,"input",16),a(36,"div",17)(37,"a",18),w("click",function(){S(r);let f=c(5);return b(l.login(f))}),d(38,"i"),o(39),n()()()()}if(s&2){let r=c(11),u=c(22),f=c(30),C=c(33);t(10),m("ngModel",l.data==null?null:l.data.taskName),t(2),m("ngIf",r.invalid||!r.touched),t(),m("ngIf",!r.invalid&&r.touched),t(),g(14,r.errors!=null&&r.errors.required&&r.touched?14:-1),t(),g(15,r.errors!=null&&r.errors.minlength?15:-1),t(5),m("ngModel",l.data==null?null:l.data.taskDescription),t(3),m("ngIf",!u.invalid&&u.touched),t(),g(24,u.errors!=null&&u.errors.required&&u.touched?24:-1),t(),g(25,u.errors!=null&&u.errors.minlength?25:-1),t(4),m("matDatepicker",C)("ngModel",l.data==null?null:l.data.date),t(2),m("for",C),t(3),g(34,!(f==null||f.errors==null)&&f.errors.required&&(f!=null&&f.touched)?34:-1),t(),m("ngModel",!1),t(3),E(l.btnIcon),t(),v(" ",l.btnText," ")}},dependencies:[j,B,N,P,z,O,R,V,L,q,ee,K,J,U,W,H,G,Q,X,Y,Z],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%;margin-block:10px}.mat-accent[_ngcontent-%COMP%]{width:100%;background:#1469c0}"]})}}return e})();export{be as CreateTaskComponent};