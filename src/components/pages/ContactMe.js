import React from "react";

export default function ContactMe() {
  return (
    <div>
      <h1 class="contact">Contact Me:</h1>
      <ul class="bg-light">
        <li class="p-2">
          Link with me here:
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/griffin-wilkens-375b96217"
          >
            {" "}
            LinkedIn 🔗
          </a>
        </li>
        <li class="p-2">
          See my other work here:
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/gwilkens96"
          >
            {" "}
            Github 🖥
          </a>
        </li>
        <li class="p-2">
          You can reach me at:
          <a style={{ textDecoration: "none" }} href="tel:4044038524">
            {" "}
            404-403-8524 📱
          </a>
        </li>
        <li class="p-2">
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
