import React from "react";
import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Line, Bar } from "react-chartjs-2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const WeeklyMood = () => {
  const options = {
    responsive: true,
    
    plugins: {
      legend: {
        display: false,
        position: "top",
      },

      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      y: {
        max: 100,
        min: 0, 
        grid : {
          borderDash: [10, 10],
          color: "#A7A7A7",
        },
        
        ticks: {
          stepSize: 25,
          font: {
            size: 14,
            family: "'Verdana', 'san-serif'",
            color: "#A7A7A7",
          },
        }
      },

      x: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 25,
          font: {
            size: 14,
            family: "'Verdana', 'san-serif'",
          },
        }
      }
    }
  };

  const labels = [
    "Sun.",
    "Mon.",
    "Tue.",
    "Wed.",
    "Thur.",
    "Sat.",
    "Sun.",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * 75)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: "0.50",
        pointRadius: 0,
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: "0.50",
        pointRadius: 0,
      },
    ],
  };
  return <Line options={options} data={data} />;
};

const TodayMood = () => {
  const options = {
    repsonsive: true,
    option : {
      maintainAspectRatio : false,
    },

    radius: 75,
    plugins: {
      legend: {
        display : false,
      }
    }
  };
  const data = {
    labels: ["Suprised", "Happy", "Angry"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0)",
          "rgba(54, 162, 235, 0)",
          "rgba(255, 206, 86, 0)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} options={options} />;
};

const MonthlyBreakdown = () => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
      legend: {
        display: false,
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor((Math.random() + 0.1) * 5)),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor((Math.random() + 0.1) * 5)),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Dataset 3",
        data: labels.map(() => Math.floor((Math.random() + 0.1) * 5)),
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
function Statistics(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(6),
    textAlign: "left",
    fontFamily: "Libre Baskerville",
    color: "#272727",
    background: "#F4F4F4",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "31px",
    height: "100%",
  }));
  
  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Item>
            <h2>Weekly Mood Chart</h2>
            <WeeklyMood />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <h2>Calender View </h2>
            <Calendar />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <h2>Today’s Mood</h2>           
            <TodayMood />
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <h2>Monthly Breakdown</h2>
            <MonthlyBreakdown />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Statistics;
