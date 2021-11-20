import React from "react";
import hikeFinder from "../img/uhikerscrnsht.png";
import emailSweeper from "../img/professionaleyes.herokuapp.com.png";
import readMe from "../img/readmegenny.png";
import workDayShot from "../img/schedulerscrnsht.jpg";

export default function Portfolio() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <a
              class="link"
              style={{ textDecoration: "none" }}
              href="https://gwilkens96.github.io/u-hiker-project-1/"
            >
              <img src={hikeFinder} alt="U-Hiker" class="img-fluid h-50" />
              <h3>U-Hiker</h3>
            </a>
            <p>Javascript/CSS/HTML</p>
          </div>
          <div class="col">
            <a
              class="link"
              style={{ textDecoration: "none" }}
              href="https://professionaleyes.herokuapp.com/"
            >
              <img
                src={emailSweeper}
                alt="ProfessionalEyes"
                class="img-fluid h-50"
              />
              <h3>ProfessionalEyes</h3>
            </a>
            <p>Node/JavaScript/CSS/Handlebars</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a
              class="link"
              style={{ textDecoration: "none" }}
              href="https://github.com/gwilkens96/09-Node.js-Homework-Professional-README-Generator"
            >
              <img
                src={readMe}
                alt="flipping pages in a book"
                class="img-fluid h-50"
              />
              <h3>ReadMe Generator</h3>
            </a>
            <p>Javascript/Inquirer</p>
          </div>
          <div class="col">
            <a
              class="link"
              style={{ textDecoration: "none" }}
              href="https://gwilkens96.github.io/05-Work-Day-Scheduler/"
            >
              <img src={workDayShot} alt="Day Planner" class="img-fluid h-50" />
              <h3>Workday Scheduler</h3>
            </a>
            <p>HTML/Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
}
