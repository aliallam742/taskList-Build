import{a as te}from"./chunk-DQEZ2GH5.js";import{A as X,C as Y,K as Z,L as ee,i as z,m as O,n as S,o as F,p as N,q as Q,r as L,s as j,t as q,u as A,v as G,w as J,x as K,y as U,z as W}from"./chunk-WEPGOZXB.js";import{y as $}from"./chunk-D4BBDPWR.js";import"./chunk-EJJBCPAK.js";import{$a as d,Ab as y,Bb as E,Db as m,Fb as g,Ja as r,Kb as R,Lb as I,Mb as P,Nb as V,a as w,b as D,bb as c,ca as C,ha as v,kb as l,lb as n,mb as p,mc as B,nb as u,ob as f,oc as H,qa as _,qb as b,ra as h,tb as T,vb as k,zb as M}from"./chunk-MHZ56P3Z.js";var ie=()=>[5,10,20];function ne(e,a){e&1&&(l(0,"th",15),m(1," ID "),n())}function ae(e,a){if(e&1&&(l(0,"td",16),m(1),n()),e&2){let t=a.$implicit;r(),g(" ",t==null?null:t.id," ")}}function oe(e,a){e&1&&(l(0,"th",15),m(1," Name "),n())}function le(e,a){if(e&1&&(l(0,"td",16),m(1),n()),e&2){let t=a.$implicit;r(),g(" ",t==null?null:t.taskName," ")}}function me(e,a){e&1&&(l(0,"th",15),m(1," Date "),n())}function re(e,a){if(e&1&&(l(0,"td",16),m(1),P(2,"date"),n()),e&2){let t=a.$implicit;r(),g(" ",V(2,1,t==null?null:t.date)," ")}}function se(e,a){e&1&&(l(0,"th",15),m(1," Completed "),n())}function de(e,a){if(e&1){let t=b();l(0,"td",16)(1,"mat-checkbox",17),T("change",function(i){let s=_(t).$implicit,x=k();return h(x.submitComplete(i,s))}),n()()}if(e&2){let t=a.$implicit;r(),c("checked",t==null?null:t.completed)}}function ce(e,a){e&1&&(l(0,"th",15),m(1," Action "),n())}function pe(e,a){if(e&1){let t=b();l(0,"td",16)(1,"button",18,0),T("click",function(){let i=_(t).$implicit,s=k();return h(s.openDialog(i))}),p(3,"i",19),n(),l(4,"button",20,0),p(6,"i",21),n(),l(7,"button",22,0),T("click",function(){let i=_(t).$implicit,s=k();return h(s.deleteItem(i.id))}),p(9,"i",23),n()()}}function ue(e,a){e&1&&p(0,"tr",24)}function fe(e,a){e&1&&p(0,"tr",25)}function Ce(e,a){e&1&&(l(0,"div",26),m(1," No tasks available. "),n())}var Be=(()=>{class e{constructor(){this.services=C(ee),this.snackBar=C(X),this.dialog=C(Y),this.displayedColumns=["id","name","date","Completed","action"],this.dataSource=new U}ngOnInit(){this.getTasks()}getTasks(){this.services.getTasks().subscribe(t=>{this.dataSource.data=t.filter(o=>o.completed),this.dataSource.paginator=this.paginator})}submitComplete(t,o){let i=D(w({},o),{completed:t.checked});this.services.updateTask(i).subscribe(s=>{let x=t.checked===!0?"task is completed successfully":" task is not Completed yet !";this.snackBar.open(x,"close",{duration:3e3,verticalPosition:"top",horizontalPosition:"right"}),this.getTasks()})}deleteItem(t){this.services.Delete(t).subscribe(o=>{this.snackBar.open("Task Deleted Successfully","close",{duration:3e3,verticalPosition:"top",horizontalPosition:"right"}),this.getTasks()})}openDialog(t){console.log("hi"),this.dialog.open(te,{data:t}).afterClosed().subscribe(i=>{this.getTasks()})}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=v({type:e,selectors:[["app-completed-tasks"]],viewQuery:function(o,i){if(o&1&&M(S,5),o&2){let s;y(s=E())&&(i.paginator=s.first)}},standalone:!0,features:[R],decls:23,vars:6,consts:[["tooltip","matTooltip"],[1,"mat-elevation-z8","rounded-3"],[1,"table-header","m-0","bg-white","rounded-top-3"],["mat-table","",1,"centered-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","centered-cell",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","date"],["matColumnDef","Completed"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","no-data-message",4,"ngIf"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell","",1,"centered-cell"],[3,"change","checked"],["mat-icon-button","","matTooltip","Task Details",3,"click"],["aria-hidden","true",1,"fa","fa-eye","fs-6"],["matTooltip","Edit Task","mat-icon-button",""],["aria-hidden","true",1,"fa","fa-edit","fs-6"],["matTooltip","Delete Task","mat-icon-button","","color","warn",3,"click"],["aria-hidden","true",1,"fa","fa-trash","fs-6"],["mat-header-row",""],["mat-row",""],[1,"no-data-message"]],template:function(o,i){o&1&&(l(0,"div",1)(1,"h2",2),m(2,"Completed Tasks"),n(),l(3,"table",3),u(4,4),d(5,ne,2,0,"th",5)(6,ae,2,1,"td",6),f(),u(7,7),d(8,oe,2,0,"th",5)(9,le,2,1,"td",6),f(),u(10,8),d(11,me,2,0,"th",5)(12,re,3,3,"td",6),f(),u(13,9),d(14,se,2,0,"th",5)(15,de,2,1,"td",6),f(),u(16,10),d(17,ce,2,0,"th",5)(18,pe,10,0,"td",6),f(),d(19,ue,1,0,"tr",11)(20,fe,1,0,"tr",12),n(),d(21,Ce,2,0,"div",13),p(22,"mat-paginator",14),n()),o&2&&(r(3),c("dataSource",i.dataSource),r(16),c("matHeaderRowDef",i.displayedColumns),r(),c("matRowDefColumns",i.displayedColumns),r(),c("ngIf",(i.dataSource==null||i.dataSource.data==null?null:i.dataSource.data.length)===0),r(),c("pageSizeOptions",I(5,ie)))},dependencies:[$,B,H,Z,z,S,F,Q,A,L,N,G,j,q,J,K,W,O],styles:[".table-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:16px;font-size:24px;padding:10px;font-weight:700}th[_ngcontent-%COMP%]{text-align:center}"]})}}return e})();export{Be as CompletedTasksComponent};
