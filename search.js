const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDeatilsContent = document.querySelector("meal-details-content");

const getMealList = () => {
  let searchInputText = document.getElementById("search-input").value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`
  )
    .then((response) => response.json())
    .then((data) => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `<div class="meal-item" data-id = "${meal.idMeal}">
                <div class="meal-img">
                    <img src="${meal.strMealThumb}"  alt="food">
                </div>
                <div class="meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href="#" class="recipe-btn">Get Recipe</a>
                </div>
            </div>`
            })
        }
        else{
            html = "Sorry, no recipes found!!";
        }

        mealList.innerHTML = html;
    });
};

searchBtn.addEventListener("click", getMealList);
