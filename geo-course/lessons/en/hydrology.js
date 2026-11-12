/* English version of "水文" — generated from lessons/hydrology.js (simple English, key terms with Chinese). Speaker notes stay in Chinese for the teacher. */
registerLesson({
 "id": "hydrology",
 "title": "Water on Land (Hydrology)",
 "subtitle": "From the water cycle to Taiwan’s rivers, reservoirs, and groundwater",
 "periods": "4 class periods",
 "cover": "💧",
 "intro": {
  "icon": "🏞️",
  "title": "Think: Why is Shimen Reservoir in the mountains?",
  "text": "Water in nature takes many forms, but people can use only a very small part of it. **River water** is the easiest to get. Taiwan has built **reservoirs（水庫）** on some rivers to store water from the rainy season for the dry season. For example, **Shimen Reservoir（石門水庫）** in Taoyuan has eased water problems in the north.",
  "think": {
   "q": "Why are most reservoirs built on the upper parts of rivers?",
   "a": "Upstream, **the mountains get lots of rain**, the water has **less mud**, and **few people live there**, so it is easier to store clean water in large amounts."
  }
 },
 "goals": [
  "What are the water cycle, a river system, a catchment, a river basin, and a divide?",
  "What are Taiwan’s main rivers, and what are they like?",
  "What problems do Taiwan’s water resources have, and how can we protect them?",
  "How are typhoons related to how much water reservoirs hold?"
 ],
 "sections": [
  {
   "code": "6-1",
   "title": "The Water Cycle",
   "icon": "🔄",
   "color": "blue",
   "concepts": [
    {
     "icon": "🌍",
     "color": "blue",
     "title": "Water on Earth: very little can be used directly",
     "text": "About **71%** of Earth’s surface is ocean. **97% of the world’s water is seawater**. Of the other 3%, most is **ice and snow** and **groundwater（地下水）**.",
     "points": [
      "Of the other 3%: ice and snow are about 77%, and groundwater is about 22%.",
      "**Rivers and freshwater lakes**, which people can use directly, are only about **0.35%** of that 3%.",
      "So usable fresh water is very precious, and we should **save water**."
     ],
     "image": {
      "src": "lessons/img/en/water-share.svg",
      "caption": "How the world’s water is shared (drawn from textbook data)"
     }
    },
    {
     "icon": "🔄",
     "color": "teal",
     "title": "Steps of the water cycle",
     "text": "Water keeps moving between the oceans, the air, and the land, and keeps changing form. This is the **water cycle（水循環）**:",
     "grid": [
      {
       "icon": "☀️",
       "title": "① Evapotranspiration",
       "text": "**Evaporation**: water on the surface takes in heat and becomes water vapor. **Transpiration**: plants release water into the air through small holes in their leaves."
      },
      {
       "icon": "☁️",
       "title": "② Condensation",
       "text": "Water vapor rises high, cools, and forms clouds."
      },
      {
       "icon": "🌧️",
       "title": "③ Precipitation",
       "text": "Water falls to the ground as rain, snow, or hail."
      },
      {
       "icon": "🌊",
       "title": "④ Runoff",
       "text": "**Surface runoff** flows over the land. Water that **soaks into** the ground becomes **underground runoff**."
      }
     ],
     "image": {
      "src": "lessons/img/en/water-cycle.svg",
      "caption": "The water cycle (drawn for this lesson)"
     }
    }
   ],
   "think": [
    {
     "q": "Wet clothes drying on a balcony, and tiny water drops on the back of leaves—which steps of the water cycle are these?",
     "a": "Wet clothes drying is **evaporation**. Leaves sending out water through tiny holes is **transpiration**."
    }
   ],
   "quiz": [
    {
     "q": "Xinwei looked up data on the world’s water. Which statement is correct?",
     "options": [
      "Oceans cover only about 30% of Earth, so we should save water.",
      "Most household water comes from groundwater, so we should save water.",
      "Most household water comes from rain and saltwater lakes, and it is expensive to treat.",
      "97% of the world’s water is seawater; of the other 3%, only about 0.35% is easy-to-use rivers and freshwater lakes."
     ],
     "answer": 3,
     "explain": "Oceans cover about **71%** of Earth. The water that is easy to use directly is **rivers and freshwater lakes**, and it is a very small share."
    },
    {
     "q": "Which is the correct order of the water cycle?",
     "options": [
      "Precipitation → surface runoff → condensation → evapotranspiration",
      "Surface runoff → evapotranspiration → precipitation → condensation",
      "Evapotranspiration → condensation → precipitation → surface runoff",
      "Evapotranspiration → precipitation → surface runoff → condensation"
     ],
     "answer": 2,
     "explain": "Water first **evaporates** into vapor, rises and **condenses** into clouds, then falls as **precipitation**, and finally becomes **runoff** that flows back to the sea."
    }
   ],
   "can": "From how the world’s water is shared, I understand why we must value water. I can also describe the steps of the water cycle."
  },
  {
   "code": "6-2",
   "title": "River Systems and River Basins",
   "icon": "🌿",
   "color": "green",
   "concepts": [
    {
     "icon": "🌿",
     "color": "green",
     "title": "River system, catchment, river basin, and divide",
     "text": "When rain hits the ground, it flows from high to low places and gathers into rivers. Learn four terms:",
     "models": [
      {
       "id": "watershed",
       "label": "River system, river basin, and divide"
      }
     ],
     "grid": [
      {
       "icon": "🌳",
       "title": "River system",
       "text": "A **main river** plus many **tributaries（支流）**, forming a network like tree branches."
      },
      {
       "icon": "🎯",
       "title": "Catchment",
       "text": "**The area upstream of a point** on a river. When it rains, water in this area flows to that point."
      },
      {
       "icon": "🗺️",
       "title": "River basin",
       "text": "The catchment **above the river mouth**—the **largest catchment** of a river."
      },
      {
       "icon": "⛰️",
       "title": "Divide",
       "text": "The **dividing line** between two neighboring river basins or catchments, usually a **mountain ridge**."
      }
     ],
     "image": {
      "src": "lessons/img/en/water-basin.svg",
      "caption": "River system, catchment, and river basin (drawn for this lesson)"
     }
    },
    {
     "icon": "🗾",
     "color": "blue",
     "title": "Activity: The Tamsui River basin and Feitsui Reservoir",
     "text": "Look at the Tamsui River basin map in the textbook and answer two questions:",
     "points": [
      "Of points A, B, and C, the closer a point is to the **downstream end (river mouth)**, the more water gathers there, so **A has the most water**.",
      "If Feitsui Reservoir is polluted, the waste must have been dumped **inside Feitsui Reservoir’s catchment** (area 甲), because only water in the catchment flows into the reservoir."
     ],
     "image": {
      "src": "lessons/img/water-feitsui.webp",
      "caption": "Feitsui Reservoir, New Taipei City",
      "credit": "Photo: Peellden / Wikimedia Commons"
     }
    }
   ],
   "think": [
    {
     "q": "When it rains, where does rain that falls on the two sides of a divide go?",
     "a": "It flows into **two different river basins** and reaches the sea through different rivers."
    }
   ],
   "quiz": [
    {
     "q": "While hiking, Qiongfen drew the local rivers. Two rivers are separated by a mountain ridge. Which statement is correct?",
     "options": [
      "There is no divide here, and there is one river system.",
      "There is no divide here, and there are two river systems.",
      "There is one divide here, and one river system.",
      "There is one divide here, and two river systems."
     ],
     "answer": 3,
     "explain": "The ridge splits the rain to two sides → it is a **divide**. Each side has its own main river and tributaries → **two river systems**."
    },
    {
     "q": "After months of drought, the government wants to use cloud seeding to add water to a reservoir. Where should the artificial rain fall to work best?",
     "options": [
      "River system",
      "River basin",
      "Divide",
      "Catchment"
     ],
     "answer": 3,
     "explain": "Only rain that falls **inside the reservoir’s catchment** flows into the reservoir."
    }
   ],
   "can": "I can identify river systems and divides, and I understand the difference between a catchment and a river basin."
  },
  {
   "code": "6-3",
   "title": "Features of Taiwan’s Rivers",
   "icon": "🏔️",
   "color": "teal",
   "concepts": [
    {
     "icon": "🗺️",
     "color": "teal",
     "title": "Taiwan’s main rivers",
     "text": "Taiwan has **more than 150** rivers, big and small. About **20** of them are main rivers, longer and with larger basins. The **Zhuoshui River, Gaoping River, and Tamsui River（濁水溪、高屏溪、淡水河）** are Taiwan’s three largest rivers.",
     "models": [
      {
       "id": "taiwan-rivers",
       "label": "Taiwan’s rivers: flowing east and west"
      }
     ],
     "points": [
      "**Length**: Zhuoshui River (187 km) > Gaoping River (171 km) > Tamsui River (159 km).",
      "**Basin area**: Gaoping River (3,257 km²) > Zhuoshui River (3,157 km²) > Tamsui River (2,726 km²).",
      "Many rivers are also **county and city borders**, for example: Tamsui River (Taipei City / New Taipei City), Zhuoshui River (Changhua County / Yunlin County), Gaoping River (Kaohsiung City / Pingtung County)."
     ],
     "image": {
      "src": "lessons/img/en/water-taiwan-rivers.svg",
      "caption": "Taiwan’s main rivers and their features (drawn for this lesson)"
     }
    },
    {
     "icon": "↔️",
     "color": "blue",
     "title": "Feature 1: flowing east and west, short and small",
     "text": "The main divide for Taiwan’s rivers is the **Central Mountain Range, which runs north to south**. So most rivers **flow east or west**, and they are all short.",
     "points": [
      "The Central Mountain Range **lies toward the east** → **rivers in the west are longer than those in the east**."
     ]
    },
    {
     "icon": "⛰️",
     "color": "red",
     "title": "Feature 2: steep and fast",
     "text": "Taiwan’s land drops a lot in height. Rivers go from high mountains to the sea in a very short distance.",
     "points": [
      "The upper parts are in the mountains, with steep slopes and fast water.",
      "Effects: **lots of water power** (good for making electricity), but **not good for boats**."
     ]
    },
    {
     "icon": "📈",
     "color": "yellow",
     "title": "Feature 3: big changes in flow",
     "text": "Because **rain is uneven across the seasons** (rainy summers, dry winters), rivers in central and southern Taiwan are full of rushing water in summer (**high-water season**) and nearly dry in winter (**low-water season**). These are called **seasonal rivers（荒溪型河川）**.",
     "grid": [
      {
       "icon": "🔵",
       "title": "North: Tamsui River",
       "text": "Rain all year, so the **flow is steady**. In the past boats could use it, and river ports such as Monga and Dadaocheng grew along its banks."
      },
      {
       "icon": "🟠",
       "title": "Central: Zhuoshui River",
       "text": "Little rain in winter, so the flow changes more. It is Taiwan’s **longest** river, carries lots of mud and sand, and has lots of water power."
      },
      {
       "icon": "🔴",
       "title": "South: Gaoping River",
       "text": "The least rain in winter, so **the flow changes the most**. It has the **largest basin** and is the main source of water for farms and homes in Kaohsiung and Pingtung."
      }
     ],
     "image": {
      "src": "lessons/img/en/water-river-flow.svg",
      "caption": "Seasonal changes in the flow of the three largest rivers (drawn for this lesson)"
     }
    },
    {
     "icon": "🟤",
     "color": "purple",
     "title": "Feature 4: lots of sediment every year",
     "text": "Taiwan’s **rocks are weak**, and its rivers are **steep and fast with strong wearing power**. In every heavy rain, rivers carry lots of mud and sand to the middle and lower parts or to the river mouth.",
     "points": [
      "Example: the **Zhuoshui River** got its name (“muddy water river”) because it carries lots of mud and its water is cloudy.",
      "Effects: muddy water, and the lower river and reservoirs **fill up with mud easily**."
     ]
    }
   ],
   "think": [
    {
     "q": "Boats could travel on the Tamsui River in the past. Why did river shipping later decline?",
     "a": "**Land transport** grew, and big ships mostly used **Keelung Harbor**, which is wide and deep, so river shipping slowly declined."
    }
   ],
   "quiz": [
    {
     "q": "Photographer Weixun lists the features of Taiwan’s rivers and their causes. Which would **not** appear in his book?",
     "options": [
      "East–west flow, longer rivers in the west: the Central Mountain Range is the main divide and lies toward the east.",
      "Steep and fast: the land drops a lot in height, and upper rivers are in the mountains.",
      "Small changes in flow: there is plenty of rain, so all rivers have steady flow.",
      "Lots of sediment every year: weak rocks, and rivers with strong wearing power."
     ],
     "answer": 2,
     "explain": "Taiwan’s rain is **uneven across the seasons**, so rivers have **big changes in flow**, especially in central and southern Taiwan."
    }
   ],
   "can": "I can describe the features of Taiwan’s rivers and their causes."
  },
  {
   "code": "6-4",
   "title": "Using and Protecting Taiwan’s Water",
   "icon": "🚰",
   "color": "red",
   "concepts": [
    {
     "icon": "❓",
     "color": "red",
     "title": "Lots of rain—so why water shortages?",
     "text": "Taiwan gets much more rain each year than the world average, but **the amount of water per person per year is small**, and there are often shortages in the dry season. There are three reasons:",
     "grid": [
      {
       "icon": "👥",
       "title": "Many people, crowded together",
       "text": "Each person gets less water."
      },
      {
       "icon": "📅",
       "title": "Uneven rain",
       "text": "Over time: rainy summers and dry winters. Over space: big differences between places."
      },
      {
       "icon": "🏃",
       "title": "Short, fast rivers",
       "text": "In the rainy season, rivers rise quickly and flow straight into the sea, so the water is hard to keep."
      }
     ]
    },
    {
     "icon": "🏞️",
     "color": "blue",
     "title": "Developing rivers: reservoirs",
     "text": "To solve dry-season shortages and make **hydroelectric power（水力發電）**, most of Taiwan’s rivers have reservoirs. The **southwest** has a clear dry season and depends even more on reservoirs for farm water.",
     "grid": [
      {
       "icon": "👍",
       "title": "Good points",
       "text": "**Storing water, flood control, electricity, tourism**."
      },
      {
       "icon": "👎",
       "title": "Bad points",
       "text": "Rivers carry lots of sediment → **reservoirs fill with mud**. Reservoirs also change the river’s natural ecosystem."
      }
     ],
     "images": [
      {
       "src": "lessons/img/water-shihmen.webp",
       "caption": "Shimen Reservoir, Taoyuan City",
       "credit": "Photo: vegafish / Wikimedia Commons"
      },
      {
       "src": "lessons/img/water-wushe.webp",
       "caption": "Wushe Reservoir, Nantou County: lots of mud",
       "credit": "Photo: JianEn Yu / Wikimedia Commons"
      }
     ]
    },
    {
     "icon": "🟫",
     "color": "yellow",
     "title": "Reservoir silting and environmental effects",
     "text": "As mud builds up in a reservoir, **it can store less water**: Shimen Reservoir is more than **30%** filled with mud, and Zengwen Reservoir nearly **40%**. **Check dams（攔沙壩）** are often built upstream to stop the mud.",
     "points": [
      "The flooded area of a reservoir **changes the river’s ecosystem**.",
      "Reservoirs and check dams trap sand and stones, so less sand reaches the lower river → the river mouth lacks sand, **the coastline moves back, and land is lost**.",
      "To make reservoirs last longer: do good **soil and water conservation** in the catchment and limit development upstream."
     ],
     "image": {
      "src": "lessons/img/en/water-problems.svg",
      "caption": "Reservoir silting and overpumping groundwater (drawn for this lesson)"
     }
    },
    {
     "icon": "⛲",
     "color": "teal",
     "title": "Using and protecting groundwater",
     "text": "**Groundwater** is clean and steady. It is often used for **farm irrigation** and **aquaculture**. But **pumping too much（超抽）** causes serious problems:",
     "grid": [
      {
       "icon": "🏚️",
       "title": "Land subsidence",
       "text": "Houses and roads sink. Roads are raised again and again, so houses seem shorter (the roof edge is only shoulder-high for adults)."
      },
      {
       "icon": "🌊",
       "title": "Seawater flooding",
       "text": "Low coastal land floods easily, and the water does not drain away."
      },
      {
       "icon": "🧂",
       "title": "Salty soil",
       "text": "Seawater seeps into the groundwater layer, and the soil becomes too salty to farm."
      }
     ],
     "note": "雲林一帶的高鐵橋墩也曾發現些微下陷，附近地下水井因此緊急封閉。"
    },
    {
     "icon": "💚",
     "color": "green",
     "title": "How to protect groundwater",
     "text": "Besides **not pumping too much**, we should **refill groundwater** by letting rain go back underground:",
     "points": [
      "Keep **wetlands（溼地）** and use less **man-made paving** such as concrete, so surface water can soak into the ground.",
      "Rice fields need lots of water when the seedlings are first planted, which also helps **refill groundwater**."
     ]
    }
   ],
   "think": [
    {
     "q": "Why is groundwater especially likely to be overpumped on Taiwan’s southwest coast?",
     "a": "The southwest has **little rain in winter** and a long dry season. There is not enough river water, so people pump lots of groundwater for farms and fish ponds."
    }
   ],
   "quiz": [
    {
     "q": "Huimei is making a video series on “Taiwan’s water problems.” Which topic would **not** appear?",
     "options": [
      "Rain is uneven over time and space.",
      "Limit development upstream to make reservoirs last longer.",
      "Pump groundwater carefully to prevent land subsidence.",
      "Use fewer large ferries on Taiwan’s rivers to prevent pollution."
     ],
     "answer": 3,
     "explain": "Taiwan’s rivers are **steep and fast, not good for boats**, so no large ferries travel on them."
    },
    {
     "q": "Zhenghong wants to help protect groundwater. Besides pumping less, which action works better?",
     "options": [
      "Build more reservoirs.",
      "Bring in lots of desalination plants.",
      "Straighten the rivers.",
      "Keep wetlands and use less man-made paving such as concrete."
     ],
     "answer": 3,
     "explain": "Keeping wetlands and using less paving lets rain **soak into the ground** and refill groundwater."
    }
   ],
   "can": "I can analyze Taiwan’s water problems, and I am willing to help protect water."
  },
  {
   "code": "Reading",
   "title": "Yiwu Wetland and What Reservoirs Do",
   "icon": "📰",
   "color": "purple",
   "concepts": [
    {
     "icon": "🐦",
     "color": "purple",
     "title": "The beauty and sadness of Yiwu Wetland",
     "text": "**Yiwu Wetland（椬梧溼地）** in Yunlin is where the Niutiaowan River meets the Beigang River. It connects with Chenglong Wetland and Aogu Wetland in Chiayi, forming an important wetland corridor on the west coast.",
     "points": [
      "Long ago it was coastal sand dunes with poor natural conditions. Later sugarcane was grown there, and **overpumping groundwater** made it an area of serious land subsidence.",
      "In 1986, Typhoon Wayne caused **seawater flooding**. The water never drained away, and it became a salt marsh. Trees and power poles along the road still stand in water today.",
      "With few people disturbing it, it became a good **home for birds**. The government also pays farmers to leave land unplanted, so the land can rest and sink more slowly."
     ]
    },
    {
     "icon": "🏊",
     "color": "blue",
     "title": "What reservoirs do: Sun Moon Lake and Wushe Reservoir",
     "text": "After the Sun Moon Lake swim, Amei and Aming visited Wushe Reservoir and found the two reservoirs very different:",
     "grid": [
      {
       "icon": "💡",
       "title": "Sun Moon Lake Reservoir",
       "text": "Taiwan’s largest natural lake. It was first built up for **hydroelectric power**. It also helps with **flood control and water storage**, and it is a famous **tourist** spot."
      },
      {
       "icon": "🟤",
       "title": "Wushe Reservoir",
       "text": "Its catchment is steep with weak rocks. In heavy rain, mud washes into the reservoir and **fills it up**, so **soil and water conservation** is very important."
      }
     ]
    }
   ],
   "think": [
    {
     "q": "People pump lots of groundwater. Which climate feature of the southwest is this related to?",
     "a": "The southwest has **little rain in winter** and often lacks water, so people pump groundwater to use and to water crops."
    },
    {
     "q": "In which season do Sun Moon Lake and Wushe Reservoir (Zhuoshui River basin) usually get the least water? Why?",
     "a": "**Winter**. In winter, central and southern Taiwan are on the **leeward side of the northeast monsoon**, so there is little rain and the least water flows in."
    }
   ]
  },
  {
   "code": "Inquiry",
   "title": "Typhoons and Daily Life",
   "icon": "🌀",
   "color": "teal",
   "concepts": [
    {
     "icon": "🌀",
     "color": "teal",
     "title": "What is a typhoon?",
     "text": "Over warm tropical seas, lots of water evaporates and strong convection forms low pressure. When the top wind speed near the center reaches **17.2 meters per second** (about 60 km/h), it is called a **typhoon（颱風）**.",
     "points": [
      "A typhoon’s path and strength depend on **where the high-pressure belt is** and on **landforms**. They change fast and are hard to predict, so deciding on a typhoon day off is often a headache for the government.",
      "Typhoons bring **strong winds and heavy rain**, which can cause floods, landslides, and debris flows."
     ]
    },
    {
     "icon": "🏝️",
     "color": "red",
     "title": "Topic 1: Typhoon Koinu hits Orchid Island",
     "text": "In October 2023, Typhoon Koinu hit. Orchid Island recorded winds of **95.2 meters per second**, breaking a record of more than 100 years. Roads, houses, schools, water and power, and ports were badly damaged.",
     "points": [
      "Orchid Island is in the Pacific **southeast** of Taiwan, so it is **hit first** when typhoons come from the Pacific. In the textbook data, four paths that often hit Orchid Island add up to about **43.5%**.",
      "When a typhoon comes from the southeast, **Imorod (Hongtou) village** is on the **leeward side**, so it had less damage than Iraraley (Dongqing) and Iratay (Langdao) villages.",
      "The Tao people’s traditional **semi-underground houses（半穴居地下屋）** are mostly below ground level, mainly to **shelter from the wind**, so they had less damage this time."
     ]
    },
    {
     "icon": "💧",
     "color": "blue",
     "title": "Topic 2: Typhoons can also end droughts",
     "text": "In March 2023, Taiwan’s reservoirs were short of water again: Zengwen Reservoir was only **11.2%** full, which affected water for homes, farms, and factories.",
     "points": [
      "Look at the changes in how full Zengwen Reservoir is: it is usually lowest in **spring** (about March–May) and starts to rise after the plum rain.",
      "From **July–August** each year, the water rises a lot and keeps rising until September–October → this is **typhoon season**.",
      "Typhoons bring disasters, but they are also an **important water source** for Taiwan."
     ]
    }
   ],
   "think": [
    {
     "q": "Which statement about the Tao people’s semi-underground houses is correct? (A) To keep out enemies (B) Mainly to shelter from the wind (C) To keep out insects and snakes (D) To be dry and airy",
     "a": "**(B)**. Orchid Island has many strong typhoons, so building houses below ground level helps people **shelter from the wind**."
    },
    {
     "q": "Look at the chart of how full Zengwen Reservoir is. Which conclusion makes sense? (A) It is lowest in spring (B) It is highest in winter (C) It keeps rising in winter (D) It does not change with the seasons",
     "a": "**(A)**. In the dry winter and spring, little water comes in and lots is used, so it is lowest in **spring**. It rises again after plum rain and typhoons in summer and fall."
    }
   ]
  }
 ],
 "myths": [
  {
   "wrong": "There is so much water on Earth that we can never use it all.",
   "right": "97% is seawater. **Rivers and freshwater lakes**, which are easy to use directly, are only a very small part."
  },
  {
   "wrong": "A catchment and a river basin are the same thing.",
   "right": "A **catchment** is the area upstream of a point on a river. A **river basin** is the catchment above the river mouth—the largest catchment."
  },
  {
   "wrong": "Taiwan gets lots of rain, so it never runs short of water.",
   "right": "Many people live close together, rain is **uneven over time and space**, and short, fast rivers cannot keep water, so there are often shortages in the dry season."
  },
  {
   "wrong": "Once a reservoir is built, it can be used forever.",
   "right": "Taiwan’s rivers carry lots of sediment, so reservoirs **fill with mud** and need soil and water conservation and dredging."
  },
  {
   "wrong": "Typhoons only bring disasters.",
   "right": "Heavy typhoon rain is also an important source for **filling reservoirs**, and it can end droughts."
  }
 ],
 "explore": [
  {
   "icon": "🏚️",
   "title": "Land subsidence",
   "desc": "TVBS News (2021): a report about land subsidence.",
   "href": "https://youtu.be/y9Ia4M48suI"
  },
  {
   "icon": "🏞️",
   "title": "Reservoir silting and dredging",
   "desc": "Da Ai News (2024): a report about reservoirs.",
   "href": "https://youtu.be/rMyGQcneOAY"
  },
  {
   "icon": "🌀",
   "title": "Typhoon Koinu and Orchid Island",
   "desc": "PTS News (2023): a report on typhoon damage.",
   "href": "https://youtu.be/KPYm4Tg2gQM"
  },
  {
   "icon": "📺",
   "title": "Typhoon Koinu up close",
   "desc": "TTV News (2023): a report about the typhoon.",
   "href": "https://youtu.be/UMd2p5jYwAQ"
  },
  {
   "icon": "🚰",
   "title": "Water Resources Agency, Ministry of Economic Affairs",
   "desc": "Look up reservoir levels, rivers, and water information.",
   "href": "https://www.wra.gov.tw/"
  }
 ],
 "checklist": [
  "I can describe how the world’s water is shared and understand that there is very little usable fresh water.",
  "I can describe the water cycle: evapotranspiration, condensation, precipitation, and runoff.",
  "I can tell river systems, catchments, river basins, and divides apart.",
  "I can name Taiwan’s three largest rivers and the four features of its rivers and their causes.",
  "I can explain why Taiwan runs short of water, and the good and bad points of reservoirs.",
  "I can explain the effects of overpumping groundwater and how to protect it.",
  "I can describe how typhoons affect our lives, and how typhoons relate to reservoir water."
 ]
});
