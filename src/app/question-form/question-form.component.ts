import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../dynamic-form-example/model/question-base';
import { QuestionControlService } from './question-control.service';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(
    private qcs: QuestionControlService,
    private service: QuestionService
  ) {
    this.service.getQuestions().subscribe(res => {
      this.questions = res as QuestionBase<string>[];
      this.form = this.qcs.toFormGroup(this.questions as QuestionBase<
        string
      >[]);
    });
  }
  ngOnInit() {}

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
