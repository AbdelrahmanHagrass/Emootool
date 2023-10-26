import React from "react"
import BarChartComponent from './BarChartComponent'
import PieChartComponent from './PieChartComponent'
import MultiLineComponent from './MultiLineComponent'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
export default function Visualization({ handleDurationChange, duration, graphTweets }) {
    const [chart, setChart] = React.useState('bar');
    const handleChange = (event) => {
        setChart(event.target.value);
    };
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={duration}
                    style={{ width: 150, marginRight: 10 }}
                    label="Chart Type"
                    onChange={handleDurationChange}
                >
                    <MenuItem value={"week"}>Last 7 Days</MenuItem>
                    <MenuItem value={"month"}>Last Month</MenuItem>
                    <MenuItem value={"year"}>Last Year</MenuItem>
                </Select>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={chart}
                    style={{ width: 150, marginRight: 10 }}
                    label="Chart Type"
                    onChange={handleChange}
                >
                    <MenuItem value={"bar"}>Bar Chart</MenuItem>
                    <MenuItem value={"pie"}>Pie Chart</MenuItem>
                    <MenuItem value={"graph"}>Graph</MenuItem>
                </Select>
            </div>
            {chart === "bar" && <BarChartComponent graphTweets={graphTweets} />}
            {chart === "pie" && <PieChartComponent graphTweets={graphTweets} />}
            {chart === "graph" && <MultiLineComponent graphTweets={graphTweets} />}
        </div>
    )
}