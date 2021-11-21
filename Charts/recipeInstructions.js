function plotFromCSV() {
  Plotly.d3.csv("CSV/recipeInstructions.csv", function(err, rows) {
    processData(rows);
  });
}

/**
function processData(allRows){
  let instructions = [];
  let name = []
  let row;

  for(let i = 0; i < allRows.length; i++) {
    row = allRows[i];

    instructions.push(row["Instructions"]);
    name.push(row["Name"]);
  }

  console.log("NAME",name);
  console.log("INSTRUCTIONS",instructions)

}
*/





let numberOfInstructions = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Steps Per Recipe',
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
    labels: ['Asian Turkey Salad', 'Bully Hill Coleslaw', "Mom's Dinner Salad", 'Go Patriots Meatballs', 'Veggie Cream Cheese Pizza', 'Spinach Salad With Poppy Seed Dressing', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", 'Da Best Butter Mochi', 'Key Lime Fruit Salad', 'Chicken Casadillas', 'Cyprus - Souvlakia - Pork Kebab', "Mom's Simple Goulash", 'Black and White Bean Chili', 'Chocolate Chocolate Chip Pancakes', 'Spicy Bean Stew With Sausages', 'Aubergine (Eggplant) Curry', 'Cauliflower With Toasted Mustard Seeds', 'Heartwarming Beef-Barley Soup', 'Lower Fat Reuben Bites', 'Tex-Mex Tostadas (Lower Fat)', 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'Lentil Rice Dish  (Mujadarah Arabic Dish)', 'Paglia E Fieno', 'Garlic Chicken Nuggets', 'Mini Quiche', 'Feta Cheese Ball', 'Russian Omelet', 'Easy Black Bean Soup', 'Almond Amaretto Fudge', 'Texas Chili Powder - Bulk', 'Teriyaki Turkey Burgers', 'Easy French Toast', 'Skillet Herbed Cabbage', 'Bleu Cheese Bread', 'Beef Cheese Ball', 'Garlicky Mushroom Pakoras', 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 'Spicy Pulled Pork', 'Kung Pao Shrimp', 'Mutt Meatballs', 'Salmon Canapes', 'Hot Italian Cheesy Dip', 'Stuffed Bell Pepper Soup', 'Spinach – Creamy Parmesan', 'Green Onion Fritters', 'Corn and Bell Peppers Stuffed Zucchini', 'Leftover Holiday Ham & Split Pea Soup', 'Sesame Spaghetti Salad', 'Baked French Toast Casserole', "Dad's Tuna Melt Casserole", 'Beef Stew With Poblanos, Tomatillos, and Potatoes', 'Mixed Bean Casserole', 'A Different Type of Chicken Wing', 'Sweet Potato Cakes', 'Wonder Salad', "Barefoot Contessa's Mashed Potatoes", 'Wild Rice and Turkey Casserole', 'Crock Pot Curried Split Pea Soup', "Amanda's Delicious Cilantro Potato Salad", 'Smoked Turkey Cheese Ball', 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrette', 'Calcutta Style Beef Curry', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 'Harvest Pie', 'Lettuce-Wrapped Beef and Pepper Fajitas', "Barefoot Contessa's Parmesan Roasted Asparagus", 'Gnocchi Romana', 'Eastern Chicken Gravy With Rice', 'Swedish Pancakes', 'Caramel Ice Cream Delight', 'Southwestern Pinwheels', 'Kabocha Salad', 'Leek and Potato Tart', 'Australian Seafood Platter', 'Fidget Pie', 'Pina Colada Sherbet', 'Popping Pepper Packs', 'Crossing-Culture Chinese Hoisin Pizza', 'Bacon Spinach and Cream Potatoes', 'Mini Sausage Rolls', 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Steak & Pasta', 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 'Baked Potato Soup', 'Barbecued Beef on Buns', 'Christmas Bread (Almond-Filled Challah)', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Quick Pasta Supper', "Barefoot Contessa's Tequila Lime Chicken", 'Cornbread & Sausage Wheel', 'Baked Onions With Thyme', 'Cheesy Crab and Broccoli', 'Scalloped, Not-Too-Cheesy Potatoes', 'Almond Cookies', 'Vegetable-Barley Pot Pie / Pies', 'Diabetic Friendly Country Apricot Tart', 'Roasted Garlic & Spinach Spirals', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', "Zooma's Spiced Pumpkin Cheesecake"],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
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
      text: 'Number of Steps',
      bold: true,
      fontAngle: 0,
      fontColor: '#7E7E7E',
      fontFamily: 'sans-serif',
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
      text: 'Steps',
      values: [2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,11,11,11,11,11,12,12,12,12,13,13,14,15,15,15,17,18,32
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