import React from "react";
import { find } from "../../index";
import "./style.css";
import { femaleEmployee } from "../../index";
import { maleEmployee } from "../../index";
import { sortNameAscending } from "../../index";
import { sortNameDescending } from "../../index";
import { filterByLocation } from "../../index";

function Search() {
  find();
  return (
    <div className="search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <input type="text" id="filterState"></input>
          <button onClick={filterByLocation}>Search by State</button>
        </div>
        <div>
          <button onClick={sortNameAscending}> Ascending</button>
          <button onClick={sortNameDescending}>Descending</button>
          <button onClick={maleEmployee}>Males</button>
          <button onClick={femaleEmployee}>Females</button>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
}
export default Search;
