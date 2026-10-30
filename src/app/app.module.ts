import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { Carousel } from 'primeng/carousel';
import { Popover } from 'primeng/popover';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Timeline } from 'primeng/timeline';
import { Toolbar } from 'primeng/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LangService } from './services/lang.service';
import { EducationComponent } from './components/education/education.component';
import { PortfolioPreset } from './theme';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Carousel,
    Popover,
    ProgressSpinner,
    Timeline,
    Toolbar
  ],
  providers: [
    LangService,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: PortfolioPreset,
        options: { darkModeSelector: '.app-dark' }
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
