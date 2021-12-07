// DOM ELEMENTS
// -----------------------------
var zcId2 = 'fat';
var zcFilter2 = document.querySelector('#filter');



// DEFINE DATA
// -----------------------------
// Tech data
var tech = [
  ['Go Patriots Meatballs', 0],
  ['Texas Chili Powder - Bulk', 1.1],
  ['Key Lime Fruit Salad', 1.3],
  ['Corn and Bell Peppers Stuffed Zucchini', 1.4],
  ['Lower Fat Reuben Bites', 1.4],
  ['Green Onion Fritters', 1.6],
  ['Tex-Mex Tostadas (Lower Fat)', 1.7],
  ['Easy Black Bean Soup', 1.9],
  ['Wild Rice and Turkey Casserole',2 ],
  ['Mutt Meatballs', 2.2],
  ['Garlicky Mushroom Pakoras', 2.3],
  ['Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 2.5],
  ['Roasted Garlic & Spinach Spirals', 2.9],
  ['Cauliflower With Toasted Mustard Seeds', 3.1],
  ['Popping Pepper Packs',3.6 ],
  ['Mom\'s Simple Goulash', 3.7],
  ['Almond Cookies', 4.2],
  ['Salmon Canapes',4.3 ],
  ['Southwestern Pinwheels', 4.3],
  ['Kung Pao Shrimp',4.6 ],
  ['Diabetic Friendly Country Apricot Tart',4.9 ],
  ['Leftover Holiday Ham & Split Pea Soup',5.5 ],
  ['Heartwarming Beef-Barley Soup',6 ],
  ['Chocolate Chocolate Chip Pancakes', 6.5],
  ['Baked Onions With Thyme',6.8 ],
  ['Harvest Pie', 6.8],
  ['Skillet Herbed Cabbage', 6.9],
  ['Black and White Bean Chili', 7],
  ['Barefoot Contessa\'s Parmesan Roasted Asparagus', 7.1],
  ['Crock Pot Curried Split Pea Soup',7.1 ],
  ['Kabocha Salad',7.4 ],
  ['Steak & Pasta',7.5 ],
  ['Cheesy Crab and Broccoli', 7.6],
  ['Vegetable-Barley Pot Pie / Pies', 7.7],
  ['Amanda\'s Delicious Cilantro Potato Salad', 8.1],
  ['The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura\t', 8.3],
  ['Stuffed Bell Pepper Soup', 8.7],
  ['Mini Quiche',9.4 ],
  ['Bully Hill Coleslaw',10.2 ],
  ['Almond Amaretto Fudge',12.2 ],
  ['Australian Seafood Platter',12.5 ],
  ['Sweet Potato Cakes', 13.1],
  ['Barefoot Contessa\'s Tequila Lime Chicken', 13.7],
  ['Lentil Rice Dish (Mujadarah Arabic Dish)', 14.3],
  ['Crossing-Culture Chinese Hoisin Pizza', 14.5],
  ['Asian Turkey Salad', 14.8],
  ['Beef Cheese Ball', 14.9],
  ['Da Best Butter Mochi', 15.2],
  ['Eastern Chicken Gravy With Rice', 15.5],
  ['Veggie Cream Cheese Pizza', 15.5],
  ['Potato Salad With Green Onion and Mustard Raspberry Vinaigrett',16.6 ],
  ['Dad\'s Tuna Melt Casserole', 17.1],
  ['Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 17.3],
  ['Quick Pasta Supper',17.6 ],
  ['Bleu Cheese Bread',17.9 ],
  ['Sesame Spaghetti Salad',18 ],
  ['Barbecued Beef on Buns', 18.3],
  ['Tuna Lasagna With Italian Spiced White Sauce',19.1 ],
  ['Teriyaki Turkey Burgers',19.4 ],
  ['Pina Colada Sherbet',19.7 ],
  ['Bacon Spinach and Cream Potatoes',20 ],
  ['Mom\'s Dinner Salad',20.4 ],
  ['Mixed Bean Casserole',20.6 ],
  ['Spinach – Creamy Parmesan', 21.4],
  ['Spicy Bean Stew With Sausages', 21.8],
  ['Barefoot Contessa\'s Mashed Potatoes', 21.9],
  ['Easy French Toast', 21.9],
  ['A Different Type of Chicken Wing',23.8 ],
  ['Chicken Casadillas', 23.9],
  ['Italian Casserole (Rigatoni and Cheese With Tomato Sauce)',24.1 ],
  ['Aubergine (Eggplant) Curry (2)', 25.1],
  ['Cream of Artichoke Soup With Chervil and Fried Artichokes',27.5 ],
  ['Hot Italian Cheesy Dip', 27.9],
  ['Lettuce-Wrapped Beef and Pepper Fajitas',28.9 ],
  ['Swedish Pancakes',31.5 ],
  ['Spicy Pulled Pork', 31.7],
  ['Beef Stew With Poblanos, Tomatillos, and Potatoes', 32.2],
  ['Russian Omelet', 34.4],
  ['Caramel Ice Cream Delight',35.4 ],
  ['Mini Sausage Rolls',36.4 ],
  ['Scalloped, Not-Too-Cheesy Potatoes',37.6 ],
  ['Baked French Toast Casserole',38.1 ],
  ['Gnocchi Romana', 41.3],
  ['Baked Potato Soup', 42.4],
  ['Paglia E Fieno',44.4 ],
  ['Fidget Pie',45.8 ],
  ['Cyprus - Souvlakia - Pork Kebab',47.5 ],
  ['Citrus Glazed Barbecued Pork Loin', 50.8],
  ['Leek and Potato Tart', 52.9],
  ['Barefoot Contessa\'s Sun-Dried Tomato Dip (Light Version)',54.4 ],
  ['Garlic Chicken Nuggets', 59.8],
  ['Zooma\'s Spiced Pumpkin Cheesecake',62.9 ],
  ['Spinach Salad With Poppy Seed Dressing',75.3 ],
  ['Bulgarian Chushki Burek (Bulgarian Peppers Burek)',78.2 ],
  ['Puff Pastry Toasted Sandwiches in Your Sandwich Maker!',94 ],
  ['Feta Cheese Ball', 106.3],
  ['Calcutta Style Beef Curry', 127.7],
  ['Smoked Turkey Cheese Ball',133 ],
  ['Cornbread & Sausage Wheel',140 ],
  ['Christmas Bread (Almond-Filled Challah)', 200.5],
];

// Alpha-sort array
tech.sort(function(a, b) {
  return a[1] - b[1];
});

// Get full year
var cyear = 210;

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
    text : 'Fat'
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
    text : '<span style="font-size:21px;font-weight:bold;">%plot-text</span><br>%data-invented fat'
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
      text : '%plot-text (%data-years Fat)'
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
    lineColor : '#8dd3c7'
  };
  cdata.series.push(plot);
});


// DEFINE CHART
// -----------------------------
// Main chart render location
var chartId2 = 'fat';

// INPUT CHANGE EVENT
// -----------------------------
zcFilter2.addEventListener('keyup', myHandler);

function myHandler() {
  var filled = zcFilter2.value.length !== 1;
  if (filled) zingchart.exec(zcId2, 'update');
}

zingchart.render({
  id : zcId2,
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
  var chart = document.querySelector('#' + chartId2);
  chart.classList.add('loaded');
}


// HELPER FNS
// -----------------------------

// Plot rule
function plotJsRule(p) {
  var tech = p['data-tech'];
  var isNotFound = tech.indexOf(zcFilter2.value.toLowerCase()) === -1;
  if (isNotFound) {
    return {
      lineColor : '#ccc'
    };
  }
};