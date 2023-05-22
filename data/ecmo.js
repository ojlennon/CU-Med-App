const ecmo = [
  {
    name: "ECMO",
    icon: "air",
    color: "#91123C",
    subData: [
      { name: "Pre-Cannulation" },

      {
        name: "Immediate Post-Cannulation",
        subPages: [
          {
            name: "Pre",
            data: [
              {
                text: "Goal Parameters",
                sub: [
                  { text: "SVO2 75-85%" },
                  { text: "Preductal PaO2 60-80 mmHg" },
                  { text: "NIRS 70-85%" },
                  { text: "Lactate - down trending" },
                  { text: "FiO2 to maintain pump PaO2 100-120 mmHg" },
                ],
              },
              {
                text: "Increase flow in 10 mL/kg increments until goals are met",
              },
              {
                text: "Don't increase flow for pre/post splitting unless the above parameters are not met",
              },
              {
                text: "Obtain ECHO - cannula placement",
                sub: [
                  { text: "Venous cannula in RA at RA/IVC junction" },
                  {
                    text: "Arterial cannula - in carotid at junction of innominate artery and aortic arch",
                  },
                ],
              },
            ],
          },

          {
            name: "RESPIRATORY",
            data: [
              {
                text: "Ventilator Settings",
                sub: [
                  { text: "Discontinue iNO" },
                  { text: "If on HFOV transition to CMV (via SERVO) " },
                  {
                    text: "Ventilation via SIMV with Servo ventilator",
                  },
                  {
                    text: "20/5, RR 40, iTime 0.5, FiO2 40% (Caution for hyperventilation)",
                  },
                ],
              },

              {
                text: "Monitoring",
                sub: [
                  { text: "Obtain ABG as soon as possible after cannulation" },
                  {
                    text: "If unable to access patient sample may be obtained from the arterial line pressure transducer or the venous side of the ECMO circuit",
                  },
                  { text: "Chest x-ray" },
                ],
              },
            ],
          },

          {
            name: "CARDIOVASCULAR",
            data: [
              {
                text: "Blood Pressure",
                sub: [
                  {
                    text: "Goal mean arterial blood pressure (MAP) 45-50 mmHg",
                  },
                  {
                    text: "If pulse pressure <15 mmHg target systolic BP 60-70 mmHg",
                  },
                  { text: "Send cortisol level" },
                ],
              },
              {
                text: "Hypovolemia/Hypotension",
                sub: [
                  {
                    text: "Utilize blood products for replacement volume as labs indicate.",
                  },
                  { text: "PRBC 10-20 mL/kg" },
                  { text: "FFP 20-40 mL/kg" },
                  {
                    text: "If positive response to blood products, administer Normal Saline or 5% albumin (if available) in 10 mL/kg aliquots",
                  },
                ],
              },
              {
                text: "Persistent Hypotension",
                sub: [
                  { text: "Start vasopressin at 0.0005, if not already on." },
                  { text: "Titrate by 0.0005 units/kg/min" },
                  {
                    text: "Administer 2 mg/kg hydrocortisone, if not already given",
                  },
                  { text: "Titrate vasopressors" },
                  {
                    text: "Titrate epinephrine by 0.02 mcg/kg/min every 5 minutes; max of 0.5 mcg/kg/min",
                  },
                  {
                    text: "Titrate dopamine by 2 mcg/kg/min; max of 20 mcg/kg/min",
                  },
                ],
              },
            ],
          },
          {
            name: "F.E.N.G",
            data: [
              {
                text: "Gastrointestinal",
                sub: [
                  { text: "NPO" },
                  { text: "Maintain 10fr decompression tube to suction" },
                  {
                    text: "Anderson to continuous suction or Replogle to low-intermittent suction.",
                  },
                ],
              },
              {
                text: "Fluids",
                sub: [
                  { text: "80 mL/kg/day (Include all drips) with TPN. " },
                  { text: "NaAC via arterial line" },
                  { text: "Consider adding papaverine to PAL if spasming" },
                ],
              },
              {
                text: "Electrolyte goals",
                sub: [
                  {
                    text: "base deficit > -6, with Sodium bicarbonate 2 mEq/kg/dose",
                  },
                  { text: "iCa >1.2, treat with Calcium Chloride 20 mg/kg" },
                  { text: "Mg>2, treat with Magnesium Sulfate 50 mg/kg" },
                  { text: "K > 2.5 mmol/L, treat with KCl 1mEq/kg" },
                ],
              },
            ],
          },
          {
            name: "NEURO/PAIN",
            data: [
              {
                text: "CDH Agitation Algorithm (See non-ECMO CDH Guideline Appendix III)",
              },
            ],
          },
          {
            name: "HEMATOLOGY",
            data: [
              { text: "Obtain initial ECMO labs" },
              {
                text: "If ACT  <220 start bivalirudin infusion at 0.2 mg/kg/hr",
              },
              { text: "Determine bleeding risk (default low)" },
              { text: "Goal parameters and lab schedule per ECMO algorithms" },
              {
                text: "See link below- CHCO Guideline for ECMO Bivalirudin Anticoagulation",
              },
              {
                text: "https://childrenscolorado.sharepoint.com/sites/dept/ECMO/Documents/ECMO%20Website/CHCO%20Bivalirudin%20Anticoagulation%20Guideline%20for%20ECMO%2011-22.pdf",
              },
            ],
          },
        ],
      },

      {
        name: "Pre-CDH Repair Management",
        subPages: [
          {
            name: "RESPIRATORY",
            data: [
              {
                text: "Anticipate white out after going on ECMO with improvement 24-36 hr post-op along with spontaneous diuresis",
                sub: [
                  {
                    text: "Expect Vt to start showing on the vent 24-48 hr post cannulation",
                  },
                ],
              },
              {
                text: "Ventilatory Settings",
                sub: [
                  { text: "Ventilation via SIMV with Servo ventilator" },
                  { text: "20/5, RR 40, iTime 0.5, FiO2 40%" },
                ],
              },
            ],
          },
          {
            name: "CARDIOVASCULAR",
            data: [
              {
                text: "Blood Pressure",
                sub: [
                  { text: "Goal mean arterial blood pressure 45-50 mmHg" },
                  { text: "See non - ECMO guideline for medications" },
                ],
              },
            ],
          },
          {
            name: "F.E.N.G",
            data: [
              {
                text: "Gastrointestinal",
                sub: [
                  {text:"NPO"},
                  {
                    text: "Maintain 10fr decompression tube to suction",
                    sub: [
                    {text: "Anderson to continuous suction or Replogle to low-intermittent suction."}
                  ]},
                ],
              },
              {
                text: "Fluids",
                sub: [
                  {text:"Strict I & O with hourly documentation (foley, chest tubes, gastric tubes, & all intake)"},
                  {text:"Do not utilize fluid algorithm prior to CDH repair"},
                  {text:"Keep TF 80 mL/kg/day (Include all drips) with TPN. "},
                  {
                    text: "TPN goals",
                    sub: [
                      {text:"Protein- 3 to 3.5 g/kg AA "},
                      {text:"GIR optimize as able with goal glucose 60-150 mg/dL"},
                      {text:"IL optimize to goal 3 g/kg/day "},
                      {text:"Famotidine 0.5 mg/kg in TPN"},
                    ]
                  },
                ],
              },
              {
                text: "Electrolyte goals",
                sub: [
                  {text:"Base deficit > -6, with Sodium bicarbonate 2 mEq/kg/dose"},
                  {text:"iCa >1.2, treat with Calcium Chloride 20 mg/kg"},
                  {text:"Mg  >2, treat with Magnesium Sulfate 50 mg/kg"},
                  {text:"K > 2.5 mmol/L, treat with KCl 1mEq/kg"},
                ]
              },
              {
                text: "NEURO/PAIN",
                sub: []
              },
              {
                text: "HEMATOLOGY",
                sub: []
              },
              {
                text: "OTHER",
                sub: []
              },
            ],
          },
          { name: "NEURO/PAIN", data: [] },
          { name: "HEMATOLOGY", data: [] },
          { name: "OTHER", data: [] },
        ],
      },
      { name: "CDH Repair on ECMO" },
      { name: "Post CDH Repair Management" },
      { name: "ECMO Wean/Taper" },
      { name: "Decannulation" },
    ],
  },
];
