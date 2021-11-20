function plotFromCSV() {
  Plotly.d3.csv("CSV/recipeIngredientDistribution.csv", function(err, rows) {
    processData(rows);
  });
}

/**
function processData(allRows){
  let ingredients = [];
  let ingredientslist = [];
  let temp = [];
  let ingredientnumber = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  let row;

  for(let i = 0; i < allRows.length; i++) {
    row = allRows[i];

    ingredients.push(row["RecipeIngredientParts"]);
  }

  for(let i = 0; i < allRows.length; i++) {

    ingredientslist.push(ingredients[i].substr(1, ingredients[i].length).replace(/[,)(]+/g, '').split("\""));
    temp.push(Math.floor(ingredientslist[i].length / 2));
  }

  for(let i = 0; i < temp.length; i++){
    for(let k = 0; k < ingredientnumber.length; k++){
      if(temp[i] === k){
        ingredientnumber[k] = ingredientnumber[k] + 1;
      }
    }
  }


  console.log("Ingredients", ingredientnumber);
}
*/

let ingredientDistribution = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Distribution of Number of Ingredients Per Recipe',
    margin: '15px auto',
    alpha: 1,
    backgroundColor: 'none',
    fontColor: '#7E7E7E',
    fontSize: '22px',
    fontFamily: 'Playfair Display',
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
  scrollY: {
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
    label: {
      text: 'Number of Ingredients',
      bold: true,
      fontAngle: 0,
      fontColor: '#7E7E7E',
      fontFamily: 'Playfair Display',
      fontSize: '12px',
    },
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
  },
  scaleY: {
    values: '0:60000:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Number of Recipes',
      bold: true,
      fontAngle: 0,
      fontColor: '#7E7E7E',
      fontFamily: 'Playfair Display',
      fontSize: '12px',
      offsetX: '70px',
      offsetY: '-190px'
    },
    lineColor: '#7E7E7E',
  },
  tooltip: {
    text: '%v recipes uses <br> %kl ingredients'
  },

  series: [
    {
      values: [2271,8672,19653,31224,42047,49504,53629,55018,52648,47762,40514,32259,24840,18475,13397,9586,6677,4573,3036,2062,1434,974,665,493,311,230,161,111,81,71,43,33,25,24,8,13,13,7,11,5,1,2,2,2,1,0
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#8dd3c7',
      fontFamily: 'Playfair Display',
    }

  ]
};

zingchart.render({
  id : 'ingredientDistribution',
  data : ingredientDistribution,
});

plotFromCSV();