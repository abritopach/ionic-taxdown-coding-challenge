import { DropdownYesNoQuestionModel } from './../models/question-yesnodropdown.model';
import { TextboxQuestionModel } from './../models/question-textbox.model';
import { DropdownQuestionModel } from './../models/question-dropdown.model';
import { Injectable } from '@angular/core';
import { QuestionModel } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  json = {
    'questions': [{
        'id': 0,
        'type': 'multiselection',
        'text': '¿Cuáles son los puntos cardinales?',
        'options': [
          'Norte',
          'Sur',
          'Este',
          'Oeste'
        ]
      },
      {
        'id': 1,
        'type': 'yesno',
        'text': '¿Te gusta el fútbol?',
        'options': [
          'Si',
          'No'
        ]
      },
      {
        'id': 2,
        'type': 'text',
        'text': 'Nombre'
      }
    ]
  };

  constructor() {
    console.log('QuestionService::constructor() | method called');
  }

  // TODO: get from a remote source of question metadata.
  // TODO: make asynchronous.
  getQuestions() {

    console.log('QuestionService::getQuestions() | method called');

    const questions: QuestionModel<any>[] = [];
    this.json.questions.map(question => {
      let newQuestion;
      let options = [];
      if (typeof question.options !== 'undefined') {
        options = question.options.map(option => {
          const o = {key: option,  value: option};
          return o;
        });
      }
      if (question.type === 'multiselection') {
        newQuestion = new DropdownQuestionModel({
          key: 'key' + question.id,
          label: question.text,
          options: options,
          // order: 3
        });
      } else if (question.type === 'yesno') {
        newQuestion = new DropdownYesNoQuestionModel({
          key: 'key' + question.id,
          label: question.text,
          options: options,
          // order: 3
        });
      } else if (question.type === 'text') {
        newQuestion = new TextboxQuestionModel({
          key: 'key' + question.id,
          label: question.text
        });
      }
      questions.push(newQuestion);
    });
    return questions;

    /*
    const questions: QuestionModel<any>[] = [

      new DropdownQuestionModel({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestionModel({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestionModel({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
    */
  }
}
