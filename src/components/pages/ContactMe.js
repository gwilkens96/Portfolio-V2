import React from "react";

export default function ContactMe() {
  return (
    <div>
      <h1>Contact Me:</h1>
      <ul>
        <li class="p-4">
          Link with me here:
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/griffin-wilkens-375b96217"
          >
            {" "}
            LinkedIn 🔗
          </a>
        </li>
        <li class="p-4">
          See my other work here:
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/gwilkens96"
          >
            {" "}
            Github 🖥
          </a>
        </li>
        <li class="p-4">
          You can reach me at:
          <a style={{ textDecoration: "none" }} href="tel:4044038524">
            {" "}
            404-403-8524 📱
          </a>
        </li>
        <li class="p-4">
          Feel free to email me at:
          <a
            style={{ textDecoration: "none" }}
            href="mailto: gbwilkens96@protonmail.com"
          >
            {" "}
            gbwilkens96@protonmail.com 📧
          </a>
        </li>
      </ul>
    </div>
  );
}
