/* English version of "天氣與氣候" — generated from lessons/weather-climate.js (simple English, key terms with Chinese). Speaker notes stay in Chinese for the teacher. */
registerLesson({
 "id": "weather-climate",
 "title": "Weather and Climate",
 "subtitle": "Understand weather elements and climate data, and learn about Taiwan’s climate and weather disasters",
 "periods": "5 class periods",
 "cover": "🌦️",
 "intro": {
  "icon": "❄️",
  "title": "Think: Snow at Wuling, Hehuanshan",
  "text": "Before going out, we check the weather report to decide how many layers to wear and whether to bring an umbrella. Farms may stop planting when there is not enough water, and heavy rain can cause floods. **Weather and climate** are closely tied to our lives and industries. In winter, when a cold wave arrives and there is enough moisture, Wuling on Hehuanshan（合歡山）can turn white with snow.",
  "think": {
   "q": "Why is it hard to see snow on Taiwan’s plains?",
   "a": "Taiwan is at **middle and low latitudes**, so the plains are fairly warm and snow is rare. Only **high** mountain areas may get snow."
  }
 },
 "goals": [
  "How are weather and climate different?",
  "What factors affect Taiwan’s climate?",
  "What is Taiwan’s climate like?",
  "What weather disasters does Taiwan have?"
 ],
 "sections": [
  {
   "code": "5-1",
   "title": "Weather",
   "icon": "🌤️",
   "color": "blue",
   "concepts": [
    {
     "icon": "🌤️",
     "color": "blue",
     "title": "Weather: the state of the air over a short time",
     "text": "**Weather（天氣）** is the state of the air in a place **over a short time**, for example, “There will be thunderstorms this afternoon.” We describe weather with four **weather elements（天氣要素）**:",
     "grid": [
      {
       "icon": "🌡️",
       "title": "Temperature",
       "text": "How hot or cold the air is, in ℃ or ℉."
      },
      {
       "icon": "🌧️",
       "title": "Precipitation",
       "text": "Rain, snow, or hail falling to the ground, in mm."
      },
      {
       "icon": "🎈",
       "title": "Air pressure",
       "text": "The weight of air on an area, in hPa (hectopascals)."
      },
      {
       "icon": "🍃",
       "title": "Wind",
       "text": "Air moving sideways. We look at wind direction and wind speed."
      }
     ],
     "note": "中央氣象署的生活氣象 App 可以隨時查詢每日、一週的天氣預報。"
    },
    {
     "icon": "🌡️",
     "color": "red",
     "title": "1. Temperature",
     "text": "Temperature changes with **latitude** and **altitude**:",
     "points": [
      "**Higher latitude, lower temperature**: sunlight comes in at a bigger slant, so less heat arrives.",
      "**Higher land, lower temperature**: it may be 32℃ at the foot of a mountain but only 20℃ at the top, so bring a jacket.",
      "It also changes with the **seasons** and between **day and night**."
     ]
    },
    {
     "icon": "🌧️",
     "color": "teal",
     "title": "2. Precipitation: three kinds of rain",
     "text": "Precipitation includes rain, snow, and hail. It is measured with a **rain gauge** in millimeters (mm). Air **rises → cools → water vapor forms clouds → rain falls**. By why the air rises, rain is split into three kinds:",
     "models": [
      {
       "id": "taiwan-rain",
       "mode": "weather",
       "icon": "⛰️",
       "small": "3D Orographic Rain",
       "label": "Winter northeast monsoon"
      },
      {
       "id": "taiwan-rain",
       "mode": "weather",
       "wind": "SW",
       "icon": "⛰️",
       "small": "3D Orographic Rain",
       "label": "Summer southwest monsoon"
      },
      {
       "id": "taiwan-rain",
       "mode": "convection",
       "icon": "⛈️",
       "small": "3D Convection Rain",
       "label": "Afternoon thunderstorms"
      },
      {
       "id": "taiwan-rain",
       "mode": "frontal",
       "icon": "🌦️",
       "small": "3D Frontal Rain",
       "label": "Plum rain front"
      }
     ],
     "grid": [
      {
       "icon": "⛰️",
       "title": "Orographic rain",
       "text": "Wet air rises up a mountain slope and rain falls: **lots of rain on the windward side, little on the leeward side**. Example: Keelung and Yilan in winter."
      },
      {
       "icon": "⛈️",
       "title": "Convection rain",
       "text": "The ground heats up and air rises fast: **heavy rain, short time, small area**. Example: summer afternoon thunderstorms."
      },
      {
       "icon": "🌦️",
       "title": "Frontal rain",
       "text": "Cold and warm air meet, and the warm air is pushed up: **long time, large area**. Example: plum rain in May and June."
      }
     ],
     "image": {
      "src": "lessons/img/en/weather-rain-types.svg",
      "caption": "Three kinds of rain (drawn for this lesson)"
     }
    },
    {
     "icon": "🎈",
     "color": "purple",
     "title": "3. Air pressure, height, and temperature",
     "text": "**Air pressure（氣壓）** is the weight of the air on each unit of Earth’s surface. Its unit is the **hectopascal (hPa)**.",
     "points": [
      "**The higher you go, the lower the air pressure**: snack bags puff up on a mountain, and people can get **altitude sickness** (headache, dizziness, feeling sick).",
      "**At the same height**: warm air expands and rises → **low pressure (L)**; cold air shrinks and sinks → **high pressure (H)**.",
      "Cold air flows downward, so air conditioners are often put **up high** to keep the air in a room moving."
     ]
    },
    {
     "icon": "🌀",
     "color": "blue",
     "title": "High and low pressure (Northern Hemisphere)",
     "text": "Join places with the same air pressure into **isobars（等壓線）** and draw a **weather map**. Then you can see where high and low pressure are, how strong they are, and what the weather will be.",
     "grid": [
      {
       "icon": "☀️",
       "title": "High pressure H",
       "text": "Wind blows **outward, clockwise**, and air in the center **sinks**. The weather is **clear and stable**."
      },
      {
       "icon": "🌧️",
       "title": "Low pressure L",
       "text": "Wind blows **inward, counterclockwise**, and air in the center **rises**. Clouds and rain form easily, and the **weather changes a lot**."
      }
     ],
     "image": {
      "src": "lessons/img/en/weather-pressure.svg",
      "caption": "High and low pressure (drawn for this lesson)"
     }
    },
    {
     "icon": "🗺️",
     "color": "yellow",
     "title": "Weather maps and satellite cloud images",
     "text": "Besides isobars, weather maps also show **fronts（鋒面）**. **Satellite cloud images** show the shape and movement of clouds and help us understand the weather now.",
     "points": [
      "**Cold front**: cold air pushes into warm air.",
      "**Warm front**: warm air pushes into cold air.",
      "**Stationary front**: cold and warm air are equally strong, so the front moves slowly and almost stops (plum rain)."
     ],
     "image": {
      "src": "lessons/img/en/weather-fronts.svg",
      "caption": "Front symbols (drawn for this lesson)"
     }
    },
    {
     "icon": "🍃",
     "color": "teal",
     "title": "4. Wind and wind direction",
     "text": "**Wind** is air moving sideways from **high pressure (H) to low pressure (L)**.",
     "points": [
      "**Wind direction** is the direction the wind **comes from**: wind from the east is an **east wind**.",
      "**Wind speed**: the bigger the pressure difference between two places, the stronger the wind.",
      "Wind is often affected by landforms, day and night, and the seasons."
     ]
    },
    {
     "icon": "🎆",
     "color": "red",
     "title": "In real life: where should you watch fireworks?",
     "text": "Smoke drifts **with the wind**. When an **east wind** blows, the smoke drifts west:",
     "grid": [
      {
       "icon": "😷",
       "title": "West side (downwind)",
       "text": "You mostly see **smoke**."
      },
      {
       "icon": "🤩",
       "title": "East side (upwind)",
       "text": "You can see clear, beautiful **fireworks**."
      }
     ]
    }
   ],
   "think": [
    {
     "q": "Why are air conditioners usually put high on the wall?",
     "a": "Cold air is heavier and **flows down**. It pushes the warmer air near the floor up, so the air moves around and the whole room cools evenly."
    },
    {
     "q": "On a night with an east wind, which side of the launch site should you stand on to watch fireworks?",
     "a": "The **east side** (upwind). The smoke drifts west, so on the west side you only see smoke."
    }
   ],
   "quiz": [
    {
     "q": "The teacher asks students to explain one weather element each. Who is right?",
     "options": [
      "Mingqin: Temperature is how warm the air is, and it changes only with latitude or season.",
      "Ziyu: Wind is air flowing from low pressure to high pressure; the bigger the pressure difference, the slower the wind.",
      "Xiuzong: Precipitation includes rain, snow, and hail, and it mainly depends on how air rises and moves.",
      "Zhimei: Air pressure changes with height and goes up as height goes up."
     ],
     "answer": 2,
     "explain": "Temperature also changes with **height**. Wind blows **from high to low pressure**, and a bigger difference makes it **stronger**. The higher you go, the **lower** the air pressure (they go opposite ways)."
    },
    {
     "q": "On summer afternoons there are often thunderstorms with heavy rain over a short time and a small area. What kind of rain is this?",
     "options": [
      "Orographic rain",
      "Convection rain",
      "Frontal rain",
      "Typhoon rain"
     ],
     "answer": 1,
     "explain": "The ground gets very hot and air rises quickly, making **convection rain（對流雨）**."
    }
   ],
   "can": "I understand how weather elements relate to weather features."
  },
  {
   "code": "5-2",
   "title": "Climate",
   "icon": "📊",
   "color": "green",
   "concepts": [
    {
     "icon": "📊",
     "color": "green",
     "title": "Climate: the average over a long time",
     "text": "**Climate（氣候）** is the average weather of an area **over a long time**, for example, “spring all year” or “warm winters and cool summers.” Climate data come from long-term records and are often shown in **tables** or **climate charts（氣候圖）**.",
     "points": [
      "**Daily mean temperature**: the World Meteorological Organization (WMO) says temperature must be measured at least **every 6 hours**. The daily mean is the average of these readings.",
      "In Taiwan, **July** usually has the highest monthly mean temperature and **January** the lowest."
     ]
    },
    {
     "icon": "🧮",
     "color": "blue",
     "title": "Common climate data",
     "text": "To read a climate chart, first learn four terms:",
     "grid": [
      {
       "icon": "📅",
       "title": "Monthly mean temperature",
       "text": "Sum of the daily mean temperatures in a month ÷ number of days."
      },
      {
       "icon": "🌡️",
       "title": "Yearly mean temperature",
       "text": "Sum of the 12 monthly mean temperatures ÷ 12."
      },
      {
       "icon": "🌧️",
       "title": "Yearly precipitation",
       "text": "The **total** of 12 months of precipitation (not the average)."
      },
      {
       "icon": "↕️",
       "title": "Yearly temperature range",
       "text": "Warmest monthly mean − coldest monthly mean."
      }
     ]
    }
   ],
   "think": [
    {
     "q": "“It will rain tomorrow” and “Tainan has rainy summers and dry winters”—which is about weather, and which is about climate?",
     "a": "“It will rain tomorrow” is **weather** (short time). “Rainy summers and dry winters” is **climate** (long-time average)."
    }
   ],
   "quiz": [
    {
     "q": "Yuqi wrote down how to work out climate data. Which one is wrong?",
     "options": [
      "Yearly temperature range: warmest monthly mean minus coldest monthly mean",
      "Yearly mean temperature: the average of the 12 monthly mean temperatures",
      "Monthly mean temperature: the average of the daily mean temperatures in a month",
      "Yearly precipitation: the average of the 12 monthly precipitation amounts"
     ],
     "answer": 3,
     "explain": "Yearly precipitation is the **total** of 12 months, so you do not divide it."
    },
    {
     "q": "The teacher drew a climate chart of Taipei. Which student’s description might be right?",
     "options": [
      "Pinxian: Taipei’s yearly mean temperature is about 34℃.",
      "Yijia: Taipei’s yearly temperature range is about 22℃.",
      "Guobin: Taipei’s coldest month has a mean temperature of 7℃.",
      "Yuxuan: Taipei’s yearly precipitation is 2,405 mm."
     ],
     "answer": 3,
     "explain": "Taipei’s yearly mean temperature is about 23℃, the range is about 14℃, and the coldest month is about 16℃. Yearly precipitation of about **2,400 mm** makes sense."
    }
   ],
   "can": "I can explain how climate data are calculated and analyze climate data."
  },
  {
   "code": "Extra Help",
   "title": "Draw a climate chart: Keelung",
   "icon": "✏️",
   "color": "yellow",
   "concepts": [
    {
     "icon": "✏️",
     "color": "yellow",
     "title": "Draw a climate chart in four steps",
     "text": "Draw the **monthly mean temperature** and **precipitation** for 12 months on one chart, so you can see the seasons at a glance. Here is Keelung:",
     "grid": [
      {
       "icon": "✏️",
       "title": "Keelung (textbook table)",
       "text": "Drawn from the textbook numbers: it faces the northeast monsoon in fall and winter, so it is very rainy then.",
       "tag": "Keelung",
       "chart": {
        "continent": "Asia",
        "city": "Keelung",
        "type": "Subtropical monsoon climate (Cfa)",
        "feature": "Faces the winter northeast monsoon; rainy in fall and winter",
        "minTemp": -40,
        "maxPrecip": 450,
        "temps": [
         16,
         16,
         18,
         21,
         25,
         27,
         29,
         29,
         27,
         24,
         21,
         18
        ],
        "precips": [
         332,
         397,
         321,
         242,
         285,
         302,
         148,
         210,
         424,
         400,
         400,
         312
        ],
        "source": "Textbook table “Draw a climate chart”"
       }
      },
      {
       "icon": "🏙️",
       "title": "Taipei",
       "text": "A basin. Lots of convection rain and typhoon rain in summer.",
       "tag": "Taipei",
       "chart": {
        "continent": "Asia",
        "city": "Taipei",
        "type": "Subtropical monsoon climate (Cfa)",
        "feature": "Lots of convection rain and typhoon rain in summer; also rain in winter",
        "minTemp": -40,
        "maxPrecip": 400,
        "temps": [
         16.4,
         16.9,
         18.8,
         22.3,
         25.6,
         28.2,
         29.9,
         29.5,
         27.7,
         24.6,
         21.9,
         18.2
        ],
        "precips": [
         93.8,
         102.4,
         107.8,
         101.4,
         225.2,
         234.6,
         214.2,
         236.5,
         236.8,
         162.6,
         89.3,
         96.9
        ],
        "source": "Wikipedia climate table (Central Weather Administration, 1991–2020 average)"
       }
      },
      {
       "icon": "🌴",
       "title": "Hengchun",
       "text": "The southern tip of Taiwan. Warm all year, rainy summers and dry winters.",
       "tag": "Hengchun",
       "chart": {
        "continent": "Asia",
        "city": "Hengchun",
        "type": "Tropical monsoon climate (Aw)",
        "feature": "Warm all year, rainy summers and dry winters",
        "minTemp": -40,
        "maxPrecip": 550,
        "temps": [
         21.1,
         21.7,
         23.3,
         25.4,
         27.3,
         28.4,
         28.7,
         28.3,
         27.8,
         26.5,
         24.7,
         22.2
        ],
        "precips": [
         21.8,
         23.2,
         16,
         35.2,
         146.6,
         350.7,
         391.3,
         533.4,
         320.3,
         125.3,
         58.3,
         29
        ],
        "source": "Wikipedia climate table (Central Weather Administration, 1991–2020 average)"
       }
      }
     ],
     "points": [
      "**Step 1**: Mark the monthly mean temperatures for January to December and join them into a **temperature line** (℃ scale on the left).",
      "**Step 2**: (16+16+18+21+25+27+29+29+27+24+21+18) ÷ 12 = 271 ÷ 12 ≈ **23℃**. Write it at the top left.",
      "**Step 3**: Draw each month’s precipitation as a **bar** (mm scale on the right).",
      "**Step 4**: 332+397+321+242+285+302+148+210+424+400+400+312 = **3,773 mm**. Write it at the top right."
     ],
     "image": {
      "src": "lessons/img/en/climate-keelung.svg",
      "caption": "Climate chart of Keelung (drawn from the textbook table)"
     }
    }
   ],
   "think": [
    {
     "q": "Look at Keelung’s climate chart. Which months are especially rainy? What is the yearly temperature range?",
     "a": "**Fall and winter** (September to March) are rainy, because Keelung faces the **northeast monsoon（東北季風）** in winter. The range is 29 − 16 = **13℃**."
    }
   ]
  },
  {
   "code": "5-3",
   "title": "Taiwan’s Climate",
   "icon": "🇹🇼",
   "color": "red",
   "concepts": [
    {
     "icon": "🧭",
     "color": "red",
     "title": "Three main factors in Taiwan’s climate",
     "text": "Taiwan’s temperature and rainfall change a lot over time and from place to place. Three factors are most important:",
     "grid": [
      {
       "icon": "🌐",
       "title": "Latitude",
       "text": "The Tropic of Cancer passes through Taiwan. The south is at lower latitudes."
      },
      {
       "icon": "⛰️",
       "title": "Landforms",
       "text": "There are many high mountains. Higher land is colder, and windward slopes get more rain."
      },
      {
       "icon": "🍃",
       "title": "Monsoons",
       "text": "The northeast monsoon blows in winter and the southwest monsoon in summer."
      }
     ]
    },
    {
     "icon": "🌡️",
     "color": "yellow",
     "title": "1. Temperature: north and south",
     "text": "The south is at lower latitudes, so its plains are warmer than the north’s on average. But winter and summer are different:",
     "grid": [
      {
       "icon": "🧣",
       "title": "Winter (January)",
       "text": "**Warmer in the south, cooler in the north**, mainly because of **latitude**. The plains reach about 20℃ at most, and the mountains are under 10℃. The south is **tropical** and the north is **subtropical**."
      },
      {
       "icon": "🥵",
       "title": "Summer (July)",
       "text": "The plains are **hot everywhere**, mostly above 25℃, and the north–south difference is **small**. The mountains are cooler."
      }
     ]
    },
    {
     "icon": "🏔️",
     "color": "teal",
     "title": "2. Temperature changes with height",
     "text": "The yearly mean temperature of Taiwan’s plains is **above 20℃**. But **the higher the land, the lower the temperature**, so high mountains may get snow in winter.",
     "models": [
      {
       "id": "taiwan-landform",
       "label": "Taiwan’s landforms: how high are the mountains?"
      }
     ],
     "points": [
      "The **Yushan Weather Station** (3,858 m) is the highest weather station in Taiwan: about 7.9℃ in July and −1.1℃ in January.",
      "Chiayi and Yushan are at about the same latitude, but their yearly mean temperatures differ by **more than 10℃**. The reason is **landform (altitude)**.",
      "Taipei’s July mean (29.6℃) is higher than Kaohsiung’s (29.2℃): the **basin** keeps the heat from escaping."
     ]
    },
    {
     "icon": "🌧️",
     "color": "blue",
     "title": "3. Precipitation: uneven over time",
     "text": "Taiwan gets about **2,500 mm** of rain a year on average—plenty, but it is spread very unevenly. **From the start of plum rain to the end of typhoon season** is the main rainy season.",
     "points": [
      "Mostly **rainy summers and dry winters**: summer has the southwest monsoon, plum rain, convection rain, and typhoons.",
      "Exception: the **north** faces the **northeast monsoon** in winter, so it is rainy in winter too, with rain in all four seasons.",
      "**The south has the clearest wet and dry seasons**. The dry winter is long, so it needs **reservoirs（水庫）** to store water."
     ],
     "image": {
      "src": "lessons/img/en/taiwan-monsoon.svg",
      "caption": "Winter and summer monsoons and rainfall (drawn for this lesson)"
     }
    },
    {
     "icon": "🗾",
     "color": "purple",
     "title": "Precipitation: uneven from place to place",
     "text": "Moist air is pushed up by landforms and forms rain, so:",
     "points": [
      "**Mountains get more than plains and outlying islands**.",
      "**Windward slopes get more than leeward slopes**.",
      "**The north, with no clear dry season, gets more than the south**.",
      "**Penghu** is low and flat with little orographic rain, so it gets the least rain in Taiwan."
     ]
    },
    {
     "icon": "🧅",
     "color": "green",
     "title": "Activity: Hengchun’s climate",
     "text": "Hengchun’s old name was “Longkiau,” from a Paiwan word for a kind of orchid. In the late Qing dynasty, Shen Baozhen asked to build a walled town here. Because it was warm, like spring all year, it was renamed “Hengchun” (“always spring”).",
     "points": [
      "Hengchun is **south of the Tropic of Cancer**, so it is tropical, with **warm winters and a small yearly temperature range**.",
      "In winter, the northeast monsoon crosses the Central Mountain Range and becomes a strong **downslope wind（落山風）**. It often blows onion leaves over, so the nutrients go into the bulbs and the onions are high quality. They are harvested in **late winter and early spring**.",
      "Hengchun’s rain comes mostly in summer, and winter is dry → an outdoor camp held in **winter vacation** is less likely to be rained out."
     ]
    }
   ],
   "think": [
    {
     "q": "Which statements about the name Hengchun are correct? (A) It was the name of a Paiwan village. (B) It is at a low latitude with a small temperature range. (C) It is by the sea, so summer is not too hot. (D) It is south of the Tropic of Cancer, so winters are warmer.",
     "a": "**(B)(D)**. “Longkiau” is the name of an orchid, and summers in Hengchun are actually very hot."
    },
    {
     "q": "Why is Penghu the place with the least rain in Taiwan?",
     "a": "Penghu is **low and flat**. There are no high mountains to push moist air up, so **orographic rain rarely forms**."
    }
   ],
   "quiz": [
    {
     "q": "Peixuan and classmates analyze how latitude and landforms affect Taiwan’s temperatures. Who is right?",
     "options": [
      "Zhijia: Taiwan is small, so the north–south difference is small; the east is warmer than the west.",
      "Peixuan: The north is warmer than the south; the west is warmer than the east.",
      "Yayun: In winter the north–south difference is clear; in summer the plains are hot everywhere; higher land is colder.",
      "Dongyi: The north–south difference is small in winter and large in summer; higher land is warmer."
     ],
     "answer": 2,
     "explain": "In winter it is **warmer in the south**, because of latitude. In summer it is hot everywhere. **The higher the land, the lower the temperature**."
    },
    {
     "q": "Which sentence in Zhexiu’s rainfall notes is correct?",
     "options": [
      "Taiwan’s rain is mostly affected by monsoons and landforms.",
      "The south is on the windward side of the southwest monsoon, so it rains all year.",
      "Because of landforms, the south has rainy summers and dry winters, and the north has dry summers and rainy winters.",
      "The north has no monsoon in July–August, so it has a clear dry season in summer."
     ],
     "answer": 0,
     "explain": "The south has a **dry season in winter**. The north has **rain in all four seasons**, with convection rain and typhoons in summer too."
    }
   ],
   "can": "I can analyze the factors that affect Taiwan’s temperature and rainfall."
  },
  {
   "code": "5-4",
   "title": "Weather Disasters in Taiwan",
   "icon": "⚠️",
   "color": "red",
   "concepts": [
    {
     "icon": "🥶",
     "color": "blue",
     "title": "1. Cold damage",
     "text": "In winter, cold air masses from **Mongolia and Siberia** move south and temperatures drop fast. This is called a **cold wave（寒流）**.",
     "points": [
      "Low temperatures can kill **crops** and **farmed fish**, causing losses for farming and fishing.",
      "In 2023, cold damage cost about NT$154 million, and about 96% of it was in farming."
     ]
    },
    {
     "icon": "🏜️",
     "color": "yellow",
     "title": "2. Drought",
     "text": "Taiwan’s rain is **uneven across the seasons**, especially in the **southwest**: in the dry winter, people depend on water stored in reservoirs during the rainy season.",
     "points": [
      "If there is not enough rain or the dry season is too long, there is a **water shortage（缺水）** that affects homes and farms.",
      "In 2021 there was a **once-in-a-century drought**. In May, Zengwen Reservoir held only **3.8%** of its water."
     ]
    },
    {
     "icon": "🌊",
     "color": "teal",
     "title": "3. Floods",
     "text": "In the rainy season, **too much rain in a short time** easily causes floods:",
     "points": [
      "Common times: **plum rain（梅雨）** in May and June, strong **convection rain** in summer, and **typhoons（颱風）** in summer and fall.",
      "These rains are also the **main source of Taiwan’s water**: starting in June 2023, plum rain, typhoons, and the southwest monsoon came one after another, and Zengwen Reservoir became nearly full."
     ],
     "image": {
      "src": "lessons/img/en/weather-rain-scale.svg",
      "caption": "Levels of rain intensity (drawn for this lesson)"
     }
    },
    {
     "icon": "🌦️",
     "color": "purple",
     "title": "Helper: the plum rain season",
     "text": "Every **May and June**, cold and warm air meet over Taiwan. The lighter warm air climbs over the cold air, forming a **stationary front**. There is lots of moisture, so frontal rain falls.",
     "models": [
      {
       "id": "taiwan-rain",
       "mode": "frontal",
       "icon": "🌦️",
       "small": "3D Frontal Rain",
       "label": "Plum rain front"
      }
     ],
     "points": [
      "As the warm air from the south grows stronger, the front slowly **moves north**.",
      "In June and July it reaches the **Jiangnan** area of China, just when plums are ripe, so it is called “**plum rain**.”"
     ]
    }
   ],
   "think": [
    {
     "q": "Typhoons bring disasters. Why do some people “look forward to” typhoons?",
     "a": "Typhoons bring a lot of rain, an **important source of water for Taiwan’s reservoirs**. They can end a drought."
    }
   ],
   "quiz": [
    {
     "q": "Which sentence in Yanzhen’s notes on Taiwan’s climate is wrong?",
     "options": [
      "Rain is uneven, so the south is more likely to limit water use in winter.",
      "Miaoli, on the windward side of the southwest monsoon, often has foehn winds in summer that start farm fires.",
      "Yilan gets rain all year and often has typhoons in summer, so green onion farmers watch the weather.",
      "In winter, cold air from Mongolia moves south and causes cold damage to crops and fish farms."
     ],
     "answer": 1,
     "explain": "The windward side is the **rainy** side. Foehn winds happen on the **leeward side** after air crosses the mountains."
    }
   ],
   "can": "I understand how Taiwan’s weather disasters affect our lives."
  },
  {
   "code": "Reading",
   "title": "When Heavy Rain Becomes a “Disaster,” and Baseball Games",
   "icon": "📰",
   "color": "purple",
   "concepts": [
    {
     "icon": "📰",
     "color": "purple",
     "title": "When heavy rain becomes a disaster",
     "text": "Taiwan’s natural disaster records show that **typhoons** are about 66% and **floods (heavy rain)** about 23%. Weather-related disasters make up about **89%**, the main natural disasters in Taiwan.",
     "points": [
      "In mid-August 2023, a low-pressure zone covered southern Taiwan. Sanmin District in Kaohsiung got 131.5 mm of rain in one day, and some roads flooded above people’s knees.",
      "The same heavy rain filled Zengwen Reservoir to over **65%**, ending the drought in Chiayi and Tainan for a while.",
      "Taiwan’s land is **steep and broken up**, so heavy rain easily causes landslides and **debris flows**: in the same month, Typhoon Khanun cut off roads at Lushan Hot Springs in Nantou, trapping visitors."
     ]
    },
    {
     "icon": "⚾",
     "color": "blue",
     "title": "Weather elements and baseball games",
     "text": "Amei and Aming noticed that weather affects baseball games:",
     "points": [
      "**Wind**: when a north wind blows, fly balls hit north go **into the wind**, so they slow down and do not reach the home run wall.",
      "**Precipitation**: on summer afternoons, sudden **thunderstorms** (convection rain) stop the game, but this kind of rain usually does not last long.",
      "**Temperature**: when it is too hot, players can get heatstroke, which hurts their play."
     ]
    }
   ],
   "think": [
    {
     "q": "Does heavy rain over a short time bring only disasters?",
     "a": "No. Heavy rain can cause floods, but it can also **refill reservoirs quickly** and help end droughts."
    }
   ]
  }
 ],
 "myths": [
  {
   "wrong": "Weather and climate mean the same thing.",
   "right": "**Weather** is the state of the air over a short time; **climate** is the average over a long time."
  },
  {
   "wrong": "An east wind is wind blowing toward the east.",
   "right": "Wind direction is where the wind **comes from**: an east wind **comes from the east**."
  },
  {
   "wrong": "Yearly precipitation is the average of 12 months of precipitation.",
   "right": "Yearly precipitation is the **total** of 12 months of precipitation."
  },
  {
   "wrong": "Higher places are closer to the sun, so they are warmer.",
   "right": "**The higher the land, the lower the temperature**, and the lower the air pressure."
  },
  {
   "wrong": "All of Taiwan has rainy summers and dry winters.",
   "right": "The **north** faces the northeast monsoon in winter, so it is rainy in winter too. The **south** has the clearest wet and dry seasons."
  }
 ],
 "explore": [
  {
   "icon": "▶️",
   "title": "Lesson video playlist",
   "desc": "The YouTube playlist from the teacher’s slides.",
   "href": "https://www.youtube.com/playlist?list=PLYKuKYmMo3zGSnZan5Hn5CfsWARq3xoLF"
  },
  {
   "icon": "🌦️",
   "title": "Where plum rain comes from",
   "desc": "CommonWealth Parenting (2018): a video about plum rain.",
   "href": "https://www.youtube.com/watch?v=MLlHsURc75w"
  },
  {
   "icon": "🧅",
   "title": "Hengchun’s downslope wind",
   "desc": "TTV News (2024): a report about Hengchun.",
   "href": "https://youtu.be/mY2P7h7TlgM"
  },
  {
   "icon": "💧",
   "title": "Floods and droughts",
   "desc": "FTV News (2024): a report about Taiwan’s water resources.",
   "href": "https://youtu.be/cmacYYVInWo"
  },
  {
   "icon": "🛰️",
   "title": "Central Weather Administration",
   "desc": "Look up weather maps, satellite cloud images, and climate data.",
   "href": "https://www.cwa.gov.tw/"
  }
 ],
 "checklist": [
  "I can tell weather and climate apart.",
  "I can name the four weather elements: temperature, precipitation, air pressure, and wind.",
  "I can compare the causes and features of orographic, convection, and frontal rain.",
  "I can explain the air movement and weather of high and low pressure, and work out wind direction.",
  "I can work out yearly mean temperature, yearly precipitation, and yearly temperature range, and draw a climate chart.",
  "I can explain how latitude, landforms, and monsoons affect Taiwan’s temperature and rainfall.",
  "I can explain the causes and effects of cold damage, drought, and floods."
 ]
});
