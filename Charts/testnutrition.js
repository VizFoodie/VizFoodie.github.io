let testnutrition = {
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
    marker: {
      type: 'circle',
      borderColor: 'none',
      size: '10px'
    },
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
    values: '0:3000:10',
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
    }

  ]
};


zingchart.render({
    id: 'testnutrition',
    data: testnutrition,
});


