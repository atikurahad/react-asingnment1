import React from "react";
import "../styles/Projects.css";

const Project = () => {
  return (
    <div>
      <h1 className="project-title"> Our Project</h1>

      <section className="project-container">
        <div className="card">
          <div>
            <img className="img" src="https://themeforest.img.customer.envatousercontent.com/files/385552562/Preview-image/02_Doctor.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6bc272ff0f2f62c9593545d84e1cee5d" />
            <h5>Doctor Portal</h5>
          </div>
          <div>
            <img className="img" src="https://themeforest.img.customer.envatousercontent.com/files/469375567/theme-preview/02_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=d5b460b0e1c2679dccaa264d32825fd8" />
            <h5>Car Haat</h5>
          </div>
          <div>
            <img className="img" src="https://d12z45jzadnz51.cloudfront.net/wp-content/uploads/2017/09/desarrollo-web-tienda-online-fruta-1024x509.jpg" />
            <h5>Fruit Cocktail</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
