import { Input, Component } from "@angular/core";

@Component({
  selector: 'datepicker',
  templateUrl: 'datepicker.component.html',
})
export class DatepickerComponent {
  @Input() placeholder: string;
};