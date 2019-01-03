import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  currentYear = new Date().getFullYear();
  questions: any[];

  constructor(private questionService: QuestionService) {
    console.log('HomePage::constructor() | method called');
  }

  ngOnInit() {
    console.log('HomePage::ngOnInit() | method called');
    this.questions = this.questionService.getQuestions();
  }
}
