import { Component } from '@angular/core';

// Ícones registrados em provideIcons no AppModule
export const CONTACT_LINKS = [
  { name: 'LinkedIn', handle: 'andre-luiz-silveira-lucas', url: 'https://www.linkedin.com/in/andre-luiz-silveira-lucas', icon: 'bootstrapLinkedin' },
  { name: 'GitHub', handle: 'andre-luiz1997', url: 'https://github.com/andre-luiz1997', icon: 'bootstrapGithub' }
];

@Component({
    selector: 'app-contact-links',
    templateUrl: './contact-links.component.html',
    standalone: false
})
export class ContactLinksComponent {
  links = CONTACT_LINKS;
}
