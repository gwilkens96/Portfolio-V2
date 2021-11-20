import React from "react";
import hikeFinder from "../img/uhikepic.jpg";

export default function Portfolio() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              id="selfPortrait"
              src={hikeFinder}
              alt="dog and trail"
              class="img-fluid h-100"
            />
            <a
              style={{ textDecoration: "none" }}
              href="https://gwilkens96.github.io/u-hiker-project-1/"
            >
              <h3>U-Hiker</h3>
            </a>
            <p>Javascript/CSS/HTML</p>
          </div>
          <div class="col">
            <a
              style={{ textDecoration: "none" }}
              href="https://professionaleyes.herokuapp.com/"
            >
              <h3>ProfessionalEyes</h3>
            </a>
            <p>Node/JavaScript/CSS/Handlebars</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/gwilkens96/09-Node.js-Homework-Professional-README-Generator"
            >
              <h3>ReadMe Generator</h3>
            </a>
            <p>Javascript/Inquirer</p>
          </div>
          <div class="col">
            <a
              style={{ textDecoration: "none" }}
              href="https://gwilkens96.github.io/05-Work-Day-Scheduler/"
            >
              <h3>Workday Scheduler</h3>
            </a>
            <p>HTML/Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
}
