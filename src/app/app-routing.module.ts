import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedloopComponent } from './nestedloop/nestedloop.component';
import { LoopsComponent } from './loops/loops.component';
import { FunctiononbuttonComponent } from './functiononbutton/functiononbutton.component';
import { EventsComponent } from './events/events.component';
import { MultipleconditionsComponent } from './multipleconditions/multipleconditions.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { FormsssComponent } from './formsss/formsss.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ChildComponent } from './child/child.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';



const routes: Routes = [
  { path: 'loops', component: LoopsComponent },
  { path: 'nested-loop', component: NestedloopComponent },
  { path: 'functiononbutton', component: FunctiononbuttonComponent },
  { path: 'events', component: EventsComponent },
  { path: 'multipleconditions', component: MultipleconditionsComponent },
  { path: 'switchcase', component: SwitchcaseComponent },
  { path: 'stylebinding', component: StylebindingComponent },
  { path: 'formsss', component: FormsssComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'child', component: ChildComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'templatereference', component: TemplatereferenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
