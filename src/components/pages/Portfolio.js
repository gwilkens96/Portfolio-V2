import React from "react";
import hikeFinder from "../img/uhikerscrnsht.png";
import emailSweeper from "../img/professionaleyes.herokuapp.com.png";
import readMe from "../img/readmegenny.png";
import workDayShot from "../img/schedulerscrnsht.jpg";

export default function Portfolio() {
  return (
    <div>
      <p class="top">
        Linked here are some of the projects I made during the GT bootcamp that
        I am most proud of:
      </p>
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
            <h4>Javascript/CSS/HTML</h4>
            <p>
              U-Hiker is a website that will allow you to search for the nearest
              parks and hiking trails within the radius of a given city and give
              you the direct route from your home to that park or trail.
            </p>
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
            <h4>Node/JavaScript/CSS/Handlebars</h4>
            <p>
              ProfessionalEyes is a website that will take a given text, analyze
              key words the algorithm determines "too emotional," and return
              synonyms that are more neutral and professional. You may also make
              a profile to save these messages and edit them as you please.
            </p>
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
            <h4>Javascript/Inquirer</h4>
            <p>
              This app will generate a clean and industry standard readme for
              any and all projects.
            </p>
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
            <h4>HTML/CSS/Javascript</h4>
            <p>
              This simple app allows the user to plan for their busy days.
              Allows saving if they do a task daily and tracks the time hourly
              and daily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
