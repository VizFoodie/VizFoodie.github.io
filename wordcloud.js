Plotly.d3.csv("recipeCategory.csv", 'text/csv', function (data) {

  data = data.replace(/^[#@][^\r\n]+[\r\n]+/mg, '');
  data = d3.csvParse(data);
  var test = [];
  var test2 =[]

  for(let i = 0; i < data.length; i++) {
    test.push(data[i].RecipeCategory);
    test2.push(data[i].RecipeName);
  }

  tableDiv = document.getElementById('table');

  var tableData = [{
    type: 'table',
    header: {
      values: [["<b>test</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: 'rgba(120, 120, 120, 1)' },
      font: { family: "Montserrat", size: 12, color: "white" }
    },
    cells: {
      values: [test],
      align: ["center", "right"],
      line: { color: "black", width: 1 },
      font: { family: "Montserrat", size: 11, color: "black" }
    },
  }];

  var tableLayout = {
    title: "Cholera Outbreak Attacks & Deaths",
    font: {
      family: 'Montserrat',
      size: 16,
      color: '#000000'
    }
  };

  var myTable = Plotly.plot(tableDiv, tableData, tableLayout);
});