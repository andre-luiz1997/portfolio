import { Component, OnInit } from '@angular/core';
import { Translation } from 'src/app/i18n/translation.model';
import { LangService } from 'src/app/services/lang.service';

// [ano, mês 1-12]
type YearMonth = [number, number];

export interface JobPeriod {
  start: YearMonth;
  /** ausente = cargo atual */
  end?: YearMonth;
}

// Na mesma ordem de Translation.jobs
export const JOB_PERIODS: JobPeriod[] = [
  { start: [2023, 3] },
  { start: [2021, 4], end: [2023, 3] },
  { start: [2020, 6], end: [2021, 4] }
];

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    standalone: false
})
export class ExperienceComponent implements OnInit {
  lang: Translation;
  periods = JOB_PERIODS;

  constructor(
    private langService: LangService
  ) {
    this.lang = this.langService.getTranslation();
  }

  ngOnInit(): void {
    this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
    })
  }

  range(period: JobPeriod): string {
    const end = period.end ? this.formatMonth(period.end) : this.lang.current;
    return `${this.formatMonth(period.start)} – ${end}`;
  }

  duration(period: JobPeriod): string {
    const now = new Date();
    const end = period.end ?? [now.getFullYear(), now.getMonth() + 1];
    // contagem inclusiva dos meses, como no LinkedIn
    const months = (end[0] * 12 + end[1]) - (period.start[0] * 12 + period.start[1]) + 1;
    const y = Math.floor(months / 12);
    const m = months % 12;
    const units = this.lang.duration;
    return [
      y ? `${y} ${y > 1 ? units.years : units.year}` : '',
      m ? `${m} ${m > 1 ? units.months : units.month}` : ''
    ].filter(Boolean).join(units.joiner);
  }

  private formatMonth([year, month]: YearMonth): string {
    return `${this.lang.months[month - 1]}/${year}`;
  }

}
