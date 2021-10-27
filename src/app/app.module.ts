import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';
import { NgxFlagIconCssModule } from 'ngx-flag-icon-css';
import { LangService } from './services/lang.service';
import { EducationComponent } from './components/education/education.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { SvgIconsModule } from '@ngneat/svg-icon';
import {appPinIcon} from '@app/svg/pin';
import {appGlobeIcon} from '@app/svg/globe';
import {appChevronLeftIcon} from '@app/svg/chevron-left';
import {appChevronRightIcon} from '@app/svg/chevron-right';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgHeroiconsModule,
    NgxFlagIconCssModule,
    FontAwesomeModule,
    SvgIconsModule.forRoot({
      sizes: {
        xs: '10px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '25px',
        xxl: '30px'
      },
      defaultSize: 'md',
      icons: [
        appPinIcon,
        appGlobeIcon,
        appChevronLeftIcon,
        appChevronRightIcon
      ],
    }),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LangService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
