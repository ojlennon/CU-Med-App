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
    name: "Appendix I",
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
    name: "Appendix II",
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
    name: "Appendix III",
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
        phone: "7207776701"
      },
      {
        name: "CA North",
        phone: "7207772431"
      },
      {
        name: "CICU",
        phone: "7207776992"
      },
      {
        name: "Delivery RN",
        phone: "7207771589"
      },
      {
        name: "ECHO",
        phone: "7207772954"
      },
      {
        name: "ECMO Y1",
        phone: "7207774059"
      },
      {
        name: "ECMO Y2",
        phone: "7207774060"
      },
      {
        name: "Spanish Interpreter",
        phone: "7207779800"
      },
      {
        name: "NICU Charge",
        phone: "7207776883"
      },
      {
        name: "NICU North Resource",
        phone: "7207771547"
      },
      {
        name: "Pharmacy",
        phone: "7207779525"
      },
      {
        name: "X ray",
        phone: "7207778688"
      },
        
    ],
  },
  {
    name: "Articles",
    color: "#683b2c",
    data: [
      {
        name: "Update on Congenital Diaphragmatic Hernia",
        author: "Debnath Chatterjee, Richard J Ing, Jason Gien",
        link: "https://pubmed.ncbi.nlm.nih.gov/31335403/",
      },
      {
        name: "Pulmonary artery endothelial cell dysfunction and decreased populations of highly proliferative endothelial cells in experimental congenital diaphragmatic hernia",
        author:
          "Shannon N Acker, Gregory J Seedorf, Steven H Abman, Eva Nozik-Grayck, David A Partrick, Jason Gien",
        link: "https://pubmed.ncbi.nlm.nih.gov/24124189/",
      },
      {
        name: "Successful Surgical Management of Airway Perforation in Preterm Infants",
        author:
          "Jason Gien, Richard J Ing, Mark D Twite, David Campbell, Max Mitchell, John P Kinsella",
        link: "https://pubmed.ncbi.nlm.nih.gov/24791225/",
      },
    ],
  },
];
export default NonCrit;
