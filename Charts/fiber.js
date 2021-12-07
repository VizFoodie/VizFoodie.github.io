// DOM ELEMENTS
// -----------------------------
var zcId7 = 'fiber';
var zcFilter7 = document.querySelector('#filter');



// DEFINE DATA
// -----------------------------
// Tech data
var tech = [
  ['Mom\'s Dinner Salad', 0],
  ['Dad\'s Tuna Melt Casserole', 0],
  ['Mutt Meatballs',0.1 ],
  ['Go Patriots Meatballs', 0.1],
  ['Beef Cheese Ball',0.1 ],
  ['Southwestern Pinwheels', 0.3],
  ['Kabocha Salad',0.3],
  ['Mini Quiche',0.4 ],
  ['Lower Fat Reuben Bites', 0.4],
  ['Almond Cookies', 0.4],
  ['Mini Sausage Rolls', 0.5],
  ['Barbecued Beef on Buns', 0.5],
  ['Barefoot Contessa\'s Tequila Lime Chicken', 0.8],
  ['Bleu Cheese Bread',0.8 ],
  ['The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 0.8],
  ['A Different Type of Chicken Wing', 0.9],
  ['Garlic Chicken Nuggets',0.9 ],
  ['Wild Rice and Turkey Casserole', 1.1],
  ['Hot Italian Cheesy Dip', 1.1],
  ['Tuna Lasagna With Italian Spiced White Sauce', 1.1],
  ['Corn and Bell Peppers Stuffed Zucchini', 1.2],
  ['Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 1.2],
  ['Swedish Pancakes',1.3 ],
  ['Calcutta Style Beef Curry',1.3 ],
  ['Teriyaki Turkey Burgers', 1.4],
  ['Baked Onions With Thyme',1.5 ],
  ['Barefoot Contessa\'s Sun-Dried Tomato Dip (Light Version)',1.5 ],
  ['Da Best Butter Mochi', 1.5],
  ['Spicy Pulled Pork',1.6 ],
  ['Zooma\'s Spiced Pumpkin Cheesecake',1.6 ],
  ['Green Onion Fritters', 1.6],
  ['Easy French Toast', 1.7],
  ['Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 1.8],
  ['Stuffed Bell Pepper Soup', 1.9],
  ['Russian Omelet',2 ],
  ['Texas Chili Powder - Bulk', 2],
  ['Diabetic Friendly Country Apricot Tart', 2],
  ['Cyprus - Souvlakia - Pork Kebab', 2.1],
  ['Chicken Casadillas',2.2 ],
  ['Gnocchi Romana', 2.2],
  ['Almond Amaretto Fudge',2.2 ],
  ['Crossing-Culture Chinese Hoisin Pizza', 2.2],
  ['Key Lime Fruit Salad',2.2 ],
  ['Veggie Cream Cheese Pizza', 2.3],
  ['Feta Cheese Ball',2.4 ],
  ['Australian Seafood Platter',2.5 ],
  ['Chocolate Chocolate Chip Pancakes', 2.5],
  ['Spinach Salad With Poppy Seed Dressing', 2.5],
  ['Skillet Herbed Cabbage',2.5 ],
  ['Baked French Toast Casserole',2.5 ],
  ['Steak & Pasta',2.6 ],
  ['Harvest Pie', 2.6],
  ['Citrus Glazed Barbecued Pork Loin', 2.6],
  ['Amanda\'s Delicious Cilantro Potato Salad', 2.7],
  ['Italian Casserole (Rigatoni and Cheese With Tomato Sauce)',2.9 ],
  ['Salmon Canapes',2.9 ],
  ['Cheesy Crab and Broccoli', 2.9],
  ['Lettuce-Wrapped Beef and Pepper Fajitas',2.9 ],
  ['Caramel Ice Cream Delight', 3.2],
  ['Pina Colada Sherbet',3.4 ],
  ['Asian Turkey Salad', 3.5],
  ['Kung Pao Shrimp', 3.5],
  ['Potato Salad With Green Onion and Mustard Raspberry Vinaigrett',3.5 ],
  ['Roasted Garlic & Spinach Spirals',3.5 ],
  ['Sesame Spaghetti Salad', 3.9],
  ['Barefoot Contessa\'s Parmesan Roasted Asparagus',4 ],
  ['Bully Hill Coleslaw',4 ],
  ['Barefoot Contessa\'s Mashed Potatoes',4.1 ],
  ['Garlicky Mushroom Pakoras',4.2 ],
  ['Quick Pasta Supper',4.3 ],
  ['Eastern Chicken Gravy With Rice',4.5 ],
  ['Mom\'s Simple Goulash', 4.7],
  ['Scalloped, Not-Too-Cheesy Potatoes', 4.7],
  ['Leek and Potato Tart',4.8 ],
  ['Smoked Turkey Cheese Ball',5.2 ],
  ['Fidget Pie', 5.4],
  ['Beef Stew With Poblanos, Tomatillos, and Potatoes',5.6 ],
  ['Sweet Potato Cakes', 5.7],
  ['Lentil Rice Dish (Mujadarah Arabic Dish)', 5.8],
  ['Baked Potato Soup',6 ],
  ['Aubergine (Eggplant) Curry (2)', 6.2],
  ['Heartwarming Beef-Barley Soup',6.3 ],
  ['Vegetable-Barley Pot Pie / Pies',6.7 ],
  ['Spinach – Creamy Parmesan',7.5 ],
  ['Cauliflower With Toasted Mustard Seeds', 7.5],
  ['Bacon Spinach and Cream Potatoes',7.8 ],
  ['Bulgarian Chushki Burek (Bulgarian Peppers Burek)',8 ],
  ['Cream of Artichoke Soup With Chervil and Fried Artichokes',8.4 ],
  ['Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)',9.1 ],
  ['Paglia E Fieno', 9.5],
  ['Popping Pepper Packs',9.8 ],
  ['Spicy Bean Stew With Sausages', 10.1],
  ['Cornbread & Sausage Wheel',13.1 ],
  ['Leftover Holiday Ham & Split Pea Soup', 13.5],
  ['Easy Black Bean Soup', 14.5],
  ['Black and White Bean Chili', 15.9],
  ['Mixed Bean Casserole', 18.1],
  ['Crock Pot Curried Split Pea Soup',21 ],
  ['Christmas Bread (Almond-Filled Challah)', 34.1],
  ['Tex-Mex Tostadas (Lower Fat)', 1.9],
];

// Alpha-sort array
tech.sort(function(a, b) {
  return a[1] - b[1];
});

// Get full year
var cyear = 40;

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
    text : 'Amount of Fiber per Serving of a Recipe',
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
      text: 'Fiber (g)',
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
    text : '<span style="font-size:21px;font-weight:bold;">%plot-text</span><br>%data-invented g of Fiber'
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
    lineColor : '#de69c7'
  };
  cdata.series.push(plot);
});


// DEFINE CHART
// -----------------------------
// Main chart render location
var chartId7 = 'fiber';

// INPUT CHANGE EVENT
// -----------------------------
zcFilter7.addEventListener('keyup', myHandler);

function myHandler() {
  var filled = zcFilter7.value.length !== 1;
  if (filled) zingchart.exec(zcId7, 'update');
}

zingchart.render({
  id : zcId7,
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
  var chart = document.querySelector('#' + chartId7);
  chart.classList.add('loaded');
}


// HELPER FNS
// -----------------------------

// Plot rule
function plotJsRule(p) {
  var tech = p['data-tech'];
  var isNotFound = tech.indexOf(zcFilter7.value.toLowerCase()) === -1;
  if (isNotFound) {
    return {
      lineColor : '#ccc'
    };
  }
};