import React from "react";

import "./style.css";

function Header() {
  return (
    <div className="header">
      <div class="container-fluid">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">USER DIRECTORY</h1>
            <h6>Sort and Filter Employees</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
