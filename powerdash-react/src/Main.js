import React from 'react';
import './Main.css';
import Chart from 'react-chartjs-2'
import ReactFullpage from '@fullpage/react-fullpage';
import { changeNum} from './AnaItem.js';

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

    return (<ReactFullpage
        //fullpage options
        scrollingSpeed = {1000} /* Options here */
        navigation='true'
        navigationTooltips={['firstSlide', 'secondSlide', 'thirdSlide']}

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <div id="chart-vertical-flex">
                            <div id="sunburst-flex">
                                <div id="sunburst"></div>
                            </div>
                            <div id="line-chart-flex">
                                <div id="line-chart">
                                    <Chart
                                    type="line"
                                    data={speedData}
                                    width={100}
                                    height={65}
                                    options={chartOptions}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="line-graph-section" className="section">
                        <div id="AnaType"></div>
                        <button id="upOneItem" onClick = {() =>changeNum(0)}>^</button>
                        <button id="downOneItem" onClick={() =>changeNum(1)} >V</button>
                        <div id="lotsOfImg">
                            
                        </div>
                    </div>
                    <div className="section">
                        <div id="mapid"></div>
                    </div>
                </ReactFullpage.Wrapper>
                
            );
        }}
    />);
}

export default Main;