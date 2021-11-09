
function plotFromCSV() {
    Plotly.d3.csv("CSV/recipeCategory.csv", function(err, rows) {
        processData(rows);
    });
}

function processData(allRows){
    let test = [];
    let test3 = [];
    let row;

    for(let i = 0; i < allRows.length; i++) {
        row = allRows[i];

        test.push(row["RecipeCategory"]);
    }

    test3.push(test.join(" "));

}

let chartConfig = {
  type: 'wordcloud',
  options: {
    text:  'One Dish Meal Poultry Chicken Vegetable Savory Pies Long Grain Rice Lunch/Snacks Lunch/Snacks Lunch/Snacks Pork Vegetable One Dish Meal European Lunch/Snacks Chicken Breast Stew < 30 Mins Pork Low Protein Chicken Thigh & Leg Meat Chicken Breast Australian Stew Potato Australian Meat One Dish Meal Vegetable Savory Pies Breakfast Salad Dressings One Dish Meal NA Frozen Desserts Vegetable Breads Cheesecake Ham Black Beans Spreads Onions Pork One Dish Meal Lunch/Snacks Spinach Onions Breakfast Breakfast Corn Potato Black Beans Ham Meat Spaghetti Potato Onions Stew Vegetable Candy Spinach Lunch/Snacks Low Cholesterol Salad Dressings Crab One Dish Meal < 15 Mins Potato Savory Pies Lunch/Snacks Lunch/Snacks Meat Peppers Cauliflower Tarts Breakfast Vegetable Curries Frozen Desserts Chicken Breast Vegetable Lunch/Snacks Breakfast Spreads Spinach Lunch/Snacks Lunch/Snacks Dessert Yeast Breads Dessert Cheese Chicken Melons One Dish Meal Pie Dessert < 15 Mins Steak Stew Beans Beverages Beverages Dessert Dessert Southwestern U.S. Pie Sauces Stew Vegetable Dessert Dessert Black Beans < 60 Mins Dessert Lactose Free Dessert Weeknight Beverages Yeast Breads Whole Chicken Dessert High Protein Cheesecake Sauces Sauces Free Of... Weeknight Dessert High In... Brazilian Breakfast Vegetable Dessert Breads Bar Cookie Breakfast Dessert Dessert Brown Rice Oranges Free Of... Dessert Pork Low Protein Asian Dessert Chicken Breast Potato Vegetable Cheese Halibut Meat Pie Lamb/Sheep Very Low Carbs Chicken Breads Chicken Breast Spaghetti Scones Drop Cookies Dessert Lunch/Snacks Dessert Lamb/Sheep Dessert Cheesecake Dessert Beans Vegetable Dessert Frozen Desserts Punch Beverage Dessert Yeast Breads Sauces Very Low Carbs Lunch/Snacks Cheesecake Pineapple Whole Chicken Low Cholesterol Dessert Weeknight Chicken Breast Dessert Pie Dessert Lunch/Snacks Lunch/Snacks Whole Chicken < 30 Mins Dessert Quick Breads Sourdough Breads Low Protein Lunch/Snacks Dessert Chicken Breast Curries Chicken Breast Chicken Breast Chicken Chicken Livers Chicken Livers Coconut Chicken Livers < 60 Mins < 30 Mins Free Of... Vegetable Whole Chicken Savory Pies Chicken Chicken Breast Free Of... Dessert Chicken Breast Coconut Lunch/Snacks Dessert Chicken Breast Dessert Poultry Quick Breads Dessert Steak Healthy Pork Quick Breads Scones Whole Chicken Chicken Breast Chicken Breast Lobster Dessert Pork Pork Chicken Breast Halibut Sauces Pork Rice Scones Apple Cheese Dessert Punch Beverage Low Protein Broil/Grill Drop Cookies Dessert Quick Breads Spreads Dessert Dessert Dessert Quick Breads Quick Breads Dessert Bar Cookie Dessert Dessert Bar Cookie Dessert Beverages Dessert Dessert Dessert Pie Dessert Pie Dessert Whole Chicken Chicken Livers < 30 Mins Quick Breads Dessert Lunch/Snacks Crab Lunch/Snacks Low Protein Lunch/Snacks Chicken Breast Chicken Breast Weeknight Vegetable Bar Cookie Bar Cookie Crab Cheesecake Soy/Tofu Crab Crab Crab Jellies Dessert Dessert Potato Potato Pears Lamb/Sheep Lamb/Sheep Pears Cheese Low Protein Savory Pies Cheese Vegetable Dessert Breakfast Pie Chicken Breast Chowders Dessert Meat Poultry Dessert Pork Soy/Tofu Potato Cauliflower Breakfast Vegetable Dessert Vegetable Lunch/Snacks < 60 Mins Sauces Dessert Dessert Potato Candy Potato Candy Lunch/Snacks Dessert Very Low Carbs Very Low Carbs Dessert Yeast Breads Chicken Chutneys White Rice Dessert Pie Chowders Whole Chicken Chicken Breast Chicken Whole Chicken Vegetable Vegetable Lunch/Snacks Low Protein Tex Mex Tex Mex Dessert Lunch/Snacks Bar Cookie Pork Bar Cookie Vegetable Bass Vegetable Sauces Sauces Vegetable Vegetable Sauces Dessert Potato Sauces Dessert German Meat Frozen Desserts Beverages Dessert Dessert Fruit Beverages Breakfast European Chicken Breast Pineapple Breakfast Pineapple Pie Pie Lunch/Snacks Lunch/Snacks Dessert Dessert Dessert Dessert Pie Breakfast Vegetable Vegetable Dessert Sauces Dessert Dessert Sauces Beverages Smoothies Beverages Frozen Desserts Bar Cookie Sauces Dessert Dessert Dessert Dessert Lunch/Snacks Dessert Pie Hungarian German Frozen Desserts Meat Frozen Desserts Beverages Poultry Beverages Punch Beverage Chicken Breast Dessert Beverages Bar Cookie Beverages Dessert Vegetable Beverages Dessert Bar Cookie Beverages Dessert Beverages Lunch/Snacks Manicotti Dessert Beans Bar Cookie Dessert Dessert Vegetable Onions Pie Dessert Dessert Pie European New Zealand Poultry Chicken Thigh & Leg Bar Cookie Bar Cookie Dessert Bar Cookie Scones Dessert Indonesian Potato Greek Corn Lentil Bar Cookie Breakfast Breakfast Pie Healthy Dessert Beverages Smoothies Beverages Vegetable Pork High Protein Quick Breads Dessert Summer Chicken Breast Bar Cookie Scones Dessert Dessert Dessert Pork European Dessert Vegetable Sauces Vegetable Long Grain Rice Quick Breads Breakfast Southwest Asia (middle East) Beverages' ,
    colorType: 'palette',
    ignore: ['<', '/', '(', ')'],
    maxItems: 600,
    minLength: '4px',
    palette: ['#bdc3c7', '#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e74c3c', '#2ecc71', '#e67e22'],
    style: {
      fontFamily: 'Playfair Display',
      hoverState: {
        backgroundColor: '#1976D2',
        borderColor: 'none',
        borderRadius: '3px',
        fontColor: 'white'
      },
      tooltip: {
        text: '%text: %hits',
        visible: true,

        alpha: 0.9,
        backgroundColor: '#1976D2',
        borderRadius: 2,
        borderColor: 'none',
        fontColor: 'white',
        fontFamily: 'Playfair Display',
        textAlpha: 1
      }
    }
  }
};


zingchart.render({
  id: 'myChart',
  data: chartConfig,
});




plotFromCSV();