import React from 'react'
import ReactApexChart from 'react-apexcharts';
class ApexDashboardDonutChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [44, 55, 13, 43, 22],
            options: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (
            <div id="chart" className='h-full flex items-center mt-4'>
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={600} width={300} />
            </div>
        );
    }
}
const DashboardDonutChart = () => {
    return (
        <div>
            <ApexDashboardDonutChart />
        </div>
    )
}

export default DashboardDonutChart