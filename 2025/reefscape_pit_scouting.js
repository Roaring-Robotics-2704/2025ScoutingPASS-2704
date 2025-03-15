var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
    {"name": "Scouter Initials",
     "code": "s",
     "type": "scouter",
     "size": 5,
     "maxSize": 5,
     "required": "true"
    },
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Can fit between cages",
      "code": "cag",
      "type": "bool"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "# of Batteries in pit",
      "code": "nob",
      "type": "number"
    },
    { "name": "Design Process",
      "code": "des",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Floor pickup Coral",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Scores Coral L1?",
      "code": "cl1",
      "type": "bool"
    },
    { "name": "Scores Coral L2?",
      "code": "cl2",
      "type": "bool"
    },
    { "name": "Scores Coral L3?",
      "code": "cl3",
      "type": "bool"
    },
    { "name": "Scores Coral L4?",
      "code": "cl4",
      "type": "bool"
    },
    { "name": "Floor pickup Algae",
      "code": "fpa",
      "type": "bool"
    },
    { "name": "Scores in Processor?",
      "code": "pro",
      "type": "bool"
    },
    { "name": "Scores in Net?",
      "code": "net",
      "type": "bool"
    },
    { "name": "Can Remove Algae?",
      "code": "ral",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Robot Name",
      "code": "nam",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
