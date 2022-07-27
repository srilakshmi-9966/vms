import { NgModule  } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { GraphComponent } from './graph/graph.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { GraphoneComponent } from './graphone/graphone.component';
import { HighchartsChartModule } from 'highcharts-angular';
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
import { ReuseableComponent } from './reuseable/reuseable.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    GraphComponent,
    EmployeeDashboardComponent,
    GraphoneComponent,
    NestedloopComponent,
    LoopsComponent,
    FunctiononbuttonComponent,
    EventsComponent,
    MultipleconditionsComponent,
    SwitchcaseComponent,
    StylebindingComponent,
    FormsssComponent,
    TodolistComponent,
    ChildComponent,
    ReuseableComponent,
    DatabindingComponent,
    TemplatereferenceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
