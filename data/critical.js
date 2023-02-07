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
              { header:"If no response to NS bolus or persistent hypotension:"},
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
          { name: "Access",
            header: "Place double lumen UVC & UAC" ,
            data: [
            ]},
          { name: "GI",
            header:"Place anderson tube to continuous drainage",
            data: [ 
              {text:"If Anderson not available, utilize Replogle 10fr to low-intermittent suction"}
            ]},
          { name: "Fluids", 
            data:[
              {text:"80 mL/kg/day (Include all drips) with starter TPN."},
              {text:"NaAC via arterial line",
              sub:[
                {text:"Consider adding papaverine to PAL if spasming (can only be used with NaCl)"}
              ]}
            ]},
          { name: "Electrolytes",
            data:[
              {text:"Treat metabolic acidosis (pH < 7.2 and/or base deficit greater than -6) with NaHCO3 2mEq/kg dosing regardless of respiratory acidosis."},
              {text:"Treat iCal < 1.2 with CaCl 20 mg/kg"}
            ]},
        ],
      },
      {
        name: "Infectious Disease",
        subPages: [
          { name: "Infectious Disease",
            data:[
              {text:"Assess risk for infection, if elective delivery (induction or C/S) hold antibiotics"}
              ,{text:"48 hour rule-out sepsis if prolonged rupture of membranes, preterm delivery or fetal intervention (FETO)."},
              {text:"Amp/Gent as rule-out medications unless maternal infection indicates a need for a different regimen.",
              sub:[
                {text:"Consider Ceftazidime for renal protection"}
              ]
            }
            ]}
        ],
      },
      {
        name: "Hematology",
        subPages: [
          { name: "Hematology",
            data:[
              {text:"Administer Vitamin K if not given in delivery room"},
              {text:"Newborn workup on all patients"},
              {text:"Obtain blood consent on all patients"}
            ]
         }
        ],
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
          { name: "CMV Settings",
            header:"Ventilation via pressure mode with Servo ventilator",
            data:[
              {text:"Mild: 20/5 (PIP not to exceed 25), RR 60 (up to 80), PS 10 (8-12), FiO2 50%"},
              {text:"Moderate: 23/4 (PIP not to exceed 25), RR 80, PS 12 (8-15), FiO2 100%"},
              {
              text:"Severe: 23/4 PIP (not to exceed 25), RR 80, PS 15 (10-15) FiO2 100%",
              sub:[
                {text:"Adjust iTime to maintain I:E 1:2 (0.25-0.5)"},
                {text:"iTime Calculation: 60/RR/3= iTime"}
              ]}
            ]
           },
          { name: "CMV Goals",
            data:[
              {text:"Preductal oxygen sats 85-95% preductal PaO2 > 55 mmHg"},
              {text:"Minute ventilation greater than 0.6"},
              {text:"PaCO2 45-55 mmHg"},
              {text:"pH ≥ 7.2"},
              {text:"tolerate preductal sat > 85%, postductal >70% if perfusion satisfactory, non-acidotic and lactic acid not increasing"},
              {text:"Cerebral NIRS greater than 70"}
            ]},
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
          { name: "Weaning from HFOV to CMV",
            data:[
              {text:"Once stable with adequate CO2 and stable FiO2 begin weaning HFOV stepwise to goal MAP 12-14, AMP < 36, Hz ≥ 8",}
            ]},
          { name: "Criteria for Weaning CMV",
            data:[
              {text:"PaCO2 < 45mmHg",}
            ]},
        ],
      },
      {
        name: "Cardiovascular",
        subPages: [
          { name: "Blood pressure",
            data:[
              {text:"Goal mean arterial blood pressure (MAP) 40-45 mmHg for 1st 24 hours. "},
              {text:"After 24 hours goal MAP 45-50 mmHg"},
              {text:"If pulse pressure is <15 mmHg target systolic BP 60-70 mmHg"}
            ]
        },
          { name: "Hypovolemia/Hypotension",
            data:[
              {text:"If fluid responsive, utilize low dose epinephrine."},
              {text:"Proceed to inotropic management below"}
            ]
        },
          { name: "Persistent Hypotension",
            header:"If no response to NS bolus or persistent hypotension",
            data:[
              {text:"1st line: Epinephrine at 0.05 mcg/kg/min",
              sub:[{text:"Titrate by 0.02 mcg/kg/min to a max of 0.5 mcg/kg/min"}]},
            ]
        },
          { name:"Hydrocortisone",
            data:[
              {text:"Administer 2 mg/kg IV after trough obtained. Assess need for vasopressor support. If no vasopressors, hold scheduled hydrocortisone."},
              {text:"If requiring vasopressors and cortisol level < 15, schedule 2 mg/kg every 8 hours with max 2 mg/kg Q6h"},
              {text:"If requiring vasopressors and cortisol level > 15, schedule 1 mg/kg every 8 hours"},
              {text:"Check pm peak and trough cortisol level and adjust dosing accordingly."},
              {text:"All patients increase to 2 mg/kg prior to surgery for 24 hours"}
            ]
        },
          { name: "Pulmonary Hypertension",
            data:[
              {text:"Obtain ECHO on admission to NICU, day prior to repair"},
              {
                text:"ECHO to assess",
                sub:[{text:"Anatomy, LV + RV function, estimate RV pressure if TR jet is present, assess ductal shunting, septal flattening and atrial level shunt"}]
              },
              {
                text:"Atrial shunting right to left or bidirectional and FiO2 > 60%",
                sub:[{text:"Start iNO at 5 ppm and titrate up to 20 ppm to allow weaning of oxygen to a goal of < 60%"}]
              },
              {
                text:"Atrial level shunting left to right",
                sub:[
                  {text:"Withhold iN"},
                  {text:"Initiate only for episodes of preductal desaturation with echo evidence of bidirectional or right to left atrial level shunt"}
                ]
              },
              {
                text:"Decreased RV function",
                sub:[{text:"Initiate iNO at 20 ppm"}]
              },
              {
                text:"Indication to initiate PGE",
                sub:[{text:"PDA shunt right to left in Moderate/Severe CDH profile"}]
              },
              {
                text:"Indications to initiate PGE + Milrinone",
                sub:[
                  {text:'Decreased LV function with constricted ductus and right to left flow initiate'},
                  {text:"Decreased RV function with constricted ductus"},
                  {text:"PGE at 0.05 mcg/kg/min and milrinone at 0.5 mcg/kg/min"}
                ]
              },
              {
                text:"Indications to initiate Milrinone + Epinephrine",
                sub:[
                  {text:"Mod-Severe decreased LV function"},
                  {text:"Milrinone at 0.5 mcg/kg/min and Epinephrine at 0.05 mcg/kg/min"}
                ]
              }
            ]
        },
          { name: "Refractory Pulmonary Hypertension",
            data:[
              {text:"If left to right PFO shunt is present: start Milrinone if not started already"},
              {text:"Persistent R or L shunting at the PFO consider the following additional options:"},
              {text:"If there is lack of recruitment limiting delivery of iNO, optimize vent settings as able"},
              {text:"If adequate lung recruitment and PDA restrictive start PGE at 0.05 mcg/kg/min."},
              {text:"Consider IV sildenafil at 0.067 mg/kg/hour without bolus"},
              {text:"Greater than 48 hours and normal LV function start iNO at 20 ppm"}
            ]
        },
        ],
      },
      {
        name: "F.E.N.G",
        subPages: [
          { name: "IV Fluids",
          data:[
            {text:"Begin total fluids at 80 mL/kg/day (Include all drips) with starter TPN. Keep total fluids 80 mL/kg/day until repair."},
            {text:"Utilize NaAC via arterial line",
            sub:[{text:"Consider adding papaverine to PAL if spasming (can only be used with NaCl)"}]}
          ]  
        },
          { name: "Gastrointestinal",
          data:[
            {text:"Anderson tube to continuous suction (Or Replogle 10fr to low-intermittent suction)"},
            {text:"Remove OGT from mouth Q4h and rinse in sterile water then replace to ensure patency."}
          ]  
        },
          { name: "Electrolytes (during acute phase)",
          data:[
            {text:"Treat metabolic acidosis (pH < 7.2 and/or base deficit greater than -6) with sodium bicarbonate 2mEq/kg dosing regardless of respiratory acidosis."},
            {text:"Maintain iCal >1.2"},
            {text:"Magnesium level >2"},
            {text:"Potassium level >3.4"},
          ]  
        },
          { name: "Lab Schedule",
          data:[
            {text:"QD RFP until stable"},
            {text:"PRN Mag, Lytes, iCal to be obtained after repletion"},
            {text:"QMon CMP, Mag, Phos,"},
            {text:"QThurs RFP"}
          ]  
        },
          { name: "TPN Goals",
          data:[
            {text:"Protein- 3 g/kg AA"},
            {text:"GIR 12 with goal glucose 60-150 mg/dL"},
            {text:"IL- Initiate at 2 g/kg/day and increase to goal 3 g/kg/day on DOL 2",
            sub:[{text:"Consider SMOF if not able to start feeds by 2 weeks"}]},
            {text:"Add levocarnitine at 7 days if still NPO"},
            {text:"Famotidine 0.5mg/kg in TPN",
            sub:[{text:"Transition to PO when TPN d/c"}]},
          ]  
        },
        ],
      },
      {
        name: "Infectious Disease",
        subPages: [{ name: "Infectious Disease", data:[{text:"Periop antibiotics", sub:[{text:"Ancef 50 mg/kg (prior to incision)"}]}]}],
      },
      {
        name: "Hematology",
        subPages: [
          { name: "Hematology", data:[
            {text:"CBC & Coag panel 6 hours after admit"},
            {text:"Lab goals for non-ECMO patients",
            data:[
              {text:"Hct >35"},
              {text:"Platelets > 50"},
              {text:"PT< 18"},
              {text:"Fibrinogen > 150"}
            ]},
            {text:"Monitor for jaundice and treat as appropriate"},
            {text:"Monitor HCT weekly until stable"}
          ] }
        ],
      },
      {
        name: "Neuro/Pain",
        subPages: [{ name: "Neuro/Pain", data:[{text:"CDH Pain Algorithm"}] }],
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
          { name: "Weaning phase from CMV s/p CDH rep",
            data:[
              {text:"Aim for pCO2 50-65 mmHg; allowing for permissive [hypercapnia as long as the infant is not sensitive to changes in pCO2 (ie pH remains >7.2)"},
              {text:"Standard wean plan: ABG Q8h: 0600, 1400, & 2200",
              sub:[
                {text:"Wean RR by 4 for PaCO2 less than 55."}
              ]
            },
              {text:"Slow wean plans: ABG Q12h 0600 & 1800",
              sub:[{text:"Wean RR by 2 for PaCO2 less than 55."}]}
            ,{text:"Extubation goal settings: Rate 15, PIP 20, PEEP 5, PS 8-10"},
            {text:"Obtain ECHO prior to extubation to eval tolerance of decreased iNO delivery following extubation. Obtain ECHO on 20 ppm and 10 ppm"}
            ]
        },
          { name: "Extubation",
            data:[
              {text:"Mild: CPAP 6 cm H20 via flexitrunk and double iNO"},
              {text:"Moderate-Severe: CPAP 8-10 cm H20 via flexitrunk and double iNO",
              sub:[{text:"Maintain minimum FiO2 30% for all CDH."}]},
              {text:"“Successful Extubation”: comfortable next morning?",
              sub:[{text:"Discontinue ABGs, NIRS, and UAC/PAL."}]}
            ] 
          },
          { name: "CPAP Weaning",
            data:[
              {text:"CPAP weaning readiness",
              sub:[
                {text:'FiO2 consistently < 50%'},
                {text:"TCM < 60 mmHg."},
                {text:"Tolerate RR 50-80s with preductal goal O2 sat >95%."}
              ]},
              {text:"Mild: Wean to goal of 5, then transition to HFNC 5L and continue wean"},
              {text:"Moderate: Wean by 1 Q2-4 days to goal 5 then transition to HFNC 5L & continue wean"},
              {text:"Severe: Wean by 1 QWk or Twice Weekly to goal 5 then transition to HFNC 5L and continue wean frequency."}
            ] },
          { name: "Other",
            data:[
              {text:"All CDH should remain on minimum wall O2 25cc"},
              {text:"X-rays after extubation QMo/Th with CBG."},
              {text:"X-rays after wean to NC QMonday with CBG"},
              {text:"PaCO2 > 65 mmHg resume prior level of respiratory support and follow up in 4-7d with CXR/CBG"},
              {text:"Infant who is still mechanically ventilated at 4 weeks of life, consult pulmonary and perform bronchoscopy"},
            ]
        },
        ],
      },
      {
        name: "Cardiovascular",
        subPages: [
          { name: "Blood pressure",
            data:[
              {text:"Goal mean arterial blood pressure (MAP) 40-45 mmHg for 1st 24 hours. "},
              {text:"After 24 hours goal MAP 45-50 mmHg"},
              {text:"If pulse pressure is <15 mmHg target systolic BP 60-70 mmHg"}
            ]
          },
          { name: "Pulmonary Hypertension",
            data:[
              {text:"Sildenafil Indications", 
              sub:[
                {text:"Remains dependent on iNO at 3 weeks of life"},
                {text:"Supra-systemic PA pressure despite iNO therapy"},
                {text:"> 3 weeks of age & ready to extubate with greater than ½ systemic PA pressure or increased reactivity with iNO wean from 20 ppm to 10 ppm"},
                {text:"Test dose of PO sildenafil 0.25 mg/kg/dose"
                ,sub:[{text:"If tolerated, increase to 0.5 mg/kg/dose and then 1mg/kg/dose every 8 hours."}]},
                {text:"Obtain echo and if unable to wean off iNO or greater than ¾ systemic on iNO, increase slowly in 0.5 mg/kg increments to 2 mg/kg/dose"},
                {text:"In a patient on IV sildenafil, transition IV to PO sildenafil when taking greater than 60ml/kg of feeds."},
                {text:"Give 1 mg/kg dose and post administration wean the IV sildenafil by 50%. 8 hours later administer 1 mg/kg of PO sildenafil and stop the IV sildenafil"}
              ]},
              {text:"iNO Weaning",
              sub:[
                {text:"Perform baseline echo when ready to wean on 20 ppm and 10 ppm"},
                {text:"If no reactivity noted and ready to extubate, extubate to 20 ppm non-invasive iNO"},
                {text:"If not ready to extubate then no iNO weaning"},
                {text:"If echo is stable wean iNO off slowly in 1 ppm increments Q12h and obtain and echo once off iNO for 4-6 hours"},
                {text:"Restart or increase iNO if greater than ½ systemic PA pressure by TR jet or if moderate or severe septal flattening is present."}
              ]}
            ] },
        ],
      },
      {
        name: "F.E.N.G",
        subPages: [
          { name: "Total Fluids",
          data:[
            {text:"Day of repair: Increase total fluids by 30-50 mL/kg using Plasma-lyte to make up for insensible losses related to repair.",
              sub:[{text:"Monitor UO and BP to adjust TF overnight."}]
            },
            {text:"Day after repair: Return TF goal to 80-100 mL/kg/day including all drips"},
            {text:"48 hours post-repair: Monitor fluid balance/weight",
            sub:[{text:"Fluid overload >10%- Initiate Lasix 1 mg/kg IV QD-TID"}]
            },
            {text:"Titrate fluids as needed to max 120 mL/kg/day."},
            {text:"When feeds are added in, maintain TF goal  ≤ 130-140 mL/kg/day."}
          ] },
          { name: "GI",
          data:[
            {text:"Anderson tube to continuous suction (Or Replogle 10fr to low-intermittent suction)"},
            {text:"Routine interventions to maintain patency"},
          ] },
          { name: "Enteral Feeding Guidelines",
          data:[
            {text:"Initiate feeding on return of bowel function (usually 48 hours post-surgery) or when hemodynamically stable (less than 5 mcg/kg/min dopamine).",
              sub:[{text:"Goal is to use maternal breast milk; if not available, utilize Good Start or Similac total comfort (whey based)"}]
            },
            {text:"Tolerance of feeds considered 3 or less emesis daily."},
            {text:"Mild-Moderate:",
            sub:[
              {text:"Route- Nasogastric",
              sub:[
                {text:"Consider TP for moderate (PPLV closer to 15%)"}
              ]},
              {text:"Initiate bolus gastric feeds at 20 ml/kg/day."},
              {text:"Fortify daily once above trophics to goal of 24 kcal/oz"},
              {text:"Advance by 30 mL/kg/day daily as tolerated."},
              {text:"Goal 140 mL/kg/day of 24 kcal/oz for targeted 110-120 kcal/kg/day"},
              {text:"Consider liquid protein for moderate (may initiate >trophics)"},
              {text:"Intolerance",
              sub:[
                {text:"Step 1: Continuous feeds"},
                {text:"Step 2: TP feeds"},
                {text:"May need NGT to vent"}
              ]}
            ]},
            {text:"Severe CDH:",
            sub:[
              {text:"Route- TP placed at time of surgery"},
              {text:"Initiate continuous feeds at 20 mL/kg/day via TP tube."},
              {text:"Fortify by 2 kcal/oz daily once above trophics to goal of 26 kcal/oz"},
              {text:"Advance by 20 mL/kg/day"},
              {text:"Goal 140 mL/kg/day of 26 kcal/oz for targeted 120 kcal/kg/day"},
              {text:"(For Term infants) Add liquid protein above trophics"},
              {text:"Intolerance",
              sub:[
                {text:"May need NGT to vent"},
                {text:"Hold at previously tolerated volume"}
              ]}
            ]},
            {text:"Fortification",
            sub:[
              {text:"Term infants- Fortify with Gerber Good Start or Similac Total Comfort (when available)",
              sub:[{text:"May need to trial extensively hydrolyzed formula"}]},
              {text:"<36 weeks utilize HMF"},
              {text:"Consider increased caloric density for suboptimal growth"}
            ]},
            {text:"Failure to thrive",
            sub:[
              {text:"Advance to 26-27 kcal/oz maintaining 140 mL/kg/day prior to advancing total fluids",
              sub:[
                {text:"For infants already receiving above goal- evaluate respiratory support"},
                {text:"Advance by 10 mL/kg/day increments to max 160 mL/kg/day   --(Initiate Lasix to avoid fluid overload)"},
                {text:"Consider transitioning to gastric feeds for TP fed infants to optimize growth"}
              ]},
              {text:"If caloric density and/or feeding volumes are limited secondary to patient status and the patient is unable to meet nutritional needs for ≥48 hours, may need to decrease feed volumes to allow for at least 40-60 mL/kg of TPN until enteral feedings can be advanced to goal"}
            ]},
            {text:"Transition from TP to gastric",
            sub:[
              {text:"After infant demonstrates 1 week of steady weight gain on full feedings of and has weaned to at least HFNC"},
              {text:"num 2"}
            ]}
          ] },
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
