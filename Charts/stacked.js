function plotFromCSV() {
  Plotly.d3.csv("CSV/recipesCookTime.csv", function(err, rows) {
    function unpack(rows, key) {
      return rows.map(function(row)
      { return row[key]; });}

    var trace1 = {
      x:unpack(rows, 'Name'),
      y:unpack(rows, 'CookTime'),
      type: 'bar',
      name: 'Cook Time',
      transforms: [{
        type: 'sort',
        target: 'y',
        order: 'ascending'
      }],
    };

    var trace2 = {
      x:unpack(rows, 'Name'),
      y:unpack(rows, 'PrepTime'),
      type: 'bar',
      name: 'Prep Time',
      transforms: [{
        type: 'sort',
        target: 'y',
        order: 'ascending'
      }],
    };

    var trace3 = {
      x:unpack(rows, 'Name'),
      y:unpack(rows, 'TotalTime'),
      type: 'bar',
      name: 'Total Time',
      transforms: [{
        type: 'sort',
        target: 'y',
        order: 'ascending'
      }],
    };

    var data = [trace1, trace2, trace3];

    var layout = {
      barmode: 'stack',
      height: 900,
      margin: {
        b: 300,
        pad: 0,
      },
      yaxis: {
        range: [-37, 400],
        title: 'Time (Min)',
      },
      xaxis: {
        range: [-0.54,27.6],

        tickangle: 45
      }
    };

    Plotly.newPlot('stacked', data, layout, {scrollZoom: true});
    // var myPlot = document.getElementById('recipeTime');
    // myPlot.on('plotly_relayout', function(data){console.log(data)});
  });
}



plotFromCSV();