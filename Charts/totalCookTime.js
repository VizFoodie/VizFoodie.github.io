
Plotly.d3.csv("CSV/recipesCookTime.csv", function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
  }

var trace1 = {
  x: unpack(rows, 'Name'),
  y: unpack(rows, 'TotalTime'),
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

  yaxis: {
    range: [-37, 367],
    title: 'Time (Min)',
  },
  xaxis: {
    range: [-0.54,27.6],

    tickangle: 45
  }
};
  
Plotly.newPlot('scatterTime', data, layout, {scrollZoom: true})
  // var myPlot = document.getElementById('scatterTime');
  // myPlot.on('plotly_relayout', function(data){console.log(data)});
});
