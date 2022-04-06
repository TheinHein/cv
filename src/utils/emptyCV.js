import uniqid from "uniqid";

const emptyCV = {
  general: {
    firstName: "",
    lastName: "",
    title: "",
    about: "",
  },
  contact: {
    email: "",
    phone: "",
    city: "",
    country: "",
    linkedin: "",
  },
  skills: [
    {
      id: uniqid(),
      name: "",
    },
  ],
  work: [
    {
      id: uniqid(),
      position: "",
      company: "",
      start: "",
      end: "",
      city: "",
      country: "",
      tasks: [
        {
          id: uniqid(),
          task: "",
        },
      ],
    },
  ],
  education: [
    {
      id: uniqid(),
      degree: "",
      school: "",
      start: "",
      end: "",
    },
  ],
  organizations: [
    {
      id: uniqid(),
      name: "",
      start: "",
      end: "",
    },
  ],
  languages: [
    {
      id: uniqid(),
      language: "",
      level: "",
    },
  ],
};

export default emptyCV;
