import React, { useState } from "react";
import Navigation from "./Navigation";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import ContactMe from "./pages/ContactMe";
import Header from "./Header";
import Footer from "./Footer";

function ProjectContainer() {
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
      <Header></Header>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}

export default ProjectContainer;
