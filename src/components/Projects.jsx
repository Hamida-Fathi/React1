
import React from "react";
import styles from "../css/Projects.module.css";

const projects = [
  {
  name: "School Management App",
  image: "/src/assets/school.jpg",
  description: "A web-based school management system that allows teachers to manage classes and students efficiently.",
  link: "#", 
  techStack: ["HTML", "CSS", "JavaScript"],
  featured: true
},
  {
    name: "Weather App",
    image: "/src/assets/weather.jpg",
    description: "A simple weather app using OpenWeatherMap API.\nCheck the forecast for your city ",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    name: "Invoice App",
    image: "/src/assets/app.jpg",
    description: "A web application that allows users to add customers, create and manage invoices, and track payments easily.",
    link: "#",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
];
const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
           
            {project.featured && (
              <span className={styles.badge}>🌟 Featured</span>
            )}

            <img
              src={project.image}
              alt={project.name}
              className={styles.image}
            />

            
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            
            <div className={styles.techStack}>
              {project.techStack.map((tech, i) => (
                <span key={i} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>

           
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Live Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
