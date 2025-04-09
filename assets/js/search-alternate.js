// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-project-tao-foundations",
        
          title: "Project Tao - Foundations",
        
        description: "A structured 6-month initiative to establish mastery of mathematical foundations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Project-Tao/";
          
        },
      },{id: "news-excited-to-announce-my-project-tao-a-6-month-journey-to-establish-mastery-of-mathematical-foundations",
          title: 'Excited to announce my Project Tao, a 6-month journey to establish mastery of...',
          description: "",
          section: "News",},{id: "projects-covers",
          title: 'Covers',
          description: "A collection of me playing some of my favorite songs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Covers/";
            },},{id: "projects-dongci-daci",
          title: 'DongCi DaCi',
          description: "An automatic lyric animation generation system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DongciDaci/";
            },},{id: "projects-originals",
          title: 'Originals',
          description: "A collection of my original songs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Originals/";
            },},{id: "projects-pdaugment",
          title: 'PDAugment',
          description: "A data augmentation method for End-to-End Automtic Lyric Transcription Systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PDAugment/";
            },},{id: "projects-performance",
          title: 'Performance',
          description: "A collection of the perfomances of my bands",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Performance/";
            },},{id: "projects-relyme",
          title: 'ReLyMe',
          description: "A method that incorporates music theory into data-driven music generation models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ReLyMe/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
