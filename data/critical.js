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
            name: "Conventional Mechanical Ventilation (CMV) Settings",
            data: [
              {
                text: "intubate- ventilation via neopuff with transition to CMV once HR is stable. Initial ventilator settings and range based on prenatal severity profile",
                sub: [
                  { text: "Do not inflate cuff of cuffed ETT" },
                  { text: "Appropriate ETT placement is T2 on x-ray" },
                ],
              },
              {
                text: "Mode: AC/PC",
                sub: [
                  {
                    text: "Mild: 20/5 (PIP not to exceed 25), RR 60 (up to 80), FiO2 50%",
                  },
                  {
                    text: "Moderate: 23/4 (PIP not to exceed 25), RR 80, FiO2 100%",
                  },
                  {
                    text: "Severe: 23/4 PIP (not to exceed 25), RR 80, FiO2 100%",
                    sub: [
                      { text: "1) Adjust iTime to maintain I:E 1:2 (0.2-0.5)" },
                      { text: "2) iTime Calculation: 60/RR/3= iTime " },
                    ],
                  },
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
              {
                text: "Persistent respiratory acidosis (pH <7.2, CO2 >65, Base deficit less than -6); not seeing consecutive improvement on ABGs",
              },
              { text: "Cerebral NIRS < 70" },
              { text: "Preductal saturations < 85%" },
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
              { text:"Percent predicted lung volume (PPLV) < 15%" },
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
                text: "Target mean arterial blood pressure (MAP)",
                sub: [
                  {
                    text: "Mild: 40-45 mmHg",
                  },
                  {text:"Moderate-Severe: 45 to 55 mmHg",sub:[{text:"If pulse pressure <15 mmHg target systolic BP 60-70 mmHg"}]},
                ],
              },
              {
                text: "Send cortisol level",
                sub: [{ text: "Administer hydrocortisone 2 mg/kg IV once (see CV section below for subsequent hydrocortisone utilization)" }],
              },
            ],
          },
          {
            name: "Hypovolemia/Hypotension",
            data: [
              {
                text: "Infant born depressed, poorly perfused, or hypotensive: administer NS bolus 5mL/kg. Repeat x 1 if necessary",
              },
              {
                text: "If positive response to NS bolus, repeat in 5 ml/kg aliquots (max x4), stop if response to fluid is lost.",
              },
              {
                text: "If greater than 20 mL/kg of normal saline utilized and still fluid responsive, utilize dwindle dose epinephrine, to limit fluid administration.",
              },
            ],
          },
          {
            name: "Persistent Hypotension",
            header: "If no response to NS bolus or persistent hypotension:",
            data: [
              {
                text: "1st line: Epinephrine at 0.1 mcg/kg/min",
                sub: [
                  {
                    text: "1) Titrate by 0.02 mcg/kg/min every 5 minutes to a max of 0.5 mcg/kg/min",
                  },
                ],
              },
              {
                text: "2nd line: Dopamine at 5 mcg/kg/min",
                sub: [
                  {
                    text: "1) Titrate by 2mcg/kg/min to max of 20 mcg/kg/min.",
                  },
                  {
                    text: "2) Order the 3rd line when Dopamine at 15 mcg/kg/min.",
                  },
                ],
              },
              {
                text: "3rd line: Vasopressin at 0.0005 units/kg/min",
                sub: [
                  { text: "Titrate by 0.0005 units/kg/min - to max ___" },
                  {
                    text: "Consider adding sooner for brisk urine output and is fluid responsive.",
                  },
                ],
              },
              {
                text: "Hydrocortisone:",
                sub: [
                  {
                    text: "Administer 2 mg/kg IV after trough obtained and assess need for vasopressor support. If no vasopressors, hold scheduled hydrocortisone.",
                  },
                  {
                    text: "If requiring vasopressors and cortisol level < 15, schedule 2 mg/kg every 8 hours with max 2 mg/kg every 6 hours.",
                  },
                  {
                    text: "If requiring vasopressors and cortisol level > 15, schedule 1 mg/kg every 8 hours.",
                  },
                  {
                    text: "Check PRN trough cortisol level and adjust dosing accordingly. ",
                  },
                  {
                    text: "All patients increase to 2 mg/kg prior to surgery for 24 hours.",
                  },
                ],
              },
            ],
          },
          {
            name: "Pulmonary Hypertension",
            data: [
              {
                text: "Preductal SaO2 >85%: HOLD iNO treatment and evaluate necessity with admission echo",
              },
              {
                text: "Preductal SaO2 < 85% with adequate ventilation and pH >7.2",
                sub: [
                  {
                    text: "Obtain echocardiogram in delivery room  if stable",
                  },
                  {text:"If unstable, start iNO at 5 ppm, up titrate to 20 ppm to achieve preductal saturations and obtain echocardiogram"}
                ],
              },
            ],
          },
        ],
      },
      {
        name: "F.E.N.G",
        subPages: [
          {
            name: "Access",
            header: "Place double lumen UVC & UAC",
            data: [{ text: "Right Saphenous PICC if UVC non-centra" }],
          },
          {
            name: "GI",
            header: "Place anderson tube to continuous drainage",
            data: [
              {
                text: "If Anderson not available, utilize Replogle 10fr to low-intermittent suction",
              },
            ],
          },
          {
            name: "Fluids",
            data: [
              { text: "80 mL/kg/day (Include all drips) with starter TPN." },
              {
                text: "NaAC via arterial line",
                sub: [
                  {
                    text: "Consider adding papaverine to PAL if spasming (can only be used with NaCl)",
                  },
                ],
              },
            ],
          },
          {
            name: "Electrolytes",
            data: [
              {
                text: "Treat metabolic acidosis (pH < 7.2 and/or base deficit greater than -6) with NaHCO3 2mEq/kg dosing regardless of respiratory acidosis.",
              },
              { text: "Treat iCal < 1.2 with CaCl 20 mg/kg" },
            ],
          },
        ],
      },
      {
        name: "Infectious Disease",
        subPages: [
          {
            name: "Infectious Disease",
            data: [
              {
                text: "Assess risk for infection, if elective delivery (induction or C/S) hold antibiotics",
              },
              {
                text: "48 hour rule-out sepsis if prolonged rupture of membranes, preterm delivery or fetal intervention (FETO).",
              },
              {
                text: "Amp/Gent as rule-out medications unless maternal infection indicates a need for a different regimen.",
                sub: [{ text: "Consider Ceftazidime for renal protection" }],
              },
            ],
          },
        ],
      },
      {
        name: "Hematology",
        subPages: [
          {
            name: "Hematology",
            data: [
              { text: "Administer Vitamin K if not given in delivery room" },
              { text: "Newborn workup on all patients" },
              { text: "Obtain blood consent on all patients" },
            ],
          },
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
        name: "criteria for CDH repair",
        subPages: [
          {
            name: "Respitory",
            data: [{ text: "Vent RR < 60bpm" }, { text: "FiO2 <60%" }],
          },
          {
            name: "Cardiovascular",
            data: [
              {
                text: "Systemic or subsystemic by TR jet or PDA shunt",
                sub: [
                  { text: "If systemic with restrictive PDA, consider PGE" },
                ],
              },
              {
                text: "Inotropic support: Dopamine < 10 mcg/kg/min and epinephrine < 0.15 mcg/kg/min",
              },
            ],
          },
        ],
      },
      {
        name: "Respiratory",
        subPages: [
          {
            name: "CMV Settings",
            header: "Ventilation via pressure with Servo ventilator",
            data: [
              {
                text: "Mode: SIMV-PC for RR <60 or PC/AC for RR >60",
                sub: [
                  {
                    text: "Mild: 20/5 (PIP not to exceed 25), RR 60 (up to 80), PS 10 (8-12), FiO2 50%",
                  },
                  {
                    text: "Moderate: 23/4 (PIP not to exceed 25), RR 80, PS 12 (8-15), FiO2 100%",
                  },
                  {
                    text: "Severe: 23/4 PIP (not to exceed 25), RR 80, PS 15 (10-15) FiO2 100%",
                    sub: [
                      { text: "Adjust iTime to maintain I:E 1:2 (0.25-0.5)" },
                      { text: "iTime Calculation: 60/RR/3= iTime" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "CMV Goals",
            data: [
              { text: "Preductal oxygen sats 85-95% preductal PaO2 > 55 mmHg" },
              { text: "Minute ventilation greater than 0.6" },
              { text: "PaCO2 45-55 mmHg" },
              { text: "pH ≥ 7.2" },
              {
                text: "tolerate preductal sat > 85%, postductal >70% if perfusion satisfactory, non-acidotic and lactic acid not increasing",
              },
              { text: "Cerebral NIRS greater than 70" },
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
                text: "Persistent respiratory acidosis at 1 hour (pH <7.2, CO2 >65, BE < than -6)",
              },
              { text: "Cerebral NIRS < 70" },
              {
                text: "Severe respiratory distress - unable to capture with CMV",
              },
            ],
          },
          {
            name: "Weaning from HFOV to CMV",
            data: [
              {
                text: "Once stable with adequate CO2 and stable FiO2 begin weaning HFOV stepwise to goal MAP 12-14, AMP < 36, Hz ≥ 8",
              },
            ],
          },
          {
            name: "Criteria for Weaning CMV",
            data: [{ text: "PaCO2 < 45mmHg" }],
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
                text: "Goal mean arterial blood pressure (MAP) 40-45 mmHg for 1st 24 hours. ",
              },
              { text: "After 24 hours goal MAP 45-50 mmHg" },
              {
                text: "If pulse pressure is <15 mmHg target systolic BP 60-70 mmHg",
              },
            ],
          },
          {
            name: "Hypovolemia/Hypotension",
            data: [
              { text: "If fluid responsive, utilize low dose epinephrine." },
              { text: "Proceed to inotropic management below" },
            ],
          },
          {
            name: "Persistent Hypotension",
            header: "If no response to NS bolus or persistent hypotension",
            data: [
              {
                text: "1st line: Epinephrine at 0.05 mcg/kg/min",
                sub: [
                  {
                    text: "Titrate by 0.02 mcg/kg/min to a max of 0.5 mcg/kg/min",
                  },
                ],
              },
            ],
          },
          {
            name: "Hydrocortisone",
            data: [
              {
                text: "Administer 2 mg/kg IV after trough obtained. Assess need for vasopressor support. If no vasopressors, hold scheduled hydrocortisone.",
              },
              {
                text: "If requiring vasopressors and cortisol level < 15, schedule 2 mg/kg every 8 hours with max 2 mg/kg Q6h",
              },
              {
                text: "If requiring vasopressors and cortisol level > 15, schedule 1 mg/kg every 8 hours",
              },
              {
                text: "Check pm peak and trough cortisol level and adjust dosing accordingly.",
              },
              {
                text: "All patients increase to 2 mg/kg prior to surgery for 24 hours",
              },
            ],
          },
          {
            name: "Pulmonary Hypertension",
            data: [
              { text: "Obtain ECHO on admission to NICU, day prior to repair" },
              {
                text: "ECHO to assess",
                sub: [
                  {
                    text: "Anatomy, LV + RV function, estimate RV pressure if TR jet is present, assess ductal shunting, septal flattening and atrial level shunt",
                  },
                ],
              },
              {
                text: "Atrial shunting right to left or bidirectional and FiO2 > 60%",
                sub: [
                  {
                    text: "Start iNO at 5 ppm and titrate up to 20 ppm to allow weaning of oxygen to a goal of < 60%",
                  },
                ],
              },
              {
                text: "Atrial level shunting left to right",
                sub: [
                  { text: "Withhold iN" },
                  {
                    text: "Initiate only for episodes of preductal desaturation with echo evidence of bidirectional or right to left atrial level shunt",
                  },
                ],
              },
              {
                text: "Decreased RV function",
                sub: [{ text: "Initiate iNO at 20 ppm" }],
              },
              {
                text: "Indication to initiate PGE",
                sub: [
                  {
                    text: "PDA shunt right to left or bidirectional in Moderate/Severe CDH profile.",
                  },
                  {
                    text: "Persistent right to left atrial level shunt on iNO",
                  },
                  {
                    text: "Consider stopping PGE with signs of overcirculation",
                  },
                ],
              },
              {
                text: "Indications to initiate PGE + Milrinone",
                sub: [
                  {
                    text: "Decreased LV function with constricted ductus and right to left flow initiate",
                  },
                  { text: "Decreased RV function with constricted ductus" },
                  {
                    text: "PGE at 0.05 mcg/kg/min and milrinone at 0.5 mcg/kg/min",
                  },
                ],
              },
              {
                text: "Indications to initiate Milrinone + Epinephrine",
                sub: [
                  { text: "Mod-Severe decreased LV function" },
                  {
                    text: "Milrinone at 0.5 mcg/kg/min and Epinephrine at 0.05 mcg/kg/min",
                  },
                ],
              },
            ],
          },
          {
            name: "Refractory Pulmonary Hypertension",
            data: [
              {
                text: "If left to right PFO shunt is present: start Milrinone if not started already",
              },
              {
                text: "Persistent R or L shunting at the PFO consider the following additional options:",
              },
              {
                text: "If there is lack of recruitment limiting delivery of iNO, optimize vent settings as able",
              },
              {
                text: "If adequate lung recruitment and PDA restrictive start PGE at 0.05 mcg/kg/min.",
              },
              {
                text: "Consider IV sildenafil at 0.067 mg/kg/hour without bolus",
              },
              {
                text: "Greater than 48 hours and normal LV function start iNO at 20 ppm",
              },
            ],
          },
        ],
      },
      {
        name: "F.E.N.G",
        subPages: [
          {
            name: "IV Fluids",
            data: [
              {
                text: "Begin total fluids at 80 mL/kg/day (Include all drips) with TPN. Keep total fluids 80 mL/kg/day until repair.",
              },
              {
                text: "Utilize NaAC via arterial line",
                sub: [
                  {
                    text: "Consider adding papaverine to PAL if spasming (can only be used with NaCl)",
                  },
                ],
              },
            ],
          },
          {
            name: "Gastrointestinal",
            data: [
              {
                text: "Anderson tube to continuous suction (Or Replogle 10fr to low-intermittent suction)",
              },
              {
                text: "Remove OGT from mouth Q4h and rinse in sterile water then replace to ensure patency.",
              },
            ],
          },
          {
            name: "Electrolytes (during acute phase)",
            data: [
              {
                text: "Treat metabolic acidosis (pH < 7.2 and/or base deficit greater than -6) with sodium bicarbonate 2mEq/kg dosing regardless of respiratory acidosis.",
              },
              { text: "Goal iCa >1.2 mg/dL, Mg >2 mEq/L, K >3.4 mEq/L" },
            ],
          },
          {
            name: "Lab Schedule",
            data: [
              { text: "QD RFP until stable" },
              { text: "PRN Mag, Lytes, iCal to be obtained after repletion" },
              { text: "QMon CMP, Mag, Phos," },
            ],
          },
          {
            name: "TPN Goals",
            data: [
              { text: "Protein-: 3-3.5 g/kg AA" },
              { text: "GIR 12 with goal glucose 60-150 mg/dL" },
              {
                text: "IL-: Initiate at 2 g/kg/day and increase to goal 3 g/kg/day on DOL 2",
                sub: [
                  {
                    text: "Consider SMOF if not able to start feeds by 2 weeks",
                  },
                ],
              },
              { text: "Add levocarnitine at 7 days if still NPO" },
              {
                text: "Famotidine 0.5 mg/kg in TPN (Check compatibility with IV medications/drips)",
                sub: [
                  { text: "Transition to enteral once to tolerating feeds" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Infectious Disease",
        subPages: [
          {
            name: "Infectious Disease",
            data: [
              {
                text: "Periop antibiotics",
                sub: [{ text: "Ancef 50 mg/kg (prior to incision)" }],
              },
            ],
          },
        ],
      },
      {
        name: "Hematology",
        subPages: [
          {
            name: "Hematology",
            data: [
              { text: "CBC & Coag panel 6 hours after admit" },
              {
                text: "Lab goals for non-ECMO patients",
                data: [
                  { text: "Hct >35" },
                  { text: "Platelets > 50" },
                  { text: "PT< 18" },
                  { text: "Fibrinogen > 150" },
                ],
              },
              { text: "Monitor for jaundice and treat as appropriate" },
              { text: "Monitor HCT weekly until stable" },
            ],
          },
        ],
      },
      {
        name: "Neuro/Pain",
        subPages: [
          { name: "Neuro/Pain", data: [{ text: "CDH Pain Algorithm" }] },
        ],
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
          {
            name: "Weaning phase from CMV s/p CDH rep",
            data: [
              {
                text: "Aim for pCO2 50-65 mmHg; allowing for permissive [hypercapnia as long as the infant is not sensitive to changes in pCO2 (ie pH remains >7.2)",
              },
              {
                text: "Standard wean plan: ABG Q8h: 0600, 1400, & 2200",
                sub: [{ text: "Wean RR by 4 for PaCO2 less than 55." }],
              },
              {
                text: "Slow wean plans: ABG Q12h 0600 & 1800",
                sub: [{ text: "Wean RR by 2 for PaCO2 less than 55." }],
              },
              {
                text: "Extubation goal settings: Rate 15, PIP 20, PEEP 5, PS 8-10",
              },
              {
                text: "Obtain ECHO prior to extubation to eval tolerance of decreased iNO delivery following extubation. Obtain ECHO on 20 ppm and 10 ppm",
              },
            ],
          },
          {
            name: "Extubation",
            data: [
              { text: "Mild: CPAP 6 cm H20 via flexitrunk and double iNO" },
              {
                text: "Moderate-Severe: CPAP 8-10 cm H20 via flexitrunk and double iNO",
                sub: [{ text: "Maintain minimum FiO2 30% for all CDH." }],
              },
              {
                text: "“Successful Extubation”: comfortable next morning?",
                sub: [{ text: "Discontinue ABGs, NIRS, and UAC/PAL." }],
              },
            ],
          },
          {
            name: "CPAP Weaning",
            data: [
              {
                text: "CPAP weaning readiness",
                sub: [
                  { text: "FiO2 consistently < 50%" },
                  { text: "TCM < 60 mmHg." },
                  {
                    text: "Tolerate RR 50-80s with preductal goal O2 sat >95%.",
                  },
                ],
              },
              {
                text: "Mild: Wean to goal of 5, then transition to HFNC 5L and continue wean",
              },
              {
                text: "Moderate: Wean by 1 Q2-4 days to goal 5 then transition to HFNC 5L & continue wean",
              },
              {
                text: "Severe: Wean by 1 QWk or Twice Weekly to goal 5 then transition to HFNC 5L and continue wean frequency.",
              },
            ],
          },
          {
            name: "Other",
            data: [
              { text: "All CDH should remain on minimum wall O2 25cc" },
              { text: "X-rays after extubation QMo/Th with CBG." },
              { text: "X-rays after wean to NC QMonday with CBG" },
              {
                text: "PaCO2 > 65 mmHg resume prior level of respiratory support and follow up in 4-7d with CXR/CBG",
              },
              {
                text: "Infant who is still mechanically ventilated at 4 weeks of life, consult pulmonary and perform bronchoscopy",
              },
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
                text: "Goal mean arterial blood pressure (MAP) 40-45 mmHg for 1st 24 hours. ",
              },
              { text: "After 24 hours goal MAP 45-50 mmHg" },
              {
                text: "If pulse pressure is <15 mmHg target systolic BP 60-70 mmHg",
              },
            ],
          },
          {
            name: "Pulmonary Hypertension",
            data: [
              {
                text: "Sildenafil Indications",
                sub: [
                  { text: "Remains dependent on iNO at 3 weeks of life" },
                  { text: "Supra-systemic PA pressure despite iNO therapy" },
                  {
                    text: "> 3 weeks of age & ready to extubate with greater than ½ systemic PA pressure or increased reactivity with iNO wean from 20 ppm to 10 ppm",
                  },
                  {
                    text: "Test dose of PO sildenafil 0.25 mg/kg/dose",
                    sub: [
                      {
                        text: "If tolerated, increase to 0.5 mg/kg/dose and then 1mg/kg/dose every 8 hours.",
                      },
                    ],
                  },
                  {
                    text: "Obtain echo and if unable to wean off iNO or greater than ¾ systemic on iNO, increase slowly in 0.5 mg/kg increments to 2 mg/kg/dose",
                  },
                  {
                    text: "In a patient on IV sildenafil, transition IV to PO sildenafil when taking greater than 60ml/kg of feeds.",
                  },
                  {
                    text: "Give 1 mg/kg dose and post administration wean the IV sildenafil by 50%. 8 hours later administer 1 mg/kg of PO sildenafil and stop the IV sildenafil",
                  },
                ],
              },
              {
                text: "iNO Weaning",
                sub: [
                  {
                    text: "Perform baseline echo when ready to wean on 20 ppm and 10 ppm",
                  },
                  {
                    text: "If no reactivity noted and ready to extubate, extubate to 20 ppm non-invasive iNO",
                  },
                  { text: "If not ready to extubate then no iNO weaning" },
                  {
                    text: "If echo is stable wean iNO off slowly in 1 ppm increments Q12h and obtain and echo once off iNO for 4-6 hours",
                  },
                  {
                    text: "Restart or increase iNO if greater than ½ systemic PA pressure by TR jet or if moderate or severe septal flattening is present.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "F.E.N.G",
        subPages: [
          {
            name: "Total Fluids",
            data: [
              {
                text: "Day of repair: Increase total fluids by 30-50 mL/kg over 12-24 hours using Plasma-lyte until euvolemic..",
                sub: [
                  {
                    text: "Monitor urine output and BP to adjust TF overnight.",
                  },
                ],
              },
              {
                text: "Day after repair: Return TF goal to 80-120 mL/kg/day including all drips",
              },
              {
                text: "48 hours post-repair: Monitor fluid balance/weight",
                sub: [
                  {
                    text: "Consider Lasix 1 mg/kg IV as spot dose for evidence of fluid overload",
                    sub: [
                      {
                        text: "If diuretic responsive, may consider scheduling depending on fluid status",
                      },
                    ],
                  },
                ],
              },
              { text: "Titrate fluids as needed to max 120 mL/kg/day." },
              {
                text: "Continue to optimize TPN as able within fluid allowance",
              },
              {
                text: "When feeds are added in, maintain TF goal ≤ 130-140 mL/kg/day.",
              },
            ],
          },
          {
            name: "GI",
            data: [
              {
                text: "Anderson tube to continuous suction (Or Replogle 10fr to low-intermittent suction)",
              },
              { text: "Routine interventions to maintain patency" },
            ],
          },
          {
            name: "Enteral Feeding Guidelines",
            data: [
              {
                text: "Initiate feeding on return of bowel function (usually 48 hours post-surgery) or when hemodynamically stable (less than 5 mcg/kg/min dopamine).",
                sub: [
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
              {
                text: "Transition from H2 blocker to oral PPI when tolerating 60ml/kg/day of feeding",
                sub: [
                  {
                    text: "Ensure treatment adequacy with gastric pH after 72 hours; goal gastric pH >",
                  },
                ],
              },
              { text: "Tolerance of feeds considered 3 or less emesis daily." },
              {
                text: "Mild:",
                sub: [
                  { text: "Route- Nasogastric" },
                  { text: "Initiate bolus gastric feeds at 20 ml/kg/day." },
                  {
                    text: "Fortify daily once above trophics to goal of 24 kcal/oz",
                  },
                  { text: "Advance by up to 30 mL/kg/day daily as tolerated." },
                  {
                    text: "Goal 140 mL/kg/day of 24-26 kcal/oz for targeted 110-120 kcal/kg/day",
                  },
                  {
                    text: "Intolerance",
                    sub: [
                      { text: "Step 1: Continuous feeds" },
                      { text: "Step 2: TP feeds" },
                      { text: "May need NGT to vent" },
                    ],
                  },
                ],
              },
              {
                text: "Moderate-Severe CDH:",
                sub: [
                  { text: "For Severe: Route- TP placed at time of surgery" },
                  {
                    text: "Initiate continuous feeds at 20 mL/kg/day via TP tube.",
                  },
                  {
                    text: "Fortify by 2 kcal/oz daily once above trophics to goal of 26 kcal/oz",
                  },
                  { text: "Advance by 20 mL/kg/day" },
                  {
                    text: "Goal 140 mL/kg/day of 24-26 kcal/oz for targeted 120 kcal/kg/day",
                  },
                  {
                    text: "Additional liquid protein can be added once above trophics ",
                  },
                  {
                    text: "Intolerance",
                    sub: [
                      { text: "May need NGT to vent" },
                      {
                        text: "Hold at previously tolerated volume and consider supplemental TPN/IL to meet estimated nutrient needs",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Fortification",
                sub: [
                  {
                    text: "Term infants- Consider Ffortifyying with whey based formula",
                    sub: [
                      {
                        text: "May need to trial extensively hydrolyzed formula if patient has continued feeding intolerance or patient is cholestatic",
                      },
                      {
                        text: "Change to low LCT formula if patient develops chylothorax",
                      },
                    ],
                  },
                  {
                    text: "Preterm infants ≤ 36 weeks amd < 3.5 kg utilize HMF",
                  },
                  {
                    text: "Consider increased caloric density for suboptimal growth",
                  },
                ],
              },
              {
                text: "High risk patient population for growth failure",
                sub: [
                  {
                    text: "Growth Goals",
                    sub: [
                      { text: "AGA, Term infants- Gain 25 to 40 g/day" },
                      {
                        text: "Premature infants < 2 kg- Gain 18 to 20 g/kg/day",
                      },
                      {
                        text: "Maintain growth percentile within 10-15% if born AGA",
                      },
                    ],
                  },
                  {
                    text: "Critical points of assessment",
                    sub: [
                      { text: "Transition to full feedings off of TPN" },
                      { text: "Changes in respiratory support" },
                    ],
                  },
                  {
                    text: "Intervention for growth failure",
                    sub: [
                      { text: "Evaluate respiratory support" },
                      {
                        text: "Advance to 26-27 kcal/oz maintaining 140 mL/kg/day prior to advancing total fluids",
                      },
                      {
                        text: "Next, advance by 10 mL/kg/day increments to max 160 mL/kg/day -- Consider Lasix to avoid fluid overload",
                      },
                      {
                        text: "Consider transitioning to gastric feeds for TP fed infants to optimize growth",
                      },
                      {
                        text: "If caloric density and/or feeding volumes are limited secondary to patient status and the patient is unable to meet nutritional needs for ≥48 hours, may need to decrease feed volumes to allow for at least 40-60 mL/kg of TPN until enteral feedings can be advanced to goal",
                      },
                      {
                        text: "Assess sodium status by obtaining serum and urine sodium levels. -- Serum Na <135 mg/dL and/or uNa <20-30 mmol/L- consider Sodium supplementation (uNa may not be beneficial in the setting of diuretic use)",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Transition from TP to gastric",
                sub: [
                  {
                    text: "After infant demonstrates 1 week of steady weight gain on full feedings of and has weaned to at least HFNC",
                  },
                  { text: "Maintain TP tube and place NGT." },
                  {
                    text: "Transition by 1⁄4 volume from TP to NG continuous every 1-2 days",
                  },
                  { text: "Attempt to consolidate feeds over 7-10 days" },
                  {
                    text: "If consolidation fails due to emesis, consider obtaining UGI using contrast to evaluate esophagus, stomach size, and degree of reflux.",
                    sub: [
                      {
                        text: "Following results of UGI consider nissen and tube.",
                      },
                    ],
                  },
                  {
                    text: "Once Nissen/GT scheduled remove TP tube and transition to continuous NG feeds (rule out TP tube as cause for emesis)",
                  },
                  { text: "May PO feed when on HFNC 4L or less" },
                  { text: "Obtain feeding and swallowing evaluation" },
                ],
              },
              {
                text: "Nissen/G-tube",
                sub: [
                  {
                    text: "If continuous NG feedings are not tolerated with TP tube out",
                  },
                  {
                    text: "If there is a failure to consolidate to q3 bolus feedings over 45 min within 30 days",
                  },
                  {
                    text: "Consider GT for inability to orally feed 6 weeks post-op",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Hematology",
        subPages: [
          {
            name: "Hematology",
            data: [
              {
                text: "CBC & Coags as appropriate",
                sub: [
                  {
                    text: "Lab goals for non-ECMO patients",
                    sub: [
                      { text: "Hct >35" },
                      { text: "Platelets > 50" },
                      { text: "PT< 18" },
                      { text: "Fibrinogen > 150" },
                    ],
                  },
                ],
              },
              { text: "Monitor for jaundice and treat as appropriate" },
              { text: "Monitor HCT weekly until stable" },
              { text: "Obtain Retic by 1mo age" },
            ],
          },
        ],
      },
      {
        name: "NEURO/PAIN",
        subPages: [{ name: "Reference NICU post-op pain guideline", data: [] }],
      },
    ],
  },
  // {
  //   name: "ECMO",
  //   icon: "air",
  //   color: "#91123C",
  //   subData: [
  //     { name: "Pre-Cannulation" },

  //     {
  //       name: "Immediate Post-Cannulation",
  //       subPages: [
  //         {
  //           name: "Pre",
  //           data: [
  //             {
  //               text: "Goal Parameters",
  //               sub: [
  //                 { text: "SVO2 75-85%" },
  //                 { text: "Preductal PaO2 60-80 mmHg" },
  //                 { text: "NIRS 70-85%" },
  //                 { text: "Lactate - down trending" },
  //                 { text: "FiO2 to maintain pump PaO2 100-120 mmHg" },
  //               ],
  //             },
  //             {
  //               text: "Increase flow in 10 mL/kg increments until goals are met",
  //             },
  //             {
  //               text: "Don't increase flow for pre/post splitting unless the above parameters are not met",
  //             },
  //             {
  //               text: "Obtain ECHO - cannula placement",
  //               sub: [
  //                 { text: "Venous cannula in RA at RA/IVC junction" },
  //                 {
  //                   text: "Arterial cannula - in carotid at junction of innominate artery and aortic arch",
  //                 },
  //               ],
  //             },
  //           ],
  //         },

  //         {
  //           name: "RESPIRATORY",
  //           data: [
  //             {
  //               text: "Ventilator Settings",
  //               sub: [
  //                 { text: "Discontinue iNO" },
  //                 { text: "If on HFOV transition to CMV (via SERVO) " },
  //                 {
  //                   text: "Ventilation via SIMV with Servo ventilator",
  //                 },
  //                 {
  //                   text: "20/5, RR 40, iTime 0.5, FiO2 40% (Caution for hyperventilation)",
  //                 },
  //               ],
  //             },

  //             {
  //               text: "Monitoring",
  //               sub: [
  //                 { text: "Obtain ABG as soon as possible after cannulation" },
  //                 {
  //                   text: "If unable to access patient sample may be obtained from the arterial line pressure transducer or the venous side of the ECMO circuit",
  //                 },
  //                 { text: "Chest x-ray" },
  //               ],
  //             },
  //           ],
  //         },

  //         {
  //           name: "CARDIOVASCULAR",
  //           data: [
  //             {
  //               text: "Blood Pressure",
  //               sub: [
  //                 {
  //                   text: "Goal mean arterial blood pressure (MAP) 45-50 mmHg",
  //                 },
  //                 {
  //                   text: "If pulse pressure <15 mmHg target systolic BP 60-70 mmHg",
  //                 },
  //                 { text: "Send cortisol level" },
  //               ],
  //             },
  //             {
  //               text: "Hypovolemia/Hypotension",
  //               sub: [
  //                 {
  //                   text: "Utilize blood products for replacement volume as labs indicate.",
  //                 },
  //                 { text: "PRBC 10-20 mL/kg" },
  //                 { text: "FFP 20-40 mL/kg" },
  //                 {
  //                   text: "If positive response to blood products, administer Normal Saline or 5% albumin (if available) in 10 mL/kg aliquots",
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Persistent Hypotension",
  //               sub: [
  //                 { text: "Start vasopressin at 0.0005, if not already on." },
  //                 { text: "Titrate by 0.0005 units/kg/min" },
  //                 {
  //                   text: "Administer 2 mg/kg hydrocortisone, if not already given",
  //                 },
  //                 { text: "Titrate vasopressors" },
  //                 {
  //                   text: "Titrate epinephrine by 0.02 mcg/kg/min every 5 minutes; max of 0.5 mcg/kg/min",
  //                 },
  //                 {
  //                   text: "Titrate dopamine by 2 mcg/kg/min; max of 20 mcg/kg/min",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "F.E.N.G",
  //           data: [
  //             {
  //               text: "Gastrointestinal",
  //               sub: [
  //                 { text: "NPO" },
  //                 { text: "Maintain 10fr decompression tube to suction" },
  //                 {
  //                   text: "Anderson to continuous suction or Replogle to low-intermittent suction.",
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Fluids",
  //               sub: [
  //                 { text: "80 mL/kg/day (Include all drips) with TPN. " },
  //                 { text: "NaAC via arterial line" },
  //                 { text: "Consider adding papaverine to PAL if spasming" },
  //               ],
  //             },
  //             {
  //               text: "Electrolyte goals",
  //               sub: [
  //                 {
  //                   text: "base deficit > -6, with Sodium bicarbonate 2 mEq/kg/dose",
  //                 },
  //                 { text: "iCa >1.2, treat with Calcium Chloride 20 mg/kg" },
  //                 { text: "Mg>2, treat with Magnesium Sulfate 50 mg/kg" },
  //                 { text: "K > 2.5 mmol/L, treat with KCl 1mEq/kg" },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "NEURO/PAIN",
  //           data: [
  //             {
  //               text: "CDH Agitation Algorithm (See non-ECMO CDH Guideline Appendix III)",
  //             },
  //           ],
  //         },
  //         {
  //           name: "HEMATOLOGY",
  //           data: [
  //             { text: "Obtain initial ECMO labs" },
  //             {
  //               text: "If ACT  <220 start bivalirudin infusion at 0.2 mg/kg/hr",
  //             },
  //             { text: "Determine bleeding risk (default low)" },
  //             { text: "Goal parameters and lab schedule per ECMO algorithms" },
  //             {
  //               text: "See link below- CHCO Guideline for ECMO Bivalirudin Anticoagulation",
  //             },
  //             {
  //               text: "https://childrenscolorado.sharepoint.com/sites/dept/ECMO/Documents/ECMO%20Website/CHCO%20Bivalirudin%20Anticoagulation%20Guideline%20for%20ECMO%2011-22.pdf",
  //             },
  //           ],
  //         },
  //       ],
  //     },

  //     {
  //       name: "Pre-CDH Repair Management",
  //       subPages: [
  //         {
  //           name: "RESPIRATORY",
  //           data: [
  //             {
  //               text: "Anticipate white out after going on ECMO with improvement 24-36 hr post-op along with spontaneous diuresis",
  //               sub: [
  //                 {
  //                   text: "Expect Vt to start showing on the vent 24-48 hr post cannulation",
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Ventilatory Settings",
  //               sub: [
  //                 { text: "Ventilation via SIMV with Servo ventilator" },
  //                 { text: "20/5, RR 40, iTime 0.5, FiO2 40%" },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "CARDIOVASCULAR",
  //           data: [
  //             {
  //               text: "Blood Pressure",
  //               sub: [
  //                 { text: "Goal mean arterial blood pressure 45-50 mmHg" },
  //                 { text: "See non - ECMO guideline for medications" },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "F.E.N.G",
  //           data: [
  //             {
  //               text: "Gastrointestinal",
  //               sub: [
  //                 { text: "NPO" },
  //                 {
  //                   text: "Maintain 10fr decompression tube to suction",
  //                   sub: [
  //                     {
  //                       text: "Anderson to continuous suction or Replogle to low-intermittent suction.",
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Fluids",
  //               sub: [
  //                 {
  //                   text: "Strict I & O with hourly documentation (foley, chest tubes, gastric tubes, & all intake)",
  //                 },
  //                 {
  //                   text: "Do not utilize fluid algorithm prior to CDH repair",
  //                 },
  //                 {
  //                   text: "Keep TF 80 mL/kg/day (Include all drips) with TPN. ",
  //                 },
  //                 {
  //                   text: "TPN goals",
  //                   sub: [
  //                     { text: "Protein- 3 to 3.5 g/kg AA " },
  //                     {
  //                       text: "GIR optimize as able with goal glucose 60-150 mg/dL",
  //                     },
  //                     { text: "IL optimize to goal 3 g/kg/day " },
  //                     { text: "Famotidine 0.5 mg/kg in TPN" },
  //                   ],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Electrolyte goals",
  //               sub: [
  //                 {
  //                   text: "Base deficit > -6, with Sodium bicarbonate 2 mEq/kg/dose",
  //                 },
  //                 { text: "iCa >1.2, treat with Calcium Chloride 20 mg/kg" },
  //                 { text: "Mg  >2, treat with Magnesium Sulfate 50 mg/kg" },
  //                 { text: "K > 2.5 mmol/L, treat with KCl 1mEq/kg" },
  //               ],
  //             },
  //             {
  //               text: "NEURO/PAIN",
  //               sub: [
  //                 {
  //                   text: "CDH Agitation Algorithm (See non-ECMO CDH Guideline Appendix III)",
  //                 },
  //               ],
  //             },
  //             {
  //               text: "HEMATOLOGY",
  //               sub: [
  //                 {
  //                   text: "Determine bleeding risk (default low)",
  //                   sub: [
  //                     {
  //                       text: "Goal parameters and lab schedule per ECMO algorithms",
  //                     },
  //                     {
  //                       text: "See link below- CHCO Guideline for ECMO Bivalirudin Anticoagulation",
  //                     },
  //                     {
  //                       text: "https://childrenscolorado.sharepoint.com/sites/dept/ECMO/Documents/ECMO%20Website/CHCO%20Bivalirudin%20Anticoagulation%20Guideline%20for%20ECMO%2011-22.pdf",
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "OTHER",
  //               sub: [
  //                 {
  //                   text: "Troubleshooting",
  //                   sub: [{ text: "Call for ECMO escalation huddle" }],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: "CDH Repair on ECMO",
  //       subPages: [
  //         {
  //           name: "ASSESSMENT",
  //           data: [
  //             {
  //               text: "Repair within 24-48 hours on ECMO; defer if coagulopathic or cardiac stun",
  //             },
  //             { text: "Anesthesia present for surgery" },
  //           ],
  //         },
  //         {
  //           name: "RESPIRATORY",
  //           data: [
  //             {
  //               text: "Ventilatory Settings",
  //               sub: [
  //                 {
  //                   text: "Ventilation via SIMV with Servo ventilator",
  //                   sub: [{ text: "20/5, RR 40, iTime 0.5, FiO2 40%." }],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "CARDIOVASCULAR",
  //           data: [{ text: "" }, { text: "" }],
  //         },
  //         {
  //           name: "F.E.N.G",
  //           data: [
  //             {
  //               text: "Gastrointestinal",
  //               sub: [
  //                 { text: "NPO" },
  //                 {
  //                   text: "Maintain 10fr decompression tube to suction",
  //                   sub: [
  //                     {
  //                       text: "Anderson to continuous suction, Replogle to low-intermittent suction",
  //                     },
  //                   ],
  //                 },
  //                 { text: "Place TP tube for all CDH with severe profile" },
  //               ],
  //             },
  //             {
  //               text: "Fluids",
  //               sub: [
  //                 {
  //                   text: "Day of repair: Increase TF by 30-50 mL/kg using Plasma-lyte to make up for insensible losses related to repair",
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Electrolyte",
  //               sub: [
  //                 {
  //                   text: "Base deficit > -6, with Sodium bicarbonate 2 mEq/kg/dose",
  //                 },
  //                 { text: "iCa >1.2, treat with Calcium Chloride 20 mg/kg" },
  //                 { text: "Mg >2, treat with Magnesium Sulfate 50 mg/kg" },
  //                 { text: "K  > 2.5 mmol/L, treat with KCl 1mEq/kg" },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "INFECTIOUS DISEASE",
  //           data: [{ text: "Periop antibiotics" }],
  //         },
  //         {
  //           name: "NEURO/PAIN",
  //           data: [{ text: "Pain management per anesthesia" }],
  //         },
  //         {
  //           name: "HEMATOLOGY",
  //           data: [{ text: "See perioperative CDH guideline (Appendix V)" }],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Post CDH Repair Management",
  //       subPages: [
  //         {
  //           name: "RESPIRATORY",
  //           data: [
  //             {
  //               text: "Ventilatory Settings",
  //               sub: [
  //                 {
  //                   text: "Ventilation via SIMV with Servo ventilator",
  //                   sub: [{ text: "20/5, RR 40, iTime 0.5, FiO2 40%" }],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Persistent atelectasis",
  //               sub: [
  //                 { text: "Increase PIP stepwise to 23" },
  //                 { text: "Rate to max 60" },
  //                 { text: "Initiate bag suction" },
  //                 {
  //                   text: "Evaluate fluid status & initiate fluid removal via algorithm (link below)",
  //                   sub: [
  //                     {
  //                       text: "https://childrenscolorado.sharepoint.com/sites/pathways/Documents/Cardiology_Routine%20Fluid%20Management%20in%20ECMO.pdf",
  //                     },
  //                   ],
  //                 },
  //                 { text: "Consider tracheal aspirate" },
  //                 {
  //                   text: "Consider bronchoscopy to rule out mucus plug or blood clots.",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "CARDIOVASCULAR",
  //           data: [
  //             {
  //               text: "Blood Pressure",
  //               sub: [
  //                 { text: "Goal mean arterial blood pressure 45-50 mmHg" },
  //                 { text: "See non - ECMO guideline for medications" },
  //               ],
  //             },
  //             {
  //               text: "Pulmonary Hypertension",
  //               sub: [
  //                 {
  //                   text: "Systemic or suprasystemic pulmonary hypertension (right to left or bidirectional shunt PDA shunt) with adequate lung recruitment",
  //                   sub: [
  //                     { text: "Start iNO" },
  //                     {
  //                       text: "Start sildenafil gtt at 0.067 mg/kg/hour, no bolus",
  //                     },
  //                     { text: "PH team consult and consider Remodulin" },
  //                   ],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "F.E.N.G",
  //           data: [
  //             {
  //               text: "Gastrointestinal/Parenteral Nutrition",
  //               sub: [
  //                 {
  //                   text: "Maintain 10fr decompression tube to suction",
  //                   sub: [
  //                     {
  //                       text: "Anderson to continuous suction or Replogle to low-intermittent suction",
  //                     },
  //                   ],
  //                 },
  //                 { text: "NPO (See criteria below for initiating feeds)" },
  //                 {
  //                   text: "All patients will be maintained on TPN for nutrition support and will be adjusted in collaboration with pharmacy and nutrition.",
  //                   sub: [
  //                     { text: "Protein- 3 to 3.5 g/kg AA " },
  //                     {
  //                       text: "GIR 12-13 mg/kg/min with goal glucose 60-150 mg/dL",
  //                     },
  //                     {
  //                       text: "IL 3 g/kg/day",
  //                       sub: [
  //                         {
  //                           text: "Consider SMOF if not able to start feeds within 2 weeks",
  //                         },
  //                       ],
  //                     },
  //                     { text: "Add levocarnitine at 7 days if still NPO " },
  //                     { text: "Famotidine 0.5 mg/kg in TPN" },
  //                   ],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Fluids",
  //               sub: [
  //                 {
  //                   text: "Strict I & O with hourly documentation (foley, chest tubes, gastric tubes, & all intake)",
  //                 },
  //                 {
  //                   text: "Assess fluid status, set daily fluid goal, utilize fluid removal algorithm to meet goals (link below)",
  //                   sub: [
  //                     {
  //                       text: "https://childrenscolorado.sharepoint.com/sites/pathways/Documents/Cardiology_Routine%20Fluid%20Management%20in%20ECMO.pdf",
  //                     },
  //                   ],
  //                 },
  //                 { text: "Target 100-110 kcal/kg/day" },
  //                 {
  //                   text: "TF goal 100-120 mL/kg/day (max 120 mL/kg/day) including all drips",
  //                 },
  //                 {
  //                   text: "When feeds are added in, maintain TF goal  ≤ 130-140 mL/kg/day.",
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Electrolyte goals",
  //               sub: [
  //                 {
  //                   text: "Maintain iCa >1.2, treat with Calcium Chloride 20 mg/kg",
  //                 },
  //                 { text: "Mg >2, treat with Magnesium Sulfate 25 mg/kg" },
  //                 { text: "Treat Potassium level less than 3 mmol/L" },
  //               ],
  //             },
  //             {
  //               text: "Enteral Feeding",
  //               sub: [
  //                 {
  //                   text: "Initiate feeding on return of bowel function (usually 48 hours post-surgery) or when hemodynamically stable (less than 5 mcg/kg/min dopamine).",
  //                   sub: [
  //                     { text: "Advance by 20-30 mL/kg/da" },
  //                     {
  //                       text: "Fortify daily once above trophics to goal of 24 kcal/o",
  //                     },
  //                     {
  //                       text: "Max enteral feeding volume up to 80 mL/kg/day while on ECM",
  //                     },
  //                     {
  //                       text: "Goal is to use human milk; if not available, consider using whey based formula",
  //                       sub: [
  //                         {
  //                           text: "Special Considerations: Cholestatic infants- consider a high MCT extensively hydrolyzed formula. Infant with chylothorax- Change to low LCT containing formula (extensively hydrolyzed)",
  //                         },
  //                       ],
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "NEURO/PAIN",
  //           data: [{ text: "Refer to NICU post-op pain guideline" }],
  //         },
  //         {
  //           name: "HEMATOLOGY",
  //           data: [
  //             {
  //               text: "First 48 hours post op, see perioperative CDH guideline (Appendix V)",
  //             },
  //             {
  //               text: "Determine bleeding risk (default low)",
  //               sub: [
  //                 {
  //                   text: "Goal parameters and lab schedule per ECMO algorithms",
  //                 },
  //                 {
  //                   text: "See link below- CHCO Guideline for ECMO Bivalirudin Anticoagulation",
  //                   sub: [
  //                     {
  //                       text: "https://childrenscolorado.sharepoint.com/sites/dept/ECMO/Documents/ECMO%20Website/CHCO%20Bivalirudin%20Anticoagulation%20Guideline%20for%20ECMO%2011-22.pdf",
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //             { text: "Follow LY30 daily, discuss Amicar if >4%" },
  //           ],
  //         },
  //         {
  //           text: "OTHER",
  //           sub: [
  //             {
  //               text: "Troubleshooting",
  //               sub: [{ text: "Call for ECMO escalation huddle" }],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: "ECMO Wean/Taper",
  //       subPages: [
  //         {
  //           name: "WEAN READINESS",
  //           data: [
  //             {
  //               text: "Patient PaO2 >100 mmHg on current level support",
  //               sub: [{ text: "wean support by 10-20 mL/kg/day to 80 mL/kg" }],
  //             },
  //           ],
  //         },
  //         {
  //           name: "PREREQUISITES FOR SEPARATION TRIAL (See Appendix VI for Separation Trial Algorithm)",
  //           data: [
  //             {
  //               text: "Acceptable chest x-ray without significant air space disease or effusions",
  //             },
  //             {
  //               text: "Adequate lung recruitment on CMV 20-23/5, RR 40, iTime 0.5, ",
  //             },
  //             {
  //               text: "Assess compliance by looking at the relative change in tidal volume for a change in pressure on the ventilator (goal 6-7 mL/kg)",
  //               sub: [
  //                 {
  //                   text: "If unable to achieve above parameters",
  //                   sub: [
  //                     {
  //                       text: "Give more time on ECMO to establish optimal lung compliance",
  //                     },
  //                     {
  //                       text: "Ensure adequate diuresis, pulmonary toilet with position changes and decreased sedation",
  //                     },
  //                     {
  //                       text: "Assess reasons for poor lung compliance",
  //                       sub: [
  //                         {
  //                           text: "Over circulation and pulmonary edema across a persistent ductus arteriosus. ",
  //                         },
  //                         { text: "Infection – send a tracheal aspirate" },
  //                         {
  //                           text: "Airways disease – consider bronchoscopy to assess for central airways malacia",
  //                         },
  //                         {
  //                           text: "Lung inflammation – consider a dexamethasone burst, 0.2 mg/kg once, followed by 0.1 mg/kg q12 hours x 6 doses, reserve for ECMO course longer than 3 weeks",
  //                         },
  //                         { text: "More time" },
  //                       ],
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "SEPARATION TRIAL",
  //           data: [
  //             {
  //               text: "Consider a trial when PaO2 >100 mmHg on 80 mL/kg flow and 40% FiO2.",
  //               sub: [{ text: "Obtain pump ABG, ensure pump PaO2 >100 mmHg." }],
  //             },
  //             {
  //               text: "Reduced Flow Process",
  //               sub: [
  //                 {
  //                   text: "Reduce flow to 50 mL/kg for five minutes",
  //                   sub: [
  //                     {
  //                       text: "Maintain current level of support, Increase FiO2 to 60%. ",
  //                     },
  //                     { text: "Obtain baseline ECHO and ABG" },
  //                   ],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Indicators of success",
  //               sub: [
  //                 { text: "PaO2 > 60 mmHg in 60% FiO2" },
  //                 { text: "Right and left ventricular function are normal" },
  //                 { text: "Left to right atrial level shunt " },
  //                 {
  //                   text: "Left to Right PDA shunt not a prerequisite to decannulate especially in the setting of CDH",
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Steps following unsuccessful wean",
  //               sub: [
  //                 { text: "Return ventilator to pre-wean settings" },
  //                 { text: "Return to previous flow" },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "Low flow trial (if above indicators are achieved)",
  //           data: [
  //             {
  //               text: "Low flow trial",
  //               sub: [
  //                 { text: "10 mL/kg flow" },
  //                 { text: "Administer 25 u/kg/dose heparin" },
  //                 { text: "Ventilator Settings" },
  //                 { text: "Obtain ECHO and ABG " },
  //               ],
  //             },
  //             {
  //               text: "Indicators of successful trial",
  //               sub: [
  //                 { text: "PaO2 > 60 mmHg in 60% FiO2" },
  //                 { text: "Right and left ventricular function are normal" },
  //                 { text: "Left to right atrial level shunt " },
  //                 {
  //                   text: "Left to Right PDA shunt not a prerequisite to decannulate especially in the setting of CDH",
  //                 },
  //                 {
  //                   text: "Stable Hemodynamics - no pressors support support on low flow",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "Hyperoxia test (If above indicators are achieved)",
  //           data: [
  //             { text: "Hyperoxia Trial Process" },
  //             {
  //               text: "Indicator of successful Trial",
  //               sub: [
  //                 {
  //                   text: "PaO2 > 150 mmHg",
  //                   sub: [
  //                     {
  //                       text: "If <150 mmHg, return to previous flow & ventilator settings",
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           name: "Degas Process (For successful hyperoxia test)",
  //           data: [
  //             {
  //               text: "Decrease FiO2 back to 60% prior to degassing circuit (Increased risk of shunt with higher FiO2)",
  //             },
  //             {
  //               text: "Ventilator Settings",
  //               sub: [
  //                 {
  //                   text: "Adjust RR (max 80) for pCO2 >50",
  //                   sub: [{ text: "Switch to AC/PC if R>60." }],
  //                 },
  //                 { text: "Decrease PEEP 4" },
  //               ],
  //             },
  //             {
  //               text: "Degas ECMO circuit",
  //               sub: [{ text: "Wait 5 minutes, obtain ABG" }],
  //             },
  //             {
  //               text: "Check ABG/ACT every 10 minutes during a low flow trial.",
  //               sub: [
  //                 {
  //                   text: "Check ABG/ACT every 10 minutes during a low flow trial.",
  //                 },
  //               ],
  //             },
  //             {
  //               text: "Once desired data is obtained regas ECMO circuit (Recommended duration of 20-40 minutes)",
  //               sub: [
  //                 {
  //                   text: "Then proceed by returning flow to 80 mL/kg and return ventilator to pre-wean settings",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     }
  //   ],
  // },
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
export default Crit;