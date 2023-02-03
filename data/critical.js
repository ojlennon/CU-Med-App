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
                  { text: "1) Adjust iTime to maintain I:E 1:2 (0.2-0.5)" },
                  { text: "2) iTime Calculation: 60/RR/3= iTime " },
                ],
              },
            ],
          },
          {
            name: "CMV Goals",
            data: [
              { text: "Preductal oxygen sats 85-95%" },
              { text: "Increasing minute ventilation towards 0.6 l/min" },
              {
                text: "Base deficit > - 6. Administer Sodium bicarbonate 2 meq/kg over 30 minutes",
              },
              {
                text: "If adequately ventilated PaCO2 < 45mmHg, wean PIP stepwise to 20 and maintain rate",
              },
              {
                text: "If adequately ventilated PaCO2 < 45mmHg, PIP 20 wean rate stepwise to 40 breaths/min",
              },
            ],
          },
          {
            name: "Defining Failure of CMV",
            data: [
              {
                text: "Failure to achieve adequate ventilation demonstrated by two consecutive blood gasses at least 15 min apart after achieving max CMV settings, s/p sedation, s/p bicarb",
              },
              { text: "Preductal saturations < 85%" },
              {
                text: "Persistent respiratory acidosis at 1 hour (pH <7.2, CO2 >65, BE <  than -6)",
              },
              { text: "Cerebral NIRS < 70" },
              {
                text: "Severe respiratory distress - unable to capture with CMV",
              },
            ],
          },
          {
            name: "HFOV settings for CMV failure",
            data: [
              {
                text: "If HR remains < 100 beats/minute with PPV via Neopuff attempt transition to HFOV and put ECMO on alert (titrate for HR>100 beats/minute)",
                sub: [
                  {
                    text: "1) If MAP > 12 on CMV transition to HFOV MAP 16, Hz 8, Amplitude 36",
                  },
                  {
                    text: "2) If MAP < 12 on CMV transition to HFOV MAP 14, Hz 8, Amplitude 36",
                  },
                ],
              },
            ],
          },
          {
            name: "ECMO Criteria",
            data: [
              {
                text: "HFOV MAP greater than 18, Amplitude 40, Hz 8 with worsening gasses",
              },
              { text: "PaCO2 greater than 65mmHg and pH < 7.2" },
              {
                text: "PaO2 <40 mmHg x 2 on 2 preductal arterial blood gasses two hours apart",
              },
              {
                text: "Initiate for hemodynamic support if:",
                sub: [
                  {
                    text: "1) Unable to maintain goal BP as above on 0.5 mcg/kg/min of epinephrine and dopamine 20 mcg/kg/min, and 0.005 units/kg/hour of vasopressin",
                  },
                ],
              },
              { text: "Signs of impaired tissue perfusion " },
              {
                text: "Persistent refractory metabolic acidosis despite sodium bicarbonate replacement 6 meq/kg over 12 hour period ",
              },
              { text: "Rising lactate on 3 successive checks 1-2 hour apart " },
              { text: "Cerebral NIRS < 60 with max ventilatory support" },
              {
                text: "Monitor response to PH interventions with repeat ECHO and consider ECMO",
              },
              {
                text: "Persistent R to L atrial shunt 12 hours following initiation of PGE ± Sildenafil",
              },
              {
                text: "Retrograde flow in aortic arch from PDA and preductal PaO2 less than 40 in 100% oxygen",
              },
            ],
          },
          {
            name: "Other",
            data: [
              { text: "Place TCM/NIRS" },
              {
                text: "Obtain blood gas and trend with TCM",
                sub: [
                  { text: "1) With obtaining arterial access" },
                  { text: "2) Q15 minAt 1 hr of life" },
                  { text: "3) Prior to leaving OR" },
                ],
              },
              {
                text: "Agitation impeding ventilation administer fentanyl 2 mcg/kg",
              },
              {
                text: "Consider surfactant for premature infants (GA < 34 weeks), or s/p FETO",
              },
              { text: "Please obtain weight prior to leaving DR" },
            ],
          },
        ],
      },
      {
        name: "Cardiovascular",
        subPages: [
          {
            name: "Blood pressure",
            data: [
              {
                text: "Invasive arterial monitoring via UAC",
                sub: [
                  {
                    text: "1) For pre-post-split > 10% place pre-ductal PAL",
                  },
                ],
              },
              {
                text: "Goal mean arterial blood pressure (MAP) 40-45 mmHg",
                sub: [{ text: "1) If pulse pressure <15 mmHg target systolic BP 60-70 mmHg" }],
              },
              {
                text: "Send cortisol level",
                sub: [{ text: "1) Administer hydrocortisone 2 mg/kg IV" }],
              },
            ],
          },
          {
            name: "Hypovolemia/Hypotension",
            data: [
              { text: "Infant born depressed, poorly perfused, or hypotensive: administer NS bolus 5mL/kg. Repeat x 1 if necessary" },
              { text: "If positive response to NS bolus, repeat in 5 ml/kg aliquots (max x4), stop if response to fluid is lost." },
              {text: "If greater than 20 mL/kg of normal saline utilized and still fluid responsive, utilize dwindle dose epinephrine, to limit fluid administration."}
        ]  },
          {
            name: "Persistent Hypotension",
            data: [
              {
                text: "1st line: Epinephrine at 0.1 mcg/kg/min",
                sub: [
                {text: "1) Titrate by 0.05 mcg/kg/min to a max of 0.5 mcg/kg/min"}
                ]
              },
              {
                text: "2nd line: Dopamine at 10 mcg/kg/min",
                sub: [
                  { text: "1) Titrate by 2mcg/kg/min to max of 20 mcg/kg/min." },
                  {text:"2) Add in the 3rd line when Dopamine at 15 mcg/kg/min."}
                ]
              },
              {
                text: "3rd line: Vasopressin at 0.0005 units/kg/min",
                sub: [
                  { text: "1) Titrate by 0.0005 units/kg/min" },
                  {text: "2) Consider adding sooner for brisk urine output and is fluid responsive "}
                ]
              },
          ]},
          {
            name: "Pulmonary Hypertension",
            data: [
              { text: "Preductal SaO2 >85%: HOLD iNO treatment and evaluate necessity with admission echo" },
              {
                text: "Preductal SaO2 < 85% with adequate ventilation and pH >7.2",
                sub: [
                {text: "1) Start iNO at 5 ppm, up titrate to 20 ppm to achieve preductal saturations" }
                ]}
        ]  },
        ],
      },
      {
        name: "F.E.N.G",
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
    name: "Pre-Operative Managment",
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
        name: "F.E.N.G",
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
    name: "Post-Operative Managment",
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
        name: "F.E.N.G",
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
