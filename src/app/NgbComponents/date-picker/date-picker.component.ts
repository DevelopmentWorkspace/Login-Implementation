import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
	model:NgbDateStruct | undefined;
  today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) {  }

  ngOnInit(): void {
  }

}
