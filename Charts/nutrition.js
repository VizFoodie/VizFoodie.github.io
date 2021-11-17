/**
 * plotFromCSV();
 let Name = [];
 let Calories = [];
 let FatContent = [];
 let SaturatedFatContent = [];
 let CholesterolContent = [];
 let SodiumContent = [];
 let CarbohydrateContent = [];
 let FiberContent = [];
 let SugarContent = [];
 let ProteinContent = [];
 function plotFromCSV() {
  Plotly.d3.csv("CSV/recipesNutrition.csv", function(err, rows) {
    processData(rows);
  });
}

 function processData(allRows){
  let row;

  for(let i = 0; i < allRows.length; i++) {
    row = allRows[i];

    Name.push(row["Name"]);
    Calories.push(row["Calories"]);
    FatContent.push(row["FatContent"]);
    SaturatedFatContent.push(row["SaturatedFatContent"]);
    CholesterolContent.push(row["CholesterolContent"]);
    SodiumContent.push(row["SodiumContent"]);
    CarbohydrateContent.push(row["CarbohydrateContent"]);
    FiberContent.push(row["FiberContent"]);
    SugarContent.push(row["SugarContent"]);
    ProteinContent.push(row["ProteinContent"]);

  }
  console.log("TEST", Name);
  //console.log("Sodium", SodiumContent);


}
 */


let nutrition = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Recipe Nutritions',
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
    layout: 'x3',
    marker: {
      type: 'circle',
      borderColor: 'none',
      size: '10px'
    },
    maxItems: 3,
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
    labels: ["Quick Pasta Supper", "Asian Turkey Salad","A Different Type of Chicken Wing","Barefoot Contessa's Parmesan Roasted Asparagus","Leek and Potato Tart","Lentil Rice Dish  (Mujadarah Arabic Dish)","Sweet Potato Cakes","Garlicky Mushroom Pakoras","Chicken Casadillas","Cyprus - Souvlakia - Pork Kebab","Vegan Green Garden Puree (For Pizza, Lasagna or Pasta)","Paglia E Fieno","Gnocchi Romana","Puff Pastry Toasted Sandwiches","Barefoot Contessa's Tequila Lime Chicken","Spicy Pulled Pork","Kung Pao Shrimp","Bacon Spinach and Cream Potatoes","Wonder Salad","Eastern Chicken Gravy With Rice","Mutt Meatballs","Garlic Chicken Nuggets","Australian Seafood Platter","Mom's Simple Goulash","Barefoot Contessa's Mashed Potatoes","Mini Quiche","Mini Sausage Rolls","Italian Casserole (Rigatoni and Cheese With Tomato Sauce)","Cream of Artichoke Soup With Chervil and Fried Artichokes","Fidget Pie","Swedish Pancakes","Mom's Dinner Salad","Wild Rice and Turkey Casserole","Salmon Canapes","Caramel Ice Cream Delight","Bully Hill Coleslaw","Cornbread & Sausage Wheel","Zooma's Spiced Pumpkin Cheesecake","Crock Pot Curried Split Pea Soup","Black and White Bean Chili","Feta Cheese Ball","Baked Onions With Thyme","Hot Italian Cheesy Dip","Stuffed Bell Pepper Soup","Southwestern Pinwheels","Spinach – Creamy Parmesan","Green Onion Fritters","Russian Omelet","Chocolate Chocolate Chip Pancakes","Corn and Bell Peppers Stuffed Zucchini","Baked Potato Soup","Easy Black Bean Soup","Leftover Holiday Ham & Split Pea Soup","Go Patriots Meatballs","Sesame Spaghetti Salad","Amanda's Delicious Cilantro Potato Salad","Veggie Cream Cheese Pizza","Spicy Bean Stew With Sausages","Kabocha Salad","Almond Amaretto Fudge","Spinach Salad With Poppy Seed Dressing","Smoked Turkey Cheese Ball","Texas Chili Powder - Bulk","Potato Salad With Green Onion and Mustard Raspberry Vinaigrett","Cheesy Crab and Broccoli","Tuna Lasagna With Italian Spiced White Sauce","Barefoot Contessa's Sun-Dried Tomato Dip (Light Version)","Scalloped, Not-Too-Cheesy Potatoes","Vegetable-Barley Pot Pie / Pies","Teriyaki Turkey Burgers","Barbecued Beef on Buns","Steak & Pasta","Aubergine (Eggplant) Curry","Cauliflower With Toasted Mustard Seeds","Diabetic Friendly Country Apricot Tart","Easy French Toast","Skillet Herbed Cabbage","Calcutta Style Beef Curry","Pina Colada Sherbet","Low Fat Buffalo Chicken Tenders W/ Blue Cheese Dip","Heartwarming Beef-Barley Soup","Lower Fat Reuben Bites","Baked French Toast Casserole","Bleu Cheese Bread","Roasted Garlic & Spinach Spirals","Tex-Mex Tostadas (Lower Fat)","Popping Pepper Packs","Almond Cookies","Christmas Bread (Almond-Filled Challah)","Da Best Butter Mochi","Bulgarian Chushki Burek (Bulgarian Peppers Burek)","Crossing-Culture Chinese Hoisin Pizza","Key Lime Fruit Salad","Dad's Tuna Melt Casserole","Harvest Pie","The Best Chocolate Chip Cookies Ever","Beef Cheese Ball","Lettuce-Wrapped Beef and Pepper Fajitas","Beef Stew With Poblanos, Tomatillos, and Potatoes","Mixed Bean Casserole"],
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 10],
  },
  scaleY: {
    values: '0:800:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Nutrition (g)',
      bold: true,
      fontAngle: 0,
      fontColor: '#7E7E7E',
      fontFamily: 'arial',
      fontSize: '12px',
      offsetX: '50px',
      offsetY: '-190px'
    },
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 200],
  },
  tooltip: {
    text: '%kl <br> %v (g) %t'
  },

  series: [
    {
      text: 'Calories',
      values: [512.5,319.1,453.8,113.6,806.2,266.4,284.1,134.5,462.3,647.4,268.9,900.6,705.7,1202.4,276.3,426.5,345.4,393.8,6386.2,456,36.6,779.3,454.2,267.2,400.8,136,457.7,458.3,427.4,747.2,510,193.5,143.4,106.1,565,242.5,2538.9,830.6,376.5,419.2,1191.5,122.5,381.7,149,53,297.9,130.6,454.7,133.3,34.8,771.6,255.7,280.5,19.9,397.8,195.2,277,445.4,88.7,226.5,817.6,1340.1,28.8,259.8,187.2,394.1,609.7,533.5,300.9,330.2,281,213.3,320.9,168.1,143.4,506.5,86.1,1229.4,335.8,107.9,241.9,52.1,594.1,256,168.3,136.7,177.6,97.7,4489.5,558.8,1139.6,316.8,92.1,249.6,242.8,171.2,173.6,445.4,609,673.2
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#fdb462'
    },
    {
      text: 'Fat Content',
      values: [17.6,14.8,23.8,7.1,52.9,14.3,13.1,2.3,23.9,47.5,17.3,44.1,41.3,94,13.7,31.7,4.6,20,587.9,15.5,2.2,59.8,12.5,3.7,21.9,9.4,36.4,24.1,27.5,45.8,31.5,20.4,2,4.3,35.4,10.2,140,62.9,7.1,7,106.3,6.8,27.9,8.7,4.3,21.4,1.6,34.1,6.5,1.4,42.4,1.9,5.5,0,18,8.1,15.5,21.8,7.4,12.2,75.3,133,1.1,16.6,7.6,19.1,54.4,37.6,7.7,19.4,18.3,7.5,25.1,3.1,4.9,21.9,6.9,127.7,19.7,2.5,6,1.4,38.1,17.9,2.9,1.7,3.6,4.2,200.5,15.2,78.2,14.5,1.3,17.1,6.8,8.3,14.9,28.9,32.2,20.6],
      alpha: 0.95,
      borderRadiusTopLeft: '7px',
      backgroundColor: '#8dd3c7'
    },
    {
      text: 'Saturated Fat Content',
      values: [5.7,3,6.6,2.1,28.8,2,4.5,0.2,8.6,16.4,2.1,23.9,24.5,34.9,3.9,10.9,0.8,10.3,118.7,10.1,1,8.9,2.4,1.2,13.7,2.7,11.3,14.5,15,19.8,18.6,2.6,0.6,1.7,16.6,1.5,47.9,32.5,2.4,1.2,59.3,1,13.5,3.4,2.3,12.9,0.3,18.1,3.7,0.2,19.8,0.6,1.9,0,2.5,1.2,6.4,4.9,1,6.7,19,55.4,0.2,1.2,4.1,11,23.9,23.3,1.9,4,7.2,2.9,18.8,0.3,2.8,11,0.9,54.3,17.3,1.2,2.5,0.6,17.9,5.2,0.7,0.5,1.6,2.1,26,8.5,27,6.8,1,7.7,1.6,5,9,11.3,12.1,7.7],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#fb8072'
    },
    {
      text: 'Cholesterol Content',
      values: [0.0578,0.0798,0.1132,0.0073,0.2463,0,0.0599,0,0.0683,0.1825,0,0.2096,0.2218,0.2151,0.0928,0.1108,0.3618,0.0545,0.1924,0.0624,0.0169,0.1758,0.398,0.0162,0.0566,0.0205,0.0826,0.1044,0.0713,0.176,0.2176,0,0.0728,0.0329,0.0795,0.0076,0.5725,0.2171,0.0317,0,0.3011,0,0.0772,0.0386,0.0117,0.0615,0.0068,0.4736,0.002,0,0.0963,0.0014,0.0255,0,0,0.0061,0.0507,0.0552,0.0048,0.009,0.0647,0.2609,0,0,0.027,0.1014,0.1273,0.1353,0.0012,0.0948,0.0626,0.0462,0.0053,0.0018,0.0116,0.3201,0,0.186,0,0.0379,0.0561,0.0141,0.2393,0.0132,0,0.0508,0.008,0.0183,0.5444,0.1086,0.3756,0.08,0,0.0295,0.0006,0.0253,0.0583,0.1161,0.118,0.1123],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#80b1d3'
    },
    {
      text: 'Sodium Content',
      values: [0.6913,0.7401,0.1111,0.3251,0.3802,0.0134,0.1484,0.2401,0.7155,0.1274,0.0594,0.3639,0.7763,1.6929,0.6869,0.3192,0.3686,0.2152,25.6749,0.1094,0.0278,0.2154,1.0625,0.5676,0.611,0.09,0.7276,0.7276,0.4351,2.2032,0.3393,0.2907,0.0909,1.5958,0.2582,0.2324,5.7389,0.3717,0.0708,0.7353,2.1138,0.0044,1.8974,0.0564,0.0986,0.5547,0.3997,0.2079,0.1196,0.0434,1.142,0.7413,0.2396,0.0022,1.0426,0.6587,0.4596,0.9037,0.1308,0.0448,1.0333,0.9849,0.565,0.0274,0.5353,0.5844,1.8922,0.2278,0.4853,0.7739,0.6467,0.3004,0.1837,0.1571,0.1197,0.5426,0.3102,1.5187,0.0568,0.3601,0.5682,0.2467,0.5034,0.5536,0.2284,0.2725,0.3855,0.0943,4.9042,0.2609,2.3713,0.768,0.0156,1.1624,0.1249,0.1089,0.5104,0.5971,0.6519,1.7485],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#b3de69'
    },
    {
      text: 'Carbohydrate Content',
      values: [61.8,11.5,24.7,7.7,62.8,29.3,38.3,20.6,36.8,7.7,19.3,98.5,50.5,59.7,7.1,7.7,24.2,46.4,251.1,58.6,1.5,26.2,13.9,46.5,47.5,10.2,13.8,41.7,39.7,45.7,42.9,3.5,22.8,10.3,57.5,33.9,210.9,61.4,51.7,75.2,20,11.6,11.8,6,2.4,13.2,25.1,19.7,20.8,5.6,71.2,43.8,38.9,5.2,49.1,29.3,28.6,40.8,5,30.2,19.6,24.1,5.2,26.1,17.3,31,17.4,40,51.2,15.5,11.2,14.6,24.4,25.6,22.6,61.4,6.1,4.8,32.6,6.6,26.2,4.1,52.6,18.2,29.4,8.6,33.3,13.9,575.7,95.9,73.3,19.4,21.2,11.4,43.1,24.2,2.9,11.5,42,75.7],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#8993c7'
    },
    {
      text: 'Fiber Content',
      values: [4.3,3.5,0.9,4,4.8,5.8,5.7,4.2,2.2,2.1,9.1,9.5,2.2,1.8,0.8,1.6,3.5,7.8,20.3,4.5,0.1,0.9,2.5,4.7,4.1,0.4,0.5,2.9,8.4,5.4,1.3,0,1.1,2.9,3.2,4,13.1,1.6,21,15.9,2.4,1.5,1.1,1.9,0.3,7.5,1.6,2,2.5,1.2,6,14.5,13.5,0.1,3.9,2.7,2.3,10.1,0.3,2.2,2.5,5.2,2,3.5,2.9,1.1,1.5,4.7,6.7,1.4,0.5,2.6,6.2,7.5,2,1.7,2.5,1.3,3.4,1.2,6.3,0.4,2.5,0.8,3.5,1.9,9.8,0.4,34.1,1.5,8,2.2,2.2,0,2.6,0.8,0.1,2.9,5.6,18.1],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#de69c7'
    },
    {
      text: 'Sugar Content',
      values: [13.7,5.2,0.3,3.6,4.2,4.2,8.6,4.9,1.7,4.4,5.1,8.7,0.6,2.6,2.6,4.2,11.6,3.3,179.7,5.3,0.2,0.5,1,10.8,2,0.4,0.6,5.1,0.3,13.5,1.3,3.2,7.6,2.1,28.2,23.8,3.9,51,8.5,10.1,4.3,4.8,6.9,3.3,0.3,2.6,0.6,1.8,10.2,1.2,3.5,3.5,5.9,3.8,3.4,4.1,3.2,8.3,1.3,26.8,14.2,5.4,1,1.7,1.7,3.7,3,1.9,4.1,3.6,9.6,7.1,7.4,15.2,6.3,25,3.8,1.3,27.6,2.8,5.2,2.4,24.7,1.1,0.8,3.9,14.3,8,162,45.1,16.8,10.3,17.1,1.8,24.8,16.7,0.9,4.7,7.7,14.5],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#b369de'
    },
    {
      text: 'Protein Content',
      values: [26.2,36,30.2,7.4,22.3,6.6,4.5,8.7,23.7,45.1,15.4,29,32.6,30.3,30.9,27,53,10.7,67.9,21.7,2.7,33.6,68.9,14.2,5.6,2.8,17.6,20,9.2,38.7,13.8,0,8.5,8.5,7.2,2.3,106.2,10.4,28.4,20,43.3,1,20.9,11.7,1.4,19,3.8,17.9,2.4,1.3,28.3,17.8,19.9,0,10.8,3.2,6.5,23.6,0.7,4,17.9,22.5,1.2,3.2,14.2,23.5,14.7,11.3,9.2,23.2,17.6,19.3,5.5,12.8,3.1,15.6,1.6,14.9,3.8,14.4,22.9,5.6,12.5,5.7,6.6,21.8,8.3,1.4,106.8,9.4,38.3,26.6,1.2,12.7,4.6,1.7,7.5,34.5,35,50],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#dade69'
    }



  ]
};


zingchart.render({
    id: 'nutrition',
    data: nutrition,
});


