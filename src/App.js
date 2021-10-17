/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
import "./App.css";
import axios from "axios";
import { v5 as uuidv5 } from "uuid";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "30e8b206";
  const APP_KEY = "51d991a1bb2c6ef06f846e297a7472c9";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (!result.data.more) {
        return setAlert('NO food with such Name!');
      }
      setRecipes(result.data.hits);
      // console.log(result);
      // console.table(result.data);
      setAlert("");
      setQuery("");
    } else {
      setAlert("please fill the form!");
    }
  };

  // getData();

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    // console.log(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1>FOOD SEARCH APP</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name=""
          id=""
          autoComplete="off"
          placeholder="Search food"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <Recipe key={uuidv5} recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;
