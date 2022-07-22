import Chart from 'react-apexcharts';
import './Chart.css';
const chartOptions = {
    series: [{
        name: 'Current Month',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Past Month',
        data: [25, 74 , 56, 25, 34, 66, 50, 45, 78]
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
            categories: ['0', '500', '1.0K', '1.5K', '2.0K', '2.5K', '3.0K', '3.5K', '4.0K', '4.5K']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}
export default function Charts() {
    return (
        <div className="chart">
            <span className="userOverview">Users Overview</span>
            <hr />
            <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type='line'
                height= '90%'
            />
        </div>
    );
}
