import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lang: any;
  form: any;
  constructor(
    private langService: LangService,
    private httpClient: HttpClient

  ) {
    this.lang = this.langService.getTranslation();
  }

  ngOnInit(): void {
    this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
    });
    this.createForm();
  }

  createForm(): void{
    this.form = new FormGroup({
      ip: new FormControl('',[]),
      name: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      message: new FormControl('',[
        Validators.required
      ])
    });
  }

  onSubmit(){
    console.log(this.form.value);
    this.httpClient.post('http://localhost:2020/mail', this.form.value).subscribe((response) => {
      console.log(response);
    });
    
    // this.httpClient.post('https://portfolio-server-andre-luiz1997.vercel.app', this.form.value).subscribe((response) => {
    //   console.log(response);
    // });

  }
}
