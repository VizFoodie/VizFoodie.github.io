
Plotly.d3.csv("CSV/recipesNutrition.csv", function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
  }

var trace1 = {
  x: unpack(rows, 'Name'),
  y: unpack(rows, 'Calories'),
  mode: 'markers',
  type: 'scatter',
  marker: { size: 12 },
  transforms: [{
    type: 'sort',
    target: 'y',
    order: 'ascending'
  }],
};
  
var data = [ trace1 ];

var layout = {
  height: 900,
  margin: {
    b: 500,
    pad: 0,
  },

  title:'Data Labels on the Plot',
  yaxis: {
    range: [0, 800],
    automargin: true,
  }
};
  
Plotly.newPlot('myDiv', data, layout, {scrollZoom: true})

});
