import { Component, OnDestroy, OnInit } from '@angular/core';
import { Translation } from 'src/app/i18n/translation.model';
import { LangService } from 'src/app/services/lang.service';

interface TypedChar {
  char: string;
  /** "Luiz" vai em itálico e âmbar */
  accent: boolean;
  /** desalinhamento de máquina antiga: deslocamento da linha de base, inclinação e carga de tinta */
  dy: string;
  rot: string;
  ink: string;
}

const NAME: [string, boolean][] = [['André', false], [' ', false], ['Luiz', true]];
const START_DELAY = 500;
const SPACE_PAUSE = 320;
// ciclo: digita, segura o nome completo, apaga letra por letra e recomeça
const HOLD_TYPED = 3800;
const ERASE_DELAY = 55;
const HOLD_EMPTY = 700;

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    standalone: false
})
export class HeroComponent implements OnInit, OnDestroy {
  lang: Translation;
  chars: TypedChar[] = [];
  typed = 0;
  private timer?: ReturnType<typeof setTimeout>;

  constructor(
    private langService: LangService
  ) {
    this.lang = this.langService.getTranslation();
    this.chars = this.buildChars();
  }

  trackByIndex(index: number): number {
    return index;
  }

  ngOnInit(): void {
    this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
    })

    if (this.prefersReducedMotion()) {
      this.typed = this.chars.length;
      return;
    }
    this.timer = setTimeout(() => this.typeNext(), START_DELAY);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private typeNext(): void {
    this.typed++;
    if (this.typed >= this.chars.length) {
      this.timer = setTimeout(() => this.eraseNext(), HOLD_TYPED);
      return;
    }
    // ritmo irregular de quem datilografa; pausa maior antes do segundo nome
    const next = this.chars[this.typed];
    const delay = next.char === ' ' ? SPACE_PAUSE : 90 + Math.random() * 110;
    this.timer = setTimeout(() => this.typeNext(), delay);
  }

  private eraseNext(): void {
    this.typed--;
    if (this.typed > 0) {
      this.timer = setTimeout(() => this.eraseNext(), ERASE_DELAY);
      return;
    }
    // folha nova: sorteia outro desalinhamento antes de datilografar de novo
    this.chars = this.buildChars();
    this.timer = setTimeout(() => this.typeNext(), HOLD_EMPTY);
  }

  private buildChars(): TypedChar[] {
    return NAME.flatMap(([word, accent]) => [...word].map(char => this.toTypedChar(char, accent)));
  }

  private toTypedChar(char: string, accent: boolean): TypedChar {
    const jitter = (max: number) => (Math.random() * 2 - 1) * max;
    return {
      char,
      accent,
      dy: `${jitter(0.025).toFixed(3)}em`,
      rot: `${jitter(1.6).toFixed(2)}deg`,
      ink: (0.82 + Math.random() * 0.18).toFixed(2)
    };
  }

  private prefersReducedMotion(): boolean {
    return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

}
