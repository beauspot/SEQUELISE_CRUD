"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("GigsModels", [
      {
        id: 1,
        title: "Web Developer",
        technologies: "HTML, CSS, JavaScript",
        description: "Looking for a web developer to create a landing page",
        budget: "$500",
        contact_email: "webdev@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Mobile App Developer",
        technologies: "React Native",
        description:
          "Looking for a mobile app developer to create a simple app",
        budget: "$1000",
        contact_email: "mobiledev@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "Python Developer",
        technologies: "Python, Django",
        description: "Looking for a Python developer to create a REST API",
        budget: "$800",
        contact_email: "pydev@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "Data Analyst",
        technologies: "Python, Pandas, SQL",
        description: "Looking for a data analyst to analyze a large dataset",
        budget: "$1200",
        contact_email: "dataanalyst@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: "UI/UX Designer",
        technologies: "Adobe XD, Figma",
        description:
          "Looking for a UI/UX designer to create wireframes and prototypes",
        budget: "$700",
        contact_email: "designer@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: "WordPress Developer",
        technologies: "WordPress, PHP",
        description:
          "Looking for a WordPress developer to create a custom theme",
        budget: "$900",
        contact_email: "wordpressdev@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        title: "React Developer",
        technologies: "React, Redux",
        description: "Looking for a React developer to create a web app",
        budget: "$1500",
        contact_email: "reactdev@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        title: "Java Developer",
        technologies: "Java, Spring",
        description: "Looking for a Java developer to create a backend API",
        budget: "$1000",
        contact_email: "javadev@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        title: "Graphic Designer",
        technologies: "Adobe Photoshop, Illustrator",
        description:
          "Looking for a graphic designer to create a logo and branding",
        budget: "$500",
        contact_email: "graphicdesigner@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        title: "Game Developer",
        technologies: "Unity, C#",
        description: "Looking for a game developer to create a simple game",
        budget: "$1200",
        contact_email: "gamedev@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        title: "SEO Specialist",
        technologies: "SEO, Google Analytics",
        description:
          "Looking for an SEO specialist to optimize website traffic",
        budget: "$800",
        contact_email: "seospecialist@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("GigsModels", null);
  },
};
