function plotFromCSV() {
  Plotly.d3.csv("CSV/recipesCookTime.csv", function(err, rows) {
    function unpack(rows, key) {
      return rows.map(function(row)
      { return row[key]; });}

    var recipeTime = {
      x: unpack(rows, 'CookTime'),
      y: unpack(rows, 'PrepTime'),
      z: unpack(rows, 'TotalTime'),
      mode: 'markers',
      marker: {
        size: 12,
        line: {
          color: 'rgba(217, 217, 217, 0.14)',
          width: 0.5},
        opacity: 0.8},
      type: 'scatter3d',
      name: 'Recipe Times (min)'
    };

    var data = [recipeTime];

    var layout = {
      scene: {
        xaxis:{title: 'Cook Time'},
        yaxis:{title: 'Prep Time'},
        zaxis:{title: 'Total Time'},
      },
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
      }};

    Plotly.newPlot('recipeTime', data, layout);



  });
}



plotFromCSV();