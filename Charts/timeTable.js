Plotly.d3.csv("CSV/recipesSample_Minutes.csv", function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
  }

  var values = []
  values.push(unpack(rows, 'Name'))
  values.push(unpack(rows, 'PrepTime'))
  values.push(unpack(rows, 'CookTime'))
  values.push(unpack(rows, 'RecipeIngredientParts'))

  var data = [{
    type: 'table',
    header: {
      values: [["<b>Name</b>"],["<b>Prep Time (min)</b>"],["<b>Cook Time (min)</b>"],["<b>Ingredients</b>"]],
      align: "center",
      height: 40,
      line: {width: 1, color: 'black'},
      fill: {color: "#F5F5F5"},
      font: {family: "sans-serif", size: 14, color: "black"}
    },
    cells: {
      values: values,
      align: "center",
      height: 60,
      line: {color: "black", width: 1},
      font: {family: "sans-serif", size: 14, color: ["black"]}
    }
  }]

  var layout = {
    height: 600,
    margin: {
      b: 100,
      pad: 0,
    },
  };

  Plotly.newPlot('timeTable', data, layout);
});
