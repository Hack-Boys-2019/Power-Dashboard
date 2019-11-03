import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import fun from './AnaItem.js'

function changeUtility(value) {
    var color = '#2ecc71'
    var secondColor = '#27ae60'
    switch (value) {
        case 1: 
            color = '#2ecc71'
            secondColor = '#27ae60'
            fun(1)
            break;
        case 2: 
            color = '#e67e22'
            secondColor = '#d35400'
            fun(2)
            break;
        case 3: 
            color = '#3498db'
            secondColor = '#2980b9'
            fun(3)
            break;
        case 4: 
            color = '#34495e'
            secondColor = '#1c2732'
            fun(4)
            break;
        default:
            color = '#2ecc71'
            secondColor = '#27ae60'
    }
    document.body.style.backgroundColor = color
    document.getElementById('line-graph-section').style.backgroundColor = secondColor
}

class UtilityToggle extends React.Component {
    render() {
        return (
            <ToggleButtonGroup id="utility-toggle" type="radio" name="utilities" defaultValue={1}>
                <ToggleButton variant="light" value={1} onClick={() => changeUtility(1)}>Electricity</ToggleButton>
                <ToggleButton variant="light" value={2} onClick={() => changeUtility(2)}>Hot Water</ToggleButton>
                <ToggleButton variant="light" value={3} onClick={() => changeUtility(3)}>Chilled Water</ToggleButton>
                <ToggleButton variant="light" value={4} onClick={() => changeUtility(4)}>Steam</ToggleButton>
            </ToggleButtonGroup>
        );
    }
}

export default UtilityToggle