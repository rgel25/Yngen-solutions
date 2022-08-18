const playgroundProjects = [
  {
    id: 1,
    name: "Crwn Clothing",
    techStack: "React, Redux, Styled Components, Firebase, JS",
    description:
      "A simple E-commerce website featuring a functional cart and checkout integration with Stripe.",
    url: "https://crwn-clothing-io.netlify.app/",
    githubUrl: "https://github.com/rgel25/crwn-clothing",
    tag: "react",
  },
  {
    id: 2,
    name: "PS Studios",
    techStack: "HTML, CSS, Javascript",
    description:
      "A rendition of a PlayStation website to introduce PlayStation Studios as a global unit, showcase the PSS library, and give a glimpse of upcoming games in development by PSS",
    url: "https://argelmiralles-pss.netlify.app/",
    githubUrl: "https://github.com/rgel25/playstation-studios",
    tag: "htmlcss",
  },
  {
    id: 3,
    name: "Kaen",
    techStack: "HTML, CSS, Javascript",
    description:
      "Kaen(Forkify) is a project from a Udemy course built using the MVC architecture and fetches data from an API.",
    url: "https://amiralles-kaen.netlify.app/",
    githubUrl: "https://github.com/rgel25/kaen",
    tag: "javascript",
  },
  {
    id: 4,
    name: "Todo",
    techStack: "React",
    description: "A todo list app built on React.",
    url: "https://amiralles-react-tasks.netlify.app/",
    githubUrl: "https://github.com/rgel25/react-todo-list",
    tag: "react",
  },
  {
    id: 5,
    name: "Worklog",
    techStack: "HTML, CSS, Javascript",
    description:
      "Worklog(Mapty) is a project from a Udemy course and features great usage of a Map API.",
    url: "https://amiralles-worklog.netlify.app/",
    githubUrl: "https://github.com/rgel25/worklog",
    tag: "javascript",
  },
  {
    id: 6,
    name: "Monsters Rolodex",
    techStack: "React, TypeScript",
    description:
      'Monster Rolodex is a very basic application featuring a search bar for some "monsters"',
    url: "https://amiralles-react-monsters-rolodex.netlify.app/",
    githubUrl: "https://github.com/rgel25/react-monsters-rolodex",
    tag: "react",
  },
  {
    id: 7,
    name: "Meme Generator",
    techStack: "React",
    description:
      "A basic application featuring basic React concepts like states and useEffects",
    url: "https://amiralles-react-meme-generator.netlify.app/",
    githubUrl: "https://github.com/rgel25/react-meme-generator",
    tag: "react",
  },
  {
    id: 8,
    name: "Travel Journal",
    techStack: "React",
    description:
      "A basic application featuring basic React concepts like functional components and states",
    url: "https://amiralles-react-mytraveljournal.netlify.app/",
    githubUrl: "https://github.com/rgel25/react-my-travel-journal",
    tag: "react",
  },
  {
    id: 9,
    name: "Simple AirBnb Clone",
    techStack: "React",
    description:
      "A basic application featuring basic React concepts like functional components and states",
    url: "https://amiralles-react-airbnb-basic-clone.netlify.app/",
    githubUrl: "https://github.com/rgel25/react-basic-airbnb-clone",
    tag: "react",
  },
  {
    id: 10,
    name: "Business Cards",
    techStack: "React",
    description:
      "A basic application featuring React concepts like components and props.",
    url: "https://amiralles-business-cards-react.netlify.app/",
    githubUrl: "https://github.com/rgel25/react-business-cards",
    tag: "react",
  },
  {
    id: 11,
    name: "React Facts",
    techStack: "React",
    description: "A basic React app using functional components",
    url: "https://amiralles-react-components.netlify.app/",
    githubUrl: "https://github.com/rgel25/basic-react-app-components",
    tag: "react",
  },
  {
    id: 12,
    name: "Patient Form",
    techStack: "HTML, CSS, Javascript",
    description:
      "A web application for a hospital patient form featuring form validations",
    url: "https://amiralles-patient-form.netlify.app/",
    githubUrl: "https://github.com/rgel25/patient-form",
    tag: "javascript",
  },
  {
    id: 13,
    name: "JS Calc",
    techStack: "HTML, CSS, Javascript",
    description:
      "A basic web app featuring a functional calculator built using JavaScript",
    url: "https://amiralles-jscalc.netlify.app/",
    githubUrl: "https://github.com/rgel25/js-calc",
    tag: "javascript",
  },
  {
    id: 14,
    name: "Bright Finance",
    techStack: "HTML, CSS, Javascript",
    description:
      "Bright Finance is a single page web application. It's purpose is to illustrate my command of HTML, CSS and JavaScript skills. The page is about a dummy company Bright Finance in the space of finance.",
    url: "https://amiralles-brightfinance.netlify.app/",
    githubUrl: "https://github.com/rgel25/bright-finance",
    tag: "javascript",
  },
  {
    id: 15,
    name: "ATMSim",
    techStack: "HTML, CSS, Javascript",
    description:
      "ATMSim is a basic web application that simulates basic functions of an ATM machine. Note that all transactions you will make will not persist after reloading the webpage.",
    url: "https://amiralles-atmsim.netlify.app/",
    githubUrl: "https://github.com/rgel25/atmsim",
    tag: "javascript",
  },
  {
    id: 16,
    name: "Pig Game",
    techStack: "HTML, CSS, Javascript",
    description:
      "This is a simple web application showcasing my command of HTML, CSS and Javascript.",
    url: "https://amiralles-piggame.netlify.app/",
    githubUrl: "https://github.com/rgel25/pig-game",
    tag: "javascript",
  },
  {
    id: 17,
    name: "Guess My Number",
    techStack: "HTML, CSS, Javascript",
    description:
      "This is a simple web application showcasing my command of HTML, CSS and Javascript. The game itself is pretty simple as well. The user inputs a number to guess the secret number",
    url: "https://amiralles-guessmynumber.netlify.app/",
    githubUrl: "https://github.com/rgel25/guess-my-number",
    tag: "javascript",
  },
  {
    id: 18,
    name: "Stats Preview",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    url: "https://amiralles-statspreviewcard.netlify.app/",
    githubUrl: "https://github.com/rgel25/stats-preview-card-component-main",
    tag: "htmlcss",
  },
  {
    id: 19,
    name: "QR Code",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    url: "https://amiralles-qrcodecard.netlify.app/",
    githubUrl: "https://github.com/rgel25/qr-code-component-main",
    tag: "htmlcss",
  },
  {
    id: 20,
    name: "Order Summary",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    url: "https://amiralles-ordersummarycard.netlify.app/",
    githubUrl: "https://github.com/rgel25/order-summary-component-main",
    tag: "htmlcss",
  },
  {
    id: 21,
    name: "NFT Preview Card",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    url: "https://amiralles-nftcardchallenge.netlify.app/",
    githubUrl: "https://github.com/rgel25/nft-preview-card-component-main",
    tag: "htmlcss",
  },
  {
    id: 22,
    name: "Four Card Features",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    githubUrl: "https://github.com/rgel25/four-card-feature-section-master",
    url: "https://amiralles-fourcardchallenge.netlify.app/",
    tag: "htmlcss",
  },
  {
    id: 23,
    name: "Three Column Preview",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    githubUrl: "https://github.com/rgel25/3-column-preview-card-component",
    url: "https://amiralles-threecolumnchallenge.netlify.app/",
    tag: "htmlcss",
  },
  {
    id: 24,
    name: "Huddle",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    githubUrl:
      "https://github.com/rgel25/huddle-landing-page-with-alternating-feature-blocks-master",
    url: "https://amiralles-hubblesite.netlify.app/",
    tag: "htmlcss",
  },
  {
    id: 25,
    name: "Clipboard",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    githubUrl: "https://github.com/rgel25/clipboard-landing-page-master",
    url: "https://amiralles-clipboard.netlify.app/",
    tag: "htmlcss",
  },
  {
    id: 26,
    name: "Fylo",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    githubUrl: "https://github.com/rgel25/fylo-data-storage-component-master",
    url: "https://amiralles-fylodatacomponent.netlify.app/",
    tag: "htmlcss",
  },
  {
    id: 27,
    name: "Testimonials Grid",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    githubUrl: "https://github.com/rgel25/testimonials-grid-section-main",
    url: "https://amiralles-testimonialgrid.netlify.app/",
    tag: "htmlcss",
  },
  {
    id: 28,
    name: "Huddle v2",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    githubUrl:
      "https://github.com/rgel25/huddle-landing-page-with-single-introductory-section-master",
    url: "https://amiralles-huddlelandingpage.netlify.app/",
    tag: "htmlcss",
  },
  {
    id: 29,
    name: "Pricing Grid",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    githubUrl: "https://github.com/rgel25/single-price-grid-component-master",
    url: "https://amiralles-pricecard.netlify.app/",
    tag: "htmlcss",
  },
  {
    id: 30,
    name: "Social Proof",
    techStack: "HTML, CSS",
    description:
      "This is a simple web application showcasing my command of HTML and CSS.",
    githubUrl: "https://github.com/rgel25/social-proof-section-master",
    url: "https://amiralles-socialproofcard.netlify.app/",
    tag: "htmlcss",
  },
];

export default playgroundProjects;
