// DOM ELEMENTS
// -----------------------------
var zcId = 'myChart';
var zcFilter = document.querySelector('#filter');


// DEFINE DATA
// -----------------------------
// Tech data
var tech = [
  ['Go Patriots Meatballs', 19.9],
  ['Texas Chili Powder', 28.8],
  ['Corn and Bell Peppers Stuffed Zucchini', 34.8],
  ['Mutt Meatballs', 36.6],
  ['Lower Fat Reuben Bites', 52.1],
  ['Southwestern Pinwheels', 53],
  ['Skillet Herbed Cabbage', 86.1],
  ['Kabocha Salad', 88.7],
  ['Key Lime Fruit Salad', 88.7],
  ['Almond Cookies', 97.7],
  ['Salmon Canapes', 106.1],
  ['Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 107.9],
  ['Barefoot Contessa\'s Parmesan Roasted Asparagus', 113.6],
  ['Baked Onions With Thyme', 122.5],
  ['Green Onion Fritters', 130.6],
  ['Chocolate Chocolate Chip Pancakes', 133.3],
  ['Garlicky Mushroom Pakoras', 134.5],
  ['Mini Quiche', 136],
  ['Tex-Mex Tostadas (Lower Fat)', 136.7],
  ['Wild Rice and Turkey Casserole', 143.4],
  ['Diabetic Friendly Country Apricot Tart', 143.4],
  ['Stuffed Bell Pepper Soup', 149],
  ['Cauliflower With Toasted Mustard Seeds', 168.1],
  ['Roasted Garlic & Spinach Spirals', 168.3],
  ['The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 171.2],
  ['Beef Cheese Ball', 173.6],
  ['Popping Pepper Packs', 177.6],
  ['Popping Pepper Packs', 187.2],
  ['Mom\'s Dinner Salad', 193.5],
  ['Mom\'s Dinner Salad', 195.2],
  ['Steak & Pasta', 213.3],
  ['Almond Amaretto Fudge', 226.5],
  ['Heartwarming Beef-Barley Soup', 241.9],
  ['Bully Hill Coleslaw', 242.5],
  ['Harvest Pie', 242.8],
  ['Dad\'s Tuna Melt Casserole', 249.6],
  ['Easy Black Bean Soup', 255.7],
  ['Bleu Cheese Bread', 256],
  ['Potato Salad With Green Onion and Mustard Raspberry Vinaigrette', 259.8],
  ['Lentil Rice Dish (Mujadarah Arabic Dish)', 266.4],
  ['Mom\'s Simple Goulash', 267.2],
  ['Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 268.9],
  ['Barefoot Contessa\'s Tequila Lime Chicken', 276.3],
  ['Veggie Cream Cheese Pizza', 277],
  ['Leftover Holiday Ham & Split Pea Soup', 280.5],
  ['Barbecued Beef on Buns', 281],
  ['Sweet Potato Cakes', 284.1],
  ['Spinach – Creamy Parmesan', 297.9],
  ['Vegetable-Barley Pot Pie / Pies', 300.9],
  ['Crossing-Culture Chinese Hoisin Pizza', 316.8],
  ['Asian Turkey Salad', 319.1],
  ['Aubergine (Eggplant) Curry', 320.9],
  ['Teriyaki Turkey Burgers', 330.2],
  ['Pina Colada Sherbet', 335.8],
  ['Kung Pao Shrimp', 345.4],
  ['Crock Pot Curried Split Pea Soup', 376.5],
  ['Hot Italian Cheesy Dip', 381.7],
  ['Bacon Spinach and Cream Potatoes', 393.8],
  ['Tuna Lasagna With Italian Spiced White Sauce', 394.1],
  ['Sesame Spaghetti Salad', 397.8],
  ['Barefoot Contessa\'s Mashed Potatoes', 400.8],
  ['Black and White Bean Chili', 419.2],
  ['Spicy Pulled Pork', 426.5],
  ['Cream of Artichoke Soup With Chervil and Fried Artichokes', 427.4],
  ['Spicy Bean Stew With Sausages', 445.4],
  ['Lettuce-Wrapped Beef and Pepper Fajitas', 445.4],
  ['A Different Type of Chicken Wing', 453.8],
  ['Australian Seafood Platter', 454.2],
  ['Russian Omelet', 454.7],
  ['Eastern Chicken Gravy With Rice', 456],
  ['Mini Sausage Rolls', 457.7],
  ['Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 458.3],
  ['Chicken Casadillas', 462.3],
  ['Easy French Toast', 506.5],
  ['Swedish Pancakes', 510],
  ['Quick Pasta Supper', 512.5],
  ['Scalloped, Not-Too-Cheesy Potatoes', 533.5],
  ['Da Best Butter Mochi', 558.8],
  ['Caramel Ice Cream Delight', 565],
  ['Baked French Toast Casserole', 594.1],
  ['Beef Stew With Poblanos, Tomatillos, and Potatoes', 609],
  ['Barefoot Contessa\'s Sun-Dried Tomato Dip (Light Version)', 609.7],
  ['Cyprus - Souvlakia - Pork Kebab', 647.4],
  ['Mixed Bean Casserole', 673.2],
  ['Gnocchi Romana', 705.7],
  ['Fidget Pie', 705.7],
  ['Baked Potato Soup', 771.6],
  ['Garlic Chicken Nuggets', 779.3],
  ['Leek and Potato Tart', 806.2],
  ['Spinach Salad With Poppy Seed Dressing', 817.6],
  ['Zooma\'s Spiced Pumpkin Cheesecake', 830.6],
  ['Citrus Glazed Barbecued Pork Loin', 835.8],
  ['Paglia E Fieno', 900.6],
  ['Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 1139.6],
  ['Feta Cheese Ball', 1191.5],
  ['Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 1202.4],
  ['Calcutta Style Beef Curry', 1229.4],
  ['Smoked Turkey Cheese Ball', 1340.1],
  ['Cornbread & Sausage Wheel', 2538.9],
  ['Christmas Bread (Almond-Filled Challah)', 4489.5],
];

// Alpha-sort array
tech.sort(function(a, b) {
  return a[1] - b[1];
});

// Get full year
var cyear = 4500;

// Get min. year
var minyear = 0;

// Full data
var cdata = {
  borderWidth : 1,
  borderColor : '#ccc',
  backgroundColor : '#eeeeee #f9f9f9',
  type : 'line',
  title : {
    fontSize : 17,
    text : 'Calories'
  },
  plotarea : {
    margin : '40 20 45 20'
  },
  scaleX : {
    minValue : minyear,
    maxValue : cyear,
    step : 10,
    item : {
      fontSize : 10
    },
    markers : [
      {
        range : [cyear],
        valueRange : true,
        lineColor : '#999',
        lineWidth : 1,
        labelPlacement : 'opposite',
        label : {
          fontSize : 11,
          text : cyear
        }
      }
    ]
  },
  scaleY : {
    offsetStart : 10,
    visible : false,
    minValue : 0,
    maxValue : tech.length,
    step : 1
  },
  tooltip : {
    align : 'left',
    padding : 10,
    fontSize : 13,
    text : '<span style="font-size:21px;font-weight:bold;">%plot-text</span><br>%data-invented calories'
  },
  plot : {
    lineWidth : 8,
    marker : {
      visible : false,
      borderWidth : 0
    },
    hoverState : {
      visible : false
    },
    hoverMarker : {
      visible : false
    },
    jsRule : 'plotJsRule()',
    valueBox : {
      type : 'first',
      placement : 'right',
      fontSize : 10,
      fontWeight : 'normal',
      text : '%plot-text (%data-years Calories)'
    }
  },
  series : [
  ],
};

tech.map(function(el, idx) {
  var plot = {
    text : el[0],
    dataTech : el[0].toLowerCase(),
    dataInvented : el[1],
    dataYears : el[1],
    values : [
      [el[1], idx],
      [0, idx]
    ],
    lineColor : '#fdb462'
  };
  cdata.series.push(plot);
});


// DEFINE CHART
// -----------------------------
// Main chart render location
var chartId = 'myChart';

// INPUT CHANGE EVENT
// -----------------------------
zcFilter.addEventListener('keyup', myHandler);

function myHandler() {
  var filled = zcFilter.value.length !== 1;
  if (filled) zingchart.exec(zcId, 'update');
}

zingchart.render({
  id : zcId,
  width : '100%',
  height : 1200,
  output : 'svg',
  data : cdata,
  events: {
    load: loaded
  }
});


// CHART RENDERED
// -----------------------------
// Set CSS class to show chart after render
function loaded() {
  var chart = document.querySelector('#' + chartId);
  chart.classList.add('loaded');
}


// HELPER FNS
// -----------------------------

// Plot rule
function plotJsRule(p) {
  var tech = p['data-tech'];
  var isNotFound = tech.indexOf(zcFilter.value.toLowerCase()) === -1;
  if (isNotFound) {
    return {
      lineColor : '#ccc'
    };
  }
};