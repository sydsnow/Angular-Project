import { Project } from "../models/project";

export const PROJECTS: Project[] = [
  {
    "id": 1,
    "title": "SIPS",
    "slug": "sips",
    "github": "https://github.com/ppragides1/Sips",
    "excerpt": "Worked as a team to create a fully functioning website selling bubble tea using .NET. This website made use of authorization, authentication, PayPal, reCAPTCHA, email verification with SendGrid, a SQL database, and more.",
    "body": "Collaborating within a team of five, we developed Sips using C# ASP .NET to ensure a smooth and secure ordering process. Together, we navigated each phase of the project, from initial brainstorming and outlining Sips' design and functionality to crafting the ERD to define essential table details and their connections. Daily meetings helped us organize tasks and address challenges, fostering a cohesive team environment. Through collective problem-solving, we achieved our goal of delivering a polished website that we proudly showcased to our peers.",
    "url": null,
    "published_date": null,
    "image_sm": "sips-sm.png",
    "image_lg": "sips-lg.png",
    "thumb": null,
    "category_id": 1,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category":   { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": [
      {"id": 7, "name": ".NET", "slug": "dot-net"},
      {"id": 2, "name": "CSS", "slug": "css"},
      {"id": 1, "name": "Javascript", "slug": "javascript"},
      {"id": 17, "name": "C#", "slug": "c-sharp"},
      {"id": 10, "name":"Responsive", "slug": "responsive"},
      {"id": 16, "name": "SQL", "slug": "sql"},
    ],
    "learning_outcomes": [
      "Worked as a team to go through every stage necessary to create this website, including daily standup meetings, and constant communication and collaboration",
      "Integrated PayPayl for secure transactions",
      "Implemented authentication to only allow signed-in users to order",
      "Included authorization to allow users with admin privileges to make changes to products, user information, and more",
      "Made use of a SQL database to hold information",
      "Used the model view controller approach to create views that were visually appealing, and made for a seamless user experience"
    ]

  },
  {
    "id": 2,
    "title": "CineSync",
    "slug": "cinesync",
    "github": "https://github.com/wanradavich/Movie-Application",
    "excerpt": "In this group project, we built a movie application using React and the TMDb API.",
    "body": "Together as a team, we developed CineSync, a movie application that taps into the TMDb API to offer users access to a wide array of movie details, including current, top-rated, and upcoming films, along with trailers. Our fully responsive platform allows users to bookmark their favorite movies for future reference. By breaking down our app into distinct components and leveraging React's router, we ensured code organization while delivering a user-friendly interface for seamless navigation.",
    "url": "https://movie-application.fly.dev",
    "published_date": null,
    "image_sm": "movie-app-sm.png",
    "image_lg": "movie-app-lg.png",
    "thumb": null,
    "category_id": 1,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": [
      {"id": 4, "name": "React", "slug": "react"},
      {"id": 2, "name": "CSS", "slug": "css"},
      {"id": 9, "name":"API", "slug": "api"}
    ],
    "learning_outcomes": [
      "Fetching information from an API",
      "Breaking sections up into components for easier code management",
      "Utilizing React's router for navigation, and passing state data between components using links"
    ]

  },
  {
    "id": 3,
    "title": "Piece News",
    "slug": "piece-news",
    "github": "https://github.com/wanradavich/NewSite",
    "excerpt": "Worked as part of a group to create a fully responsive, news site style website focused on advanced SCSS techniques.",
    "body": "Welcome to Piece News—a dynamic front-end, tech-inspired news site dedicated to responsive layouts and sophisticated design. Originally built with CSS, we've upgraded to SCSS to harness its modular styling capabilities. This transition highlights SCSS's efficiency in streamlining our development workflow and ensuring our codebase remains scalable and manageable.",
    "url": null,
    "published_date": null,
    "image_sm": "piece-news-sm.png",
    "image_lg": "piece-news-lg.png",
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category":   { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": [
      {"id": 1, "name": "Javascript", "slug": "javascript"},
      {"id": 3, "name": "SCSS", "slug": "scss"},
      {"id": 10, "name": "Responsive", "slug": "responsive"},
      {"id": 11, "name": "HTML", "slug": "html"},
      {"id": 18, "name": "Bootstrap", "slug": "bootstrap"},
    ],
    "learning_outcomes": [
      "Responsive web design, with a mobile first approach",
      "The benefits of using SCSS over CSS for modularity",
      "Advanced SCSS techniques including the use of transitions, transformations, and animation",
      "Custom SCSS variables for reusability"
    ]
  },
  
  {
    "id": 4,
    "title": "Vulcan",
    "slug": "vulcan",
    "github": "https://github.com/wanradavich/Vulcan",
    "excerpt": "The objective of this coding challenge was to replicate a specified website, aiming to mimic its design and content as accurately as possible.",
    "body": "For this coding challenge project, we employed SCSS, HTML, and JavaScript's task runner GULP for development. Utilizing a pre-designed mockup, we meticulously recreated the Vulcan website, ensuring attention to detail at every step. The result is a faithful reproduction where it's challenging to distinguish between the original and the replica, with the added feature of being fully responsive.",
    "url": null,
    "published_date": null,
    "image_sm": "vulcan-sm.png",
    "image_lg": "vulcan-lg.png",
    "thumb": null,
    "category_id": 2,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": [{"id": 3, "name": "SCSS", "slug": "scss"},
            {"id": 10, "name":"Responsive", "slug": "responsive"},
            {"id": 11, "name":"HTML", "slug": "html"},
            {"id": 18, "name": "Bootstrap", "slug": "bootstrap"},
            {"id": 19, "name": "jQuery", "slug": "jquery"}        
    ],
    "learning_outcomes": [
      "Expert attention to detail",
      "Utilizing GULP for development",
    ]

  },
  {
    "id": 5,
    "title": "Express-Invoices",
    "slug": "express-invoices",
    "github": "https://github.com/sydsnow/Final-Node",
    "excerpt": "This invoice management app created with Node.js has authentication, authorization, and full CRUD functionality.",
    "body": "The Express Invoices app provides registered users with features to manage their profile and access their invoices. Managers enjoy additional privileges such as user management, including deletion, and handling invoices. Admins possess full managerial control, plus the authority to perform CRUD operations on users and products. Built on Node.js, this app leverages MongoDB to store data and employs routes for seamless navigation across EJS views. It boasts a structured organization, employing services, layouts, partials, models, and controllers for enhanced clarity and efficiency.",
    "url": null,
    "published_date": null,
    "image_sm": "express-invoices-sm.png",
    "image_lg": "express-invoices-lg.png",
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category":   { "id": 1, "slug": "back-end", "name": "Back End" },
    "tags": [
      {"id": 5, "name": "Node.js", "slug": "node-js"},
      {"id": 2, "name": "CSS", "slug": "css"},
      {"id": 20, "name": "MongoDB", "slug": "mongodb"}
    ],
    "learning_outcomes": [
      "MongoDB for information storage",
      "Full CRUD operations using Node.js",
      "The first app with code split up into organized files"
    ]

  },
  {
    "id": 6,
    "title": "TODO List",
    "slug": "todo-list",
    "github": "https://github.com/sydsnow/4300-FinalProject",
    "excerpt": "A full stack TODO list app using a react front end, lambda functions, a PostgreSQL database, authorization, and image upload to an S3 bucket.",
    "body": "Though at a quick glance it may seem like a simple app, this project has a lot going on behind the scenes. This TODO list app uses a React front end, a PostgreSQL database for information storage, lambda functions for backend functionality, Kinde for authorization, and image upload to an S3 bucket on AWS. This app will be also be hosted using a custom domain.",
    "url": null,
    "published_date": null,
    "image_sm": "coming-soon.png",
    "image_lg": "coming-soon-lg.png",
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category":     { "id": 3, "slug": "full-stack", "name": "Full Stack" },
    "tags": [
      {"id": 12, "name": "Typescript", "slug": "typescript"},
      {"id": 4, "name": "React", "slug": "react"},
      {"id": 8, "name":"AWS", "slug": "aws"},
      {"id": 21, "name": "PostgreSQL", "slug": "postgresql"}
    ],
    "learning_outcomes": [
      "Utilizing a PostgreSQL database to hold information",
      "Using Kinde, a third party provider for authorization",
      "First app to be fully full-stack",
      "Code organization and reusability with lambda functions",
      "Uploading images to an S3 bucket",
      "Deploying to a custom domain"
    ]

  }
  // {
  //   "id": 6,
  //   "title": "GuessQuest",
  //   "slug": "guessquest",
  //   "github": "https://github.com/sydsnow/Major-Game",
  //   "excerpt": "Embark on a high-low guessing game, built using Javascript, HTML and CSS",
  //   "body": "Welcome to GuessQuest! Your goal: discover the secret number in your chosen difficulty level. Receive feedback, refine your guesses, and earn points - 5 for less than 10 turns, 3 for less than 20 turns, and 1 for more than 20 turns. Keep playing until you crack the code. Best of luck!",
  //   "url": null,
  //   "published_date": null,
  //   "image": "guessquest-sm.png",
  //   "thumb": null,
  //   "category_id": 3,
  //   "created_at": "2023-02-23T22:31:23.000000Z",
  //   "updated_at": "2023-02-23T22:31:23.000000Z",
  //   "category":   { "id": 2, "slug": "front-end", "name": "Front End" },
  //   "tags": [
  //     {"id": 1, "name": "Javascript", "slug": "javascript"},
  //     {"id": 2, "name": "CSS", "slug": "css"},
  //     {"id": 11, "name":"HTML", "slug": "html"},
  //     {"id": 18, "name": "Bootstrap", "slug": "bootstrap"},
  //     {"id": 19, "name": "jQuery", "slug": "jquery"},  
  //   ],
  //   "learning-outcomes": []

  // }
]