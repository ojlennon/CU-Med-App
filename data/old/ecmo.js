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
                  { text: "NPO" },
                  {
                    text: "Maintain 10fr decompression tube to suction",
                    sub: [
                      {
                        text: "Anderson to continuous suction or Replogle to low-intermittent suction.",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Fluids",
                sub: [
                  {
                    text: "Strict I & O with hourly documentation (foley, chest tubes, gastric tubes, & all intake)",
                  },
                  {
                    text: "Do not utilize fluid algorithm prior to CDH repair",
                  },
                  {
                    text: "Keep TF 80 mL/kg/day (Include all drips) with TPN. ",
                  },
                  {
                    text: "TPN goals",
                    sub: [
                      { text: "Protein- 3 to 3.5 g/kg AA " },
                      {
                        text: "GIR optimize as able with goal glucose 60-150 mg/dL",
                      },
                      { text: "IL optimize to goal 3 g/kg/day " },
                      { text: "Famotidine 0.5 mg/kg in TPN" },
                    ],
                  },
                ],
              },
              {
                text: "Electrolyte goals",
                sub: [
                  {
                    text: "Base deficit > -6, with Sodium bicarbonate 2 mEq/kg/dose",
                  },
                  { text: "iCa >1.2, treat with Calcium Chloride 20 mg/kg" },
                  { text: "Mg  >2, treat with Magnesium Sulfate 50 mg/kg" },
                  { text: "K > 2.5 mmol/L, treat with KCl 1mEq/kg" },
                ],
              },
              {
                text: "NEURO/PAIN",
                sub: [
                  {
                    text: "CDH Agitation Algorithm (See non-ECMO CDH Guideline Appendix III)",
                  },
                ],
              },
              {
                text: "HEMATOLOGY",
                sub: [
                  {
                    text: "Determine bleeding risk (default low)",
                    sub: [
                      {
                        text: "Goal parameters and lab schedule per ECMO algorithms",
                      },
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
                text: "OTHER",
                sub: [
                  {
                    text: "Troubleshooting",
                    sub: [{ text: "Call for ECMO escalation huddle" }],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "CDH Repair on ECMO",
        subPages: [
          {
            name: "ASSESSMENT",
            data: [
              {
                text: "Repair within 24-48 hours on ECMO; defer if coagulopathic or cardiac stun",
              },
              { text: "Anesthesia present for surgery" },
            ],
          },
          {
            name: "RESPIRATORY",
            data: [
              {
                text: "Ventilatory Settings",
                sub: [
                  {
                    text: "Ventilation via SIMV with Servo ventilator",
                    sub: [{ text: "20/5, RR 40, iTime 0.5, FiO2 40%." }],
                  },
                ],
              },
            ],
          },
          {
            name: "CARDIOVASCULAR",
            data: [{ text: "" }, { text: "" }],
          },
          {
            name: "F.E.N.G",
            data: [
              {
                text: "Gastrointestinal",
                sub: [
                  { text: "NPO" },
                  {
                    text: "Maintain 10fr decompression tube to suction",
                    sub: [
                      {
                        text: "Anderson to continuous suction, Replogle to low-intermittent suction",
                      },
                    ],
                  },
                  { text: "Place TP tube for all CDH with severe profile" },
                ],
              },
              {
                text: "Fluids",
                sub: [
                  {
                    text: "Day of repair: Increase TF by 30-50 mL/kg using Plasma-lyte to make up for insensible losses related to repair",
                  },
                ],
              },
              {
                text: "Electrolyte",
                sub: [
                  {
                    text: "Base deficit > -6, with Sodium bicarbonate 2 mEq/kg/dose",
                  },
                  { text: "iCa >1.2, treat with Calcium Chloride 20 mg/kg" },
                  { text: "Mg >2, treat with Magnesium Sulfate 50 mg/kg" },
                  { text: "K  > 2.5 mmol/L, treat with KCl 1mEq/kg" },
                ],
              },
            ],
          },
          {
            name: "INFECTIOUS DISEASE",
            data: [{ text: "Periop antibiotics" }],
          },
          {
            name: "NEURO/PAIN",
            data: [{ text: "Pain management per anesthesia" }],
          },
          {
            name: "HEMATOLOGY",
            data: [{ text: "See perioperative CDH guideline (Appendix V)" }],
          },
        ],
      },
      {
        name: "Post CDH Repair Management",
        subPages: [
          {
            name: "RESPIRATORY",
            data: [
              {
                text: "Ventilatory Settings",
                sub: [
                  {
                    text: "Ventilation via SIMV with Servo ventilator",
                    sub: [{ text: "20/5, RR 40, iTime 0.5, FiO2 40%" }],
                  },
                ],
              },
              {
                text: "Persistent atelectasis",
                sub: [
                  { text: "Increase PIP stepwise to 23" },
                  { text: "Rate to max 60" },
                  { text: "Initiate bag suction" },
                  {
                    text: "Evaluate fluid status & initiate fluid removal via algorithm (link below)",
                    sub: [
                      {
                        text: "https://childrenscolorado.sharepoint.com/sites/pathways/Documents/Cardiology_Routine%20Fluid%20Management%20in%20ECMO.pdf",
                      },
                    ],
                  },
                  { text: "Consider tracheal aspirate" },
                  {
                    text: "Consider bronchoscopy to rule out mucus plug or blood clots.",
                  },
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
              {
                text: "Pulmonary Hypertension",
                sub: [
                  {
                    text: "Systemic or suprasystemic pulmonary hypertension (right to left or bidirectional shunt PDA shunt) with adequate lung recruitment",
                    sub: [
                      { text: "Start iNO" },
                      {
                        text: "Start sildenafil gtt at 0.067 mg/kg/hour, no bolus",
                      },
                      { text: "PH team consult and consider Remodulin" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "F.E.N.G",
            data: [
              {
                text: "Gastrointestinal/Parenteral Nutrition",
                sub: [
                  {
                    text: "Maintain 10fr decompression tube to suction",
                    sub: [
                      {
                        text: "Anderson to continuous suction or Replogle to low-intermittent suction",
                      },
                    ],
                  },
                  { text: "NPO (See criteria below for initiating feeds)" },
                  {
                    text: "All patients will be maintained on TPN for nutrition support and will be adjusted in collaboration with pharmacy and nutrition.",
                    sub: [
                      { text: "Protein- 3 to 3.5 g/kg AA " },
                      {
                        text: "GIR 12-13 mg/kg/min with goal glucose 60-150 mg/dL",
                      },
                      {
                        text: "IL 3 g/kg/day",
                        sub: [
                          {
                            text: "Consider SMOF if not able to start feeds within 2 weeks",
                          },
                        ],
                      },
                      { text: "Add levocarnitine at 7 days if still NPO " },
                      { text: "Famotidine 0.5 mg/kg in TPN" },
                    ],
                  },
                ],
              },
              {
                text: "Fluids",
                sub: [
                  {
                    text: "Strict I & O with hourly documentation (foley, chest tubes, gastric tubes, & all intake)",
                  },
                  {
                    text: "Assess fluid status, set daily fluid goal, utilize fluid removal algorithm to meet goals (link below)",
                    sub: [
                      {
                        text: "https://childrenscolorado.sharepoint.com/sites/pathways/Documents/Cardiology_Routine%20Fluid%20Management%20in%20ECMO.pdf",
                      },
                    ],
                  },
                  { text: "Target 100-110 kcal/kg/day" },
                  {
                    text: "TF goal 100-120 mL/kg/day (max 120 mL/kg/day) including all drips",
                  },
                  {
                    text: "When feeds are added in, maintain TF goal  ≤ 130-140 mL/kg/day.",
                  },
                ],
              },
              {
                text: "Electrolyte goals",
                sub: [
                  {
                    text: "Maintain iCa >1.2, treat with Calcium Chloride 20 mg/kg",
                  },
                  { text: "Mg >2, treat with Magnesium Sulfate 25 mg/kg" },
                  { text: "Treat Potassium level less than 3 mmol/L" },
                ],
              },
              {
                text: "Enteral Feeding",
                sub: [
                  {
                    text: "Initiate feeding on return of bowel function (usually 48 hours post-surgery) or when hemodynamically stable (less than 5 mcg/kg/min dopamine).",
                    sub: [
                      { text: "Advance by 20-30 mL/kg/da" },
                      {
                        text: "Fortify daily once above trophics to goal of 24 kcal/o",
                      },
                      {
                        text: "Max enteral feeding volume up to 80 mL/kg/day while on ECM",
                      },
                      {
                        text: "Goal is to use human milk; if not available, consider using whey based formula",
                        sub: [
                          {
                            text: "Special Considerations: Cholestatic infants- consider a high MCT extensively hydrolyzed formula. Infant with chylothorax- Change to low LCT containing formula (extensively hydrolyzed)",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "NEURO/PAIN",
            data: [{ text: "Refer to NICU post-op pain guideline" }],
          },
          {
            name: "HEMATOLOGY",
            data: [
              {
                text: "First 48 hours post op, see perioperative CDH guideline (Appendix V)",
              },
              {
                text: "Determine bleeding risk (default low)",
                sub: [
                  {
                    text: "Goal parameters and lab schedule per ECMO algorithms",
                  },
                  {
                    text: "See link below- CHCO Guideline for ECMO Bivalirudin Anticoagulation",
                    sub: [
                      {
                        text: "https://childrenscolorado.sharepoint.com/sites/dept/ECMO/Documents/ECMO%20Website/CHCO%20Bivalirudin%20Anticoagulation%20Guideline%20for%20ECMO%2011-22.pdf",
                      },
                    ],
                  },
                ],
              },
              { text: "Follow LY30 daily, discuss Amicar if >4%" },
            ],
          },
          {
            text: "OTHER",
            sub: [
              {
                text: "Troubleshooting",
                sub: [{ text: "Call for ECMO escalation huddle" }],
              },
            ],
          },
        ],
      },
      {
        name: "ECMO Wean/Taper",
        subPages: [
          {
            name: "WEAN READINESS",
            data: [
              {
                text: "Patient PaO2 >100 mmHg on current level support",
                sub: [{ text: "wean support by 10-20 mL/kg/day to 80 mL/kg" }],
              },
            ],
          },
          {
            name: "PREREQUISITES FOR SEPARATION TRIAL (See Appendix VI for Separation Trial Algorithm)",
            data: [
              {
                text: "Acceptable chest x-ray without significant air space disease or effusions",
              },
              {
                text: "Adequate lung recruitment on CMV 20-23/5, RR 40, iTime 0.5, ",
              },
              {
                text: "Assess compliance by looking at the relative change in tidal volume for a change in pressure on the ventilator (goal 6-7 mL/kg)",
                sub: [
                  {
                    text: "If unable to achieve above parameters",
                    sub: [
                      {
                        text: "Give more time on ECMO to establish optimal lung compliance",
                      },
                      {
                        text: "Ensure adequate diuresis, pulmonary toilet with position changes and decreased sedation",
                      },
                      {
                        text: "Assess reasons for poor lung compliance",
                        sub: [
                          {
                            text: "Over circulation and pulmonary edema across a persistent ductus arteriosus. ",
                          },
                          { text: "Infection – send a tracheal aspirate" },
                          {
                            text: "Airways disease – consider bronchoscopy to assess for central airways malacia",
                          },
                          {
                            text: "Lung inflammation – consider a dexamethasone burst, 0.2 mg/kg once, followed by 0.1 mg/kg q12 hours x 6 doses, reserve for ECMO course longer than 3 weeks",
                          },
                          { text: "More time" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "SEPARATION TRIAL",
            data: [
              {
                text: "Consider a trial when PaO2 >100 mmHg on 80 mL/kg flow and 40% FiO2.",
                sub: [{ text: "Obtain pump ABG, ensure pump PaO2 >100 mmHg." }],
              },
              {
                text: "Reduced Flow Process",
                sub: [
                  {
                    text: "Reduce flow to 50 mL/kg for five minutes",
                    sub: [
                      {
                        text: "Maintain current level of support, Increase FiO2 to 60%. ",
                      },
                      { text: "Obtain baseline ECHO and ABG" },
                    ],
                  },
                ],
              },
              {
                text: "Indicators of success",
                sub: [
                  { text: "PaO2 > 60 mmHg in 60% FiO2" },
                  { text: "Right and left ventricular function are normal" },
                  { text: "Left to right atrial level shunt " },
                  {
                    text: "Left to Right PDA shunt not a prerequisite to decannulate especially in the setting of CDH",
                  },
                ],
              },
              {
                text: "Steps following unsuccessful wean",
                sub: [
                  { text: "Return ventilator to pre-wean settings" },
                  { text: "Return to previous flow" },
                ],
              },
            ],
          },
          {
            name: "Low flow trial (if above indicators are achieved)",
            data: [
              {
                text: "Low flow trial",
                sub: [
                  { text: "10 mL/kg flow" },
                  { text: "Administer 25 u/kg/dose heparin" },
                  { text: "Ventilator Settings" },
                  { text: "Obtain ECHO and ABG " },
                ],
              },
              {
                text: "Indicators of successful trial",
                sub: [
                  { text: "PaO2 > 60 mmHg in 60% FiO2" },
                  { text: "Right and left ventricular function are normal" },
                  { text: "Left to right atrial level shunt " },
                  {
                    text: "Left to Right PDA shunt not a prerequisite to decannulate especially in the setting of CDH",
                  },
                  {
                    text: "Stable Hemodynamics - no pressors support support on low flow",
                  },
                ],
              },
            ],
          },
          {
            name: "Hyperoxia test (If above indicators are achieved)",
            data: [
              { text: "Hyperoxia Trial Process" },
              {
                text: "Indicator of successful Trial",
                sub: [
                  {
                    text: "PaO2 > 150 mmHg",
                    sub: [
                      {
                        text: "If <150 mmHg, return to previous flow & ventilator settings",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Degas Process (For successful hyperoxia test)",
            data: [
              {
                text: "Decrease FiO2 back to 60% prior to degassing circuit (Increased risk of shunt with higher FiO2)",
              },
              {
                text: "Ventilator Settings",
                sub: [
                  {
                    text: "Adjust RR (max 80) for pCO2 >50",
                    sub: [{ text: "Switch to AC/PC if R>60." }],
                  },
                  { text: "Decrease PEEP 4" },
                ],
              },
              {
                text: "Degas ECMO circuit",
                sub: [{ text: "Wait 5 minutes, obtain ABG" }],
              },
              {
                text: "Check ABG/ACT every 10 minutes during a low flow trial.",
                sub: [
                  {
                    text: "Check ABG/ACT every 10 minutes during a low flow trial.",
                  },
                ],
              },
              {
                text: "Once desired data is obtained regas ECMO circuit (Recommended duration of 20-40 minutes)",
                sub: [
                  {
                    text: "Then proceed by returning flow to 80 mL/kg and return ventilator to pre-wean settings",
                  },
                ],
              },
            ],
          },
        ],
      }
    ],
  },
];
