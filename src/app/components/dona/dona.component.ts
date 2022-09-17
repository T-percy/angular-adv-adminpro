import { Component, Input } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Gráfica sin nombre';
  @Input('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input('data') data = [ 100, 100, 100 ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: this.data }],
  };

  ngOnChanges(){
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.data }],
    }
  }

  public doughnutChartType: ChartType = 'doughnut';

  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
