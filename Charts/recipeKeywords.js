/**
function plotFromCSV() {
    Plotly.d3.csv("CSV/recipeKeywords.csv", function(err, rows) {
        processData(rows);
    });
}

function processData(allRows){
  let keywords = [];
  let keywordsList = [];
  let temp = [];
  let temp2 = [];
  let row;

  for(let i = 0; i < allRows.length; i++) {
    row = allRows[i];

    keywords.push(row["Keywords"]);
  }

  for(let i = 0; i < allRows.length; i++) {

    keywordsList.push(keywords[i].substr(1, keywords[i].length).replace(/[,)(]+/g, '').split("\""));
  }

  for(let i = 0; i < keywordsList.length; i++){
    for(let k = 1; k < keywordsList[i].length; k+=2){
      temp.push(keywordsList[i][k]);
    }
  }

  temp2.push(temp.join(" "));
  console.log("test", temp2);

}
 */

let recipeKeywords = {
  type: 'wordcloud',
  options: {
    text:  'Penne Meat European Low Cholesterol Healthy Kid Friendly Potluck < 60 Mins Beginner Cook Stove Top Easy Inexpensive Meat Kosher Thanksgiving < 15 Mins No Cook Easy Poultry Meat Asian < 60 Mins Beginner Cook Easy Inexpensive  Potato Cheese Vegetable < 4 Hours Rice Lentil Beans Palestinian Southwest Asia middle East Asian Low Protein Vegan Low Cholesterol < 60 Mins Steam Beginner Cook Easy Inexpensive Yam/Sweet Potato Potato Vegetable Kid Friendly < 4 Hours Easy Vegetable Asian Indian Low Cholesterol Healthy Spicy < 60 Mins Chicken Breast Chicken Poultry Cheese Meat Mexican < 30 Mins Beginner Cook Easy Meat European Very Low Carbs < 4 Hours Lactose Free Vegan Low Cholesterol Egg Free Healthy Free Of... < 30 Mins Small Appliance Vegetable European < 30 Mins High In... < 4 Hours Cheese Australian Kid Friendly < 30 Mins Beginner Cook Easy Chicken Poultry Meat < 60 Mins Pork Meat Potato Vegetable Meat Low Protein < 30 Mins Beginner Cook Easy  Chicken Poultry Meat < 60 Mins Easy  Chicken Poultry Meat < 30 Mins < 30 Mins Easy One Dish Meal Low Cholesterol Healthy < 60 Mins Beginner Cook Easy Vegetable Low Protein < 60 Mins < 30 Mins Easy Australian < 60 Mins Cheese Vegetable Hawaiian European High In... Winter Savory < 60 Mins Oven Easy Stove Top < 4 Hours Pork Apple Fruit Meat European Winter < 4 Hours Inexpensive Swedish Scandinavian European Kid Friendly Brunch < 30 Mins Fruit Vegetable Very Low Carbs Low Protein Low Cholesterol < 15 Mins Easy Turkey Breasts Poultry Rice Meat Oven < 4 Hours Dessert < 60 Mins Low Protein Low Cholesterol Healthy Beginner Cook Easy < 60 Mins Easy Dessert Cheese Thanksgiving < 4 Hours Pork Vegetable Meat Winter < 30 Mins Easy Corn Beans Vegetable Low Cholesterol Healthy Spicy < 60 Mins Stove Top Easy European < 4 Hours Vegetable Egg Free Free Of... Savory < 60 Mins Beginner Cook Easy Cheese Meat Spicy < 4 Hours Easy Rice Peppers Vegetable Meat Very Low Carbs Low Cholesterol Kid Friendly Winter Camping < 60 Mins Beginner Cook Easy Inexpensive Brunch < 30 Mins For Large Groups Easy Greens Vegetable < 30 Mins Easy Vegetable Low Cholesterol Healthy Brunch < 30 Mins Easy Potato Vegetable < 15 Mins Low Protein < 30 Mins Easy Vegetable Low Protein Low Cholesterol Healthy < 30 Mins Easy Vegetable < 60 Mins Beans Low Cholesterol Healthy < 15 Mins Inexpensive Pork Vegetable Meat Christmas Savory < 4 Hours Spicy < 60 Mins Easy Vegetable Asian Low Cholesterol < 30 Mins Refrigerator Stove Top Easy Inexpensive Vegetable Refrigerator Vegetable Summer < 30 Mins Easy One Dish Meal Pork Beans Meat European Low Cholesterol Healthy < 60 Mins Beginner Cook Easy Inexpensive Japanese Asian < 15 Mins Easy Inexpensive Dessert Sweet For Large Groups Easy Greens Vegetable Potluck Beginner Cook Easy < 15 Mins Easy High Fiber High In... Spicy < 15 Mins For Large Groups No Cook Beginner Cook Easy Potato Vegetable Brunch < 60 Mins Easy Vegetable < 30 Mins Easy Tuna Kid Friendly Free Of... < 60 Mins  Vegetable < 4 Hours Easy One Dish Meal Vegetable < 60 Mins Poultry Meat Camping < 30 Mins For Large Groups Easy < 4 Hours Easy Vegetable Asian Indian Low Protein < 30 Mins Vegetable < 30 Mins Dessert Fruit Summer < 4 Hours < 60 Mins Easy < 30 Mins Easy Meat Asian Indian Very Low Carbs < 60 Mins Dessert Fruit Low Protein Summer Sweet Beginner Cook Easy Chicken Poultry Meat Healthy < 60 Mins Beginner Cook Easy Meat Low Cholesterol Healthy < 4 Hours < 30 Mins Beginner Cook Easy Brunch < 60 Mins Oven Breads < 15 Mins Beginner Cook Easy Greens Vegetable Low Cholesterol Healthy < 60 Mins Easy Inexpensive Chicken Breast Chicken Poultry Meat Mexican < 30 Mins Peppers Vegetable Kid Friendly < 30 Mins Easy Cookie & Brownie Dutch European Christmas < 60 Mins Breads European Christmas Japanese Asian Healthy < 4 Hours Easy Peppers Vegetable European < 60 Mins Poultry Meat < 60 Mins Oven Fruit Brunch < 15 Mins Beginner Cook Easy Tuna < 60 Mins Oven Beginner Cook Easy Dessert Low Protein Low Cholesterol Healthy Winter < 4 Hours Cookie & Brownie < 60 Mins For Large Groups  Meat Mexican < 30 Mins Easy Meat South American < 4 Hours Meat < 60 Mins Oven Beginner Cook Easy Low Protein Vegan Low Cholesterol Healthy Winter < 60 Mins Easy Dessert Weeknight Stove Top < 4 Hours Poultry Meat < 60 Mins Dessert Healthy Weeknight Oven < 4 Hours Thai Asian Free Of... < 30 Mins Cookie & Brownie Fruit Nuts Weeknight Oven < 4 Hours Dessert Weeknight Oven < 4 Hours Chicken Poultry Meat European Very Low Carbs Weeknight Oven < 4 Hours Cookie & Brownie European Weeknight Oven < 4 Hours Free Of... < 60 Mins Low Cholesterol High Protein Healthy High In... < 15 Mins For Large Groups No Cook Easy Pineapple Tropical Fruits Fruit Weeknight Oven < 4 Hours Vegetable Weeknight Oven < 4 Hours Mexican Low Protein Low Cholesterol Healthy Weeknight No Cook < 4 Hours Easy Dessert Oven < 4 Hours Easy Black Beans Beans Mexican Low Cholesterol Healthy < 15 Mins No Cook Easy Vegetable Meat Low Cholesterol Healthy Free Of... Weeknight < 4 Hours European Low Cholesterol Healthy Spring Summer < 60 Mins Oven Berries Fruit < 60 Mins Oven Weeknight Oven < 4 Hours Corn Beans Vegetable Low Cholesterol Healthy Free Of... Spring Summer < 30 Mins Easy Fruit Nuts Weeknight Oven < 4 Hours Low Protein Low Cholesterol Healthy Free Of... < 30 Mins Easy Fruit Nuts Weeknight Oven < 4 Hours Oven < 4 Hours Mexican Free Of... Weeknight Easy Breads Healthy Weeknight Oven < 4 Hours Chicken Poultry Meat Winter Weeknight Broil/Grill Oven Stove Top < 4 Hours Low Protein Healthy Weeknight Oven < 4 Hours Free Of... High In... Weeknight < 4 Hours Dessert Weeknight Oven < 4 Hours Low Protein Low Cholesterol Healthy Free Of... < 30 Mins European Very Low Carbs High In... < 15 Mins Easy  Stove Top < 4 Hours Easy Weeknight Oven < 4 Hours < 60 Mins Easy South American Weeknight Oven < 4 Hours European Weeknight Broil/Grill Oven Stove Top < 4 Hours < 60 Mins Oven Easy Weeknight Oven < 4 Hours High In... Weeknight Oven < 4 Hours Dessert Cookie & Brownie Weeknight Oven < 4 Hours Mexican < 60 Mins Easy Low Protein Weeknight Oven < 4 Hours Fruit Nuts Lactose Free Vegan Low Cholesterol Egg Free Free Of... Weeknight Refrigerator Easy Rice Vegetable Weeknight < 4 Hours Apple Berries Grapes Citrus Fruit Nuts Lactose Free Low Protein Low Cholesterol Egg Free Healthy Kosher Free Of... Sweet < 15 Mins Easy < 15 Mins Easy Berries Fruit < 60 Mins Oven Meat European < 60 Mins Oven Low Cholesterol Weeknight < 4 Hours Indian < 30 Mins Easy Weeknight Oven < 4 Hours Chicken Thigh & Leg Chicken Poultry Meat Free Of... Weeknight < 4 Hours Cheese Vegetable Healthy Weeknight Oven < 4 Hours Russian European Low Protein Low Cholesterol Healthy Free Of... < 60 Mins Meat < 60 Mins Oven Very Low Carbs High Protein Free Of... High In... < 15 Mins Easy Cajun Weeknight < 4 Hours Dessert Weeknight Oven < 4 Hours Meat High Protein High In... Weeknight Oven Low Protein Low Cholesterol Healthy < 60 Mins Easy Poultry Vegetable Meat European Potluck Weeknight Oven < 4 Hours Low Cholesterol Healthy < 60 Mins Oven Chicken Poultry Meat European Weeknight European < 60 Mins Quick Breads Breads Berries Fruit Sweet Weeknight Oven < 4 Hours Dessert Cookie & Brownie Berries Fruit Weeknight For Large Groups Oven Apple Fruit Nuts Weeknight Oven < 4 Hours Vegan < 15 Mins Easy Vegetable Weeknight Oven < 4 Hours Pork Meat European Weeknight Roast Oven < 4 Hours Vegetable Low Protein Weeknight For Large Groups Oven < 4 Hours Dessert Weeknight Oven < 4 Hours Healthy < 60 Mins Oven Caribbean Free Of... < 30 Mins Healthy < 60 Mins Short Grain Rice Rice Weeknight Oven < 4 Hours Beverages Dessert Apple Fruit Low Protein Low Cholesterol Healthy < 30 Mins Easy Beverages Low Protein Low Cholesterol Healthy Free Of... Christmas < 15 Mins For Large Groups Easy Apple Fruit Low Protein Healthy Weeknight Oven < 4 Hours Breads Low Cholesterol Healthy Bread Machine < 60 Mins For Large Groups Small Appliance Easy Breakfast Dessert Berries Fruit Vegan Free Of... Sweet Weeknight < 4 Hours Easy Free Of... Weeknight Oven Low Protein Low Cholesterol Healthy < 30 Mins Easy Dessert Berries Fruit < 60 Mins Oven Cheese Tropical Fruits Fruit Weeknight < 4 Hours Easy Chicken Pineapple Poultry Tropical Fruits Fruit Meat Free Of... Weeknight < 4 Hours Easy Healthy Weeknight Oven Weeknight For Large Groups Oven < 4 Hours  Chicken Poultry Meat < 60 Mins Oven < 60 Mins Oven Dessert Apple Fruit Low Protein Weeknight Oven < 4 Hours Low Protein Low Cholesterol Healthy < 30 Mins Easy Tuna Very Low Carbs Low Protein Low Cholesterol Healthy Kid Friendly < 60 Mins Cheese Low Cholesterol Healthy < 60 Mins Oven Easy Chicken Poultry Meat Very Low Carbs Weeknight  Weeknight < 4 Hours Breads Oven < 4 Hours Easy Yeast Breads Quick Breads Breads Lunch/Snacks < 60 Mins Oven Easy Low Cholesterol Healthy Weeknight Easy Low Protein Low Cholesterol < 60 Mins Easy Coconut Fruit Nuts Weeknight Oven < 4 Hours Chicken Poultry Meat Weeknight Oven < 4 Hours Chicken Poultry Meat Asian Indian Weeknight < 4 Hours Chicken Poultry Meat Weeknight Oven < 4 Hours Chicken Poultry Meat Healthy Weeknight Oven < 4 Hours Poultry Meat European Weeknight Oven < 4 Hours Chicken Beef Organ Meats Beef Liver Poultry Meat European Very Low Carbs Free Of... Weeknight < 4 Hours Chicken Beef Organ Meats Beef Liver Poultry Meat European Free Of... Weeknight < 4 Hours Fruit Nuts < 60 Mins Chicken Beef Organ Meats Beef Liver Poultry Meat European Very Low Carbs Free Of... Weeknight   < 15 Mins Easy Meat Low Cholesterol Weeknight Oven < 4 Hours Chicken White Rice Poultry Rice Meat Weeknight Oven < 4 Hours One Dish Meal Chicken Breast Chicken Poultry Meat European Weeknight Oven < 4 Hours Poultry Meat Weeknight Oven < 4 Hours Chicken Poultry Meat Very Low Carbs Weeknight Oven Freezer < 4 Hours Weeknight Roast Oven < 4 Hours < 60 Mins Oven Chicken Poultry Fruit Nuts Meat Thai Asian High Protein High In... Broil/Grill < 30 Mins Oven Beans Fruit Nuts Low Protein Free Of... Weeknight Chicken Breast Chicken Poultry Coconut Fruit Nuts Meat Weeknight Oven < 4 Hours Weeknight Oven < 4 Hours Chicken Poultry Vegetable Meat Broil/Grill < 15 Mins Oven Stove Top Easy Apple Fruit Vegan Free Of... < 30 Mins Easy Meat < 60 Mins Oven Breads Fruit Low Cholesterol Healthy Weeknight Oven < 4 Hours Weeknight Oven < 4 Hours Poultry Meat Weeknight < 4 Hours Weeknight Oven Refrigerator Meat Winter Weeknight Stove Top < 4 Hours Breads Peppers Vegetable < 60 Mins Oven Quick Breads Breads Sweet Weeknight Oven < 4 Hours Chicken Poultry Meat Chinese Asian High Protein Free Of... High In... Weeknight Oven < 4 Hours Chicken Poultry Coconut Fruit Nuts Meat Very Low Carbs Weeknight < 4 Hours Easy Chicken Poultry Meat Chinese Asian Low Cholesterol Healthy Weeknight < 4 Hours Healthy Free Of... Weeknight Low Protein Healthy Weeknight Oven < 4 Hours Meat Chinese Asian < 60 Mins Meat Free Of... < 60 Mins Oven Chicken Poultry Meat Weeknight Broil/Grill Oven High Protein Healthy Free Of... High In... Weeknight Oven < 4 Hours Plums Fruit Chinese Asian Low Protein Low Cholesterol Healthy Free Of... Weeknight < 4 Hours Meat Chinese Asian Weeknight < 4 Hours  Quick Breads Breads High In... < 60 Mins Oven Fruit < 30 Mins High In... Weeknight Oven < 4 Hours Weeknight Oven < 4 Hours Beverages Winter Christmas < 15 Mins For Large Groups Easy Christmas Easy < 30 Mins Oven Stove Top Dessert Cookie & Brownie < 60 Mins Oven Healthy Weeknight Oven < 4 Hours Breads Fruit Vegetable Nuts Weeknight < 4 Hours < 30 Mins Easy Free Of... < 60 Mins Cookie & Brownie Kid Friendly < 60 Mins Oven Easy Weeknight Oven < 4 Hours Breads Vegetable Sweet Weeknight Oven < 4 Hours Breads Weeknight Oven < 4 Hours Weeknight Oven < 4 Hours Dessert Cookie & Brownie Kid Friendly Weeknight Oven < 4 Hours Free Of... < 60 Mins Cookie & Brownie Scottish European Christmas < 60 Mins For Large Groups Oven Dessert Cookie & Brownie Fruit Nuts Kid Friendly Weeknight For Large Groups Oven Free Of... < 30 Mins Low Protein < 15 Mins Easy Free Of... < 30 Mins Cookie & Brownie < 30 Mins For Large Groups Oven Easy Weeknight Oven < 4 Hours Dessert < 60 Mins Oven  Dessert Cheese < 30 Mins Freezer Easy Free Of... Weeknight Broil/Grill Oven < 4 Hours Chicken Poultry Meat Asian Indian < 60 Mins Chicken Poultry Meat Portuguese European < 30 Mins Stove Top Breads Healthy < 60 Mins Oven Low Cholesterol Healthy < 60 Mins For Large Groups Oven Easy Crab High In... < 15 Mins Easy < 60 Mins Oven Low Cholesterol Healthy < 30 Mins  Vegetable < 30 Mins No Cook Easy Chicken Poultry Meat Thai Asian < 60 Mins Stove Top Chicken Poultry Meat Thai Asian Healthy Weeknight < 4 Hours Thai Asian Low Protein Low Cholesterol Healthy < 15 Mins No Cook Easy Dessert Cookie & Brownie Lime Citrus Fruit Weeknight For Large Groups < 4 Hours Dessert Cookie & Brownie Weeknight For Large Groups Oven < 4 Hours Low Protein Low Cholesterol Healthy Weeknight < 4 Hours Dessert < 60 Mins Oven Peppers Beans Vegetable Chinese Asian Low Cholesterol Free Of... < 30 Mins Stove Top Free Of... < 30 Mins  Very Low Carbs < 60 Mins Apple Fruit < 60 Mins Canning Easy Pears Fruit Weeknight Oven < 4 Hours  Vegetable Low Protein Weeknight Microwave < 4 Hours Vegetable Weeknight Oven < 4 Hours Fruit Weeknight Stove Top < 4 Hours Meat Very Low Carbs Weeknight < 4 Hours Easy Meat Very Low Carbs < 30 Mins Fruit Low Protein Low Cholesterol Healthy Winter Christmas < 60 Mins Canning Easy Meat Oven < 4 Hours Low Cholesterol Free Of... < 60 Mins Greek European Weeknight Oven < 4 Hours Greek European Weeknight Broil/Grill Oven Greek European Weeknight For Large Groups Oven < 4 Hours Weeknight Oven < 4 Hours Lunch/Snacks Potato Vegetable Spanish European Low Protein Free Of... < 60 Mins Easy Dessert Fruit Nuts European Low Cholesterol < 60 Mins Oven Chicken Poultry Coconut Fruit Nuts Meat Thai Asian < 30 Mins Potato Vegetable < 60 Mins Fruit Thai Asian Low Protein Healthy Kid Friendly < 30 Mins Easy Thai Asian Weeknight < 4 Hours Black Beans Beans Meat Brazilian South American Low Cholesterol Healthy Free Of... Weeknight For Large Groups < 4 Hours Coconut Fruit Nuts Thai Asian < 60 Mins Oven Easy Black Beans Beans Meat Brazilian South American Weeknight Oven < 4 Hours Beans Vegetable Chinese Asian Vegan Free Of... < 4 Hours Cauliflower Vegetable Asian Indian Broil/Grill < 60 Mins Oven Stove Top Vegetable Weeknight Oven < 4 Hours Soy/Tofu Beans < 15 Mins Low Cholesterol Healthy Weeknight Stove Top < 4 Hours Pineapple Tropical Fruits Fruit < 30 Mins Low Protein Free Of... Weeknight < 4 Hours Crab Healthy < 60 Mins  Fruit Tex Mex Southwestern U.S. Mexican Low Protein Low Cholesterol Healthy < 60 Mins European Low Protein Weeknight Fruit Weeknight Cheese Vegetable Weeknight Oven < 4 Hours Dessert Low Protein Low Cholesterol Healthy Kid Friendly Free Of... < 4 Hours Easy Vegetable Low Protein Low Cholesterol Healthy Weeknight Oven < 4 Hours Dessert Kid Friendly Free Of... < 30 Mins < 30 Mins Oven Easy German European < 60 Mins Oven Low Protein Weeknight Easy Low Protein < 15 Mins Easy German European < 60 Mins For Large Groups Oven Breads Australian < 15 Mins Easy Oranges Poultry Citrus Fruit Meat Asian Brunch < 60 Mins Sauces Pork Meat < 30 Mins Easy Long Grain Rice Rice Turkish Greek Southwest Asia middle East Asian European Low Cholesterol Weeknight < 4 Hours Weeknight Oven < 4 Hours Dessert Fruit Nuts European Low Cholesterol < 60 Mins Oven Potato Vegetable Low Cholesterol < 60 Mins Chicken Poultry Meat Free Of... Weeknight < 4 Hours Chicken Poultry Meat Weeknight < 4 Hours Poultry Meat Free Of... < 30 Mins Chicken Poultry Meat Asian Indian Very Low Carbs Free Of... Weeknight < 4 Hours Low Protein Weeknight < 60 Mins Oven Low Protein Low Cholesterol Healthy Weeknight Oven < 4 Hours Chicken Breast Chicken Poultry Meat < 60 Mins Low Cholesterol Spicy Weeknight < 4 Hours Southwestern U.S. Weeknight < 4 Hours Southwestern U.S. < 60 Mins Low Protein Weeknight Oven < 4 Hours Easy Weeknight Oven < 4 Hours Dessert Cookie & Brownie Scottish European Christmas < 60 Mins For Large Groups Oven Easy Fruit Nuts Meat Weeknight Broil/Grill Oven < 4 Hours Dessert Cookie & Brownie Pineapple Tropical Fruits Fruit Scottish European Christmas Weeknight For Large Groups Oven < 4 Hours German European Weeknight Oven < 4 Hours Thai Asian Very Low Carbs < 60 Mins Greek European Low Cholesterol Healthy Weeknight Oven < 4 Hours Fruit Low Protein Low Cholesterol Healthy Free Of... < 15 Mins Easy Pineapple Tropical Fruits Fruit Low Protein Low Cholesterol Healthy Free Of... < 15 Mins Easy Low Protein Free Of... < 60 Mins Low Protein Low Cholesterol Free Of... Weeknight No Cook Refrigerator Easy Weeknight < 4 Hours Potato Vegetable Weeknight Oven < 4 Hours Vegetable Spanish European Low Protein Low Cholesterol Free Of... < 30 Mins Easy Tex Mex Southwestern U.S. Free Of... Weeknight Roast Oven < 4 Hours Raspberries Berries Fruit Weeknight < 4 Hours European Healthy < 30 Mins Easy Spanish European Weeknight < 4 Hours Dessert Low Protein Free Of... < 15 Mins Small Appliance Easy Low Protein Low Cholesterol Healthy < 60 Mins Easy Apple Fruit Low Protein < 60 Mins Oven Apple Fruit Low Protein Weeknight Oven < 4 Hours Vegetable Low Protein Low Cholesterol Healthy < 60 Mins Low Protein Low Cholesterol Healthy < 60 Mins Easy Vegetable European Free Of... Weeknight Oven < 4 Hours Healthy < 60 Mins Chicken Poultry Meat Healthy < 60 Mins Oven Pork Tropical Fruits Fruit Meat Hawaiian < 30 Mins Vegetable European Very Low Carbs Low Protein Low Cholesterol Weeknight < 4 Hours Poultry Tropical Fruits Fruit Meat < 30 Mins Dessert Weeknight Oven < 4 Hours Easy Dessert Low Protein Healthy < 30 Mins Oven Cheese Low Protein < 60 Mins Oven  European < 60 Mins Refrigerator Cookie & Brownie Fruit Nuts Scottish European Christmas Weeknight For Large Groups Oven Easy Cookie & Brownie Fruit Nuts Scottish European Christmas < 60 Mins Oven Easy European Weeknight < 4 Hours Dessert Potato Fruit Vegetable Nuts Weeknight Oven < 4 Hours Vegetable Free Of... Brunch < 15 Mins Easy  Low Protein Low Cholesterol Free Of... < 30 Mins Easy Potato Fruit Vegetable Nuts Weeknight Oven < 4 Hours Corn Vegetable Mexican < 15 Mins Easy Potato Vegetable Weeknight Oven < 4 Hours Potato Vegetable < 60 Mins Low Protein Low Cholesterol < 15 Mins < 30 Mins Easy Beverages Low Protein < 15 Mins Easy Fruit < 30 Mins Dessert < 15 Mins Easy Dessert Cookie & Brownie Weeknight For Large Groups Oven < 4 Hours Fruit Low Protein Low Cholesterol Healthy Free Of... < 15 Mins Easy Fruit Nuts Weeknight Oven < 4 Hours Potato Vegetable Low Protein Weeknight Oven < 4 Hours Cookie & Brownie European Weeknight Oven < 4 Hours Weeknight Oven < 4 Hours Mexican Microwave < 30 Mins Cookie & Brownie Weeknight For Large Groups Oven < 4 Hours Dessert Berries Fruit Weeknight < 4 Hours European Healthy < 30 Mins Easy European Healthy < 30 Mins Easy Dessert Low Protein < 15 Mins Freezer Easy European Kid Friendly < 60 Mins Oven Easy Dessert Low Protein Free Of... < 30 Mins Small Appliance Very Low Carbs Low Protein Low Cholesterol < 15 Mins Easy Meat European Very Low Carbs High Protein Kid Friendly High In... Weeknight Oven < 4 Hours Very Low Carbs Low Protein Low Cholesterol Healthy < 15 Mins Easy Beverages Dessert Low Protein < 30 Mins Chicken Pork Poultry Meat Broil/Grill < 60 Mins Oven Stove Top Kid Friendly < 60 Mins Oven < 15 Mins Easy Dessert Lunch/Snacks Cookie & Brownie Low Cholesterol Healthy Weeknight No Cook Easy Very Low Carbs Low Protein Low Cholesterol < 15 Mins Freezer Easy  Greek European Oven < 15 Mins Easy < 30 Mins For Large Groups Oven Dessert Cookie & Brownie < 60 Mins For Large Groups Oven  Weeknight Oven < 4 Hours Low Protein Low Cholesterol Healthy Weeknight < 4 Hours Tuna Mexican High In... Microwave < 30 Mins European Microwave < 30 Mins Fruit Vegetable Nuts Weeknight Oven < 4 Hours Mexican Low Protein Low Cholesterol Healthy Winter < 60 Mins Dessert Cookie & Brownie Apple Fruit Healthy Weeknight Oven < 4 Hours Pineapple Tropical Fruits Fruit Nuts Low Protein Broil/Grill < 60 Mins Oven Easy Apple Fruit Weeknight Oven < 4 Hours Low Protein Low Cholesterol Healthy Free Of... < 30 Mins No Cook Easy Vegetable Free Of... < 30 Mins No Cook Easy Dessert Berries Fruit Low Protein Low Cholesterol Healthy Weeknight Oven < 4 Hours Cookie & Brownie Fruit European Weeknight Oven < 4 Hours Cookie & Brownie Fruit Nuts Weeknight For Large Groups Oven < 4 Hours Dessert Berries Fruit Low Protein < 15 Mins Stove Top Easy High In... < 30 Mins Oven Easy Weeknight Oven < 4 Hours Meat Weeknight Oven < 4 Hours Chicken Poultry Meat Weeknight Oven < 4 Hours Dessert Cookie & Brownie Weeknight Oven < 4 Hours Dessert Lunch/Snacks Cookie & Brownie Fruit Summer Weeknight For Large Groups Oven < 4 Hours Easy European Weeknight < 4 Hours Dessert Lunch/Snacks Cookie & Brownie Kid Friendly Weeknight For Large Groups Oven < 4 Hours Quick Breads Breads Low Protein < 60 Mins For Large Groups Oven Cookie & Brownie < 60 Mins For Large Groups Oven Asian Low Protein Low Cholesterol Healthy < 60 Mins Vegetable Greek European Free Of... Weeknight Oven < 4 Hours European Weeknight Oven < 4 Hours Vegetable Low Cholesterol Healthy Summer < 60 Mins Cauliflower Beans Vegetable Asian Indian Low Cholesterol Healthy Free Of... < 60 Mins Dessert Cookie & Brownie Fruit Nuts Weeknight Oven < 4 Hours Dessert < 4 Hours Easy Dessert < 15 Mins Easy Dessert Kid Friendly Weeknight Oven < 4 Hours Weeknight < 4 Hours Greek European Healthy Weeknight Oven < 4 Hours < 30 Mins For Large Groups Easy Beverages Low Protein Low Cholesterol Healthy < 15 Mins Easy Low Protein Low Cholesterol Healthy < 30 Mins Easy Greek European Weeknight Oven < 4 Hours Meat European Weeknight Broil/Grill Oven Stove Top < 4 Hours Healthy Free Of... High In... Weeknight < 4 Hours Easy Breads European Low Cholesterol Healthy St. Patrick\'s Day < 60 Mins For Large Groups Oven Easy Kid Friendly Halloween < 60 Mins Weeknight < 4 Hours Easy Chicken Poultry Meat Healthy < 60 Mins Dessert Cookie & Brownie Weeknight Oven < 4 Hours Quick Breads Breads Breakfast Healthy < 30 Mins Fruit European < 60 Mins European Low Protein Weeknight < 4 Hours Weeknight Oven < 4 Hours Meat European Low Cholesterol Healthy Weeknight < 4 Hours Low Cholesterol < 30 Mins Apple Fruit Weeknight Broil/Grill Oven Stove Top < 4 Hours Free Of... < 30 Mins Fruit Nuts < 60 Mins Low Protein St. Patrick\'s Day Broil/Grill < 60 Mins Oven Stove Top Pork Rice Meat Weeknight < 4 Hours Breads European Low Cholesterol Healthy St. Patrick\'s Day < 60 Mins Oven Dessert Weeknight For Large Groups < 4 Hours Easy Moroccan African Asian Vegan Low Cholesterol Healthy < 60 Mins Stove Top Fruit Summer < 60 Mins European < 15 Mins Easy Citrus Fruit Nuts Summer < 60 Mins European Weeknight < 4 Hours Dessert Lunch/Snacks Cookie & Brownie Weeknight For Large Groups Oven < 4 Hours Pineapple Tropical Fruits Fruit Weeknight Oven < 4 Hours Dessert Lunch/Snacks Cookie & Brownie Coconut Fruit Nuts Weeknight For Large Groups Oven < 4 Hours Quick Breads Breads High In... Sweet Weeknight Oven < 4 Hours < 15 Mins Easy Dessert Low Protein Kid Friendly < 60 Mins Oven Easy Kid Friendly Weeknight Oven < 4 Hours Chicken Poultry Meat Greek European Weeknight Oven < 4 Hours Meat Thai Asian Potluck Spring Summer < 30 Mins < 60 Mins Oven Easy Chicken Poultry Fruit Meat < 60 Mins Poultry Meat European Weeknight < 4 Hours Oven < 4 Hours Apple Fruit Low Protein Low Cholesterol Healthy Canning < 4 Hours Apple Fruit Healthy Weeknight Oven < 4 Hours Low Protein Low Cholesterol Healthy < 30 Mins Easy Austrian European Low Cholesterol Healthy High In... < 15 Mins For Large Groups Easy Low Protein Low Cholesterol Free Of... < 60 Mins Easy Dessert Kid Friendly < 60 Mins Easy Meat Greek European Weeknight Oven < 4 Hours Chicken Poultry Meat Weeknight Roast Oven < 4 Hours Potato Vegetable Low Protein Vegan Low Cholesterol Healthy Spicy < 60 Mins Oven Dessert Apple Fruit < 60 Mins Oven Chicken Poultry Apple Fruit Meat Weeknight Oven < 4 Hours Low Cholesterol Healthy < 15 Mins Breads Breakfast < 60 Mins Oven Vegetable Lactose Free Vegan Low Cholesterol Egg Free Kosher Free Of... Summer < 30 Mins Stove Top Low Protein Low Cholesterol Healthy < 60 Mins Easy Oven < 4 Hours Potato Corn Vegetable Low Protein Low Cholesterol Healthy < 60 Mins Corn Vegetable Low Protein Low Cholesterol Healthy Free Of... < 30 Mins Easy Lactose Free Healthy Free Of... Easy Beans Meat Weeknight Fruit Weeknight < 4 Hours Low Protein Low Cholesterol Healthy Free Of... < 15 Mins Easy Greens Fruit Vegetable Low Protein Low Cholesterol Healthy Free Of... < 30 Mins Easy Meat Kid Friendly < 60 Mins Oven Low Protein Low Cholesterol Healthy < 30 Mins Oven Easy Fruit Low Protein < 60 Mins Christmas Weeknight Oven < 4 Hours Dessert Healthy Kid Friendly Free Of... < 15 Mins For Large Groups Refrigerator Small Appliance Easy Grapes Fruit Meat Kid Friendly < 60 Mins Chicken Poultry Meat Very Low Carbs Low Protein Low Cholesterol < 30 Mins For Large Groups Oven Easy Chicken Poultry Meat Greek European Free Of... Weeknight Broil/Grill Oven European Low Protein Low Cholesterol Free Of... < 60 Mins Potato Vegetable Greek European Weeknight < 4 Hours Tuna < 15 Mins Easy Vegetable Free Of... < 60 Mins Oven Tropical Fruits Fruit Weeknight Broil/Grill Oven < 4 Hours Chicken Poultry Meat < 60 Mins Vegetable Very Low Carbs Low Protein Low Cholesterol Free Of... < 60 Mins Easy Dessert Pineapple Tropical Fruits Fruit Free Of... < 60 Mins Vegetable Lactose Free Free Of... < 15 Mins Easy European Low Protein Low Cholesterol Free Of... < 60 Mins Low Cholesterol Healthy Weeknight Oven < 4 Hours Potato Vegetable Weeknight Oven < 4 Hours Vegetable German European Weeknight < 4 Hours Chicken Poultry Meat < 60 Mins Meat Weeknight Oven < 4 Hours Easy  < 60 Mins Oven Dessert Healthy Weeknight Oven < 4 Hours Beans Greek European Free Of... Weeknight < 4 Hours Peppers Vegetable Greek European Free Of... < 60 Mins Easy Greek European Very Low Carbs Low Protein Free Of... < 15 Mins Easy Kid Friendly < 30 Mins Deep Fried Vegetable Healthy Kid Friendly < 30 Mins  Weeknight < 4 Hours Easy Breads Lactose Free Low Protein Vegan Low Cholesterol Egg Free Healthy Kosher Free Of... < 60 Mins Easy Low Protein < 60 Mins Low Cholesterol Healthy < 15 Mins Easy Dessert Free Of... < 60 Mins Freezer Easy Lunch/Snacks Apple Fruit Low Protein Microwave < 60 Mins Oven Small Appliance Easy Tropical Fruits Fruit < 30 Mins For Large Groups Easy Indian Very Low Carbs Low Protein Low Cholesterol Weeknight < 4 Hours  Vegetable Low Protein Low Cholesterol Healthy Free Of... < 30 Mins Easy Vegetable German European Weeknight Oven < 4 Hours Cheese Corn Vegetable < 60 Mins Oven Breads Breakfast Lunch/Snacks Cheese < 60 Mins Oven Potato Vegetable Weeknight Oven < 4 Hours Dessert Cookie & Brownie Fruit Free Of... Weeknight < 4 Hours Low Protein Low Cholesterol Healthy < 60 Mins Lamb/Sheep Fruit Meat Weeknight Oven < 4 Hours Low Protein < 15 Mins For Large Groups Small Appliance Easy Vegetable European Low Cholesterol Healthy Weeknight Roast Oven < 4 Hours' ,
    colorType: 'palette',
    ignore: ['<', '/', '(', ')', '.', 'Mins', 'Hours', 'Easy', 'Oven', 'Weeknight'],
    maxItems: 600,
    minLength: '4px',
    palette: ['#8dd3c7', '#8d98d3', '#93d38d'],
    style: {
      fontFamily: 'sans-serif',
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
        fontFamily: 'sans-serif',
        textAlpha: 1
      }
    }
  }
};


zingchart.render({
  id: 'recipeKeywords',
  data: recipeKeywords,
});




