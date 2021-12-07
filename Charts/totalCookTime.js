
Plotly.d3.csv("CSV/timeIngredients.csv", function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
  }
  var desired_maximum_marker_size = 3;
var trace1 = {
  x: unpack(rows,  'CookTime'),
  y: unpack(rows, 'PrepTime'),
  text: unpack(rows, 'Name'),
  mode: 'markers',
  type: 'scatter',
  marker: {
    size: unpack(rows, 'RecipeIngredientParts'),
    opacity: 0.5,
    sizeref: 2.0 / (desired_maximum_marker_size*2),
  },
  hovertemplate:
      "<br><b>Name</b>: %{text}</br>" +
      "<b>Cook Time</b>: %{x} min" +
      "<br><b>Prep Time</b>: %{y} min</br>" +
      "<b># of ingredients</b>: %{marker.size} " +
      "<extra></extra>",
};
  
var data = [ trace1 ];

var layout = {
  font: {
    family: 'sans-serif',
  },
  height: 900,
  margin: {
    b: 310,
    pad: 0,
  },
  hovermode: "closest",
  yaxis: {
    range: [-1, 80],
    title: 'Prep Time (min)',
  },
  xaxis: {
    range: [-5,100],
    title: 'Cook Time (min)',
  }
};
  
Plotly.newPlot('scatterTime', data, layout, {scrollZoom: true})
  // var myPlot = document.getElementById('scatterTime');
  // myPlot.on('plotly_relayout', function(data){console.log(data)});
});
