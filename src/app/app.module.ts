import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeft, bootstrapArrowRight, bootstrapArrowUpRight, bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import {
  simpleAngular, simpleDocker, simpleGit, simpleIonic, simpleJavascript, simpleLinux,
  simpleMongodb, simpleMysql, simpleNestjs, simpleNodedotjs, simplePhp, simpleReact, simpleTypescript
} from '@ng-icons/simple-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactLinksComponent } from './components/contact/contact-links.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleComponent } from './pages/article/article.component';
import { LangService } from './services/lang.service';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    ContactComponent,
    ContactLinksComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconComponent
  ],
  providers: [
    LangService,
    provideHttpClient(),
    provideIcons({
      simpleTypescript, simpleJavascript, simpleNodedotjs, simpleNestjs, simpleAngular, simpleIonic,
      simpleMongodb, simpleMysql, simpleDocker, simpleLinux, simpleGit, simplePhp, simpleReact,
      bootstrapLinkedin, bootstrapGithub, bootstrapArrowUpRight, bootstrapArrowLeft, bootstrapArrowRight
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
