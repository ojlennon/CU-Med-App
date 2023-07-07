const NonCrit = [
  {
    name: "Background and Definitions",
    data: [
      {
        text: "Congenital Diaphragmatic Hernia (CDH):",
        sub: [
          {
            text: "a congenital defect in the diaphragm that allows herniation of abdominal viscera into the thorax",
          },
        ],
      },
      {
        text: "Severity Classification:",
        sub: [
          { text: "Mild - PPLV > 20% O:E > 45%" },
          { text: "Moderate -  PPLV 15-20% O:E 35-45%" },
          { text: "Severe - PPLV <15%, O:E < 35%" },
        ],
      },
      { text: "Incidence:", sub: [{ text: "1 in 3000  to 5000 live births" }] },
      {
        text: "Purpose / Objective:",
        sub: [
          {
            text: "Provide standardized guidelines for the management of infants with CDH",
          },
        ],
      },
      {
        text: "Patient Population:",
        sub: [
          { text: "All pregnancies complicated by fetal diagnosis of CDH " },
          { text: "All infants affected by CDH " },
        ],
      },
      {
        text: "Prenatal Evaluation:",
        sub: [
          {
            text: "Those with prenatal diagnosis referred for Colorado Fetal Care Center consultation with Maternal Fetal Medicine, Neonatology, and Pediatric Surgery ",
          },
          {
            text: "Documentation of the prenatal consult can be found in mother’s EPIC chart ",
          },
          {
            text: "Two antenatal Ultrasounds",
            sub: [
              { text: "Initial at 24 weeks " },
              { text: "Final planning around 34 weeks " },
              {
                text: "Ultrasound (LHR, observed to expected LHR (O/E LHR), liver position, other anomalies)",
              },
            ],
          },
          {
            text: "MRI",
            sub: [
              {
                text: "20-24 weeks- liver position, other anomalies, percent predicted lung volume (PPLV) ",
              },
              { text: "34 weeks- total lung volume, O:E LHR" },
            ],
          },
          {
            text: "Fetal Echocardiogram",
            sub: [{ text: "Anatomy scan, cardiac function, hydrops" }],
          },
          { text: "Amniocentesis" },
          {
            text: "Delivery",
            sub: [
              { text: "Planned at 39 weeks " },
              { text: "All deliveries to take place in the operating room " },
              { text: "Mode of delivery dependent on PPLV at 34 weeks " },
              {
                text: "PPLV >15 deliver via induced vaginal delivery around 39 weeks with low threshold for cesarean section for signs of fetal distress ",
              },
              { text: "PPLV ≤ 15 deliver by cesarean section at 39 weeks" },
            ],
          },
          { text: "ECMO in the delivery room for infants with PPLV ≤ 15" },
        ],
      },
      {
        text: "Outside Admission Evaluation:",
        sub: [
          {
            text: "Infants who are born at an outside hospital should follow the Delivery Room Management and transfer to CHCO when clinically stable",
          },
        ],
      },
    ],
  },
  {
    name: "Delivery Room Equipment I",
    color: "#BB7E5D",
    header: "Delivery Room Equipment",
    data: [
      {
        text: "Ventilation",
        sub: [
          { text: "SERVO Ventilator" },
          { text: "TCM (stickers + gel)" },
          {
            text: "Transport Neopuff (PIP not to exceed 25)",
            sub: [
              { text: "Mild: 20/5, FiO2 50%" },
              { text: "Moderate/Severe: 23/4, FiO2 100%" },
            ],
          },
          {
            text: "iNO (pre-use completed, injector/sample line in-line, tank off and locked)",
            sub: [
              { text: "15mm adapter" },
              { text: "22mm adapter" },
              { text: "One-way valve" },
            ],
          },
        ],
      },
      {
        text: "Intubation supplies",
        sub: [
          { text: "CMAC" },
          { text: "Disposable laryngoscope handle" },
          { text: "Size “0” blade" },
          { text: "3.5 uncuffed ETT + stylet" },
          { text: "3.0 cuffed ETT + stylet" },
          { text: "Pedicap x 2" },
          { text: "Tape (Pink + cloth)" },
        ],
      },
      {
        text: "Supply for Access",
        sub: [
          {
            text: "Procedure cart",
            sub: [
              { text: "3.5fr double & single lumen umbilical catheter" },
              { text: "5.0fr double & single lumen umbilical catheter" },
              { text: "All Purpose Tray" },
              { text: "Sterile gloves" },
              { text: "Sterile gown" },
              { text: "Cap/Bouffant" },
            ],
          },
          {
            text: "IV catheters",
            sub: [{ text: "22G and 24G, 0.56 and 0.75 inch" }],
          },
          { text: "T-connector x2" },
          { text: "Heparin flush x4" },
          { text: "Saline flush" },
          { text: "Transilluminator" },
          { text: "Duoderm & Tegaderm" },
        ],
      },
      {
        text: "Other",
        sub: [
          { text: "ISTAT" },
          { text: "NIRS " },
          { text: "Pre/Post ductal sat monitoring" },
          { text: "Anderson gastric tube" },
          {
            text: "10fr replogle",
            sub: [{ text: "Suction canister, suction tubing" }],
          },
        ],
      },
    ],
  },
  {
    name: "Delivery Room Roles II",
    color: "#a06d50",
    header: "Delivery Room Roles",
    data: [
      { text: "Team Lead", sub: [{ text: "Attending or NICU Fellow" }] },
      {
        text: "Head of Bed",
        sub: [{ text: "NICU Fellow or NNP", sub: [{ text: "Intubate" }] }],
      },
      {
        text: "NNP",
        sub: [
          {
            text: "Right side of bed",
            sub: [{ text: "Place umbilical lines (MD or NNP)" }],
          },
          { text: "Order Management" },
        ],
      },
      {
        text: "RN (x3)",
        sub: [
          {
            text: "Bedside RN- Left side of bed",
            sub: [
              { text: "Place leads, pulse-ox x2, & OG" },
              { text: "Administer Vit K & erythromycin " },
              { text: "Place PIV" },
              { text: "Connect fluids" },
              { text: "Secure umbilical lines" },
            ],
          },
          { text: "Second RN", sub: [{ text: "MEDs, run ISTAT" }] },
          {
            text: "Third RN",
            sub: [
              { text: "Documentation" },
              { text: "Call ECHO/Notify Cards" },
            ],
          },
        ],
      },
      {
        text: "RT (x2)",
        sub: [
          { text: "Assist during intubation" },
          { text: "Setup respiratory equipment" },
          { text: "Secure ETT" },
          { text: "Assist in bagging" },
        ],
      },
      {
        text: "Pharmacist",
        sub: [{ text: "Draw up/verify resuscitation medications" }],
      },
      {
        text: "Clinical Assistant",
        sub: [{ text: "Aid in gathering supplies" }, { text: "Call X-Ray" }],
      },
    ],
  },
  {
    name: "Pain Algorithm III",
    color: "#a05f58",
    text: "even more stuff here",
  },
  {
    name: "Cannulation Prep IV",
    color: "#a05f58",
    text: "even more stuff here",
  },
  {
    name: "Perioperative Coagulation V",
    color: "#a05f58",
    text: "even more stuff here",
  },
  {
    name: "Separation Trial VI",
    color: "#a05f58",
    text: "even more stuff here",
  },
  {
    name: "Personnel",
    color: "#8e6152",
    data: [
      {
        name: "Jason Gien MD",
        role: "Neonatology",
        phone: 3032572912,
        email: "Jason.gien@childrenscolorado.org",
      },
      {
        name: "John Kinsella MD",
        role: "Neonatology",
        phone: 3038867290,
        email: "john.kinsella@cuanschutz.edu",
      },
      {
        name: "Pavika Varma MD",
        role: "Neonatology",
        phone: 9093748222,
        email: "pavika.varma@childrenscolorado.org",
      },
      {
        name: "Chris Derderian MD",
        role: "Pediatric/Fetal Surgery",
        phone: 8034668100,
        email: "Sarkis.Derderian@childrenscolorado.org",
      },
      {
        name: "David Partrcik MD",
        role: "Pediatric Surgery",
        phone: 3039032588,
        email: "David.Partrick@childrenscolorado.org",
      },
      {
        name: "Ankush Gosain MD",
        role: "Pediatric Surgery",
        phone: 3122088691,
        email: "Ankush.Gosain@childrenscolorado.org",
      },
      {
        name: "Sarah Palau NNP",
        role: "Neonatal Nurse Practitioner",
        phone: 5633439699,
        email: "Sarah.Palau@childrenscolorado.org",
      },
      {
        name: "Andrea Marazzi NNP",
        role: "Neonatal Nurse Practitioner",
        phone: 8138382900,
        email: "Andrea.Marazzi@childrenscolorado.org",
      },
      {
        name: "Michelle Chadbourne NNP",
        role: "Neonatal Nurse Practitioner",
        phone: 8506247285,
        email: "Michelle.Chadbourne@childrenscolorado.org",
      },
      {
        name: "Hellea Valadez NNP",
        role: "Neonatal Nurse Practitioner",
        phone: 8506247285,
        email: "Hellea.Valadez@childrenscolorado.org",
      },
      {
        name: "Mallory Meuller RN",
        role: "Neonatal Nurse",
        phone: "N/A",
        email: "Mallory.Mueller@childrenscolorado.org",
      },
      {
        name: "Jennifer Trujillo RN",
        role: "Neonatal Nurse",
        phone: "N/A",
        email: "Jennifer.Trujillo@childrenscolorado.org",
      },
      {
        name: "Rachel Hall RN",
        role: "Neonatal Nurse",
        phone: "N/A",
        email: "Rachel.Hall@childrenscolorado.org",
      },
      {
        name: "Chelsea Hunter RN",
        role: "Neonatal Nurse",
        phone: "N/A",
        email: "Chelsea.Hunter@childrenscolorado.org",
      },
      {
        name: "Adrienne Alter RN",
        role: "Neonatal Nurse",
        phone: "N/A",
        email: "Adrienne.Alter@childrenscolorado.org",
      },
      {
        name: "Tori Sudar RT",
        role: "Respiratory Therapy",
        phone: "N/A",
        email: "Tori.Sudar@childrenscolorado.org",
      },
      {
        name: "Martin Hailey",
        role: "Respiratory Therapy",
        phone: "N/A",
        email: "Hailey.Martin@childrenscolorado.org",
      },
      {
        name: "Bethany Wright",
        role: "Respiratory Therapy",
        phone: "N/A",
        email: "bethany.wright@childrenscolorado.org",
      },
      {
        name: " Jennifer Celardo RT",
        role: "Respiratory Therapy",
        phone: "N/A",
        email: "Jennifer.Celardo@childrenscolorado.org",
      },

      {
        name: "Blood Bank",
        phone: "7207776701",
      },
      {
        name: "CA North",
        phone: "7207772431",
      },
      {
        name: "CICU",
        phone: "7207776992",
      },
      {
        name: "Delivery RN",
        phone: "7207771589",
      },
      {
        name: "ECHO",
        phone: "7207772954",
      },
      {
        name: "ECMO Y1",
        phone: "7207774059",
      },
      {
        name: "ECMO Y2",
        phone: "7207774060",
      },
      {
        name: "Spanish Interpreter",
        phone: "7207779800",
      },
      {
        name: "NICU Charge",
        phone: "7207776883",
      },
      {
        name: "NICU North Resource",
        phone: "7207771547",
      },
      {
        name: "Pharmacy",
        phone: "7207779525",
      },
      {
        name: "X ray",
        phone: "7207778688",
      },
    ],
  },
  {
    name: "Articles",
    color: "#683b2c",
    data: [
{
  name:"Pediatric Pulmonary Hypertension: Guidelines From the American Heart Association and American Thoracic Society. Circulation  ",
  author:"Abman SH, Hansmann G, Archer SL, Ivy DD, Adatia I, Chung WK, Hanna BD, Rosenzweig EB, Raj JU, Cornfield D, Stenmark KR, Steinhorn R, Thébaud B, Fineman JR, Kuehne T, Feinstein JA, Friedberg MK, Earing M, Barst RJ, Keller RL, Kinsella JP, Mullen M, Deterding R, Kulik T, Mallory G, Humpl T, Wessel DL; American Heart Association Council on Cardiopulmonary, Critical Care, Perioperative and Resuscitation; Council on Clinical Cardiology; Council on Cardiovascular Disease in the Young; Council on Cardiovascular Radiology and Intervention; Council on Cardiovascular Surgery and Anesthesia; and the American Thoracic Society.",
  link:"https://pubmed.ncbi.nlm.nih.gov/26534956/",
},
{
  name:"Ventricular Performance is Associated with Need for Extracorporeal Membrane Oxygenation in Newborns with Congenital Diaphragmatic Hernia",
  author:"Altit G, Bhombal S, Van Meurs K, Tacy TA",
  link:"https://pubmed.ncbi.nlm.nih.gov/29037794/",
},
{
  name:"Acute kidney injury in infants with congenital diaphragmatic hernia",
  author:"Arattu Thodika, F. M. S., Dassios, T., Deep, A., & Greenough, A",
  link:"https://pubmed.ncbi.nlm.nih.gov/35393531/",
},
{
  name:"Congenital diaphragmatic hernia in 120 infants treated consecutively with permissive hypercapnea/spontaneous respiration/elective repair",
  author:"Boloker J, Bateman DA, Wung JT, Stolar CJ",
  link:"https://pubmed.ncbi.nlm.nih.gov/11877648/",
},
{
  name:"Current concepts of mechanical ventilation in neonates - Part 1: Basics",
  author:"Chakkarapani AA, Adappa R, Mohammad Ali SK, Gupta S, Soni NB, Chicoine L, Hummler HD",
  link:"https://pubmed.ncbi.nlm.nih.gov/32373697/",
},
{
  name:"Current concepts in assisted mechanical ventilation in the neonate - Part 2: Understanding various modes of mechanical ventilation and recommendations for individualized disease-based approach in neonates",
  author:"Chakkarapani AA, Adappa R, Mohammad Ali SK, Gupta S, Soni NB, Chicoine L, Hummler HD",
  link:"https://pubmed.ncbi.nlm.nih.gov/33319021/",
},
{
  name:"Update on Congenital Diaphragmatic Hernia. Anesth Analg",
  author:"Chatterjee D, Ing RJ, Gien J. Update on Congenital Diaphragmatic Hernia. Anesth Analg",
  link:"https://pubmed.ncbi.nlm.nih.gov/31335403/",
},
{
  name:"Management preferences in ECMO mode for congenital diaphragmatic hernia",
  author:"Delaplain PT, Jancelewicz T, Di Nardo M, Zhang L, Yu PT, Cleary JP, Morini F, Harting MT, Nguyen DV, Guner YS; Study by ELSO CDH Interest Group",
  link:"https://pubmed.ncbi.nlm.nih.gov/30786989/",
},
{
  name:"Polygenic Causes of Congenital Diaphragmatic Hernia Produce Common Lung Pathologies",
  author:"Donahoe PK, Longoni M, High FA",
  link:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5222980/",
},
{
  name:"Congenital Diaphragmatic Hernia Management: A Systematic Review and Care Pathway Description Including Volume-Targeted Ventilation",
  author:"Duncan KV, Polites S, Krishnaswami S, Scottoline BP",
  link:"https://pubmed.ncbi.nlm.nih.gov/33843783/",
},
{
  name:"ELSO Guidelines for Cardiopulmonary Extracorporeal Life Support Extracorporeal Life Support Organization",
  author:"N/A",
  link:"https://www.elso.org/ecmo-resources/elso-ecmo-guidelines.aspx",
},
{
  name:"Update on pre-ECMO evaluation and treatment for term infants in respiratory failure.",
  author:"Fletcher KL, Chapman R",
  link:"https://pubmed.ncbi.nlm.nih.gov/36450631/",
},
{
  name:"Prognosis of conventional vs. high-frequency ventilation for congenital diaphragmatic hernia: a retrospective cohort study",
  author:"Fuyuki M, Usui N, Taguchi T, Hayakawa M, Masumoto K, Kanamori Y, Amari S, Yamoto M, Urushihara N, Inamura N, Yokoi A, Okawada M, Okazaki T, Toyoshima K, Furukawa T, Terui K, Ohfuji S, Tazuke Y, Uchida K, Okuyama H; Japanese Congenital Diaphragmatic Hernia Study Group",
  link:"https://pubmed.ncbi.nlm.nih.gov/33177680/",
},
{
  name:"Fluid Balance Management Informs Renal Replacement Therapy Use During Pediatric Extracorporeal Membrane Oxygenation",
  author:"Gorga SM, Lima L, Askenazi DJ, Bridges BC, Cooper DS, Paden ML, Zappitelli M, Gist KM, Gien J, Jetton JG, Murphy HJ, Fleming GM, Selewski DT, Basu RK",
  link:"https://pubmed.ncbi.nlm.nih.gov/34570725/",
},
{
  name: "Lower Distending Pressure Improves Respiratory Mechanics in Congenital Diaphragmatic Hernia Complicated by Persistent Pulmonary Hypertension",
  author:"Guevorkian D, Mur S, Cavatorta E, Pognon L, Rakza T, Storme L",
  link:"https://pubmed.ncbi.nlm.nih.gov/29793868/",
},
{
  name:"Management of Congenital Diaphragmatic Hernia Treated With Extracorporeal Life Support: Interim Guidelines Consensus Statement From the Extracorporeal Life Support Organization",
  author:"Guner Y, Jancelewicz T, Di Nardo M, Yu P, Brindle M, Vogel AM, Gowda SH, Grover TR, Johnston L, Mahmood B, Gray B, Chapman R, Keene S, Rintoul N, Cleary J, Ashrafi AH, Harting MT; Elso CDH Interest Group",
  link:"https://pubmed.ncbi.nlm.nih.gov/33512912/",
},
{
  name:"Toward Standardized Management of Congenital Diaphragmatic Hernia: An Analysis of Practice Guidelines",
  author:"Jancelewicz T, Brindle ME, Guner YS, Lally PA, Lally KP, Harting MT; Congenital Diaphragmatic Hernia Study Group (CDHSG); Pediatric Surgery Research Collaborative (PedSRC)",
  link:"https://pubmed.ncbi.nlm.nih.gov/31226462/",
},
{
  name:"Detrimental effects of standard medical therapy in congenital diaphragmatic hernia",
  author:"Kays DW, Langham MR Jr, Ledbetter DJ, Talbert JL",
  link:"https://pubmed.ncbi.nlm.nih.gov/10493481/",
},
{
  name:"Congenital diaphragmatic hernia and neonatal lung lesions",
  author:"Kays DW",
  link:"https://pubmed.ncbi.nlm.nih.gov/16580927/",
},
{
  name:"Mechanical ventilation strategies",
  author:"Keszler M",
  link:"https://pubmed.ncbi.nlm.nih.gov/28709948/",
},
{
  name:" Volume-targeted ventilation: one size does not fit all. Evidence-based recommendations for successful use",
  author:"Keszler M",
  link:"https://pubmed.ncbi.nlm.nih.gov/30068668/",
},
{
  name:"Cardiac Support: Emphasis on Venoarterial ECMO",
  author:"King CS, Roy A, Ryan L, Singh R",
  link:"https://pubmed.ncbi.nlm.nih.gov/28887927/",
},
{
  name:"Response to pulmonary vasodilators in infants with congenital diaphragmatic hernia",
  author:"Kumar VHS, Dadiz R, Koumoundouros J, Guilford S, Lakshminrusimha S",
  link:"https://pubmed.ncbi.nlm.nih.gov/29808281/",
},
{
  name:"Inhaled Nitric Oxide Is Associated with Improved Oxygenation in a Subpopulation of Infants with Congenital Diaphragmatic Hernia and Pulmonary Hypertension",
  author:"Lawrence KM, Monos S, Adams S, Herkert L, Peranteau WH, Munson DA, Hopper RK, Avitabile CM, Rintoul NE, Hedrick HL",
  link:"https://pubmed.ncbi.nlm.nih.gov/31706636/",
},
{
  name:"Work of breathing at different tidal volume targets in newborn infants with congenital diaphragmatic hernia",
  author:"Lee R, Hunt KA, Williams EE, Dassios T, Greenough A",
  link:"https://pubmed.ncbi.nlm.nih.gov/35304647/",
},
{
  name:"Risk factors for acute kidney injury in neonates with congenital diaphragmatic hernia.",
  author:"Liberio, B. M., Brinton, J. T., Gist, K. M., Soranno, D. E., Kirkley, M. J., & Gien, J",
  link:"https://www.nature.com/articles/s41372-021-01119-1",
},
{
  name:"Mechanical ventilation strategies in the management of congenital diaphragmatic hernia",
  author:"Logan JW, Cotten CM, Goldberg RN, Clark RH",
  link:"https://pubmed.ncbi.nlm.nih.gov/17462564/",
},
{
  name:"Tidal volumes at birth as predictor for adverse outcome in congenital diaphragmatic hernia",
  author:"Mank A, Carrasco Carrasco C, Thio M, Clotet J, Pauws SC, DeKoninck P, Te Pas AB",
  link:"https://pubmed.ncbi.nlm.nih.gov/31256011/",
},
{
  name:"Management of the CDH patient on ECLS",
  author:"Martino A, Lista G, Guner YS",
  link:"https://pubmed.ncbi.nlm.nih.gov/36411199/",
},
{
  name:"Coagulation and hemolysis complications in neonatal ECLS: Role of devices",
  author:"Maul TM, Herrera G",
  link:"https://pubmed.ncbi.nlm.nih.gov/36437186/",
},
{
  name:"Alveolar recruitment in acute lung injury",
  author:"Mols G, Priebe HJ, Guttmann J",
  link:"https://pubmed.ncbi.nlm.nih.gov/16361299/",
},
{
  name:"Changes in vasoactive pathways in congenital diaphragmatic hernia associated pulmonary hypertension explain unresponsiveness to pharmacotherapy",
  author:"Mous DS, Buscop-van Kempen MJ, Wijnen RMH, Tibboel D, Rottier RJ",
  link:"https://pubmed.ncbi.nlm.nih.gov/29115963/",
},
{
  name:"Cardiac dysfunction in congenital diaphragmatic hernia: Pathophysiology, clinical assessment, and management",
  author:"Patel N, Kipfmueller F",
  link:"https://pubmed.ncbi.nlm.nih.gov/28641753/",
},
{
  name:"The heart in congenital diaphragmatic hernia: Knowns, unknowns, and future priorities",
  author:"Patel N, Massolo AC, Kraemer US, Kipfmueller F",
  link:"https://pubmed.ncbi.nlm.nih.gov/36052357/",
},
{
  name:"Extracorporeal Membrane Oxygenation in Congenital Diaphragmatic Hernia",
  author:"Rafat N, Schaible T",
  link:"https://pubmed.ncbi.nlm.nih.gov/31440491/",
},
{
  name:"Neonatal pneumothorax in congenital diaphragmatic hernia: Be wary of high ventilatory pressures",
  author:"Rubalcava N, Norwitz GA, Kim AG, Weiner G, Matusko N, Arnold MA, Mychaliska GB, Perrone EE",
  link:"https://pubmed.ncbi.nlm.nih.gov/36475048/",
},
{
  name:"Pulmonary barotrauma in congenital diaphragmatic hernia: a clinicopathological correlation",
  author:"Sakurai Y, Azarow K, Cutz E, Messineo A, Pearl R, Bohn D",
  link:"https://pubmed.ncbi.nlm.nih.gov/10626861/",
},
{
  name:"Oral Feeding in Infants After Congenital Diaphragmatic Hernia Repair While on Non-invasive Positive Pressure Ventilation: The Impact of a Dysphagia Provider-Led Protocol",
  author:"Schwab ME, Crennan M, Burke S, Sang H, Klarich MK, Keller RL, Vu LT",
  link:"https://pubmed.ncbi.nlm.nih.gov/34981254/",
},
{
  name:"A perioperative bivalirudin anticoagulation protocol for neonates with congenital diaphragmatic hernia on extracorporeal membrane oxygenation",
  author:"Snyder CW, Goldenberg NA, Nguyen ATH, Smithers CJ, Kays DW",
  link:"https://pubmed.ncbi.nlm.nih.gov/32763642/",
},
{
  name:"Perioperative improvement in pulmonary function in infants with congenital diaphragmatic hernia",
  author:"Scottoline B, Jordan BK, Parkhotyuk K, Schilling D, McEvoy CT",
  link:"https://pubmed.ncbi.nlm.nih.gov/36181873/",
},
{
  name:"Neonatal Acute Kidney Injury",
  author:"Selewski DT, Charlton JR, Jetton JG, Guillet R, Mhanna MJ, Askenazi DJ, Kent AL",
  link:"https://pubmed.ncbi.nlm.nih.gov/26169430/",
},
{
  name:"High-frequency oscillatory ventilation versus conventional ventilation in the respiratory management of term neonates with a congenital diaphragmatic hernia",
  author:"Semama C, Vu S, Kyheng M, Le Duc K, Plaisant F, Storme L, Claris O, Mur S, Butin M",
  link:"https://pubmed.ncbi.nlm.nih.gov/35994123/",
},
{
  name:"Conventional Mechanical Ventilation Versus High-frequency Oscillatory Ventilation for Congenital Diaphragmatic Hernia: A Randomized Clinical Trial (The VICI-trial)",
  author:"Snoek KG, Capolupo I, van Rosmalen J, Hout Lde J, Vijfhuize S, Greenough A, Wijnen RM, Tibboel D, Reiss IK; CDH EURO Consortium",
  link:"https://pubmed.ncbi.nlm.nih.gov/26692079/",
},
{
  name:"Standardized Postnatal Management of Infants with Congenital Diaphragmatic Hernia in Europe: The CDH EURO Consortium Consensus",
  author:"Snoek KG, Reiss IK, Greenough A, Capolupo I, Urlesberger B, Wessel L, Storme L, Deprest J, Schaible T, van Heijst A, Tibboel D; CDH EURO Consortium",
  link:"https://pubmed.ncbi.nlm.nih.gov/27077664/",
},
{
  name:"A nationwide database analysis of demographics and outcomes related to Extracorporeal Membrane Oxygenation (ECMO) in congenital diaphragmatic hernia",
  author:"Snyder AN, Cheng T, Burjonrappa S",
  link:"https://pubmed.ncbi.nlm.nih.gov/34398295/",
},
{
  name:"A new method of ventilation inhomogeneity assessment based on a simulation study using clinical data on congenital diaphragmatic hernia cases",
  author:"Stankiewicz B, Mierzewska-Schmidt M, Pałko KJ, Baranowski A, Darowski M, Kozarski M",
  link:"https://pubmed.ncbi.nlm.nih.gov/36587057/",
},
{
  name:"The use of extracorporeal membrane oxygenation in neonates with severe congenital diaphragmatic hernia: a 26-year experience from a tertiary centre",
  author:"Vaja R, Bakr A, Sharkey A, Joshi V, Faulkner G, Westrope C, Harvey C",
  link:"https://pubmed.ncbi.nlm.nih.gov/28475684/",
},
{
  name:"Extracorporeal Life Support Organization (ELSO): Guidelines for Neonatal Respiratory Failure",
  author:"Wild KT, Rintoul N, Kattan J, Gray B",
  link:"https://pubmed.ncbi.nlm.nih.gov/32282347/",
},
{
  name:"Respiratory Support of Infants With Congenital Diaphragmatic Hernia",
  author:"Williams E, Greenough A",
  link:"https://pubmed.ncbi.nlm.nih.gov/35004552/",
},
{
  name:"Congenital diaphragmatic hernia",
  author:"Zani A, Chung WK, Deprest J, Harting MT, Jancelewicz T, Kunisaki SM, Patel N, Antounians L, Puligandla PS, Keijzer R",
  link:"https://pubmed.ncbi.nlm.nih.gov/35650272/",
},
{
  name:"Congenital diaphragmatic hernia: a narrative review of controversies in neonatal management",
  author:"Yang MJ, Russell KW, Yoder BA, Fenton SJ",
  link:"https://pubmed.ncbi.nlm.nih.gov/34189103/",
},
    ],
  },
];
export default NonCrit;
