import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'Do I know the answer?';
  answer = 'Maybe I know ...Maybe!';
  answerMeme = ''
  api = 'https://yesno.wtf/api'
  
  apiData: any = {
    "answer": "Maybe I know ...Maybe!",
    "forced": true,
    "image": "https://yesno.wtf/assets/maybe/2-adc5f184452e691c3484d4266776ed3d.gif"
  }

  ngOnInit() {

    this.ask('maybe')

  }

  ask(forced) {
    console.log("ask ", forced);
    this.answer = 'let me think about it...'
    this.http.get(this.api, { params: { 'force': forced || '' } })
      .subscribe(data => {
        this.apiData = data
        this.answerMeme = data["image"];
      });
  }

  showAnswer() {

      this.answer = this.apiData["answer"];

  }
}
