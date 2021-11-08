
function plotFromCSV() {
    Plotly.d3.csv("recipeCategory.csv", function(err, rows) {
        console.log(rows);
        processData(rows);
    });
}

function processData(allRows){
    let test = [];
    let test2 = [];
    let test3 = [];
    let row;

    for(let i = 0; i < allRows.length; i++) {
        row = allRows[i];
        test.push(row["RecipeName"]);
        test2.push(row["RecipeCategory"]);
    }

    test3.push(test2.join(" "));
    console.log("Recipe Name", test);
    console.log("Recipe Category", test2);
    console.log("STRING",  test3);

}

let chartConfig = {
  type: 'wordcloud',
  options: {
    text:  'One Dish Meal Poultry Chicken Vegetable Savory Pies Long Grain Rice Lunch/Snacks Lunch/Snacks Lunch/Snacks Pork Vegetable One Dish Meal European Lunch/Snacks Chicken Breast Stew < 30 Mins Pork Low Protein Chicken Thigh & Leg Meat Chicken Breast Australian Stew Potato Australian Meat One Dish Meal Vegetable Savory Pies Breakfast Salad Dressings One Dish Meal NA Frozen Desserts Vegetable Breads Cheesecake Ham Black Beans Spreads Onions Pork One Dish Meal Lunch/Snacks Spinach Onions Breakfast Breakfast Corn Potato Black Beans Ham Meat Spaghetti Potato Onions Stew Vegetable Candy Spinach Lunch/Snacks Low Cholesterol Salad Dressings Crab One Dish Meal < 15 Mins Potato Savory Pies Lunch/Snacks Lunch/Snacks Meat Peppers Cauliflower Tarts Breakfast Vegetable Curries Frozen Desserts Chicken Breast Vegetable Lunch/Snacks Breakfast Spreads Spinach Lunch/Snacks Lunch/Snacks Dessert Yeast Breads Dessert Cheese Chicken Melons One Dish Meal Pie Dessert < 15 Mins Steak Stew Beans' ,
    colorType: 'palette',
    ignore: ['<'],
    maxItems: 100,
    minLength: '4px',
    palette: ['#D32F2F', '#1976D2', '#9E9E9E', '#E53935', '#1E88E5', '#7E57C2', '#F44336', '#2196F3', '#A1887F'],
    style: {
      fontFamily: 'Playfair Display',
      hoverState: {
        backgroundColor: '#1976D2',
        borderColor: 'none',
        borderRadius: '3px',
        fontColor: 'white'
      }
    }
  }
};


zingchart.render({
  id: 'myChart',
  data: chartConfig,
});




plotFromCSV();