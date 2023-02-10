const NonCrit = [
    {
        name:"Background and Definitions",
    },
    {
        name: "Appendix I",
        color:"#BB7E5D",
        header:"Delivery Room Equipment",
        data:[
            {text:"Ventilation",
            sub:[
                {text:"SERVO Ventilator"},
                {text:"TCM (stickers + gel)"},
                {text:"Transport Neopuff (PIP not to exceed 25)",
                sub:[
                    {text:"Mild: 20/5, FiO2 50%"},
                    {text:"Moderate/Severe: 23/4, FiO2 100%"},
                ]},
                {text:"iNO (pre-use completed, injector/sample line in-line, tank off and locked)",
                sub:[
                    {text:"15mm adapter"},
                    {text:"22mm adapter"},
                    {text:"One-way valve"},
                ]}
            ]},
            {text:"Intubation supplies",
            sub:[
                {text:"CMAC"},
                {text:"Disposable laryngoscope handle"},
                {text:"Size “0” blade"},
                {text:"3.5 uncuffed ETT + stylet"},
                {text:"3.0 cuffed ETT + stylet"},
                {text:"Pedicap x 2"},
                {text:"Tape (Pink + cloth)"},
            ]},
            {text:"Supply for Access",
            sub:[
                {text:"Procedure cart",
                sub:[
                    {text:"3.5fr double & single lumen umbilical catheter"},
                    {text:"5.0fr double & single lumen umbilical catheter"},
                    {text:"All Purpose Tray"},
                    {text:"Sterile gloves"},
                    {text:"Sterile gown"},
                    {text:"Cap/Bouffant"},
                ]},
                {text:"IV catheters",
                sub:[{text:"22G and 24G, 0.56 and 0.75 inch"}]},
                {text:"T-connector x2"},
                {text:"Heparin flush x4"},
                {text:"Saline flush"},
                {text:"Transilluminator"},
                {text:"Duoderm & Tegaderm"},
            ]},
            {text:"Other",
            sub:[
                {text:"ISTAT"},
                {text:"NIRS "},
                {text:"Pre/Post ductal sat monitoring"},
                {text:"Anderson gastric tube"},
                {text:"10fr replogle",
                sub:[{text:"Suction canister, suction tubing"}]},
            ]}
        ]
    },
    {
        name: "Appendix II",
        color:"#a06d50",
        header:"Delivery Room Roles",
        data:[
            {text:"Team Lead",
            sub:[
                {text:"Attending or NICU Fellow"}
            ]},
            {text:"Head of Bed",
            sub:[
                {text:"NICU Fellow or NNP",
                sub:[
                    {text:"Intubate"}
                ]}
            ]},
            {text:"NNP",
            sub:[
                {text:"Right side of bed",
                sub:[{text:"Place umbilical lines (MD or NNP)"}]},
                {text:"Order Management"}
            ]},
            {text:"RN (x3)",
            sub:[
                {text:"Bedside RN- Left side of bed",
                sub:[
                    {text:"Place leads, pulse-ox x2, & OG"},
                    {text:"Administer Vit K & erythromycin "},
                    {text:"Place PIV"},
                    {text:"Connect fluids"},
                    {text:"Secure umbilical lines"},
                ]},
                {text:"Second RN",
                sub:[
                    {text:"MEDs, run ISTAT"}
                ]},
                {text:"Third RN",
                sub:[
                    {text:"Documentation"},
                    {text:"Call ECHO/Notify Cards"}
                ]}
            ]},
            {text:"RT (x2)",
            sub:[
                {text:"Assist during intubation"},
                {text:"Setup respiratory equipment"},
                {text:"Secure ETT"},
                {text:"Assist in bagging"},
            ]},
            {text:"Pharmacist",
            sub:[{text:"Draw up/verify resuscitation medications"}]},
            {text:"Clinical Assistant",
            sub:[
                {text:"Aid in gathering supplies"},
                {text:"Call X-Ray"},
            ]}
        ]
    },
    {
        name: "Appendix III",
        color:"#a05f58",
        text: "even more stuff here",
    },
    
]
export default NonCrit