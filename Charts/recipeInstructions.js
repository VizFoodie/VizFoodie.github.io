function plotFromCSV() {
  Plotly.d3.csv("CSV/recipeInstructions.csv", function(err, rows) {
    processData(rows);
  });
}

/**
function processData(allRows){
  let instructions = [];
  let instructionsList = [];
  let temp = [];
  let row;

  for(let i = 0; i < allRows.length; i++) {
    row = allRows[i];

    instructions.push(row["RecipeInstructions"]);
  }

  for(let i = 0; i < allRows.length; i++) {

    instructionsList.push(instructions[i].substr(1, instructions[i].length).replace(/[,)(]+/g, '').split("\""));
    temp.push(Math.floor(instructionsList[i].length / 2));
  }


}
 */





let numberOfInstructions = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Instructions Per Recipe',
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
    labels: ["Quick Pasta Supper", "Asian Turkey Salad","A Different Type of Chicken Wing","Barefoot Contessa's Parmesan Roasted Asparagus","Leek and Potato Tart","Lentil Rice Dish  (Mujadarah Arabic Dish)","Sweet Potato Cakes","Garlicky Mushroom Pakoras","Chicken Casadillas","Cyprus - Souvlakia - Pork Kebab","Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)","Paglia E Fieno","Gnocchi Romana","Puff Pastry Toasted Sandwiches","Barefoot Contessa's Tequila Lime Chicken","Spicy Pulled Pork","Kung Pao Shrimp","Bacon Spinach and Cream Potatoes","Wonder Salad","Eastern Chicken Gravy With Rice","Mutt Meatballs","Garlic Chicken Nuggets","Australian Seafood Platter","Mom's Simple Goulash","Barefoot Contessa's Mashed Potatoes","Mini Quiche","Mini Sausage Rolls","Italian Casserole (Rigatoni and Cheese With Tomato Sauce)","Cream of Artichoke Soup With Chervil and Fried Artichokes","Fidget Pie","Swedish Pancakes","Mom's Dinner Salad","Wild Rice and Turkey Casserole","Salmon Canapes","Caramel Ice Cream Delight","Bully Hill Coleslaw","Cornbread & Sausage Wheel","Zooma's Spiced Pumpkin Cheesecake","Crock Pot Curried Split Pea Soup","Black and White Bean Chili","Feta Cheese Ball","Baked Onions With Thyme","Hot Italian Cheesy Dip","Stuffed Bell Pepper Soup","Southwestern Pinwheels","Spinach – Creamy Parmesan","Green Onion Fritters","Russian Omelet","Chocolate Chocolate Chip Pancakes","Corn and Bell Peppers Stuffed Zucchini","Baked Potato Soup","Easy Black Bean Soup","Leftover Holiday Ham & Split Pea Soup","Go Patriots Meatballs","Sesame Spaghetti Salad","Amanda's Delicious Cilantro Potato Salad","Veggie Cream Cheese Pizza","Spicy Bean Stew With Sausages","Kabocha Salad","Almond Amaretto Fudge","Spinach Salad With Poppy Seed Dressing","Smoked Turkey Cheese Ball","Texas Chili Powder - Bulk","Potato Salad With Green Onion and Mustard Raspberry Vinaigrett","Cheesy Crab and Broccoli","Tuna Lasagna With Italian Spiced White Sauce","Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)","Scalloped, Not-Too-Cheesy Potatoes","Vegetable-Barley Pot Pie / Pies","Teriyaki Turkey Burgers","Barbecued Beef on Buns","Steak & Pasta","Aubergine (Eggplant) Curry","Cauliflower With Toasted Mustard Seeds","Diabetic Friendly Country Apricot Tart","Easy French Toast","Skillet Herbed Cabbage","Calcutta Style Beef Curry","Pina Colada Sherbet","Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip","Heartwarming Beef-Barley Soup","Lower Fat Reuben Bites","Baked French Toast Casserole","Bleu Cheese Bread","Roasted Garlic & Spinach Spirals","Tex-Mex Tostadas (Lower Fat)","Popping Pepper Packs","Almond Cookies","Christmas Bread (Almond-Filled Challah)","Da Best Butter Mochi","Bulgarian Chushki Burek (Bulgarian Peppers Burek)","Crossing-Culture Chinese Hoisin Pizza","Key Lime Fruit Salad","Dad's Tuna Melt Casserole","Harvest Pie","The Best Chocolate Chip Cookies Ever","Beef Cheese Ball","Lettuce-Wrapped Beef and Pepper Fajitas","Beef Stew With Poblanos, Tomatillos, and Potatoes","Mixed Bean Casserole"],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 50],
  },
  scaleY: {
    values: '0:40:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Number of instructions',
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
      text: 'Instructions',
      values: [12, 2, 7, 8, 9, 5, 7, 6, 4, 4, 11, 5, 8, 6, 12, 6, 6, 10, 7, 8, 6, 5, 9, 4, 7, 5, 10, 10, 18, 9, 8, 3, 7, 6, 8, 2, 12, 32, 7, 4, 5, 12, 6, 6, 8, 6, 6, 5, 4, 6, 11, 5, 6, 3, 6, 7, 3, 4, 8, 5, 3, 7, 5, 7, 13, 17, 3, 13, 15, 5, 11, 10, 4, 4, 15, 5, 5, 7, 9, 7, 4, 4, 6, 5, 15, 4, 9, 14, 11, 3, 11, 9, 3, 6, 7, 4, 5, 7, 6, 6
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#fb8072'
    }

  ]
};

zingchart.render({
  id : 'numberOfInstructions',
  data : numberOfInstructions,
});

plotFromCSV();