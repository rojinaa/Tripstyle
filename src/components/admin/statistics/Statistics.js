import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "./Statistics.css";
import { Bar } from 'react-chartjs-2';
import { callbackify } from "util";
import TopHeader from "../AdminTopHeader";

export class Statistics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryStats: [],
      chartData: {
        labels: [],
        datasets: []
      }
    }
  }

  componentDidMount() {
    this.fetchStats();

  }

  mapStats() {
    let categories = []
    let totals = []
    this.state.categoryStats.map(stat => {
      categories.push(stat.category)
      totals.push(stat.sum)
      
    })
    console.log(categories)
    console.log(totals)

    this.setState({
      chartData: {
        labels: categories,
        datasets: [{
          data: totals,
          label: 'Total sold per category',
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]

        }]
      } 
    }, () => console.log('this.state.chartData', this.state.chartData))

  }

  fetchStats() {
		fetch('https://localhost:5001/api/category/stats')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoading: false,
				categoryStats: json
			}, () => this.mapStats())
    })
  }

  render() {

    return (
      <div>
               <TopHeader/>
      <Container style={{ marginTop: "7em" }}>
 
        <div className="chart">
          <Bar
            height={250}
            width={100}
            data={this.state.chartData}
            options={{
              maintainAspectRatio: false,
              title: {
                display: true,
                text: 'Total sold per category',
                fontSize: 25
              },
              legend: {
                display: true,
                position: 'bottom'
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }}
          />
        </div>

      </Container>
    </div>
    );
  }
}

export default Statistics;

