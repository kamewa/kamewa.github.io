/* English version of "認識位置與地圖" — generated from lessons/location-map.js (simple English, key terms with Chinese). Speaker notes stay in Chinese for the teacher. */
registerLesson({
 "id": "location-map",
 "title": "Location and Maps",
 "subtitle": "Use directions, coordinates, and maps to say clearly “where”",
 "periods": "4 class periods",
 "cover": "🧭",
 "intro": {
  "icon": "🗺️",
  "title": "Think: A tourist map of Checheng",
  "text": "Tourist spots often draw buildings and roads on the ground as maps, using **symbols, words, or colors**, so visitors can follow them. If you can describe a location and read a map, you can find the information you need on a map.",
  "think": {
   "q": "If you follow the route on the Checheng tourist map from the parking lot to Checheng Old Street, what places might you pass?",
   "a": "Parking lot → bus stop → police station → Forest Road shopping area → overhead crane → log pond → tea house → wood tea shop → wood museum → **Old Street**."
  }
 },
 "goals": [
  "How are relative location and absolute location shown in different ways?",
  "How is longitude related to time zones?",
  "How is latitude related to climate?",
  "What should you look for when you read a map?"
 ],
 "sections": [
  {
   "code": "1-1",
   "title": "How to Describe a Location",
   "icon": "📍",
   "color": "teal",
   "concepts": [
    {
     "icon": "🧭",
     "color": "teal",
     "title": "Relative location: using a place as the starting point",
     "text": "First choose a **reference point（基準）**. Then say which **direction（方位）** and how far the target is from it. This is **relative location（相對位置）**. It shows how a place relates to the places around it.",
     "points": [
      "**North, south, east, and west** are the four main directions. To be more exact, we use the **eight directions（八方位）**.",
      "A different reference point gives a different answer: from the teacher, Xiaotian is to the **southwest**; from Xiaotian, the teacher is to the **northeast**."
     ],
     "image": {
      "src": "lessons/img/en/location-relative.svg",
      "caption": "Eight directions and relative location (drawn for this lesson)"
     },
     "note": "請學生先指出誰是「基準」，再說方位。"
    },
    {
     "icon": "🔢",
     "color": "blue",
     "title": "Absolute location: using a coordinate system",
     "text": "**Absolute location（絕對位置）** uses a **coordinate system（座標系統）** (a horizontal number + a vertical number) to show a place. It does not depend on other places.",
     "grid": [
      {
       "icon": "🪑",
       "title": "Grid coordinates",
       "text": "Classroom seats: “which row, which column.”"
      },
      {
       "icon": "🌐",
       "title": "Latitude and longitude coordinates",
       "text": "Use longitude and latitude to mark any place on Earth."
      },
      {
       "icon": "🏠",
       "title": "Address",
       "text": "City, road name, and house number are also a way to find a place."
      }
     ]
    }
   ],
   "think": [
    {
     "q": "The teacher asks the student in “Row 3, Column 2” to answer. Is this relative location or absolute location?",
     "a": "**Absolute location**—it uses a coordinate made of a row and a column."
    }
   ],
   "quiz": [
    {
     "q": "Which sentence uses relative location?",
     "options": [
      "My seat is in Row 2, Column 4.",
      "The school is about 500 meters northeast of the train station.",
      "Taipei 101 is near (25°N, 121.5°E).",
      "My house number is No. 100, Zhongshan Road."
     ],
     "answer": 1,
     "explain": "It uses **the train station as the reference point** and gives a direction and a distance, so it is **relative location**. The other three are coordinates or addresses, so they are **absolute location**."
    },
    {
     "q": "Xiaotian is southwest of the teacher. If we use Xiaotian as the reference point, where is the teacher?",
     "options": [
      "Southwest",
      "Southeast",
      "Northeast",
      "Northwest"
     ],
     "answer": 2,
     "explain": "When you swap the reference point and the target, the direction becomes the **opposite**: the opposite of southwest is **northeast**."
    }
   ],
   "can": "I can explain the difference between relative and absolute location, and use coordinates to show a location."
  },
  {
   "code": "1-2",
   "title": "The Grid of Longitude and Latitude",
   "icon": "🌐",
   "color": "blue",
   "concepts": [
    {
     "icon": "🌍",
     "color": "blue",
     "title": "Lines of longitude: joining the North and South Poles",
     "text": "Earth spins from west to east around an imaginary **axis（地軸）**. A **half circle** on Earth’s surface that joins the South Pole and the North Pole is a **line of longitude（經線）**.",
     "points": [
      "In 1884, countries agreed that the line through the **Royal Observatory, Greenwich, London** is the **0° line of longitude**. It is called the **Prime Meridian（本初經線）**.",
      "East of the 0° line is the **Eastern Hemisphere** (east longitude). West of it is the **Western Hemisphere** (west longitude). Each side has **180 degrees**. 180°E and 180°W are the same line.",
      "All lines of longitude are **the same length**."
     ]
    },
    {
     "icon": "🎯",
     "color": "red",
     "title": "Lines of latitude: circles at right angles to the axis",
     "text": "If you cut Earth with flat planes **at right angles** to the axis, the circles on the surface are **lines of latitude（緯線）**.",
     "points": [
      "The **Equator（赤道）** is 0° latitude. It is the **longest** line of latitude, and it splits Earth into the Northern and Southern Hemispheres.",
      "North of the Equator is **north latitude**, and south of it is **south latitude**. Each has **90 degrees**. Closer to the poles, the lines get **shorter**.",
      "Lines of latitude are **parallel** and never meet."
     ]
    },
    {
     "icon": "📐",
     "color": "yellow",
     "title": "Longitude and latitude coordinates",
     "text": "Lines of longitude and latitude make a grid. We can use it as a **coordinate system** to find places on Earth.",
     "grid": [
      {
       "icon": "🔤",
       "title": "Letter codes",
       "text": "**N** north latitude, **S** south latitude, **E** east longitude, **W** west longitude."
      },
      {
       "icon": "📍",
       "title": "How to write it",
       "text": "Example: Point A is written as (**30°N, 60°E**)."
      },
      {
       "icon": "↔️",
       "title": "How to count longitude",
       "text": "East longitude gets bigger going **east**; west longitude gets bigger going **west**."
      },
      {
       "icon": "↕️",
       "title": "How to count latitude",
       "text": "North latitude gets bigger going **north**; south latitude gets bigger going **south**."
      }
     ],
     "image": {
      "src": "lessons/img/en/location-grid.svg",
      "caption": "The grid of longitude and latitude (drawn for this lesson)"
     }
    }
   ],
   "think": [
    {
     "q": "Taiwan’s Tropic of Cancer marker is at about (23.5°N, 121°E). Is it in the Northern or Southern Hemisphere? The Eastern or Western Hemisphere?",
     "a": "“N” means the **Northern Hemisphere**, and “E” means the **Eastern Hemisphere**."
    }
   ],
   "quiz": [
    {
     "q": "When making a geography picture book, which sentence is **wrong**?",
     "options": [
      "The Prime Meridian monument is in Hualien, Taiwan.",
      "The 0° and 180° lines of longitude split Earth into the Eastern and Western Hemispheres.",
      "The Equator is the longest line of latitude, and lines get shorter toward the poles.",
      "A line of latitude is a circle cut by a plane at right angles to Earth’s axis."
     ],
     "answer": 0,
     "explain": "The Prime Meridian goes through the **Royal Observatory, Greenwich, London**. Hualien has a **Tropic of Cancer（北回歸線）** marker."
    },
    {
     "q": "Which sentence about longitude and latitude is correct?",
     "options": [
      "All lines of latitude are the same length.",
      "Longitude goes 90 degrees north and 90 degrees south.",
      "All lines of longitude are the same length.",
      "Lines of latitude meet at the North and South Poles."
     ],
     "answer": 2,
     "explain": "**All lines of longitude are the same length**, and they meet at the poles. Lines of latitude have different lengths and are parallel. North and south latitude each go to 90 degrees."
    }
   ],
   "can": "I understand what lines of longitude and latitude are, and how coordinates work."
  },
  {
   "code": "1-3",
   "title": "Location and Everyday Life",
   "icon": "⏰",
   "color": "yellow",
   "concepts": [
    {
     "icon": "🕐",
     "color": "yellow",
     "title": "Longitude and time zones",
     "text": "Earth takes **24 hours** to spin **360 degrees**, so every **15 degrees** makes one **time zone（時區）**, with a **1-hour** difference.",
     "points": [
      "Today **Greenwich Mean Time (GMT)** is used as the world standard time.",
      "Earth spins from west to east, so **going east you add time, and going west you take away time**.",
      "The two sides of the **International Date Line（國際換日線）** (about 180° longitude) are **one day** apart.",
      "Time difference: Taipei (120°E) and London (0°) are (120 − 0) ÷ 15 = **8 hours** apart. Taipei is 8 hours **ahead of** London."
     ],
     "image": {
      "src": "lessons/img/en/location-timezone.svg",
      "caption": "Longitude and time zones (drawn for this lesson)"
     }
    },
    {
     "icon": "☀️",
     "color": "red",
     "title": "Latitude and climate",
     "text": "At **low latitudes**, sunlight hits the ground **directly（直射）**, so the ground gets a lot of heat and it is hot. At **high latitudes**, sunlight comes in **at a slant（斜射）**, so the heat spreads out and it is cold.",
     "points": [
      "Using the **Tropics (23.5°)** and the **Polar Circles (66.5°)** as lines, both hemispheres can be split into the **tropical zone, temperate zone, and frigid zone（熱帶、溫帶、寒帶）**.",
      "Earth’s axis is tilted 23.5°, so the place where the sun shines straight down moves back and forth **between the Tropic of Cancer and the Tropic of Capricorn**. This causes the **seasons**.",
      "In June the sun shines straight on the Northern Hemisphere (summer there). In December it shines straight on the Southern Hemisphere. So the two hemispheres have **opposite seasons**."
     ],
     "image": {
      "src": "lessons/img/en/location-latitude.svg",
      "caption": "Latitude and climate zones (drawn for this lesson)"
     }
    }
   ],
   "think": [
    {
     "q": "On New Year’s Eve, London welcomes the new year 8 hours after Taipei. Why?",
     "a": "Earth spins **from west to east**, so places in the east see the sun first. Taipei is at 120°E, **farther east** than London on the Prime Meridian, so its time is earlier."
    },
    {
     "q": "If you went to London for New Year’s Eve, how should you change your clothes?",
     "a": "London is at a **higher latitude**. December is winter in the Northern Hemisphere, and it is colder than Taipei, so you need **thicker, warmer clothes**."
    }
   ],
   "quiz": [
    {
     "q": "Four travel writers leave Taiwan (GMT+8). Whose place has the **biggest time difference** from Taiwan?",
     "options": [
      "Rio, Brazil (about 43°W)",
      "New York, USA (about 74°W)",
      "Dhaka, Bangladesh (about 90°E)",
      "Moscow, Russia (about 38°E)"
     ],
     "answer": 1,
     "explain": "New York is near 74°W, about GMT−5. It is about **13 hours** different from Taiwan, the biggest difference."
    },
    {
     "q": "In December, you travel to Sydney, Australia, in the Southern Hemisphere. What season is it most likely to be there?",
     "options": [
      "Spring",
      "Summer",
      "Fall",
      "Winter"
     ],
     "answer": 1,
     "explain": "In December the sun shines straight on the **Southern Hemisphere**, so it is **summer** there—the opposite of Taiwan."
    }
   ],
   "can": "I can explain the causes and effects between longitude and time zones, and between latitude and climate."
  },
  {
   "code": "1-4",
   "title": "How to Read a Map",
   "icon": "🗺️",
   "color": "red",
   "concepts": [
    {
     "icon": "🧩",
     "color": "red",
     "title": "The four parts of a map",
     "text": "A map shows the land as seen from above (**a bird’s-eye view（俯視）**), using symbols, words, or colors. When you read a map, first find these four parts:",
     "grid": [
      {
       "icon": "🏷️",
       "title": "Title",
       "text": "Tells the type of map or its main content."
      },
      {
       "icon": "🔣",
       "title": "Legend",
       "text": "Symbols that stand for things on the ground."
      },
      {
       "icon": "🧭",
       "title": "North arrow",
       "text": "Shows direction. If there is no north arrow, **the top of the map is usually north**. You can also use longitude and latitude."
      },
      {
       "icon": "📏",
       "title": "Scale",
       "text": "The ratio between lengths on the map and on the real ground. It helps you find the **real distance** between two places."
      }
     ],
     "image": {
      "src": "lessons/img/en/location-elements.svg",
      "caption": "The parts of a map (drawn for this lesson)"
     }
    },
    {
     "icon": "📏",
     "color": "yellow",
     "title": "Scale: large and small",
     "text": "Scale = **map distance ÷ real distance**. It can be shown in three ways: **numbers, words, or a scale bar**.",
     "points": [
      "Example: 1 cm on the map stands for 10,000 cm in real life, so the scale is **1/10,000**.",
      "When you copy a map larger or smaller, the **scale bar** changes size with it, so it is still correct. The number scale is no longer correct.",
      "**Large-scale map（大比例尺地圖）**: covers a **small** area with **lots of detail** (for example, a neighborhood or city map).",
      "**Small-scale map（小比例尺地圖）**: covers a **large** area with **little detail** (for example, a map of all of Taiwan or the world)."
     ],
     "image": {
      "src": "lessons/img/en/location-scale.svg",
      "caption": "Ways to show scale, and large vs. small scale (drawn for this lesson)"
     }
    },
    {
     "icon": "📱",
     "color": "teal",
     "title": "Types of maps",
     "text": "Maps show different things for different purposes.",
     "grid": [
      {
       "icon": "🏙️",
       "title": "General-purpose maps",
       "text": "Lots of information, such as roads, parks, malls, and parking lots."
      },
      {
       "icon": "🚲",
       "title": "Thematic maps",
       "text": "Show **only one topic**, such as bike paths or bus routes."
      },
      {
       "icon": "🛰️",
       "title": "Digital maps",
       "text": "You can search places, zoom freely, and get fast updates. With **GPS**, they can plan routes for you."
      }
     ]
    }
   ],
   "think": [
    {
     "q": "After you enlarge a map on a copy machine, which scale is still correct: numbers, words, or a scale bar?",
     "a": "**The scale bar**. It gets bigger together with the map, so the ratio stays the same. The numbers in a number scale do not change, so it becomes wrong."
    }
   ],
   "quiz": [
    {
     "q": "Xiuhe drew a map of her neighborhood. The teacher said, “I can’t tell how far your home is from the main landmarks.” Which part should she add?",
     "options": [
      "Title",
      "Legend",
      "North arrow",
      "Scale"
     ],
     "answer": 3,
     "explain": "A **scale** turns map distance into real distance."
    },
    {
     "q": "Wenbin wrote notes about scale. Which note is **wrong**?",
     "options": [
      "Scale = map distance / real distance",
      "Scale can be shown with numbers, words, or a scale bar.",
      "A large-scale map has little detail; a small-scale map has lots of detail.",
      "A large-scale map covers a small area; a small-scale map covers a large area."
     ],
     "answer": 2,
     "explain": "It is the other way around: a **large-scale** map covers a small area with **lots of detail**; a small-scale map covers a large area with little detail."
    }
   ],
   "can": "I can name the parts of a map and explain why and how we use a scale."
  },
  {
   "code": "Activity",
   "title": "Planning a route with a digital map",
   "icon": "📱",
   "color": "teal",
   "concepts": [
    {
     "icon": "🧭",
     "color": "teal",
     "title": "Plan a route with a digital map",
     "text": "A digital map can show travel times and the shortest route. While you move, you can check your direction, so you get lost less.",
     "points": [
      "① Open a map website or app. Type in the place you want to go and search.",
      "② Press “Directions,” type in where you start, and choose how to travel (walk, bus, MRT…).",
      "③ Compare the time and transfers of different routes, and pick the best one.",
      "Try it: Plan a route from school to a place you want to visit. Share with classmates the problems you might meet."
     ]
    }
   ]
  },
  {
   "code": "Reading",
   "title": "Time Travel with Maps",
   "icon": "🕰️",
   "color": "purple",
   "concepts": [
    {
     "icon": "📜",
     "color": "purple",
     "title": "Maps from different years record how places change",
     "text": "A map is like a **slice of time and space**. It keeps the landforms, rivers, land use, and districts of its time. If you compare maps from different years, you can see how the land changed.",
     "points": [
      "Take Songshan and Neihu in Taipei: many **rice fields** in 1904 had become **housing areas** by 2017.",
      "To stop floods, parts of the **Keelung River（基隆河）** were **straightened**, so the river moved a lot."
     ]
    }
   ],
   "think": [
    {
     "q": "Compare the old and new maps. What might the area near MRT Jiannan Road Station have been before? How can you tell?",
     "a": "It might have been an **old river channel**. Before the river was straightened, this place was in the Keelung River. Now the map shows **buildings** there."
    }
   ]
  }
 ],
 "myths": [
  {
   "wrong": "The top of a map is always north.",
   "right": "Look at the **north arrow** first. Only when there is no north arrow is the top “usually” north. You can also use **longitude and latitude**."
  },
  {
   "wrong": "A large-scale map shows a larger area.",
   "right": "A **large-scale** map covers a **small** area with lots of detail. A **small-scale** map covers a large area with little detail."
  },
  {
   "wrong": "When you fly east, you should set your watch back (take away time).",
   "right": "Earth spins from west to east, so **going east you add time, and going west you take away time**."
  },
  {
   "wrong": "Like lines of latitude, lines of longitude get shorter toward the poles.",
   "right": "**All lines of longitude are the same length**. Only **lines of latitude** are longest at the Equator and get shorter toward the poles."
  }
 ],
 "explore": [
  {
   "icon": "▶️",
   "title": "Lesson video playlist",
   "desc": "The YouTube playlist from the teacher’s slides.",
   "href": "https://www.youtube.com/playlist?list=PLYKuKYmMo3zHOMUIX9fgwQSVjEQHQiegx"
  },
  {
   "icon": "🗺️",
   "title": "Google Maps",
   "desc": "Try route planning: type in a start point and a destination.",
   "href": "https://www.google.com/maps"
  },
  {
   "icon": "🕰️",
   "title": "Taiwan Historical Maps",
   "desc": "Academia Sinica: compare maps of Taiwan from different years.",
   "href": "https://gissrv4.sinica.edu.tw/gis/twhgis/"
  },
  {
   "icon": "🌐",
   "title": "World Clock",
   "desc": "timeanddate: see what time it is around the world.",
   "href": "https://www.timeanddate.com/worldclock/"
  }
 ],
 "checklist": [
  "I can describe relative location with the eight directions and say what the reference point is.",
  "I can show absolute location with coordinates.",
  "I can explain lines of longitude, lines of latitude, the Prime Meridian, and the Equator.",
  "I can write a place’s location as (latitude, longitude).",
  "I can work out the time difference between two places.",
  "I can explain how latitude relates to the tropical, temperate, and frigid zones, and why we have seasons.",
  "I can name the four parts of a map and use the scale to find real distance.",
  "I can compare large-scale and small-scale maps."
 ]
});
