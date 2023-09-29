import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  template: `
    <div class="text-bg-secondary p-3">
      <h5>Here you can generate report | This is Child Component</h5>
      <button class="btn btn-warning"
      (click)="handleGenerateReport()">Generate Report</button>
    </div>
  `,
  styles: [
  ]
})
export class ReportsComponent {

  @Output() reportGenerated: EventEmitter<any> = new EventEmitter();

  handleGenerateReport() {
    console.log('Report will be generated');
    this.reportGenerated.emit({
      reportId: 321123,
      status: 'Report Generated Successfully'
    })
  }

}
