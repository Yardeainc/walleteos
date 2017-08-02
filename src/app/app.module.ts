import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { APP_ROUTING, appRoutingProviders} from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { MenuModule, PanelMenuModule, MenubarModule, MenuItem, ChartModule, CalendarModule} from 'primeng/primeng';
import { TreeModule,TreeNode, BreadcrumbModule, TreeTableModule, SharedModule, DropdownModule, TabViewModule } from 'primeng/primeng';

import { DatasetService } from './dataset.service';

import { DataTableModule, DialogModule, ButtonModule, InputTextModule, ToolbarModule, SplitButtonModule } from 'primeng/primeng';
import { ApplistComponent } from '../app/applist/applist.component';
import { Data } from "./data";
import { JsonSchemaFormModule } from 'angular2-json-schema-form';
import { AceEditorDirective } from './ace-editor.directive';
import { HistoryListComponent } from '../app/history-list/history-list.component';
import { DetailsComponent } from '../app/details/details.component';
import { ProbeComponent } from '../app/probe/probe.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplistComponent,
    AceEditorDirective,
    HistoryListComponent,
    DetailsComponent,
    ProbeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    MdToolbarModule,MdButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MenuModule,
    MenubarModule,
    TreeModule,
    ChartModule,
    PanelMenuModule,
    DataTableModule,
    DialogModule,
    ButtonModule,
    ToolbarModule,DropdownModule,TabViewModule,CalendarModule,
    SplitButtonModule,
    BreadcrumbModule,
    APP_ROUTING,
    TreeTableModule, 
    SharedModule,
    JsonSchemaFormModule,
    InputTextModule
  ],
  providers: [DatasetService, appRoutingProviders, Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
