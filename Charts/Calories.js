function plotFromCSV() {
  Plotly.d3.csv("CSV/recipesNutrition.csv", function(err, rows) {
    processData(rows);
  });
}

plotFromCSV();

let Name = [];
let Calories = [];

function processData(allRows){
  let row;

for(let i = 0; i < allRows.length; i++) {
  row = allRows[i];
  Name.push(row["Name"]);
  Calories.push(row["Calories"]);
}

var trace1 = {
  x: Name,
  y: Calories,
  mode: 'markers',
  type: 'scatter',
  name: 'Team B',
  text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
  marker: { size: 12 }
};

  var data = [ trace1 ];

var layout = {
  xaxis: {
    range: [ 0.75, 5.25 ]
  },
  yaxis: {
    range: [0, 8]
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'grey',
    }
  },
  title:'Data Labels on the Plot'
};
  
  Plotly.newPlot('myDiv', data, layout);
