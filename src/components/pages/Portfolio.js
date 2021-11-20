import React from "react";
import hikeFinder from "../img/uhikepic.jpg";
import broomSweeper from "../img/professionaleyespic.jpg";
import openBook from "../img/readmepic.jpg";
import calendarShot from "../img/schedulerpic.jpg";

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
              <img
                src={hikeFinder}
                alt="dog and trail"
                class="img-fluid h-50"
              />
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
                src={broomSweeper}
                alt="it's a mop ig w/e"
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
                src={openBook}
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
              <img
                src={calendarShot}
                alt="calendar under glasses"
                class="img-fluid h-50"
              />
              <h3>Workday Scheduler</h3>
            </a>
            <p>HTML/Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
}
