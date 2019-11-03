import Sunburst from 'sunburst-chart';
import datas from './datas.js'

const myChart = Sunburst().data(datas)
.label(d => d.name)
.width(600)
.height(600)
.color('color')
.showLabels(true)
.tooltipContent(d => d.value);
myChart.onNodeClick(node => {   
    if(node !=null){
        myChart.focusOnNode(node);
        alert(node.name);
    }
});

export default myChart;