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

var trace2 = {
  x: Name,
  y: Calories,
  mode: 'markers',
  type: 'scatter',
  name: 'Team B',
  text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
  marker: { size: 12 }
};
