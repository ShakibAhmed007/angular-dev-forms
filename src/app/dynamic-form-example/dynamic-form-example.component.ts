import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { QuestionBase } from './model/question-base';
import { QuestionControlService } from './service/question-control.service';
import { QuestionService } from './service/question.service';

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
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.questions$ = this.questionService.getQuestions();
    if (this.questions$) {
      this.form = this.qcs.toFormGroup(this.questions as QuestionBase<
        string
      >[]);
    }
  }
}
