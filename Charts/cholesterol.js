// DOM ELEMENTS
// -----------------------------
var zcId4 = 'cholesterol';
var zcFilter4 = document.querySelector('#filter');



// DEFINE DATA
// -----------------------------
// Tech data
var tech = [
  ['Lentil Rice Dish (Mujadarah Arabic Dish)',0 ],
  ['Garlicky Mushroom Pakoras', 0],
  ['Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)',0 ],
  ['Mom\'s Dinner Salad', 0],
  ['Black and White Bean Chili', 0],
  ['Baked Onions With Thyme', 0],
  ['Corn and Bell Peppers Stuffed Zucchini', 0],
  ['Go Patriots Meatballs', 0],
  ['Sesame Spaghetti Salad', 0],
  ['Texas Chili Powder - Bulk',0 ],
  ['Potato Salad With Green Onion and Mustard Raspberry Vinaigrett',0 ],
  ['Skillet Herbed Cabbage', 0],
  ['Pina Colada Sherbet',0 ],
  ['Roasted Garlic & Spinach Spirals', 0],
  ['Key Lime Fruit Salad', 0],
  ['Harvest Pie',0.6 ],
  ['Vegetable-Barley Pot Pie / Pies',1.2 ],
  ['Easy Black Bean Soup', 1.4],
  ['Cauliflower With Toasted Mustard Seeds', 1.8],
  ['Chocolate Chocolate Chip Pancakes', 2],
  ['Kabocha Salad', 4.8],
  ['Aubergine (Eggplant) Curry (2)',5.3 ],
  ['Amanda\'s Delicious Cilantro Potato Salad',6.1 ],
  ['Green Onion Fritters', 6.8],
  ['Barefoot Contessa\'s Parmesan Roasted Asparagus',7.3 ],
  ['Bully Hill Coleslaw',7.6 ],
  ['Popping Pepper Packs',8 ],
  ['Almond Amaretto Fudge', 9],
  ['Diabetic Friendly Country Apricot Tart',11.6 ],
  ['Southwestern Pinwheels', 11.7],
  ['Bleu Cheese Bread', 13.2],
  ['Lower Fat Reuben Bites', 14.1],
  ['Mom\'s Simple Goulash',16.2 ],
  ['Mutt Meatballs',16.9 ],
  ['Almond Cookies', 18.3],
  ['Mini Quiche',20.5 ],
  ['The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 25.3],
  ['Leftover Holiday Ham & Split Pea Soup', 25.5],
  ['Cheesy Crab and Broccoli', 27],
  ['Dad\'s Tuna Melt Casserole', 29.5],
  ['Crock Pot Curried Split Pea Soup',31.7 ],
  ['Salmon Canapes',32.9 ],
  ['Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 37.9],
  ['Stuffed Bell Pepper Soup',38.6 ],
  ['Steak & Pasta', 46.2],
  ['Veggie Cream Cheese Pizza', 50.7],
  ['Tex-Mex Tostadas (Lower Fat)', 50.8],
  ['Bacon Spinach and Cream Potatoes', 54.5],
  ['Spicy Bean Stew With Sausages',55.2 ],
  ['Heartwarming Beef-Barley Soup', 56.1],
  ['Barefoot Contessa\'s Mashed Potatoes', 56.6],
  ['Quick Pasta Supper', 57.8],
  ['Beef Cheese Ball', 58.3],
  ['Sweet Potato Cakes',59.9 ],
  ['Spinach – Creamy Parmesan', 61.5],
  ['Eastern Chicken Gravy With Rice', 62.4],
  ['Barbecued Beef on Buns',62.6 ],
  ['Spinach Salad With Poppy Seed Dressing', 64.7],
  ['Chicken Casadillas',68.3 ],
  ['Cream of Artichoke Soup With Chervil and Fried Artichokes',71.3 ],
  ['Wild Rice and Turkey Casserole',72.8 ],
  ['Hot Italian Cheesy Dip',77.2 ],
  ['Caramel Ice Cream Delight', 79.5],
  ['Asian Turkey Salad', 79.8],
  ['Crossing-Culture Chinese Hoisin Pizza',80 ],
  ['Mini Sausage Rolls',82.6 ],
  ['Barefoot Contessa\'s Tequila Lime Chicken',92.8 ],
  ['Teriyaki Turkey Burgers', 94.8],
  ['Baked Potato Soup', 96.3],
  ['Tuna Lasagna With Italian Spiced White Sauce',101.4 ],
  ['Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 104.4],
  ['Da Best Butter Mochi', 108.6],
  ['Spicy Pulled Pork',110.8 ],
  ['Mixed Bean Casserole', 112.3],
  ['A Different Type of Chicken Wing',113.2 ],
  ['Lettuce-Wrapped Beef and Pepper Fajitas',116.1 ],
  ['Beef Stew With Poblanos, Tomatillos, and Potatoes', 118],
  ['Barefoot Contessa\'s Sun-Dried Tomato Dip (Light Version)', 127],
  ['Scalloped, Not-Too-Cheesy Potatoes',135.3 ],
  ['Citrus Glazed Barbecued Pork Loin',136.1 ],
  ['Garlic Chicken Nuggets', 175.8],
  ['Fidget Pie', 176],
  ['Cyprus - Souvlakia - Pork Kebab',182.5 ],
  ['Calcutta Style Beef Curry', 186],
  ['Paglia E Fieno', 209.6],
  ['Puff Pastry Toasted Sandwiches in Your Sandwich Maker!',215.1 ],
  ['Zooma\'s Spiced Pumpkin Cheesecake', 217.1],
  ['Swedish Pancakes', 217.6],
  ['Gnocchi Romana', 221.8],
  ['Baked French Toast Casserole', 239.3],
  ['Leek and Potato Tart',246.3 ],
  ['Smoked Turkey Cheese Ball',260.9 ],
  ['Feta Cheese Ball', 301.1],
  ['Easy French Toast', 320.1],
  ['Kung Pao Shrimp',361.8 ],
  ['Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 375.6],
  ['Australian Seafood Platter', 398],
  ['Russian Omelet', 473.6],
  ['Christmas Bread (Almond-Filled Challah)', 544.4],
  ['Cornbread & Sausage Wheel',572.5 ],
];

// Alpha-sort array
tech.sort(function(a, b) {
  return a[1] - b[1];
});

// Get full year
var cyear = 600;

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
    text : 'Cholesterol'
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
    text : '<span style="font-size:21px;font-weight:bold;">%plot-text</span><br>%data-invented cholesterol'
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
      text : '%plot-text (%data-years Cholesterol)'
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
    lineColor : '#80b1d3'
  };
  cdata.series.push(plot);
});


// DEFINE CHART
// -----------------------------
// Main chart render location
var chartId4 = 'cholesterol';

// INPUT CHANGE EVENT
// -----------------------------
zcFilter4.addEventListener('keyup', myHandler);

function myHandler() {
  var filled = zcFilter4.value.length !== 1;
  if (filled) zingchart.exec(zcId4, 'update');
}

zingchart.render({
  id : zcId4,
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
  var chart = document.querySelector('#' + chartId4);
  chart.classList.add('loaded');
}


// HELPER FNS
// -----------------------------

// Plot rule
function plotJsRule(p) {
  var tech = p['data-tech'];
  var isNotFound = tech.indexOf(zcFilter4.value.toLowerCase()) === -1;
  if (isNotFound) {
    return {
      lineColor : '#ccc'
    };
  }
};