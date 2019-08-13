<template>
  <div class="main-wrapper">

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#about">
      <span class="d-block d-lg-none"></span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/avatar.jpg" alt="">
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#awards">Extra-curricular</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid p-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div class="w-100">
        <div class="subheading">HI, I'M</div>
        <h1 class="mb-5">{{ name }}
          <span class="text-primary">{{ surname }}</span>
        </h1>
        <p class="mt-1 mb-1">{{ aboutMeFirst }}</p>
        <p class="mt-1 mb-5">{{ aboutMeSecond }}</p>
        <div class="social-icons">
          <a href="https://web.facebook.com/gio.nexus">
            <i class="fa fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/gionellef">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/gionelle-tribiana-832302111/">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/gionellef">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div class="w-100">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" v-for="job in experience" :key="job.description">
            <div class="resume-content">
              <h3 class="mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <p>{{ job.description }}</p>
              <p>{{ job.description2 }}</p>
              <p>{{ job.description3 }}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>

        </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div class="w-100">
        <h2 class="mb-5">Education</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">University of the Philippines Manila</h3>
            <div class="subheading mb-3">Bachelor of Science in Computer Science</div>
            <div>Statistical Computing Track</div>
            <div>President - UP Society of Computer Scientists (2014-2015)</div>
            <p>GPA: 1.9</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">June 2011</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div class="resume-content">
            <h3 class="mb-0">Central Luzon State University Science High School</h3>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">June 2007 - April 2011</span>
          </div>
        </div>

      </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div class="w-100">
        <h2 class="mb-5">Skills</h2>

        <div class="subheading mb-3">Job Related Skills</div>
        <ul class="fa-ul mb-5">
          <li>
            <i class="fa-li fa fa-check"></i>
            adept at utilizing various frameworks used in the software development lifecycle (Development -> Release)</li>
          <li>
            <i class="fa-li fa fa-check"></i>
            data visualization in dashboards and interpretation to identify errors in code or workflow</li>
          <li>
            <i class="fa-li fa fa-check"></i>
            strong algorithmic background applicable in many programming languages</li>
          <li>
            <i class="fa-li fa fa-check"></i>
            develop blockchain applications for enterprise using open source solutions</li>
          <li>
            <i class="fa-li fa fa-check"></i>
            work in Agile Development teams using Scrum or Kanban. Also a <a href="https://www.youracclaim.com/badges/4ce20e88-b8f6-4207-a39a-5b738543e00c/linked_in_profile">Certified SAFe® 4 Practitioner</a></li>
        </ul>

        <div class="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fa fa-html5"></i>
          </li>
          <li class="list-inline-item">
            <i class="fa fa-css3"></i>
          </li>
          <li class="list-inline-item">
             <i class="devicon-javascript-plain"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-cplusplus-plain"></i>
          </li>
          <li class="list-inline-item">
            <a href="https://github.com/gionellef/gravity-game"><i class="devicon-java-plain"></i></a>
          </li>
        </ul>
      </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div class="w-100">
        <h2 class="mb-5">Extra-curricular</h2>
        <ul class="fa-ul mb-0">
          <li class="mb-2">
            <i class="fa-li fa fa-certificate text-warning"></i>
            <a href="https://www.hackathon.io/bidchain">Amihan Global Strategies Blockchain Hackathon 2017</a></li>
          <li class="mb-2">
            <i class="fa-li fa fa-certificate text-warning"></i>
            DevCon Ruby on Rails Code Camp 2017</li>
          <li class="mb-2">
            <i class="fa-li fa fa-certificate text-warning"></i>
            <a href="https://github.com/Gablooblue/Poyd">UnionBank Hackathon - uHACK 2017</a></li>
          <li class="mb-2">
            <i class="fa-li fa fa-certificate text-warning"></i>
            Firefox OS Challenge for Students 2013</li>
          <li class="mb-2">
            <i class="fa-li fa fa-trophy text-warning"></i>
            Finalist - NetworkLabs CodeJam 2012 (Individual)</li>
          <li class="mb-2">
            <i class="fa-li fa fa-trophy text-warning"></i>
            11<sup>th</sup>
            Place - NetworkLabs Codejam 2013 (Team)</li>
          <li class="mb-2">
            <i class="fa-li fa fa-trophy text-warning"></i>
            6<sup>th</sup>
            Place - UP ACM Algolympics 2015</li>
          <li class="mb-2">
            <i class="fa-li fa fa-book text-warning"></i>
            <a href="https://medium.com/@gionelletribiana/notarizing-documents-in-the-blockchain-a-case-study-of-its-feasibility-in-the-philippine-legal-1d2ef334094e">Notarizing Documents in the Blockchain — a Case Study of its feasibility in the Philippine Legal System</a></li>
          <li class="mb-2">
            <i class="fa-li fa fa-book text-warning"></i>
            <a href="https://medium.com/@gionelletribiana/ninja-lizing-a-cmake-make-build-system-624e46b14698">Ninja-lizing a CMake/Make build system</a></li>
        </ul>
      </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      <div class="w-100">
        <h2 class="mb-5">Interests</h2>
        <p>When not hacking away or learning something new, I enjoy my free time teaching members and playing in concerts for the UP Manila Classical Ensemble. My indoor sport is table tennis, and my outdoor recreation is surfing.</p>
        <p class="mb-0">I also like testing my aptitude by taking law school entrance exams - getting accepted into UP College of Law and Ateneo Law School thrice so far. Thus, I spend the rest of my free time reading Law books and Supreme Court cases as I hope to become a lawyer/developer someday.</p>
      </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
      <div class="w-100">
        <h2 class="mb-5">Contact me</h2>
        <div class="subheading mb-5">{{ number }} ·
          <a href="mailto:gionellef@gmail.com">{{ email }}</a>
        </div>
      </div>
    </section>

  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Gionelle F. Tribiana',
      name: 'GIONELLE',
      surname: 'TRIBIANA',
      aboutMeFirst: 'DevOps. Development to continuous integration and deployment.',
      aboutMeSecond: 'Low level network programming. Enterprise blockchain.',
      experience: [
        {
          position: 'R&D Engineer',
          company: 'Nokia Manila Technology Center Philippines',
          description: 'Developed features based on specifications outlined by Verizon and 3gpp to push boundaries of mobile network connectivity with next generation 5G, while being a CodeGuard tasked with reviewing peer commits.',
          description2: 'Restructured the build system - compiling, testing, and packaging - of the project with expertise in CMake.',
          description3: 'Later assumed the role of CI Guardian responsible for ensuring regular and stable releases through supervision of Gerrit Source Code Management, Jenkins Automation Tool, and Zuul Pipeline Manager Tool.',
          startDate: 'January 2017',
          endDate: 'May 2019'
        },
        {
          position: 'Assistant General Manager',
          company: 'Lotus Credit and Loans Corporation',
          description: 'Responsible for planning, directing, and overseeing operations of the corporation and its people with regards to the approval, release, and collection of loans.',
          startDate: 'July 2015',
          endDate: 'December 2016'
        },
        {
          position: 'Salesforce Developer Intern',
          company: 'Cloud Sherpas, Inc.',
          description: 'Build Salesforce application functionalities with Visual force and Apex as delegated by a Salesforce Developer shadowed during the internship. Classroom learning sessions with post-exams on topics of Cloud in general, Salesforce in particular, and Agile (Scrum) as a framework.',
          startDate: 'April 2014',
          endDate: 'July 2014'
        }
      ],
      number: '(+63)977 833 0802',
      email: 'gionellef@gmail.com'
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  }
}
</script>

<style>
</style>
