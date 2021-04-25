/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.



*/
// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

// ##############################
// // // general variables for charts
// #############################

const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10,
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: 0,
        ticks: {
          display: false,
          maxTicksLimit: 7,
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false,
        },
      },
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false,
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false,
        },
      },
    ],
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 },
  },
};

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10,
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 7,
        },
      },
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false,
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false,
        },
      },
    ],
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 },
  },
};

// ##############################
// // // Dashboard view - Panel chart
// #############################

const dashboardPanelChart = {
  data: (canvas) => {
    const fullData = require('../data')
    var _ = require('lodash');
    const moment = require('moment')
    // console.log('===', fullData)
    const monthName = item => moment(item['Created At']).format('MMMM, YYYY');
    const result = _.groupBy(fullData, monthName);

    const monthlyTweets = [];
    Object.keys(result).forEach(key => monthlyTweets.push({
      date: key,
      Tweets: result[key].length
    }));

    monthlyTweets.sort((a, b) => {
      var dateA = new Date(a.date), dateB = new Date(b.date)
      return dateA - dateB
    });

    let months = []
    let numberOfTweets = []

    monthlyTweets.forEach(el => {
      // let quarter = moment(el.date).utc().quarter() + moment(el.date).format(', YYYY')
      months.push(el.date)
      numberOfTweets.push(el.Tweets)
    })

    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: months.slice(Math.max(months.length - 12, 0)),
      datasets: [
        {
          label: "Total Crimes",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: numberOfTweets.slice(Math.max(numberOfTweets.length - 12, 0)),
        },
      ],
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10,
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)",
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
          },
        },
      ],
    },
  },
};

// ##############################
// // // Dashboard view - Shipped Products - Card
// #############################

const dashboardShippedProductsChart = {
  data: (canvas) => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 300, 0, 50);
    // var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    // BLUE
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));

    // var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);

    // gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    // gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");


    const fullData = require('../data')
    var _ = require('lodash');
    const result = _.groupBy(fullData, el => el.Locations);

    const monthlyTweets = [];
    Object.keys(result).forEach(key => monthlyTweets.push({
      location: key,
      Tweets: result[key].length
    }));

    monthlyTweets.sort((a, b) => {
      return b.Tweets - a.Tweets
    });

    let months = []
    let numberOfTweets = []

    monthlyTweets.forEach(el => {
      months.push(_.startCase(_.toLower(el.location.slice(0, -12))))
      numberOfTweets.push(el.Tweets)
    })
    months = months.slice(0, 7)
    numberOfTweets = numberOfTweets.slice(0, 7)

    // const fullData = require('../data')
    // var _ = require('lodash');
    // let crimeCountsTemp = _.groupBy(fullData, el => el.Locations)
    // let crimeTypes = []
    // let crimeCounts = [];
    // Object.keys(crimeCountsTemp).forEach(key => {
    //   crimeCounts.push(crimeCountsTemp[key].length)
    //   crimeTypes.push(key)
    // }
    // );


    // crimeTypes = crimeTypes.slice(Math.max(crimeTypes.length - 7, 0))
    // crimeCounts = crimeCounts.slice(Math.max(crimeCounts.length - 7, 0))

    // console.log(crimeTypes)
    // console.log(crimeCounts)
    return {
      labels: months,
      datasets: [
        {
          label: "Tweets",
          // borderColor: "#f96332",
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: numberOfTweets,
        },
      ],
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid,
};

// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart = {
  data:
    (timeRange) =>

      (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#18ce0f");
        gradientStroke.addColorStop(1, chartColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));

        const fullData = require('../data')
        var _ = require('lodash');
        const moment = require('moment')
        // console.log('===', fullData)
        const monthName = item => moment(item['Created At']).format('ll');
        const result = _.groupBy(fullData, monthName);

        let monthlyTweets = [];
        Object.keys(result).forEach(key => monthlyTweets.push({
          date: key,
          Tweets: result[key].length
        }));

        monthlyTweets.sort((a, b) => {
          let dateA = new Date(a.date), dateB = new Date(b.date)
          return dateA - dateB
        });

        let timeDict = {
          'Last Month':30,
          'Last 3 Months': 90,
          'Last 6 Months': 180
        }

        let timeRangeInt = timeDict[timeRange]

        let startDate = moment().subtract(timeRangeInt, 'd').format('ll');
        let endDate = moment().endOf('day').format('ll');
        console.log(startDate)
        console.log(endDate)

        monthlyTweets = _.filter(monthlyTweets,
          (each) => {
            return moment(each.date).isBetween(startDate, endDate);
          });

        let months = []
        let numberOfTweets = []

        monthlyTweets.forEach(el => {
          // let quarter = moment(el.date).utc().quarter() + moment(el.date).format(', YYYY')
          months.push(el.date)
          numberOfTweets.push(el.Tweets)
        })
        // months = months.slice(Math.max(months.length - 7, 0))
        // numberOfTweets = numberOfTweets.slice(Math.max(numberOfTweets.length - 7, 0))

        return {
          labels: months,
          datasets: [
            {
              label: "Tweets",
              borderColor: "#18ce0f",
              pointBorderColor: "#FFF",
              pointBackgroundColor: "#18ce0f",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              backgroundColor: gradientFill,
              borderWidth: 2,
              data: numberOfTweets,
            },
          ],
        };
      },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid,
};

// ##############################
// // // Dashboard view - Bar Chart - Card
// #############################

const dashboard24HoursPerformanceChart = {
  data: (canvas) => {

    // var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    // gradientStroke.addColorStop(0, "#80b6f4");
    // gradientStroke.addColorStop(1, chartColor);

    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 300, 0, 50);

    // RED
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    // BLUE
    // gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    // gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));

    const fullData = require('../data')
    var _ = require('lodash');
    let crimeCountsTemp = _.groupBy(fullData, el => el.Crime)
    let crimeTypes = []
    let crimeCounts = [];
    Object.keys(crimeCountsTemp).forEach(key => {
      crimeCounts.push(crimeCountsTemp[key].length)
      crimeTypes.push(_.startCase(_.toLower(key)))
    }
    );
    return {
      labels: crimeTypes,
      datasets: [
        {
          label: "Crime Count",
          backgroundColor: gradientFill,
          // BLUE
          // borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          // RED
          borderColor: "#f96332",
          pointBackgroundColor: "#f96332",
          // pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: crimeCounts,
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            maxTicksLimit: 7,
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false,
          },
        },
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false,
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 },
    },
  },
};

module.exports = {
  dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
  dashboardShippedProductsChart, // Chart for Dashboard view - Shipped Products Card
  dashboardAllProductsChart, // Chart for Dashboard view - All products Card
  dashboard24HoursPerformanceChart, // Chart for Dashboard view - 24 Hours Performance Card
};
