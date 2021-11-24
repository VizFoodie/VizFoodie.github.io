function plotFromCSV() {
  Plotly.d3.csv("CSV/recipesCookTime.csv", function(err, rows) {
    function unpack(rows, key) {
      return rows.map(function(row)
      { return row[key]; });}

    var recipeTime = {
      x: unpack(rows, 'CookTime'),
      y: unpack(rows, 'PrepTime'),
      z: unpack(rows, 'TotalTime'),
      text: unpack(rows, 'Name'),
      mode: 'markers',
      marker: {
        size: 12,
        line: {
          color: 'rgba(217, 217, 217, 0.14)',
          width: 0.5},
        opacity: 0.8,
        color: unpack(rows, 'TotalTime'),
        colorscale: "Blues",
      },
      type: 'scatter3d',
      hovertemplate:
          "<br><b>Name</b>: %{text}</br>" +
          "<b>Cook Time</b>: %{x}" +
          "<br><b>Prep Time</b>: %{y}</br>" +
          "<b>Total Time</b>: %{z}" +
          "<extra></extra>"
    };

    var data = [recipeTime];

    var layout = {
      scene: {
        xaxis:{title: 'Cook Time'},
        yaxis:{title: 'Prep Time'},
        zaxis:{title: 'Total Time'},
        camera: {
          eye: {
            x: -1.3287580974990036,
            y: -1.3375731722878352,
            z: 0.5806192559619149
          },
          center: {
            x: -0.0163040773792296,
            y: -0.029963282120377546,
            z: -0.2088584456851563
          },
          projection: {type: 'perspective'},
          up: {x: 0, y: 0, z: 1},
        },
      },
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
      },
    };

    Plotly.newPlot('recipeTime', data, layout);
    // var myPlot = document.getElementById('recipeTime');
    // myPlot.on('plotly_relayout', function(data){console.log(data)});
  });
}



plotFromCSV();