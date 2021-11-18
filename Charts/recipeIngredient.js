function plotFromCSV() {
  Plotly.d3.csv("CSV/recipeIngredients.csv", function(err, rows) {
    processData(rows);
  });
}

/**
function processData(allRows){
  let ingredients = [];
  let ingredientslist = [];
  let temp = [];
  let row;

  for(let i = 0; i < allRows.length; i++) {
    row = allRows[i];

    ingredients.push(row["RecipeIngredientParts"]);
  }

  for(let i = 0; i < allRows.length; i++) {

    ingredientslist.push(ingredients[i].substr(1, ingredients[i].length).replace(/[,)(]+/g, '').split("\""));
    temp.push(Math.floor(ingredientslist[i].length / 2));
  }


  console.log("Ingredients", temp);
}*/

function processData(allRows){
  let ingredients = [];
  let name = [];
  let row;

  for(let i = 0; i < allRows.length; i++) {
    row = allRows[i];

    ingredients.push(row["RecipeIngredientParts"]);
    name.push(row["Name"]);
  }

  console.log("Name", name);
}


let numberOfIngredients = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Ingredients Per Recipe',
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
    marker: {
      type: 'circle',
      borderColor: 'none',
      size: '10px'
    },
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
    labels: ['Chocolate Chocolate Chip Pancakes', 'Go Patriots Meatballs', 'Green Onion Fritters', 'Lower Fat Reuben Bites', "Dad's Tuna Melt Casserole", 'Hot Italian Cheesy Dip', 'Almond Amaretto Fudge', 'Pina Colada Sherbet', 'Bleu Cheese Bread', 'Chicken Casadillas', 'Kung Pao Shrimp', 'Spinach – Creamy Parmesan', 'Cyprus - Souvlakia - Pork Kebab', 'Garlic Chicken Nuggets', 'Bully Hill Coleslaw', 'Russian Omelet', 'Kabocha Salad', 'Smoked Turkey Cheese Ball', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 'Da Best Butter Mochi', 'Key Lime Fruit Salad', 'Beef Cheese Ball', 'A Different Type of Chicken Wing', 'Sweet Potato Cakes', 'Paglia E Fieno', 'Bacon Spinach and Cream Potatoes', 'Mutt Meatballs', "Barefoot Contessa's Mashed Potatoes", 'Mini Quiche', 'Mini Sausage Rolls', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', 'Caramel Ice Cream Delight', 'Southwestern Pinwheels', 'Sesame Spaghetti Salad', 'Teriyaki Turkey Burgers', 'Roasted Garlic & Spinach Spirals', 'Gnocchi Romana', "Barefoot Contessa's Tequila Lime Chicken", 'Swedish Pancakes', 'Feta Cheese Ball', 'Baked Onions With Thyme', 'Veggie Cream Cheese Pizza', 'Texas Chili Powder - Bulk', 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrett', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", 'Cauliflower With Toasted Mustard Seeds', 'Skillet Herbed Cabbage', 'Mixed Bean Casserole', "Barefoot Contessa's Parmesan Roasted Asparagus", 'Spicy Pulled Pork', 'Australian Seafood Platter', "Mom's Simple Goulash", 'Wild Rice and Turkey Casserole', 'Cornbread & Sausage Wheel', 'Easy Black Bean Soup', "Amanda's Delicious Cilantro Potato Salad", 'Scalloped, Not-Too-Cheesy Potatoes', 'Popping Pepper Packs', 'Crossing-Culture Chinese Hoisin Pizza', 'Lentil Rice Dish  (Mujadarah Arabic Dish)', 'Garlicky Mushroom Pakoras', 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 'Wonder Salad', 'Fidget Pie', 'Baked Potato Soup', 'Cheesy Crab and Broccoli', 'Easy French Toast', 'Almond Cookies', 'Christmas Bread (Almond-Filled Challah)', 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'Quick Pasta Supper', 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 'Eastern Chicken Gravy With Rice', 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Crock Pot Curried Split Pea Soup', 'Black and White Bean Chili', 'Stuffed Bell Pepper Soup', 'Corn and Bell Peppers Stuffed Zucchini', 'Spinach Salad With Poppy Seed Dressing', 'Baked French Toast Casserole', 'Tex-Mex Tostadas (Lower Fat)', 'Harvest Pie', 'Lettuce-Wrapped Beef and Pepper Fajitas', 'Leek and Potato Tart', "Mom's Dinner Salad", 'Barbecued Beef on Buns', 'Steak & Pasta', 'Aubergine (Eggplant) Curry (2)', 'Salmon Canapes', 'Vegetable-Barley Pot Pie / Pies', 'Heartwarming Beef-Barley Soup', 'Asian Turkey Salad', 'Leftover Holiday Ham & Split Pea Soup', 'Spicy Bean Stew With Sausages', 'Diabetic Friendly Country Apricot Tart', 'Calcutta Style Beef Curry', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Beef Stew With Poblanos, Tomatillos, and Potatoes', "Zooma's Spiced Pumpkin Cheesecake"],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
  },
  scaleY: {
    values: '0:30:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Number of Ingredients',
      bold: true,
      fontAngle: 0,
      fontColor: '#7E7E7E',
      fontFamily: 'arial',
      fontSize: '12px',
      offsetX: '50px',
      offsetY: '-190px'
    },
    lineColor: '#7E7E7E',
  },
  tooltip: {
    text: '%kl <br> %v %t'
  },

  series: [
    {
      text: 'Ingredients',
      values: [1,1,2,2,2,3,3,3,3,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,12,12,12,13,13,13,14,14,15,15,15,17,18,18,22
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#8dd3c7'
    }

  ]
};

zingchart.render({
  id : 'numberOfIngredients',
  data : numberOfIngredients,
});

plotFromCSV();