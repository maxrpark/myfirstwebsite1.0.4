import projects from './utils/api.js';
import fixNav from './utils/fixNav.js';
import darkMode from './utils/darkMode.js';
import dispayYear from './utils/displayYear.js';

const projectsSection = document.querySelector('.projects');

window.addEventListener('DOMContentLoaded', function () {
  let displayProjects = projects.map(function (item) {
    return ` 
        <article class="single-project id">
          <div class="project-info">
          <div class="img-container">
            <img class="project-img img" src="${item.projectImg}" alt="${item.title}" />
            </div>
            <div class="project-description">
              <h4 class="">${item.title}</h4>
              <h2 class="project-name">${item.projectName}</h2>
              <p class="project-desc">
                ${item.desc}
              </p>
              </div>
            </div>
          </div>
          <div class="project-links">
            <a href="${item.gitHub}" target="_blank"
              ><i class="fab fa-github"></i></a>
          
              <a class=" btn project-btn" href="${item.site}" target="_blank">visit</a>
            
          </div>
        </article>
       `;
  });

  displayProjects = displayProjects.join('');
  projectsSection.innerHTML = displayProjects;
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
