export interface Credit {
  role: string;
  production: string;
  venue: string;
  year: string;
}

export const actingCredits: Credit[] = [
  {
    role: "Peter",
    production: "Prelude To A Kiss",
    venue: "The Heights Player",
    year: "2024",
  },
  {
    role: "Patron",
    production: "And Just Like That…",
    venue: "HBO",
    year: "2024",
  },
  {
    role: "The Gentleman",
    production: "The Masses Are Asses ",
    venue: "Wesleyan University Dir. Miranda Haymon",
    year: "2021",
  },
  {
    role: "Frank Strang",
    production: "Equus",
    venue: "Wesleyan University",
    year: "2020",
  },
  {
    role: "Roger",
    production: "Curious Incident",
    venue: "Wesleyan University",
    year: "2020",
  },
  {
    role: "Macbeth",
    production: "Macbeth",
    venue: "RADA",
    year: "2019",
  },
  {
    role: "Andy",
    production: "Snake Oil",
    venue: "Wesleyan University",
    year: "2019",
  },
  {
    role: "James",
    production: "Tech Gnomes",
    venue: "Cardinal Pictures",
    year: "2018/2019",
  },
  {
    role: "Billy",
    production: "The Goat, or Who is Sylvia",
    venue: "Wesleyan University Dir. Ryan Dobrin",
    year: "2018",
  },
  {
    role: "Oberon",
    production: "A Midsummer Night's Dream",
    venue: "SUNY Purchase",
    year: "2018",
  },
  {
    role: "Antipholus of Ephesus",
    production: "The Boys from Syracuse",
    venue: "Briarcliff Manor HS",
    year: "2018",
  },
  {
    role: "Orlando",
    production: "As You Like It",
    venue: "SUNY Purchase",
    year: "2017",
  },
  {
    role: "Phileas Fogg",
    production: "Around the World in 80 Days",
    venue: "Briarcliff Manor HS",
    year: "2017",
  },
  {
    role: "Jean-Michel",
    production: "Cinderella",
    venue: "Briarcliff Manor HS",
    year: "2017",
  },
  {
    role: "GH Hardy",
    production: "A Disappearing Number",
    venue: "Briarcliff Manor HS",
    year: "2016",
  },
  {
    role: "Ferdinand",
    production: "The Tempest",
    venue: "Briarcliff Manor HS",
    year: "2015",
  },
];

export const designCredits: Credit[] = [
  {
    role: "Lighting Designer",
    production: "Above The Noise",
    venue: "Dixon Place",
    year: "2019",
  },
  {
    role: "Ast. Lighting Designer",
    production: "Eurydice",
    venue: "Wesleyan University",
    year: "2019",
  },
  {
    role: "Master Electrician",
    production: "Come Dance With Me",
    venue: "Wesleyan University",
    year: "2019",
  },
  {
    role: "Lighting Designer",
    production: "Goat",
    venue: "Wesleyan University",
    year: "2018",
  },
  {
    role: "Flymaster/Electrician",
    production: "The Pillowman",
    venue: "Wesleyan University",
    year: "2017",
  },
  {
    role: "Lighting Designer",
    production: "Much Ado About Nothing",
    venue: "Wesleyan University",
    year: "2017",
  },
];

export interface TrainingSection {
  institution: string;
  description: string;
  faculty: { department: string; instructors: string }[];
}

export const actingTraining: TrainingSection[] = [
  {
    institution: "Royal Academy of Dramatic Arts",
    description:
      "A semester of intensive Shakespeare training, as well as in depth voice and movement work, providing hands-on experience with some of the most respected theater professors in England.",
    faculty: [
      {
        department: "Acting",
        instructors: "Geoff Bullen, Vivian Munn, Salvatore Sorce, Jeremy Stockwell, Gary Lagden",
      },
      {
        department: "Voice",
        instructors: "Joe Windley, Andrew Cuthbert, Adrienne Thomas, Andrew Charity",
      },
      {
        department: "Movement",
        instructors: "Angela Gasparetti, Nancy Kettle",
      },
      {
        department: "Stage Combat",
        instructors: "Rob Leonard",
      },
    ],
  },
  {
    institution: "Wesleyan University",
    description:
      "Double Major: Theater, Computer Science; Relevant Coursework: Lighting Design, Directing 1, Acting 1, Special Topics in Theater History, Private Vocal Study; GPA: 3.62",
    faculty: [
      {
        department: "Acting",
        instructors: "Miranda Haymon, Maria Christina Oliveras, Kathleen Conlin, Brian Gligor",
      },
      {
        department: "Directing",
        instructors: "Kathleen Conlin, Pirronne Yousefzadeh",
      },
      {
        department: "Lighting Design",
        instructors: "Calvin Anderson, Courtney Gaston",
      },
    ],
  },
  {
    institution: "SUNY Purchase",
    description:
      "Two Summer Shakespeare Intensives attending workshops and performing. Highlights include playing Orlando in As You Like It, and Oberon in A Midsummer Night's Dream",
    faculty: [],
  },
];

export interface WorkExperience {
  company: string;
  title: string;
  description: string;
  url?: string;
}

export const designWorkExperience: WorkExperience[] = [
  {
    company: "Wesleyan Center for the Arts Theater",
    title: "Theater Technician",
    description:
      "Assemble sets, hang lights, and help to run performances in the Center for the Arts Theater, alongside industry professionals. Senior employee for certain shifts.",
  },
  {
    company: "Second Stage Theater Company – Wesleyan University",
    title: "",
    description:
      "Lighting designer, Master Electrician, and Carpenter for several productions, as well as being shop and genie trained.",
  },
];

export const codingWorkExperience: WorkExperience[] = [
  {
    company: "Sharpen",
    title: "Software Engineer II",
    description:
      "Work as a member of the backend engineering team, focusing on building and designing new functionality. Primarily coding in Node.js and php, using mysql, postgres, and mongo as database servers. Working on both modern and legacy code bases, heavily involved in project planning and architecture design.",
    url: "https://sharpencx.com/",
  },
  {
    company: "Wesleyan University",
    title: "Course Assistant",
    description:
      "Worked as an assistant to Prof. Norman Danner for the upper level programming language design class. Led Students through an intensive course of designing a language from the ground up, including writing a compiler and interpreter. Ran study sessions and graded assignments.",
  },
  {
    company: "Kumbu",
    title: "Intern",
    description:
      "Interned for Kumbu, a Paris based startup, in the Summer of 2016. Aided in the back-end of new web app, creating web-page mockups and helping with API integration. Reported remotely and worked in two languages.",
    url: "https://www.getkumbu.com",
  },
  {
    company: "Engineering For Kids",
    title: "Instructor",
    description:
      "Taught Game Design, Chemical Engineering, Medieval Engineering to 15-20 children, ages 5-12. Responsible for their education and safety including time spent using relatively dangerous materials.",
  },
];
