
function plotFromCSV() {
  Plotly.d3.csv("CSV/saturatedfat.csv", function(err, rows) {
    processData(rows);
  });
}

function processData(allRows){
  let name = [];
  let row;

  for(let i = 0; i < allRows.length; i++) {
    row = allRows[i];

    name.push(row["Name"]);
  }

  console.log("Name", name);
}


let calories = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Calories Per Recipe',
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
    labels: ['Go Patriots Meatballs', 'Texas Chili Powder - Bulk', 'Corn and Bell Peppers Stuffed Zucchini', 'Mutt Meatballs', 'Lower Fat Reuben Bites', 'Southwestern Pinwheels', 'Skillet Herbed Cabbage', 'Kabocha Salad', 'Key Lime Fruit Salad', 'Almond Cookies', 'Salmon Canapes', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', "Barefoot Contessa's Parmesan Roasted Asparagus", 'Baked Onions With Thyme', 'Green Onion Fritters', 'Chocolate Chocolate Chip Pancakes', 'Garlicky Mushroom Pakoras', 'Mini Quiche', 'Tex-Mex Tostadas (Lower Fat)', 'Wild Rice and Turkey Casserole', 'Diabetic Friendly Country Apricot Tart', 'Stuffed Bell Pepper Soup', 'Cauliflower With Toasted Mustard Seeds', 'Roasted Garlic &amp; Spinach Spirals', 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'Beef Cheese Ball', 'Popping Pepper Packs', 'Cheesy Crab and Broccoli', "Mom's Dinner Salad", "Amanda's Delicious Cilantro Potato Salad", 'Steak &amp; Pasta', 'Almond Amaretto Fudge', 'Heartwarming Beef-Barley Soup', 'Bully Hill Coleslaw', 'Harvest Pie', "Dad's Tuna Melt Casserole", 'Easy Black Bean Soup', 'Bleu Cheese Bread', 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrette', 'Lentil Rice Dish  (Mujadarah Arabic Dish)', "Mom's Simple Goulash", 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', "Barefoot Contessa's Tequila Lime Chicken", 'Veggie Cream Cheese Pizza', 'Leftover Holiday Ham & Split Pea Soup', 'Barbecued Beef on Buns', 'Sweet Potato Cakes', 'Spinach – Creamy Parmesan', 'Vegetable-Barley Pot Pie / Pies', 'Crossing-Culture Chinese Hoisin Pizza', 'Asian Turkey Salad', 'Aubergine (Eggplant) Curry', 'Teriyaki Turkey Burgers', 'Pina Colada Sherbet', 'Kung Pao Shrimp', 'Crock Pot Curried Split Pea Soup', 'Hot Italian Cheesy Dip', 'Bacon Spinach and Cream Potatoes', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Sesame Spaghetti Salad', "Barefoot Contessa's Mashed Potatoes", 'Black and White Bean Chili', 'Spicy Pulled Pork', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', 'Spicy Bean Stew With Sausages', 'Lettuce-Wrapped Beef and Pepper Fajitas', 'A Different Type of Chicken Wing', 'Australian Seafood Platter', 'Russian Omelet', 'Eastern Chicken Gravy With Rice', 'Mini Sausage Rolls', 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Chicken Casadillas', 'Easy French Toast', 'Swedish Pancakes', 'Quick Pasta Supper', 'Scalloped, Not-Too-Cheesy Potatoes', 'Da Best Butter Mochi', 'Caramel Ice Cream Delight', 'Baked French Toast Casserole', 'Beef Stew With Poblanos, Tomatillos, and Potatoes', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", 'Cyprus - Souvlakia - Pork Kebab', 'Mixed Bean Casserole', 'Gnocchi Romana', 'Fidget Pie', 'Baked Potato Soup', 'Garlic Chicken Nuggets', 'Leek and Potato Tart', 'Spinach Salad With Poppy Seed Dressing', "Zooma's Spiced Pumpkin Cheesecake", 'Citrus Glazed Barbecued Pork Loin', 'Paglia E Fieno', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Feta Cheese Ball', 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 'Calcutta Style Beef Curry', 'Smoked Turkey Cheese Ball', 'Cornbread & Sausage Wheel', 'Christmas Bread (Almond-Filled Challah)'],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
  },
  scaleY: {
    values: '0:3000:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Calories (cal)',
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
      text: 'Calories',
      values: [19.9,28.8,34.8,36.6,52.1,53,86.1,88.7,92.1,97.7,106.1,107.9,113.6,122.5,130.6,133.3,134.5,136,136.7,143.4,143.4,149,168.1,168.3,171.2,173.6,177.6,187.2,193.5,195.2,213.3,226.5,241.9,242.5,242.8,249.6,255.7,256,259.8,266.4,267.2,268.9,276.3,277,280.5,281,284.1,297.9,300.9,316.8,319.1,320.9,330.2,335.8,345.4,376.5,381.7,393.8,394.1,397.8,400.8,419.2,426.5,427.4,445.4,445.4,453.8,454.2,454.7,456,457.7,458.3,462.3,506.5,510,512.5,533.5,558.8,565,594.1,609,609.7,647.4,673.2,705.7,747.2,771.6,779.3,806.2,817.6,830.6,835.8,900.6,1139.6,1191.5,1202.4,1229.4,1340.1,2538.9,4489.5
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#fdb462'
    }

  ]
};

let fat = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Fat Per Recipe',
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
    labels: ['Go Patriots Meatballs', 'Texas Chili Powder - Bulk', 'Key Lime Fruit Salad', 'Corn and Bell Peppers Stuffed Zucchini', 'Lower Fat Reuben Bites', 'Green Onion Fritters', 'Tex-Mex Tostadas (Lower Fat)', 'Easy Black Bean Soup', 'Wild Rice and Turkey Casserole', 'Mutt Meatballs', 'Garlicky Mushroom Pakoras', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 'Roasted Garlic & Spinach Spirals', 'Cauliflower With Toasted Mustard Seeds', 'Popping Pepper Packs', "Mom's Simple Goulash", 'Almond Cookies', 'Salmon Canapes', 'Southwestern Pinwheels', 'Kung Pao Shrimp', 'Diabetic Friendly Country Apricot Tart', 'Leftover Holiday Ham & Split Pea Soup', 'Heartwarming Beef-Barley Soup', 'Chocolate Chocolate Chip Pancakes', 'Baked Onions With Thyme', 'Harvest Pie', 'Skillet Herbed Cabbage', 'Black and White Bean Chili', "Barefoot Contessa's Parmesan Roasted Asparagus", 'Crock Pot Curried Split Pea Soup', 'Kabocha Salad', 'Steak & Pasta', 'Cheesy Crab and Broccoli', 'Vegetable-Barley Pot Pie / Pies', "Amanda's Delicious Cilantro Potato Salad", 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'Stuffed Bell Pepper Soup', 'Mini Quiche', 'Bully Hill Coleslaw', 'Almond Amaretto Fudge', 'Australian Seafood Platter', 'Sweet Potato Cakes', "Barefoot Contessa's Tequila Lime Chicken", 'Lentil Rice Dish  (Mujadarah Arabic Dish)', 'Crossing-Culture Chinese Hoisin Pizza', 'Asian Turkey Salad', 'Beef Cheese Ball', 'Da Best Butter Mochi', 'Eastern Chicken Gravy With Rice', 'Veggie Cream Cheese Pizza', 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrett', "Dad's Tuna Melt Casserole", 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 'Quick Pasta Supper', 'Bleu Cheese Bread', 'Sesame Spaghetti Salad', 'Barbecued Beef on Buns', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Teriyaki Turkey Burgers', 'Pina Colada Sherbet', 'Bacon Spinach and Cream Potatoes', "Mom's Dinner Salad", 'Mixed Bean Casserole', 'Spinach – Creamy Parmesan', 'Spicy Bean Stew With Sausages', "Barefoot Contessa's Mashed Potatoes", 'Easy French Toast', 'A Different Type of Chicken Wing', 'Chicken Casadillas', 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Aubergine (Eggplant) Curry (2)', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', 'Hot Italian Cheesy Dip', 'Lettuce-Wrapped Beef and Pepper Fajitas', 'Swedish Pancakes', 'Spicy Pulled Pork', 'Beef Stew With Poblanos, Tomatillos, and Potatoes', 'Russian Omelet', 'Caramel Ice Cream Delight', 'Mini Sausage Rolls', 'Scalloped, Not-Too-Cheesy Potatoes', 'Baked French Toast Casserole', 'Gnocchi Romana', 'Baked Potato Soup', 'Paglia E Fieno', 'Fidget Pie', 'Cyprus - Souvlakia - Pork Kebab', 'Citrus Glazed Barbecued Pork Loin', 'Leek and Potato Tart', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", 'Garlic Chicken Nuggets', "Zooma's Spiced Pumpkin Cheesecake", 'Spinach Salad With Poppy Seed Dressing', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 'Feta Cheese Ball', 'Calcutta Style Beef Curry', 'Smoked Turkey Cheese Ball', 'Cornbread & Sausage Wheel', 'Christmas Bread (Almond-Filled Challah)'],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
  },
  scaleY: {
    values: '0:240:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Fat (g)',
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
      text: 'Fat',
      values: [0,1.1,1.3,1.4,1.4,1.6,1.7,1.9,2,2.2,2.3,2.5,2.9,3.1,3.6,3.7,4.2,4.3,4.3,4.6,4.9,5.5,6,6.5,6.8,6.8,6.9,7,7.1,7.1,7.4,7.5,7.6,7.7,8.1,8.3,8.7,9.4,10.2,12.2,12.5,13.1,13.7,14.3,14.5,14.8,14.9,15.2,15.5,15.5,16.6,17.1,17.3,17.6,17.9,18,18.3,19.1,19.4,19.7,20,20.4,20.6,21.4,21.8,21.9,21.9,23.8,23.9,24.1,25.1,27.5,27.9,28.9,31.5,31.7,32.2,34.1,35.4,36.4,37.6,38.1,41.3,42.4,44.1,45.8,47.5,50.8,52.9,54.4,59.8,62.9,75.3,78.2,94,106.3,127.7,133,140,200.5
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#8dd3c7'
    }

  ]
};

let saturatedFat = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Saturated Fat Per Recipe',
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
    labels: ['Go Patriots Meatballs', 'Garlicky Mushroom Pakoras', 'Corn and Bell Peppers Stuffed Zucchini', 'Texas Chili Powder - Bulk', 'Green Onion Fritters', 'Cauliflower With Toasted Mustard Seeds', 'Tex-Mex Tostadas (Lower Fat)', 'Wild Rice and Turkey Casserole', 'Easy Black Bean Soup', 'Lower Fat Reuben Bites', 'Roasted Garlic & Spinach Spirals', 'Kung Pao Shrimp', 'Skillet Herbed Cabbage', 'Mutt Meatballs', 'Baked Onions With Thyme', 'Kabocha Salad', 'Key Lime Fruit Salad', "Mom's Simple Goulash", 'Black and White Bean Chili', "Amanda's Delicious Cilantro Potato Salad", 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrett', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 'Bully Hill Coleslaw', 'Popping Pepper Packs', 'Harvest Pie', 'Salmon Canapes', 'Leftover Holiday Ham & Split Pea Soup', 'Vegetable-Barley Pot Pie / Pies', 'Lentil Rice Dish  (Mujadarah Arabic Dish)', "Barefoot Contessa's Parmesan Roasted Asparagus", 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 'Almond Cookies', 'Southwestern Pinwheels', 'Australian Seafood Platter', 'Crock Pot Curried Split Pea Soup', 'Sesame Spaghetti Salad', 'Heartwarming Beef-Barley Soup', "Mom's Dinner Salad", 'Mini Quiche', 'Diabetic Friendly Country Apricot Tart', 'Steak & Pasta', 'Asian Turkey Salad', 'Stuffed Bell Pepper Soup', 'Chocolate Chocolate Chip Pancakes', "Barefoot Contessa's Tequila Lime Chicken", 'Teriyaki Turkey Burgers', 'Cheesy Crab and Broccoli', 'Sweet Potato Cakes', 'Spicy Bean Stew With Sausages', 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'Bleu Cheese Bread', 'Quick Pasta Supper', 'Veggie Cream Cheese Pizza', 'A Different Type of Chicken Wing', 'Almond Amaretto Fudge', 'Crossing-Culture Chinese Hoisin Pizza', 'Barbecued Beef on Buns', "Dad's Tuna Melt Casserole", 'Mixed Bean Casserole', 'Da Best Butter Mochi', 'Chicken Casadillas', 'Garlic Chicken Nuggets', 'Beef Cheese Ball', 'Eastern Chicken Gravy With Rice', 'Bacon Spinach and Cream Potatoes', 'Spicy Pulled Pork', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Easy French Toast', 'Mini Sausage Rolls', 'Lettuce-Wrapped Beef and Pepper Fajitas', 'Beef Stew With Poblanos, Tomatillos, and Potatoes', 'Spinach – Creamy Parmesan', 'Citrus Glazed Barbecued Pork Loin', 'Hot Italian Cheesy Dip', "Barefoot Contessa's Mashed Potatoes", 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', 'Cyprus - Souvlakia - Pork Kebab', 'Caramel Ice Cream Delight', 'Pina Colada Sherbet', 'Baked French Toast Casserole', 'Russian Omelet', 'Swedish Pancakes', 'Aubergine (Eggplant) Curry (2)', 'Spinach Salad With Poppy Seed Dressing', 'Fidget Pie', 'Baked Potato Soup', 'Scalloped, Not-Too-Cheesy Potatoes', 'Paglia E Fieno', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", 'Gnocchi Romana', 'Christmas Bread (Almond-Filled Challah)', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Leek and Potato Tart', "Zooma's Spiced Pumpkin Cheesecake", 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 'Cornbread & Sausage Wheel', 'Calcutta Style Beef Curry', 'Smoked Turkey Cheese Ball', 'Feta Cheese Ball'],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
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
      text: 'Saturated Fat (g)',
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
      text: 'Saturated Fat',
      values: [0,0.2,0.2,0.2,0.3,0.3,0.5,0.6,0.6,0.6,0.7,0.8,0.9,1,1,1,1,1.2,1.2,1.2,1.2,1.2,1.5,1.6,1.6,1.7,1.9,1.9,2,2.1,2.1,2.1,2.3,2.4,2.4,2.5,2.5,2.6,2.7,2.8,2.9,3,3.4,3.7,3.9,4,4.1,4.5,4.9,5,5.2,5.7,6.4,6.6,6.7,6.8,7.2,7.7,7.7,8.5,8.6,8.9,9,10.1,10.3,10.9,11,11,11.3,11.3,12.1,12.9,13.1,13.5,13.7,14.5,15,16.4,16.6,17.3,17.9,18.1,18.6,18.8,19,19.8,19.8,23.3,23.9,23.9,24.5,26,27,28.8,32.5,34.9,47.9,54.3,55.4,59.3
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#fb8072'
    }

  ]
};


let cholesterol = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Cholesterol Per Recipe',
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
    labels: ['Lentil Rice Dish  (Mujadarah Arabic Dish)', 'Garlicky Mushroom Pakoras', 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', "Mom's Dinner Salad", 'Black and White Bean Chili', 'Baked Onions With Thyme', 'Corn and Bell Peppers Stuffed Zucchini', 'Go Patriots Meatballs', 'Sesame Spaghetti Salad', 'Texas Chili Powder - Bulk', 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrett', 'Skillet Herbed Cabbage', 'Pina Colada Sherbet', 'Roasted Garlic & Spinach Spirals', 'Key Lime Fruit Salad', 'Harvest Pie', 'Vegetable-Barley Pot Pie / Pies', 'Easy Black Bean Soup', 'Cauliflower With Toasted Mustard Seeds', 'Chocolate Chocolate Chip Pancakes', 'Kabocha Salad', 'Aubergine (Eggplant) Curry (2)', "Amanda's Delicious Cilantro Potato Salad", 'Green Onion Fritters', "Barefoot Contessa's Parmesan Roasted Asparagus", 'Bully Hill Coleslaw', 'Popping Pepper Packs', 'Almond Amaretto Fudge', 'Diabetic Friendly Country Apricot Tart', 'Southwestern Pinwheels', 'Bleu Cheese Bread', 'Lower Fat Reuben Bites', "Mom's Simple Goulash", 'Mutt Meatballs', 'Almond Cookies', 'Mini Quiche', 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'Leftover Holiday Ham & Split Pea Soup', 'Cheesy Crab and Broccoli', "Dad's Tuna Melt Casserole", 'Crock Pot Curried Split Pea Soup', 'Salmon Canapes', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 'Stuffed Bell Pepper Soup', 'Steak & Pasta', 'Veggie Cream Cheese Pizza', 'Tex-Mex Tostadas (Lower Fat)', 'Bacon Spinach and Cream Potatoes', 'Spicy Bean Stew With Sausages', 'Heartwarming Beef-Barley Soup', "Barefoot Contessa's Mashed Potatoes", 'Quick Pasta Supper', 'Beef Cheese Ball', 'Sweet Potato Cakes', 'Spinach – Creamy Parmesan', 'Eastern Chicken Gravy With Rice', 'Barbecued Beef on Buns', 'Spinach Salad With Poppy Seed Dressing', 'Chicken Casadillas', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', 'Wild Rice and Turkey Casserole', 'Hot Italian Cheesy Dip', 'Caramel Ice Cream Delight', 'Asian Turkey Salad', 'Crossing-Culture Chinese Hoisin Pizza', 'Mini Sausage Rolls', "Barefoot Contessa's Tequila Lime Chicken", 'Teriyaki Turkey Burgers', 'Baked Potato Soup', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Da Best Butter Mochi', 'Spicy Pulled Pork', 'Mixed Bean Casserole', 'A Different Type of Chicken Wing', 'Lettuce-Wrapped Beef and Pepper Fajitas', 'Beef Stew With Poblanos, Tomatillos, and Potatoes', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", 'Scalloped, Not-Too-Cheesy Potatoes', 'Citrus Glazed Barbecued Pork Loin', 'Garlic Chicken Nuggets', 'Fidget Pie', 'Cyprus - Souvlakia - Pork Kebab', 'Calcutta Style Beef Curry', 'Paglia E Fieno', 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', "Zooma's Spiced Pumpkin Cheesecake", 'Swedish Pancakes', 'Gnocchi Romana', 'Baked French Toast Casserole', 'Leek and Potato Tart', 'Smoked Turkey Cheese Ball', 'Feta Cheese Ball', 'Easy French Toast', 'Kung Pao Shrimp', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Australian Seafood Platter', 'Russian Omelet', 'Christmas Bread (Almond-Filled Challah)', 'Cornbread & Sausage Wheel'],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
  },
  scaleY: {
    values: '0:600:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Cholesterol (mg)',
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
      text: 'Cholesterol',
      values: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.6,1.2,1.4,1.8,2,4.8,5.3,6.1,6.8,7.3,7.6,8,9,11.6,11.7,13.2,14.1,16.2,16.9,18.3,20.5,25.3,25.5,27,29.5,31.7,32.9,37.9,38.6,46.2,50.7,50.8,54.5,55.2,56.1,56.6,57.8,58.3,59.9,61.5,62.4,62.6,64.7,68.3,71.3,72.8,77.2,79.5,79.8,80,82.6,92.8,94.8,96.3,101.4,104.4,108.6,110.8,112.3,113.2,116.1,118,127.3,135.3,136.1,175.8,176,182.5,186,209.6,215.1,217.1,217.6,221.8,239.3,246.3,260.9,301.1,320.1,361.8,375.6,398,473.6,544.4,572.5
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#80b1d3'
    }

  ]
};

let sodium = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Sodium Per Recipe',
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
    labels: ['Go Patriots Meatballs', 'Baked Onions With Thyme', 'Lentil Rice Dish  (Mujadarah Arabic Dish)', 'Key Lime Fruit Salad', 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrett', 'Mutt Meatballs', 'Corn and Bell Peppers Stuffed Zucchini', 'Almond Amaretto Fudge', 'Stuffed Bell Pepper Soup', 'Pina Colada Sherbet', 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 'Crock Pot Curried Split Pea Soup', 'Mini Quiche', 'Wild Rice and Turkey Casserole', 'Almond Cookies', 'Southwestern Pinwheels', 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'Eastern Chicken Gravy With Rice', 'A Different Type of Chicken Wing', 'Chocolate Chocolate Chip Pancakes', 'Diabetic Friendly Country Apricot Tart', 'Harvest Pie', 'Cyprus - Souvlakia - Pork Kebab', 'Kabocha Salad', 'Sweet Potato Cakes', 'Cauliflower With Toasted Mustard Seeds', 'Aubergine (Eggplant) Curry (2)', 'Russian Omelet', 'Bacon Spinach and Cream Potatoes', 'Garlic Chicken Nuggets', 'Scalloped, Not-Too-Cheesy Potatoes', 'Roasted Garlic & Spinach Spirals', 'Bully Hill Coleslaw', 'Leftover Holiday Ham & Split Pea Soup', 'Garlicky Mushroom Pakoras', 'Lower Fat Reuben Bites', 'Caramel Ice Cream Delight', 'Da Best Butter Mochi', 'Tex-Mex Tostadas (Lower Fat)', "Mom's Dinner Salad", 'Steak & Pasta', 'Skillet Herbed Cabbage', 'Spicy Pulled Pork', "Barefoot Contessa's Parmesan Roasted Asparagus", 'Swedish Pancakes', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 'Paglia E Fieno', 'Kung Pao Shrimp', "Zooma's Spiced Pumpkin Cheesecake", 'Leek and Potato Tart', 'Popping Pepper Packs', 'Green Onion Fritters', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', 'Veggie Cream Cheese Pizza', 'Vegetable-Barley Pot Pie / Pies', 'Baked French Toast Casserole', 'Beef Cheese Ball', 'Cheesy Crab and Broccoli', 'Easy French Toast', 'Bleu Cheese Bread', 'Spinach – Creamy Parmesan', 'Texas Chili Powder - Bulk', "Mom's Simple Goulash", 'Heartwarming Beef-Barley Soup', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Lettuce-Wrapped Beef and Pepper Fajitas', "Barefoot Contessa's Mashed Potatoes", 'Barbecued Beef on Buns', 'Beef Stew With Poblanos, Tomatillos, and Potatoes', "Amanda's Delicious Cilantro Potato Salad", "Barefoot Contessa's Tequila Lime Chicken", 'Quick Pasta Supper', 'Chicken Casadillas', 'Mini Sausage Rolls', 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Black and White Bean Chili', 'Asian Turkey Salad', 'Easy Black Bean Soup', 'Crossing-Culture Chinese Hoisin Pizza', 'Teriyaki Turkey Burgers', 'Gnocchi Romana', 'Spicy Bean Stew With Sausages', 'Smoked Turkey Cheese Ball', 'Spinach Salad With Poppy Seed Dressing', 'Sesame Spaghetti Salad', 'Australian Seafood Platter', 'Baked Potato Soup', "Dad's Tuna Melt Casserole", 'Calcutta Style Beef Curry', 'Salmon Canapes', 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 'Mixed Bean Casserole', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", 'Hot Italian Cheesy Dip', 'Feta Cheese Ball', 'Fidget Pie', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Citrus Glazed Barbecued Pork Loin', 'Christmas Bread (Almond-Filled Challah)', 'Cornbread & Sausage Wheel'],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
  },
  scaleY: {
    values: '0:6000:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Sodium (mg)',
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
      text: 'Sodium',
      values: [2.2,4.4,13.4,15.6,27.4,27.8,43.4,44.8,56.4,56.8,59.4,70.8,90,90.9,94.3,98.6,108.9,109.4,111.1,119.6,119.7,124.9,127.4,130.8,148.4,157.1,183.7,207.9,215.2,215.4,227.8,228.4,232.4,239.6,240.1,246.7,258.2,260.9,272.5,290.7,300.4,310.2,319.2,325.1,339.3,360.1,363.9,368.6,371.7,380.2,385.5,399.7,435.1,459.6,485.3,503.4,510.4,535.3,542.6,553.6,554.7,565,567.6,568.2,584.4,597.1,611,646.7,651.9,658.7,686.9,691.3,715.5,727.6,727.6,735.3,740.1,741.3,768,773.9,776.3,903.7,984.9,1033.3,1042.6,1062.5,1142,1162.4,1518.7,1595.8,1692.9,1748.5,1892.2,1897.4,2113.8,2203.2,2371.3,3187.2,4904.2,5738.9
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#b3de69'
    }

  ]
};

let carbohydrate = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Carbohydrate Per Recipe',
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
    labels: ['Mutt Meatballs', 'Southwestern Pinwheels', 'Beef Cheese Ball', "Mom's Dinner Salad", 'Lower Fat Reuben Bites', 'Calcutta Style Beef Curry', 'Kabocha Salad', 'Go Patriots Meatballs', 'Texas Chili Powder - Bulk', 'Corn and Bell Peppers Stuffed Zucchini', 'Stuffed Bell Pepper Soup', 'Skillet Herbed Cabbage', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', "Barefoot Contessa's Tequila Lime Chicken", "Barefoot Contessa's Parmesan Roasted Asparagus", 'Cyprus - Souvlakia - Pork Kebab', 'Spicy Pulled Pork', 'Tex-Mex Tostadas (Lower Fat)', 'Mini Quiche', 'Salmon Canapes', 'Barbecued Beef on Buns', "Dad's Tuna Melt Casserole", 'Asian Turkey Salad', 'Lettuce-Wrapped Beef and Pepper Fajitas', 'Baked Onions With Thyme', 'Hot Italian Cheesy Dip', 'Spinach – Creamy Parmesan', 'Mini Sausage Rolls', 'Australian Seafood Platter', 'Almond Cookies', 'Steak & Pasta', 'Teriyaki Turkey Burgers', 'Cheesy Crab and Broccoli', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", 'Bleu Cheese Bread', 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 'Crossing-Culture Chinese Hoisin Pizza', 'Spinach Salad With Poppy Seed Dressing', 'Russian Omelet', 'Feta Cheese Ball', 'Garlicky Mushroom Pakoras', 'Chocolate Chocolate Chip Pancakes', 'Key Lime Fruit Salad', 'Diabetic Friendly Country Apricot Tart', 'Wild Rice and Turkey Casserole', 'Smoked Turkey Cheese Ball', 'Kung Pao Shrimp', 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'Aubergine (Eggplant) Curry (2)', 'A Different Type of Chicken Wing', 'Green Onion Fritters', 'Cauliflower With Toasted Mustard Seeds', 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrett', 'Garlic Chicken Nuggets', 'Heartwarming Beef-Barley Soup', 'Veggie Cream Cheese Pizza', 'Lentil Rice Dish  (Mujadarah Arabic Dish)', "Amanda's Delicious Cilantro Potato Salad", 'Roasted Garlic & Spinach Spirals', 'Almond Amaretto Fudge', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Pina Colada Sherbet', 'Popping Pepper Packs', 'Bully Hill Coleslaw', 'Chicken Casadillas', 'Sweet Potato Cakes', 'Leftover Holiday Ham &amp; Split Pea Soup', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', 'Scalloped, Not-Too-Cheesy Potatoes', 'Spicy Bean Stew With Sausages', 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Beef Stew With Poblanos, Tomatillos, and Potatoes', 'Swedish Pancakes', 'Harvest Pie', 'Easy Black Bean Soup', 'Fidget Pie', 'Bacon Spinach and Cream Potatoes', "Mom's Simple Goulash", 'Citrus Glazed Barbecued Pork Loin', "Barefoot Contessa's Mashed Potatoes", 'Sesame Spaghetti Salad', 'Gnocchi Romana', 'Vegetable-Barley Pot Pie / Pies', 'Crock Pot Curried Split Pea Soup', 'Baked French Toast Casserole', 'Caramel Ice Cream Delight', 'Eastern Chicken Gravy With Rice', 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', "Zooma's Spiced Pumpkin Cheesecake", 'Easy French Toast', 'Quick Pasta Supper', 'Leek and Potato Tart', 'Baked Potato Soup', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Black and White Bean Chili', 'Mixed Bean Casserole', 'Da Best Butter Mochi', 'Paglia E Fieno', 'Cornbread & Sausage Wheel', 'Christmas Bread (Almond-Filled Challah)'],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
  },
  scaleY: {
    values: '0:600:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Carbohydrate (g)',
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
      text: 'Carbohydrate',
      values: [1.5,2.4,2.9,3.5,4.1,4.8,5,5.2,5.2,5.6,6,6.1,6.6,7.1,7.7,7.7,7.7,8.6,10.2,10.3,11.2,11.4,11.5,11.5,11.6,11.8,13.2,13.8,13.9,13.9,14.6,15.5,17.3,17.4,18.2,19.3,19.4,19.6,19.7,20,20.6,20.8,21.2,22.6,22.8,24.1,24.2,24.2,24.4,24.7,25.1,25.6,26.1,26.2,26.2,28.6,29.3,29.3,29.4,30.2,31,32.6,33.3,33.9,36.8,38.3,38.9,39.7,40,40.8,41.7,42,42.9,43.1,43.8,45.7,46.4,46.5,47,47.5,49.1,50.5,51.2,51.7,52.6,57.5,58.6,59.7,61.4,61.4,61.8,62.8,71.2,73.3,75.2,75.7,95.9,98.5,210.9,575.7
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#8993c7'
    }

  ]
};

let fiber = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Fiber Per Recipe',
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
    labels: ["Mom's Dinner Salad", "Dad's Tuna Melt Casserole", 'Mutt Meatballs', 'Go Patriots Meatballs', 'Beef Cheese Ball', 'Southwestern Pinwheels', 'Kabocha Salad', 'Mini Quiche', 'Lower Fat Reuben Bites', 'Almond Cookies', 'Mini Sausage Rolls', 'Barbecued Beef on Buns', "Barefoot Contessa's Tequila Lime Chicken", 'Bleu Cheese Bread', 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'A Different Type of Chicken Wing', 'Garlic Chicken Nuggets', 'Wild Rice and Turkey Casserole', 'Hot Italian Cheesy Dip', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Corn and Bell Peppers Stuffed Zucchini', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 'Swedish Pancakes', 'Calcutta Style Beef Curry', 'Teriyaki Turkey Burgers', 'Baked Onions With Thyme', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", 'Da Best Butter Mochi', 'Spicy Pulled Pork', "Zooma's Spiced Pumpkin Cheesecake", 'Green Onion Fritters', 'Easy French Toast', 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 'Stuffed Bell Pepper Soup', 'Tex-Mex Tostadas (Lower Fat)', 'Russian Omelet', 'Texas Chili Powder - Bulk', 'Diabetic Friendly Country Apricot Tart', 'Cyprus - Souvlakia - Pork Kebab', 'Chicken Casadillas', 'Gnocchi Romana', 'Almond Amaretto Fudge', 'Crossing-Culture Chinese Hoisin Pizza', 'Key Lime Fruit Salad', 'Veggie Cream Cheese Pizza', 'Feta Cheese Ball', 'Australian Seafood Platter', 'Chocolate Chocolate Chip Pancakes', 'Spinach Salad With Poppy Seed Dressing', 'Skillet Herbed Cabbage', 'Baked French Toast Casserole', 'Steak & Pasta', 'Harvest Pie', 'Citrus Glazed Barbecued Pork Loin', "Amanda's Delicious Cilantro Potato Salad", 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Salmon Canapes', 'Cheesy Crab and Broccoli', 'Lettuce-Wrapped Beef and Pepper Fajitas', 'Caramel Ice Cream Delight', 'Pina Colada Sherbet', 'Asian Turkey Salad', 'Kung Pao Shrimp', 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrett', 'Roasted Garlic & Spinach Spirals', 'Sesame Spaghetti Salad', "Barefoot Contessa's Parmesan Roasted Asparagus", 'Bully Hill Coleslaw', "Barefoot Contessa's Mashed Potatoes", 'Garlicky Mushroom Pakoras', 'Quick Pasta Supper', 'Eastern Chicken Gravy With Rice', "Mom's Simple Goulash", 'Scalloped, Not-Too-Cheesy Potatoes', 'Leek and Potato Tart', 'Smoked Turkey Cheese Ball', 'Fidget Pie', 'Beef Stew With Poblanos, Tomatillos, and Potatoes', 'Sweet Potato Cakes', 'Lentil Rice Dish  (Mujadarah Arabic Dish)', 'Baked Potato Soup', 'Aubergine (Eggplant) Curry (2)', 'Heartwarming Beef-Barley Soup', 'Vegetable-Barley Pot Pie / Pies', 'Spinach – Creamy Parmesan', 'Cauliflower With Toasted Mustard Seeds', 'Bacon Spinach and Cream Potatoes', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 'Paglia E Fieno', 'Popping Pepper Packs', 'Spicy Bean Stew With Sausages', 'Cornbread & Sausage Wheel', 'Leftover Holiday Ham & Split Pea Soup', 'Easy Black Bean Soup', 'Black and White Bean Chili', 'Mixed Bean Casserole', 'Crock Pot Curried Split Pea Soup', 'Christmas Bread (Almond-Filled Challah)'],
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
      text: 'Fiber (g)',
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
      text: 'Fiber',
      values: [0,0,0.1,0.1,0.1,0.3,0.3,0.4,0.4,0.4,0.5,0.5,0.8,0.8,0.8,0.9,0.9,1.1,1.1,1.1,1.2,1.2,1.3,1.3,1.4,1.5,1.5,1.5,1.6,1.6,1.6,1.7,1.8,1.9,1.9,2,2,2,2.1,2.2,2.2,2.2,2.2,2.2,2.3,2.4,2.5,2.5,2.5,2.5,2.5,2.6,2.6,2.6,2.7,2.9,2.9,2.9,2.9,3.2,3.4,3.5,3.5,3.5,3.5,3.9,4,4,4.1,4.2,4.3,4.5,4.7,4.7,4.8,5.2,5.4,5.6,5.7,5.8,6,6.2,6.3,6.7,7.5,7.5,7.8,8,8.4,9.1,9.5,9.8,10.1,13.1,13.5,14.5,15.9,18.1,21,34.1
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#de69c7'
    }

  ]
};

let sugar = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Sugar Per Recipe',
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
    labels: ['Mutt Meatballs', 'A Different Type of Chicken Wing', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', 'Southwestern Pinwheels', 'Mini Quiche', 'Garlic Chicken Nuggets', 'Gnocchi Romana', 'Mini Sausage Rolls', 'Green Onion Fritters', 'Roasted Garlic & Spinach Spirals', 'Beef Cheese Ball', 'Australian Seafood Platter', 'Texas Chili Powder - Bulk', 'Bleu Cheese Bread', 'Corn and Bell Peppers Stuffed Zucchini', 'Swedish Pancakes', 'Kabocha Salad', 'Calcutta Style Beef Curry', 'Chicken Casadillas', 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrett', 'Cheesy Crab and Broccoli', 'Russian Omelet', "Dad's Tuna Melt Casserole", 'Scalloped, Not-Too-Cheesy Potatoes', "Barefoot Contessa's Mashed Potatoes", 'Salmon Canapes', 'Lower Fat Reuben Bites', 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', "Barefoot Contessa's Tequila Lime Chicken", 'Spinach – Creamy Parmesan', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", "Mom's Dinner Salad", 'Veggie Cream Cheese Pizza', 'Bacon Spinach and Cream Potatoes', 'Stuffed Bell Pepper Soup', 'Sesame Spaghetti Salad', 'Baked Potato Soup', 'Easy Black Bean Soup', "Barefoot Contessa's Parmesan Roasted Asparagus", 'Teriyaki Turkey Burgers', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Go Patriots Meatballs', 'Skillet Herbed Cabbage', 'Cornbread & Sausage Wheel', 'Tex-Mex Tostadas (Lower Fat)', "Amanda's Delicious Cilantro Potato Salad", 'Vegetable-Barley Pot Pie / Pies', 'Leek and Potato Tart', 'Lentil Rice Dish  (Mujadarah Arabic Dish)', 'Spicy Pulled Pork', 'Feta Cheese Ball', 'Cyprus - Souvlakia - Pork Kebab', 'Lettuce-Wrapped Beef and Pepper Fajitas', 'Baked Onions With Thyme', 'Garlicky Mushroom Pakoras', 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Asian Turkey Salad', 'Heartwarming Beef-Barley Soup', 'Eastern Chicken Gravy With Rice', 'Smoked Turkey Cheese Ball', 'Leftover Holiday Ham & Split Pea Soup', 'Diabetic Friendly Country Apricot Tart', 'Hot Italian Cheesy Dip', 'Steak & Pasta', 'Aubergine (Eggplant) Curry (2)', 'Wild Rice and Turkey Casserole', 'Beef Stew With Poblanos, Tomatillos, and Potatoes', 'Almond Cookies', 'Spicy Bean Stew With Sausages', 'Crock Pot Curried Split Pea Soup', 'Sweet Potato Cakes', 'Paglia E Fieno', 'Barbecued Beef on Buns', 'Black and White Bean Chili', 'Chocolate Chocolate Chip Pancakes', 'Crossing-Culture Chinese Hoisin Pizza', "Mom's Simple Goulash", 'Kung Pao Shrimp', 'Fidget Pie', 'Quick Pasta Supper', 'Spinach Salad With Poppy Seed Dressing', 'Popping Pepper Packs', 'Mixed Bean Casserole', 'Cauliflower With Toasted Mustard Seeds', 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Key Lime Fruit Salad', 'Bully Hill Coleslaw', 'Baked French Toast Casserole', 'Harvest Pie', 'Easy French Toast', 'Almond Amaretto Fudge', 'Pina Colada Sherbet', 'Caramel Ice Cream Delight', 'Citrus Glazed Barbecued Pork Loin', 'Da Best Butter Mochi', "Zooma's Spiced Pumpkin Cheesecake", 'Christmas Bread (Almond-Filled Challah)'],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
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
      text: 'Sugar (g)',
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
      text: 'Sugar',
      values: [0.2,0.3,0.3,0.3,0.4,0.5,0.6,0.6,0.6,0.8,0.9,1,1,1.1,1.2,1.3,1.3,1.3,1.7,1.7,1.7,1.8,1.8,1.9,2,2.1,2.4,2.6,2.6,2.6,2.8,3,3.2,3.2,3.3,3.3,3.4,3.5,3.5,3.6,3.6,3.7,3.8,3.8,3.9,3.9,4.1,4.1,4.2,4.2,4.2,4.3,4.4,4.7,4.8,4.9,5.1,5.1,5.2,5.2,5.3,5.4,5.9,6.3,6.9,7.1,7.4,7.6,7.7,8,8.3,8.5,8.6,8.7,9.6,10.1,10.2,10.3,10.8,11.6,13.5,13.7,14.2,14.3,14.5,15.2,16.7,16.8,17.1,23.8,24.7,24.8,25,26.8,27.6,28.2,30.9,45.1,51,162
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#b369de'
    }

  ]
};

let protein = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Number of Protein Per Recipe',
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
    labels: ["Mom's Dinner Salad", 'Go Patriots Meatballs', 'Kabocha Salad', 'Baked Onions With Thyme', 'Texas Chili Powder - Bulk', 'Key Lime Fruit Salad', 'Corn and Bell Peppers Stuffed Zucchini', 'Southwestern Pinwheels', 'Almond Cookies', 'Skillet Herbed Cabbage', 'The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 'Bully Hill Coleslaw', 'Chocolate Chocolate Chip Pancakes', 'Mutt Meatballs', 'Mini Quiche', 'Diabetic Friendly Country Apricot Tart', "Amanda's Delicious Cilantro Potato Salad", 'Potato Salad With Green Onion and Mustard  Raspberry Vinaigrett', 'Green Onion Fritters', 'Pina Colada Sherbet', 'Almond Amaretto Fudge', 'Sweet Potato Cakes', 'Harvest Pie', 'Aubergine (Eggplant) Curry (2)', "Barefoot Contessa's Mashed Potatoes", 'Lower Fat Reuben Bites', 'Bleu Cheese Bread', 'Veggie Cream Cheese Pizza', 'Lentil Rice Dish  (Mujadarah Arabic Dish)', 'Roasted Garlic & Spinach Spirals', 'Caramel Ice Cream Delight', "Barefoot Contessa's Parmesan Roasted Asparagus", 'Beef Cheese Ball', 'Popping Pepper Packs', 'Wild Rice and Turkey Casserole', 'Salmon Canapes', 'Garlicky Mushroom Pakoras', 'Cream of Artichoke Soup With Chervil and Fried Artichokes', 'Vegetable-Barley Pot Pie / Pies', 'Da Best Butter Mochi', "Zooma's Spiced Pumpkin Cheesecake", 'Bacon Spinach and Cream Potatoes', 'Sesame Spaghetti Salad', 'Scalloped, Not-Too-Cheesy Potatoes', 'Stuffed Bell Pepper Soup', 'Baked French Toast Casserole', "Dad's Tuna Melt Casserole", 'Cauliflower With Toasted Mustard Seeds', 'Swedish Pancakes', "Mom's Simple Goulash", 'Cheesy Crab and Broccoli', 'Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', "Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)", 'Calcutta Style Beef Curry', 'Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 'Easy French Toast', 'Mini Sausage Rolls', 'Barbecued Beef on Buns', 'Easy Black Bean Soup', 'Russian Omelet', 'Spinach Salad With Poppy Seed Dressing', 'Spinach – Creamy Parmesan', 'Steak & Pasta', 'Leftover Holiday Ham & Split Pea Soup', 'Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 'Black and White Bean Chili', 'Hot Italian Cheesy Dip', 'Eastern Chicken Gravy With Rice', 'Tex-Mex Tostadas (Lower Fat)', 'Leek and Potato Tart', 'Smoked Turkey Cheese Ball', 'Heartwarming Beef-Barley Soup', 'Teriyaki Turkey Burgers', 'Tuna Lasagna With  Italian Spiced White Sauce', 'Spicy Bean Stew With Sausages', 'Chicken Casadillas', 'Quick Pasta Supper', 'Crossing-Culture Chinese Hoisin Pizza', 'Spicy Pulled Pork', 'Baked Potato Soup', 'Crock Pot Curried Split Pea Soup', 'Paglia E Fieno', 'A Different Type of Chicken Wing', 'Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', "Barefoot Contessa's Tequila Lime Chicken", 'Gnocchi Romana', 'Garlic Chicken Nuggets', 'Lettuce-Wrapped Beef and Pepper Fajitas', 'Beef Stew With Poblanos, Tomatillos, and Potatoes', 'Asian Turkey Salad', 'Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 'Fidget Pie', 'Feta Cheese Ball', 'Cyprus - Souvlakia - Pork Kebab', 'Citrus Glazed Barbecued Pork Loin', 'Mixed Bean Casserole', 'Kung Pao Shrimp', 'Australian Seafood Platter', 'Cornbread & Sausage Wheel', 'Christmas Bread (Almond-Filled Challah)'],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
  },
  scaleY: {
    values: '0:110:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Protein (g)',
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
      text: 'Protein',
      values: [0,0,0.7,1,1.2,1.2,1.3,1.4,1.4,1.6,1.7,2.3,2.4,2.7,2.8,3.1,3.2,3.2,3.8,3.8,4,4.5,4.6,5.5,5.6,5.6,5.7,6.5,6.6,6.6,7.2,7.4,7.5,8.3,8.5,8.5,8.7,9.2,9.2,9.4,10.4,10.7,10.8,11.3,11.7,12.5,12.7,12.8,13.8,14.2,14.2,14.4,14.7,14.9,15.4,15.6,17.6,17.6,17.8,17.9,17.9,19,19.3,19.9,20,20,20.9,21.7,21.8,22.3,22.5,22.9,23.2,23.5,23.6,23.7,26.2,26.6,27,28.3,28.4,29,30.2,30.3,30.9,32.6,33.6,34.5,35,36,38.3,38.7,43.3,45.1,46.7,50,53,68.9,106.2,106.8
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#dade69'
    }

  ]
};

zingchart.render({
    id: 'calories',
    data: calories,
});

zingchart.render({
  id: 'fat',
  data: fat,
});

zingchart.render({
  id: 'saturatedFat',
  data: saturatedFat,
});


zingchart.render({
  id: 'cholesterol',
  data: cholesterol,
});

zingchart.render({
  id: 'sodium',
  data: sodium,
});

zingchart.render({
  id: 'carbohydrate',
  data: carbohydrate,
});

zingchart.render({
  id: 'fiber',
  data: fiber,
});

zingchart.render({
  id: 'sugar',
  data: sugar,
});

zingchart.render({
  id: 'protein',
  data: protein,
});

plotFromCSV();


