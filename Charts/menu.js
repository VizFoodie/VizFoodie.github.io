Plotly.d3.csv("CSV/recipesNutrition.csv", function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
  }

  var values = []
  values.push(unpack(rows, 'Name'))

  var data = [{
    type: 'table',
    header: {
      values: [["<b>Name</b>"]],
      align: "center",
      height: 40,
      line: {width: 1, color: 'black'},
      fill: {color: "#F5F5F5"},
      font: {family: "Arial", size: 14, color: "black"}
    },
    cells: {
      values: values,
      align: "center",
        height: 40,
      line: {color: "black", width: 1},
      font: {family: "Arial", size: 13, color: ["black"]}
    }
  }]

  Plotly.newPlot('menu', data);
});
