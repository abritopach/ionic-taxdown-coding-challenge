import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel } from './../../models/question.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() question: QuestionModel<any>;
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

}

