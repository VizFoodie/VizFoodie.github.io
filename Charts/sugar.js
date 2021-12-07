// DOM ELEMENTS
// -----------------------------
var zcId8 = 'sugar';
var zcFilter8 = document.querySelector('#filter');



// DEFINE DATA
// -----------------------------
// Tech data
var tech = [
  ['Mutt Meatballs', 0.2],
  ['A Different Type of Chicken Wing', 0.3],
  ['Cream of Artichoke Soup With Chervil and Fried Artichokes', 0.3],
  ['Southwestern Pinwheels', 0.3],
  ['Mini Quiche', 0.4],
  ['Garlic Chicken Nuggets', 0.5],
  ['Gnocchi Romana', 0.6],
  ['Mini Sausage Rolls',0.6 ],
  ['Green Onion Fritters',0.6 ],
  ['Roasted Garlic & Spinach Spirals', 0.8],
  ['Beef Cheese Ball',0.9 ],
  ['Australian Seafood Platter', 1],
  ['Texas Chili Powder - Bulk',1 ],
  ['Bleu Cheese Bread',1.1 ],
  ['Corn and Bell Peppers Stuffed Zucchini',1.2 ],
  ['Swedish Pancakes',1.3 ],
  ['Kabocha Salad',1.3 ],
  ['Calcutta Style Beef Curry',1.3 ],
  ['Chicken Casadillas',1.4 ],
  ['Potato Salad With Green Onion and Mustard Raspberry Vinaigrett',1.7 ],
  ['Cheesy Crab and Broccoli', 1.7],
  ['Russian Omelet',1.8 ],
  ['Dad\'s Tuna Melt Casserole', 1.8],
  ['Scalloped, Not-Too-Cheesy Potatoes',1.9 ],
  ['Barefoot Contessa\'s Mashed Potatoes', 2],
  ['Salmon Canapes', 2.1],
  ['Lower Fat Reuben Bites',2.4 ],
  ['Puff Pastry Toasted Sandwiches in Your Sandwich Maker!',2.6 ],
  ['Barefoot Contessa\'s Tequila Lime Chicken', 2.6],
  ['Spinach – Creamy Parmesan',2.6 ],
  ['Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip',2.8 ],
  ['Barefoot Contessa\'s Sun-Dried Tomato Dip (Light Version)',3 ],
  ['Mom\'s Dinner Salad', 3.2],
  ['Veggie Cream Cheese Pizza',3.2 ],
  ['Bacon Spinach and Cream Potatoes', 3.3],
  ['Stuffed Bell Pepper Soup', 3.3],
  ['Sesame Spaghetti Salad', 3.4],
  ['Baked Potato Soup',3.5 ],
  ['Easy Black Bean Soup',3.5 ],
  ['Barefoot Contessa\'s Parmesan Roasted Asparagus',3.6 ],
  ['Teriyaki Turkey Burgers', 3.6],
  ['Tuna Lasagna With Italian Spiced White Sauce',3.7 ],
  ['Go Patriots Meatballs',3.8 ],
  ['Skillet Herbed Cabbage',3.8 ],
  ['Cornbread & Sausage Wheel',3.9 ],
  ['Tex-Mex Tostadas (Lower Fat)', 3.9],
  ['Amanda\'s Delicious Cilantro Potato Salad', 4.1],
  ['Vegetable-Barley Pot Pie / Pies',4.1 ],
  ['Leek and Potato Tart', 4.2],
  ['Lentil Rice Dish (Mujadarah Arabic Dish)',4.2 ],
  ['Spicy Pulled Pork', 4.2],
  ['Feta Cheese Ball',4.3 ],
  ['Cyprus - Souvlakia - Pork Kebab',4.4 ],
  ['Lettuce-Wrapped Beef and Pepper Fajitas',4.7 ],
  ['Baked Onions With Thyme',4.8 ],
  ['Garlicky Mushroom Pakoras',4.9 ],
  ['Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)',5.1 ],
  ['Italian Casserole (Rigatoni and Cheese With Tomato Sauce)',5.1 ],
  ['Asian Turkey Salad', 5.2],
  ['Heartwarming Beef-Barley Soup',5.2 ],
  ['Eastern Chicken Gravy With Rice', 5.3],
  ['Smoked Turkey Cheese Ball', 5.4],
  ['Leftover Holiday Ham & Split Pea Soup',5.9 ],
  ['Diabetic Friendly Country Apricot Tart',6.3 ],
  ['Hot Italian Cheesy Dip',6.9 ],
  ['Steak & Pasta',7.1 ],
  ['Aubergine (Eggplant) Curry (2)', 7.4],
  ['Wild Rice and Turkey Casserole',7.6 ],
  ['Beef Stew With Poblanos, Tomatillos, and Potatoes',7.7 ],
  ['Almond Cookies', 8],
  ['Spicy Bean Stew With Sausages', 8.3],
  ['Crock Pot Curried Split Pea Soup',8.5 ],
  ['Sweet Potato Cakes', 8.6],
  ['Paglia E Fieno', 8.7],
  ['Barbecued Beef on Buns', 9.6],
  ['Black and White Bean Chili', 10.1],
  ['Chocolate Chocolate Chip Pancakes', 10.2],
  ['Crossing-Culture Chinese Hoisin Pizza', 10.3],
  ['Mom\'s Simple Goulash',10.8 ],
  ['Kung Pao Shrimp', 11.6],
  ['Fidget Pie', 13.5],
  ['Quick Pasta Supper', 13.7],
  ['Spinach Salad With Poppy Seed Dressing', 14.2],
  ['Popping Pepper Packs', 14.3],
  ['Mixed Bean Casserole', 14.5],
  ['Cauliflower With Toasted Mustard Seeds',15.2 ],
  ['The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura',16.7 ],
  ['Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 16.8],
  ['Key Lime Fruit Salad', 17.1],
  ['Bully Hill Coleslaw', 23.8],
  ['Baked French Toast Casserole',24.7 ],
  ['Harvest Pie',24.8 ],
  ['Easy French Toast',25 ],
  ['Almond Amaretto Fudge',26.8 ],
  ['Pina Colada Sherbet', 27.6],
  ['Caramel Ice Cream Delight', 28.2],
  ['Citrus Glazed Barbecued Pork Loin', 30.9],
  ['Da Best Butter Mochi', 45.1],
  ['Zooma\'s Spiced Pumpkin Cheesecake',51 ],
  ['Christmas Bread (Almond-Filled Challah)', 162],
];

// Alpha-sort array
tech.sort(function(a, b) {
  return a[1] - b[1];
});

// Get full year
var cyear = 200;

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
    text : 'Amount of Sugar per Serving of a Recipe',
    fontFamily: 'sans-serif',
  },
  plotarea : {
    margin : '40 20 45 20'
  },
  scaleX : {
    minValue : minyear,
    maxValue : cyear,
    step : 10,
    label: {
      text: 'Sugar (g)',
      fontFamily: 'sans-serif',
    },
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
          text : cyear,
          fontFamily: 'sans-serif',
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
    fontFamily: 'sans-serif',
    text : '<span style="font-size:21px;font-weight:bold;">%plot-text</span><br>%data-invented g of Sugar'
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
      fontFamily: 'sans-serif',
      text : '%plot-text (%data-years g)'
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
    lineColor : '#b369de'
  };
  cdata.series.push(plot);
});


// DEFINE CHART
// -----------------------------
// Main chart render location
var chartId8 = 'sugar';

// INPUT CHANGE EVENT
// -----------------------------
zcFilter8.addEventListener('keyup', myHandler);

function myHandler() {
  var filled = zcFilter8.value.length !== 1;
  if (filled) zingchart.exec(zcId8, 'update');
}

zingchart.render({
  id : zcId8,
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
  var chart = document.querySelector('#' + chartId8);
  chart.classList.add('loaded');
}


// HELPER FNS
// -----------------------------

// Plot rule
function plotJsRule(p) {
  var tech = p['data-tech'];
  var isNotFound = tech.indexOf(zcFilter8.value.toLowerCase()) === -1;
  if (isNotFound) {
    return {
      lineColor : '#ccc'
    };
  }
};