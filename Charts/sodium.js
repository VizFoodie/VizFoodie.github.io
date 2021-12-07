// DOM ELEMENTS
// -----------------------------
var zcId5 = 'sodium';
var zcFilter5 = document.querySelector('#filter');



// DEFINE DATA
// -----------------------------
// Tech data
var tech = [
  ['Go Patriots Meatballs', 2.2],
  ['Baked Onions With Thyme', 4.4],
  ['Lentil Rice Dish (Mujadarah Arabic Dish)',13.4 ],
  ['Key Lime Fruit Salad',15.6 ],
  ['Potato Salad With Green Onion and Mustard Raspberry Vinaigrett', 27.4],
  ['Mutt Meatballs', 27.8],
  ['Corn and Bell Peppers Stuffed Zucchini', 43.4],
  ['Almond Amaretto Fudge', 44.8],
  ['Stuffed Bell Pepper Soup',56.4 ],
  ['Pina Colada Sherbet',56.8 ],
  ['Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 59.4],
  ['Crock Pot Curried Split Pea Soup',70.8 ],
  ['Mini Quiche',90 ],
  ['Wild Rice and Turkey Casserole', 90.9],
  ['Almond Cookies', 94.3],
  ['Southwestern Pinwheels',98.6 ],
  ['The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura',108.9 ],
  ['Eastern Chicken Gravy With Rice',109.4 ],
  ['A Different Type of Chicken Wing', 111.1],
  ['Chocolate Chocolate Chip Pancakes', 119.6],
  ['Diabetic Friendly Country Apricot Tart', 119.7],
  ['Harvest Pie', 124.9],
  ['Cyprus - Souvlakia - Pork Kebab', 127.4],
  ['Kabocha Salad',130.8 ],
  ['Sweet Potato Cakes',148.4 ],
  ['Cauliflower With Toasted Mustard Seeds', 157.1],
  ['Aubergine (Eggplant) Curry (2)', 183.7],
  ['Russian Omelet',207.9 ],
  ['Bacon Spinach and Cream Potatoes',215.2 ],
  ['Garlic Chicken Nuggets', 215.4],
  ['Scalloped, Not-Too-Cheesy Potatoes',227.8 ],
  ['Roasted Garlic & Spinach Spirals', 228.4],
  ['Bully Hill Coleslaw',232.4 ],
  ['Leftover Holiday Ham & Split Pea Soup',239.6 ],
  ['Garlicky Mushroom Pakoras', 240.1],
  ['Lower Fat Reuben Bites',246.7 ],
  ['Caramel Ice Cream Delight',258.2 ],
  ['Da Best Butter Mochi',260.9 ],
  ['Tex-Mex Tostadas (Lower Fat)', 272.5],
  ['Mom\'s Dinner Salad', 290.7],
  ['Steak & Pasta', 300.4],
  ['Skillet Herbed Cabbage', 310.2],
  ['Spicy Pulled Pork',319.2 ],
  ['Barefoot Contessa\'s Parmesan Roasted Asparagus', 325.1],
  ['Swedish Pancakes',339.3 ],
  ['Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip',360.1 ],
  ['Paglia E Fieno',363.9 ],
  ['Kung Pao Shrimp',368.6 ],
  ['Zooma\'s Spiced Pumpkin Cheesecake', 371.7],
  ['Leek and Potato Tart', 380.2],
  ['Popping Pepper Packs',385.5 ],
  ['Green Onion Fritters',399.7 ],
  ['Cream of Artichoke Soup With Chervil and Fried Artichokes',435.1 ],
  ['Veggie Cream Cheese Pizza', 459.6],
  ['Vegetable-Barley Pot Pie / Pies',485.3 ],
  ['Baked French Toast Casserole', 503.4],
  ['Beef Cheese Ball', 510.4],
  ['Cheesy Crab and Broccoli',535.3 ],
  ['Easy French Toast', 542.6],
  ['Bleu Cheese Bread',553.6 ],
  ['Spinach – Creamy Parmesan', 554.7],
  ['Texas Chili Powder - Bulk',565 ],
  ['Mom\'s Simple Goulash', 567.6],
  ['Heartwarming Beef-Barley Soup',568.2 ],
  ['Tuna Lasagna With Italian Spiced White Sauce',584.4 ],
  ['Lettuce-Wrapped Beef and Pepper Fajitas', 597.1],
  ['Barefoot Contessa\'s Mashed Potatoes', 611],
  ['Barbecued Beef on Buns', 646.7],
  ['Beef Stew With Poblanos, Tomatillos, and Potatoes', 651.9],
  ['Amanda\'s Delicious Cilantro Potato Salad', 658.7],
  ['Barefoot Contessa\'s Tequila Lime Chicken',686.9 ],
  ['Quick Pasta Supper', 691.3],
  ['Chicken Casadillas',715.5 ],
  ['Mini Sausage Rolls',727.6 ],
  ['Italian Casserole (Rigatoni and Cheese With Tomato Sauce)',727.6 ],
  ['Black and White Bean Chili',735.3 ],
  ['Asian Turkey Salad',740.1 ],
  ['Easy Black Bean Soup',741.3 ],
  ['Crossing-Culture Chinese Hoisin Pizza', 768],
  ['Teriyaki Turkey Burgers', 773.9],
  ['Gnocchi Romana',776.3 ],
  ['Spicy Bean Stew With Sausages', 903.7],
  ['Smoked Turkey Cheese Ball',984.9 ],
  ['Spinach Salad With Poppy Seed Dressing',1033.3 ],
  ['Sesame Spaghetti Salad', 1042.6],
  ['Australian Seafood Platter', 1062.5],
  ['Baked Potato Soup', 1142],
  ['Dad\'s Tuna Melt Casserole',1162.4 ],
  ['Calcutta Style Beef Curry',1518.7 ],
  ['Salmon Canapes', 1595.8],
  ['Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 1692.9],
  ['Mixed Bean Casserole',1748.5 ],
  ['Barefoot Contessa\'s Sun-Dried Tomato Dip (Light Version)',1892.2 ],
  ['Hot Italian Cheesy Dip', 1897.4],
  ['Feta Cheese Ball', 2113.8],
  ['Fidget Pie', 2203.2],
  ['Bulgarian Chushki Burek (Bulgarian Peppers Burek)',2371.3 ],
  ['Citrus Glazed Barbecued Pork Loin',3187.2 ],
  ['Christmas Bread (Almond-Filled Challah)', 4904.2],
  ['Cornbread & Sausage Wheel', 5738.9],
];

// Alpha-sort array
tech.sort(function(a, b) {
  return a[1] - b[1];
});

// Get full year
var cyear = 6000;

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
    text : 'Amount of Sodium per Serving of a Recipe'
  },
  plotarea : {
    margin : '40 20 45 20'
  },
  scaleX : {
    minValue : minyear,
    maxValue : cyear,
    step : 10,
    label: {
      text: 'Sodium (mg)'
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
    text : '<span style="font-size:21px;font-weight:bold;">%plot-text</span><br>%data-invented mg of Sodium'
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
      text : '%plot-text (%data-years mg)'
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
    lineColor : '#de6994'
  };
  cdata.series.push(plot);
});


// DEFINE CHART
// -----------------------------
// Main chart render location
var chartId5 = 'sodium';

// INPUT CHANGE EVENT
// -----------------------------
zcFilter5.addEventListener('keyup', myHandler);

function myHandler() {
  var filled = zcFilter5.value.length !== 1;
  if (filled) zingchart.exec(zcId5, 'update');
}

zingchart.render({
  id : zcId5,
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
  var chart = document.querySelector('#' + chartId5);
  chart.classList.add('loaded');
}


// HELPER FNS
// -----------------------------

// Plot rule
function plotJsRule(p) {
  var tech = p['data-tech'];
  var isNotFound = tech.indexOf(zcFilter5.value.toLowerCase()) === -1;
  if (isNotFound) {
    return {
      lineColor : '#ccc'
    };
  }
};