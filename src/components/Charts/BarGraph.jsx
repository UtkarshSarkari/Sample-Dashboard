import Chart from 'react-apexcharts';
import './BarGraph.css';
const chartOptions = {
    series: [{
        name: 'Desktop',
        data: [70, 60, 90, 70, 26]
    }, {
        name: 'Tablet',
        data: [45, 54 , 56, 35, 34]
    },
    {
        name: 'Mobile',
        data: [20, 25 , 40, 10, 9]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}
export default function BarGraph() {
    return (
        <div className="graph">
            <span className="userOverview">Users By Device</span>
            <hr />
            <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type='bar'
                height= '90%'
            />
        </div>
    );
}
