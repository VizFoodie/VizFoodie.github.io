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
            x: -2.303949328367718,
            y: -1.329700976225118,
            z: 0.41927207492256047
          }
        },
      },
      margin: {
        l: 50,
        r: 50,
        b: 0,
        t: 0
      },

    };

    Plotly.newPlot('recipeTime', data, layout);
    
  });
}



plotFromCSV();