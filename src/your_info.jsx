//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

const backgroundImageUrl = 'https://images.wallpaperscraft.com/image/single/man_photographer_roof_146991_3840x2400.jpg';


// Enter here your first and last name
const name = {
  firstname: 'Andrea',
  lastname: 'López',
// Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: 'https://www.google.com',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  "I used to be an accountant...",
  "I am a fullstack developer...",
  "I will be an ERP consultant!!",  
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/in/andrea-lopez-/',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/AndreaLN25',
  },
  //   Add more social profiles here, it will automatically add more link-buttons with icons (if available)
  //   {
  //     name: 'Twitter',
  //     icon: 'lni lni-twitter',
  //     url: 'https://twitter.com/your-username',
  //   },
  //   {
  //     name: 'Facebook',
  //     icon: 'lni lni-facebook',
  //     url: 'https://facebook.com/your-username',
  //   },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Tech Skills',
    type: 'techskills',
    icon: 'lni lni-code',
    title: 'Tech Skills',
    description: "Technical expertise gained through experience in development, accounting, and SAP consulting.",
    skills: [
      { icon: "simple-icons:html5" },
      { icon: "simple-icons:css3" },
      { icon: "simple-icons:javascript" },
      { icon: "simple-icons:php" },
      { icon: "simple-icons:react" },
      { icon: "simple-icons:python" },
      { icon: "simple-icons:mysql" },
      { icon: "simple-icons:mongodb" },
      { icon: "simple-icons:git" },
      { icon: "simple-icons:postman" },
    ],
  },
  
  {
    name: 'Soft Skills',
    type: 'softskills',
    icon: 'lni lni-users',
    title: 'Soft Skills',
    description: "Interpersonal skills refined across development, finance, and SAP consulting, with a focus on collaboration and problem-solving.",
    skills: [
      { title: "Organization" },
      { title: "Responsibility" },
      { title: "Time Management" },
      { title: "Teamwork" },
      { title: "Proactive Problem Solving" },
      { title: "Stress Management" },
    ],
  },
  
  {
    name: 'Certifications',
    type: 'certifications',
    icon: 'lni lni-graduation',
    title: 'Certifications',
    description: "Validating professional expertise with certifications in development, accounting, and SAP.",
    skills: [
      { title: "A3ASESOR Certification" },
      { title: "Full Stack Developer" },
      { title: "SAP (In Progress)" },
    ],
  },
];


// // Here you can give in your achiements in a number counter animation
// const achievements = [
//   { word: 'bullshit', value: 100, unit: '%' },
//   { word: 'finished projects', value: 7500, unit: '' },
//   { word: 'experience', value: 20, unit: ' years' },
// ];



// If you already have some projects, fill the url 
const projectData = [
  {
    title: 'A3 Wolters Kluwer Software',
    description: 'Expert in using A3 Wolters Kluwer for accounting and financial management.',
    demoUrl: '',
    category: 'Accounting',
    image: 'images/A3_WOLTERS.jpeg',
  },
  {
    title: 'My Coding Projects',
    description: 'A few full-stack apps, backends, and REST APIs showcasing my skills in development.',
    demoUrl: '',
    category: 'Development',
  },
  {
    title: 'SAP',
    description: 'Currently self-learning SAP to build a career in ERP development or consulting.',
    demoUrl: '',
    category: 'Consultant',
    image: 'images/SAP.jpeg',
  },
];




//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `
Hi, I'm Andrea.After 4 years as an accountant, I've transitioned into programming and ERP consulting.

I hold a degree in Business Administration from Universitat de Barcelona and a Master's in Financial Management from EAE Business School. I also completed a Fullstack Developer Bootcamp in PHP, with a focus on Laravel, React, and databases.

With experience in ERP systems and a background in finance, I'm now aiming to combine both fields, particularly in SAP consulting, to help companies optimize their processes through tech-driven solutions. `,

  power_slogan: `Accountant | Full Stack Developer | Aspiring ERP Consultant`,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_a0ng9qr',
  templateID: 'template_zdb7oks',
  userID: 'V8IVUUfpCtrvMV0Lp'
};

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  // achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
