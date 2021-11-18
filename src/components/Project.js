import React, { useState } from "react";
import Navigation from "./Navigation";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import ContactMe from "./pages/ContactMe";

export default function ProjectContainer() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <ContactMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}
