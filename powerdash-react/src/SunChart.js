import Sunburst from 'sunburst-chart';
import datas from './datas.js'

const myChart = Sunburst();
myChart.data(datas);
myChart.width(600);
myChart.height(600);

export default myChart;