import uniqid from "uniqid";

const sampleCV = {
  general: {
    firstName: "John",
    lastName: "Doe",
    title: "Business Development Manager",
    about:
      "Professional Business Developer with more than four years of experience in the business development processes. Involved in product testing, management, and development of new business opportunities.",
  },
  contact: {
    email: "john.doe@gmail.com",
    phone: "202-555-0166",
    city: "New York",
    country: "USA",
    linkedin: "linkedin.com/in/john.doe",
  },
  skills: [
    {
      id: uniqid(),
      name: "SEO",
    },
    {
      id: uniqid(),
      name: "Public Speaking",
    },
    {
      id: uniqid(),
      name: "Negotiation",
    },
    {
      id: uniqid(),
      name: "Teamwork",
    },
    {
      id: uniqid(),
      name: "Decision Making",
    },
    {
      id: uniqid(),
      name: "Research & Strategy",
    },
    {
      id: uniqid(),
      name: "Emotional Intelligence",
    },
    {
      id: uniqid(),
      name: "Outbound Marketing",
    },
    {
      id: uniqid(),
      name: "Email Marketing",
    },
    {
      id: uniqid(),
      name: "Google Analytics",
    },
    {
      id: uniqid(),
      name: "Sales & Marketing",
    },
  ],
  work: [
    {
      id: uniqid(),
      position: "Business Development Manager",
      company: "AirState Solutions",
      start: "2014-09",
      end: "2017-06",
      city: "New York",
      country: "USA",
      tasks: [
        {
          id: uniqid(),
          task: "Successfully managed $2-3 million budget projects and successfully achieved the project scheduled goals.",
        },
        {
          id: uniqid(),
          task: "Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.",
        },
        {
          id: uniqid(),
          task: "Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels which increased the satisfaction rate from 81% to 95%.",
        },
        {
          id: uniqid(),
          task: "Ensured that new clients will grow into a loyal customer base in a specialist niche market by implementing a new loyalty program.",
        },
      ],
    },
    {
      id: uniqid(),
      position: "Business Development Assistant",
      company: "AirState Solutions",
      start: "2012-08",
      end: "2010-06",
      city: "Chicago",
      country: "USA",
      tasks: [
        {
          id: uniqid(),
          task: "Increased the customer satisfaction rate by 25% by improving the customer service.",
        },
        {
          id: uniqid(),
          task: "Planned, supervised, and coordinated daily activity of 3 junior business analysts.",
        },
        {
          id: uniqid(),
          task: "Improved the communication with the Marketing department to better understand the competitive position.",
        },
        {
          id: uniqid(),
          task: "Directed the creation and implementation of a Business Continuity Plan, and the management of audit programs.",
        },
      ],
    },
  ],
  education: [
    {
      id: uniqid(),
      degree: "MSc in Economics and Business Administration",
      school: "The University of Chicago",
      start: "2008-09",
      end: "2010-06",
    },
  ],
  organizations: [
    {
      id: uniqid(),
      name: "American Management Association",
      start: "2015-03",
      end: "2022-07",
    },
    {
      id: uniqid(),
      name: "Association of Private Enterprise Education",
      start: "2014-09",
      end: "2022-04",
    },
    {
      id: uniqid(),
      name: "eBusiness Association (eBA)",
      start: "2013-06",
      end: "2022-05",
    },
  ],
  languages: [
    {
      id: uniqid(),
      language: "English",
      level: "Native or Bilingual Proficiency",
    },
    {
      id: uniqid(),
      language: "Spanish",
      level: "Full Professional Proficiency",
    },
    {
      id: uniqid(),
      language: "French",
      level: "Limited Working Proficiency",
    },
  ],
};

export default sampleCV;
