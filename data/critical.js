// {
//     name: "",
//     subPages:[
//         { name: "" },
//         { name: "" } ,
//         { name: "" },
//         { name: "" },
//         { name: "" },
//         { name: "" }
//     ]
// },
const Crit = [
  {
    name: "Delivery Room Managment",
    icon: "baby",
    text: "lots of stuff here",
    color: "#54428E",
    subData: [
      {
        name: "Respiratory",
        subPages: [
          {
            name: "CMV settings",
            data: [
              {
                text: "Intubate- ventilation via neopuff with transition to CMV once HR is stable. Initial ventilator settings and range based on prenatal severity profile",
              },
              {
                text: "Mild: 20/5 (PIP not to exceed 25), RR 60 (up to 80), PS 10 (8-12), FiO2 50%",
              },
              {
                text: "Moderate: 23/4 (PIP not to exceed 25), RR 80, PS 12 (8-15), FiO2 100%",
              },
              {
                text: "Severe: 23/4 PIP (not to exceed 25), RR 80, PS 15 (10-15) FiO2 100%",
                sub: [
                  { text: "Adjust iTime to maintain I:E 1:2 (0.2-0.5)" },
                  { text: "iTime Calculation: 60/RR/3= iTime " },
                ],
              },
            ],
          },
          { name: "CMV Goals" },
          { name: "Defining Failure of CMV" },
          { name: "HFOV settings for for CMV failure" },
          { name: "ECMO Criteria" },
          { name: "Other" },
        ],
      },
      {
        name: "Cardiovascular",
        subPages: [
          { name: "Blood pressure" },
          { name: "Hypovolemia/Hypotension" },
          { name: "Persistent Hypotension" },
          { name: "Pulmonary Hypertension" },
        ],
      },
      {
        name: "Fluids, Electrolytes, Nutrition, & Gastrointestinal",
        subPages: [
          { name: "Access" },
          { name: "GI" },
          { name: "Fluids" },
          { name: "Electrolytes" },
        ],
      },
      {
        name: "Infectious Disease",
        subPages: [{ name: "Infectious Disease" }],
      },
      {
        name: "Hematology",
        subPages: [{ name: "Hematology" }],
      },
    ],
  },
  {
    name: "Pre-Opporation Managment",
    icon: "notes-medical",
    text: "more stuff here",
    color: "#688B58",
    subData: [
      {
        name: "Respiratory",
        subPages: [
          { name: "CMV Settings" },
          { name: "CMV Goals" },
          { name: "Defining Failure of CMV" },
          { name: "Weaning from HFOV to CMV" },
          { name: "Criteria for Weaning CMV" },
          { name: "Criteria for Weaning CMV" },
        ],
      },
      {
        name: "Cardiovascular",
        subPages: [
          { name: "Blood pressure" },
          { name: "Hypovolemia/Hypotension" },
          { name: "Persistent Hypotension" },
          { name: "Pulmonary Hypertension" },
          { name: "Refractory Pulmonary Hypertension" },
          { name: "iNO Weaning" },
        ],
      },
      {
        name: "Fluids, Electrolytes, Nutrition, & Gastrointestinal",
        subPages: [
          { name: "IV Fluids" },
          { name: "Gastrointestinal" },
          { name: "Electrolytes (during acute phase)" },
          { name: "Lab Schedule" },
          { name: "TPN Goals" },
        ],
      },
      {
        name: "Infectious Disease",
        subPages: [{ name: "Infectious Disease" }],
      },
      {
        name: "Hematology",
        subPages: [{ name: "Hematology" }],
      },
      {
        name: "Neuro/Pain",
        subPages: [{ name: "Neuro/Pain" }],
      },
    ],
  },
  {
    name: "Post-Opporation Managment",
    icon: "bandage",
    text: "even more stuff here",
    color: "#27767C",
    subData: [
      {
        name: "Respiratory",
        subPages: [
          { name: "Weaning phase from CMV s/p CDH Repair" },
          { name: "Extubation" },
          { name: "CPAP Weaning" },
          { name: "Other" },
        ],
      },
      {
        name: "Cardiovascular",
        subPages: [
          { name: "Blood Pressure" },
          { name: "Pulmonary Hypertension" },
        ],
      },
      {
        name: "Fluids, Electrolytes, Nutrition, & Gastrointestinal",
        subPages: [
          { name: "Total Fluids" },
          { name: "GI" },
          { name: "Enteral Feeding Guidelines " },
        ],
      },
      {
        name: "Hematology",
        subPages: [{ name: "Hematology" }],
      },
    ],
  },
];
export default Crit;
