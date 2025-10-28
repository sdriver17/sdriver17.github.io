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
    company: "Vivrelle",
    title: "Senior Platform Engineer",
    description:
      "Launched an AI tool that integrated with major fashion companies FWRD and Revolve to complete user outfits, generating significant revenue within 1 month. Refactored the main product loader lambda function, leading to a 5% increase in uptime and 10% lower error rates. Aided in vendor renegotiations to lower cost of cloud by 25% and established company guidelines around the SDLC while mentoring junior engineers.",
    url: "https://vivrelle.com/",
  },
  {
    company: "Sharpen",
    title: "Software Engineering Manager",
    description:
      "Led a cross-functional team of 4-8 developers, driving project delivery on-time while fostering professional growth through mentorship. Led initiatives including the company's first major AI project (now over $500k ARR). Spearheaded the transition of all infrastructure to IaC via AWS CDK, resulting in a 20% reduction in cloud costs and 15% increase in service uptime. Implemented new microservice design patterns that enhanced system performance by 10% and facilitated the launch of 5 critical projects ahead of schedule.",
    url: "https://sharpencx.com/",
  },
  {
    company: "Kumbu",
    title: "Software Engineer",
    description:
      "Reported remotely in both English and French for a Paris-based web startup. Designed web page mockups and UI/UX elements across multiple application sections, resulting in increased user engagement. Developed and implemented end-to-end API integrations, including high-profile integrations with tech companies like Spotify.",
    url: "https://www.getkumbu.com",
  },
];
