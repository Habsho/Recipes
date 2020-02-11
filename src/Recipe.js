import React from "react";

const Recipe = ({
  title,
  calories,
  persons,
  image,
  dietlabel,
  ingredients,
  healthLabels
}) => {
  return (
    <div>
      <div className="row m-4 p-3 shadow">
        <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
          <img
            className="recipe-img rounded-circle"
            src={image}
            alt="Card  cap"
          />
        </div>
        <div className="col-8 mx-auto d-flex justify-content-center align-items-center flex-column">
          <button className="btn btn-danger ">{title}</button>
          <div className="card-text p-2">
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
          <div>
            <p className="btn btn-primary m-1">
              Calories: {Math.round(calories)}
            </p>
            <p className="btn btn-warning m-1">Servings: {persons} </p>
            <p className="btn m-1 btn-info">{dietlabel}</p>
            <p className="btn m-1 btn-success">{healthLabels}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
