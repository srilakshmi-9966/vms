import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-graphone',
  templateUrl: './graphone.component.html',
  styleUrls: ['./graphone.component.css']
})
export class GraphoneComponent implements OnInit {
 


  constructor() { }

  ngOnInit(): void {
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {


    title: {
      text: 'BTCUSDT Predictions Plot'
    },
    xAxis: {
      categories: [
        '2022-04-20 10:00:00',
        '2022-04-20 10:30:00',
        '2022-04-20 11:00:00',
        '2022-04-20 11:30:00',
        '2022-04-20 12:00:00',
        '2022-04-20 12:30:00',
        '2022-04-20 13:00:00',
        '2022-04-20 13:30:00',
        '2022-04-20 14:00:00',
        '2022-04-20 14:30:00',
        '2022-04-20 15:00:00',
        '2022-04-20 15:30:00',
        '2022-04-20 16:00:00']
    },
    chart: {
      events: {
        load: function() {
          const chart = this,
            data = chart.series[0].data;
  
          data.forEach((element:any) => {
            if (element.y > 41800) {
              element.update({
                color: 'green',
                marker: {
                  symbol: 'url(https://assets-cryptogenie.yantraka.ai/static-assets/icons/green-white-icon.svg)'
                }
              })
            }
            else if(element.y < 41500){
              element.update({
                color: 'red',
                marker: {
                  symbol: 'url(https://assets-cryptogenie.yantraka.ai/static-assets/icons/red-wrong-icon.svg)'
                }
              })
            }
            else {
              element.update({
                color: 'yellow',
                marker: {
                  symbol: 'url(https://assets-cryptogenie.yantraka.ai/static-assets/icons/yellow-minus-icon.svg)'
                }
              })
            }
          });
        }
      }
    },

    plotOptions: {
      series: {

      }
    },

    subtitle: {
      // symbol:'url(https://assets-cryptogenie.yantraka.ai/static-assets/icons/yellow-minus-icon.svg)',
      text: "✔️" + " " + '<b> Correct Prediction</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' + "❌" + " " + '<b>Incorrect Prediction &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp;</b>' + "〰️" + " " + ' <b>Not Confident Enough  </b> <br> &nbsp;  </br>',
    },

    series: [{
      type: 'line',
      name: 'reference price',
      color: '#6237de',
      data: [
        41540.01,
        41822.72,
        41821.38,
        41857.97,
        42090.0,
        42040.66,
        42102.57,
        42016.07,
        41591.55,
        41612.3,
        41549.13,
        41184.78,
        41261.73
      ],
    }]

  };


  
}
