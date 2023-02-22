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
                text: "Base deficit greater than - 6. Administer Sodium bicarbonate 2 meq/kg over 30 minutes",
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
                text: "Persistent respiratory acidosis at 1 hour (pH <7.2, CO2 >65, Base deficit less <  than -6)",
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
                text: "Consider surfactant for premature infants (GA < 34 weeks), or s/p FETO delivered within 24 hours of balloon removal",
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
            header:"If no response to NS bolus or persistent hypotension:",
            data: [
              
              {
                text: "1st line: Epinephrine at 0.1 mcg/kg/min",
                sub: [
                {text: "1) Titrate by 0.02 mcg/kg/min every 5 minutes to a max of 0.5 mcg/kg/min"}
                ]
              },
              {
                text: "2nd line: Dopamine at 5 mcg/kg/min",
                sub: [
                  { text: "1) Titrate by 2mcg/kg/min to max of 20 mcg/kg/min." },
                  {text:"2) Order the 3rd line when Dopamine at 15 mcg/kg/min."}
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
              {text:"Right Saphenous PICC if UVC non-centra"}
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
              {text:"Maintain TP tube and place NGT."},
              {text:"Transition by 1⁄4 volume from TP to NG continuous every 1-2 days"},
              {text:"Attempt to consolidate feeds over 7-10 days"},
              {text:"If consolidation fails due to emesis, consider obtaining UGI using contrast to evaluate esophagus, stomach size, and degree of reflux.",
              sub:[{text:"Following results of UGI consider nissen and tube."}]},
              {text:"Once Nissen/GT scheduled remove TP tube and transition to continuous NG feeds (rule out TP tube as cause for emesis)"},
              {text:"May PO feed when on HFNC 4L or less"},
              {text:"Obtain feeding and swallowing evaluation"}
            ]},
            {text:"Nissen/G-tube",
            sub:[
              {text:"If continuous NG feedings are not tolerated with TP tube out"},
              {text:"If there is a failure to consolidate to q3 bolus feedings over 45 min within 30 days"},
              {text:"Consider GT for inability to orally feed 6 weeks post-op"}
            ]}
          ] },
        ],
      },
      {
        name: "Hematology",
        subPages: [
          { name: "Hematology",
            data:[
              {text:"CBC & Coags as appropriate",
              sub:[
                {text:"Lab goals for non-ECMO patients",
                sub:[
                  {text:"Hct >35"},
                  {text:"Platelets > 50"},
                  {text:"PT< 18"},
                  {text:"Fibrinogen > 150"}
                ]}
              ]},
              {text:"Monitor for jaundice and treat as appropriate"},
              {text:"Monitor HCT weekly until stable"},
              {text:"Obtain Retic by 1mo age"}
            ] }
        ],
      },
    ],
  },
  {
    name:"ECMO",
    icon: "air",
    color:"#91123C",
    subData:[
      {name:"PRE-CANNULATION",
      subPages:[
        {name:"PATIENT & ROOM PREPARATION ",
        data:[
          {text:"Patient Position",
          sub:[
            {text:"Open warmer with side rails down"},
            {text:"Head turned to left"},
            {text:"Roll under shoulders with neck extended"},
          ]},
          {text:"Ventilator position",
          sub:[{text:"Left side at foot of bed"}]},
          {text:"Clear space at head of bed"}
        ]},
        {name:"ORDERS",
        data:[
          {text:"Medications",
          sub:[
            {text:"Prior to incision administer",
            sub:[
              {text:"Fentanyl 5 mcg/kg x 2, five minutes apart "},
              {text:"Rocuronium 1 mg/kg x 2, five minutes apart -- Consider addition Fentanyl 5 mcg/kg x1 or Ativan for vital sign changes following surgical incision"},
            ]},
            {text:"Dwindle Epinephrine x 2 syringes"},
            {text:"Cefazolin (Ancef) 50 mg/kg (prior to incision)"},
            {text:"Heparin 50 units/kg"},
            {text:"Albumin 5% 1 g/kg PRN for volume"},
          ]},
          {text:"ECMO Circuit Medications (5 kg or less)",
          sub:[
            {text:"Heparin (1000 units/mL) 250 units"},
            {text:"CaCl (100 mg/mL) 300 mg"},
            {text:"Sodium Bicarbonate 20 mEq"},
          ]},
          {text:"ECMO Blood Bank Orders",
          sub:[{text:"PRBCs 2 units type matched O neg for ECMO standby  < 3 days",
          sub:[{text:"Additional 1 unit for cooler"}]}]}
        ]},
      ]},
      {name:"IMMEDIATE POST-CANNULATION",
      subPages:[
        {name:"INITIAL ECMO SETTINGS",
        data:[
          {text:"Flow 100  ml/kg/min"},
          {text:"Sweep 0.3-0.5, CO2 25 ml "},
          {text:"Monitor SVO2, preductal PaO2, NIRS, lactate"},
          {text:"Goal Parameters",
          sub:[
            {text:"SVO2 – 75-85%"},
            {text:"Preductal PaO2 – 60-80 mmHg"},
            {text:"NIRS - 70-85%"},
            {text:"Lactate - down trending"},
            {text:"FiO2 to maintain pump PaO2 100-120 mmHg"},
          ]},
          {text:"Increase flow in 10 ml/kg increments until goals are met."},
          {text:"Don't increase flow for pre/post splitting unless the above parameters are not met."},
          {text:"Obtain ECHO - cannula placement - venous cannula in RA at RA/IVC junction",
          sub:[{text:"Arterial cannula - in carotid at junction of innominate artery and aortic arch"}]},
        ]},
        {name:"RESPIRATORY",
        data:[
          {text:"Obtain patient blood gas",
          sub:[{text:"If unable to access patient sample may be obtained from the arterial line pressure transducer or the venous side of the ECMO circuit"}]},
          {text:"Ventilator Settings",
          sub:[
            {text:"Discontinue iNO"},
            {text:"If on HFOV transition to CMV (via SERVO) "},
            {text:"Ventilation via PC/AC with Servo ventilator",
            sub:[{text:"20/5, RR 40, iTime 0.5, FiO2 40% (Caution for hyperventilation)"}]},
          ]}
          ]
        },
        {name:"CARDIOVASCULAR",
        data:[
          {text:"Hypotension post ECMO initiation",
        sub:[
          {text:"Multifactorial"},
          {text:"Hypovolemia – fluid shifts"},
          {text:"Cytokine storm – oxygenator"},
          {text:"Abrupt decrease in pressor support"},
          {text:"Blood incompatibility – transfusion reaction"},
          {text:"All other causes of shock – adrenal insufficiency."},
        ]},
          {text:"Pulmonary Hypertension",
          sub:[{text:"Start PGE at 0.0125 mcg/kg/min to maintain ductal patency"}]}
        ]}
      ]},
      {name:"POST-CANNULATION INTERMEDIATE MANAGEMENT",
      subPages:[
        {name:"RESPIRATORY",
        data:[
          {text:"Anticipate white out after going on ECMO with  improvement 24-36 hr post-op along with spontaneous diuresis"},
          {text:"Ventilatory Settings",
          sub:[
            {text:"Ventilation via PC/AC with Servo ventilator",
            sub:[{text:"20/5, RR 40, iTime 0.5, FiO2 40%"}]},
            {text:"Disable Vt alarm after patient is placed on ECMO.",
            sub:[{text:"Expect Vt to start showing on the vent 24-48 hr post op then turn the alarm back on."}]}
          ]},
          {text:"Respiratory Management Post-Repair",
          sub:[
            {text:"Maintain pre-op ventilator settings."},
            {text:"Tight fluid management 48 hours post-op maintain tight fluid to optimize lungs"},
            {text:"Anticipate CMV settings at time of decannulation as outlined by severity profile (see non-ECMO guideline)"},
            {text:"Persistent atelectasis on CXR after consecutive days on above settings, and with inability to wean flow- initiate bag suction",
            sub:[{text:"Consider bronchoscopy to rule out mucus plug or blood clots."}]},
          ]}
        ]},
        {name:"CARDIOVASCULAR",
        data:[
          {text:"Blood Pressure",
          sub:[
            {text:"Goal mean arterial blood pressure 45-50 mmHg"},
            {text:"See non - ECMO guideline for medications"}
          ]},
          {text:"Pulmonary Hypertension",
          sub:[
            {text:"Systemic or suprasystemic pulmonary hypertension (right to left or bidirectional shunt) with adequate lung recruitment",
            sub:[
              {text:"Start iNO"},
              {text:"Start sildenafil gtt at 0.067 mg/kg/hour, no bolus"},
              {text:"PH team consult and consider Remodulin"},
            ]}
          ]}
        ]},
        {name:"FLUIDS, ELECTROLYTES, & NUTRITION",
        data:[
          {text:"Total Fluids (TF)",
          sub:[
            {text:"Strict I & O with hourly documentation (foley, chest tubes, gastric tubes, & all intake)"},
            {text:"Goal kcal 100-110/kg/day"},
            {text:"Initiate TF 80 mL/kg/day (Include all drips) with starter TPN. ", sub:[{text:"Keep total fluids 80 mL/kg/day until repair."}]},
            {text:"Day of repair: Increase TF by 30-50 mL/kg using Plasma-lyte to make up for insensible losses related to repair.",
            sub:[{text:"Monitor UO and BP to adjust TF overnight."}]},
            {text:"Day after repair: Return TF goal to 80-100 mL/kg/day including all drips"},
            {text:"Titrate fluids as needed to max 120 mL/kg/day. "},
            {text:"When feeds are added in, maintain TF goal  ≤ 130-140 mL/kg/day."},
            {text:"Utilize NaAC via arterial line",
            sub:[{text:"Consider adding papaverine to PAL if spasming (can only be used with NaCl)"}]},
          ]},
          {text:"Gastrointestinal",
          sub:[
            {text:"Anderson 10fr inserted to 23-25 cm with continuous suction.",
            sub:[
              {text:"If Anderson unavailable may use Replogle 10F insert to 23-25 cm to intermittent suction with the same patency plan"},
              {text:"Pre-repair: -- Remove OGT from mouth Q4h, rinse in sterile water then replace to ensure patency."},
              {text:"Post-repair: -- Routine interventions to maintain patency"}
            ]}
          ]},
          {text:"Electrolyte goals",
          sub:[
            {text:"Maintain iCal >1.2, treat with Calcium Chloride 20 mg/kg"},
            {text:"Magnesium level >2, treat with Magnesium Sulfate 25 mg/kg"},
            {text:"Treat Potassium level less than 3 mmol/L"},
          ]},
          {text:"Nutrition",
          sub:[
            {text:"All patients will be on full TPN (in collaboration with pharmacy and nutrition) TPN goals:",
            sub:[
              {text:"Protein- 3-3.5 g/kg AA "},
              {text:"GIR 12 with goal glucose 60-150 mg/dL"},
              {text:"IL 3 g/kg/day -- Consider SMOF if not able to start feeds within 2 weeks"},
              {text:"Add levocarnitine at 7 days if still NPO "},
              {text:"Famotidine 0.5 mg/kg in TPN -- Transition to enteral when off TPN"},
            ]},
            {text:"Enteral Feeding",
            sub:[
              {text:"Route of feeding: -- Place TP tube at time of surgery for all CDH with severe prognostic profile. Discuss TP placement for moderate profiles."},
              {text:"Feeding initiation:"},
              {text:"Initiate feeding on return of bowel function (usually 48 hours post-surgery) or when hemodynamically stable (less than 5 mcg/kg/min dopamine). "},
              {text:"Advance 20 mL/kg/day"},
              {text:"Max enteral feeding volume up to 80 mL/kg/day while on ECMO"},
              {text:"Goal is to use maternal breast milk; if not available, utilize Good Start or Similac total comfort (whey based) "},
            ]},

          ]}
        ]}
      ]},
      {name:"INFECTIOUS DISEASE",
      subPages:[]},
      {name:"HEMATOLOGY",
      subPages:[]},
      {name:"NEURO/PAIN",
      subPages:[
        {name:"pain algorithm",
        data:[{text:"pain algorithm"}]}
      ]},
      {name:"OTHER",
      subPages:[
        {name:"Troubleshooting",
        data:[{text:"Call for ECMO escalation huddle"}]}
      ]} ,
      {name:"CDH REPAIR ON ECMO",
      subPages:[
        {name:"repair",
        data:[
          {text:"Repair within 24-48 hours on ECMO",
          sub:[
            {text:"Coagulopathy resolved"},
            {text:"Cardiac function ??"},
          ]},
          
        ]},
        {name:"PATIENT & ROOM PREPARATION",
        data:[]},
        {name:"ORDERS",
        data:[
          {text:"Medications",
          sub:[
            {text:"Per anesthesia"}
          ]}
        ]}
      ]},
      {name:"ECMO WEAN/TAPER",
      subPages:[
        {name:"WEAN",
        data:[
          {text:"PaO2 greater than 100 mmHg on current level support wean support by 10 ml/kg"},
          {text:"Persistent left to right across PDA with ECMO weans- stop PGE"},
        ]},
        {name:"PREREQUISITES FOR SEPARATION TRIAL",
        data:[
          {text:"Acceptable chest x-ray without significant air space disease or effusions"},
          {text:"Adequate lung recruitment on CMV 20-23/5, RR 40, iTime 0.5, FiO2 40-50%."},
          {text:"Assess compliance by looking at the relative change in tidal volume for a change in pressure on the ventilator.",
          sub:[
            {text:"If unable to achieve above parameters",
            sub:[
              {text:"Give more time on ECMO to establish optimal lung compliance"},
              {text:"Ensure adequate diuresis, pulmonary toilet with position changes and decreased sedation"},
              {text:"Assess reasons for poor lung compliance:"},
              {text:"Over circulation and pulmonary edema across a persistent ductus arteriosus. "},
              {text:"Infection – send a tracheal aspirate"},
              {text:"Airways disease – consider bronchoscopy to assess for central airways malacia"},
              {text:"Lung inflammation – consider a dexamethasone burst, 0.2 mg/kg x 1 dose, followed by 0.1 mg/kg q 12 x 6 doses"},
              {text:"More time"},
            ]}
          ]},
        ]},
        {name:"SEPARATION TRIAL",
        data:[
          {text:"Consider trial when PaO2 >100 mmHg on 80 mL/kg flow"},
          {text:"Trial process",
          sub:[
            {text:"Reduce flow to 50 mL/kg for five minutes"},
            {text:"Obtain baseline ECHO and ABG",
            sub:[
              {text:"Successful wean:"},
              {text:"PaO2 > 60 mmHg in 60% FiO2"},
              {text:"Right and left ventricular function are normal"},
              {text:"Left to right atrial level shunt "},
              {text:"Right to left PDA shunt not a prerequisite to decannulate especially in the setting of CDH -- If above are achieved proceed to low flow trial"},
              {text:""},
              {text:"Unsuccessful wean:"},
              {text:"Return to previous flow"}
            ]},
          ]},
        ]},
        {name:"LOW FLOW TRIAL",
        data:[
          {text:"Medications",
          sub:[
            {text:"Heparin 25 units/kg PRN x 2 Stagnant blood flow results in rapid cleavage of bivalirudin (blood protease degradation) and can result in thrombus formation in the circuit when on low flow."},
            {text:"Administer circuit heparin 25 unit/kg bolus to achieve an increase of 20 seconds in ACT from baseline prior to low flow ECMO trial Check ACT q10 minutes, repeat heparin 25 unit/kg bolus when ACT back to baseline"}
          ]},
          {text:"Ventilation",
          sub:[
            {text:"PC/AC PIP 23, PEEP 5, RR 60, iTime 0.35, FiO2 60%."}
          ]},
          {text:"Trial process",
          sub:[
            {text:"20 ml total flow"},
            {text:"Maintain Sweep, CO2"},
            {text:"Obtain ECHO and ABG"},
            {text:"Increase FiO2 to 100% on ventilator"},
            {text:"Obtain ABG"},
            {text:"Degas circuit and wait 5 minutes"},
            {text:"Repeat ABG"},
          ]},
          {text:"Successful",
          sub:[
            {text:"PaO2 > 60 mmHg in 60% FiO2"},
            {text:"PaO2 increases above 120 mmHg in 100% FiO2"},
            {text:"PaCO2 45-55 mmHg on PC/AC 23/5 PIP, RR 60 "},
            {text:"Stable Hemodynamics - no pressors support support on low flow"},
            {text:"Right and left ventricular function are normal"},
            {text:"Left to right atrial level shunt "},
            {text:"Right to left/bidirectional PDA shunt not a prerequisite to decannulate especially in the setting of CDH"},
          ]}
        ]},
      ]},
      {name:'DECANNULATION',
      subPages:[
        {name:"DECANNULATION CHECKLIST",
        data:[
          {text:"Medications",
          sub:[
            {text:"Fentanyl 5 mg/kg x 2 5 minutes apart and Rocuronium 1 mg/kg x 2 5 minutes apart"},
            {text:"Consider Ativan for vital sign changes following surgical incision"},
            {text:"Consider addition Fentanyl 5 mcg/kg x1 for vital sign changes"},
            {text:"Dwindle Epinephrine x 2 syringes"},
            {text:"Dopamine Infusion at 5 mcg/kg/minute, start 30 minutes prior to decannulation"},
            {text:"Epinephrine in line but not started"},
          ]},
          {text:"Ventilator Settings",
          sub:[
            {text:"Pressure mode, PC/AC PIP 23, PEEP 5, rate of 60, itime 0.35, FiO2 60%."}
          ]},
          {text:"Emergency Blood",
          sub:[
            {text:"1 Unit pRBCs, 1 Unit FFP in cooler  on standby"}
          ]},
          {text:"Decannulation Procedure",
          sub:[
            {text:"Surgeon to clamp on the field"},
            {text:"ECMO specialist to clamp venous and arterial limbs of the circuit."},
          ]}
        ]},
        {name:"Plan to separate without cannula removal",
        data:[]},
        {name:"ORDERS",
        data:[
          {text:"If bag suctioning was previously ordered, ensure to discontinue order"},
          {text:"Medications",
          sub:[
            {text:"Dwindle Epinephrine x 2 syringes"},
            {text:"Dopamine Infusion at 5 mcg/kg/minute, start 30 minutes prior to decannulation"},
            {text:"Epinephrine in line but not started"},
          ]},
        ]},
        {name:"PATIENT & ROOM PREPARATION",
        data:[
          {text:"Patient Position",
          sub:[
            {text:"Open warmer with side rails down"},
            {text:"Head turned to left"},
            {text:"Roll under shoulders with neck extended"},
          ]},
          {text:"Ventilator position",
          sub:[{text:"Left side at foot of bed"}]
          },
          {text:"Clear space at head of bed",}
        ]},
        {name:"ORDERS",
        data:[
          {text:"If bag suctioning was previously ordered, ensure to discontinue order"},
          {text:"Medications",
          sub:[
            {text:"Fentanyl 5 mg/kg x 2 5 minutes apart and Rocuronium 1 mg/kg x 2 5 minutes apart",
            sub:[
              {text:"Consider Ativan for vital sign changes following surgical incision"},
              {text:"Consider addition Fentanyl 5 mcg/kg x1 for vital sign changes"},
              {text:"Dwindle Epinephrine x 2 syringes"},
              {text:"Dopamine Infusion at 5 mcg/kg/minute, start 30 minutes prior to decannulation"},
              {text:"Epinephrine in line but not started"},
            ]}
          ]},
          {text:"Ventilator Settings",
          sub:[
            {text:"Pressure mode, PC/AC PIP 23, PEEP 5, rate of 60, itime 0.35, FiO2 60%."}
          ]},
          {text:"Emergency Blood",
          sub:[
            {text:"1 Unit pRBCs, 1 Unit FFP in cooler  on standby"}
          ]}
        ]},
        {name:"DECANNULATION PROCEDURE",
        data:[
          {text:"Surgeon to clamp on the field"},
          {text:"ECMO specialist to clamp venous and arterial limbs of the circuit."},
        ]},
        {name:"SEPARATION",
      data:[]},
        {name:"CANNULA REMOVAL",
        data:[]}

      ]},
      {name:"APPENDIX",
      subPages:[
        {name:"DECANNULATION CHECKLIST",
        data:[
          {text:"Medications",
          sub:[
            {text:"Fentanyl 5 mg/kg x 2 5 minutes apart and Rocuronium 1 mg/kg x 2 5 minutes apart"},
            {text:"Consider Ativan for vital sign changes following surgical incision"},
            {text:"Consider addition Fentanyl 5 mcg/kg x1 for vital sign changes"},
            {text:"Dwindle Epinephrine x 2 syringes"},
            {text:"Dopamine Infusion at 5 mcg/kg/minute, start 30 minutes prior to decannulation"},
            {text:"Epinephrine in line but not started"},
          ]},
          {text:"Ventilator Settings",
          sub:[
            {text:"Pressure mode, PC/AC PIP 23, PEEP 5, rate of 60, itime 0.35, FiO2 60%."}
          ]},
          {text:"Emergency Blood",
          sub:[
            {text:"1 Unit pRBCs, 1 Unit FFP in cooler  on standby"}
          ]},
          {text:"Decannulation Procedure",
          sub:[
            {text:"Surgeon to clamp on the field"},
            {text:"ECMO specialist to clamp venous and arterial limbs of the circuit."},
          ]}
        ]}
      ]}
    ]
  }
];
export default Crit;