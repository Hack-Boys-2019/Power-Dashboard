import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

function changeUtility(value) {
    var color = '#2ecc71'
    var secondColor = '#27ae60'
    switch (value) {
        case 1: 
            color = '#2ecc71'
            secondColor = '#27ae60'
            break;
        case 2: 
            color = '#e67e22'
            secondColor = '#d35400'
            break;
        case 3: 
            color = '#3498db'
            secondColor = '#2980b9'
            break;
        case 4: 
            color = '#34495e'
            secondColor = '#1c2732'
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
            <div>
                <ToggleButtonGroup id="utility-toggle" type="radio" name="utilities" defaultValue={1}>
                    <ToggleButton variant="light" value={1} onClick={() => changeUtility(1)}>Electricity</ToggleButton>
                    <ToggleButton variant="light" value={2} onClick={() => changeUtility(2)}>Hot Water</ToggleButton>
                    <ToggleButton variant="light" value={3} onClick={() => changeUtility(3)}>Chilled Water</ToggleButton>
                    <ToggleButton variant="light" value={4} onClick={() => changeUtility(4)}>Steam</ToggleButton>
                </ToggleButtonGroup>

                <ToggleButtonGroup id="hourly-toggle" type="radio" name="hourly" defaultValue={1}>
                    <ToggleButton variant="light" value={1} onClick={() => function (){}}>Hourly</ToggleButton>
                    <ToggleButton variant="light" value={2} onClick={() => function (){}}>Daily</ToggleButton>
                </ToggleButtonGroup>
            </div>
        );
    }
}

export default UtilityToggle