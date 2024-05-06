/*--------------------------------------------------------------
# General DATA
--------------------------------------------------------------*/
// project data in JSON format
var projectData = [
  {
      "title": "Manage Your School - (MYS)",
      "link": "#",
      "category": ["web","Web Development"],
      "tech": "HTML, CSS, JS, and Laravel",
      "description": "Introducing our latest innovation: a comprehensive School Management System designed to revolutionize the education sector! With seamless online admission capabilities and interactive panels for parents and students, administrative tasks are simplified, admissions are streamlined, and communication between school stakeholders is greatly enhanced. Embrace efficiency and bid farewell to paperwork with our cutting-edge solution!",
      "image": "assets/img/portfolio/mys-home.png",
      "slider": [
        "assets/img/portfolio/mys-home.png",
        "assets/img/portfolio/mys-about.png",
        "assets/img/portfolio/mys-contact.png",
          "assets/img/portfolio/mys-school-registration.png",
          "assets/img/portfolio/mys-school-home.png",
          "assets/img/portfolio/mys-school-adminission.png",
        "assets/img/portfolio/mys-profile-update.png",
          "assets/img/portfolio/mys-school-fees-type.png",
          "assets/img/portfolio/mys-school-student.png",
          "assets/img/portfolio/mys-school-edit-webhome.png",
          "assets/img/portfolio/mys-school-admission-list.png",
      ]
  },
  {
      "title": "HRMS (HR Management System)",
      "link": "#",
      "category": ["software","Software Development"],
      "tech": "HTML, CSS, JS, Laravel, and PHP",
      "description": "The HR Management System is an internal web application developed in Laravel, PHP, HTML, CSS, and JavaScript. It offers comprehensive functionality including employee management, attendance tracking, leave management, payroll processing, support ticket system, and more. Designed to streamline HR processes, it provides a centralized platform for efficient management of HR-related tasks and data within the organization.",
      "image": "assets/img/portfolio/hrms-admin-page.png",
      "slider": [
          "assets/img/portfolio/hrms-admin-page.png",
          "assets/img/portfolio/hrms-employee.png",
          "assets/img/portfolio/hrms-checkin.png",
          "assets/img/portfolio/hrms-menu.png",
          "assets/img/portfolio/hrms-login.png",
          "assets/img/portfolio/hrms-report.png"
      ]
  },
  {
      "title": "Atlantis",
      "link": "https://stage446.yourdesigndemo.net/",
      "category": ["web","Web Development"],
      "tech": "HTML, CSS, JS, Laravel, and PHP",
      "description": "Atlantis is interconnected with an administrative interface, allowing administrators to seamlessly add and oversee plans and orders. Currently in the developmental phase, the site's primary objective is to facilitate the creation and management of spa covers.",
      "image": "assets/img/portfolio/atlantis-home.png",
      "slider": [
          "assets/img/portfolio/atlantis-home.png",
          "assets/img/portfolio/atlantis-shape.png",
          "assets/img/portfolio/atlantis-form1.png",
          "assets/img/portfolio/atlantis-form1.png",
          "assets/img/portfolio/atlantis-admin.png",
          "assets/img/portfolio/atlantis-form2.png"
      ]
  },
  {
      "title": "Brewery Recording Studio",
      // "link": "https://breweryrecording.com/",
      "link": "https://stage449.yourdesigndemo.net/",
      "category": ["web","Web Development"],
      "tech": "React ,HTML, CSS, JS, and Laravel",
      "description": "Brewery Recording Studio is a technology-driven portfolio website built using React, HTML, CSS, and JavaScript (JS) on the frontend, with Laravel powering the backend. It features a user-friendly interface showcasing the studio's services, equipment, projects, and client testimonials. The website integrates seamlessly with Laravel's API for booking recording sessions directly through the site. An admin panel enables easy management of bookings, content updates, and analytics. With responsive design and interactive elements, Brewery Recording Studio offers a dynamic and engaging experience for both clients and administrators.",
      "image": "assets/img/portfolio/brewery-home.png",
      "slider": [
          "assets/img/portfolio/brewery-home.png",
          "assets/img/portfolio/brewery-admin.png",
          "assets/img/portfolio/brewery-studio.png",
          "assets/img/portfolio/brewery-serice.png",
          "assets/img/portfolio/brewery-staff.png",
          "assets/img/portfolio/brewery-booking.png",
      ]
  },
  {
      "title": "WTSF",
      "link": "https://wtjsf.org/login",
      "category": ["web","Web Development"],
      "tech": "Wordpress, HTML, CSS, JS, and Codeigniter",
      "description": "WTSF (We The Strong Foundation) is a US Federal proof non-profit Organization with a WordPress frontend and CodeIgniter backend. Users can register on the site to access CodeIgniter-powered features, including event ticketing. An administrator panel allows for user management, event creation, and content updates. The site integrates HTML, CSS, and JS for a seamless and interactive user experience. Additionally, payment integration with PayPal facilitates secure and convenient transactions for event tickets.",
      "image": "assets/img/portfolio/wtjsf-login.png",
      "slider": [
        "assets/img/portfolio/wtjsf-home-word.png",
        "assets/img/portfolio/w.png",
        "assets/img/portfolio/wtjsf-login.png",
          "assets/img/portfolio/wtjsf-admin-page.png",
          "assets/img/portfolio/wtjsf-admin-event.png",
          "assets/img/portfolio/wtjsf-event1.png",
          "assets/img/portfolio/wtjsf-event2.png",
          "assets/img/portfolio/wtjsf-event3.png",
          "assets/img/portfolio/wtjsf-contact.png",
      ]
  },
  {
      "title": "NP Car rentals llc",
      "link": "#",
      "category": ["web","Web Development"],
      "tech": "React, HTML, CSS, JS, and Laravel",
      "description": "NP Car Rentals LLC is a premier Dubai-based car rental service offering seamless vehicle rentals through a sophisticated tech stack comprising React and Laravel. With an integrated payment method powered by Stripe, customers can effortlessly book their desired vehicles online, ensuring a hassle-free rental experience. Whether it's for business or leisure, NP Car Rentals LLC provides top-notch service, reliability, and convenience, making it the preferred choice for individuals and businesses seeking quality transportation solutions in Dubai.",
      "image": "assets/img/portfolio/rental_car-home.png",
      "slider": [
          "assets/img/portfolio/rental_car-home.png",
          "assets/img/portfolio/rental_car-filter.png",
          "assets/img/portfolio/rental_car-detail.png",
          "assets/img/portfolio/rental_car-detail2.png",
          "assets/img/portfolio/rental_car-checkout.png",
          "assets/img/portfolio/rental_car-payment.png",
          "assets/img/portfolio/rental_car-admin.png",
          "assets/img/portfolio/rental_car-admin-user.png",
          "assets/img/portfolio/rental_car-admin-payment.png",
      ]
  },
  {
      "title": "Frimix",
      "link": "https://frimix.com/",
      "category": ["web","Web Development"],
      "tech": "HTML, CSS, JS, Laravel, and PHP",
      "description": "Frimix is an event booking platform designed to streamline the ticket purchasing process by enabling users to conveniently acquire tickets online. With Frimix, users can seamlessly obtain their tickets without the need for physical copies, as each ticket is associated with a unique digital ticket number. Additionally, Frimix provides an intuitive admin panel that allows administrators to add new tickets, configure ticket details, and efficiently manage ticket orders. Through the admin panel, administrators have full control over ticket settings and can easily oversee and process ticket orders.",
      "image": "assets/img/portfolio/frimix-with-login.png",
      "slider": [
          "assets/img/portfolio/frimix-home-page.png",
          "assets/img/portfolio/frimix-contact.png",
          "assets/img/portfolio/frimix-with-login.png",
          "assets/img/portfolio/frimix-youtube-and-about.png",
          "assets/img/portfolio/frimix-upcomming.png"
      ]
  },
  {
      "title": "Christan Creations Unlimited",
      "link": "https://stage266.yourdesigndemo.net/",
      "category": ["web","Web Development"],
      "tech": "HTML, CSS, JS, and Laravel",
      "description": "'Christian Creations Unlimited' is an e-commerce site offering Christian-themed jewelry. Using HTML, CSS, JavaScript, and Laravel, it delivers a seamless shopping experience. Laravel manages user roles (consultant, member, administrator) and backend tasks like authentication and order processing. Stripe integration ensures secure payments.",
      "image": "assets/img/portfolio/christan-ecom-home.png",
      "slider": [
          "assets/img/portfolio/ch.png",
          "assets/img/portfolio/christan-ecom-home.png",
          "assets/img/portfolio/christan-ecom-product-page.png",
          "assets/img/portfolio/christan-ecom-feature.png",
          "assets/img/portfolio/christan-admin-product.png",
          "assets/img/portfolio/christan-login.png",
          "assets/img/portfolio/christan-ecom-kits.png",
      ]
  },
  {
      "title": "MapBirdy",
      "link": "https://mapbirdy.com/",
      "category": ["web","Web Development"],
      "tech": "HTML, CSS, JS, Laravel, and Google Map API",
      "description": "MapBirdy is a dynamic web platform designed for community engagement and collaboration on local issues. Built with Laravel, PHP, JavaScript, HTML, and CSS, it offers an intuitive interface for voting, discussions, and interactive commenting. Administrators can create polls and questions, while users can vote and share opinions on neighborhood topics. With seamless Google Maps API integration, accurate location-based interactions are ensured. MapBirdy empowers users to drive positive change by making their voices heard on community priorities and proposed developments.",
      "image": "assets/img/portfolio/mapbirdy-login.png",
      "slider": [
          "assets/img/portfolio/mapbirdy-user-dashboard.png",
          "assets/img/portfolio/mapbirdy-vote-comment.png",
          "assets/img/portfolio/mapbirdy-search.png",
          "assets/img/portfolio/mapbirdy-map-maker.png",
          "assets/img/portfolio/mapbirdy-login.png"
      ]
  },
  {
      "title": "Dukan24h",
      "link": "https://dukan24h.com/",
      "category": ["web","Web Development"],
      "tech": "HTML, CSS, JS, Laravel, and PHP",
      "description": "Dukan24h is an encompassing e-commerce platform with an integrated shop management system. Catering to a diverse user base, it serves three primary roles: consumers, legal entities, and internal staff. Consumers appreciate its user-friendly interface, while legal entities benefit from its compliance features. The platform also offers robust internal functionalities such as point-of-sale systems and comprehensive reporting tools for sales, purchases, and profit/loss analysis.",
      "image": "assets/img/portfolio/dukan24h-home.png",
      "slider": [
          "assets/img/portfolio/dukan24h-home.png",
          "assets/img/portfolio/dukan24h-contact.png",
          "assets/img/portfolio/dukan24h-faq.png",
          "assets/img/portfolio/dukan24h-search-page.png",
          "assets/img/portfolio/dukan24h-search.png",
          "assets/img/portfolio/dukan24h-shop-page.png",
          "assets/img/portfolio/dukan24h-shop-register.png"
      ]
  },
  {
      "title": "Chatbot",
      "link": "#",
      "category": ["software","Software Development"],
      "tech": "HTML, CSS, JS, and PHP",
      "description": "This chatbot is seamlessly integrated with the WhatsApp API, enabling users to interact with it directly through WhatsApp. It boasts a robust question-and-answer system with multiple layers of inquiries, allowing for a dynamic conversational experience. Additionally, users can initiate conversations by searching for keywords within questions. If users prefer to speak with a human agent instead, they can simply request assistance by typing (#), prompting the system to connect them with an available agent via the agent portal. Once an agent accepts the chat request, they can engage in a conversation with the user, addressing their queries and concerns before closing the session. This integrated system ensures efficient and effective communication between users and agents, enhancing overall customer experience.",
      "image": "assets/img/portfolio/chatbot-login.png",
      "slider": [
          "assets/img/portfolio/chatbot-login.png",
          "assets/img/portfolio/chatbot.png",
          "assets/img/portfolio/chatbot-question_add.png",
          "assets/img/portfolio/chatbot-question_word.png",
          "assets/img/portfolio/chatbot-report.png"
      ]
  },
  {
      "title": "Towel Management System",
      "link": "#",
      "category": ["software","Software Development"],
      "tech": "HTML, CSS, JS, and PHP",
      "description": "The Towel Management System is custom software designed for textile mills to efficiently manage various aspects of yarn processing and inventory management. It facilitates tracking of empty and loaded beams, yarn inward and outward movements, cone rewinding, and generates comprehensive reports on purchases, deliveries, and production activities. With user-friendly interfaces, robust security measures, and potential for integration with other systems, it streamlines operations and enhances productivity in textile manufacturing processes.",
      "image": "assets/img/portfolio/towel-dashboard.png",
      "slider": [
        "assets/img/portfolio/towel-dashboard.png",
        "assets/img/portfolio/towel-login.png",
        "assets/img/portfolio/towel-po.png",
        "assets/img/portfolio/towel-report.png",
        "assets/img/portfolio/towel-rewind.png",
        "assets/img/portfolio/towel-wastage.png"
      ]
  },
  // ,
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
      quote: "Anas is skilled, responsive, and works efficiently. He gives it his all in the project and is quite accommodating.",
      image: "assets/img/testimonials/avatar.jpg",
      name: "Vinnie Pelia",
      position: "Founder - MapBirdy"
    },
    {
      quote: "Anas is amazing. He was really patient and professional to get me through the whole process. Highly recommended.",
      image: "https://media.licdn.com/dms/image/D5635AQEOqpoQjCmioA/profile-framedphoto-shrink_200_200/0/1696409840941?e=1711998000&v=beta&t=4O9pNkRIQrWz4FP31jZQbSjbKVpty01Ekfg9t4FOmTQ",
      name: "Tahir Qureshi",
      position: "Founder - softwebpk.com"
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
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.onkeydown = function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        return false;
    }
};
document.onmousedown = function (e) {
    e.preventDefault();
};
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
        <li><strong>Project URL</strong>: <a href="${projectData[idVal].link}"  target="_blank" rel="noopener noreferrer"  >${projectData[idVal].link}</a></li>
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

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

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
    function appendSkills(skillsData) {
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
