// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-art",
          title: "ART",
          description: "2D · 3D 비주얼 작업 모음",
          section: "Navigation",
          handler: () => {
            window.location.href = "/art/";
          },
        },{id: "nav-engine",
          title: "ENGINE",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/engine/index.html";
          },
        },{id: "nav-story-creating",
          title: "STORY-CREATING",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/story-creating/";
          },
        },{id: "nav-research",
          title: "RESEARCH",
          description: "전시/작품 역기획서 · 세계관 리서치",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Youngeun Lee — Narrative 3D Environment Artist",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "stories-제목",
          title: '「제목」',
          description: "",
          section: "Stories",handler: () => {
              window.location.href = "/story-creating/0001-poem/";
            },},{id: "stories-제목",
          title: '제목',
          description: "",
          section: "Stories",handler: () => {
              window.location.href = "/story-creating/0002-fiction/";
            },},{id: "stories-제목",
          title: '제목',
          description: "",
          section: "Stories",handler: () => {
              window.location.href = "/story-creating/0003-drama/";
            },},{id: "stories-제목",
          title: '제목',
          description: "",
          section: "Stories",handler: () => {
              window.location.href = "/story-creating/0004-essay/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:{"%6C%6F%67%6F"=>"%68%74%74%70%73://%69%6D%67.%69%63%6F%6E%73%38.%63%6F%6D/%69%6F%73-%66%69%6C%6C%65%64/%35%30/%6E%65%77-%70%6F%73%74.%70%6E%67", "%74%69%74%6C%65"=>"%65%6D%61%69%6C", "%75%72%6C"=>"%6C%6C%73%74%65%6C%6C%61%36%37%34@%67%6D%61%69%6C.%63%6F%6D"}", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'Linkedin',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/%EC%98%81%EC%9D%80-%EC%9D%B4-2aa9972aa/", "_blank");
        },
      },{
        id: 'social-Artstation',
        title: 'Artstation',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-github',
        title: 'Github',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vineblack", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'Youtube',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
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
