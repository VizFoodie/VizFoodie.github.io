// function plotFromCSV() {
//   Plotly.d3.csv("CSV/recipesNutrition.csv", function(err, rows) {
//     processData(rows);
//   });
// }

// plotFromCSV();

// let Name = [];
// let Calories = [];

// function processData(allRows){
//   let row;

// for(let i = 0; i < allRows.length; i++) {
//   row = allRows[i];
//   Name.push(row["Name"]);
//   Calories.push(row["Calories"]);
// }

// var trace1 = {
//   x: Name,
//   y: Calories,
//   mode: 'markers',
//   type: 'scatter',
//   name: 'Team B',
//   text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
//   marker: { size: 12 }
// };

//   var data = [ trace1 ];

// var layout = {
//   title:'Data Labels on the Plot'
// };
  
//   Plotly.newPlot('myDiv', data, layout);
var trace1 = {
  y: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  mode: 'markers',
  marker: {
    size: 40,
    color: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
  }
};

var data = [trace1];

var layout = {
  title: 'Scatter Plot with a Color Dimension'
};

Plotly.newPlot('myDiv', data, layout);
