function plotFromCSV() {
  Plotly.d3.csv("CSV/timeIngredients.csv", function(err, rows) {
    function unpack(rows, key) {
      return rows.map(function(row)
      { return row[key]; });}

    var recipeTime = {
      x: unpack(rows, 'TotalTime'),
      y: unpack(rows, 'RecipeIngredientParts'),
      text: unpack(rows, 'Name'),
      mode: 'markers',

      marker: {
        size: 10,
        line: {
          width: 0.5},
        opacity: 0.8,
      },
      type: 'scatter',
    };

    var data = [recipeTime];

    var layout = {
      height: 500,
      hovermode: 'closets',
      width: 600,
      xaxis: {
        title: 'Total Time'
      },
      yaxis: {
        title: '# of ingredient'
      }
    };

    Plotly.newPlot('totalVSingredient', data, layout, {modeBarButtonsToRemove: ['toImage']});
    // var myPlot = document.getElementById('recipeTime');
    // myPlot.on('plotly_relayout', function(data){console.log(data)});
  });
}

plotFromCSV();