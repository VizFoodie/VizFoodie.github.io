// DOM ELEMENTS
// -----------------------------
var zcId3 = 'saturatedFat';
var zcFilter3 = document.querySelector('#filter');



// DEFINE DATA
// -----------------------------
// Tech data
var tech = [
  ['Go Patriots Meatballs', 0],
  ['Garlicky Mushroom Pakoras', 0.2],
  ['Corn and Bell Peppers Stuffed Zucchini', 0.2],
  ['Texas Chili Powder - Bulk',0.2 ],
  ['Green Onion Fritters', 0.3],
  ['Cauliflower With Toasted Mustard Seeds', 0.3],
  ['Tex-Mex Tostadas (Lower Fat)',0.5 ],
  ['Wild Rice and Turkey Casserole',0.6 ],
  ['Easy Black Bean Soup', 0.6],
  ['Lower Fat Reuben Bites', 0.6],
  ['Roasted Garlic & Spinach Spirals',0.7 ],
  ['Kung Pao Shrimp', 0.8],
  ['Skillet Herbed Cabbage', 0.9],
  ['Mutt Meatballs', 1],
  ['Baked Onions With Thyme', 1],
  ['Kabocha Salad', 1],
  ['Key Lime Fruit Salad',1 ],
  ['Mom\'s Simple Goulash',1.2 ],
  ['Black and White Bean Chili',1.2 ],
  ['Amanda\'s Delicious Cilantro Potato Salad',1.2 ],
  ['Potato Salad With Green Onion and Mustard Raspberry Vinaigrett', 1.2],
  ['Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip',1.2 ],
  ['Bully Hill Coleslaw', 1.5],
  ['Popping Pepper Packs',1.6 ],
  ['Harvest Pie', 1.6],
  ['Salmon Canapes', 1.7],
  ['Leftover Holiday Ham & Split Pea Soup',1.9 ],
  ['Vegetable-Barley Pot Pie / Pies', 1.9],
  ['Lentil Rice Dish (Mujadarah Arabic Dish)',2 ],
  ['Barefoot Contessa\'s Parmesan Roasted Asparagus',2.1 ],
  ['Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)', 2.1],
  ['Almond Cookies', 2.1],
  ['Southwestern Pinwheels', 2.3],
  ['Australian Seafood Platter',2.4 ],
  ['Crock Pot Curried Split Pea Soup',2.4 ],
  ['Sesame Spaghetti Salad',2.5 ],
  ['Heartwarming Beef-Barley Soup',2.5 ],
  ['Mom\'s Dinner Salad', 2.6],
  ['Mini Quiche',2.7 ],
  ['Diabetic Friendly Country Apricot Tart', 2.8],
  ['Steak & Pasta',2.9 ],
  ['Asian Turkey Salad',3 ],
  ['Stuffed Bell Pepper Soup', 3.4],
  ['Chocolate Chocolate Chip Pancakes',3.7 ],
  ['Barefoot Contessa\'s Tequila Lime Chicken', 3.9],
  ['Teriyaki Turkey Burgers', 4],
  ['Cheesy Crab and Broccoli', 4.1],
  ['Sweet Potato Cakes',4.5 ],
  ['Spicy Bean Stew With Sausages',4.9 ],
  ['The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura',5 ],
  ['Bleu Cheese Bread', 5.2],
  ['Quick Pasta Supper',5.7],
  ['Veggie Cream Cheese Pizza', 6.4],
  ['A Different Type of Chicken Wing', 6.6],
  ['Almond Amaretto Fudge', 6.7],
  ['Crossing-Culture Chinese Hoisin Pizza', 6.8],
  ['Barbecued Beef on Buns', 7.2],
  ['Dad\'s Tuna Melt Casserole', 7.7],
  ['Mixed Bean Casserole',7.7 ],
  ['Da Best Butter Mochi', 8.5],
  ['Chicken Casadillas', 8.6],
  ['Garlic Chicken Nuggets', 8.9],
  ['Beef Cheese Ball',9 ],
  ['Eastern Chicken Gravy With Rice',10.1 ],
  ['Bacon Spinach and Cream Potatoes', 10.3],
  ['Spicy Pulled Pork', 10.9],
  ['Tuna Lasagna With Italian Spiced White Sauce', 11],
  ['Easy French Toast',11 ],
  ['Mini Sausage Rolls', 11.3],
  ['Lettuce-Wrapped Beef and Pepper Fajitas', 11.3],
  ['Beef Stew With Poblanos, Tomatillos, and Potatoes', 12.1],
  ['Spinach ??? Creamy Parmesan', 12.9],
  ['Citrus Glazed Barbecued Pork Loin', 13.1],
  ['Hot Italian Cheesy Dip', 13.5],
  ['Barefoot Contessa\'s Mashed Potatoes',13.7 ],
  ['Italian Casserole (Rigatoni and Cheese With Tomato Sauce)',14.5 ],
  ['Cream of Artichoke Soup With Chervil and Fried Artichokes',15 ],
  ['Cyprus - Souvlakia - Pork Kebab',16.4 ],
  ['Caramel Ice Cream Delight',16.6 ],
  ['Pina Colada Sherbet', 17.3],
  ['Baked French Toast Casserole',17.9 ],
  ['Russian Omelet', 18.1],
  ['Swedish Pancakes', 18.6],
  ['Aubergine (Eggplant) Curry (2)', 18.8],
  ['Spinach Salad With Poppy Seed Dressing', 19],
  ['Fidget Pie',19.8 ],
  ['Baked Potato Soup', 19.8],
  ['Scalloped, Not-Too-Cheesy Potatoes',23.3 ],
  ['Paglia E Fieno', 23.9],
  ['Barefoot Contessa\'s Sun-Dried Tomato Dip (Light Version)', 23.9],
  ['Gnocchi Romana',24.5 ],
  ['Christmas Bread (Almond-Filled Challah)', 26],
  ['Bulgarian Chushki Burek (Bulgarian Peppers Burek)',27 ],
  ['Leek and Potato Tart', 28.8],
  ['Zooma\'s Spiced Pumpkin Cheesecake', 32.5],
  ['Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 34.9],
  ['Cornbread & Sausage Wheel', 47.9],
  ['Calcutta Style Beef Curry', 54.3],
  ['Smoked Turkey Cheese Ball',55.4 ],
  ['Feta Cheese Ball',59.3 ]
];

// Alpha-sort array
tech.sort(function(a, b) {
  return a[1] - b[1];
});

// Get full year
var cyear = 60;

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
    text : 'Amount of Saturated Fat per Serving of a Recipe',
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
      text: 'Saturated Fat (g)',
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
    text : '<span style="font-size:21px;font-weight:bold;">%plot-text</span><br>%data-invented g of Saturated Fat'
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
    lineColor : '#fb8072'
  };
  cdata.series.push(plot);
});


// DEFINE CHART
// -----------------------------
// Main chart render location
var chartId3 = 'saturatedFat';

// INPUT CHANGE EVENT
// -----------------------------
zcFilter3.addEventListener('keyup', myHandler);

function myHandler() {
  var filled = zcFilter3.value.length !== 1;
  if (filled) zingchart.exec(zcId3, 'update');
}

zingchart.render({
  id : zcId3,
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
  var chart = document.querySelector('#' + chartId3);
  chart.classList.add('loaded');
}


// HELPER FNS
// -----------------------------

// Plot rule
function plotJsRule(p) {
  var tech = p['data-tech'];
  var isNotFound = tech.indexOf(zcFilter3.value.toLowerCase()) === -1;
  if (isNotFound) {
    return {
      lineColor : '#ccc'
    };
  }
};