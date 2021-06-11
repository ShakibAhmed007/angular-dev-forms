import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: '**', redirectTo: 'reactive-form' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, HelloComponent, ReactiveFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
