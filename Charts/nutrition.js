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
    maxItems: 6,
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
      height: '10px'
    }
  },
  scaleX: {
    guide: {
      visible: false
    },
    item: {
      fontColor: '#7e7e7e'
    },
    labels: ['Q3-20', 'Q4-20', 'Q1-21', 'Q2-21'],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomSnap: true,
  },
  scaleY: {
    values: '0:60:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: '$ Billions',
      bold: true,
      fontAngle: 0,
      fontColor: '#7E7E7E',
      fontFamily: 'arial',
      fontSize: '14px',
      offsetX: '20px',
      offsetY: '-190px'
    },
    lineColor: '#7E7E7E'
  },
  tooltip: {
    text: '$%v Billion'
  },

  series: [
    {
      text: 'Apple',
      values: [37.47, 57.59, 45.65, 37.43, 37.47, 57.59, 45.65, 37.43, 37.47, 57.59, 45.65, 37.43, 37.47, 57.59, 45.65, 37.43],
      alpha: 0.95,
      borderRadiusTopLeft: '7px',
      backgroundColor: '#8993c7'
    },
    {
      text: 'Facebook',
      values: [2.02, 2.59, 2.5, 2.91, 37.47, 57.59, 45.65, 37.43, 37.47, 57.59, 45.65, 37.43, 37.47, 57.59, 45.65, 37.43],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#fdb462'
    },
    {
      text: 'Google',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      alpha: 0.95,
      borderRadiusTopLeft: '7px',
      backgroundColor: '#8dd3c7'
    },
    {
      text: 'Microsoft',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#fb8072'
    },
    {
      text: 'Amazon',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#80b1d3'
    },
    {
      text: 'Cognizant',
      values: [13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86, 13.4, 14.11, 14.89, 16.86],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#b3de69'
    }



  ]
};


zingchart.render({
    id: 'nutrition',
    data: nutrition,
});


