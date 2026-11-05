"use client";
import { useMemo, useState } from "react";
import ToolPage from "../../components/ToolPage";

const names = [
  {
    "en": "Aabid",
    "ur": "عابد",
    "meaning": "Worshipper",
    "gender": "boy"
  },
  {
    "en": "Aabish",
    "ur": "آبش",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Aadil",
    "ur": "عادل",
    "meaning": "Just, fair",
    "gender": "boy"
  },
  {
    "en": "Aafaq",
    "ur": "آفاق",
    "meaning": "Horizons",
    "gender": "boy"
  },
  {
    "en": "Aafiya",
    "ur": "عافیہ",
    "meaning": "Health; well-being",
    "gender": "girl"
  },
  {
    "en": "Waseem",
    "ur": "وسیم",
    "meaning": "Graceful; handsome",
    "gender": "boy"
  },
  {
    "en": "Aahil",
    "ur": "آہل",
    "meaning": "Prince; leader",
    "gender": "boy"
  },
  {
    "en": "Aaira",
    "ur": "آئرہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Aaliya",
    "ur": "عالیہ",
    "meaning": "High; exalted",
    "gender": "girl"
  },
  {
    "en": "Aaliyah",
    "ur": "عالیہ",
    "meaning": "High; exalted",
    "gender": "girl"
  },
  {
    "en": "Aamir",
    "ur": "عامر",
    "meaning": "Prosperous",
    "gender": "boy"
  },
  {
    "en": "Aamira",
    "ur": "عامرہ",
    "meaning": "Prosperous; inhabited",
    "gender": "girl"
  },
  {
    "en": "Aamna",
    "ur": "آمنہ",
    "meaning": "Safe; peaceful",
    "gender": "girl"
  },
  {
    "en": "Aanisah",
    "ur": "انیسہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Aariz",
    "ur": "عارض",
    "meaning": "Respectable",
    "gender": "boy"
  },
  {
    "en": "Aashir",
    "ur": "عاشر",
    "meaning": "Living well",
    "gender": "boy"
  },
  {
    "en": "Aasim",
    "ur": "عاصم",
    "meaning": "Protector",
    "gender": "boy"
  },
  {
    "en": "Aasiya",
    "ur": "آسیہ",
    "meaning": "One who tends to the weak; a revered name",
    "gender": "girl"
  },
  {
    "en": "Aasma",
    "ur": "اسماء",
    "meaning": "Exalted; sky",
    "gender": "girl"
  },
  {
    "en": "Aatif",
    "ur": "عاطف",
    "meaning": "Kind, compassionate",
    "gender": "boy"
  },
  {
    "en": "Aayan",
    "ur": "ایان",
    "meaning": "Gift of God (popular usage)",
    "gender": "boy"
  },
  {
    "en": "Aazim",
    "ur": "عظیم",
    "meaning": "Determined",
    "gender": "boy"
  },
  {
    "en": "Abbas",
    "ur": "عباس",
    "meaning": "Lion",
    "gender": "boy"
  },
  {
    "en": "Abdul Ahad",
    "ur": "عبدالاحد",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Aziz",
    "ur": "عبدالعزیز",
    "meaning": "Servant of the Almighty",
    "gender": "boy"
  },
  {
    "en": "Abdul Bari",
    "ur": "عبدالباری",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Basit",
    "ur": "عبدالباسط",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Hadi",
    "ur": "عبدالہادی",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Hakeem",
    "ur": "عبدالحکیم",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Jabbar",
    "ur": "عبدالجبار",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Karim",
    "ur": "عبدالکریم",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Latif",
    "ur": "عبداللطیف",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Malik",
    "ur": "عبدالملک",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Qadir",
    "ur": "عبدالقادر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Rahman",
    "ur": "عبدالرحمٰن",
    "meaning": "Servant of the Most Merciful",
    "gender": "boy"
  },
  {
    "en": "Abdul Rauf",
    "ur": "عبدالرؤوف",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Samad",
    "ur": "عبدالصمد",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdul Wahab",
    "ur": "عبدالوهاب",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Abdullah",
    "ur": "عبداللہ",
    "meaning": "Servant of Allah",
    "gender": "boy"
  },
  {
    "en": "Abeer",
    "ur": "عبیر",
    "meaning": "Fragrance",
    "gender": "girl"
  },
  {
    "en": "Abid",
    "ur": "عابد",
    "meaning": "Worshipper",
    "gender": "boy"
  },
  {
    "en": "Abrar",
    "ur": "ابرار",
    "meaning": "Righteous",
    "gender": "boy"
  },
  {
    "en": "Adnan",
    "ur": "عدنان",
    "meaning": "Settler; one who stays",
    "gender": "boy"
  },
  {
    "en": "Afaf",
    "ur": "عفاف",
    "meaning": "Purity; modesty",
    "gender": "girl"
  },
  {
    "en": "Affan",
    "ur": "عفان",
    "meaning": "Virtuous; forgiving",
    "gender": "boy"
  },
  {
    "en": "Afia",
    "ur": "عافیہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Afifa",
    "ur": "عفیفہ",
    "meaning": "Chaste; modest",
    "gender": "girl"
  },
  {
    "en": "Afra",
    "ur": "عفراء",
    "meaning": "Fair; white",
    "gender": "girl"
  },
  {
    "en": "Afsana",
    "ur": "افسانہ",
    "meaning": "Story; tale",
    "gender": "girl"
  },
  {
    "en": "Afsheen",
    "ur": "افشین",
    "meaning": "Shining; sparkling",
    "gender": "girl"
  },
  {
    "en": "Ahad",
    "ur": "احد",
    "meaning": "One; unique",
    "gender": "boy"
  },
  {
    "en": "Ahmed",
    "ur": "احمد",
    "meaning": "Highly praised",
    "gender": "boy"
  },
  {
    "en": "Ahsan",
    "ur": "احسن",
    "meaning": "Best; excellent",
    "gender": "boy"
  },
  {
    "en": "Ahtesham",
    "ur": "احتشام",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Aiman",
    "ur": "ایمن",
    "meaning": "Blessed; fortunate",
    "gender": "girl"
  },
  {
    "en": "Aina",
    "ur": "آئینہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Aisha",
    "ur": "عائشہ",
    "meaning": "Alive; living",
    "gender": "girl"
  },
  {
    "en": "Aishah",
    "ur": "عائشہ",
    "meaning": "Alive; living",
    "gender": "girl"
  },
  {
    "en": "Aiza",
    "ur": "عائزہ",
    "meaning": "Respected; noble (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Aizaz",
    "ur": "اعزاز",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Ajmal",
    "ur": "اجمل",
    "meaning": "Most beautiful",
    "gender": "boy"
  },
  {
    "en": "Ajwa",
    "ur": "اجوہ",
    "meaning": "A type of date",
    "gender": "girl"
  },
  {
    "en": "Akbar",
    "ur": "اکبر",
    "meaning": "Greater; greatest",
    "gender": "boy"
  },
  {
    "en": "Akeel",
    "ur": "عقیل",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Akhila",
    "ur": "اخیلہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Akhtar",
    "ur": "اختر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Akif",
    "ur": "عاکف",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Akram",
    "ur": "اکرم",
    "meaning": "Most generous",
    "gender": "boy"
  },
  {
    "en": "Alee",
    "ur": "علی",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Aleena",
    "ur": "علینہ",
    "meaning": "Soft; delicate (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Ali",
    "ur": "علی",
    "meaning": "Elevated; noble",
    "gender": "boy"
  },
  {
    "en": "Alina",
    "ur": "الینا",
    "meaning": "Bright; beautiful (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Alishba",
    "ur": "الیشبا",
    "meaning": "Beautiful (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Aliya",
    "ur": "عالیہ",
    "meaning": "Elevated; noble",
    "gender": "girl"
  },
  {
    "en": "Amal",
    "ur": "امل",
    "meaning": "Hope; aspiration",
    "gender": "girl"
  },
  {
    "en": "Amara",
    "ur": "امارہ",
    "meaning": "Grace; everlasting (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Amber",
    "ur": "عنبر",
    "meaning": "Amber; precious resin",
    "gender": "girl"
  },
  {
    "en": "Ammar",
    "ur": "عمار",
    "meaning": "Long-lived; builder",
    "gender": "boy"
  },
  {
    "en": "Amna",
    "ur": "آمنہ",
    "meaning": "Safe; secure",
    "gender": "girl"
  },
  {
    "en": "Anabia",
    "ur": "انابیہ",
    "meaning": "Gate of heaven (popular usage; source-dependent)",
    "gender": "girl"
  },
  {
    "en": "Anam",
    "ur": "انعم",
    "meaning": "Blessings; gifts",
    "gender": "girl"
  },
  {
    "en": "Anas",
    "ur": "انس",
    "meaning": "Friendliness; affection",
    "gender": "boy"
  },
  {
    "en": "Anaya",
    "ur": "عنایہ",
    "meaning": "Care; protection (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Anbar",
    "ur": "عنبر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Anees",
    "ur": "انیس",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Aneesa",
    "ur": "انیسہ",
    "meaning": "Friendly; companionable",
    "gender": "girl"
  },
  {
    "en": "Aneesur Rahman",
    "ur": "انیس الرحمٰن",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Anisa",
    "ur": "انیسہ",
    "meaning": "Friendly; companion",
    "gender": "girl"
  },
  {
    "en": "Anum",
    "ur": "انعم",
    "meaning": "Blessing; favour",
    "gender": "girl"
  },
  {
    "en": "Anwar",
    "ur": "انور",
    "meaning": "Radiant; luminous",
    "gender": "boy"
  },
  {
    "en": "Aqeel",
    "ur": "عقیل",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Aqib",
    "ur": "عاقب",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Aqsa",
    "ur": "اقصیٰ",
    "meaning": "Farthest; associated with Al-Aqsa",
    "gender": "girl"
  },
  {
    "en": "Areeba",
    "ur": "عریبہ",
    "meaning": "Wise; intelligent",
    "gender": "girl"
  },
  {
    "en": "Arfa",
    "ur": "ارفا",
    "meaning": "Exalted; high",
    "gender": "girl"
  },
  {
    "en": "Arham",
    "ur": "ارحم",
    "meaning": "Merciful",
    "gender": "boy"
  },
  {
    "en": "Arif",
    "ur": "عارف",
    "meaning": "Knowledgeable",
    "gender": "boy"
  },
  {
    "en": "Arisha",
    "ur": "عریشہ",
    "meaning": "High; elevated (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Arisha Noor",
    "ur": "اریشا نور",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Arman",
    "ur": "ارمان",
    "meaning": "Wish; hope",
    "gender": "boy"
  },
  {
    "en": "Arsalan",
    "ur": "ارسلان",
    "meaning": "Lion",
    "gender": "boy"
  },
  {
    "en": "Arwa",
    "ur": "اروا",
    "meaning": "Graceful; fresh",
    "gender": "girl"
  },
  {
    "en": "Asad",
    "ur": "اسد",
    "meaning": "Lion",
    "gender": "boy"
  },
  {
    "en": "Ashar",
    "ur": "اشر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Ashfaq",
    "ur": "اشفاق",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Ashhad",
    "ur": "اشہد",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Asif",
    "ur": "آصف",
    "meaning": "Capable; strong",
    "gender": "boy"
  },
  {
    "en": "Asim",
    "ur": "عاصم",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Asiya",
    "ur": "آسیہ",
    "meaning": "A revered name",
    "gender": "girl"
  },
  {
    "en": "Asma",
    "ur": "اسما",
    "meaning": "Lofty; exalted",
    "gender": "girl"
  },
  {
    "en": "Atif",
    "ur": "عاطف",
    "meaning": "Compassionate",
    "gender": "boy"
  },
  {
    "en": "Atifa",
    "ur": "عاطفہ",
    "meaning": "Kind; affectionate",
    "gender": "girl"
  },
  {
    "en": "Awais",
    "ur": "اویس",
    "meaning": "Name of a revered early Muslim",
    "gender": "boy"
  },
  {
    "en": "Ayan",
    "ur": "ایان",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Ayat",
    "ur": "آیات",
    "meaning": "Signs; verses",
    "gender": "girl"
  },
  {
    "en": "Ayaz",
    "ur": "ایاز",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Ayesha",
    "ur": "عائشہ",
    "meaning": "Alive; thriving",
    "gender": "girl"
  },
  {
    "en": "Ayla",
    "ur": "آئلہ",
    "meaning": "Moonlight (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Aynur",
    "ur": "عین النور",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Ayyub",
    "ur": "ایوب",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Azan",
    "ur": "اذان",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Azhar",
    "ur": "اظہر",
    "meaning": "Bright; radiant",
    "gender": "boy"
  },
  {
    "en": "Aziz",
    "ur": "عزیز",
    "meaning": "Dear; mighty",
    "gender": "boy"
  },
  {
    "en": "Azka",
    "ur": "ازکیٰ",
    "meaning": "Pure; virtuous",
    "gender": "girl"
  },
  {
    "en": "Azlan",
    "ur": "ازلان",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Azra",
    "ur": "عذرا",
    "meaning": "Pure; maiden",
    "gender": "girl"
  },
  {
    "en": "Babar",
    "ur": "بابر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Badr",
    "ur": "بدر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Bakhtiar",
    "ur": "بختیار",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Bano",
    "ur": "بانو",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Baqir",
    "ur": "باقر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Bareera",
    "ur": "بریرہ",
    "meaning": "Pious; virtuous",
    "gender": "girl"
  },
  {
    "en": "Bariha",
    "ur": "بارعہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Basim",
    "ur": "باسم",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Batool",
    "ur": "بتول",
    "meaning": "Pure; devoted",
    "gender": "girl"
  },
  {
    "en": "Benazir",
    "ur": "بینظیر",
    "meaning": "Matchless; incomparable",
    "gender": "girl"
  },
  {
    "en": "Bilal",
    "ur": "بلال",
    "meaning": "Moistening; name of a companion",
    "gender": "boy"
  },
  {
    "en": "Burhan",
    "ur": "برہان",
    "meaning": "Proof; evidence",
    "gender": "boy"
  },
  {
    "en": "Bushra",
    "ur": "بشریٰ",
    "meaning": "Good news",
    "gender": "girl"
  },
  {
    "en": "Dania",
    "ur": "دانیا",
    "meaning": "Near; close",
    "gender": "girl"
  },
  {
    "en": "Danish",
    "ur": "دانش",
    "meaning": "Wisdom; knowledge",
    "gender": "boy"
  },
  {
    "en": "Daniya",
    "ur": "دانیہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Dareen",
    "ur": "دارین",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Dawood",
    "ur": "داؤد",
    "meaning": "Beloved; a prophet's name",
    "gender": "boy"
  },
  {
    "en": "Deeba",
    "ur": "دیبا",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Dua",
    "ur": "دعا",
    "meaning": "Prayer; supplication",
    "gender": "girl"
  },
  {
    "en": "Ebrahim",
    "ur": "ابراہیم",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Ehsan",
    "ur": "احسان",
    "meaning": "Kindness; excellence",
    "gender": "boy"
  },
  {
    "en": "Eimaan",
    "ur": "ایمان",
    "meaning": "Faith",
    "gender": "girl"
  },
  {
    "en": "Ejaz",
    "ur": "اعجاز",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Emad",
    "ur": "عماد",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Eman",
    "ur": "ایمان",
    "meaning": "Faith; belief",
    "gender": "girl"
  },
  {
    "en": "Erum",
    "ur": "ارم",
    "meaning": "Garden of heaven (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Esha",
    "ur": "عشاء",
    "meaning": "Desire; life (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Fadwa",
    "ur": "فدوٰی",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Fahad",
    "ur": "فہد",
    "meaning": "Panther; leopard",
    "gender": "boy"
  },
  {
    "en": "Faheem",
    "ur": "فہیم",
    "meaning": "Intelligent",
    "gender": "boy"
  },
  {
    "en": "Fahim",
    "ur": "فہیم",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Faisal",
    "ur": "فیصل",
    "meaning": "Judge; decisive",
    "gender": "boy"
  },
  {
    "en": "Faiza",
    "ur": "فائزہ",
    "meaning": "Successful; victorious",
    "gender": "girl"
  },
  {
    "en": "Faizan",
    "ur": "فیضان",
    "meaning": "Grace; generosity",
    "gender": "boy"
  },
  {
    "en": "Falak",
    "ur": "فلک",
    "meaning": "Sky; heavens",
    "gender": "girl"
  },
  {
    "en": "Farah",
    "ur": "فرح",
    "meaning": "Joy; happiness",
    "gender": "girl"
  },
  {
    "en": "Faraz",
    "ur": "فراز",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Fareeha",
    "ur": "فریحہ",
    "meaning": "Happy; joyful",
    "gender": "girl"
  },
  {
    "en": "Farhan",
    "ur": "فرحان",
    "meaning": "Joyful",
    "gender": "boy"
  },
  {
    "en": "Farid",
    "ur": "فرید",
    "meaning": "Unique",
    "gender": "boy"
  },
  {
    "en": "Farida",
    "ur": "فریدہ",
    "meaning": "Unique; precious",
    "gender": "girl"
  },
  {
    "en": "Fariha",
    "ur": "فریحہ",
    "meaning": "Joyful",
    "gender": "girl"
  },
  {
    "en": "Faris",
    "ur": "فارس",
    "meaning": "Knight; horseman",
    "gender": "boy"
  },
  {
    "en": "Farwa",
    "ur": "فاروا",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Faryal",
    "ur": "فریال",
    "meaning": "A traditional Persian name",
    "gender": "girl"
  },
  {
    "en": "Fateha",
    "ur": "فاتحہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Fatima",
    "ur": "فاطمہ",
    "meaning": "One who abstains; name of the Prophet's daughter",
    "gender": "girl"
  },
  {
    "en": "Fatimah",
    "ur": "فاطمہ",
    "meaning": "One who abstains",
    "gender": "girl"
  },
  {
    "en": "Fawad",
    "ur": "فواد",
    "meaning": "Heart",
    "gender": "boy"
  },
  {
    "en": "Fayyaz",
    "ur": "فیاض",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Feroz",
    "ur": "فیروز",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Fiza",
    "ur": "فضہ",
    "meaning": "Breeze; atmosphere",
    "gender": "girl"
  },
  {
    "en": "Fozia",
    "ur": "فوزیہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Furqan",
    "ur": "فرقان",
    "meaning": "Criterion between right and wrong",
    "gender": "boy"
  },
  {
    "en": "Ghalib",
    "ur": "غالب",
    "meaning": "Victorious",
    "gender": "boy"
  },
  {
    "en": "Ghazal",
    "ur": "غزل",
    "meaning": "A poetic form",
    "gender": "girl"
  },
  {
    "en": "Ghazala",
    "ur": "غزالہ",
    "meaning": "Gazelle",
    "gender": "girl"
  },
  {
    "en": "Ghazi",
    "ur": "غازی",
    "meaning": "Warrior",
    "gender": "boy"
  },
  {
    "en": "Ghina",
    "ur": "غنا",
    "meaning": "Richness; contentment",
    "gender": "girl"
  },
  {
    "en": "Ghulam Mustafa",
    "ur": "غلام مصطفیٰ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Gul",
    "ur": "گل",
    "meaning": "Flower; rose",
    "gender": "girl"
  },
  {
    "en": "Gulalai",
    "ur": "گلالئی",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Gulnaz",
    "ur": "گلناز",
    "meaning": "Proud as a flower",
    "gender": "girl"
  },
  {
    "en": "Gulrukh",
    "ur": "گل رخ",
    "meaning": "Rose-faced",
    "gender": "girl"
  },
  {
    "en": "Habib",
    "ur": "حبیب",
    "meaning": "Beloved",
    "gender": "boy"
  },
  {
    "en": "Hadi",
    "ur": "ہادی",
    "meaning": "Guide",
    "gender": "boy"
  },
  {
    "en": "Hafiz",
    "ur": "حافظ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Hafsa",
    "ur": "حفصہ",
    "meaning": "Young lioness; a revered name",
    "gender": "girl"
  },
  {
    "en": "Haider",
    "ur": "حیدر",
    "meaning": "Lion",
    "gender": "boy"
  },
  {
    "en": "Hajra",
    "ur": "ہاجرہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Haleema",
    "ur": "حلیمہ",
    "meaning": "Gentle; patient",
    "gender": "girl"
  },
  {
    "en": "Hamdan",
    "ur": "حمدان",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Hamid",
    "ur": "حمید",
    "meaning": "Praiseworthy",
    "gender": "boy"
  },
  {
    "en": "Hammad",
    "ur": "حماد",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Hamza",
    "ur": "حمزہ",
    "meaning": "Strong; steadfast",
    "gender": "boy"
  },
  {
    "en": "Hanan",
    "ur": "حنان",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Hania",
    "ur": "ہانیہ",
    "meaning": "Happy; delighted",
    "gender": "girl"
  },
  {
    "en": "Haniya",
    "ur": "ہانیہ",
    "meaning": "Happy; pleased",
    "gender": "girl"
  },
  {
    "en": "Hareem",
    "ur": "حریم",
    "meaning": "Sacred precinct; sanctuary",
    "gender": "girl"
  },
  {
    "en": "Haris",
    "ur": "حارث",
    "meaning": "Guardian; cultivator",
    "gender": "boy"
  },
  {
    "en": "Haroon",
    "ur": "ہارون",
    "meaning": "A prophet's name",
    "gender": "boy"
  },
  {
    "en": "Haseeb",
    "ur": "حسیب",
    "meaning": "Respected; noble",
    "gender": "boy"
  },
  {
    "en": "Hashim",
    "ur": "ہاشم",
    "meaning": "Crusher; generous host",
    "gender": "boy"
  },
  {
    "en": "Hassan",
    "ur": "حسن",
    "meaning": "Good; handsome",
    "gender": "boy"
  },
  {
    "en": "Hassanain",
    "ur": "حسنین",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Hatim",
    "ur": "حاتم",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Hayat",
    "ur": "حیات",
    "meaning": "Life",
    "gender": "boy"
  },
  {
    "en": "Haziq",
    "ur": "حاذق",
    "meaning": "Skillful; clever",
    "gender": "boy"
  },
  {
    "en": "Hiba",
    "ur": "ہبہ",
    "meaning": "Gift",
    "gender": "girl"
  },
  {
    "en": "Hifza",
    "ur": "حفظہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Hilal",
    "ur": "ہلال",
    "meaning": "Crescent moon",
    "gender": "boy"
  },
  {
    "en": "Hina",
    "ur": "حنا",
    "meaning": "Henna",
    "gender": "girl"
  },
  {
    "en": "Hisham",
    "ur": "ہشام",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Hoor",
    "ur": "حور",
    "meaning": "Beautiful companion of Paradise in Islamic tradition",
    "gender": "girl"
  },
  {
    "en": "Hoorain",
    "ur": "حورین",
    "meaning": "A name associated with heavenly beauty",
    "gender": "girl"
  },
  {
    "en": "Huda",
    "ur": "ہدیٰ",
    "meaning": "Guidance",
    "gender": "girl"
  },
  {
    "en": "Humaira",
    "ur": "حمیرا",
    "meaning": "Reddish; rosy",
    "gender": "girl"
  },
  {
    "en": "Huzaifa",
    "ur": "حذیفہ",
    "meaning": "Name of a companion",
    "gender": "boy"
  },
  {
    "en": "Ibrahim",
    "ur": "ابراہیم",
    "meaning": "A prophet's name",
    "gender": "boy"
  },
  {
    "en": "Idrees",
    "ur": "ادریس",
    "meaning": "A prophet's name",
    "gender": "boy"
  },
  {
    "en": "Iffat",
    "ur": "عفت",
    "meaning": "Purity; modesty",
    "gender": "girl"
  },
  {
    "en": "Iftikhar",
    "ur": "افتخار",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Ihsan",
    "ur": "احسان",
    "meaning": "Goodness; excellence",
    "gender": "boy"
  },
  {
    "en": "Ijlal",
    "ur": "اجلال",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Ikram",
    "ur": "اکرام",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Imad",
    "ur": "عماد",
    "meaning": "Support; pillar",
    "gender": "boy"
  },
  {
    "en": "Imran",
    "ur": "عمران",
    "meaning": "Prosperity; flourishing",
    "gender": "boy"
  },
  {
    "en": "Inam",
    "ur": "انعام",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Iqbal",
    "ur": "اقبال",
    "meaning": "Good fortune; prosperity",
    "gender": "boy"
  },
  {
    "en": "Iqra",
    "ur": "اقرا",
    "meaning": "Read; recite",
    "gender": "girl"
  },
  {
    "en": "Iram",
    "ur": "ارم",
    "meaning": "A garden; a place mentioned in tradition",
    "gender": "girl"
  },
  {
    "en": "Irfan",
    "ur": "عرفان",
    "meaning": "Knowledge; awareness",
    "gender": "boy"
  },
  {
    "en": "Isa",
    "ur": "عیسیٰ",
    "meaning": "A prophet's name",
    "gender": "boy"
  },
  {
    "en": "Ishaq",
    "ur": "اسحاق",
    "meaning": "A prophet's name",
    "gender": "boy"
  },
  {
    "en": "Ismail",
    "ur": "اسماعیل",
    "meaning": "A prophet's name",
    "gender": "boy"
  },
  {
    "en": "Isra",
    "ur": "اسراء",
    "meaning": "Night journey",
    "gender": "girl"
  },
  {
    "en": "Izza",
    "ur": "عزہ",
    "meaning": "Honour; might",
    "gender": "girl"
  },
  {
    "en": "Jabir",
    "ur": "جابر",
    "meaning": "Comforter; one who repairs",
    "gender": "boy"
  },
  {
    "en": "Jafar",
    "ur": "جعفر",
    "meaning": "Stream; river",
    "gender": "boy"
  },
  {
    "en": "Jahangir",
    "ur": "جہانگیر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Jalal",
    "ur": "جلال",
    "meaning": "Majesty; grandeur",
    "gender": "boy"
  },
  {
    "en": "Jamal",
    "ur": "جمال",
    "meaning": "Beauty",
    "gender": "boy"
  },
  {
    "en": "Jameel",
    "ur": "جمیل",
    "meaning": "Beautiful",
    "gender": "boy"
  },
  {
    "en": "Jannat",
    "ur": "جنت",
    "meaning": "Paradise; garden",
    "gender": "girl"
  },
  {
    "en": "Jasim",
    "ur": "جاسم",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Javeria",
    "ur": "جویریہ",
    "meaning": "A traditional Arabic name",
    "gender": "girl"
  },
  {
    "en": "Jawad",
    "ur": "جواد",
    "meaning": "Generous",
    "gender": "boy"
  },
  {
    "en": "Jawaria",
    "ur": "جواریہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Jazmin",
    "ur": "یاسمین",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Jibran",
    "ur": "جبران",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Jihan",
    "ur": "جہان",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Junaid",
    "ur": "جنید",
    "meaning": "Warrior; soldier",
    "gender": "boy"
  },
  {
    "en": "Kainat",
    "ur": "کائنات",
    "meaning": "Universe; creation",
    "gender": "girl"
  },
  {
    "en": "Kamal",
    "ur": "کمال",
    "meaning": "Perfection",
    "gender": "boy"
  },
  {
    "en": "Kanza",
    "ur": "کنزہ",
    "meaning": "Treasure",
    "gender": "girl"
  },
  {
    "en": "Kashaf",
    "ur": "کشف",
    "meaning": "Discovery; revelation",
    "gender": "girl"
  },
  {
    "en": "Kashif",
    "ur": "کاشف",
    "meaning": "Discoverer; revealer",
    "gender": "boy"
  },
  {
    "en": "Kausar",
    "ur": "کوثر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Khadija",
    "ur": "خدیجہ",
    "meaning": "A revered historical name",
    "gender": "girl"
  },
  {
    "en": "Khadijah",
    "ur": "خدیجہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Khalid",
    "ur": "خالد",
    "meaning": "Everlasting",
    "gender": "boy"
  },
  {
    "en": "Khalida",
    "ur": "خالدہ",
    "meaning": "Eternal; immortal",
    "gender": "girl"
  },
  {
    "en": "Khizar",
    "ur": "خضر",
    "meaning": "Green; associated with Khidr",
    "gender": "boy"
  },
  {
    "en": "Khurram",
    "ur": "خرم",
    "meaning": "Happy; cheerful",
    "gender": "boy"
  },
  {
    "en": "Kinza",
    "ur": "کنزہ",
    "meaning": "Hidden treasure",
    "gender": "girl"
  },
  {
    "en": "Komal",
    "ur": "کومل",
    "meaning": "Soft; delicate",
    "gender": "girl"
  },
  {
    "en": "Laiba",
    "ur": "لائبہ",
    "meaning": "A name associated with heavenly beauty (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Laila",
    "ur": "لیلیٰ",
    "meaning": "Night",
    "gender": "girl"
  },
  {
    "en": "Lamia",
    "ur": "لامعہ",
    "meaning": "Radiant; shining",
    "gender": "girl"
  },
  {
    "en": "Laraib",
    "ur": "لاریب",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Lareen",
    "ur": "لارین",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Lubna",
    "ur": "لبنیٰ",
    "meaning": "A fragrant tree",
    "gender": "girl"
  },
  {
    "en": "Luqman",
    "ur": "لقمان",
    "meaning": "Wise; name in Islamic tradition",
    "gender": "boy"
  },
  {
    "en": "Maaz",
    "ur": "معاذ",
    "meaning": "Protected; refuge",
    "gender": "boy"
  },
  {
    "en": "Mahad",
    "ur": "مہاد",
    "meaning": "Great; welcoming place",
    "gender": "boy"
  },
  {
    "en": "Mahak",
    "ur": "مہک",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Maham",
    "ur": "ماہم",
    "meaning": "Moon-like (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Mahboob",
    "ur": "محبوب",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Maher",
    "ur": "ماہر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Mahira",
    "ur": "ماہرہ",
    "meaning": "Skilled; expert",
    "gender": "girl"
  },
  {
    "en": "Mahjabeen",
    "ur": "ماہ جبین",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Mahnoor",
    "ur": "ماہ نور",
    "meaning": "Moonlight",
    "gender": "girl"
  },
  {
    "en": "Mahrukh",
    "ur": "ماہ رخ",
    "meaning": "Moon-faced",
    "gender": "girl"
  },
  {
    "en": "Maira",
    "ur": "مائرہ",
    "meaning": "Beloved; admirable (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Majid",
    "ur": "مجید",
    "meaning": "Glorious; noble",
    "gender": "boy"
  },
  {
    "en": "Malaika",
    "ur": "ملائکہ",
    "meaning": "Angels",
    "gender": "girl"
  },
  {
    "en": "Maliha",
    "ur": "ملیحہ",
    "meaning": "Beautiful; graceful",
    "gender": "girl"
  },
  {
    "en": "Malik",
    "ur": "مالک",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Manahil",
    "ur": "منہل",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Manal",
    "ur": "منال",
    "meaning": "Achievement; attainment",
    "gender": "girl"
  },
  {
    "en": "Mansoor",
    "ur": "منصور",
    "meaning": "Victorious",
    "gender": "boy"
  },
  {
    "en": "Maqsood",
    "ur": "مقصود",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Maroof",
    "ur": "معروف",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Marwa",
    "ur": "مروہ",
    "meaning": "A sacred hill in Makkah; smooth white stone",
    "gender": "girl"
  },
  {
    "en": "Marwan",
    "ur": "مروان",
    "meaning": "A fragrant plant; historical name",
    "gender": "boy"
  },
  {
    "en": "Maryam",
    "ur": "مریم",
    "meaning": "A revered name",
    "gender": "girl"
  },
  {
    "en": "Masood",
    "ur": "مسعود",
    "meaning": "Fortunate; happy",
    "gender": "boy"
  },
  {
    "en": "Mehak",
    "ur": "مہک",
    "meaning": "Fragrance",
    "gender": "girl"
  },
  {
    "en": "Meher",
    "ur": "مہر",
    "meaning": "Kindness; grace",
    "gender": "girl"
  },
  {
    "en": "Mehwish",
    "ur": "مہوش",
    "meaning": "Moon-like; beautiful (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Mikael",
    "ur": "میکائیل",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Minahil",
    "ur": "منہال",
    "meaning": "Spring; source of water (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Minal",
    "ur": "منال",
    "meaning": "Gift; achievement (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Mishal",
    "ur": "مشعل",
    "meaning": "Torch; light",
    "gender": "girl"
  },
  {
    "en": "Moin",
    "ur": "معین",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Moiz",
    "ur": "مویز",
    "meaning": "One who gives honour",
    "gender": "boy"
  },
  {
    "en": "Mona",
    "ur": "مونا",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Mubashir",
    "ur": "مبشر",
    "meaning": "Bringer of good news",
    "gender": "boy"
  },
  {
    "en": "Mudassir",
    "ur": "مدثر",
    "meaning": "Wrapped; covered",
    "gender": "boy"
  },
  {
    "en": "Muhammad",
    "ur": "محمد",
    "meaning": "Praiseworthy",
    "gender": "boy"
  },
  {
    "en": "Mujahid",
    "ur": "مجاہد",
    "meaning": "One who strives",
    "gender": "boy"
  },
  {
    "en": "Muneeb",
    "ur": "منیب",
    "meaning": "One who turns to God",
    "gender": "boy"
  },
  {
    "en": "Muneeba",
    "ur": "منیبہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Munir",
    "ur": "منیر",
    "meaning": "Radiant; illuminating",
    "gender": "boy"
  },
  {
    "en": "Murtaza",
    "ur": "مرتضیٰ",
    "meaning": "Chosen; approved",
    "gender": "boy"
  },
  {
    "en": "Musa",
    "ur": "موسیٰ",
    "meaning": "A prophet's name",
    "gender": "boy"
  },
  {
    "en": "Muskan",
    "ur": "مسکان",
    "meaning": "Smile",
    "gender": "girl"
  },
  {
    "en": "Mustafa",
    "ur": "مصطفیٰ",
    "meaning": "Chosen; selected",
    "gender": "boy"
  },
  {
    "en": "Nabeel",
    "ur": "نبیل",
    "meaning": "Noble",
    "gender": "boy"
  },
  {
    "en": "Nadeem",
    "ur": "ندیم",
    "meaning": "Companion; friend",
    "gender": "boy"
  },
  {
    "en": "Nadia",
    "ur": "نادیا",
    "meaning": "Caller; hopeful (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Nadir",
    "ur": "نادر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Naeem",
    "ur": "نعیم",
    "meaning": "Comfort; blessing",
    "gender": "boy"
  },
  {
    "en": "Naila",
    "ur": "نائلہ",
    "meaning": "Successful; achiever",
    "gender": "girl"
  },
  {
    "en": "Naina",
    "ur": "نینا",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Nargis",
    "ur": "نرگس",
    "meaning": "Narcissus flower",
    "gender": "girl"
  },
  {
    "en": "Nashmia",
    "ur": "نشمیا",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Naufal",
    "ur": "نوفل",
    "meaning": "Generous; handsome",
    "gender": "boy"
  },
  {
    "en": "Naveed",
    "ur": "نوید",
    "meaning": "Good news",
    "gender": "boy"
  },
  {
    "en": "Nawal",
    "ur": "نوال",
    "meaning": "Gift; favour",
    "gender": "girl"
  },
  {
    "en": "Nawaz",
    "ur": "نواز",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Nazia",
    "ur": "نازیہ",
    "meaning": "Proud; delicate (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Neha",
    "ur": "نیہا",
    "meaning": "Love; affection (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Nida",
    "ur": "ندا",
    "meaning": "Call; voice",
    "gender": "girl"
  },
  {
    "en": "Nimra",
    "ur": "نمرہ",
    "meaning": "Soft; gentle (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Noman",
    "ur": "نومان",
    "meaning": "Blessing; blood (varies by origin)",
    "gender": "boy"
  },
  {
    "en": "Noor",
    "ur": "نور",
    "meaning": "Light",
    "gender": "girl"
  },
  {
    "en": "Noorain",
    "ur": "نورین",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Noreen",
    "ur": "نورین",
    "meaning": "Light; luminous",
    "gender": "girl"
  },
  {
    "en": "Noshaba",
    "ur": "نوشابہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Nosheen",
    "ur": "نوشین",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Numan",
    "ur": "نومان",
    "meaning": "A traditional Arabic name",
    "gender": "boy"
  },
  {
    "en": "Omar",
    "ur": "عمر",
    "meaning": "Life; flourishing",
    "gender": "boy"
  },
  {
    "en": "Osama",
    "ur": "اسامہ",
    "meaning": "Lion",
    "gender": "boy"
  },
  {
    "en": "Owais",
    "ur": "اویس",
    "meaning": "A traditional Arabic name",
    "gender": "boy"
  },
  {
    "en": "Qaiser",
    "ur": "قیصر",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Qamar",
    "ur": "قمر",
    "meaning": "Moon",
    "gender": "boy"
  },
  {
    "en": "Qandeel",
    "ur": "قندیل",
    "meaning": "Lamp; lantern",
    "gender": "girl"
  },
  {
    "en": "Qasim",
    "ur": "قاسم",
    "meaning": "One who distributes",
    "gender": "boy"
  },
  {
    "en": "Qudrat",
    "ur": "قدرت",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "boy"
  },
  {
    "en": "Rabia",
    "ur": "رابعہ",
    "meaning": "Spring; fourth",
    "gender": "girl"
  },
  {
    "en": "Rafia",
    "ur": "رافعہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Rameen",
    "ur": "رامین",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Rania",
    "ur": "رانیا",
    "meaning": "Queenly; gazing (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Rida",
    "ur": "ردا",
    "meaning": "Contentment; approval",
    "gender": "girl"
  },
  {
    "en": "Rimsha",
    "ur": "رمشا",
    "meaning": "Bouquet of flowers (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Rizwana",
    "ur": "ریزوانا",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Roha",
    "ur": "روہا",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Romaisa",
    "ur": "رومےسا",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Romal",
    "ur": "رومال",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Ruqayya",
    "ur": "رقیہ",
    "meaning": "Gentle rise; a revered name",
    "gender": "girl"
  },
  {
    "en": "Saba",
    "ur": "صبا",
    "meaning": "Morning breeze",
    "gender": "girl"
  },
  {
    "en": "Sadia",
    "ur": "سعدیہ",
    "meaning": "Fortunate; happy",
    "gender": "girl"
  },
  {
    "en": "Safa",
    "ur": "صفا",
    "meaning": "Purity; clarity",
    "gender": "girl"
  },
  {
    "en": "Safiya",
    "ur": "صفیہ",
    "meaning": "Pure; sincere friend",
    "gender": "girl"
  },
  {
    "en": "Sahar",
    "ur": "سحر",
    "meaning": "Dawn",
    "gender": "girl"
  },
  {
    "en": "Saira",
    "ur": "سائرہ",
    "meaning": "Traveller; wanderer",
    "gender": "girl"
  },
  {
    "en": "Sajida",
    "ur": "ساجدہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Sakina",
    "ur": "سکینہ",
    "meaning": "Tranquillity; peace",
    "gender": "girl"
  },
  {
    "en": "Salma",
    "ur": "سلمیٰ",
    "meaning": "Safe; peaceful",
    "gender": "girl"
  },
  {
    "en": "Samina",
    "ur": "ثمینہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Sana",
    "ur": "ثنا",
    "meaning": "Radiance; praise",
    "gender": "girl"
  },
  {
    "en": "Sarah",
    "ur": "سارہ",
    "meaning": "Princess; noblewoman",
    "gender": "girl"
  },
  {
    "en": "Sarina",
    "ur": "سرینہ",
    "meaning": "Traditional name; meaning varies by linguistic origin",
    "gender": "girl"
  },
  {
    "en": "Ahmad",
    "ur": "احمد",
    "meaning": "Highly praised",
    "gender": "boy"
  },
  {
    "en": "Hasan",
    "ur": "حسن",
    "meaning": "Handsome; good",
    "gender": "boy"
  },
  {
    "en": "Hussain",
    "ur": "حسین",
    "meaning": "Beautiful; good",
    "gender": "boy"
  },
  {
    "en": "Ilyas",
    "ur": "الیاس",
    "meaning": "Name of a prophet",
    "gender": "boy"
  },
  {
    "en": "M. Ali",
    "ur": "محمد علی",
    "meaning": "Common compound name",
    "gender": "boy"
  },
  {
    "en": "M. Ahmad",
    "ur": "محمد احمد",
    "meaning": "Common compound name",
    "gender": "boy"
  },
  {
    "en": "Mobeen",
    "ur": "مبین",
    "meaning": "Clear; evident",
    "gender": "boy"
  },
  {
    "en": "Mohammad",
    "ur": "محمد",
    "meaning": "Praised; commendable",
    "gender": "boy"
  },
  {
    "en": "Omer",
    "ur": "عمر",
    "meaning": "Life; flourishing",
    "gender": "boy"
  },
  {
    "en": "Rafay",
    "ur": "رفعے",
    "meaning": "Exalted; elevated",
    "gender": "boy"
  },
  {
    "en": "Rameez",
    "ur": "رمیز",
    "meaning": "Symbol; sign",
    "gender": "boy"
  },
  {
    "en": "Rehan",
    "ur": "ریحان",
    "meaning": "Fragrant plant; basil",
    "gender": "boy"
  },
  {
    "en": "Rizwan",
    "ur": "رضوان",
    "meaning": "Contentment; acceptance",
    "gender": "boy"
  },
  {
    "en": "Saad",
    "ur": "سعد",
    "meaning": "Good fortune; happiness",
    "gender": "boy"
  },
  {
    "en": "Salman",
    "ur": "سلمان",
    "meaning": "Safe; secure",
    "gender": "boy"
  },
  {
    "en": "Sameer",
    "ur": "سمیر",
    "meaning": "Pleasant companion",
    "gender": "boy"
  },
  {
    "en": "Shahzaib",
    "ur": "شہزیب",
    "meaning": "Crown; adornment",
    "gender": "boy"
  },
  {
    "en": "Shayan",
    "ur": "شایان",
    "meaning": "Worthy; deserving",
    "gender": "boy"
  },
  {
    "en": "Shehryar",
    "ur": "شہریار",
    "meaning": "King; ruler",
    "gender": "boy"
  },
  {
    "en": "Shuja",
    "ur": "شجاع",
    "meaning": "Brave; courageous",
    "gender": "boy"
  },
  {
    "en": "Sufyan",
    "ur": "سفیان",
    "meaning": "Traditional Arabic name",
    "gender": "boy"
  },
  {
    "en": "Taha",
    "ur": "طٰہٰ",
    "meaning": "Quranic name",
    "gender": "boy"
  },
  {
    "en": "Talha",
    "ur": "طلحہ",
    "meaning": "Name of a revered companion",
    "gender": "boy"
  },
  {
    "en": "Usman",
    "ur": "عثمان",
    "meaning": "Name of a revered companion",
    "gender": "boy"
  },
  {
    "en": "Umar",
    "ur": "عمر",
    "meaning": "Life; flourishing",
    "gender": "boy"
  },
  {
    "en": "Usama",
    "ur": "اسامہ",
    "meaning": "Lion",
    "gender": "boy"
  },
  {
    "en": "Waleed",
    "ur": "ولید",
    "meaning": "Newborn; child",
    "gender": "boy"
  },
  {
    "en": "Yahya",
    "ur": "یحییٰ",
    "meaning": "Name of a prophet",
    "gender": "boy"
  },
  {
    "en": "Yasir",
    "ur": "یاسر",
    "meaning": "Easy-going; wealthy",
    "gender": "boy"
  },
  {
    "en": "Yousaf",
    "ur": "یوسف",
    "meaning": "Name of a prophet",
    "gender": "boy"
  },
  {
    "en": "Yusuf",
    "ur": "یوسف",
    "meaning": "Name of a prophet",
    "gender": "boy"
  },
  {
    "en": "Zain",
    "ur": "زین",
    "meaning": "Beauty; grace",
    "gender": "boy"
  },
  {
    "en": "Zayan",
    "ur": "زایان",
    "meaning": "Graceful; bright",
    "gender": "boy"
  },
  {
    "en": "Zeeshan",
    "ur": "ذیشان",
    "meaning": "Dignified; splendid",
    "gender": "boy"
  },
  {
    "en": "Zubair",
    "ur": "زبیر",
    "meaning": "Strong; wise",
    "gender": "boy"
  },
  {
    "en": "Areeb",
    "ur": "عریب",
    "meaning": "Wise; intelligent",
    "gender": "boy"
  },
  {
    "en": "Areez",
    "ur": "عریض",
    "meaning": "Respected; honourable",
    "gender": "boy"
  },
  {
    "en": "Afnan",
    "ur": "افنان",
    "meaning": "Branches; growth",
    "gender": "boy"
  },
  {
    "en": "Basit",
    "ur": "باسط",
    "meaning": "One who expands",
    "gender": "boy"
  },
  {
    "en": "Daniyal",
    "ur": "دانیال",
    "meaning": "Name of a prophet",
    "gender": "boy"
  },
  {
    "en": "Ehtisham",
    "ur": "احتشام",
    "meaning": "Dignity; grandeur",
    "gender": "boy"
  },
  {
    "en": "Izaan",
    "ur": "اذان",
    "meaning": "Obedience; acceptance (usage varies)",
    "gender": "boy"
  },
  {
    "en": "Kamil",
    "ur": "کامل",
    "meaning": "Complete; perfect",
    "gender": "boy"
  },
  {
    "en": "Laeeq",
    "ur": "لائق",
    "meaning": "Capable; worthy",
    "gender": "boy"
  },
  {
    "en": "Rayyan",
    "ur": "ریان",
    "meaning": "Luxuriant; well-watered",
    "gender": "boy"
  },
  {
    "en": "Rohan",
    "ur": "روہان",
    "meaning": "Ascending; spiritual",
    "gender": "boy"
  },
  {
    "en": "Shahmeer",
    "ur": "شاہ میر",
    "meaning": "Noble; leader",
    "gender": "boy"
  },
  {
    "en": "Taimoor",
    "ur": "تیمور",
    "meaning": "Strong; brave",
    "gender": "boy"
  },
  {
    "en": "Zarar",
    "ur": "ضرار",
    "meaning": "Warrior; brave",
    "gender": "boy"
  },
  {
    "en": "Zorain",
    "ur": "زورین",
    "meaning": "Modern name; usage varies",
    "gender": "boy"
  },
  {
    "en": "Arooba",
    "ur": "عروبہ",
    "meaning": "Loving; devoted",
    "gender": "girl"
  },
  {
    "en": "Aylaa",
    "ur": "ایلاء",
    "meaning": "Noble; exalted (usage varies)",
    "gender": "girl"
  },
  {
    "en": "Bisma",
    "ur": "بسمہ",
    "meaning": "Smile",
    "gender": "girl"
  },
  {
    "en": "Eshal",
    "ur": "ایشال",
    "meaning": "Flower of paradise (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Hira",
    "ur": "حرا",
    "meaning": "Name of a mountain/cave",
    "gender": "girl"
  },
  {
    "en": "Sehrish",
    "ur": "سحرش",
    "meaning": "Enchanting; charming",
    "gender": "girl"
  },
  {
    "en": "Sidra",
    "ur": "سدرہ",
    "meaning": "Lote tree; heavenly tree",
    "gender": "girl"
  },
  {
    "en": "Sonia",
    "ur": "سونیا",
    "meaning": "Wisdom; golden (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Sumaiya",
    "ur": "سمیہ",
    "meaning": "High; elevated",
    "gender": "girl"
  },
  {
    "en": "Tania",
    "ur": "تانیہ",
    "meaning": "Fairy queen (usage varies)",
    "gender": "girl"
  },
  {
    "en": "Tooba",
    "ur": "طوبیٰ",
    "meaning": "Blessedness; a tree in paradise",
    "gender": "girl"
  },
  {
    "en": "Urooj",
    "ur": "عروج",
    "meaning": "Rise; ascent",
    "gender": "girl"
  },
  {
    "en": "Wania",
    "ur": "وانیہ",
    "meaning": "Gift of Allah (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Yumna",
    "ur": "یمنٰی",
    "meaning": "Blessed; fortunate",
    "gender": "girl"
  },
  {
    "en": "Zara",
    "ur": "زارا",
    "meaning": "Radiance; blooming",
    "gender": "girl"
  },
  {
    "en": "Zoya",
    "ur": "زویا",
    "meaning": "Life; loving",
    "gender": "girl"
  },
  {
    "en": "Zunaira",
    "ur": "زنیرہ",
    "meaning": "Flower; radiant (usage varies)",
    "gender": "girl"
  },
  {
    "en": "Aqila",
    "ur": "عقیلہ",
    "meaning": "Wise; intelligent",
    "gender": "girl"
  },
  {
    "en": "Areej",
    "ur": "اریج",
    "meaning": "Fragrance",
    "gender": "girl"
  },
  {
    "en": "Hooriya",
    "ur": "حوریہ",
    "meaning": "Heavenly; beautiful",
    "gender": "girl"
  },
  {
    "en": "Inaya",
    "ur": "عنایہ",
    "meaning": "Care; protection",
    "gender": "girl"
  },
  {
    "en": "Nayab",
    "ur": "نایاب",
    "meaning": "Rare; precious",
    "gender": "girl"
  },
  {
    "en": "Parisa",
    "ur": "پریسا",
    "meaning": "Fairy-like",
    "gender": "girl"
  },
  {
    "en": "Saharish",
    "ur": "سحرش",
    "meaning": "Enchanting; charming",
    "gender": "girl"
  },
  {
    "en": "Saman",
    "ur": "سمن",
    "meaning": "Jasmine",
    "gender": "girl"
  },
  {
    "en": "Shanza",
    "ur": "شانزہ",
    "meaning": "Proud; dignified (usage varies)",
    "gender": "girl"
  },
  {
    "en": "Sundas",
    "ur": "سندس",
    "meaning": "Fine silk; brocade",
    "gender": "girl"
  },
  {
    "en": "Zainab",
    "ur": "زینب",
    "meaning": "Fragrant flower; revered name",
    "gender": "girl"
  },
  {
    "en": "Aabid Ali",
    "ur": "عابد علی",
    "meaning": "Worshipper; elevated",
    "gender": "boy"
  },
  {
    "en": "Abid Hussain",
    "ur": "عابد حسین",
    "meaning": "Worshipper; beautiful",
    "gender": "boy"
  },
  {
    "en": "Abu Bakr",
    "ur": "ابوبکر",
    "meaning": "Name of the first caliph",
    "gender": "boy"
  },
  {
    "en": "Aftab",
    "ur": "آفتاب",
    "meaning": "Sunlight",
    "gender": "boy"
  },
  {
    "en": "Ahsan Ali",
    "ur": "احسن علی",
    "meaning": "Excellent; noble",
    "gender": "boy"
  },
  {
    "en": "Arslan",
    "ur": "ارسلان",
    "meaning": "Lion",
    "gender": "boy"
  },
  {
    "en": "Asghar",
    "ur": "اصغر",
    "meaning": "Younger; smaller",
    "gender": "boy"
  },
  {
    "en": "Bashir",
    "ur": "بشیر",
    "meaning": "Bringer of good news",
    "gender": "boy"
  },
  {
    "en": "Daniyal Ahmed",
    "ur": "دانیال احمد",
    "meaning": "Wise; praised",
    "gender": "boy"
  },
  {
    "en": "Gohar",
    "ur": "گوہر",
    "meaning": "Jewel; precious stone",
    "gender": "boy"
  },
  {
    "en": "Hammad Ali",
    "ur": "حماد علی",
    "meaning": "One who praises; noble",
    "gender": "boy"
  },
  {
    "en": "Hanzala",
    "ur": "حنظلہ",
    "meaning": "Traditional Arabic name",
    "gender": "boy"
  },
  {
    "en": "Haseeb Ahmed",
    "ur": "حسیب احمد",
    "meaning": "Respected; praised",
    "gender": "boy"
  },
  {
    "en": "Hashir",
    "ur": "حاشر",
    "meaning": "Gatherer; traditional name",
    "gender": "boy"
  },
  {
    "en": "Ibad",
    "ur": "عباد",
    "meaning": "Worshippers; devoted",
    "gender": "boy"
  },
  {
    "en": "Ibrahim Ali",
    "ur": "ابراہیم علی",
    "meaning": "Prophet’s name; elevated",
    "gender": "boy"
  },
  {
    "en": "Ihtesham",
    "ur": "احتشام",
    "meaning": "Dignity; grandeur",
    "gender": "boy"
  },
  {
    "en": "Irfan Ali",
    "ur": "عرفان علی",
    "meaning": "Knowledge; noble",
    "gender": "boy"
  },
  {
    "en": "Karam",
    "ur": "کرم",
    "meaning": "Generosity; kindness",
    "gender": "boy"
  },
  {
    "en": "Kashan",
    "ur": "کاشان",
    "meaning": "Modern name; usage varies",
    "gender": "boy"
  },
  {
    "en": "Mahir",
    "ur": "ماہر",
    "meaning": "Skilled; expert",
    "gender": "boy"
  },
  {
    "en": "Mahmood",
    "ur": "محمود",
    "meaning": "Praised",
    "gender": "boy"
  },
  {
    "en": "Mikail",
    "ur": "میکائیل",
    "meaning": "Name of an angel",
    "gender": "boy"
  },
  {
    "en": "Mirza",
    "ur": "مرزا",
    "meaning": "Noble; title",
    "gender": "boy"
  },
  {
    "en": "Muhib",
    "ur": "محب",
    "meaning": "Loving; affectionate",
    "gender": "boy"
  },
  {
    "en": "Mujtaba",
    "ur": "مجتبیٰ",
    "meaning": "Chosen; selected",
    "gender": "boy"
  },
  {
    "en": "Nihal",
    "ur": "نہال",
    "meaning": "Happy; flourishing",
    "gender": "boy"
  },
  {
    "en": "Parvez",
    "ur": "پرویز",
    "meaning": "Victorious; fortunate",
    "gender": "boy"
  },
  {
    "en": "Rafay Ahmed",
    "ur": "رفعے احمد",
    "meaning": "Elevated; praised",
    "gender": "boy"
  },
  {
    "en": "Rashid",
    "ur": "راشد",
    "meaning": " rightly guided",
    "gender": "boy"
  },
  {
    "en": "Rauf",
    "ur": "رؤف",
    "meaning": "Kind; compassionate",
    "gender": "boy"
  },
  {
    "en": "Raza",
    "ur": "رضا",
    "meaning": "Contentment; approval",
    "gender": "boy"
  },
  {
    "en": "Sarmad",
    "ur": "سرمد",
    "meaning": "Eternal; everlasting",
    "gender": "boy"
  },
  {
    "en": "Shahbaz",
    "ur": "شہباز",
    "meaning": "Royal falcon",
    "gender": "boy"
  },
  {
    "en": "Shahzad",
    "ur": "شہزاد",
    "meaning": "Prince",
    "gender": "boy"
  },
  {
    "en": "Shan",
    "ur": "شان",
    "meaning": "Dignity; glory",
    "gender": "boy"
  },
  {
    "en": "Shariq",
    "ur": "شارق",
    "meaning": "Rising; shining",
    "gender": "boy"
  },
  {
    "en": "Shoaib",
    "ur": "شعیب",
    "meaning": "Name of a prophet",
    "gender": "boy"
  },
  {
    "en": "Sikandar",
    "ur": "سکندر",
    "meaning": "Defender; Alexander",
    "gender": "boy"
  },
  {
    "en": "Suleman",
    "ur": "سلیمان",
    "meaning": "Name of a prophet",
    "gender": "boy"
  },
  {
    "en": "Tariq",
    "ur": "طارق",
    "meaning": "Morning star; night visitor",
    "gender": "boy"
  },
  {
    "en": "Tauseef",
    "ur": "توصیف",
    "meaning": "Praise; appreciation",
    "gender": "boy"
  },
  {
    "en": "Waqas",
    "ur": "وقاص",
    "meaning": "Warrior; brave",
    "gender": "boy"
  },
  {
    "en": "Zahid",
    "ur": "زاہد",
    "meaning": "Devout; ascetic",
    "gender": "boy"
  },
  {
    "en": "Zaki",
    "ur": "زکی",
    "meaning": "Pure; intelligent",
    "gender": "boy"
  },
  {
    "en": "Zeeshan Ali",
    "ur": "ذیشان علی",
    "meaning": "Dignified; noble",
    "gender": "boy"
  },
  {
    "en": "Zia",
    "ur": "ضیا",
    "meaning": "Light; splendour",
    "gender": "boy"
  },
  {
    "en": "Zubair Ahmed",
    "ur": "زبیر احمد",
    "meaning": "Strong; praised",
    "gender": "boy"
  },
  {
    "en": "Zulqarnain",
    "ur": "ذوالقرنین",
    "meaning": "Traditional Quranic name",
    "gender": "boy"
  },
  {
    "en": "Ammad",
    "ur": "عماد",
    "meaning": "Support; pillar",
    "gender": "boy"
  },
  {
    "en": "Areeb Ahmed",
    "ur": "عریب احمد",
    "meaning": "Wise; praised",
    "gender": "boy"
  },
  {
    "en": "Shahzaib Ahmed",
    "ur": "شہزیب احمد",
    "meaning": "Noble; adorned",
    "gender": "boy"
  },
  {
    "en": "Aabroo",
    "ur": "آبرو",
    "meaning": "Honour; dignity",
    "gender": "girl"
  },
  {
    "en": "Aaliya Noor",
    "ur": "عالیہ نور",
    "meaning": "Exalted; light",
    "gender": "girl"
  },
  {
    "en": "Abeer Fatima",
    "ur": "عبیر فاطمہ",
    "meaning": "Fragrance; revered name",
    "gender": "girl"
  },
  {
    "en": "Aiman Fatima",
    "ur": "ایمن فاطمہ",
    "meaning": "Blessed; revered name",
    "gender": "girl"
  },
  {
    "en": "Alishba Noor",
    "ur": "علیشبہ نور",
    "meaning": "Beautiful; light",
    "gender": "girl"
  },
  {
    "en": "Anousha",
    "ur": "انوشہ",
    "meaning": "Immortal; happy (varies by origin)",
    "gender": "girl"
  },
  {
    "en": "Arooj",
    "ur": "عروج",
    "meaning": "Ascension; rise",
    "gender": "girl"
  },
  {
    "en": "Ayesha Noor",
    "ur": "عائشہ نور",
    "meaning": "Living; light",
    "gender": "girl"
  },
  {
    "en": "Ayesha Siddiqua",
    "ur": "عائشہ صدیقہ",
    "meaning": "Living; truthful",
    "gender": "girl"
  },
  {
    "en": "Bahar",
    "ur": "بہار",
    "meaning": "Spring; blossom",
    "gender": "girl"
  },
  {
    "en": "Benish",
    "ur": "بینش",
    "meaning": "Vision; insight",
    "gender": "girl"
  },
  {
    "en": "Durdana",
    "ur": "دردانہ",
    "meaning": "Precious pearl",
    "gender": "girl"
  },
  {
    "en": "Erum Fatima",
    "ur": "ارم فاطمہ",
    "meaning": "Garden; revered name",
    "gender": "girl"
  },
  {
    "en": "Fahima",
    "ur": "فہیمہ",
    "meaning": "Intelligent; understanding",
    "gender": "girl"
  },
  {
    "en": "Fakhra",
    "ur": "فخرہ",
    "meaning": "Pride; honour",
    "gender": "girl"
  },
  {
    "en": "Fizza",
    "ur": "فضہ",
    "meaning": "Silver",
    "gender": "girl"
  },
  {
    "en": "Haniya Noor",
    "ur": "ہانیہ نور",
    "meaning": "Happy; light",
    "gender": "girl"
  },
  {
    "en": "Huma",
    "ur": "ہما",
    "meaning": "Mythical bird; good fortune",
    "gender": "girl"
  },
  {
    "en": "Imaan",
    "ur": "ایمان",
    "meaning": "Faith",
    "gender": "girl"
  },
  {
    "en": "Insha",
    "ur": "انشا",
    "meaning": "Creation; writing",
    "gender": "girl"
  },
  {
    "en": "Jasmin",
    "ur": "یاسمین",
    "meaning": "Jasmine flower",
    "gender": "girl"
  },
  {
    "en": "Kiran",
    "ur": "کرن",
    "meaning": "Ray of light",
    "gender": "girl"
  },
  {
    "en": "Maira Noor",
    "ur": "مائرہ نور",
    "meaning": "Beloved; light",
    "gender": "girl"
  },
  {
    "en": "Mariam",
    "ur": "مریم",
    "meaning": "Revered name",
    "gender": "girl"
  },
  {
    "en": "Mehreen",
    "ur": "مہرین",
    "meaning": "Kind; bright",
    "gender": "girl"
  },
  {
    "en": "Mishka",
    "ur": "مشکٰی",
    "meaning": "Fragrance; musk (usage varies)",
    "gender": "girl"
  },
  {
    "en": "Moomal",
    "ur": "مومل",
    "meaning": "Legendary beloved",
    "gender": "girl"
  },
  {
    "en": "Nimra Noor",
    "ur": "نمرہ نور",
    "meaning": "Gentle; light",
    "gender": "girl"
  },
  {
    "en": "Noreen Fatima",
    "ur": "نورین فاطمہ",
    "meaning": "Light; revered name",
    "gender": "girl"
  },
  {
    "en": "Quratulain",
    "ur": "قرۃ العین",
    "meaning": "Comfort of the eyes",
    "gender": "girl"
  },
  {
    "en": "Rabiya",
    "ur": "رابعہ",
    "meaning": "Spring; fourth",
    "gender": "girl"
  },
  {
    "en": "Rija",
    "ur": "رجاء",
    "meaning": "Hope",
    "gender": "girl"
  },
  {
    "en": "Rukhsar",
    "ur": "رخسار",
    "meaning": "Cheek; face",
    "gender": "girl"
  },
  {
    "en": "Sahar Noor",
    "ur": "سحر نور",
    "meaning": "Dawn; light",
    "gender": "girl"
  },
  {
    "en": "Saira Noor",
    "ur": "سائرہ نور",
    "meaning": "Traveller; light",
    "gender": "girl"
  },
  {
    "en": "Sana Fatima",
    "ur": "ثنا فاطمہ",
    "meaning": "Praise; revered name",
    "gender": "girl"
  },
  {
    "en": "Sania",
    "ur": "ثانیہ",
    "meaning": "Brilliant; elevated",
    "gender": "girl"
  },
  {
    "en": "Shagufta",
    "ur": "شگفتہ",
    "meaning": "Blooming; cheerful",
    "gender": "girl"
  },
  {
    "en": "Shazia",
    "ur": "شازیہ",
    "meaning": "Rare; remarkable",
    "gender": "girl"
  },
  {
    "en": "Shifa",
    "ur": "شفا",
    "meaning": "Healing; cure",
    "gender": "girl"
  },
  {
    "en": "Sobia",
    "ur": "صوبیہ",
    "meaning": "Beautiful; graceful (usage varies)",
    "gender": "girl"
  },
  {
    "en": "Suhana",
    "ur": "سہانا",
    "meaning": "Pleasant; beautiful",
    "gender": "girl"
  },
  {
    "en": "Tabassum",
    "ur": "تبسم",
    "meaning": "Smile",
    "gender": "girl"
  },
  {
    "en": "Warda",
    "ur": "وردہ",
    "meaning": "Rose; flower",
    "gender": "girl"
  },
  {
    "en": "Yusra",
    "ur": "یسریٰ",
    "meaning": "Ease; prosperity",
    "gender": "girl"
  },
  {
    "en": "Zeba",
    "ur": "زیبا",
    "meaning": "Beautiful; graceful",
    "gender": "girl"
  },
  {
    "en": "Zehra",
    "ur": "زہرا",
    "meaning": "Bright; radiant",
    "gender": "girl"
  },
  {
    "en": "Zunaira Fatima",
    "ur": "زنیرہ فاطمہ",
    "meaning": "Radiant; revered name",
    "gender": "girl"
  },
  {
    "en": "Aqsa Noor",
    "ur": "اقصیٰ نور",
    "meaning": "Sacred name; light",
    "gender": "girl"
  },
  {
    "en": "Hafsa Noor",
    "ur": "حفصہ نور",
    "meaning": "Revered name; light",
    "gender": "girl"
  },
  {
    "en": "Maham Noor",
    "ur": "ماہم نور",
    "meaning": "Moon-like; light",
    "gender": "girl"
  },
  {
    "en": "Sadia Noor",
    "ur": "سعدیہ نور",
    "meaning": "Fortunate; light",
    "gender": "girl"
  },
  {
    "en": "Sumbal",
    "ur": "سنبل",
    "meaning": "Hyacinth; fragrant flower",
    "gender": "girl"
  },
  {
    "en": "Tehreem",
    "ur": "تحریم",
    "meaning": "Sanctity; respect",
    "gender": "girl"
  },
  {
    "en": "Zoya Noor",
    "ur": "زویا نور",
    "meaning": "Life; light",
    "gender": "girl"
  },
  {
    "en": "Adeel",
    "ur": "عدیل",
    "meaning": "Just; fair",
    "gender": "boy"
  },
  {
    "en": "Aftab Ahmed",
    "ur": "آفتاب احمد",
    "meaning": "Sunlight; praised",
    "gender": "boy"
  },
  {
    "en": "Ahsan Raza",
    "ur": "احسن رضا",
    "meaning": "Excellent; contentment",
    "gender": "boy"
  },
  {
    "en": "Hammad Raza",
    "ur": "حماد رضا",
    "meaning": "One who praises; contentment",
    "gender": "boy"
  },
  {
    "en": "Muzammil",
    "ur": "مزمل",
    "meaning": "Enwrapped; covered",
    "gender": "boy"
  },
  {
    "en": "Shahmeer Ali",
    "ur": "شاہ میر علی",
    "meaning": "Noble; elevated",
    "gender": "boy"
  },
  {
    "en": "Zaryab",
    "ur": "زریاب",
    "meaning": "Golden water; prosperous",
    "gender": "boy"
  },
  {
    "en": "Areesha",
    "ur": "عریشہ",
    "meaning": "Highness; shelter",
    "gender": "girl"
  },
  {
    "en": "Gulshan",
    "ur": "گلشن",
    "meaning": "Garden of flowers",
    "gender": "girl"
  },
  {
    "en": "Maham Fatima",
    "ur": "ماہم فاطمہ",
    "meaning": "Moon-like; revered name",
    "gender": "girl"
  },
  {
    "en": "Nashra",
    "ur": "نشرہ",
    "meaning": "Spread; bright (usage varies)",
    "gender": "girl"
  },
  {
    "en": "Rameesha",
    "ur": "رمیشہ",
    "meaning": "Bouquet; beautiful (popular usage)",
    "gender": "girl"
  },
  {
    "en": "Sehr",
    "ur": "سحر",
    "meaning": "Dawn; early morning",
    "gender": "girl"
  },
  {
    "en": "Aqdas",
    "ur": "اقدس",
    "meaning": "Most sacred; pure",
    "gender": "boy"
  },
  {
    "en": "Faiq",
    "ur": "فائق",
    "meaning": "Excellent; superior",
    "gender": "boy"
  },
  {
    "en": "Hammadullah",
    "ur": "حمداللہ",
    "meaning": "Praise of Allah",
    "gender": "boy"
  },
  {
    "en": "Zainul Abideen",
    "ur": "زین العابدین",
    "meaning": "Adornment of worshippers",
    "gender": "boy"
  },
  {
    "en": "Arooj Fatima",
    "ur": "عروج فاطمہ",
    "meaning": "Ascension; revered name",
    "gender": "girl"
  },
  {
    "en": "Nashita",
    "ur": "نشطہ",
    "meaning": "Energetic; lively",
    "gender": "girl"
  },
  {
    "en": "Aabid Ahmed",
    "ur": "عابد احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aabid Muhammad",
    "ur": "عابد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aabish Fatima",
    "ur": "آبش فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aabish Zahra",
    "ur": "آبش زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aabroo Fatima",
    "ur": "آبرو فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aadil Ahmed",
    "ur": "عادل احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aadil Muhammad",
    "ur": "عادل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aafaq Ahmed",
    "ur": "آفاق احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aafaq Muhammad",
    "ur": "آفاق محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aafiya Fatima",
    "ur": "عافیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aafiya Zahra",
    "ur": "عافیہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aahil Ahmed",
    "ur": "آہل احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aahil Muhammad",
    "ur": "آہل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aaira Fatima",
    "ur": "آئرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aaira Zahra",
    "ur": "آئرہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aaliya Fatima",
    "ur": "عالیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aaliya Zahra",
    "ur": "عالیہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aaliyah Fatima",
    "ur": "عالیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aaliyah Zahra",
    "ur": "عالیہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aamir Ahmed",
    "ur": "عامر احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aamir Muhammad",
    "ur": "عامر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aamira Fatima",
    "ur": "عامرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aamira Zahra",
    "ur": "عامرہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aamna Fatima",
    "ur": "آمنہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aamna Zahra",
    "ur": "آمنہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aanisah Fatima",
    "ur": "انیسہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aanisah Zahra",
    "ur": "انیسہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aariz Ahmed",
    "ur": "عارض احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aariz Muhammad",
    "ur": "عارض محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aashir Ahmed",
    "ur": "عاشر احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aashir Muhammad",
    "ur": "عاشر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aasim Ahmed",
    "ur": "عاصم احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aasim Muhammad",
    "ur": "عاصم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aasiya Fatima",
    "ur": "آسیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aasiya Zahra",
    "ur": "آسیہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aasma Fatima",
    "ur": "اسماء فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aasma Zahra",
    "ur": "اسماء زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aatif Ahmed",
    "ur": "عاطف احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aatif Muhammad",
    "ur": "عاطف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aayan Ahmed",
    "ur": "ایان احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aayan Muhammad",
    "ur": "ایان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aazim Ahmed",
    "ur": "عظیم احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aazim Muhammad",
    "ur": "عظیم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Abbas Ahmed",
    "ur": "عباس احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Abbas Muhammad",
    "ur": "عباس محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Abdullah Ahmed",
    "ur": "عبداللہ احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Abdullah Muhammad",
    "ur": "عبداللہ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Abeer Zahra",
    "ur": "عبیر زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Abid Ahmed",
    "ur": "عابد احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Abid Muhammad",
    "ur": "عابد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Abrar Ahmed",
    "ur": "ابرار احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Abrar Muhammad",
    "ur": "ابرار محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Adeel Muhammad",
    "ur": "عدیل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Adnan Ahmed",
    "ur": "عدنان احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Adnan Muhammad",
    "ur": "عدنان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Afaf Fatima",
    "ur": "عفاف فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Afaf Zahra",
    "ur": "عفاف زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Affan Ahmed",
    "ur": "عفان احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Affan Muhammad",
    "ur": "عفان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Afia Fatima",
    "ur": "عافیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Afia Zahra",
    "ur": "عافیہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Afifa Fatima",
    "ur": "عفیفہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Afifa Zahra",
    "ur": "عفیفہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Afnan Muhammad",
    "ur": "افنان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Afra Fatima",
    "ur": "عفراء فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Afra Zahra",
    "ur": "عفراء زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Afsana Fatima",
    "ur": "افسانہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Afsana Zahra",
    "ur": "افسانہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Afsheen Fatima",
    "ur": "افشین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Afsheen Zahra",
    "ur": "افشین زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aftab Muhammad",
    "ur": "آفتاب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ahad Ahmed",
    "ur": "احد احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ahad Muhammad",
    "ur": "احد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ahmad Muhammad",
    "ur": "احمد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ahmed Muhammad",
    "ur": "احمد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ahsan Ahmed",
    "ur": "احسن احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ahsan Muhammad",
    "ur": "احسن محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ahtesham Ahmed",
    "ur": "احتشام احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ahtesham Muhammad",
    "ur": "احتشام محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aiman Zahra",
    "ur": "ایمن زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aina Fatima",
    "ur": "آئینہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aina Zahra",
    "ur": "آئینہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aisha Fatima",
    "ur": "عائشہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aisha Zahra",
    "ur": "عائشہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aishah Fatima",
    "ur": "عائشہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aishah Zahra",
    "ur": "عائشہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aiza Fatima",
    "ur": "عائزہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aiza Zahra",
    "ur": "عائزہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aizaz Ahmed",
    "ur": "اعزاز احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aizaz Muhammad",
    "ur": "اعزاز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ajmal Ahmed",
    "ur": "اجمل احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ajmal Muhammad",
    "ur": "اجمل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ajwa Fatima",
    "ur": "اجوہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ajwa Zahra",
    "ur": "اجوہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Akbar Ahmed",
    "ur": "اکبر احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Akbar Muhammad",
    "ur": "اکبر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Akeel Ahmed",
    "ur": "عقیل احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Akeel Muhammad",
    "ur": "عقیل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Akhila Fatima",
    "ur": "اخیلہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Akhila Zahra",
    "ur": "اخیلہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Akhtar Ahmed",
    "ur": "اختر احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Akhtar Muhammad",
    "ur": "اختر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Akif Ahmed",
    "ur": "عاکف احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Akif Muhammad",
    "ur": "عاکف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Akram Ahmed",
    "ur": "اکرم احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Akram Muhammad",
    "ur": "اکرم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Alee Ahmed",
    "ur": "علی احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Alee Muhammad",
    "ur": "علی محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aleena Fatima",
    "ur": "علینہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aleena Zahra",
    "ur": "علینہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ali Ahmed",
    "ur": "علی احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ali Muhammad",
    "ur": "علی محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Alina Fatima",
    "ur": "الینا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Alina Zahra",
    "ur": "الینا زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Alishba Fatima",
    "ur": "الیشبا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Alishba Zahra",
    "ur": "الیشبا زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aliya Fatima",
    "ur": "عالیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aliya Zahra",
    "ur": "عالیہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Amal Fatima",
    "ur": "امل فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Amal Zahra",
    "ur": "امل زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Amara Fatima",
    "ur": "امارہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Amara Zahra",
    "ur": "امارہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Amber Fatima",
    "ur": "عنبر فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Amber Zahra",
    "ur": "عنبر زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ammad Muhammad",
    "ur": "عماد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ammar Ahmed",
    "ur": "عمار احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ammar Muhammad",
    "ur": "عمار محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Amna Fatima",
    "ur": "آمنہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Amna Zahra",
    "ur": "آمنہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anabia Fatima",
    "ur": "انابیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anabia Zahra",
    "ur": "انابیہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anam Fatima",
    "ur": "انعم فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anam Zahra",
    "ur": "انعم زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anas Ahmed",
    "ur": "انس احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Anas Muhammad",
    "ur": "انس محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Anaya Fatima",
    "ur": "عنایہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anaya Zahra",
    "ur": "عنایہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anbar Fatima",
    "ur": "عنبر فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anbar Zahra",
    "ur": "عنبر زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anees Ahmed",
    "ur": "انیس احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Anees Muhammad",
    "ur": "انیس محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aneesa Fatima",
    "ur": "انیسہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aneesa Zahra",
    "ur": "انیسہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anisa Fatima",
    "ur": "انیسہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anisa Zahra",
    "ur": "انیسہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anousha Fatima",
    "ur": "انوشہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anum Fatima",
    "ur": "انعم فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anum Zahra",
    "ur": "انعم زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Anwar Ahmed",
    "ur": "انور احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Anwar Muhammad",
    "ur": "انور محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aqdas Muhammad",
    "ur": "اقدس محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aqeel Ahmed",
    "ur": "عقیل احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aqeel Muhammad",
    "ur": "عقیل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aqib Ahmed",
    "ur": "عاقب احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aqib Muhammad",
    "ur": "عاقب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aqila Fatima",
    "ur": "عقیلہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aqsa Fatima",
    "ur": "اقصیٰ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aqsa Zahra",
    "ur": "اقصیٰ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Areeb Muhammad",
    "ur": "عریب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Areeba Fatima",
    "ur": "عریبہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Areeba Zahra",
    "ur": "عریبہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Areej Fatima",
    "ur": "اریج فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Areesha Fatima",
    "ur": "عریشہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Areez Muhammad",
    "ur": "عریض محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Arfa Fatima",
    "ur": "ارفا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Arfa Zahra",
    "ur": "ارفا زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Arham Ahmed",
    "ur": "ارحم احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Arham Muhammad",
    "ur": "ارحم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Arif Ahmed",
    "ur": "عارف احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Arif Muhammad",
    "ur": "عارف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Arisha Fatima",
    "ur": "عریشہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Arisha Zahra",
    "ur": "عریشہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Arman Ahmed",
    "ur": "ارمان احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Arman Muhammad",
    "ur": "ارمان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Arooba Fatima",
    "ur": "عروبہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Arsalan Ahmed",
    "ur": "ارسلان احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Arsalan Muhammad",
    "ur": "ارسلان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Arslan Muhammad",
    "ur": "ارسلان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Arwa Fatima",
    "ur": "اروا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Arwa Zahra",
    "ur": "اروا زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Asad Ahmed",
    "ur": "اسد احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Asad Muhammad",
    "ur": "اسد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Asghar Muhammad",
    "ur": "اصغر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ashar Ahmed",
    "ur": "اشر احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ashar Muhammad",
    "ur": "اشر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ashfaq Ahmed",
    "ur": "اشفاق احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ashfaq Muhammad",
    "ur": "اشفاق محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ashhad Ahmed",
    "ur": "اشہد احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ashhad Muhammad",
    "ur": "اشہد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Asif Ahmed",
    "ur": "آصف احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Asif Muhammad",
    "ur": "آصف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Asim Ahmed",
    "ur": "عاصم احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Asim Muhammad",
    "ur": "عاصم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Asiya Fatima",
    "ur": "آسیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Asiya Zahra",
    "ur": "آسیہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Asma Fatima",
    "ur": "اسما فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Asma Zahra",
    "ur": "اسما زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Atif Ahmed",
    "ur": "عاطف احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Atif Muhammad",
    "ur": "عاطف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Atifa Fatima",
    "ur": "عاطفہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Atifa Zahra",
    "ur": "عاطفہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Awais Ahmed",
    "ur": "اویس احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Awais Muhammad",
    "ur": "اویس محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ayan Ahmed",
    "ur": "ایان احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ayan Muhammad",
    "ur": "ایان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ayat Fatima",
    "ur": "آیات فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ayat Zahra",
    "ur": "آیات زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ayaz Ahmed",
    "ur": "ایاز احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ayaz Muhammad",
    "ur": "ایاز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ayesha Fatima",
    "ur": "عائشہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ayesha Zahra",
    "ur": "عائشہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ayla Fatima",
    "ur": "آئلہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ayla Zahra",
    "ur": "آئلہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aylaa Fatima",
    "ur": "ایلاء فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aynur Fatima",
    "ur": "عین النور فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Aynur Zahra",
    "ur": "عین النور زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ayyub Ahmed",
    "ur": "ایوب احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ayyub Muhammad",
    "ur": "ایوب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Azan Ahmed",
    "ur": "اذان احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Azan Muhammad",
    "ur": "اذان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Azhar Ahmed",
    "ur": "اظہر احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Azhar Muhammad",
    "ur": "اظہر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aziz Ahmed",
    "ur": "عزیز احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Aziz Muhammad",
    "ur": "عزیز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Azka Fatima",
    "ur": "ازکیٰ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Azka Zahra",
    "ur": "ازکیٰ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Azlan Ahmed",
    "ur": "ازلان احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Azlan Muhammad",
    "ur": "ازلان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Azra Fatima",
    "ur": "عذرا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Azra Zahra",
    "ur": "عذرا زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Babar Ahmed",
    "ur": "بابر احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Babar Muhammad",
    "ur": "بابر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Badr Ahmed",
    "ur": "بدر احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Badr Muhammad",
    "ur": "بدر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Bahar Fatima",
    "ur": "بہار فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Bakhtiar Ahmed",
    "ur": "بختیار احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Bakhtiar Muhammad",
    "ur": "بختیار محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Bano Fatima",
    "ur": "بانو فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Bano Zahra",
    "ur": "بانو زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Baqir Ahmed",
    "ur": "باقر احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Baqir Muhammad",
    "ur": "باقر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Bareera Fatima",
    "ur": "بریرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Bareera Zahra",
    "ur": "بریرہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Bariha Fatima",
    "ur": "بارعہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Bariha Zahra",
    "ur": "بارعہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Bashir Muhammad",
    "ur": "بشیر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Basim Ahmed",
    "ur": "باسم احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Basim Muhammad",
    "ur": "باسم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Basit Muhammad",
    "ur": "باسط محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Batool Fatima",
    "ur": "بتول فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Batool Zahra",
    "ur": "بتول زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Benazir Fatima",
    "ur": "بینظیر فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Benazir Zahra",
    "ur": "بینظیر زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Benish Fatima",
    "ur": "بینش فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Bilal Ahmed",
    "ur": "بلال احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Bilal Muhammad",
    "ur": "بلال محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Bisma Fatima",
    "ur": "بسمہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Burhan Ahmed",
    "ur": "برہان احمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Burhan Muhammad",
    "ur": "برہان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Bushra Fatima",
    "ur": "بشریٰ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Bushra Zahra",
    "ur": "بشریٰ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Dania Fatima",
    "ur": "دانیا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Dania Zahra",
    "ur": "دانیا زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Danish Muhammad",
    "ur": "دانش محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Daniya Fatima",
    "ur": "دانیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Daniya Zahra",
    "ur": "دانیہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Daniyal Muhammad",
    "ur": "دانیال محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Dareen Fatima",
    "ur": "دارین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Dareen Zahra",
    "ur": "دارین زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Dawood Muhammad",
    "ur": "داؤد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Deeba Fatima",
    "ur": "دیبا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Deeba Zahra",
    "ur": "دیبا زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Dua Fatima",
    "ur": "دعا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Dua Zahra",
    "ur": "دعا زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Durdana Fatima",
    "ur": "دردانہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ebrahim Muhammad",
    "ur": "ابراہیم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ehsan Muhammad",
    "ur": "احسان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ehtisham Muhammad",
    "ur": "احتشام محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Eimaan Fatima",
    "ur": "ایمان فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Eimaan Zahra",
    "ur": "ایمان زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ejaz Muhammad",
    "ur": "اعجاز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Emad Muhammad",
    "ur": "عماد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Eman Fatima",
    "ur": "ایمان فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Eman Zahra",
    "ur": "ایمان زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Erum Zahra",
    "ur": "ارم زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Esha Fatima",
    "ur": "عشاء فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Esha Zahra",
    "ur": "عشاء زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Eshal Fatima",
    "ur": "ایشال فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fadwa Fatima",
    "ur": "فدوٰی فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fadwa Zahra",
    "ur": "فدوٰی زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fahad Muhammad",
    "ur": "فہد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Faheem Muhammad",
    "ur": "فہیم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Fahim Muhammad",
    "ur": "فہیم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Fahima Fatima",
    "ur": "فہیمہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Faiq Muhammad",
    "ur": "فائق محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Faisal Muhammad",
    "ur": "فیصل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Faiza Fatima",
    "ur": "فائزہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Faiza Zahra",
    "ur": "فائزہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Faizan Muhammad",
    "ur": "فیضان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Fakhra Fatima",
    "ur": "فخرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Falak Fatima",
    "ur": "فلک فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Falak Zahra",
    "ur": "فلک زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Farah Fatima",
    "ur": "فرح فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Farah Zahra",
    "ur": "فرح زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Faraz Muhammad",
    "ur": "فراز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Fareeha Fatima",
    "ur": "فریحہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fareeha Zahra",
    "ur": "فریحہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Farhan Muhammad",
    "ur": "فرحان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Farid Muhammad",
    "ur": "فرید محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Farida Fatima",
    "ur": "فریدہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Farida Zahra",
    "ur": "فریدہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fariha Fatima",
    "ur": "فریحہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fariha Zahra",
    "ur": "فریحہ زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Faris Muhammad",
    "ur": "فارس محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Farwa Fatima",
    "ur": "فاروا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Farwa Zahra",
    "ur": "فاروا زہرا",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Faryal Fatima",
    "ur": "فریال فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fateha Fatima",
    "ur": "فاتحہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fatimah Fatima",
    "ur": "فاطمہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fawad Muhammad",
    "ur": "فواد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Fayyaz Muhammad",
    "ur": "فیاض محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Feroz Muhammad",
    "ur": "فیروز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Fiza Fatima",
    "ur": "فضہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fizza Fatima",
    "ur": "فضہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Fozia Fatima",
    "ur": "فوزیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Furqan Muhammad",
    "ur": "فرقان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ghalib Muhammad",
    "ur": "غالب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ghazal Fatima",
    "ur": "غزل فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ghazala Fatima",
    "ur": "غزالہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ghazi Muhammad",
    "ur": "غازی محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ghina Fatima",
    "ur": "غنا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Gohar Muhammad",
    "ur": "گوہر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Gul Fatima",
    "ur": "گل فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Gulalai Fatima",
    "ur": "گلالئی فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Gulnaz Fatima",
    "ur": "گلناز فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Gulrukh Fatima",
    "ur": "گل رخ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Gulshan Fatima",
    "ur": "گلشن فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Habib Muhammad",
    "ur": "حبیب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hadi Muhammad",
    "ur": "ہادی محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hafiz Muhammad",
    "ur": "حافظ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hafsa Fatima",
    "ur": "حفصہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Haider Muhammad",
    "ur": "حیدر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hajra Fatima",
    "ur": "ہاجرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Haleema Fatima",
    "ur": "حلیمہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Hamdan Muhammad",
    "ur": "حمدان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hamid Muhammad",
    "ur": "حمید محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hammad Muhammad",
    "ur": "حماد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hammadullah Muhammad",
    "ur": "حمداللہ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hamza Muhammad",
    "ur": "حمزہ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hanan Muhammad",
    "ur": "حنان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hania Fatima",
    "ur": "ہانیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Haniya Fatima",
    "ur": "ہانیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Hanzala Muhammad",
    "ur": "حنظلہ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hareem Fatima",
    "ur": "حریم فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Haris Muhammad",
    "ur": "حارث محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Haroon Muhammad",
    "ur": "ہارون محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hasan Muhammad",
    "ur": "حسن محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Haseeb Muhammad",
    "ur": "حسیب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hashim Muhammad",
    "ur": "ہاشم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hashir Muhammad",
    "ur": "حاشر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hassan Muhammad",
    "ur": "حسن محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hassanain Muhammad",
    "ur": "حسنین محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hatim Muhammad",
    "ur": "حاتم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hayat Muhammad",
    "ur": "حیات محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Haziq Muhammad",
    "ur": "حاذق محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hiba Fatima",
    "ur": "ہبہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Hifza Fatima",
    "ur": "حفظہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Hilal Muhammad",
    "ur": "ہلال محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hina Fatima",
    "ur": "حنا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Hira Fatima",
    "ur": "حرا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Hisham Muhammad",
    "ur": "ہشام محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Hoor Fatima",
    "ur": "حور فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Hoorain Fatima",
    "ur": "حورین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Hooriya Fatima",
    "ur": "حوریہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Huda Fatima",
    "ur": "ہدیٰ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Huma Fatima",
    "ur": "ہما فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Humaira Fatima",
    "ur": "حمیرا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Hussain Muhammad",
    "ur": "حسین محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Huzaifa Muhammad",
    "ur": "حذیفہ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ibad Muhammad",
    "ur": "عباد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ibrahim Muhammad",
    "ur": "ابراہیم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Idrees Muhammad",
    "ur": "ادریس محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Iffat Fatima",
    "ur": "عفت فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Iftikhar Muhammad",
    "ur": "افتخار محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ihsan Muhammad",
    "ur": "احسان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ihtesham Muhammad",
    "ur": "احتشام محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ijlal Muhammad",
    "ur": "اجلال محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ikram Muhammad",
    "ur": "اکرام محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ilyas Muhammad",
    "ur": "الیاس محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Imaan Fatima",
    "ur": "ایمان فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Imad Muhammad",
    "ur": "عماد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Imran Muhammad",
    "ur": "عمران محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Inam Muhammad",
    "ur": "انعام محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Inaya Fatima",
    "ur": "عنایہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Insha Fatima",
    "ur": "انشا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Iqbal Muhammad",
    "ur": "اقبال محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Iqra Fatima",
    "ur": "اقرا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Iram Fatima",
    "ur": "ارم فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Irfan Muhammad",
    "ur": "عرفان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Isa Muhammad",
    "ur": "عیسیٰ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ishaq Muhammad",
    "ur": "اسحاق محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Ismail Muhammad",
    "ur": "اسماعیل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Isra Fatima",
    "ur": "اسراء فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Izaan Muhammad",
    "ur": "اذان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Izza Fatima",
    "ur": "عزہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Jabir Muhammad",
    "ur": "جابر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Jafar Muhammad",
    "ur": "جعفر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Jahangir Muhammad",
    "ur": "جہانگیر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Jalal Muhammad",
    "ur": "جلال محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Jamal Muhammad",
    "ur": "جمال محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Jameel Muhammad",
    "ur": "جمیل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Jannat Fatima",
    "ur": "جنت فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Jasim Muhammad",
    "ur": "جاسم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Jasmin Fatima",
    "ur": "یاسمین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Javeria Fatima",
    "ur": "جویریہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Jawad Muhammad",
    "ur": "جواد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Jawaria Fatima",
    "ur": "جواریہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Jazmin Fatima",
    "ur": "یاسمین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Jibran Muhammad",
    "ur": "جبران محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Jihan Fatima",
    "ur": "جہان فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Junaid Muhammad",
    "ur": "جنید محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Kainat Fatima",
    "ur": "کائنات فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Kamal Muhammad",
    "ur": "کمال محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Kamil Muhammad",
    "ur": "کامل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Kanza Fatima",
    "ur": "کنزہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Karam Muhammad",
    "ur": "کرم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Kashaf Fatima",
    "ur": "کشف فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Kashan Muhammad",
    "ur": "کاشان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Kashif Muhammad",
    "ur": "کاشف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Kausar Fatima",
    "ur": "کوثر فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Khadija Fatima",
    "ur": "خدیجہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Khadijah Fatima",
    "ur": "خدیجہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Khalid Muhammad",
    "ur": "خالد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Khalida Fatima",
    "ur": "خالدہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Khizar Muhammad",
    "ur": "خضر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Khurram Muhammad",
    "ur": "خرم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Kinza Fatima",
    "ur": "کنزہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Kiran Fatima",
    "ur": "کرن فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Komal Fatima",
    "ur": "کومل فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Laeeq Muhammad",
    "ur": "لائق محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Laiba Fatima",
    "ur": "لائبہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Laila Fatima",
    "ur": "لیلیٰ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Lamia Fatima",
    "ur": "لامعہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Laraib Fatima",
    "ur": "لاریب فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Lareen Fatima",
    "ur": "لارین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Lubna Fatima",
    "ur": "لبنیٰ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Luqman Muhammad",
    "ur": "لقمان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Maaz Muhammad",
    "ur": "معاذ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mahad Muhammad",
    "ur": "مہاد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mahak Fatima",
    "ur": "مہک فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mahboob Muhammad",
    "ur": "محبوب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Maher Muhammad",
    "ur": "ماہر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mahir Muhammad",
    "ur": "ماہر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mahira Fatima",
    "ur": "ماہرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mahjabeen Fatima",
    "ur": "ماہ جبین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mahmood Muhammad",
    "ur": "محمود محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mahnoor Fatima",
    "ur": "ماہ نور فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mahrukh Fatima",
    "ur": "ماہ رخ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Maira Fatima",
    "ur": "مائرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Majid Muhammad",
    "ur": "مجید محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Malaika Fatima",
    "ur": "ملائکہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Maliha Fatima",
    "ur": "ملیحہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Malik Muhammad",
    "ur": "مالک محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Manahil Fatima",
    "ur": "منہل فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Manal Fatima",
    "ur": "منال فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mansoor Muhammad",
    "ur": "منصور محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Maqsood Muhammad",
    "ur": "مقصود محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mariam Fatima",
    "ur": "مریم فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Maroof Muhammad",
    "ur": "معروف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Marwa Fatima",
    "ur": "مروہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Marwan Muhammad",
    "ur": "مروان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Maryam Fatima",
    "ur": "مریم فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Masood Muhammad",
    "ur": "مسعود محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mehak Fatima",
    "ur": "مہک فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Meher Fatima",
    "ur": "مہر فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mehreen Fatima",
    "ur": "مہرین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mehwish Fatima",
    "ur": "مہوش فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mikael Muhammad",
    "ur": "میکائیل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mikail Muhammad",
    "ur": "میکائیل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Minahil Fatima",
    "ur": "منہال فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Minal Fatima",
    "ur": "منال فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mirza Muhammad",
    "ur": "مرزا محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mishal Fatima",
    "ur": "مشعل فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mishka Fatima",
    "ur": "مشکٰی فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mobeen Muhammad",
    "ur": "مبین محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mohammad Muhammad",
    "ur": "محمد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Moin Muhammad",
    "ur": "معین محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Moiz Muhammad",
    "ur": "مویز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mona Fatima",
    "ur": "مونا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Moomal Fatima",
    "ur": "مومل فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mubashir Muhammad",
    "ur": "مبشر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mudassir Muhammad",
    "ur": "مدثر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Muhib Muhammad",
    "ur": "محب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mujahid Muhammad",
    "ur": "مجاہد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Mujtaba Muhammad",
    "ur": "مجتبیٰ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Muneeb Muhammad",
    "ur": "منیب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Muneeba Fatima",
    "ur": "منیبہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Munir Muhammad",
    "ur": "منیر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Murtaza Muhammad",
    "ur": "مرتضیٰ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Musa Muhammad",
    "ur": "موسیٰ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Muskan Fatima",
    "ur": "مسکان فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Mustafa Muhammad",
    "ur": "مصطفیٰ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Muzammil Muhammad",
    "ur": "مزمل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Nabeel Muhammad",
    "ur": "نبیل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Nadeem Muhammad",
    "ur": "ندیم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Nadia Fatima",
    "ur": "نادیا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Nadir Muhammad",
    "ur": "نادر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Naeem Muhammad",
    "ur": "نعیم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Naila Fatima",
    "ur": "نائلہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Naina Fatima",
    "ur": "نینا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Nargis Fatima",
    "ur": "نرگس فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Nashita Fatima",
    "ur": "نشطہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Nashmia Fatima",
    "ur": "نشمیا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Nashra Fatima",
    "ur": "نشرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Naufal Muhammad",
    "ur": "نوفل محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Naveed Muhammad",
    "ur": "نوید محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Nawal Fatima",
    "ur": "نوال فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Nawaz Muhammad",
    "ur": "نواز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Nayab Fatima",
    "ur": "نایاب فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Nazia Fatima",
    "ur": "نازیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Neha Fatima",
    "ur": "نیہا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Nida Fatima",
    "ur": "ندا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Nihal Muhammad",
    "ur": "نہال محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Nimra Fatima",
    "ur": "نمرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Noman Muhammad",
    "ur": "نومان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Noor Fatima",
    "ur": "نور فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Noorain Fatima",
    "ur": "نورین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Noshaba Fatima",
    "ur": "نوشابہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Nosheen Fatima",
    "ur": "نوشین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Numan Muhammad",
    "ur": "نومان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Omar Muhammad",
    "ur": "عمر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Omer Muhammad",
    "ur": "عمر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Osama Muhammad",
    "ur": "اسامہ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Owais Muhammad",
    "ur": "اویس محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Parisa Fatima",
    "ur": "پریسا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Parvez Muhammad",
    "ur": "پرویز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Qaiser Muhammad",
    "ur": "قیصر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Qamar Muhammad",
    "ur": "قمر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Qandeel Fatima",
    "ur": "قندیل فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Qasim Muhammad",
    "ur": "قاسم محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Qudrat Muhammad",
    "ur": "قدرت محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Quratulain Fatima",
    "ur": "قرۃ العین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rabia Fatima",
    "ur": "رابعہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rabiya Fatima",
    "ur": "رابعہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rafay Muhammad",
    "ur": "رفعے محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Rafia Fatima",
    "ur": "رافعہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rameen Fatima",
    "ur": "رامین فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rameesha Fatima",
    "ur": "رمیشہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rameez Muhammad",
    "ur": "رمیز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Rania Fatima",
    "ur": "رانیا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rashid Muhammad",
    "ur": "راشد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Rauf Muhammad",
    "ur": "رؤف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Rayyan Muhammad",
    "ur": "ریان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Raza Muhammad",
    "ur": "رضا محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Rehan Muhammad",
    "ur": "ریحان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Rida Fatima",
    "ur": "ردا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rija Fatima",
    "ur": "رجاء فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rimsha Fatima",
    "ur": "رمشا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rizwan Muhammad",
    "ur": "رضوان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Rizwana Fatima",
    "ur": "ریزوانا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Roha Fatima",
    "ur": "روہا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rohan Muhammad",
    "ur": "روہان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Romaisa Fatima",
    "ur": "رومےسا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Romal Fatima",
    "ur": "رومال فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Rukhsar Fatima",
    "ur": "رخسار فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Ruqayya Fatima",
    "ur": "رقیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Saad Muhammad",
    "ur": "سعد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Saba Fatima",
    "ur": "صبا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sadia Fatima",
    "ur": "سعدیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Safa Fatima",
    "ur": "صفا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Safiya Fatima",
    "ur": "صفیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sahar Fatima",
    "ur": "سحر فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Saharish Fatima",
    "ur": "سحرش فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Saira Fatima",
    "ur": "سائرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sajida Fatima",
    "ur": "ساجدہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sakina Fatima",
    "ur": "سکینہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Salma Fatima",
    "ur": "سلمیٰ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Salman Muhammad",
    "ur": "سلمان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Saman Fatima",
    "ur": "سمن فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sameer Muhammad",
    "ur": "سمیر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Samina Fatima",
    "ur": "ثمینہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sania Fatima",
    "ur": "ثانیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sarah Fatima",
    "ur": "سارہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sarina Fatima",
    "ur": "سرینہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sarmad Muhammad",
    "ur": "سرمد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Sehr Fatima",
    "ur": "سحر فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sehrish Fatima",
    "ur": "سحرش فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Shagufta Fatima",
    "ur": "شگفتہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Shahbaz Muhammad",
    "ur": "شہباز محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Shahmeer Muhammad",
    "ur": "شاہ میر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Shahzad Muhammad",
    "ur": "شہزاد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Shahzaib Muhammad",
    "ur": "شہزیب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Shan Muhammad",
    "ur": "شان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Shanza Fatima",
    "ur": "شانزہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Shariq Muhammad",
    "ur": "شارق محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Shayan Muhammad",
    "ur": "شایان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Shazia Fatima",
    "ur": "شازیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Shehryar Muhammad",
    "ur": "شہریار محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Shifa Fatima",
    "ur": "شفا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Shoaib Muhammad",
    "ur": "شعیب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Shuja Muhammad",
    "ur": "شجاع محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Sidra Fatima",
    "ur": "سدرہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sikandar Muhammad",
    "ur": "سکندر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Sobia Fatima",
    "ur": "صوبیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sonia Fatima",
    "ur": "سونیا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sufyan Muhammad",
    "ur": "سفیان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Suhana Fatima",
    "ur": "سہانا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Suleman Muhammad",
    "ur": "سلیمان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Sumaiya Fatima",
    "ur": "سمیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sumbal Fatima",
    "ur": "سنبل فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Sundas Fatima",
    "ur": "سندس فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Tabassum Fatima",
    "ur": "تبسم فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Taha Muhammad",
    "ur": "طٰہٰ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Taimoor Muhammad",
    "ur": "تیمور محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Talha Muhammad",
    "ur": "طلحہ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Tania Fatima",
    "ur": "تانیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Tariq Muhammad",
    "ur": "طارق محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Tauseef Muhammad",
    "ur": "توصیف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Tehreem Fatima",
    "ur": "تحریم فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Tooba Fatima",
    "ur": "طوبیٰ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Umar Muhammad",
    "ur": "عمر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Urooj Fatima",
    "ur": "عروج فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Usama Muhammad",
    "ur": "اسامہ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Usman Muhammad",
    "ur": "عثمان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Waleed Muhammad",
    "ur": "ولید محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Wania Fatima",
    "ur": "وانیہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Waqas Muhammad",
    "ur": "وقاص محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Warda Fatima",
    "ur": "وردہ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Yahya Muhammad",
    "ur": "یحییٰ محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Yasir Muhammad",
    "ur": "یاسر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Yousaf Muhammad",
    "ur": "یوسف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Yumna Fatima",
    "ur": "یمنٰی فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Yusra Fatima",
    "ur": "یسریٰ فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Yusuf Muhammad",
    "ur": "یوسف محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zahid Muhammad",
    "ur": "زاہد محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zain Muhammad",
    "ur": "زین محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zainab Fatima",
    "ur": "زینب فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Zaki Muhammad",
    "ur": "زکی محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zara Fatima",
    "ur": "زارا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Zarar Muhammad",
    "ur": "ضرار محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zaryab Muhammad",
    "ur": "زریاب محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zayan Muhammad",
    "ur": "زایان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zeba Fatima",
    "ur": "زیبا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Zeeshan Muhammad",
    "ur": "ذیشان محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zehra Fatima",
    "ur": "زہرا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Zia Muhammad",
    "ur": "ضیا محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zorain Muhammad",
    "ur": "زورین محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zoya Fatima",
    "ur": "زویا فاطمہ",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "girl"
  },
  {
    "en": "Zubair Muhammad",
    "ur": "زبیر محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  },
  {
    "en": "Zulqarnain Muhammad",
    "ur": "ذوالقرنین محمد",
    "meaning": "Traditional compound name; meaning depends on its component names",
    "gender": "boy"
  }
];

export default function NamesPage() {
  const [query, setQuery] = useState("");
  const [gender, setGender] = useState("all");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const searchResults = useMemo(() => {
    const matching = names.filter((n) => gender === "all" || n.gender === gender);
    if (!normalizedQuery) {
      return { exact: [], suggestions: matching.sort((a, b) => a.en.localeCompare(b.en, "en", { sensitivity: "base" })) };
    }

    const q = normalizedQuery.replace(/\s+/g, " ");
    const urQuery = query.trim().replace(/\s+/g, "");
    const ranked = matching.map((n) => {
      const en = n.en.toLocaleLowerCase().replace(/\\s+/g, " ");
      const ur = n.ur.replace(/\\s+/g, "");
      let rank = 99;
      let exact = false;

      // Search only the actual name fields. Meanings must never create false matches.
      if (en === q || ur === urQuery) { rank = 0; exact = true; }
      else if (en.startsWith(q)) rank = 1;
      else if (en.includes(q) || ur.startsWith(urQuery) || ur.includes(urQuery)) rank = 2;

      return { name: n, rank, exact };
    }).filter((item) => item.rank < 99);
    ranked.sort((a, b) => a.rank - b.rank || a.name.en.localeCompare(b.name.en, "en", { sensitivity: "base" }));
    return {
      exact: ranked.filter((item) => item.exact).map((item) => item.name),
      suggestions: ranked.filter((item) => !item.exact).map((item) => item.name)
    };
  }, [normalizedQuery, query, gender]);
  const filtered = [...searchResults.exact, ...searchResults.suggestions];

  const total = names.filter((n) => gender === "all" || n.gender === gender).length;
  const boyCount = names.filter((n) => n.gender === "boy").length;
  const girlCount = names.filter((n) => n.gender === "girl").length;

  return <ToolPage active="/names" kicker="NAMES IN URDU" title="Urdu Names & Meanings" description={`Explore ${names.length} names with Urdu spellings and meanings. Filter boys' names, girls' names, or browse the complete collection.`}>
    <div className="search-field"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by English or Urdu name..." aria-label="Search names" /></div>
    <div className="name-filters" role="group" aria-label="Filter names by gender">
      {[ ["all", `All names (${names.length})`], ["boy", `Boys (${boyCount})`], ["girl", `Girls (${girlCount})`] ].map(([value, label]) =>
        <button key={value} type="button" className={gender === value ? "name-filter active" : "name-filter"} onClick={() => setGender(value)} aria-pressed={gender === value}>{label}</button>
      )}
    </div>
    <p className="results-count">Showing {filtered.length} of {total} names{normalizedQuery ? " · name matches only" : ""}</p>
    {searchResults.exact.length > 0 && <>
      <h2 className="name-results-heading">Exact match</h2>
      <div className="name-grid">{searchResults.exact.map((n) => <article className="name-card" key={n.gender + "-" + n.en}>
        <div><strong>{n.en}</strong><p>{n.meaning}</p><span className="name-gender">{n.gender === "boy" ? "Boy" : "Girl"}</span></div>
        <div className="name-urdu" lang="ur" dir="rtl">{n.ur}</div>
      </article>)}</div>
    </>}
    {searchResults.suggestions.length > 0 && <>
      {normalizedQuery && <h2 className="name-results-heading">Suggestions</h2>}
      <div className="name-grid">{searchResults.suggestions.map((n) => <article className="name-card" key={n.gender + "-" + n.en}>
        <div><strong>{n.en}</strong><p>{n.meaning}</p><span className="name-gender">{n.gender === "boy" ? "Boy" : "Girl"}</span></div>
        <div className="name-urdu" lang="ur" dir="rtl">{n.ur}</div>
      </article>)}</div>
    </>}
    {!filtered.length && <p className="empty-state">No matching names found.</p>}
    <p className="disclaimer">Name meanings and transliterations can vary by language, region, and source. Some entries are approximate and should be verified before publication.</p>
  </ToolPage>;
}
