// DOM ELEMENTS
// -----------------------------
var zcId6 = 'carbohydrate';
var zcFilter6 = document.querySelector('#filter');



// DEFINE DATA
// -----------------------------
// Tech data
var tech = [
  ['Mutt Meatballs', 1.5],
  ['Southwestern Pinwheels', 2.4],
  ['Beef Cheese Ball',2.9 ],
  ['Mom\'s Dinner Salad',3.5 ],
  ['Lower Fat Reuben Bites', 4.1],
  ['Calcutta Style Beef Curry', 4.8],
  ['Kabocha Salad', 5],
  ['Go Patriots Meatballs', 5.2],
  ['Texas Chili Powder - Bulk', 5.2],
  ['Corn and Bell Peppers Stuffed Zucchini',5.6 ],
  ['Stuffed Bell Pepper Soup', 6],
  ['Skillet Herbed Cabbage',6.1 ],
  ['Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 6.6],
  ['Barefoot Contessa\'s Tequila Lime Chicken', 7.1],
  ['Barefoot Contessa\'s Parmesan Roasted Asparagus',7.7 ],
  ['Cyprus - Souvlakia - Pork Kebab',7.7 ],
  ['Spicy Pulled Pork',7.7 ],
  ['Tex-Mex Tostadas (Lower Fat)', 8.6],
  ['Mini Quiche',10.2 ],
  ['Salmon Canapes',10.3 ],
  ['Barbecued Beef on Buns', 11.2],
  ['Dad\'s Tuna Melt Casserole',11.4 ],
  ['Asian Turkey Salad',11.5 ],
  ['Lettuce-Wrapped Beef and Pepper Fajitas', 11.5],
  ['Baked Onions With Thyme', 11.6],
  ['Hot Italian Cheesy Dip', 11.8],
  ['Spinach – Creamy Parmesan',13.2 ],
  ['Mini Sausage Rolls',13.8 ],
  ['Australian Seafood Platter', 13.9],
  ['Almond Cookies', 13.9],
  ['Steak & Pasta',14.6 ],
  ['Teriyaki Turkey Burgers',15.5 ],
  ['Cheesy Crab and Broccoli', 17.3],
  ['Barefoot Contessa\'s Sun-Dried Tomato Dip (Light Version)', 17.4],
  ['Bleu Cheese Bread', 18.2],
  ['Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 19.3],
  ['Crossing-Culture Chinese Hoisin Pizza',19.4 ],
  ['Spinach Salad With Poppy Seed Dressing',19.6 ],
  ['Russian Omelet',19.7 ],
  ['Feta Cheese Ball', 20],
  ['Garlicky Mushroom Pakoras', 20.6],
  ['Chocolate Chocolate Chip Pancakes', 20.8],
  ['Key Lime Fruit Salad', 21.2],
  ['Diabetic Friendly Country Apricot Tart', 22.6],
  ['Wild Rice and Turkey Casserole', 22.8],
  ['Smoked Turkey Cheese Ball',24.1 ],
  ['Kung Pao Shrimp',24.2 ],
  ['The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura',24.2 ],
  ['Aubergine (Eggplant) Curry (2)', 24.4],
  ['A Different Type of Chicken Wing',24.7 ],
  ['Green Onion Fritters',25.1 ],
  ['Cauliflower With Toasted Mustard Seeds',25.6 ],
  ['Potato Salad With Green Onion and Mustard Raspberry Vinaigrett', 26.1],
  ['Garlic Chicken Nuggets',26.2 ],
  ['Heartwarming Beef-Barley Soup', 26.2],
  ['Veggie Cream Cheese Pizza',28.6 ],
  ['Lentil Rice Dish (Mujadarah Arabic Dish)',29.3 ],
  ['Amanda\'s Delicious Cilantro Potato Salad', 29.3],
  ['Roasted Garlic & Spinach Spirals',29.4 ],
  ['Almond Amaretto Fudge', 30.2],
  ['Tuna Lasagna With Italian Spiced White Sauce', 31],
  ['Pina Colada Sherbet', 32.6],
  ['Popping Pepper Packs',33.3 ],
  ['Bully Hill Coleslaw',33.9 ],
  ['Chicken Casadillas',36.8 ],
  ['Sweet Potato Cakes',38.3 ],
  ['Leftover Holiday Ham & Split Pea Soup', 38.9],
  ['Cream of Artichoke Soup With Chervil and Fried Artichokes', 39.7],
  ['Scalloped, Not-Too-Cheesy Potatoes', 40],
  ['Spicy Bean Stew With Sausages', 40.8],
  ['Italian Casserole (Rigatoni and Cheese With Tomato Sauce)', 41.7],
  ['Beef Stew With Poblanos, Tomatillos, and Potatoes', 42],
  ['Swedish Pancakes', 42.9],
  ['Harvest Pie', 43.1],
  ['Easy Black Bean Soup', 43.8],
  ['Fidget Pie', 45.7],
  ['Bacon Spinach and Cream Potatoes',46.4 ],
  ['Mom\'s Simple Goulash',46.5 ],
  ['Citrus Glazed Barbecued Pork Loin',47 ],
  ['Barefoot Contessa\'s Mashed Potatoes', 47.5],
  ['Sesame Spaghetti Salad',49.1 ],
  ['Gnocchi Romana', 50.5],
  ['Vegetable-Barley Pot Pie / Pies',51.2 ],
  ['Crock Pot Curried Split Pea Soup', 51.7],
  ['Baked French Toast Casserole',52.6 ],
  ['Caramel Ice Cream Delight',57.5 ],
  ['Eastern Chicken Gravy With Rice', 58.6],
  ['Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 59.7],
  ['Zooma\'s Spiced Pumpkin Cheesecake', 61.4],
  ['Easy French Toast',61.4 ],
  ['Quick Pasta Supper',61.8 ],
  ['Leek and Potato Tart',62.8 ],
  ['Baked Potato Soup', 71.2],
  ['Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 73.3],
  ['Black and White Bean Chili',75.2 ],
  ['Mixed Bean Casserole',75.7 ],
  ['Da Best Butter Mochi',95.9 ],
  ['Paglia E Fieno', 98.5],
  ['Cornbread & Sausage Wheel',210.9 ],
  ['Christmas Bread (Almond-Filled Challah)', 575.7],
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
    text : 'Amount of Carbohydrate per Serving of a Recipe'
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
    text : '<span style="font-size:21px;font-weight:bold;">%plot-text</span><br>%data-invented g of Carbohydrate'
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
    lineColor : '#8993c7'
  };
  cdata.series.push(plot);
});


// DEFINE CHART
// -----------------------------
// Main chart render location
var chartId6 = 'carbohydrate';

// INPUT CHANGE EVENT
// -----------------------------
zcFilter6.addEventListener('keyup', myHandler);

function myHandler() {
  var filled = zcFilter6.value.length !== 1;
  if (filled) zingchart.exec(zcId6, 'update');
}

zingchart.render({
  id : zcId6,
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
  var chart = document.querySelector('#' + chartId6);
  chart.classList.add('loaded');
}


// HELPER FNS
// -----------------------------

// Plot rule
function plotJsRule(p) {
  var tech = p['data-tech'];
  var isNotFound = tech.indexOf(zcFilter6.value.toLowerCase()) === -1;
  if (isNotFound) {
    return {
      lineColor : '#ccc'
    };
  }
};