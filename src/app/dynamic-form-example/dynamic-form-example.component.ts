import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { QuestionBase } from './model/question-base';
import { DropdownQuestion } from './model/question-dropdown';
import { TextboxQuestion } from './model/question-textbox';
import { QuestionControlService } from './service/question-control.service';
import { QuestionService } from './service/question-control.service';

@Component({
  selector: 'app-dynamic-form-example',
  templateUrl: './dynamic-form-example.component.html',
  styleUrls: ['./dynamic-form-example.component.css']
})
export class DynamicFormExampleComponent implements OnInit {
  form!: FormGroup;
  payLoad = '';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(
    private qcs: QuestionControlService,
    questionService: QuestionService
  ) {}

  ngOnInit() {
    this.questions$ = this.questionService.getQuestions();
    if (this.questions$) {
      this.form = this.qcs.toFormGroup(this.questions as QuestionBase<
        string
      >[]);
    }
  }

  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}