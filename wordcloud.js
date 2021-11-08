function plotFromCSV() {
    Plotly.d3.csv("recipeCategory.csv", function(err, rows) {
        console.log(rows);
        processData(rows);
    });
}

function processData(allRows){
    let test = [];
    let test2 = [];
    let row;

    for(let i = 0; i < allRows.length; i++) {
        row = allRows[i];
        test.push(row["RecipeName"]);
        test2.push(row["RecipeCategory"]);
    }

    console.log("Recipe Name", test);
    console.log("Recipe Category", test2);
}

plotFromCSV();