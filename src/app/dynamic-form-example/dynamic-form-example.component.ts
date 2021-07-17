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
  questions: Observable<QuestionBase<any>[]>;
  data: QuestionBase<string>[] | null = [];

  constructor(
    private qcs: QuestionControlService,
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.questions.subscribe(res => {
      this.data = res as QuestionBase<string>[];
      console.log('Form ---', this.data);
      this.form = this.qcs.toFormGroup(res as QuestionBase<string>[]);
    });
  }

  get isValid() {
    return this.form.controls[this.data['key']].valid;
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
