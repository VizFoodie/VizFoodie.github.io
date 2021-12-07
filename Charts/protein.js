// DOM ELEMENTS
// -----------------------------
var zcId9 = 'protein';
var zcFilter9 = document.querySelector('#filter');



// DEFINE DATA
// -----------------------------
// Tech data
var tech = [
  ['Mom\'s Dinner Salad', 0],
  ['Go Patriots Meatballs', 0],
  ['Kabocha Salad', 0.7],
  ['Baked Onions With Thyme', 1],
  ['Texas Chili Powder - Bulk', 1.2],
  ['Key Lime Fruit Salad',1.2 ],
  ['Corn and Bell Peppers Stuffed Zucchini', 1.3],
  ['Southwestern Pinwheels',1.4 ],
  ['Almond Cookies', 1.4],
  ['Skillet Herbed Cabbage', 1.6],
  ['The Best Chocolate Chip Cookies Ever Recipe Courtesy George Dura', 1.7],
  ['Bully Hill Coleslaw',2.3 ],
  ['Chocolate Chocolate Chip Pancakes', 2.4],
  ['Mutt Meatballs',2.7 ],
  ['Mini Quiche', 2.8],
  ['Diabetic Friendly Country Apricot Tart', 3.1],
  ['Amanda\'s Delicious Cilantro Potato Salad',3.2 ],
  ['Potato Salad With Green Onion and Mustard Raspberry Vinaigrett', 3.2],
  ['Green Onion Fritters',3.8 ],
  ['Pina Colada Sherbet', 3.8],
  ['Almond Amaretto Fudge', 4],
  ['Sweet Potato Cakes', 4.2],
  ['Harvest Pie',4.6 ],
  ['Aubergine (Eggplant) Curry (2)', 5.5],
  ['Barefoot Contessa\'s Mashed Potatoes', 5.6],
  ['Lower Fat Reuben Bites', 5.6],
  ['Bleu Cheese Bread',5.7 ],
  ['Veggie Cream Cheese Pizza',6.5 ],
  ['Lentil Rice Dish (Mujadarah Arabic Dish)',6.6 ],
  ['Roasted Garlic & Spinach Spirals',6.6 ],
  ['Caramel Ice Cream Delight',7.2 ],
  ['Barefoot Contessa\'s Parmesan Roasted Asparagus', 7.4],
  ['Beef Cheese Ball', 7.5],
  ['Popping Pepper Packs', 8.3],
  ['Wild Rice and Turkey Casserole', 8.5],
  ['Salmon Canapes',8.5 ],
  ['Garlicky Mushroom Pakoras',8.7 ],
  ['Cream of Artichoke Soup With Chervil and Fried Artichokes',9.2 ],
  ['Vegetable-Barley Pot Pie / Pies', 9.2],
  ['Da Best Butter Mochi',9.4 ],
  ['Zooma\'s Spiced Pumpkin Cheesecake',10.4 ],
  ['Bacon Spinach and Cream Potatoes',10.7 ],
  ['Sesame Spaghetti Salad',10.8 ],
  ['Scalloped, Not-Too-Cheesy Potatoes', 11.3],
  ['Stuffed Bell Pepper Soup',11.7 ],
  ['Baked French Toast Casserole', 12.5],
  ['Dad\'s Tuna Melt Casserole',12.7],
  ['Cauliflower With Toasted Mustard Seeds', 12.8],
  ['Swedish Pancakes', 13.8],
  ['Mom\'s Simple Goulash',14.2 ],
  ['Cheesy Crab and Broccoli', 14.2],
  ['Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip', 14.4],
  ['Barefoot Contessa\'s Sun-Dried Tomato Dip (Light Version)', 14.7],
  ['Calcutta Style Beef Curry', 14.9],
  ['Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)',15.4 ],
  ['Easy French Toast', 15.6],
  ['Mini Sausage Rolls',17.6 ],
  ['Barbecued Beef on Buns', 17.6],
  ['Easy Black Bean Soup', 17.8],
  ['Russian Omelet',17.9 ],
  ['Spinach Salad With Poppy Seed Dressing', 17.9],
  ['Spinach – Creamy Parmesan',19 ],
  ['Steak & Pasta', 19.3],
  ['Leftover Holiday Ham & Split Pea Soup', 19.9],
  ['Italian Casserole (Rigatoni and Cheese With Tomato Sauce)',20 ],
  ['Black and White Bean Chili', 20],
  ['Hot Italian Cheesy Dip',20.9 ],
  ['Eastern Chicken Gravy With Rice', 21.7],
  ['Tex-Mex Tostadas (Lower Fat)',21.8 ],
  ['Leek and Potato Tart',22.3 ],
  ['Smoked Turkey Cheese Ball', 22.5],
  ['Heartwarming Beef-Barley Soup', 22.9],
  ['Teriyaki Turkey Burgers', 23.2],
  ['Tuna Lasagna With Italian Spiced White Sauce', 23.5],
  ['Spicy Bean Stew With Sausages',23.6 ],
  ['Chicken Casadillas',23.7 ],
  ['Quick Pasta Supper',26.2 ],
  ['Crossing-Culture Chinese Hoisin Pizza', 26.6],
  ['Spicy Pulled Pork', 27],
  ['Baked Potato Soup',28.3 ],
  ['Crock Pot Curried Split Pea Soup',28.4 ],
  ['Paglia E Fieno',29 ],
  ['A Different Type of Chicken Wing', 30.2],
  ['Puff Pastry Toasted Sandwiches in Your Sandwich Maker!', 30.3],
  ['Barefoot Contessa\'s Tequila Lime Chicken', 30.9],
  ['Gnocchi Romana',32.6 ],
  ['Garlic Chicken Nuggets', 33.6],
  ['Lettuce-Wrapped Beef and Pepper Fajitas', 34.5],
  ['Beef Stew With Poblanos, Tomatillos, and Potatoes', 35],
  ['Asian Turkey Salad', 36],
  ['Bulgarian Chushki Burek (Bulgarian Peppers Burek)', 38.3],
  ['Fidget Pie', 38.7],
  ['Feta Cheese Ball',43.3 ],
  ['Cyprus - Souvlakia - Pork Kebab',45.1 ],
  ['Citrus Glazed Barbecued Pork Loin',46.7 ],
  ['Mixed Bean Casserole', 50],
  ['Kung Pao Shrimp', 53],
  ['Australian Seafood Platter',68.9 ],
  ['Cornbread & Sausage Wheel', 106.2],
  ['Christmas Bread (Almond-Filled Challah)',106.8 ],
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
    text : 'Protein'
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
    text : '<span style="font-size:21px;font-weight:bold;">%plot-text</span><br>%data-invented protein'
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
      text : '%plot-text (%data-years Protein)'
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
    lineColor : '#dade69'
  };
  cdata.series.push(plot);
});


// DEFINE CHART
// -----------------------------
// Main chart render location
var chartId9 = 'protein';

// INPUT CHANGE EVENT
// -----------------------------
zcFilter9.addEventListener('keyup', myHandler);

function myHandler() {
  var filled = zcFilter9.value.length !== 1;
  if (filled) zingchart.exec(zcId9, 'update');
}

zingchart.render({
  id : zcId9,
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
  var chart = document.querySelector('#' + chartId9);
  chart.classList.add('loaded');
}


// HELPER FNS
// -----------------------------

// Plot rule
function plotJsRule(p) {
  var tech = p['data-tech'];
  var isNotFound = tech.indexOf(zcFilter9.value.toLowerCase()) === -1;
  if (isNotFound) {
    return {
      lineColor : '#ccc'
    };
  }
};