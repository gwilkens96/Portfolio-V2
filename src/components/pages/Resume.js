import React from "react";
import resumePdf from "../img/gwresume.jpeg";

export default function Resume() {
  return (
    <div>
      <img src={resumePdf} alt="nice resume" class="img-fluid h-50" />
    </div>
  );
}
