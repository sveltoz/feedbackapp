import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService } from "./data.service";

import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdButtonModule, MdIconModule, MdInputModule, MdSelectModule, MdSliderModule,
         MdToolbarModule, MdCardModule, MdSlideToggleModule,
         MdSnackBarModule } from "@angular/material";
import 'hammerjs';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

const routes : Routes = [
  { path: '', component: ListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule, HttpModule, ServiceWorkerModule,
    BrowserModule, BrowserAnimationsModule,
    MdButtonModule, MdIconModule, MdInputModule, MdSelectModule, MdSliderModule,
    MdToolbarModule, MdCardModule, MdSlideToggleModule, MdSnackBarModule,NgQRCodeReaderModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
