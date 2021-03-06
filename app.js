import fixNav from './utils/fixNav.js';
import darkMode from './utils/darkMode.js';
import dispayYear from './utils/displayYear.js';

const projectsSection = document.querySelector('.projects');

window.addEventListener('DOMContentLoaded', function () {
  const fetchProjects = async () => {
    try {
      const resp = await fetch(
        'https://my-portfolio-blog-website.netlify.app/api/myProjects'
      );
      const data = await resp.json();
      const dataOrdered = data.sort((a, b) => b.projectID - a.projectID)
      const projects = dataOrdered
        .map(function (project) {
          return ` 
        <article data-id"${project.id}" class="single-project id">
          <div class="project-info">
          <div class="img-container">
            <img class="project-img img" src="${project.url}" alt="${project.name}" />
            </div>
            <div class="project-description">
              <h4 class="">${project.version}</h4>
              <h2 class="project-name">${project.name}</h2>
              <p class="project-desc">
                ${project.shortDsc}
              </p>
              </div>
            </div>
          </div>
          <div class="project-links">
            <a href="${project.gitUrl}" target="_blank"
              ><i class="fab fa-github"></i></a>
          
              <a class=" btn project-btn" href="${project.pageUrl}" target="_blank">visit</a>
            
          </div>
        </article>
       `;
        })
        .join('');
      projectsSection.innerHTML = projects;
    } catch (error) {
      console.log(error);
      projectsSection.innerHTML = '<h4>There was an error</h4>';
    }
  };
  fetchProjects();
});

// CONTACT
const contactBtn = document.getElementById('contact');
const contact = document.querySelector('.contact');
contactBtn.addEventListener('click', function () {
  contact.classList.add('show-contact');
});

// SIDEBAR
const aboutBtn = document.getElementById('about');
const sidebar = document.querySelector('.sidebar-container');

const sideBar = aboutBtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});

// CLOSE BTN
const closeBtn = document.querySelectorAll('.close-btn');
const closeButtom = closeBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
    contact.classList.remove('show-contact');
  });
});
