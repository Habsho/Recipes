import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <div className="row m-4 p-3 shadow">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <img
            class="recipe-img rounded-circle"
            src={image}
            alt="Card image cap"
          />
        </div>
        <div className="col-8 d-flex justify-content-center align-items-center flex-column">
          <button class="btn btn-danger ">{title}</button>
          <div class="card-text p-2">
            <table className="text-center">
              <tbody>
                {ingredients.map((ingredient, i) => (
                  <tr key={i}>
                    <td>{ingredient.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p class="btn btn-primary">Calories: {calories.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
