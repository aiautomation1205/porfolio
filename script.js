/* =========================
   PROJECT DATA
========================== */

const projects = [

  {
    title: "RAG-Based AI Chatbot",
    type: "AI / BACKEND",
    description:
      "A chatbot that answers questions from personal or enterprise documents using retrieval-augmented generation.",

    tech: [
      "Python",
      "LLM",
      "RAG",
      "Embeddings",
      "Vector Database",
      "REST API"
    ],

    built: [
      "Ingests multi-format enterprise documents",
      "Creates and stores high-dimensional embeddings",
      "Retrieves relevant document information",
      "Generates contextual responses using LLM APIs"
    ],

    flow: [
      "Documents",
      "Embeddings",
      "Vector Database",
      "Retrieval",
      "LLM API",
      "Answer"
    ]
  },


  {
    title: "MCP Inventory Checker",
    type: "AI / TOOL",
    description:
      "A Model Context Protocol tool that allows AI assistants to query inventory information and return structured results.",

    tech: [
      "Python",
      "MCP",
      "REST APIs",
      "JSON"
    ],

    built: [
      "Queries backend inventory data",
      "Searches products",
      "Validates stock availability",
      "Returns structured inventory responses"
    ],

    flow: [
      "AI Assistant",
      "MCP Tool",
      "REST API",
      "Database",
      "Structured JSON"
    ]
  },


  {
    title: "Webhook Automation System",
    type: "AUTOMATION",
    description:
      "An event-driven system that receives HTTP events, validates payloads and triggers downstream workflows.",

    tech: [
      "Python",
      "REST API",
      "Webhooks",
      "JSON",
      "Postman"
    ],

    built: [
      "Receives external HTTP events",
      "Validates incoming JSON payloads",
      "Runs custom business logic",
      "Triggers downstream services"
    ],

    flow: [
      "External Event",
      "Webhook Handler",
      "Payload Validation",
      "Business Logic",
      "Downstream Services"
    ]
  },


  {
    title: "Food Delivery Website",
    type: "FRONTEND / FULL STACK",
    description:
      "A Zomato-style full-stack application prototype with restaurant browsing, menus, authentication and cart functionality.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],

    built: [
      "User authentication",
      "Interactive restaurant menus",
      "Dynamic cart state",
      "MongoDB integration",
      "Responsive UI components"
    ],

    flow: [
      "React UI",
      "Express API",
      "Node.js",
      "MongoDB"
    ]
  },


  {
    title: "Travel Discovery Application",
    type: "FRONTEND",
    description:
      "A destination discovery application focused on filtering, recommendations and interactive maps.",

    tech: [
      "React",
      "Bootstrap",
      "MongoDB"
    ],

    built: [
      "Location filtering",
      "Categorized recommendations",
      "Interactive maps",
      "Modular React components",
      "Responsive layouts"
    ],

    flow: [
      "React Components",
      "Filtering",
      "Maps",
      "MongoDB"
    ]
  },


  {
    title: "Weather Application",
    type: "FRONTEND",
    description:
      "A lightweight frontend application that displays real-time weather information and forecasts.",

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "OpenWeather API"
    ],

    built: [
      "Fetches real-time weather data",
      "Displays forecasts",
      "Dynamic weather icons",
      "Localized metrics",
      "Mobile-first interface"
    ],

    flow: [
      "Browser UI",
      "JavaScript",
      "OpenWeather API",
      "Rendered Forecast"
    ]
  }

];


/* =========================
   ESCAPE HTML
========================== */

function escapeHTML(value) {

  return String(value).replace(
    /[&<>"']/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]
  );

}


/* =========================
   PROJECT LIST
========================== */

const projectList =
  document.getElementById("project-list");


projectList.innerHTML = projects
  .map((project, index) => {

    return `
      <article class="project-item">

        <div class="project-number">
          ${String(index + 1).padStart(2, "0")}
        </div>

        <div>

          <div class="project-type">
            ${escapeHTML(project.type)}
          </div>

          <h3 class="project-title">
            ${escapeHTML(project.title)}
          </h3>

          <p class="project-description">
            ${escapeHTML(project.description)}
          </p>

          <div class="project-tech">
            ${project.tech
              .map(escapeHTML)
              .join(" · ")}
          </div>

        </div>

        <button
          class="project-view"
          type="button"
          data-project="${index}"
        >
          View ↗
        </button>

      </article>
    `;

  })
  .join("");


/* =========================
   PROJECT MODAL
========================== */

const dialog =
  document.getElementById("project-dialog");

const dialogContent =
  document.getElementById("dialog-content");

const dialogClose =
  document.getElementById("dialog-close");


projectList.addEventListener("click", event => {

  const button =
    event.target.closest("[data-project]");

  if (!button) return;

  const project =
    projects[button.dataset.project];


  dialogContent.innerHTML = `

    <div class="dialog-label">
      ${escapeHTML(project.type)}
    </div>

    <h2 class="dialog-title">
      ${escapeHTML(project.title)}
    </h2>


    <div class="dialog-section">

      <h4>Overview</h4>

      <p>
        ${escapeHTML(project.description)}
      </p>

    </div>


    <div class="dialog-section">

      <h4>What it does</h4>

      <ul>

        ${project.built
          .map(item => `
            <li>${escapeHTML(item)}</li>
          `)
          .join("")}

      </ul>

    </div>


    <div class="dialog-section">

      <h4>Technology</h4>

      <p>
        ${project.tech
          .map(escapeHTML)
          .join(" · ")}
      </p>

    </div>


    <div class="dialog-section">

      <h4>Architecture</h4>

      <p>
        ${project.flow
          .map(escapeHTML)
          .join(" → ")}
      </p>

    </div>

  `;


  dialog.showModal();

});


/* =========================
   CLOSE DIALOG
========================== */

dialogClose.addEventListener(
  "click",
  () => dialog.close()
);


dialog.addEventListener("click", event => {

  if (event.target === dialog) {
    dialog.close();
  }

});


/* =========================
   REVEAL ANIMATION
========================== */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.08
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================
   ESC KEY
========================== */

document.addEventListener("keydown", event => {

  if (
    event.key === "Escape" &&
    dialog.open
  ) {
    dialog.close();
  }

});