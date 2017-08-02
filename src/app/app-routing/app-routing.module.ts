import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent }   from '../app.component';
import { ApplistComponent }      from '../applist/applist.component';
import { DetailsComponent }      from '../details/details.component';
import { ProbeComponent }      from '../probe/probe.component';
import { HistoryListComponent }      from '../history-list/history-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/applist', pathMatch: 'full' },
  { path: 'applist', component: ApplistComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'historylist', component: HistoryListComponent },
  { path: 'historylist/:dataset', component: HistoryListComponent },
  { path: 'probe', component: ProbeComponent }
];

export const appRoutingProviders: any[] = [
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);