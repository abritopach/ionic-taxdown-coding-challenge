import { QuestionControlService } from './../../services/question-control.service';
import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel } from './../../models/question.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionModel<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {
    console.log('DynamicFormComponent::constructor() | method called');
  }

  ngOnInit() {
    console.log('DynamicFormComponent::ngOnInit() | method called');
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    console.log('DynamicFormComponent::onSubmit() | method called');
    this.payLoad = JSON.stringify(this.form.value);
    console.log('payload', this.payLoad);
  }

}
