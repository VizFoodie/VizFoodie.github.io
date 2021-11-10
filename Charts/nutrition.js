plotFromCSV();
let Name = [];
let Calories = [];
let FatContent = [];
let SaturatedFatContent = [];
let CholesterolContent = [];
let SodiumContent = [];
let CarbohydrateContent = [];
let FiberContent = [];
let SugarContent = [];
let ProteinContent = [];
function plotFromCSV() {
  Plotly.d3.csv("CSV/recipesNutrition.csv", function(err, rows) {
    processData(rows);
  });
}

function processData(allRows){
  let row;

  for(let i = 0; i < allRows.length; i++) {
    row = allRows[i];

    Name.push(row["Name"]);
    Calories.push(row["Calories"]);
    FatContent.push(row["FatContent"]);
    SaturatedFatContent.push(row["SaturatedFatContent"]);
    CholesterolContent.push(row["CholesterolContent"]);
    SodiumContent.push(row["SodiumContent"]);
    CarbohydrateContent.push(row["CarbohydrateContent"]);
    FiberContent.push(row["FiberContent"]);
    SugarContent.push(row["SugarContent"]);
    ProteinContent.push(row["ProteinContent"]);

  }
  console.log("TEST", Name);
  console.log("Sodium", SodiumContent);


}

let nutrition = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Recipe Nutritions',
    margin: '15px auto',
    alpha: 1,
    backgroundColor: 'none',
    fontColor: '#7E7E7E',
    fontSize: '22px'
  },
  legend: {
    margin: '65px auto auto auto',
    alpha: 0.05,
    borderWidth: '0px',
    layout: 'x3',
    marker: {
      type: 'circle',
      borderColor: 'none',
      size: '10px'
    },
    maxItems: 3,
    overflow: 'page',
    pageOff: {
      alpha: 0.65,
      backgroundColor: '#7E7E7E',
      size: '10px'
    },
    pageOn: {
      alpha: 0.65,
      backgroundColor: '#000',
      size: '10px'
    },
    pageStatus: {
      color: 'black'
    },
    shadow: false,
    toggleAction: 'remove'
  },
  plot: {
    animation: {
      effect: 'ANIMATION_SLIDE_BOTTOM'
    },
    'background-color': "#ff0080",
    'bar-width': "50%"
  },
  plotarea: {
    margin: '80 60 100 60',
    y: '125px'
  },
  scrollX: {
    bar: {
      backgroundColor: '#eee',
      height: '10px',
      alpha: 0.5
    },
    handle: {
      backgroundColor: "#7e7e7e",
    }
  },
  scaleX: {
    guide: {
      visible: false
    },
    item: {
      fontColor: '#7e7e7e',
      fontAngle: 15,
    },
    labels: ["Quick Pasta Supper", 'Q4-20', 'Q1-21', 'Q2-21'],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 10],
  },
  scaleY: {
    values: '0:200:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Nutrition (g)',
      bold: true,
      fontAngle: 0,
      fontColor: '#7E7E7E',
      fontFamily: 'arial',
      fontSize: '12px',
      offsetX: '20px',
      offsetY: '-190px'
    },
    lineColor: '#7E7E7E'
  },
  tooltip: {
    text: '%kl <br> %v (g) %t'
  },

  series: [
    {
      text: 'Calories',
      values: [2.02, 2.59, 2.5, 2.91, 37.47, 57.59, 45.65, 37.43, 37.47, 57.59, 45.65, 37.43, 37.47, 57.59, 45.65, 37.43],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#fdb462'
    },
    {
      text: 'Fat Content',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 100],
      alpha: 0.95,
      borderRadiusTopLeft: '7px',
      backgroundColor: '#8dd3c7'
    },
    {
      text: 'Saturated Fat Content',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#fb8072'
    },
    {
      text: 'Cholesterol Content',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#80b1d3'
    },
    {
      text: 'Sodium Content',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#b3de69'
    },
    {
      text: 'Carbohydrate Content',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#8993c7'
    },
    {
      text: 'Fiber Content',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#de69c7'
    },
    {
      text: 'Sugar Content',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#b369de'
    },
    {
      text: 'Protein Content',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#dade69'
    }



  ]
};


zingchart.render({
    id: 'nutrition',
    data: nutrition,
});


