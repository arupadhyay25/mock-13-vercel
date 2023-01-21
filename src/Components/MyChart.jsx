import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

let DoughnutChart = ({ yearlyInvestment, timePeriod, rateOfInterest }) => {
    const [chartData, setChartData] = useState({
        labels: ['Investment Amount', 'Total Interest', 'Maturity Value'],
        datasets: [
            {
                data: [],
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870']
            }
        ]
    });
    useEffect(() => {
        const investmentAmount = yearlyInvestment * timePeriod;
        const totalInterest = investmentAmount * rateOfInterest;
        const maturityValue = investmentAmount + totalInterest;
        setChartData({
            labels: ['Investment Amount', 'Total Interest', 'Maturity Value'],
            datasets: [
                {
                    data: [investmentAmount, totalInterest, maturityValue],
                    backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
                    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870']
                }
            ]
        });
    }, [yearlyInvestment, timePeriod, rateOfInterest]);
    return (
        <Doughnut data={chartData} />
    );
};

export default DoughnutChart;
