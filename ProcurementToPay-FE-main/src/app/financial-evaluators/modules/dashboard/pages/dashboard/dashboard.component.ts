import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from "ng-apexcharts";

export type chartOptions = {
  series: ApexAxisChartSeries;
  radialseries: ApexNonAxisChartSeries;
  series2: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
  responsive: ApexResponsive[];
  labels: string[];
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public barChartOptions: Partial<chartOptions>;
  public radialChartOptions: Partial<chartOptions>;
  public gaugeChartOptions: Partial<chartOptions>;
  public stackBarChart: Partial<chartOptions>;

  constructor() {}

  ngOnInit(): void {
    this.chart1();
    this.chart2();
    this.gaugechart();
    this.stackChart();
  }

  private chart1() {
    this.barChartOptions = {
      series: [
        {
          name: "Work Hours",
          data: [6.3, 5.5, 4.1, 6.7, 2.2, 4.3],
        },
        {
          name: "Break Hours",
          data: [1.3, 2.3, 2.0, 0.8, 1.3, 2.7],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
        foreColor: "#9aa0ac",
      },
      colors: ["#674EC9", "#C1C1C1"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "bottom",
        offsetX: 0,
        offsetY: 0,
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
  private chart2() {
    this.radialChartOptions = {
      radialseries: [44, 55, 67],
      chart: {
        height: 290,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return "52%";
              },
            },
          },
        },
      },
      labels: ["Project 1", "Project 2", "Project 3"],
    };
  }
  private gaugechart() {
    this.gaugeChartOptions = {
      series2: [72],
      chart: {
        height: 310,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "22px",
              fontWeight: 600,
              color: "#6777EF",
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: "#9aa0ac",
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ["Closed Ticket"],
    };
  }
  private stackChart() {
    this.stackBarChart = {
      series: [
        {
          name: "Project 1",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "Project 2",
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: "Project 3",
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: "Project 4",
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        foreColor: "#9aa0ac",
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: "#9aa0ac",
      },
      xaxis: {
        type: "category",
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
        colors: ["#F0457D", "#704DAD", "#FFC107", "#a5a5a5"],
      },
    };
  }
}
