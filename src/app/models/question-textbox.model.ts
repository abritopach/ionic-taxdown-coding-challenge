import { QuestionModel } from './question.model';

export class TextboxQuestionModel extends QuestionModel<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
