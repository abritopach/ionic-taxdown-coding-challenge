import { QuestionModel } from './question.model';

export class DropdownYesNoQuestionModel extends QuestionModel<string> {
  controlType = 'yesno';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
