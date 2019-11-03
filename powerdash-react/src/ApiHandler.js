import React from 'react';
import axios from 'axios'

class ApiHandler extends React.Component {
    componentDidMount() {
        var data = {
            "operation":"avg",
            "type":"all",
            "id":"", 
            "hourly_or_daily": "hourly",
            "start_time":"2017-08-17",
            "end_time":"2019-10-12"
        };
        axios.post(
            'http://localhost:8080/api', 
            JSON.stringify(data), 
            {
                headers: {
                    'Content-Type': 'text/plain'
                }
            }).then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            }
        );

    }

    render() {
        return (<data></data>);
    }
}

export default ApiHandler