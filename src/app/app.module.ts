import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    FeaturesSectionComponent,
    TeamSectionComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
