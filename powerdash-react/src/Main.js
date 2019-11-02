import React from 'react';
import './Main.css';
import Chart from 'react-chartjs-2'
import Sunburst from 'sunburst-chart';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import datas from './datas.js'

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

    function changeUtility(value) {
        var color = '#2ecc71'
        switch (value) {
            case 1: 
                color = '#2ecc71'
                break;
            case 2: 
                color = '#e67e22'
                break;
            case 3: 
                color = '#3498db'
                break;
            case 4: 
                color = '#34495e'
                break;
            default:
                color = '#2ecc71'
        }
        document.body.style.backgroundColor = color
    }
    return (
        <div>      
            <ToggleButtonGroup id="utility-toggle" type="radio" name="utilities" defaultValue={1}>
                <ToggleButton variant="light" value={1} onClick={() => changeUtility(1)}>Electricity</ToggleButton>
                <ToggleButton variant="light" value={2} onClick={() => changeUtility(2)}>Hot Water</ToggleButton>
                <ToggleButton variant="light" value={3} onClick={() => changeUtility(3)}>Chilled Water</ToggleButton>
                <ToggleButton variant="light" value={4} onClick={() => changeUtility(4)}>Steam</ToggleButton>
            </ToggleButtonGroup>
            <div id="sunburst"></div>
            <div id="line-chart">
                <Chart
                type="line"
                data={speedData}
                width={100}
                height={65}
                options={chartOptions}
                />
            </div>
            <div id="mapid"></div>
        </div>

        
    );
}

export default Main;