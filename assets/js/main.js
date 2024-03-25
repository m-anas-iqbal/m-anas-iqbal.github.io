/*--------------------------------------------------------------
# General DATA
--------------------------------------------------------------*/
// project data in JSON format
var projectData = [
  {
      "title": "MapBirdy",
      "link": "https://mapbirdy.com/",
      "category": ["web","Web Development"],
      "tech": "HTML, CSS, JS, Laravel, and Google Map API",
      "description": "MapBirdy is a dynamic web platform designed to empower communities by facilitating engagement and collaboration on local issues. Utilizing Google Maps API and developed with Laravel, PHP, JavaScript, HTML, and CSS, MapBirdy provides an intuitive interface for users to participate in voting and discussions related to their areas of interest. With MapBirdy, administrators can easily create polls and questions, enabling users to vote and share their opinions on various topics affecting their neighborhoods. Additionally, the platform allows for interactive commenting, fostering dialogue and community involvement. MapBirdy's seamless integration of Google Maps API ensures accurate location-based interactions, while its robust backend developed with Laravel and PHP ensures scalability, security, and performance. Whether it's gathering feedback on proposed developments, identifying community priorities, or simply facilitating neighborhood conversations, MapBirdy empowers users to make their voices heard and drive positive change in their communities.",
      "image": "assets/img/portfolio/mapbirdy-user-dashboard.png",
      "slider": [
          "assets/img/portfolio/mapbirdy-user-dashboard.png",
          "assets/img/portfolio/mapbirdy-vote-comment.png",
          "assets/img/portfolio/mapbirdy-search.png",
          "assets/img/portfolio/mapbirdy-map-maker.png",
          "assets/img/portfolio/mapbirdy-login.png"
      ]
  },
  {
      "title": "Atlantis",
      "link": "https://stage446.yourdesigndemo.net/",
      "category": ["web","Web Development"],
      "tech": "HTML, CSS, JS, Laravel, and PHP",
      "description": "Project 1 Description",
      "image": "assets/img/portfolio/mapbirdy-user-dashboard.png",
      "slider": [
          "assets/img/portfolio/mapbirdy-user-dashboard.png",
          "assets/img/portfolio/mapbirdy-vote-comment.png",
          "assets/img/portfolio/mapbirdy-search.png",
          "assets/img/portfolio/mapbirdy-map-maker.png",
          "assets/img/portfolio/mapbirdy-login.png"
      ]
  },
  {
      "title": "Frimix",
      "link": "https://www.frimix.com/",
      "category": ["web","Web Development"],
      "tech": "HTML, CSS, JS, Laravel, and PHP",
      "description": "Project 1 Description",
      "image": "assets/img/portfolio/mapbirdy-user-dashboard.png",
      "slider": [
          "assets/img/portfolio/mapbirdy-user-dashboard.png",
          "assets/img/portfolio/mapbirdy-vote-comment.png",
          "assets/img/portfolio/mapbirdy-search.png",
          "assets/img/portfolio/mapbirdy-map-maker.png",
          "assets/img/portfolio/mapbirdy-login.png"
      ]
  },
  {
      "title": "Frimix",
      "link": "https://signup.gowushu.com/login",
      "category": ["web","Web Development"],
      "tech": "HTML, CSS, JS, Laravel, and PHP",
      "description": "this is in created with https://gowushu.com/",
      "image": "assets/img/portfolio/mapbirdy-user-dashboard.png",
      "slider": [
          "assets/img/portfolio/mapbirdy-user-dashboard.png",
          "assets/img/portfolio/mapbirdy-vote-comment.png",
          "assets/img/portfolio/mapbirdy-search.png",
          "assets/img/portfolio/mapbirdy-map-maker.png",
          "assets/img/portfolio/mapbirdy-login.png"
      ]
  }
];




  // Testimonials data in JSON format
  const testimonialsData = [
    {
      quote: "His services command a premium price, yet the impeccable quality of his work, expert guidance, and glowing recommendations speak volumes about his worth.",
      image: "assets/img/testimonials/avatar.jpg",
      name: "Abdul Malik",
      position: "Manager - Orient Metal"
    },
    {
      quote: "Anas is skilled, responsive, and works efficiently. He gives it his all in the project and is quite accommodating. Highly recommend.",
      image: "assets/img/testimonials/avatar.jpg",
      name: "Vinnie Baliyan",
      position: "CEO - MapBirdy"
    },
    {
      quote: "Anas is amazing. He was really patient and professional to get me through the whole process. Highly recommended.",
      image: "https://media.licdn.com/dms/image/D5635AQEOqpoQjCmioA/profile-framedphoto-shrink_200_200/0/1696409840941?e=1711998000&v=beta&t=4O9pNkRIQrWz4FP31jZQbSjbKVpty01Ekfg9t4FOmTQ",
      name: "Tahir Qureshi",
      position: "CEO - softwebpk.com"
    },
    {
      quote: "It was a pleasure working with Anas Iqbal. I had a short deadline and platform limitations that prevented me from finalising content management on the website the way I wanted. He was incredibly dedicated to fix this and tweak it to be exactly how I imagined it on desktop as well as mobile devices. I could not recommend him enough and I will 100% continue working with him. Whoever is looking at this feedback should too.",
      image: "https://media.licdn.com/dms/image/D4D03AQFkVm81vRvWLQ/profile-displayphoto-shrink_100_100/0/1697538142011?e=1714608000&v=beta&t=b07bKX8-oLbRIkRIFjvOaol_fpLd-VFEhokDF5iq2ck",
      name: "Saba Yasmeen",
      position: "Software Engineer"
    },
    {
      quote: "Anas did a good job. Communication was excellent as this is always a key for any project to succeed. Looking forward to working with him again.",
      image: "assets/img/testimonials/faisal.jpg",
      name: "Faisal",
      position: "Unknown"
    }
  ];
  



  var skillsData = [
    { "skill": "HTML", "percentage": "100%" },
    { "skill": "PHP", "percentage": "90%" },
    { "skill": "Laravel", "percentage": "90%" },
    { "skill": "JavaScript", "percentage": "90%" },
    { "skill": "CSS", "percentage": "70%" },
    { "skill": "React JS & Vue JS", "percentage": "60%" },
    { "skill": "WordPress/CMS", "percentage": "60%" },
    { "skill": "React Native", "percentage": "50%" },
    { "skill": "Django", "percentage": "50%" },
    { "skill": "ASP.net", "percentage": "40%" },
    { "skill": "Python", "percentage": "40%" },
    { "skill": "Java", "percentage": "40%" },
    { "skill": "Swift", "percentage": "30%" },
    { "skill": "Express JS", "percentage": "30%" }
  ];

  function populatePortfolioDetails(projectData) {
    // Get project ID from URL
    var url = window.location.href;
    var url = new URL(url);
    var idVal = url.searchParams.get("project");
    idVal = idVal;
  
    // Set portfolio title
    document.querySelector('h2.portfolio-title').innerHTML = `${projectData[idVal].title}`;
  
    // Populate swiper slides
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    projectData[idVal].slider.forEach(image => {
      swiperWrapper.innerHTML += `
        <div class="swiper-slide">
          <img src="${image}" alt="Slider Image" class="img-fluid">
        </div>
      `;
    });
  
    // Populate project information
    document.querySelector('.portfolio-info').innerHTML = `
      <h3>Project information</h3>
      <ul>
        <li><strong>Category</strong>: ${projectData[idVal].category[1]}</li>
        <li><strong>Languages</strong>: ${projectData[idVal].tech}</li>
        <li><strong>Project URL</strong>: <a href="${projectData[idVal].link}" target="_blank">${projectData[idVal].link}</a></li>
      </ul>
      <p>${projectData[idVal].description}</p>
    `;
  
    // Initialize Swiper
    new Swiper('.portfolio-details-slider', {
      speed: 700,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }
  
  
  



/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/

// (function() {
//   "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }



  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
 
    // Function to dynamically append skills
    function appendSkills() {
      var skillsContent = document.getElementById('skills-content');
  
      skillsData.forEach(function(skill) {
        var skillHTML = `
          <div class="col-lg-6">
            <div class="progress">
              <span class="skill">${skill.skill} <i class="val">${skill.percentage}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style="width: ${skill.percentage}" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        `;
        skillsContent.innerHTML += skillHTML;
      });
      let skilsContent = select('.skills-content');
      if (skilsContent) {
        new Waypoint({
          element: skilsContent,
          offset: '80%',
          handler: function(direction) {
            let progress = select('.progress .progress-bar', true);
            progress.forEach((el) => {
              el.style.width = el.getAttribute('aria-valuenow') + '%'
            });
          }
        })
      }
    }
  /**
   * Testimonials slider
   */

// Function to append testimonials dynamically
function appendTestimonials(testimonials) {
  const testimonialsSlider = document.querySelector('.testimonials-slider .swiper-wrapper');

  testimonials.forEach(testimonial => {
    testimonialsSlider.innerHTML += `
      <div class="swiper-slide">
        <div class="testimonial-item">
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            ${testimonial.quote}
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src="${testimonial.image}" class="testimonial-img" alt="${testimonial.name}">
          <h3>${testimonial.name}</h3>
          <h4>${testimonial.position}</h4>
        </div>
      </div><!-- End testimonial item -->
    `;
  });
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

}


// function populatePortfolioItems(projectData) {
//   const portfoliosList = document.querySelector(".portfolios-list");
  
//   // Clear previous content
//   portfoliosList.innerHTML = '';

//   // Loop through projectData
//   projectData.forEach((project, index) => {
//     // Create portfolio item HTML
//     const portfolioItemHTML = `
//       <div class="col-lg-4 col-md-6 portfolio-item filter-${project.category[0]}">
//         <div class="portfolio-wrap">
//           <img src="${project.image}" class="img-fluid" alt="${project.title}">
//           <div class="portfolio-info">
//             <a href="detail.html?project=${index}" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Project Details">
//               <h4>${project.title}</h4>
//             </a>
//             <p>${project.category[1]}</p>
//           </div>
//         </div>
//       </div>
//     `;
    
//     // Append portfolio item HTML to portfoliosList
//     portfoliosList.innerHTML += portfolioItemHTML;
//   });
// }

// // Call the function passing projectData
// populatePortfolioItems(projectData);
//   /**
//    * Porfolio isotope and filter
//    */
//   window.addEventListener('load', () => {
//     let portfolioContainer = select('.portfolio-container');
//     if (portfolioContainer) {
//       let portfolioIsotope = new Isotope(portfolioContainer, {
//         itemSelector: '.portfolio-item',
//         layoutMode: 'fitRows'
//       });

//       let portfolioFilters = select('#portfolio-flters li', true);

//       on('click', '#portfolio-flters li', function(e) {
//         e.preventDefault();
//         portfolioFilters.forEach(function(el) {
//           el.classList.remove('filter-active');
//         });
//         this.classList.add('filter-active');

//         portfolioIsotope.arrange({
//           filter: this.getAttribute('data-filter')
//         });
//       }, true);
//     }

//   });
  function populatePortfolioItems(projectData) {
    const portfoliosList = document.querySelector(".portfolios-list");
    
    // Clear previous content
    portfoliosList.innerHTML = '';
  
    // Loop through projectData
    projectData.forEach((project, index) => {
      // Create portfolio item HTML
      const portfolioItemHTML = `
        <div class="col-lg-4 col-md-6 portfolio-item filter-${project.category[0]}">
          <div class="portfolio-wrap">
            <img src="${project.image}" class="img-fluid" alt="${project.title}">
            <div class="portfolio-info">
              <a href="detail.html?project=${index}" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Project Details">
                <h4>${project.title}</h4>
              </a>
              <p>${project.category[1]}</p>
            </div>
          </div>
        </div>
      `;
      
      // Append portfolio item HTML to portfoliosList
      portfoliosList.innerHTML += portfolioItemHTML;
    });
  
    // Initialize Isotope for portfolio filtering
    window.addEventListener('load', () => {
      let portfolioContainer = document.querySelector('.portfolio-container');
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
        });
  
        let portfolioFilters = document.querySelectorAll('#portfolio-flters li');
  
        portfolioFilters.forEach(filter => {
          filter.addEventListener('click', (e) => {
            e.preventDefault();
            portfolioFilters.forEach(el => el.classList.remove('filter-active'));
            filter.classList.add('filter-active');
            portfolioIsotope.arrange({
              filter: filter.getAttribute('data-filter')
            });
          });
        });
      }
    });
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
  
    /**
     * Initiate portfolio details lightbox 
     */
    const portfolioDetailsLightbox = GLightbox({
      selector: '.portfolio-details-lightbox',
      width: '90%',
      height: '90vh'
    });
  
    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
  }
  
  // Call the function passing projectData

  
  /**
   * Initiate portfolio lightbox 
   */


// })()
var typed = new Typed(".typing", {
  strings: ["Full Stack Developer","Backend Specialist","Software Engineer", "Website Developer", "Coder"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".heading-change", {
  strings: ["Full Stack Developer","Backend Specialist","Software Engineer", "Website Developer", "Coder"],
  typeSpeed: 120,
  backSpeed: 100,
  loop: true
});
