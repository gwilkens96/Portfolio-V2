import React from "react";
import resumePdf from "../img/gwupdatedresume.png";

export default function Resume() {
  return (
    <div class="resumeContainer">
      <img src={resumePdf} alt="nice resume" class="img-fluid h-50 resume" />
    </div>
  );
}
