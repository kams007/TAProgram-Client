import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculationAddComponent } from './calculation-add/calculation-add.component';
import { CalculationReadComponent } from './calculation-read/calculation-read.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { CalculationService } from './calculation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent,
    CalculationAddComponent,
    CalculationReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgGridModule.withComponents(null)
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
