import React from 'react';
import './Main.css';
import Chart from 'react-chartjs-2';

function Main() {
    var speedData = {
        labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
        datasets: [{
          label: "Car Speed",
          data: [0, 59, 75, 20, 20, 55, 40],
        },
        {
            label: "Stuff",
            data: [0, 10, 20, 30, 40, 50, 60],
            backgroundColor: "rgb(255,0,0,0.3)",
            borderColor: "rgb(255,0,0)"
          }]
      };
       
      var chartOptions = {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'black'
          }
        }
      };
    return (
        <div>
            <div id="sunburst"></div>
            <div id="line-graph"></div>
            <div id="analogy"></div>
            <Chart
            type="line"
            data={speedData}
            width={100}
            height={50}
            options={chartOptions}
            />            
            <div id="mapid"></div>

        </div>

        
    );
}

export default Main;