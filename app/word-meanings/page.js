"use client";
import { useMemo, useState } from "react";
import ToolPage from "../../components/ToolPage";

const words = [
  {
    "word": "Ability",
    "urdu": "قابلیت",
    "definition": "Ability — commonly used to express “قابلیت” in Urdu."
  },
  {
    "word": "Sad",
    "urdu": "اداس",
    "definition": "Sad — commonly used to express sadness “اداس” in Urdu."
  },
  {
    "word": "Acceptance",
    "urdu": "قبولیت",
    "definition": "Acceptance — commonly used to express “قبولیت” in Urdu."
  },
  {
    "word": "Accident",
    "urdu": "حادثہ",
    "definition": "Accident — commonly used to express “حادثہ” in Urdu."
  },
  {
    "word": "Action",
    "urdu": "عمل",
    "definition": "Action — commonly used to express “عمل” in Urdu."
  },
  {
    "word": "Active",
    "urdu": "فعال",
    "definition": "Active — commonly used to express “فعال” in Urdu."
  },
  {
    "word": "Afraid",
    "urdu": "خوف زدہ",
    "definition": "Afraid — commonly used to express “خوف زدہ” in Urdu."
  },
  {
    "word": "After",
    "urdu": "بعد",
    "definition": "After — commonly used to express “بعد” in Urdu."
  },
  {
    "word": "Agree",
    "urdu": "متفق ہونا",
    "definition": "Agree — commonly used to express “متفق ہونا” in Urdu."
  },
  {
    "word": "Air",
    "urdu": "ہوا",
    "definition": "Air — commonly used to express “ہوا” in Urdu."
  },
  {
    "word": "Almost",
    "urdu": "تقریباً",
    "definition": "Almost — commonly used to express “تقریباً” in Urdu."
  },
  {
    "word": "Amazing",
    "urdu": "حیرت انگیز",
    "definition": "Amazing — commonly used to express “حیرت انگیز” in Urdu."
  },
  {
    "word": "Anger",
    "urdu": "غصہ",
    "definition": "Anger — commonly used to express “غصہ” in Urdu."
  },
  {
    "word": "Answer",
    "urdu": "جواب",
    "definition": "Answer — commonly used to express “جواب” in Urdu."
  },
  {
    "word": "Anxiety",
    "urdu": "بے چینی",
    "definition": "Anxiety — commonly used to express “بے چینی” in Urdu."
  },
  {
    "word": "Area",
    "urdu": "علاقہ",
    "definition": "Area — commonly used to express “علاقہ” in Urdu."
  },
  {
    "word": "Arrive",
    "urdu": "پہنچنا",
    "definition": "Arrive — commonly used to express “پہنچنا” in Urdu."
  },
  {
    "word": "Ask",
    "urdu": "پوچھنا",
    "definition": "Ask — commonly used to express “پوچھنا” in Urdu."
  },
  {
    "word": "Attention",
    "urdu": "توجہ",
    "definition": "Attention — commonly used to express “توجہ” in Urdu."
  },
  {
    "word": "Available",
    "urdu": "دستیاب",
    "definition": "Available — commonly used to express “دستیاب” in Urdu."
  },
  {
    "word": "Awake",
    "urdu": "جاگنا",
    "definition": "Awake — commonly used to express “جاگنا” in Urdu."
  },
  {
    "word": "Back",
    "urdu": "پیچھے",
    "definition": "Back — commonly used to express “پیچھے” in Urdu."
  },
  {
    "word": "Beautiful",
    "urdu": "خوبصورت",
    "definition": "Beautiful — commonly used to express “خوبصورت” in Urdu."
  },
  {
    "word": "Because",
    "urdu": "کیونکہ",
    "definition": "Because — commonly used to express “کیونکہ” in Urdu."
  },
  {
    "word": "Bed",
    "urdu": "بستر",
    "definition": "Bed — commonly used to express “بستر” in Urdu."
  },
  {
    "word": "Begin",
    "urdu": "شروع کرنا",
    "definition": "Begin — commonly used to express “شروع کرنا” in Urdu."
  },
  {
    "word": "Best",
    "urdu": "بہترین",
    "definition": "Best — commonly used to express “بہترین” in Urdu."
  },
  {
    "word": "Better",
    "urdu": "بہتر",
    "definition": "Better — commonly used to express “بہتر” in Urdu."
  },
  {
    "word": "Bird",
    "urdu": "پرندہ",
    "definition": "Bird — commonly used to express “پرندہ” in Urdu."
  },
  {
    "word": "Birth",
    "urdu": "پیدائش",
    "definition": "Birth — commonly used to express “پیدائش” in Urdu."
  },
  {
    "word": "Black",
    "urdu": "کالا",
    "definition": "Black — commonly used to express “کالا” in Urdu."
  },
  {
    "word": "Blood",
    "urdu": "خون",
    "definition": "Blood — commonly used to express “خون” in Urdu."
  },
  {
    "word": "Blue",
    "urdu": "نیلا",
    "definition": "Blue — commonly used to express “نیلا” in Urdu."
  },
  {
    "word": "Brave",
    "urdu": "بہادر",
    "definition": "Brave — commonly used to express “بہادر” in Urdu."
  },
  {
    "word": "Bread",
    "urdu": "روٹی",
    "definition": "Bread — commonly used to express “روٹی” in Urdu."
  },
  {
    "word": "Bright",
    "urdu": "روشن",
    "definition": "Bright — commonly used to express “روشن” in Urdu."
  },
  {
    "word": "Brother",
    "urdu": "بھائی",
    "definition": "Brother — commonly used to express “بھائی” in Urdu."
  },
  {
    "word": "Business",
    "urdu": "کاروبار",
    "definition": "Business — commonly used to express “کاروبار” in Urdu."
  },
  {
    "word": "Busy",
    "urdu": "مصروف",
    "definition": "Busy — commonly used to express “مصروف” in Urdu."
  },
  {
    "word": "Care",
    "urdu": "خیال",
    "definition": "Care — commonly used to express “خیال” in Urdu."
  },
  {
    "word": "Careful",
    "urdu": "محتاط",
    "definition": "Careful — commonly used to express “محتاط” in Urdu."
  },
  {
    "word": "Cause",
    "urdu": "وجہ",
    "definition": "Cause — commonly used to express “وجہ” in Urdu."
  },
  {
    "word": "Change",
    "urdu": "تبدیلی",
    "definition": "Change — commonly used to express “تبدیلی” in Urdu."
  },
  {
    "word": "Character",
    "urdu": "کردار",
    "definition": "Character — commonly used to express “کردار” in Urdu."
  },
  {
    "word": "Cheap",
    "urdu": "سستا",
    "definition": "Cheap — commonly used to express “سستا” in Urdu."
  },
  {
    "word": "Child",
    "urdu": "بچہ",
    "definition": "Child — commonly used to express “بچہ” in Urdu."
  },
  {
    "word": "Choose",
    "urdu": "چننا",
    "definition": "Choose — commonly used to express “چننا” in Urdu."
  },
  {
    "word": "City",
    "urdu": "شہر",
    "definition": "City — commonly used to express “شہر” in Urdu."
  },
  {
    "word": "Clear",
    "urdu": "واضح",
    "definition": "Clear — commonly used to express “واضح” in Urdu."
  },
  {
    "word": "Clever",
    "urdu": "ذہین",
    "definition": "Clever — commonly used to express “ذہین” in Urdu."
  },
  {
    "word": "Cloud",
    "urdu": "بادل",
    "definition": "Cloud — commonly used to express “بادل” in Urdu."
  },
  {
    "word": "Comfort",
    "urdu": "آرام",
    "definition": "Comfort — commonly used to express “آرام” in Urdu."
  },
  {
    "word": "Common",
    "urdu": "عام",
    "definition": "Common — commonly used to express “عام” in Urdu."
  },
  {
    "word": "Compassion",
    "urdu": "ہمدردی",
    "definition": "Compassion — commonly used to express “ہمدردی” in Urdu."
  },
  {
    "word": "Complete",
    "urdu": "مکمل",
    "definition": "Complete — commonly used to express “مکمل” in Urdu."
  },
  {
    "word": "Confused",
    "urdu": "الجھن میں",
    "definition": "Confused — commonly used to express “الجھن میں” in Urdu."
  },
  {
    "word": "Connection",
    "urdu": "رابطہ",
    "definition": "Connection — commonly used to express “رابطہ” in Urdu."
  },
  {
    "word": "Continue",
    "urdu": "جاری رکھنا",
    "definition": "Continue — commonly used to express “جاری رکھنا” in Urdu."
  },
  {
    "word": "Control",
    "urdu": "قابو",
    "definition": "Control — commonly used to express “قابو” in Urdu."
  },
  {
    "word": "Courage",
    "urdu": "ہمت",
    "definition": "Courage — commonly used to express “ہمت” in Urdu."
  },
  {
    "word": "Create",
    "urdu": "بنانا",
    "definition": "Create — commonly used to express “بنانا” in Urdu."
  },
  {
    "word": "Culture",
    "urdu": "ثقافت",
    "definition": "Culture — commonly used to express “ثقافت” in Urdu."
  },
  {
    "word": "Cute",
    "urdu": "پیارا",
    "definition": "Cute — commonly used to express “پیارا” in Urdu."
  },
  {
    "word": "Daily",
    "urdu": "روزانہ",
    "definition": "Daily — commonly used to express “روزانہ” in Urdu."
  },
  {
    "word": "Dark",
    "urdu": "اندھیرا",
    "definition": "Dark — commonly used to express “اندھیرا” in Urdu."
  },
  {
    "word": "Daughter",
    "urdu": "بیٹی",
    "definition": "Daughter — commonly used to express “بیٹی” in Urdu."
  },
  {
    "word": "Dear",
    "urdu": "عزیز",
    "definition": "Dear — commonly used to express “عزیز” in Urdu."
  },
  {
    "word": "Decision",
    "urdu": "فیصلہ",
    "definition": "Decision — commonly used to express “فیصلہ” in Urdu."
  },
  {
    "word": "Delicious",
    "urdu": "مزیدار",
    "definition": "Delicious — commonly used to express “مزیدار” in Urdu."
  },
  {
    "word": "Depend",
    "urdu": "انحصار کرنا",
    "definition": "Depend — commonly used to express “انحصار کرنا” in Urdu."
  },
  {
    "word": "Different",
    "urdu": "مختلف",
    "definition": "Different — commonly used to express “مختلف” in Urdu."
  },
  {
    "word": "Dream",
    "urdu": "خواب",
    "definition": "Dream — commonly used to express “خواب” in Urdu."
  },
  {
    "word": "Drink",
    "urdu": "پینا",
    "definition": "Drink — commonly used to express “پینا” in Urdu."
  },
  {
    "word": "Early",
    "urdu": "جلدی",
    "definition": "Early — commonly used to express “جلدی” in Urdu."
  },
  {
    "word": "Earth",
    "urdu": "زمین",
    "definition": "Earth — commonly used to express “زمین” in Urdu."
  },
  {
    "word": "Education",
    "urdu": "تعلیم",
    "definition": "Education — commonly used to express “تعلیم” in Urdu."
  },
  {
    "word": "Effort",
    "urdu": "کوشش",
    "definition": "Effort — commonly used to express “کوشش” in Urdu."
  },
  {
    "word": "Emotion",
    "urdu": "جذبہ",
    "definition": "Emotion — commonly used to express “جذبہ” in Urdu."
  },
  {
    "word": "Encourage",
    "urdu": "حوصلہ افزائی کرنا",
    "definition": "Encourage — commonly used to express “حوصلہ افزائی کرنا” in Urdu."
  },
  {
    "word": "Enjoy",
    "urdu": "لطف اٹھانا",
    "definition": "Enjoy — commonly used to express “لطف اٹھانا” in Urdu."
  },
  {
    "word": "Enough",
    "urdu": "کافی",
    "definition": "Enough — commonly used to express “کافی” in Urdu."
  },
  {
    "word": "Equal",
    "urdu": "برابر",
    "definition": "Equal — commonly used to express “برابر” in Urdu."
  },
  {
    "word": "Evening",
    "urdu": "شام",
    "definition": "Evening — commonly used to express “شام” in Urdu."
  },
  {
    "word": "Example",
    "urdu": "مثال",
    "definition": "Example — commonly used to express “مثال” in Urdu."
  },
  {
    "word": "Excited",
    "urdu": "پرجوش",
    "definition": "Excited — commonly used to express “پرجوش” in Urdu."
  },
  {
    "word": "Experience",
    "urdu": "تجربہ",
    "definition": "Experience — commonly used to express “تجربہ” in Urdu."
  },
  {
    "word": "Family",
    "urdu": "خاندان",
    "definition": "Family — commonly used to express “خاندان” in Urdu."
  },
  {
    "word": "Famous",
    "urdu": "مشہور",
    "definition": "Famous — commonly used to express “مشہور” in Urdu."
  },
  {
    "word": "Fast",
    "urdu": "تیز",
    "definition": "Fast — commonly used to express “تیز” in Urdu."
  },
  {
    "word": "Father",
    "urdu": "والد",
    "definition": "Father — commonly used to express “والد” in Urdu."
  },
  {
    "word": "Feel",
    "urdu": "محسوس کرنا",
    "definition": "Feel — commonly used to express “محسوس کرنا” in Urdu."
  },
  {
    "word": "Field",
    "urdu": "میدان",
    "definition": "Field — commonly used to express “میدان” in Urdu."
  },
  {
    "word": "Find",
    "urdu": "تلاش کرنا",
    "definition": "Find — commonly used to express “تلاش کرنا” in Urdu."
  },
  {
    "word": "Fire",
    "urdu": "آگ",
    "definition": "Fire — commonly used to express “آگ” in Urdu."
  },
  {
    "word": "First",
    "urdu": "پہلا",
    "definition": "First — commonly used to express “پہلا” in Urdu."
  },
  {
    "word": "Focus",
    "urdu": "توجہ مرکوز کرنا",
    "definition": "Focus — commonly used to express “توجہ مرکوز کرنا” in Urdu."
  },
  {
    "word": "Follow",
    "urdu": "پیروی کرنا",
    "definition": "Follow — commonly used to express “پیروی کرنا” in Urdu."
  },
  {
    "word": "Forget",
    "urdu": "بھولنا",
    "definition": "Forget — commonly used to express “بھولنا” in Urdu."
  },
  {
    "word": "Forgive",
    "urdu": "معاف کرنا",
    "definition": "Forgive — commonly used to express “معاف کرنا” in Urdu."
  },
  {
    "word": "Friend",
    "urdu": "دوست",
    "definition": "Friend — commonly used to express “دوست” in Urdu."
  },
  {
    "word": "Friendship",
    "urdu": "دوستی",
    "definition": "Friendship — commonly used to express “دوستی” in Urdu."
  },
  {
    "word": "Gain",
    "urdu": "حاصل کرنا",
    "definition": "Gain — commonly used to express “حاصل کرنا” in Urdu."
  },
  {
    "word": "Gentle",
    "urdu": "نرم مزاج",
    "definition": "Gentle — commonly used to express “نرم مزاج” in Urdu."
  },
  {
    "word": "Gift",
    "urdu": "تحفہ",
    "definition": "Gift — commonly used to express “تحفہ” in Urdu."
  },
  {
    "word": "Glad",
    "urdu": "خوش",
    "definition": "Glad — commonly used to express “خوش” in Urdu."
  },
  {
    "word": "Goal",
    "urdu": "مقصد",
    "definition": "Goal — commonly used to express “مقصد” in Urdu."
  },
  {
    "word": "Grace",
    "urdu": "فضل",
    "definition": "Grace — commonly used to express “فضل” in Urdu."
  },
  {
    "word": "Grateful",
    "urdu": "شکر گزار",
    "definition": "Grateful — commonly used to express “شکر گزار” in Urdu."
  },
  {
    "word": "Green",
    "urdu": "سبز",
    "definition": "Green — commonly used to express “سبز” in Urdu."
  },
  {
    "word": "Grow",
    "urdu": "بڑھنا",
    "definition": "Grow — commonly used to express “بڑھنا” in Urdu."
  },
  {
    "word": "Happiness",
    "urdu": "خوشی",
    "definition": "Happiness — commonly used to express “خوشی” in Urdu."
  },
  {
    "word": "Hard",
    "urdu": "مشکل",
    "definition": "Hard — commonly used to express “مشکل” in Urdu."
  },
  {
    "word": "Health",
    "urdu": "صحت",
    "definition": "Health — commonly used to express “صحت” in Urdu."
  },
  {
    "word": "Heart",
    "urdu": "دل",
    "definition": "Heart — commonly used to express “دل” in Urdu."
  },
  {
    "word": "Help",
    "urdu": "مدد",
    "definition": "Help — commonly used to express “مدد” in Urdu."
  },
  {
    "word": "Honest",
    "urdu": "ایماندار",
    "definition": "Honest — commonly used to express “ایماندار” in Urdu."
  },
  {
    "word": "Hope",
    "urdu": "امید",
    "definition": "Hope — commonly used to express “امید” in Urdu."
  },
  {
    "word": "Human",
    "urdu": "انسان",
    "definition": "Human — commonly used to express “انسان” in Urdu."
  },
  {
    "word": "Humble",
    "urdu": "عاجز",
    "definition": "Humble — commonly used to express “عاجز” in Urdu."
  },
  {
    "word": "Idea",
    "urdu": "خیال",
    "definition": "Idea — commonly used to express “خیال” in Urdu."
  },
  {
    "word": "Important",
    "urdu": "اہم",
    "definition": "Important — commonly used to express “اہم” in Urdu."
  },
  {
    "word": "Include",
    "urdu": "شامل کرنا",
    "definition": "Include — commonly used to express “شامل کرنا” in Urdu."
  },
  {
    "word": "Information",
    "urdu": "معلومات",
    "definition": "Information — commonly used to express “معلومات” in Urdu."
  },
  {
    "word": "Innocent",
    "urdu": "معصوم",
    "definition": "Innocent — commonly used to express “معصوم” in Urdu."
  },
  {
    "word": "Intelligent",
    "urdu": "ذہین",
    "definition": "Intelligent — commonly used to express “ذہین” in Urdu."
  },
  {
    "word": "Interest",
    "urdu": "دلچسپی",
    "definition": "Interest — commonly used to express “دلچسپی” in Urdu."
  },
  {
    "word": "Joy",
    "urdu": "مسرت",
    "definition": "Joy — commonly used to express “مسرت” in Urdu."
  },
  {
    "word": "Justice",
    "urdu": "انصاف",
    "definition": "Justice — commonly used to express “انصاف” in Urdu."
  },
  {
    "word": "Kindness",
    "urdu": "مہربانی",
    "definition": "Kindness — commonly used to express “مہربانی” in Urdu."
  },
  {
    "word": "Knowledge",
    "urdu": "علم",
    "definition": "Knowledge — commonly used to express “علم” in Urdu."
  },
  {
    "word": "Large",
    "urdu": "بڑا",
    "definition": "Large — commonly used to express “بڑا” in Urdu."
  },
  {
    "word": "Learn",
    "urdu": "سیکھنا",
    "definition": "Learn — commonly used to express “سیکھنا” in Urdu."
  },
  {
    "word": "Leave",
    "urdu": "چھوڑنا",
    "definition": "Leave — commonly used to express “چھوڑنا” in Urdu."
  },
  {
    "word": "Light",
    "urdu": "روشنی",
    "definition": "Light — commonly used to express “روشنی” in Urdu."
  },
  {
    "word": "Listen",
    "urdu": "سننا",
    "definition": "Listen — commonly used to express “سننا” in Urdu."
  },
  {
    "word": "Love",
    "urdu": "محبت",
    "definition": "Love — commonly used to express “محبت” in Urdu."
  },
  {
    "word": "Lucky",
    "urdu": "خوش قسمت",
    "definition": "Lucky — commonly used to express “خوش قسمت” in Urdu."
  },
  {
    "word": "Meaning",
    "urdu": "معنی",
    "definition": "Meaning — commonly used to express “معنی” in Urdu."
  },
  {
    "word": "Memory",
    "urdu": "یادداشت",
    "definition": "Memory — commonly used to express “یادداشت” in Urdu."
  },
  {
    "word": "Mistake",
    "urdu": "غلطی",
    "definition": "Mistake — commonly used to express “غلطی” in Urdu."
  },
  {
    "word": "Modern",
    "urdu": "جدید",
    "definition": "Modern — commonly used to express “جدید” in Urdu."
  },
  {
    "word": "Money",
    "urdu": "پیسہ",
    "definition": "Money — commonly used to express “پیسہ” in Urdu."
  },
  {
    "word": "Morning",
    "urdu": "صبح",
    "definition": "Morning — commonly used to express “صبح” in Urdu."
  },
  {
    "word": "Mother",
    "urdu": "والدہ",
    "definition": "Mother — commonly used to express “والدہ” in Urdu."
  },
  {
    "word": "Move",
    "urdu": "حرکت کرنا",
    "definition": "Move — commonly used to express “حرکت کرنا” in Urdu."
  },
  {
    "word": "Music",
    "urdu": "موسیقی",
    "definition": "Music — commonly used to express “موسیقی” in Urdu."
  },
  {
    "word": "Necessary",
    "urdu": "ضروری",
    "definition": "Necessary — commonly used to express “ضروری” in Urdu."
  },
  {
    "word": "Need",
    "urdu": "ضرورت",
    "definition": "Need — commonly used to express “ضرورت” in Urdu."
  },
  {
    "word": "Never",
    "urdu": "کبھی نہیں",
    "definition": "Never — commonly used to express “کبھی نہیں” in Urdu."
  },
  {
    "word": "New",
    "urdu": "نیا",
    "definition": "New — commonly used to express “نیا” in Urdu."
  },
  {
    "word": "Noise",
    "urdu": "شور",
    "definition": "Noise — commonly used to express “شور” in Urdu."
  },
  {
    "word": "Notice",
    "urdu": "نوٹس کرنا",
    "definition": "Notice — commonly used to express “نوٹس کرنا” in Urdu."
  },
  {
    "word": "Number",
    "urdu": "عدد",
    "definition": "Number — commonly used to express “عدد” in Urdu."
  },
  {
    "word": "Object",
    "urdu": "چیز",
    "definition": "Object — commonly used to express “چیز” in Urdu."
  },
  {
    "word": "Observe",
    "urdu": "مشاہدہ کرنا",
    "definition": "Observe — commonly used to express “مشاہدہ کرنا” in Urdu."
  },
  {
    "word": "Often",
    "urdu": "اکثر",
    "definition": "Often — commonly used to express “اکثر” in Urdu."
  },
  {
    "word": "Open",
    "urdu": "کھولنا",
    "definition": "Open — commonly used to express “کھولنا” in Urdu."
  },
  {
    "word": "Order",
    "urdu": "حکم",
    "definition": "Order — commonly used to express “حکم” in Urdu."
  },
  {
    "word": "Organize",
    "urdu": "منظم کرنا",
    "definition": "Organize — commonly used to express “منظم کرنا” in Urdu."
  },
  {
    "word": "Pain",
    "urdu": "درد",
    "definition": "Pain — commonly used to express “درد” in Urdu."
  },
  {
    "word": "Peace",
    "urdu": "امن",
    "definition": "Peace — commonly used to express “امن” in Urdu."
  },
  {
    "word": "Patience",
    "urdu": "صبر",
    "definition": "Patience — commonly used to express “صبر” in Urdu."
  },
  {
    "word": "People",
    "urdu": "لوگ",
    "definition": "People — commonly used to express “لوگ” in Urdu."
  },
  {
    "word": "Perfect",
    "urdu": "کامل",
    "definition": "Perfect — commonly used to express “کامل” in Urdu."
  },
  {
    "word": "Plan",
    "urdu": "منصوبہ",
    "definition": "Plan — commonly used to express “منصوبہ” in Urdu."
  },
  {
    "word": "Plant",
    "urdu": "پودا",
    "definition": "Plant — commonly used to express “پودا” in Urdu."
  },
  {
    "word": "Pleasure",
    "urdu": "خوشی",
    "definition": "Pleasure — commonly used to express “خوشی” in Urdu."
  },
  {
    "word": "Polite",
    "urdu": "مہذب",
    "definition": "Polite — commonly used to express “مہذب” in Urdu."
  },
  {
    "word": "Positive",
    "urdu": "مثبت",
    "definition": "Positive — commonly used to express “مثبت” in Urdu."
  },
  {
    "word": "Possible",
    "urdu": "ممکن",
    "definition": "Possible — commonly used to express “ممکن” in Urdu."
  },
  {
    "word": "Practice",
    "urdu": "مشق",
    "definition": "Practice — commonly used to express “مشق” in Urdu."
  },
  {
    "word": "Prepare",
    "urdu": "تیار کرنا",
    "definition": "Prepare — commonly used to express “تیار کرنا” in Urdu."
  },
  {
    "word": "Present",
    "urdu": "موجود",
    "definition": "Present — commonly used to express “موجود” in Urdu."
  },
  {
    "word": "Problem",
    "urdu": "مسئلہ",
    "definition": "Problem — commonly used to express “مسئلہ” in Urdu."
  },
  {
    "word": "Promise",
    "urdu": "وعدہ",
    "definition": "Promise — commonly used to express “وعدہ” in Urdu."
  },
  {
    "word": "Proud",
    "urdu": "فخر کرنے والا",
    "definition": "Proud — commonly used to express “فخر کرنے والا” in Urdu."
  },
  {
    "word": "Purpose",
    "urdu": "مقصد",
    "definition": "Purpose — commonly used to express “مقصد” in Urdu."
  },
  {
    "word": "Quiet",
    "urdu": "خاموش",
    "definition": "Quiet — commonly used to express “خاموش” in Urdu."
  },
  {
    "word": "Question",
    "urdu": "سوال",
    "definition": "Question — commonly used to express “سوال” in Urdu."
  },
  {
    "word": "Reach",
    "urdu": "پہنچنا",
    "definition": "Reach — commonly used to express “پہنچنا” in Urdu."
  },
  {
    "word": "Read",
    "urdu": "پڑھنا",
    "definition": "Read — commonly used to express “پڑھنا” in Urdu."
  },
  {
    "word": "Real",
    "urdu": "حقیقی",
    "definition": "Real — commonly used to express “حقیقی” in Urdu."
  },
  {
    "word": "Receive",
    "urdu": "وصول کرنا",
    "definition": "Receive — commonly used to express “وصول کرنا” in Urdu."
  },
  {
    "word": "Respect",
    "urdu": "عزت",
    "definition": "Respect — commonly used to express “عزت” in Urdu."
  },
  {
    "word": "Rest",
    "urdu": "آرام",
    "definition": "Rest — commonly used to express “آرام” in Urdu."
  },
  {
    "word": "Result",
    "urdu": "نتیجہ",
    "definition": "Result — commonly used to express “نتیجہ” in Urdu."
  },
  {
    "word": "Right",
    "urdu": "درست",
    "definition": "Right — commonly used to express “درست” in Urdu."
  },
  {
    "word": "River",
    "urdu": "دریا",
    "definition": "River — commonly used to express “دریا” in Urdu."
  },
  {
    "word": "Safe",
    "urdu": "محفوظ",
    "definition": "Safe — commonly used to express “محفوظ” in Urdu."
  },
  {
    "word": "Save",
    "urdu": "بچانا",
    "definition": "Save — commonly used to express “بچانا” in Urdu."
  },
  {
    "word": "Science",
    "urdu": "سائنس",
    "definition": "Science — commonly used to express “سائنس” in Urdu."
  },
  {
    "word": "Season",
    "urdu": "موسم",
    "definition": "Season — commonly used to express “موسم” in Urdu."
  },
  {
    "word": "Secret",
    "urdu": "راز",
    "definition": "Secret — commonly used to express “راز” in Urdu."
  },
  {
    "word": "Self",
    "urdu": "خود",
    "definition": "Self — commonly used to express “خود” in Urdu."
  },
  {
    "word": "Sense",
    "urdu": "احساس",
    "definition": "Sense — commonly used to express “احساس” in Urdu."
  },
  {
    "word": "Shine",
    "urdu": "چمکنا",
    "definition": "Shine — commonly used to express “چمکنا” in Urdu."
  },
  {
    "word": "Short",
    "urdu": "مختصر",
    "definition": "Short — commonly used to express “مختصر” in Urdu."
  },
  {
    "word": "Sister",
    "urdu": "بہن",
    "definition": "Sister — commonly used to express “بہن” in Urdu."
  },
  {
    "word": "Skill",
    "urdu": "مہارت",
    "definition": "Skill — commonly used to express “مہارت” in Urdu."
  },
  {
    "word": "Soft",
    "urdu": "نرم",
    "definition": "Soft — commonly used to express “نرم” in Urdu."
  },
  {
    "word": "Solution",
    "urdu": "حل",
    "definition": "Solution — commonly used to express “حل” in Urdu."
  },
  {
    "word": "Soul",
    "urdu": "روح",
    "definition": "Soul — commonly used to express “روح” in Urdu."
  },
  {
    "word": "Special",
    "urdu": "خاص",
    "definition": "Special — commonly used to express “خاص” in Urdu."
  },
  {
    "word": "Spirit",
    "urdu": "جذبہ",
    "definition": "Spirit — commonly used to express “جذبہ” in Urdu."
  },
  {
    "word": "Study",
    "urdu": "مطالعہ",
    "definition": "Study — commonly used to express “مطالعہ” in Urdu."
  },
  {
    "word": "Success",
    "urdu": "کامیابی",
    "definition": "Success — commonly used to express “کامیابی” in Urdu."
  },
  {
    "word": "Sure",
    "urdu": "یقینی",
    "definition": "Sure — commonly used to express “یقینی” in Urdu."
  },
  {
    "word": "Surprise",
    "urdu": "حیرت",
    "definition": "Surprise — commonly used to express “حیرت” in Urdu."
  },
  {
    "word": "Teach",
    "urdu": "پڑھانا",
    "definition": "Teach — commonly used to express “پڑھانا” in Urdu."
  },
  {
    "word": "Team",
    "urdu": "ٹیم",
    "definition": "Team — commonly used to express “ٹیم” in Urdu."
  },
  {
    "word": "Think",
    "urdu": "سوچنا",
    "definition": "Think — commonly used to express “سوچنا” in Urdu."
  },
  {
    "word": "Time",
    "urdu": "وقت",
    "definition": "Time — commonly used to express “وقت” in Urdu."
  },
  {
    "word": "Together",
    "urdu": "اکٹھے",
    "definition": "Together — commonly used to express “اکٹھے” in Urdu."
  },
  {
    "word": "Trust",
    "urdu": "بھروسہ",
    "definition": "Trust — commonly used to express “بھروسہ” in Urdu."
  },
  {
    "word": "Truth",
    "urdu": "سچ",
    "definition": "Truth — commonly used to express “سچ” in Urdu."
  },
  {
    "word": "Unique",
    "urdu": "منفرد",
    "definition": "Unique — commonly used to express “منفرد” in Urdu."
  },
  {
    "word": "Useful",
    "urdu": "مفید",
    "definition": "Useful — commonly used to express “مفید” in Urdu."
  },
  {
    "word": "Victory",
    "urdu": "فتح",
    "definition": "Victory — commonly used to express “فتح” in Urdu."
  },
  {
    "word": "Village",
    "urdu": "گاؤں",
    "definition": "Village — commonly used to express “گاؤں” in Urdu."
  },
  {
    "word": "Voice",
    "urdu": "آواز",
    "definition": "Voice — commonly used to express “آواز” in Urdu."
  },
  {
    "word": "Wait",
    "urdu": "انتظار کرنا",
    "definition": "Wait — commonly used to express “انتظار کرنا” in Urdu."
  },
  {
    "word": "Warm",
    "urdu": "گرم",
    "definition": "Warm — commonly used to express “گرم” in Urdu."
  },
  {
    "word": "Welcome",
    "urdu": "خوش آمدید",
    "definition": "Welcome — commonly used to express “خوش آمدید” in Urdu."
  },
  {
    "word": "Whole",
    "urdu": "پورا",
    "definition": "Whole — commonly used to express “پورا” in Urdu."
  },
  {
    "word": "Wisdom",
    "urdu": "دانائی",
    "definition": "Wisdom — commonly used to express “دانائی” in Urdu."
  },
  {
    "word": "Wish",
    "urdu": "خواہش",
    "definition": "Wish — commonly used to express “خواہش” in Urdu."
  },
  {
    "word": "Work",
    "urdu": "کام",
    "definition": "Work — commonly used to express “کام” in Urdu."
  },
  {
    "word": "World",
    "urdu": "دنیا",
    "definition": "World — commonly used to express “دنیا” in Urdu."
  },
  {
    "word": "Year",
    "urdu": "سال",
    "definition": "Year — commonly used to express “سال” in Urdu."
  },
  {
    "word": "Young",
    "urdu": "جوان",
    "definition": "Young — commonly used to express “جوان” in Urdu."
  },
  {
    "word": "Zeal",
    "urdu": "جوش",
    "definition": "Zeal — commonly used to express “جوش” in Urdu."
  },
  {
    "word": "About",
    "urdu": "کے بارے میں",
    "definition": "About — اردو معنی: کے بارے میں"
  },
  {
    "word": "Above",
    "urdu": "اوپر",
    "definition": "Above — اردو معنی: اوپر"
  },
  {
    "word": "Across",
    "urdu": "آر پار",
    "definition": "Across — اردو معنی: آر پار"
  },
  {
    "word": "Actually",
    "urdu": "دراصل",
    "definition": "Actually — اردو معنی: دراصل"
  },
  {
    "word": "Add",
    "urdu": "شامل کرنا",
    "definition": "Add — اردو معنی: شامل کرنا"
  },
  {
    "word": "Address",
    "urdu": "پتہ",
    "definition": "Address — اردو معنی: پتہ"
  },
  {
    "word": "Adult",
    "urdu": "بالغ",
    "definition": "Adult — اردو معنی: بالغ"
  },
  {
    "word": "Advice",
    "urdu": "مشورہ",
    "definition": "Advice — اردو معنی: مشورہ"
  },
  {
    "word": "Affair",
    "urdu": "معاملہ",
    "definition": "Affair — اردو معنی: معاملہ"
  },
  {
    "word": "Afternoon",
    "urdu": "دوپہر",
    "definition": "Afternoon — اردو معنی: دوپہر"
  },
  {
    "word": "Again",
    "urdu": "دوبارہ",
    "definition": "Again — اردو معنی: دوبارہ"
  },
  {
    "word": "Against",
    "urdu": "خلاف",
    "definition": "Against — اردو معنی: خلاف"
  },
  {
    "word": "Age",
    "urdu": "عمر",
    "definition": "Age — اردو معنی: عمر"
  },
  {
    "word": "Ago",
    "urdu": "پہلے",
    "definition": "Ago — اردو معنی: پہلے"
  },
  {
    "word": "Ahead",
    "urdu": "آگے",
    "definition": "Ahead — اردو معنی: آگے"
  },
  {
    "word": "Alarm",
    "urdu": "خطرے کی گھنٹی",
    "definition": "Alarm — اردو معنی: خطرے کی گھنٹی"
  },
  {
    "word": "Allow",
    "urdu": "اجازت دینا",
    "definition": "Allow — اردو معنی: اجازت دینا"
  },
  {
    "word": "Alone",
    "urdu": "اکیلا",
    "definition": "Alone — اردو معنی: اکیلا"
  },
  {
    "word": "Along",
    "urdu": "ساتھ",
    "definition": "Along — اردو معنی: ساتھ"
  },
  {
    "word": "Already",
    "urdu": "پہلے ہی",
    "definition": "Already — اردو معنی: پہلے ہی"
  },
  {
    "word": "Although",
    "urdu": "اگرچہ",
    "definition": "Although — اردو معنی: اگرچہ"
  },
  {
    "word": "Always",
    "urdu": "ہمیشہ",
    "definition": "Always — اردو معنی: ہمیشہ"
  },
  {
    "word": "Among",
    "urdu": "کے درمیان",
    "definition": "Among — اردو معنی: کے درمیان"
  },
  {
    "word": "Amount",
    "urdu": "مقدار",
    "definition": "Amount — اردو معنی: مقدار"
  },
  {
    "word": "Animal",
    "urdu": "جانور",
    "definition": "Animal — اردو معنی: جانور"
  },
  {
    "word": "Another",
    "urdu": "ایک اور",
    "definition": "Another — اردو معنی: ایک اور"
  },
  {
    "word": "Any",
    "urdu": "کوئی",
    "definition": "Any — اردو معنی: کوئی"
  },
  {
    "word": "Anybody",
    "urdu": "کوئی بھی",
    "definition": "Anybody — اردو معنی: کوئی بھی"
  },
  {
    "word": "Anymore",
    "urdu": "اب مزید",
    "definition": "Anymore — اردو معنی: اب مزید"
  },
  {
    "word": "Anyone",
    "urdu": "کوئی شخص",
    "definition": "Anyone — اردو معنی: کوئی شخص"
  },
  {
    "word": "Anything",
    "urdu": "کچھ بھی",
    "definition": "Anything — اردو معنی: کچھ بھی"
  },
  {
    "word": "Anyway",
    "urdu": "بہرحال",
    "definition": "Anyway — اردو معنی: بہرحال"
  },
  {
    "word": "Anywhere",
    "urdu": "کہیں بھی",
    "definition": "Anywhere — اردو معنی: کہیں بھی"
  },
  {
    "word": "Apartment",
    "urdu": "فلیٹ",
    "definition": "Apartment — اردو معنی: فلیٹ"
  },
  {
    "word": "Appear",
    "urdu": "ظاہر ہونا",
    "definition": "Appear — اردو معنی: ظاہر ہونا"
  },
  {
    "word": "Apple",
    "urdu": "سیب",
    "definition": "Apple — اردو معنی: سیب"
  },
  {
    "word": "Apply",
    "urdu": "درخواست دینا",
    "definition": "Apply — اردو معنی: درخواست دینا"
  },
  {
    "word": "Appointment",
    "urdu": "ملاقات کا وقت",
    "definition": "Appointment — اردو معنی: ملاقات کا وقت"
  },
  {
    "word": "Arm",
    "urdu": "بازو",
    "definition": "Arm — اردو معنی: بازو"
  },
  {
    "word": "Around",
    "urdu": "آس پاس",
    "definition": "Around — اردو معنی: آس پاس"
  },
  {
    "word": "Arrange",
    "urdu": "ترتیب دینا",
    "definition": "Arrange — اردو معنی: ترتیب دینا"
  },
  {
    "word": "Article",
    "urdu": "مضمون",
    "definition": "Article — اردو معنی: مضمون"
  },
  {
    "word": "As",
    "urdu": "جیسے",
    "definition": "As — اردو معنی: جیسے"
  },
  {
    "word": "Asleep",
    "urdu": "سویا ہوا",
    "definition": "Asleep — اردو معنی: سویا ہوا"
  },
  {
    "word": "At",
    "urdu": "پر",
    "definition": "At — اردو معنی: پر"
  },
  {
    "word": "Attack",
    "urdu": "حملہ",
    "definition": "Attack — اردو معنی: حملہ"
  },
  {
    "word": "Avoid",
    "urdu": "بچنا",
    "definition": "Avoid — اردو معنی: بچنا"
  },
  {
    "word": "Baby",
    "urdu": "بچہ",
    "definition": "Baby — اردو معنی: بچہ"
  },
  {
    "word": "Badly",
    "urdu": "بری طرح",
    "definition": "Badly — اردو معنی: بری طرح"
  },
  {
    "word": "Bag",
    "urdu": "بیگ",
    "definition": "Bag — اردو معنی: بیگ"
  },
  {
    "word": "Bakery",
    "urdu": "بیکری",
    "definition": "Bakery — اردو معنی: بیکری"
  },
  {
    "word": "Balance",
    "urdu": "توازن",
    "definition": "Balance — اردو معنی: توازن"
  },
  {
    "word": "Ball",
    "urdu": "گیند",
    "definition": "Ball — اردو معنی: گیند"
  },
  {
    "word": "Banana",
    "urdu": "کیلا",
    "definition": "Banana — اردو معنی: کیلا"
  },
  {
    "word": "Bank",
    "urdu": "بینک",
    "definition": "Bank — اردو معنی: بینک"
  },
  {
    "word": "Barber",
    "urdu": "حجام",
    "definition": "Barber — اردو معنی: حجام"
  },
  {
    "word": "Basic",
    "urdu": "بنیادی",
    "definition": "Basic — اردو معنی: بنیادی"
  },
  {
    "word": "Bath",
    "urdu": "غسل",
    "definition": "Bath — اردو معنی: غسل"
  },
  {
    "word": "Bathroom",
    "urdu": "غسل خانہ",
    "definition": "Bathroom — اردو معنی: غسل خانہ"
  },
  {
    "word": "Battery",
    "urdu": "بیٹری",
    "definition": "Battery — اردو معنی: بیٹری"
  },
  {
    "word": "Beach",
    "urdu": "ساحل",
    "definition": "Beach — اردو معنی: ساحل"
  },
  {
    "word": "Bean",
    "urdu": "پھلی",
    "definition": "Bean — اردو معنی: پھلی"
  },
  {
    "word": "Bear",
    "urdu": "برداشت کرنا",
    "definition": "Bear — اردو معنی: برداشت کرنا"
  },
  {
    "word": "Beat",
    "urdu": "مارنا",
    "definition": "Beat — اردو معنی: مارنا"
  },
  {
    "word": "Beauty",
    "urdu": "خوبصورتی",
    "definition": "Beauty — اردو معنی: خوبصورتی"
  },
  {
    "word": "Become",
    "urdu": "بننا",
    "definition": "Become — اردو معنی: بننا"
  },
  {
    "word": "Bedroom",
    "urdu": "سونے کا کمرہ",
    "definition": "Bedroom — اردو معنی: سونے کا کمرہ"
  },
  {
    "word": "Beef",
    "urdu": "گائے کا گوشت",
    "definition": "Beef — اردو معنی: گائے کا گوشت"
  },
  {
    "word": "Before",
    "urdu": "سے پہلے",
    "definition": "Before — اردو معنی: سے پہلے"
  },
  {
    "word": "Beginning",
    "urdu": "آغاز",
    "definition": "Beginning — اردو معنی: آغاز"
  },
  {
    "word": "Behavior",
    "urdu": "رویہ",
    "definition": "Behavior — اردو معنی: رویہ"
  },
  {
    "word": "Believe",
    "urdu": "یقین کرنا",
    "definition": "Believe — اردو معنی: یقین کرنا"
  },
  {
    "word": "Belong",
    "urdu": "تعلق رکھنا",
    "definition": "Belong — اردو معنی: تعلق رکھنا"
  },
  {
    "word": "Below",
    "urdu": "نیچے",
    "definition": "Below — اردو معنی: نیچے"
  },
  {
    "word": "Belt",
    "urdu": "بیلٹ",
    "definition": "Belt — اردو معنی: بیلٹ"
  },
  {
    "word": "Benefit",
    "urdu": "فائدہ",
    "definition": "Benefit — اردو معنی: فائدہ"
  },
  {
    "word": "Beside",
    "urdu": "کے پاس",
    "definition": "Beside — اردو معنی: کے پاس"
  },
  {
    "word": "Between",
    "urdu": "کے درمیان",
    "definition": "Between — اردو معنی: کے درمیان"
  },
  {
    "word": "Bicycle",
    "urdu": "سائیکل",
    "definition": "Bicycle — اردو معنی: سائیکل"
  },
  {
    "word": "Bill",
    "urdu": "بل",
    "definition": "Bill — اردو معنی: بل"
  },
  {
    "word": "Birthday",
    "urdu": "سالگرہ",
    "definition": "Birthday — اردو معنی: سالگرہ"
  },
  {
    "word": "Biscuit",
    "urdu": "بسکٹ",
    "definition": "Biscuit — اردو معنی: بسکٹ"
  },
  {
    "word": "Bite",
    "urdu": "کاٹنا",
    "definition": "Bite — اردو معنی: کاٹنا"
  },
  {
    "word": "Blanket",
    "urdu": "کمبل",
    "definition": "Blanket — اردو معنی: کمبل"
  },
  {
    "word": "Block",
    "urdu": "بلاک",
    "definition": "Block — اردو معنی: بلاک"
  },
  {
    "word": "Blouse",
    "urdu": "بلاؤز",
    "definition": "Blouse — اردو معنی: بلاؤز"
  },
  {
    "word": "Board",
    "urdu": "تختہ",
    "definition": "Board — اردو معنی: تختہ"
  },
  {
    "word": "Boil",
    "urdu": "ابالنا",
    "definition": "Boil — اردو معنی: ابالنا"
  },
  {
    "word": "Bone",
    "urdu": "ہڈی",
    "definition": "Bone — اردو معنی: ہڈی"
  },
  {
    "word": "Book",
    "urdu": "کتاب",
    "definition": "Book — اردو معنی: کتاب"
  },
  {
    "word": "Borrow",
    "urdu": "ادھار لینا",
    "definition": "Borrow — اردو معنی: ادھار لینا"
  },
  {
    "word": "Bottle",
    "urdu": "بوتل",
    "definition": "Bottle — اردو معنی: بوتل"
  },
  {
    "word": "Bottom",
    "urdu": "نچلا حصہ",
    "definition": "Bottom — اردو معنی: نچلا حصہ"
  },
  {
    "word": "Box",
    "urdu": "ڈبہ",
    "definition": "Box — اردو معنی: ڈبہ"
  },
  {
    "word": "Boy",
    "urdu": "لڑکا",
    "definition": "Boy — اردو معنی: لڑکا"
  },
  {
    "word": "Brain",
    "urdu": "دماغ",
    "definition": "Brain — اردو معنی: دماغ"
  },
  {
    "word": "Branch",
    "urdu": "شاخ",
    "definition": "Branch — اردو معنی: شاخ"
  },
  {
    "word": "Breakfast",
    "urdu": "ناشتہ",
    "definition": "Breakfast — اردو معنی: ناشتہ"
  },
  {
    "word": "Bridge",
    "urdu": "پل",
    "definition": "Bridge — اردو معنی: پل"
  },
  {
    "word": "Bring",
    "urdu": "لانا",
    "definition": "Bring — اردو معنی: لانا"
  },
  {
    "word": "Broad",
    "urdu": "چوڑا",
    "definition": "Broad — اردو معنی: چوڑا"
  },
  {
    "word": "Brush",
    "urdu": "برش کرنا",
    "definition": "Brush — اردو معنی: برش کرنا"
  },
  {
    "word": "Bucket",
    "urdu": "بالٹی",
    "definition": "Bucket — اردو معنی: بالٹی"
  },
  {
    "word": "Build",
    "urdu": "تعمیر کرنا",
    "definition": "Build — اردو معنی: تعمیر کرنا"
  },
  {
    "word": "Building",
    "urdu": "عمارت",
    "definition": "Building — اردو معنی: عمارت"
  },
  {
    "word": "Burn",
    "urdu": "جلانا",
    "definition": "Burn — اردو معنی: جلانا"
  },
  {
    "word": "Bus",
    "urdu": "بس",
    "definition": "Bus — اردو معنی: بس"
  },
  {
    "word": "Button",
    "urdu": "بٹن",
    "definition": "Button — اردو معنی: بٹن"
  },
  {
    "word": "Buy",
    "urdu": "خریدنا",
    "definition": "Buy — اردو معنی: خریدنا"
  },
  {
    "word": "Cake",
    "urdu": "کیک",
    "definition": "Cake — اردو معنی: کیک"
  },
  {
    "word": "Calendar",
    "urdu": "کیلنڈر",
    "definition": "Calendar — اردو معنی: کیلنڈر"
  },
  {
    "word": "Call",
    "urdu": "بلانا",
    "definition": "Call — اردو معنی: بلانا"
  },
  {
    "word": "Camera",
    "urdu": "کیمرہ",
    "definition": "Camera — اردو معنی: کیمرہ"
  },
  {
    "word": "Camp",
    "urdu": "کیمپ",
    "definition": "Camp — اردو معنی: کیمپ"
  },
  {
    "word": "Can",
    "urdu": "سکنا",
    "definition": "Can — اردو معنی: سکنا"
  },
  {
    "word": "Cancel",
    "urdu": "منسوخ کرنا",
    "definition": "Cancel — اردو معنی: منسوخ کرنا"
  },
  {
    "word": "Candle",
    "urdu": "موم بتی",
    "definition": "Candle — اردو معنی: موم بتی"
  },
  {
    "word": "Candy",
    "urdu": "ٹافی",
    "definition": "Candy — اردو معنی: ٹافی"
  },
  {
    "word": "Cap",
    "urdu": "ٹوپی",
    "definition": "Cap — اردو معنی: ٹوپی"
  },
  {
    "word": "Capital",
    "urdu": "دارالحکومت",
    "definition": "Capital — اردو معنی: دارالحکومت"
  },
  {
    "word": "Car",
    "urdu": "گاڑی",
    "definition": "Car — اردو معنی: گاڑی"
  },
  {
    "word": "Card",
    "urdu": "کارڈ",
    "definition": "Card — اردو معنی: کارڈ"
  },
  {
    "word": "Career",
    "urdu": "پیشہ",
    "definition": "Career — اردو معنی: پیشہ"
  },
  {
    "word": "Carefully",
    "urdu": "احتیاط سے",
    "definition": "Carefully — اردو معنی: احتیاط سے"
  },
  {
    "word": "Carpet",
    "urdu": "قالین",
    "definition": "Carpet — اردو معنی: قالین"
  },
  {
    "word": "Carry",
    "urdu": "لے جانا",
    "definition": "Carry — اردو معنی: لے جانا"
  },
  {
    "word": "Case",
    "urdu": "معاملہ",
    "definition": "Case — اردو معنی: معاملہ"
  },
  {
    "word": "Cash",
    "urdu": "نقد رقم",
    "definition": "Cash — اردو معنی: نقد رقم"
  },
  {
    "word": "Cat",
    "urdu": "بلی",
    "definition": "Cat — اردو معنی: بلی"
  },
  {
    "word": "Catch",
    "urdu": "پکڑنا",
    "definition": "Catch — اردو معنی: پکڑنا"
  },
  {
    "word": "Celebrate",
    "urdu": "جشن منانا",
    "definition": "Celebrate — اردو معنی: جشن منانا"
  },
  {
    "word": "Cell",
    "urdu": "خلیہ",
    "definition": "Cell — اردو معنی: خلیہ"
  },
  {
    "word": "Center",
    "urdu": "مرکز",
    "definition": "Center — اردو معنی: مرکز"
  },
  {
    "word": "Century",
    "urdu": "صدی",
    "definition": "Century — اردو معنی: صدی"
  },
  {
    "word": "Certain",
    "urdu": "یقینی",
    "definition": "Certain — اردو معنی: یقینی"
  },
  {
    "word": "Chair",
    "urdu": "کرسی",
    "definition": "Chair — اردو معنی: کرسی"
  },
  {
    "word": "Chance",
    "urdu": "موقع",
    "definition": "Chance — اردو معنی: موقع"
  },
  {
    "word": "Charge",
    "urdu": "قیمت وصول کرنا",
    "definition": "Charge — اردو معنی: قیمت وصول کرنا"
  },
  {
    "word": "Check",
    "urdu": "جانچنا",
    "definition": "Check — اردو معنی: جانچنا"
  },
  {
    "word": "Cheese",
    "urdu": "پنیر",
    "definition": "Cheese — اردو معنی: پنیر"
  },
  {
    "word": "Chicken",
    "urdu": "مرغی",
    "definition": "Chicken — اردو معنی: مرغی"
  },
  {
    "word": "Childhood",
    "urdu": "بچپن",
    "definition": "Childhood — اردو معنی: بچپن"
  },
  {
    "word": "Choice",
    "urdu": "انتخاب",
    "definition": "Choice — اردو معنی: انتخاب"
  },
  {
    "word": "Church",
    "urdu": "گرجا گھر",
    "definition": "Church — اردو معنی: گرجا گھر"
  },
  {
    "word": "Circle",
    "urdu": "دائرہ",
    "definition": "Circle — اردو معنی: دائرہ"
  },
  {
    "word": "Class",
    "urdu": "جماعت",
    "definition": "Class — اردو معنی: جماعت"
  },
  {
    "word": "Classroom",
    "urdu": "کلاس روم",
    "definition": "Classroom — اردو معنی: کلاس روم"
  },
  {
    "word": "Clean",
    "urdu": "صاف",
    "definition": "Clean — اردو معنی: صاف"
  },
  {
    "word": "Cleaner",
    "urdu": "صفائی کرنے والا",
    "definition": "Cleaner — اردو معنی: صفائی کرنے والا"
  },
  {
    "word": "Clearly",
    "urdu": "واضح طور پر",
    "definition": "Clearly — اردو معنی: واضح طور پر"
  },
  {
    "word": "Clerk",
    "urdu": "کلرک",
    "definition": "Clerk — اردو معنی: کلرک"
  },
  {
    "word": "Climate",
    "urdu": "آب و ہوا",
    "definition": "Climate — اردو معنی: آب و ہوا"
  },
  {
    "word": "Climb",
    "urdu": "چڑھنا",
    "definition": "Climb — اردو معنی: چڑھنا"
  },
  {
    "word": "Clock",
    "urdu": "گھڑی",
    "definition": "Clock — اردو معنی: گھڑی"
  },
  {
    "word": "Close",
    "urdu": "بند کرنا",
    "definition": "Close — اردو معنی: بند کرنا"
  },
  {
    "word": "Clothes",
    "urdu": "کپڑے",
    "definition": "Clothes — اردو معنی: کپڑے"
  },
  {
    "word": "Club",
    "urdu": "کلب",
    "definition": "Club — اردو معنی: کلب"
  },
  {
    "word": "Coach",
    "urdu": "تربیت دینے والا",
    "definition": "Coach — اردو معنی: تربیت دینے والا"
  },
  {
    "word": "Coat",
    "urdu": "کوٹ",
    "definition": "Coat — اردو معنی: کوٹ"
  },
  {
    "word": "Coffee",
    "urdu": "کافی",
    "definition": "Coffee — اردو معنی: کافی"
  },
  {
    "word": "Coin",
    "urdu": "سکہ",
    "definition": "Coin — اردو معنی: سکہ"
  },
  {
    "word": "Cold",
    "urdu": "سردی",
    "definition": "Cold — اردو معنی: سردی"
  },
  {
    "word": "Coldly",
    "urdu": "سرد مہری سے",
    "definition": "Coldly — اردو معنی: سرد مہری سے"
  },
  {
    "word": "College",
    "urdu": "کالج",
    "definition": "College — اردو معنی: کالج"
  },
  {
    "word": "Color",
    "urdu": "رنگ",
    "definition": "Color — اردو معنی: رنگ"
  },
  {
    "word": "Comb",
    "urdu": "کنگھی",
    "definition": "Comb — اردو معنی: کنگھی"
  },
  {
    "word": "Come",
    "urdu": "آنا",
    "definition": "Come — اردو معنی: آنا"
  },
  {
    "word": "Comfortable",
    "urdu": "آرام دہ",
    "definition": "Comfortable — اردو معنی: آرام دہ"
  },
  {
    "word": "Company",
    "urdu": "کمپنی",
    "definition": "Company — اردو معنی: کمپنی"
  },
  {
    "word": "Compare",
    "urdu": "موازنہ کرنا",
    "definition": "Compare — اردو معنی: موازنہ کرنا"
  },
  {
    "word": "Complain",
    "urdu": "شکایت کرنا",
    "definition": "Complain — اردو معنی: شکایت کرنا"
  },
  {
    "word": "Completely",
    "urdu": "مکمل طور پر",
    "definition": "Completely — اردو معنی: مکمل طور پر"
  },
  {
    "word": "Computer",
    "urdu": "کمپیوٹر",
    "definition": "Computer — اردو معنی: کمپیوٹر"
  },
  {
    "word": "Condition",
    "urdu": "حالت",
    "definition": "Condition — اردو معنی: حالت"
  },
  {
    "word": "Confirm",
    "urdu": "تصدیق کرنا",
    "definition": "Confirm — اردو معنی: تصدیق کرنا"
  },
  {
    "word": "Confuse",
    "urdu": "الجھانا",
    "definition": "Confuse — اردو معنی: الجھانا"
  },
  {
    "word": "Connect",
    "urdu": "جوڑنا",
    "definition": "Connect — اردو معنی: جوڑنا"
  },
  {
    "word": "Consider",
    "urdu": "غور کرنا",
    "definition": "Consider — اردو معنی: غور کرنا"
  },
  {
    "word": "Conversation",
    "urdu": "گفتگو",
    "definition": "Conversation — اردو معنی: گفتگو"
  },
  {
    "word": "Cook",
    "urdu": "کھانا پکانا",
    "definition": "Cook — اردو معنی: کھانا پکانا"
  },
  {
    "word": "Cooker",
    "urdu": "چولہا",
    "definition": "Cooker — اردو معنی: چولہا"
  },
  {
    "word": "Cooking",
    "urdu": "کھانا پکانا",
    "definition": "Cooking — اردو معنی: کھانا پکانا"
  },
  {
    "word": "Copy",
    "urdu": "نقل",
    "definition": "Copy — اردو معنی: نقل"
  },
  {
    "word": "Corner",
    "urdu": "کونا",
    "definition": "Corner — اردو معنی: کونا"
  },
  {
    "word": "Correct",
    "urdu": "درست",
    "definition": "Correct — اردو معنی: درست"
  },
  {
    "word": "Correctly",
    "urdu": "درست طریقے سے",
    "definition": "Correctly — اردو معنی: درست طریقے سے"
  },
  {
    "word": "Cost",
    "urdu": "قیمت",
    "definition": "Cost — اردو معنی: قیمت"
  },
  {
    "word": "Cotton",
    "urdu": "کپاس",
    "definition": "Cotton — اردو معنی: کپاس"
  },
  {
    "word": "Cough",
    "urdu": "کھانسی",
    "definition": "Cough — اردو معنی: کھانسی"
  },
  {
    "word": "Count",
    "urdu": "گننا",
    "definition": "Count — اردو معنی: گننا"
  },
  {
    "word": "Country",
    "urdu": "ملک",
    "definition": "Country — اردو معنی: ملک"
  },
  {
    "word": "Couple",
    "urdu": "جوڑا",
    "definition": "Couple — اردو معنی: جوڑا"
  },
  {
    "word": "Course",
    "urdu": "کورس",
    "definition": "Course — اردو معنی: کورس"
  },
  {
    "word": "Cover",
    "urdu": "ڈھانپنا",
    "definition": "Cover — اردو معنی: ڈھانپنا"
  },
  {
    "word": "Crazy",
    "urdu": "پاگل",
    "definition": "Crazy — اردو معنی: پاگل"
  },
  {
    "word": "Cream",
    "urdu": "کریم",
    "definition": "Cream — اردو معنی: کریم"
  },
  {
    "word": "Credit",
    "urdu": "ادھار",
    "definition": "Credit — اردو معنی: ادھار"
  },
  {
    "word": "Crime",
    "urdu": "جرم",
    "definition": "Crime — اردو معنی: جرم"
  },
  {
    "word": "Cross",
    "urdu": "پار کرنا",
    "definition": "Cross — اردو معنی: پار کرنا"
  },
  {
    "word": "Crowd",
    "urdu": "بھیڑ",
    "definition": "Crowd — اردو معنی: بھیڑ"
  },
  {
    "word": "Cry",
    "urdu": "رونا",
    "definition": "Cry — اردو معنی: رونا"
  },
  {
    "word": "Cup",
    "urdu": "پیالی",
    "definition": "Cup — اردو معنی: پیالی"
  },
  {
    "word": "Customer",
    "urdu": "گاہک",
    "definition": "Customer — اردو معنی: گاہک"
  },
  {
    "word": "Cut",
    "urdu": "کاٹنا",
    "definition": "Cut — اردو معنی: کاٹنا"
  },
  {
    "word": "Damage",
    "urdu": "نقصان",
    "definition": "Damage — اردو معنی: نقصان"
  },
  {
    "word": "Dance",
    "urdu": "رقص",
    "definition": "Dance — اردو معنی: رقص"
  },
  {
    "word": "Danger",
    "urdu": "خطرہ",
    "definition": "Danger — اردو معنی: خطرہ"
  },
  {
    "word": "Dangerous",
    "urdu": "خطرناک",
    "definition": "Dangerous — اردو معنی: خطرناک"
  },
  {
    "word": "Darkness",
    "urdu": "اندھیرا",
    "definition": "Darkness — اردو معنی: اندھیرا"
  },
  {
    "word": "Data",
    "urdu": "معلومات",
    "definition": "Data — اردو معنی: معلومات"
  },
  {
    "word": "Date",
    "urdu": "تاریخ",
    "definition": "Date — اردو معنی: تاریخ"
  },
  {
    "word": "Daytime",
    "urdu": "دن کا وقت",
    "definition": "Daytime — اردو معنی: دن کا وقت"
  },
  {
    "word": "Dead",
    "urdu": "مردہ",
    "definition": "Dead — اردو معنی: مردہ"
  },
  {
    "word": "Deal",
    "urdu": "معاملہ",
    "definition": "Deal — اردو معنی: معاملہ"
  },
  {
    "word": "Death",
    "urdu": "موت",
    "definition": "Death — اردو معنی: موت"
  },
  {
    "word": "Deep",
    "urdu": "گہرا",
    "definition": "Deep — اردو معنی: گہرا"
  },
  {
    "word": "Deeply",
    "urdu": "گہرائی سے",
    "definition": "Deeply — اردو معنی: گہرائی سے"
  },
  {
    "word": "Degree",
    "urdu": "ڈگری",
    "definition": "Degree — اردو معنی: ڈگری"
  },
  {
    "word": "Delay",
    "urdu": "تاخیر",
    "definition": "Delay — اردو معنی: تاخیر"
  },
  {
    "word": "Deliver",
    "urdu": "پہنچانا",
    "definition": "Deliver — اردو معنی: پہنچانا"
  },
  {
    "word": "Delivery",
    "urdu": "ترسیل",
    "definition": "Delivery — اردو معنی: ترسیل"
  },
  {
    "word": "Dentist",
    "urdu": "دندان ساز",
    "definition": "Dentist — اردو معنی: دندان ساز"
  },
  {
    "word": "Department",
    "urdu": "شعبہ",
    "definition": "Department — اردو معنی: شعبہ"
  },
  {
    "word": "Describe",
    "urdu": "بیان کرنا",
    "definition": "Describe — اردو معنی: بیان کرنا"
  },
  {
    "word": "Desert",
    "urdu": "صحرا",
    "definition": "Desert — اردو معنی: صحرا"
  },
  {
    "word": "Design",
    "urdu": "ڈیزائن",
    "definition": "Design — اردو معنی: ڈیزائن"
  },
  {
    "word": "Desk",
    "urdu": "میز",
    "definition": "Desk — اردو معنی: میز"
  },
  {
    "word": "Detail",
    "urdu": "تفصیل",
    "definition": "Detail — اردو معنی: تفصیل"
  },
  {
    "word": "Develop",
    "urdu": "ترقی دینا",
    "definition": "Develop — اردو معنی: ترقی دینا"
  },
  {
    "word": "Development",
    "urdu": "ترقی",
    "definition": "Development — اردو معنی: ترقی"
  },
  {
    "word": "Device",
    "urdu": "آلہ",
    "definition": "Device — اردو معنی: آلہ"
  },
  {
    "word": "Diary",
    "urdu": "ڈائری",
    "definition": "Diary — اردو معنی: ڈائری"
  },
  {
    "word": "Dictionary",
    "urdu": "لغت",
    "definition": "Dictionary — اردو معنی: لغت"
  },
  {
    "word": "Difference",
    "urdu": "فرق",
    "definition": "Difference — اردو معنی: فرق"
  },
  {
    "word": "Difficult",
    "urdu": "مشکل",
    "definition": "Difficult — اردو معنی: مشکل"
  },
  {
    "word": "Difficulty",
    "urdu": "مشکل",
    "definition": "Difficulty — اردو معنی: مشکل"
  },
  {
    "word": "Dinner",
    "urdu": "رات کا کھانا",
    "definition": "Dinner — اردو معنی: رات کا کھانا"
  },
  {
    "word": "Direction",
    "urdu": "سمت",
    "definition": "Direction — اردو معنی: سمت"
  },
  {
    "word": "Directly",
    "urdu": "براہ راست",
    "definition": "Directly — اردو معنی: براہ راست"
  },
  {
    "word": "Dirty",
    "urdu": "گندا",
    "definition": "Dirty — اردو معنی: گندا"
  },
  {
    "word": "Disappear",
    "urdu": "غائب ہونا",
    "definition": "Disappear — اردو معنی: غائب ہونا"
  },
  {
    "word": "Discover",
    "urdu": "دریافت کرنا",
    "definition": "Discover — اردو معنی: دریافت کرنا"
  },
  {
    "word": "Discuss",
    "urdu": "بحث کرنا",
    "definition": "Discuss — اردو معنی: بحث کرنا"
  },
  {
    "word": "Discussion",
    "urdu": "گفتگو",
    "definition": "Discussion — اردو معنی: گفتگو"
  },
  {
    "word": "Disease",
    "urdu": "بیماری",
    "definition": "Disease — اردو معنی: بیماری"
  },
  {
    "word": "Dish",
    "urdu": "کھانا",
    "definition": "Dish — اردو معنی: کھانا"
  },
  {
    "word": "Distance",
    "urdu": "فاصلہ",
    "definition": "Distance — اردو معنی: فاصلہ"
  },
  {
    "word": "Divide",
    "urdu": "تقسیم کرنا",
    "definition": "Divide — اردو معنی: تقسیم کرنا"
  },
  {
    "word": "Doctor",
    "urdu": "ڈاکٹر",
    "definition": "Doctor — اردو معنی: ڈاکٹر"
  },
  {
    "word": "Document",
    "urdu": "دستاویز",
    "definition": "Document — اردو معنی: دستاویز"
  },
  {
    "word": "Dog",
    "urdu": "کتا",
    "definition": "Dog — اردو معنی: کتا"
  },
  {
    "word": "Door",
    "urdu": "دروازہ",
    "definition": "Door — اردو معنی: دروازہ"
  },
  {
    "word": "Downstairs",
    "urdu": "نیچے کی منزل",
    "definition": "Downstairs — اردو معنی: نیچے کی منزل"
  },
  {
    "word": "Drawer",
    "urdu": "دراز",
    "definition": "Drawer — اردو معنی: دراز"
  },
  {
    "word": "Dress",
    "urdu": "لباس",
    "definition": "Dress — اردو معنی: لباس"
  },
  {
    "word": "Driver",
    "urdu": "ڈرائیور",
    "definition": "Driver — اردو معنی: ڈرائیور"
  },
  {
    "word": "Dry",
    "urdu": "خشک",
    "definition": "Dry — اردو معنی: خشک"
  },
  {
    "word": "Duck",
    "urdu": "بطخ",
    "definition": "Duck — اردو معنی: بطخ"
  },
  {
    "word": "During",
    "urdu": "کے دوران",
    "definition": "During — اردو معنی: کے دوران"
  },
  {
    "word": "Each",
    "urdu": "ہر ایک",
    "definition": "Each — اردو معنی: ہر ایک"
  },
  {
    "word": "Earn",
    "urdu": "کمانا",
    "definition": "Earn — اردو معنی: کمانا"
  },
  {
    "word": "East",
    "urdu": "مشرق",
    "definition": "East — اردو معنی: مشرق"
  },
  {
    "word": "Easy",
    "urdu": "آسان",
    "definition": "Easy — اردو معنی: آسان"
  },
  {
    "word": "Eat",
    "urdu": "کھانا",
    "definition": "Eat — اردو معنی: کھانا"
  },
  {
    "word": "Eating",
    "urdu": "کھانا",
    "definition": "Eating — اردو معنی: کھانا"
  },
  {
    "word": "Edge",
    "urdu": "کنارہ",
    "definition": "Edge — اردو معنی: کنارہ"
  },
  {
    "word": "Effect",
    "urdu": "اثر",
    "definition": "Effect — اردو معنی: اثر"
  },
  {
    "word": "Egg",
    "urdu": "انڈا",
    "definition": "Egg — اردو معنی: انڈا"
  },
  {
    "word": "Either",
    "urdu": "دونوں میں سے کوئی",
    "definition": "Either — اردو معنی: دونوں میں سے کوئی"
  },
  {
    "word": "Elder",
    "urdu": "بڑا",
    "definition": "Elder — اردو معنی: بڑا"
  },
  {
    "word": "Electric",
    "urdu": "بجلی کا",
    "definition": "Electric — اردو معنی: بجلی کا"
  },
  {
    "word": "Electricity",
    "urdu": "بجلی",
    "definition": "Electricity — اردو معنی: بجلی"
  },
  {
    "word": "Else",
    "urdu": "اور",
    "definition": "Else — اردو معنی: اور"
  },
  {
    "word": "Email",
    "urdu": "ای میل",
    "definition": "Email — اردو معنی: ای میل"
  },
  {
    "word": "Empty",
    "urdu": "خالی",
    "definition": "Empty — اردو معنی: خالی"
  },
  {
    "word": "End",
    "urdu": "اختتام",
    "definition": "End — اردو معنی: اختتام"
  },
  {
    "word": "Enemy",
    "urdu": "دشمن",
    "definition": "Enemy — اردو معنی: دشمن"
  },
  {
    "word": "Energy",
    "urdu": "توانائی",
    "definition": "Energy — اردو معنی: توانائی"
  },
  {
    "word": "Engine",
    "urdu": "انجن",
    "definition": "Engine — اردو معنی: انجن"
  },
  {
    "word": "Engineer",
    "urdu": "انجینئر",
    "definition": "Engineer — اردو معنی: انجینئر"
  },
  {
    "word": "Enter",
    "urdu": "داخل ہونا",
    "definition": "Enter — اردو معنی: داخل ہونا"
  },
  {
    "word": "Entrance",
    "urdu": "داخلہ",
    "definition": "Entrance — اردو معنی: داخلہ"
  },
  {
    "word": "Environment",
    "urdu": "ماحول",
    "definition": "Environment — اردو معنی: ماحول"
  },
  {
    "word": "Especially",
    "urdu": "خاص طور پر",
    "definition": "Especially — اردو معنی: خاص طور پر"
  },
  {
    "word": "Even",
    "urdu": "یہاں تک کہ",
    "definition": "Even — اردو معنی: یہاں تک کہ"
  },
  {
    "word": "Event",
    "urdu": "تقریب",
    "definition": "Event — اردو معنی: تقریب"
  },
  {
    "word": "Ever",
    "urdu": "کبھی",
    "definition": "Ever — اردو معنی: کبھی"
  },
  {
    "word": "Every",
    "urdu": "ہر",
    "definition": "Every — اردو معنی: ہر"
  },
  {
    "word": "Everybody",
    "urdu": "ہر کوئی",
    "definition": "Everybody — اردو معنی: ہر کوئی"
  },
  {
    "word": "Everyday",
    "urdu": "روزمرہ",
    "definition": "Everyday — اردو معنی: روزمرہ"
  },
  {
    "word": "Everyone",
    "urdu": "سب لوگ",
    "definition": "Everyone — اردو معنی: سب لوگ"
  },
  {
    "word": "Everything",
    "urdu": "ہر چیز",
    "definition": "Everything — اردو معنی: ہر چیز"
  },
  {
    "word": "Everywhere",
    "urdu": "ہر جگہ",
    "definition": "Everywhere — اردو معنی: ہر جگہ"
  },
  {
    "word": "Exact",
    "urdu": "بالکل درست",
    "definition": "Exact — اردو معنی: بالکل درست"
  },
  {
    "word": "Exactly",
    "urdu": "بالکل",
    "definition": "Exactly — اردو معنی: بالکل"
  },
  {
    "word": "Exam",
    "urdu": "امتحان",
    "definition": "Exam — اردو معنی: امتحان"
  },
  {
    "word": "Excellent",
    "urdu": "بہترین",
    "definition": "Excellent — اردو معنی: بہترین"
  },
  {
    "word": "Except",
    "urdu": "سوائے",
    "definition": "Except — اردو معنی: سوائے"
  },
  {
    "word": "Exchange",
    "urdu": "تبادلہ",
    "definition": "Exchange — اردو معنی: تبادلہ"
  },
  {
    "word": "Exercise",
    "urdu": "ورزش",
    "definition": "Exercise — اردو معنی: ورزش"
  },
  {
    "word": "Exist",
    "urdu": "موجود ہونا",
    "definition": "Exist — اردو معنی: موجود ہونا"
  },
  {
    "word": "Exit",
    "urdu": "راستہ خروج",
    "definition": "Exit — اردو معنی: راستہ خروج"
  },
  {
    "word": "Expect",
    "urdu": "توقع کرنا",
    "definition": "Expect — اردو معنی: توقع کرنا"
  },
  {
    "word": "Expensive",
    "urdu": "مہنگا",
    "definition": "Expensive — اردو معنی: مہنگا"
  },
  {
    "word": "Explain",
    "urdu": "سمجھانا",
    "definition": "Explain — اردو معنی: سمجھانا"
  },
  {
    "word": "Expression",
    "urdu": "اظہار",
    "definition": "Expression — اردو معنی: اظہار"
  },
  {
    "word": "Extra",
    "urdu": "اضافی",
    "definition": "Extra — اردو معنی: اضافی"
  },
  {
    "word": "Eye",
    "urdu": "آنکھ",
    "definition": "Eye — اردو معنی: آنکھ"
  },
  {
    "word": "Face",
    "urdu": "چہرہ",
    "definition": "Face — اردو معنی: چہرہ"
  },
  {
    "word": "Fact",
    "urdu": "حقیقت",
    "definition": "Fact — اردو معنی: حقیقت"
  },
  {
    "word": "Factory",
    "urdu": "کارخانہ",
    "definition": "Factory — اردو معنی: کارخانہ"
  },
  {
    "word": "Fail",
    "urdu": "ناکام ہونا",
    "definition": "Fail — اردو معنی: ناکام ہونا"
  },
  {
    "word": "Failure",
    "urdu": "ناکامی",
    "definition": "Failure — اردو معنی: ناکامی"
  },
  {
    "word": "Fair",
    "urdu": "منصفانہ",
    "definition": "Fair — اردو معنی: منصفانہ"
  },
  {
    "word": "Fall",
    "urdu": "گرنا",
    "definition": "Fall — اردو معنی: گرنا"
  },
  {
    "word": "Fan",
    "urdu": "پنکھا",
    "definition": "Fan — اردو معنی: پنکھا"
  },
  {
    "word": "Far",
    "urdu": "دور",
    "definition": "Far — اردو معنی: دور"
  },
  {
    "word": "Farm",
    "urdu": "کھیت",
    "definition": "Farm — اردو معنی: کھیت"
  },
  {
    "word": "Farmer",
    "urdu": "کسان",
    "definition": "Farmer — اردو معنی: کسان"
  },
  {
    "word": "Fat",
    "urdu": "موٹا",
    "definition": "Fat — اردو معنی: موٹا"
  },
  {
    "word": "Fault",
    "urdu": "غلطی",
    "definition": "Fault — اردو معنی: غلطی"
  },
  {
    "word": "Fear",
    "urdu": "ڈر",
    "definition": "Fear — اردو معنی: ڈر"
  },
  {
    "word": "Feed",
    "urdu": "کھلانا",
    "definition": "Feed — اردو معنی: کھلانا"
  },
  {
    "word": "Feeling",
    "urdu": "احساس",
    "definition": "Feeling — اردو معنی: احساس"
  },
  {
    "word": "Female",
    "urdu": "عورت",
    "definition": "Female — اردو معنی: عورت"
  },
  {
    "word": "Festival",
    "urdu": "تہوار",
    "definition": "Festival — اردو معنی: تہوار"
  },
  {
    "word": "Fever",
    "urdu": "بخار",
    "definition": "Fever — اردو معنی: بخار"
  },
  {
    "word": "Few",
    "urdu": "چند",
    "definition": "Few — اردو معنی: چند"
  },
  {
    "word": "Fight",
    "urdu": "لڑائی",
    "definition": "Fight — اردو معنی: لڑائی"
  },
  {
    "word": "Figure",
    "urdu": "شکل",
    "definition": "Figure — اردو معنی: شکل"
  },
  {
    "word": "File",
    "urdu": "فائل",
    "definition": "File — اردو معنی: فائل"
  },
  {
    "word": "Fill",
    "urdu": "بھرنا",
    "definition": "Fill — اردو معنی: بھرنا"
  },
  {
    "word": "Film",
    "urdu": "فلم",
    "definition": "Film — اردو معنی: فلم"
  },
  {
    "word": "Final",
    "urdu": "آخری",
    "definition": "Final — اردو معنی: آخری"
  },
  {
    "word": "Finally",
    "urdu": "آخرکار",
    "definition": "Finally — اردو معنی: آخرکار"
  },
  {
    "word": "Finance",
    "urdu": "مالیات",
    "definition": "Finance — اردو معنی: مالیات"
  },
  {
    "word": "Fine",
    "urdu": "ٹھیک",
    "definition": "Fine — اردو معنی: ٹھیک"
  },
  {
    "word": "Finger",
    "urdu": "انگلی",
    "definition": "Finger — اردو معنی: انگلی"
  },
  {
    "word": "Finish",
    "urdu": "ختم کرنا",
    "definition": "Finish — اردو معنی: ختم کرنا"
  },
  {
    "word": "Fish",
    "urdu": "مچھلی",
    "definition": "Fish — اردو معنی: مچھلی"
  },
  {
    "word": "Fit",
    "urdu": "موزوں",
    "definition": "Fit — اردو معنی: موزوں"
  },
  {
    "word": "Fix",
    "urdu": "ٹھیک کرنا",
    "definition": "Fix — اردو معنی: ٹھیک کرنا"
  },
  {
    "word": "Flat",
    "urdu": "فلیٹ",
    "definition": "Flat — اردو معنی: فلیٹ"
  },
  {
    "word": "Floor",
    "urdu": "فرش",
    "definition": "Floor — اردو معنی: فرش"
  },
  {
    "word": "Flower",
    "urdu": "پھول",
    "definition": "Flower — اردو معنی: پھول"
  },
  {
    "word": "Fly",
    "urdu": "اڑنا",
    "definition": "Fly — اردو معنی: اڑنا"
  },
  {
    "word": "Food",
    "urdu": "کھانا",
    "definition": "Food — اردو معنی: کھانا"
  },
  {
    "word": "Fool",
    "urdu": "بے وقوف",
    "definition": "Fool — اردو معنی: بے وقوف"
  },
  {
    "word": "Foot",
    "urdu": "پاؤں",
    "definition": "Foot — اردو معنی: پاؤں"
  },
  {
    "word": "Football",
    "urdu": "فٹ بال",
    "definition": "Football — اردو معنی: فٹ بال"
  },
  {
    "word": "For",
    "urdu": "کے لیے",
    "definition": "For — اردو معنی: کے لیے"
  },
  {
    "word": "Form",
    "urdu": "فارم",
    "definition": "Form — اردو معنی: فارم"
  },
  {
    "word": "Forward",
    "urdu": "آگے",
    "definition": "Forward — اردو معنی: آگے"
  },
  {
    "word": "Free",
    "urdu": "مفت",
    "definition": "Free — اردو معنی: مفت"
  },
  {
    "word": "Freedom",
    "urdu": "آزادی",
    "definition": "Freedom — اردو معنی: آزادی"
  },
  {
    "word": "Fresh",
    "urdu": "تازہ",
    "definition": "Fresh — اردو معنی: تازہ"
  },
  {
    "word": "Friendly",
    "urdu": "دوستانہ",
    "definition": "Friendly — اردو معنی: دوستانہ"
  },
  {
    "word": "Front",
    "urdu": "سامنے",
    "definition": "Front — اردو معنی: سامنے"
  },
  {
    "word": "Fruit",
    "urdu": "پھل",
    "definition": "Fruit — اردو معنی: پھل"
  },
  {
    "word": "Full",
    "urdu": "بھرا ہوا",
    "definition": "Full — اردو معنی: بھرا ہوا"
  },
  {
    "word": "Fully",
    "urdu": "مکمل طور پر",
    "definition": "Fully — اردو معنی: مکمل طور پر"
  },
  {
    "word": "Fun",
    "urdu": "مزہ",
    "definition": "Fun — اردو معنی: مزہ"
  },
  {
    "word": "Funny",
    "urdu": "مزاحیہ",
    "definition": "Funny — اردو معنی: مزاحیہ"
  },
  {
    "word": "Future",
    "urdu": "مستقبل",
    "definition": "Future — اردو معنی: مستقبل"
  },
  {
    "word": "Game",
    "urdu": "کھیل",
    "definition": "Game — اردو معنی: کھیل"
  },
  {
    "word": "Garden",
    "urdu": "باغ",
    "definition": "Garden — اردو معنی: باغ"
  },
  {
    "word": "Gas",
    "urdu": "گیس",
    "definition": "Gas — اردو معنی: گیس"
  },
  {
    "word": "Gate",
    "urdu": "دروازہ",
    "definition": "Gate — اردو معنی: دروازہ"
  },
  {
    "word": "Gather",
    "urdu": "جمع کرنا",
    "definition": "Gather — اردو معنی: جمع کرنا"
  },
  {
    "word": "General",
    "urdu": "عام",
    "definition": "General — اردو معنی: عام"
  },
  {
    "word": "Generally",
    "urdu": "عام طور پر",
    "definition": "Generally — اردو معنی: عام طور پر"
  },
  {
    "word": "Get",
    "urdu": "حاصل کرنا",
    "definition": "Get — اردو معنی: حاصل کرنا"
  },
  {
    "word": "Girl",
    "urdu": "لڑکی",
    "definition": "Girl — اردو معنی: لڑکی"
  },
  {
    "word": "Give",
    "urdu": "دینا",
    "definition": "Give — اردو معنی: دینا"
  },
  {
    "word": "Glass",
    "urdu": "شیشہ",
    "definition": "Glass — اردو معنی: شیشہ"
  },
  {
    "word": "Glasses",
    "urdu": "عینک",
    "definition": "Glasses — اردو معنی: عینک"
  },
  {
    "word": "Global",
    "urdu": "عالمی",
    "definition": "Global — اردو معنی: عالمی"
  },
  {
    "word": "Glove",
    "urdu": "دستانہ",
    "definition": "Glove — اردو معنی: دستانہ"
  },
  {
    "word": "Go",
    "urdu": "جانا",
    "definition": "Go — اردو معنی: جانا"
  },
  {
    "word": "Gold",
    "urdu": "سونا",
    "definition": "Gold — اردو معنی: سونا"
  },
  {
    "word": "Goodness",
    "urdu": "بھلائی",
    "definition": "Goodness — اردو معنی: بھلائی"
  },
  {
    "word": "Government",
    "urdu": "حکومت",
    "definition": "Government — اردو معنی: حکومت"
  },
  {
    "word": "Grandfather",
    "urdu": "دادا",
    "definition": "Grandfather — اردو معنی: دادا"
  },
  {
    "word": "Grandmother",
    "urdu": "دادی",
    "definition": "Grandmother — اردو معنی: دادی"
  },
  {
    "word": "Grass",
    "urdu": "گھاس",
    "definition": "Grass — اردو معنی: گھاس"
  },
  {
    "word": "Great",
    "urdu": "عظیم",
    "definition": "Great — اردو معنی: عظیم"
  },
  {
    "word": "Grocery",
    "urdu": "کریانہ",
    "definition": "Grocery — اردو معنی: کریانہ"
  },
  {
    "word": "Ground",
    "urdu": "زمین",
    "definition": "Ground — اردو معنی: زمین"
  },
  {
    "word": "Group",
    "urdu": "گروہ",
    "definition": "Group — اردو معنی: گروہ"
  },
  {
    "word": "Growth",
    "urdu": "ترقی",
    "definition": "Growth — اردو معنی: ترقی"
  },
  {
    "word": "Guest",
    "urdu": "مہمان",
    "definition": "Guest — اردو معنی: مہمان"
  },
  {
    "word": "Guide",
    "urdu": "رہنما",
    "definition": "Guide — اردو معنی: رہنما"
  },
  {
    "word": "Habit",
    "urdu": "عادت",
    "definition": "Habit — اردو معنی: عادت"
  },
  {
    "word": "Hair",
    "urdu": "بال",
    "definition": "Hair — اردو معنی: بال"
  },
  {
    "word": "Half",
    "urdu": "آدھا",
    "definition": "Half — اردو معنی: آدھا"
  },
  {
    "word": "Hall",
    "urdu": "ہال",
    "definition": "Hall — اردو معنی: ہال"
  },
  {
    "word": "Hand",
    "urdu": "ہاتھ",
    "definition": "Hand — اردو معنی: ہاتھ"
  },
  {
    "word": "Handbag",
    "urdu": "ہینڈ بیگ",
    "definition": "Handbag — اردو معنی: ہینڈ بیگ"
  },
  {
    "word": "Handle",
    "urdu": "سنبھالنا",
    "definition": "Handle — اردو معنی: سنبھالنا"
  },
  {
    "word": "Happen",
    "urdu": "ہونا",
    "definition": "Happen — اردو معنی: ہونا"
  },
  {
    "word": "Happily",
    "urdu": "خوشی سے",
    "definition": "Happily — اردو معنی: خوشی سے"
  },
  {
    "word": "Hardly",
    "urdu": "مشکل سے",
    "definition": "Hardly — اردو معنی: مشکل سے"
  },
  {
    "word": "Hat",
    "urdu": "ٹوپی",
    "definition": "Hat — اردو معنی: ٹوپی"
  },
  {
    "word": "Hate",
    "urdu": "نفرت کرنا",
    "definition": "Hate — اردو معنی: نفرت کرنا"
  },
  {
    "word": "Head",
    "urdu": "سر",
    "definition": "Head — اردو معنی: سر"
  },
  {
    "word": "Headache",
    "urdu": "سر درد",
    "definition": "Headache — اردو معنی: سر درد"
  },
  {
    "word": "Healthy",
    "urdu": "صحت مند",
    "definition": "Healthy — اردو معنی: صحت مند"
  },
  {
    "word": "Hear",
    "urdu": "سننا",
    "definition": "Hear — اردو معنی: سننا"
  },
  {
    "word": "Heat",
    "urdu": "گرمی",
    "definition": "Heat — اردو معنی: گرمی"
  },
  {
    "word": "Heavy",
    "urdu": "بھاری",
    "definition": "Heavy — اردو معنی: بھاری"
  },
  {
    "word": "Height",
    "urdu": "قد",
    "definition": "Height — اردو معنی: قد"
  },
  {
    "word": "Hello",
    "urdu": "سلام",
    "definition": "Hello — اردو معنی: سلام"
  },
  {
    "word": "Helpful",
    "urdu": "مددگار",
    "definition": "Helpful — اردو معنی: مددگار"
  },
  {
    "word": "Here",
    "urdu": "یہاں",
    "definition": "Here — اردو معنی: یہاں"
  },
  {
    "word": "Hero",
    "urdu": "ہیرو",
    "definition": "Hero — اردو معنی: ہیرو"
  },
  {
    "word": "Hide",
    "urdu": "چھپانا",
    "definition": "Hide — اردو معنی: چھپانا"
  },
  {
    "word": "High",
    "urdu": "اونچا",
    "definition": "High — اردو معنی: اونچا"
  },
  {
    "word": "Highly",
    "urdu": "بہت زیادہ",
    "definition": "Highly — اردو معنی: بہت زیادہ"
  },
  {
    "word": "Hill",
    "urdu": "پہاڑی",
    "definition": "Hill — اردو معنی: پہاڑی"
  },
  {
    "word": "History",
    "urdu": "تاریخ",
    "definition": "History — اردو معنی: تاریخ"
  },
  {
    "word": "Hit",
    "urdu": "مارنا",
    "definition": "Hit — اردو معنی: مارنا"
  },
  {
    "word": "Hold",
    "urdu": "پکڑنا",
    "definition": "Hold — اردو معنی: پکڑنا"
  },
  {
    "word": "Holiday",
    "urdu": "چھٹی",
    "definition": "Holiday — اردو معنی: چھٹی"
  },
  {
    "word": "Home",
    "urdu": "گھر",
    "definition": "Home — اردو معنی: گھر"
  },
  {
    "word": "Honestly",
    "urdu": "ایمانداری سے",
    "definition": "Honestly — اردو معنی: ایمانداری سے"
  },
  {
    "word": "Hopefully",
    "urdu": "امید ہے",
    "definition": "Hopefully — اردو معنی: امید ہے"
  },
  {
    "word": "Hospital",
    "urdu": "ہسپتال",
    "definition": "Hospital — اردو معنی: ہسپتال"
  },
  {
    "word": "Hot",
    "urdu": "گرم",
    "definition": "Hot — اردو معنی: گرم"
  },
  {
    "word": "Hotel",
    "urdu": "ہوٹل",
    "definition": "Hotel — اردو معنی: ہوٹل"
  },
  {
    "word": "Hour",
    "urdu": "گھنٹہ",
    "definition": "Hour — اردو معنی: گھنٹہ"
  },
  {
    "word": "House",
    "urdu": "مکان",
    "definition": "House — اردو معنی: مکان"
  },
  {
    "word": "However",
    "urdu": "تاہم",
    "definition": "However — اردو معنی: تاہم"
  },
  {
    "word": "Huge",
    "urdu": "بہت بڑا",
    "definition": "Huge — اردو معنی: بہت بڑا"
  },
  {
    "word": "Hungry",
    "urdu": "بھوکا",
    "definition": "Hungry — اردو معنی: بھوکا"
  },
  {
    "word": "Hurry",
    "urdu": "جلدی",
    "definition": "Hurry — اردو معنی: جلدی"
  },
  {
    "word": "Hurt",
    "urdu": "تکلیف دینا",
    "definition": "Hurt — اردو معنی: تکلیف دینا"
  },
  {
    "word": "Husband",
    "urdu": "شوہر",
    "definition": "Husband — اردو معنی: شوہر"
  },
  {
    "word": "Identify",
    "urdu": "شناخت کرنا",
    "definition": "Identify — اردو معنی: شناخت کرنا"
  },
  {
    "word": "Ill",
    "urdu": "بیمار",
    "definition": "Ill — اردو معنی: بیمار"
  },
  {
    "word": "Illness",
    "urdu": "بیماری",
    "definition": "Illness — اردو معنی: بیماری"
  },
  {
    "word": "Image",
    "urdu": "تصویر",
    "definition": "Image — اردو معنی: تصویر"
  },
  {
    "word": "Imagine",
    "urdu": "تصور کرنا",
    "definition": "Imagine — اردو معنی: تصور کرنا"
  },
  {
    "word": "Immediately",
    "urdu": "فوراً",
    "definition": "Immediately — اردو معنی: فوراً"
  },
  {
    "word": "Importance",
    "urdu": "اہمیت",
    "definition": "Importance — اردو معنی: اہمیت"
  },
  {
    "word": "Impossible",
    "urdu": "ناممکن",
    "definition": "Impossible — اردو معنی: ناممکن"
  },
  {
    "word": "Improve",
    "urdu": "بہتر کرنا",
    "definition": "Improve — اردو معنی: بہتر کرنا"
  },
  {
    "word": "Improvement",
    "urdu": "بہتری",
    "definition": "Improvement — اردو معنی: بہتری"
  },
  {
    "word": "Including",
    "urdu": "سمیت",
    "definition": "Including — اردو معنی: سمیت"
  },
  {
    "word": "Income",
    "urdu": "آمدنی",
    "definition": "Income — اردو معنی: آمدنی"
  },
  {
    "word": "Increase",
    "urdu": "اضافہ",
    "definition": "Increase — اردو معنی: اضافہ"
  },
  {
    "word": "Indeed",
    "urdu": "واقعی",
    "definition": "Indeed — اردو معنی: واقعی"
  },
  {
    "word": "Independent",
    "urdu": "آزاد",
    "definition": "Independent — اردو معنی: آزاد"
  },
  {
    "word": "Industry",
    "urdu": "صنعت",
    "definition": "Industry — اردو معنی: صنعت"
  },
  {
    "word": "Inside",
    "urdu": "اندر",
    "definition": "Inside — اردو معنی: اندر"
  },
  {
    "word": "Instead",
    "urdu": "اس کے بجائے",
    "definition": "Instead — اردو معنی: اس کے بجائے"
  },
  {
    "word": "Instruction",
    "urdu": "ہدایت",
    "definition": "Instruction — اردو معنی: ہدایت"
  },
  {
    "word": "Interested",
    "urdu": "دلچسپی رکھنے والا",
    "definition": "Interested — اردو معنی: دلچسپی رکھنے والا"
  },
  {
    "word": "Interesting",
    "urdu": "دلچسپ",
    "definition": "Interesting — اردو معنی: دلچسپ"
  },
  {
    "word": "Internet",
    "urdu": "انٹرنیٹ",
    "definition": "Internet — اردو معنی: انٹرنیٹ"
  },
  {
    "word": "Interview",
    "urdu": "انٹرویو",
    "definition": "Interview — اردو معنی: انٹرویو"
  },
  {
    "word": "Introduce",
    "urdu": "تعارف کرانا",
    "definition": "Introduce — اردو معنی: تعارف کرانا"
  },
  {
    "word": "Introduction",
    "urdu": "تعارف",
    "definition": "Introduction — اردو معنی: تعارف"
  },
  {
    "word": "Invite",
    "urdu": "دعوت دینا",
    "definition": "Invite — اردو معنی: دعوت دینا"
  },
  {
    "word": "Island",
    "urdu": "جزیرہ",
    "definition": "Island — اردو معنی: جزیرہ"
  },
  {
    "word": "Issue",
    "urdu": "مسئلہ",
    "definition": "Issue — اردو معنی: مسئلہ"
  },
  {
    "word": "Item",
    "urdu": "چیز",
    "definition": "Item — اردو معنی: چیز"
  },
  {
    "word": "Job",
    "urdu": "ملازمت",
    "definition": "Job — اردو معنی: ملازمت"
  },
  {
    "word": "Join",
    "urdu": "شامل ہونا",
    "definition": "Join — اردو معنی: شامل ہونا"
  },
  {
    "word": "Joke",
    "urdu": "لطیفہ",
    "definition": "Joke — اردو معنی: لطیفہ"
  },
  {
    "word": "Journey",
    "urdu": "سفر",
    "definition": "Journey — اردو معنی: سفر"
  },
  {
    "word": "Judge",
    "urdu": "جج",
    "definition": "Judge — اردو معنی: جج"
  },
  {
    "word": "Juice",
    "urdu": "رس",
    "definition": "Juice — اردو معنی: رس"
  },
  {
    "word": "Jump",
    "urdu": "چھلانگ لگانا",
    "definition": "Jump — اردو معنی: چھلانگ لگانا"
  },
  {
    "word": "Just",
    "urdu": "صرف",
    "definition": "Just — اردو معنی: صرف"
  },
  {
    "word": "Keep",
    "urdu": "رکھنا",
    "definition": "Keep — اردو معنی: رکھنا"
  },
  {
    "word": "Key",
    "urdu": "چابی",
    "definition": "Key — اردو معنی: چابی"
  },
  {
    "word": "Keyboard",
    "urdu": "کی بورڈ",
    "definition": "Keyboard — اردو معنی: کی بورڈ"
  },
  {
    "word": "Kick",
    "urdu": "لات مارنا",
    "definition": "Kick — اردو معنی: لات مارنا"
  },
  {
    "word": "Kid",
    "urdu": "بچہ",
    "definition": "Kid — اردو معنی: بچہ"
  },
  {
    "word": "Kill",
    "urdu": "مار ڈالنا",
    "definition": "Kill — اردو معنی: مار ڈالنا"
  },
  {
    "word": "Kind",
    "urdu": "مہربان",
    "definition": "Kind — اردو معنی: مہربان"
  },
  {
    "word": "Kindly",
    "urdu": "مہربانی سے",
    "definition": "Kindly — اردو معنی: مہربانی سے"
  },
  {
    "word": "King",
    "urdu": "بادشاہ",
    "definition": "King — اردو معنی: بادشاہ"
  },
  {
    "word": "Kitchen",
    "urdu": "باورچی خانہ",
    "definition": "Kitchen — اردو معنی: باورچی خانہ"
  },
  {
    "word": "Knee",
    "urdu": "گھٹنا",
    "definition": "Knee — اردو معنی: گھٹنا"
  },
  {
    "word": "Knife",
    "urdu": "چھری",
    "definition": "Knife — اردو معنی: چھری"
  },
  {
    "word": "Known",
    "urdu": "معلوم",
    "definition": "Known — اردو معنی: معلوم"
  },
  {
    "word": "Label",
    "urdu": "لیبل",
    "definition": "Label — اردو معنی: لیبل"
  },
  {
    "word": "Labor",
    "urdu": "مزدوری",
    "definition": "Labor — اردو معنی: مزدوری"
  },
  {
    "word": "Lady",
    "urdu": "خاتون",
    "definition": "Lady — اردو معنی: خاتون"
  },
  {
    "word": "Lake",
    "urdu": "جھیل",
    "definition": "Lake — اردو معنی: جھیل"
  },
  {
    "word": "Land",
    "urdu": "زمین",
    "definition": "Land — اردو معنی: زمین"
  },
  {
    "word": "Language",
    "urdu": "زبان",
    "definition": "Language — اردو معنی: زبان"
  },
  {
    "word": "Last",
    "urdu": "آخری",
    "definition": "Last — اردو معنی: آخری"
  },
  {
    "word": "Late",
    "urdu": "دیر سے",
    "definition": "Late — اردو معنی: دیر سے"
  },
  {
    "word": "Lately",
    "urdu": "حال ہی میں",
    "definition": "Lately — اردو معنی: حال ہی میں"
  },
  {
    "word": "Later",
    "urdu": "بعد میں",
    "definition": "Later — اردو معنی: بعد میں"
  },
  {
    "word": "Latest",
    "urdu": "تازہ ترین",
    "definition": "Latest — اردو معنی: تازہ ترین"
  },
  {
    "word": "Laugh",
    "urdu": "ہنسنا",
    "definition": "Laugh — اردو معنی: ہنسنا"
  },
  {
    "word": "Laughter",
    "urdu": "ہنسی",
    "definition": "Laughter — اردو معنی: ہنسی"
  },
  {
    "word": "Law",
    "urdu": "قانون",
    "definition": "Law — اردو معنی: قانون"
  },
  {
    "word": "Lawyer",
    "urdu": "وکیل",
    "definition": "Lawyer — اردو معنی: وکیل"
  },
  {
    "word": "Lazy",
    "urdu": "سست",
    "definition": "Lazy — اردو معنی: سست"
  },
  {
    "word": "Lead",
    "urdu": "رہنمائی کرنا",
    "definition": "Lead — اردو معنی: رہنمائی کرنا"
  },
  {
    "word": "Leader",
    "urdu": "رہنما",
    "definition": "Leader — اردو معنی: رہنما"
  },
  {
    "word": "Learner",
    "urdu": "سیکھنے والا",
    "definition": "Learner — اردو معنی: سیکھنے والا"
  },
  {
    "word": "Least",
    "urdu": "کم سے کم",
    "definition": "Least — اردو معنی: کم سے کم"
  },
  {
    "word": "Lecture",
    "urdu": "لیکچر",
    "definition": "Lecture — اردو معنی: لیکچر"
  },
  {
    "word": "Left",
    "urdu": "بایاں",
    "definition": "Left — اردو معنی: بایاں"
  },
  {
    "word": "Leg",
    "urdu": "ٹانگ",
    "definition": "Leg — اردو معنی: ٹانگ"
  },
  {
    "word": "Legal",
    "urdu": "قانونی",
    "definition": "Legal — اردو معنی: قانونی"
  },
  {
    "word": "Lemon",
    "urdu": "لیموں",
    "definition": "Lemon — اردو معنی: لیموں"
  },
  {
    "word": "Lend",
    "urdu": "ادھار دینا",
    "definition": "Lend — اردو معنی: ادھار دینا"
  },
  {
    "word": "Length",
    "urdu": "لمبائی",
    "definition": "Length — اردو معنی: لمبائی"
  },
  {
    "word": "Lesson",
    "urdu": "سبق",
    "definition": "Lesson — اردو معنی: سبق"
  },
  {
    "word": "Let",
    "urdu": "اجازت دینا",
    "definition": "Let — اردو معنی: اجازت دینا"
  },
  {
    "word": "Letter",
    "urdu": "خط",
    "definition": "Letter — اردو معنی: خط"
  },
  {
    "word": "Level",
    "urdu": "سطح",
    "definition": "Level — اردو معنی: سطح"
  },
  {
    "word": "Library",
    "urdu": "کتب خانہ",
    "definition": "Library — اردو معنی: کتب خانہ"
  },
  {
    "word": "Life",
    "urdu": "زندگی",
    "definition": "Life — اردو معنی: زندگی"
  },
  {
    "word": "Lifestyle",
    "urdu": "طرز زندگی",
    "definition": "Lifestyle — اردو معنی: طرز زندگی"
  },
  {
    "word": "Lift",
    "urdu": "اٹھانا",
    "definition": "Lift — اردو معنی: اٹھانا"
  },
  {
    "word": "Lightly",
    "urdu": "ہلکے سے",
    "definition": "Lightly — اردو معنی: ہلکے سے"
  },
  {
    "word": "Like",
    "urdu": "پسند کرنا",
    "definition": "Like — اردو معنی: پسند کرنا"
  },
  {
    "word": "Likely",
    "urdu": "ممکن",
    "definition": "Likely — اردو معنی: ممکن"
  },
  {
    "word": "Limit",
    "urdu": "حد",
    "definition": "Limit — اردو معنی: حد"
  },
  {
    "word": "Line",
    "urdu": "لکیر",
    "definition": "Line — اردو معنی: لکیر"
  },
  {
    "word": "Link",
    "urdu": "ربط",
    "definition": "Link — اردو معنی: ربط"
  },
  {
    "word": "Lion",
    "urdu": "شیر",
    "definition": "Lion — اردو معنی: شیر"
  },
  {
    "word": "List",
    "urdu": "فہرست",
    "definition": "List — اردو معنی: فہرست"
  },
  {
    "word": "Listener",
    "urdu": "سننے والا",
    "definition": "Listener — اردو معنی: سننے والا"
  },
  {
    "word": "Literature",
    "urdu": "ادب",
    "definition": "Literature — اردو معنی: ادب"
  },
  {
    "word": "Little",
    "urdu": "چھوٹا",
    "definition": "Little — اردو معنی: چھوٹا"
  },
  {
    "word": "Live",
    "urdu": "رہنا",
    "definition": "Live — اردو معنی: رہنا"
  },
  {
    "word": "Living",
    "urdu": "زندہ",
    "definition": "Living — اردو معنی: زندہ"
  },
  {
    "word": "Local",
    "urdu": "مقامی",
    "definition": "Local — اردو معنی: مقامی"
  },
  {
    "word": "Location",
    "urdu": "مقام",
    "definition": "Location — اردو معنی: مقام"
  },
  {
    "word": "Lock",
    "urdu": "تالا",
    "definition": "Lock — اردو معنی: تالا"
  },
  {
    "word": "Lonely",
    "urdu": "تنہا",
    "definition": "Lonely — اردو معنی: تنہا"
  },
  {
    "word": "Long",
    "urdu": "لمبا",
    "definition": "Long — اردو معنی: لمبا"
  },
  {
    "word": "Look",
    "urdu": "دیکھنا",
    "definition": "Look — اردو معنی: دیکھنا"
  },
  {
    "word": "Loose",
    "urdu": "ڈھیلا",
    "definition": "Loose — اردو معنی: ڈھیلا"
  },
  {
    "word": "Lose",
    "urdu": "کھونا",
    "definition": "Lose — اردو معنی: کھونا"
  },
  {
    "word": "Loss",
    "urdu": "نقصان",
    "definition": "Loss — اردو معنی: نقصان"
  },
  {
    "word": "Lost",
    "urdu": "گم",
    "definition": "Lost — اردو معنی: گم"
  },
  {
    "word": "Lot",
    "urdu": "بہت",
    "definition": "Lot — اردو معنی: بہت"
  },
  {
    "word": "Lovely",
    "urdu": "خوبصورت",
    "definition": "Lovely — اردو معنی: خوبصورت"
  },
  {
    "word": "Lover",
    "urdu": "محبوب",
    "definition": "Lover — اردو معنی: محبوب"
  },
  {
    "word": "Low",
    "urdu": "نیچا",
    "definition": "Low — اردو معنی: نیچا"
  },
  {
    "word": "Luck",
    "urdu": "قسمت",
    "definition": "Luck — اردو معنی: قسمت"
  },
  {
    "word": "Lunch",
    "urdu": "دوپہر کا کھانا",
    "definition": "Lunch — اردو معنی: دوپہر کا کھانا"
  },
  {
    "word": "Machine",
    "urdu": "مشین",
    "definition": "Machine — اردو معنی: مشین"
  },
  {
    "word": "Mad",
    "urdu": "ناراض",
    "definition": "Mad — اردو معنی: ناراض"
  },
  {
    "word": "Main",
    "urdu": "اہم",
    "definition": "Main — اردو معنی: اہم"
  },
  {
    "word": "Mainly",
    "urdu": "زیادہ تر",
    "definition": "Mainly — اردو معنی: زیادہ تر"
  },
  {
    "word": "Make",
    "urdu": "بنانا",
    "definition": "Make — اردو معنی: بنانا"
  },
  {
    "word": "Male",
    "urdu": "مرد",
    "definition": "Male — اردو معنی: مرد"
  },
  {
    "word": "Man",
    "urdu": "آدمی",
    "definition": "Man — اردو معنی: آدمی"
  },
  {
    "word": "Manage",
    "urdu": "انتظام کرنا",
    "definition": "Manage — اردو معنی: انتظام کرنا"
  },
  {
    "word": "Manager",
    "urdu": "منتظم",
    "definition": "Manager — اردو معنی: منتظم"
  },
  {
    "word": "Management",
    "urdu": "انتظام",
    "definition": "Management — اردو معنی: انتظام"
  },
  {
    "word": "Many",
    "urdu": "بہت سے",
    "definition": "Many — اردو معنی: بہت سے"
  },
  {
    "word": "Map",
    "urdu": "نقشہ",
    "definition": "Map — اردو معنی: نقشہ"
  },
  {
    "word": "Market",
    "urdu": "بازار",
    "definition": "Market — اردو معنی: بازار"
  },
  {
    "word": "Marriage",
    "urdu": "شادی",
    "definition": "Marriage — اردو معنی: شادی"
  },
  {
    "word": "Married",
    "urdu": "شادی شدہ",
    "definition": "Married — اردو معنی: شادی شدہ"
  },
  {
    "word": "Marry",
    "urdu": "شادی کرنا",
    "definition": "Marry — اردو معنی: شادی کرنا"
  },
  {
    "word": "Match",
    "urdu": "مقابلہ",
    "definition": "Match — اردو معنی: مقابلہ"
  },
  {
    "word": "Material",
    "urdu": "مواد",
    "definition": "Material — اردو معنی: مواد"
  },
  {
    "word": "Matter",
    "urdu": "معاملہ",
    "definition": "Matter — اردو معنی: معاملہ"
  },
  {
    "word": "Maybe",
    "urdu": "شاید",
    "definition": "Maybe — اردو معنی: شاید"
  },
  {
    "word": "Meal",
    "urdu": "کھانا",
    "definition": "Meal — اردو معنی: کھانا"
  },
  {
    "word": "Mean",
    "urdu": "مطلب ہونا",
    "definition": "Mean — اردو معنی: مطلب ہونا"
  },
  {
    "word": "Meanwhile",
    "urdu": "اسی دوران",
    "definition": "Meanwhile — اردو معنی: اسی دوران"
  },
  {
    "word": "Measure",
    "urdu": "ناپنا",
    "definition": "Measure — اردو معنی: ناپنا"
  },
  {
    "word": "Measurement",
    "urdu": "پیمائش",
    "definition": "Measurement — اردو معنی: پیمائش"
  },
  {
    "word": "Meat",
    "urdu": "گوشت",
    "definition": "Meat — اردو معنی: گوشت"
  },
  {
    "word": "Medicine",
    "urdu": "دوا",
    "definition": "Medicine — اردو معنی: دوا"
  },
  {
    "word": "Medium",
    "urdu": "درمیانہ",
    "definition": "Medium — اردو معنی: درمیانہ"
  },
  {
    "word": "Meet",
    "urdu": "ملنا",
    "definition": "Meet — اردو معنی: ملنا"
  },
  {
    "word": "Meeting",
    "urdu": "اجلاس",
    "definition": "Meeting — اردو معنی: اجلاس"
  },
  {
    "word": "Member",
    "urdu": "رکن",
    "definition": "Member — اردو معنی: رکن"
  },
  {
    "word": "Mention",
    "urdu": "ذکر کرنا",
    "definition": "Mention — اردو معنی: ذکر کرنا"
  },
  {
    "word": "Message",
    "urdu": "پیغام",
    "definition": "Message — اردو معنی: پیغام"
  },
  {
    "word": "Metal",
    "urdu": "دھات",
    "definition": "Metal — اردو معنی: دھات"
  },
  {
    "word": "Method",
    "urdu": "طریقہ",
    "definition": "Method — اردو معنی: طریقہ"
  },
  {
    "word": "Middle",
    "urdu": "درمیان",
    "definition": "Middle — اردو معنی: درمیان"
  },
  {
    "word": "Midnight",
    "urdu": "آدھی رات",
    "definition": "Midnight — اردو معنی: آدھی رات"
  },
  {
    "word": "Milk",
    "urdu": "دودھ",
    "definition": "Milk — اردو معنی: دودھ"
  },
  {
    "word": "Mind",
    "urdu": "ذہن",
    "definition": "Mind — اردو معنی: ذہن"
  },
  {
    "word": "Minute",
    "urdu": "منٹ",
    "definition": "Minute — اردو معنی: منٹ"
  },
  {
    "word": "Mirror",
    "urdu": "آئینہ",
    "definition": "Mirror — اردو معنی: آئینہ"
  },
  {
    "word": "Miss",
    "urdu": "یاد کرنا",
    "definition": "Miss — اردو معنی: یاد کرنا"
  },
  {
    "word": "Missing",
    "urdu": "لاپتہ",
    "definition": "Missing — اردو معنی: لاپتہ"
  },
  {
    "word": "Mobile",
    "urdu": "موبائل",
    "definition": "Mobile — اردو معنی: موبائل"
  },
  {
    "word": "Model",
    "urdu": "نمونہ",
    "definition": "Model — اردو معنی: نمونہ"
  },
  {
    "word": "Moment",
    "urdu": "لمحہ",
    "definition": "Moment — اردو معنی: لمحہ"
  },
  {
    "word": "Month",
    "urdu": "مہینہ",
    "definition": "Month — اردو معنی: مہینہ"
  },
  {
    "word": "Monthly",
    "urdu": "ماہانہ",
    "definition": "Monthly — اردو معنی: ماہانہ"
  },
  {
    "word": "Moon",
    "urdu": "چاند",
    "definition": "Moon — اردو معنی: چاند"
  },
  {
    "word": "Motion",
    "urdu": "حرکت",
    "definition": "Motion — اردو معنی: حرکت"
  },
  {
    "word": "Motor",
    "urdu": "موٹر",
    "definition": "Motor — اردو معنی: موٹر"
  },
  {
    "word": "Mountain",
    "urdu": "پہاڑ",
    "definition": "Mountain — اردو معنی: پہاڑ"
  },
  {
    "word": "Mouse",
    "urdu": "چوہا",
    "definition": "Mouse — اردو معنی: چوہا"
  },
  {
    "word": "Mouth",
    "urdu": "منہ",
    "definition": "Mouth — اردو معنی: منہ"
  },
  {
    "word": "Movement",
    "urdu": "تحریک",
    "definition": "Movement — اردو معنی: تحریک"
  },
  {
    "word": "Movie",
    "urdu": "فلم",
    "definition": "Movie — اردو معنی: فلم"
  },
  {
    "word": "Much",
    "urdu": "زیادہ",
    "definition": "Much — اردو معنی: زیادہ"
  },
  {
    "word": "Musician",
    "urdu": "موسیقار",
    "definition": "Musician — اردو معنی: موسیقار"
  },
  {
    "word": "Must",
    "urdu": "ضرور",
    "definition": "Must — اردو معنی: ضرور"
  },
  {
    "word": "Name",
    "urdu": "نام",
    "definition": "Name — اردو معنی: نام"
  },
  {
    "word": "Narrow",
    "urdu": "تنگ",
    "definition": "Narrow — اردو معنی: تنگ"
  },
  {
    "word": "Nation",
    "urdu": "قوم",
    "definition": "Nation — اردو معنی: قوم"
  },
  {
    "word": "National",
    "urdu": "قومی",
    "definition": "National — اردو معنی: قومی"
  },
  {
    "word": "Nature",
    "urdu": "فطرت",
    "definition": "Nature — اردو معنی: فطرت"
  },
  {
    "word": "Near",
    "urdu": "قریب",
    "definition": "Near — اردو معنی: قریب"
  },
  {
    "word": "Nearby",
    "urdu": "قریب ہی",
    "definition": "Nearby — اردو معنی: قریب ہی"
  },
  {
    "word": "Nearly",
    "urdu": "تقریباً",
    "definition": "Nearly — اردو معنی: تقریباً"
  },
  {
    "word": "Neck",
    "urdu": "گردن",
    "definition": "Neck — اردو معنی: گردن"
  },
  {
    "word": "Negative",
    "urdu": "منفی",
    "definition": "Negative — اردو معنی: منفی"
  },
  {
    "word": "Neighbor",
    "urdu": "پڑوسی",
    "definition": "Neighbor — اردو معنی: پڑوسی"
  },
  {
    "word": "Neighborhood",
    "urdu": "محلہ",
    "definition": "Neighborhood — اردو معنی: محلہ"
  },
  {
    "word": "Neither",
    "urdu": "کوئی بھی نہیں",
    "definition": "Neither — اردو معنی: کوئی بھی نہیں"
  },
  {
    "word": "Newly",
    "urdu": "نئے سرے سے",
    "definition": "Newly — اردو معنی: نئے سرے سے"
  },
  {
    "word": "News",
    "urdu": "خبر",
    "definition": "News — اردو معنی: خبر"
  },
  {
    "word": "Newspaper",
    "urdu": "اخبار",
    "definition": "Newspaper — اردو معنی: اخبار"
  },
  {
    "word": "Next",
    "urdu": "اگلا",
    "definition": "Next — اردو معنی: اگلا"
  },
  {
    "word": "Nice",
    "urdu": "اچھا",
    "definition": "Nice — اردو معنی: اچھا"
  },
  {
    "word": "Nicely",
    "urdu": "اچھے طریقے سے",
    "definition": "Nicely — اردو معنی: اچھے طریقے سے"
  },
  {
    "word": "Night",
    "urdu": "رات",
    "definition": "Night — اردو معنی: رات"
  },
  {
    "word": "Nightmare",
    "urdu": "ڈراؤنا خواب",
    "definition": "Nightmare — اردو معنی: ڈراؤنا خواب"
  },
  {
    "word": "Noisy",
    "urdu": "شور والا",
    "definition": "Noisy — اردو معنی: شور والا"
  },
  {
    "word": "None",
    "urdu": "کوئی نہیں",
    "definition": "None — اردو معنی: کوئی نہیں"
  },
  {
    "word": "Normal",
    "urdu": "عام",
    "definition": "Normal — اردو معنی: عام"
  },
  {
    "word": "Normally",
    "urdu": "عام طور پر",
    "definition": "Normally — اردو معنی: عام طور پر"
  },
  {
    "word": "North",
    "urdu": "شمال",
    "definition": "North — اردو معنی: شمال"
  },
  {
    "word": "Nose",
    "urdu": "ناک",
    "definition": "Nose — اردو معنی: ناک"
  },
  {
    "word": "Note",
    "urdu": "نوٹ",
    "definition": "Note — اردو معنی: نوٹ"
  },
  {
    "word": "Notebook",
    "urdu": "کاپی",
    "definition": "Notebook — اردو معنی: کاپی"
  },
  {
    "word": "Nothing",
    "urdu": "کچھ نہیں",
    "definition": "Nothing — اردو معنی: کچھ نہیں"
  },
  {
    "word": "Now",
    "urdu": "اب",
    "definition": "Now — اردو معنی: اب"
  },
  {
    "word": "Nowadays",
    "urdu": "آج کل",
    "definition": "Nowadays — اردو معنی: آج کل"
  },
  {
    "word": "Nurse",
    "urdu": "نرس",
    "definition": "Nurse — اردو معنی: نرس"
  },
  {
    "word": "Obvious",
    "urdu": "واضح",
    "definition": "Obvious — اردو معنی: واضح"
  },
  {
    "word": "Obviously",
    "urdu": "ظاہر ہے",
    "definition": "Obviously — اردو معنی: ظاہر ہے"
  },
  {
    "word": "Occasion",
    "urdu": "موقع",
    "definition": "Occasion — اردو معنی: موقع"
  },
  {
    "word": "Occasionally",
    "urdu": "کبھی کبھار",
    "definition": "Occasionally — اردو معنی: کبھی کبھار"
  },
  {
    "word": "Office",
    "urdu": "دفتر",
    "definition": "Office — اردو معنی: دفتر"
  },
  {
    "word": "Officer",
    "urdu": "افسر",
    "definition": "Officer — اردو معنی: افسر"
  },
  {
    "word": "Official",
    "urdu": "سرکاری",
    "definition": "Official — اردو معنی: سرکاری"
  },
  {
    "word": "Oil",
    "urdu": "تیل",
    "definition": "Oil — اردو معنی: تیل"
  },
  {
    "word": "Okay",
    "urdu": "ٹھیک ہے",
    "definition": "Okay — اردو معنی: ٹھیک ہے"
  },
  {
    "word": "Old",
    "urdu": "پرانا",
    "definition": "Old — اردو معنی: پرانا"
  },
  {
    "word": "Older",
    "urdu": "زیادہ عمر کا",
    "definition": "Older — اردو معنی: زیادہ عمر کا"
  },
  {
    "word": "Once",
    "urdu": "ایک بار",
    "definition": "Once — اردو معنی: ایک بار"
  },
  {
    "word": "Online",
    "urdu": "آن لائن",
    "definition": "Online — اردو معنی: آن لائن"
  },
  {
    "word": "Only",
    "urdu": "صرف",
    "definition": "Only — اردو معنی: صرف"
  },
  {
    "word": "Opening",
    "urdu": "افتتاح",
    "definition": "Opening — اردو معنی: افتتاح"
  },
  {
    "word": "Opinion",
    "urdu": "رائے",
    "definition": "Opinion — اردو معنی: رائے"
  },
  {
    "word": "Opportunity",
    "urdu": "موقع",
    "definition": "Opportunity — اردو معنی: موقع"
  },
  {
    "word": "Opposite",
    "urdu": "مخالف",
    "definition": "Opposite — اردو معنی: مخالف"
  },
  {
    "word": "Option",
    "urdu": "اختیار",
    "definition": "Option — اردو معنی: اختیار"
  },
  {
    "word": "Orange",
    "urdu": "مالٹا",
    "definition": "Orange — اردو معنی: مالٹا"
  },
  {
    "word": "Ordinary",
    "urdu": "عام",
    "definition": "Ordinary — اردو معنی: عام"
  },
  {
    "word": "Organization",
    "urdu": "تنظیم",
    "definition": "Organization — اردو معنی: تنظیم"
  },
  {
    "word": "Original",
    "urdu": "اصل",
    "definition": "Original — اردو معنی: اصل"
  },
  {
    "word": "Originally",
    "urdu": "اصل میں",
    "definition": "Originally — اردو معنی: اصل میں"
  },
  {
    "word": "Other",
    "urdu": "دوسرا",
    "definition": "Other — اردو معنی: دوسرا"
  },
  {
    "word": "Otherwise",
    "urdu": "ورنہ",
    "definition": "Otherwise — اردو معنی: ورنہ"
  },
  {
    "word": "Outside",
    "urdu": "باہر",
    "definition": "Outside — اردو معنی: باہر"
  },
  {
    "word": "Owner",
    "urdu": "مالک",
    "definition": "Owner — اردو معنی: مالک"
  },
  {
    "word": "Own",
    "urdu": "اپنا",
    "definition": "Own — اردو معنی: اپنا"
  },
  {
    "word": "Page",
    "urdu": "صفحہ",
    "definition": "Page — اردو معنی: صفحہ"
  },
  {
    "word": "Painful",
    "urdu": "تکلیف دہ",
    "definition": "Painful — اردو معنی: تکلیف دہ"
  },
  {
    "word": "Paint",
    "urdu": "رنگ کرنا",
    "definition": "Paint — اردو معنی: رنگ کرنا"
  },
  {
    "word": "Painter",
    "urdu": "مصور",
    "definition": "Painter — اردو معنی: مصور"
  },
  {
    "word": "Painting",
    "urdu": "تصویر",
    "definition": "Painting — اردو معنی: تصویر"
  },
  {
    "word": "Pair",
    "urdu": "جوڑا",
    "definition": "Pair — اردو معنی: جوڑا"
  },
  {
    "word": "Paper",
    "urdu": "کاغذ",
    "definition": "Paper — اردو معنی: کاغذ"
  },
  {
    "word": "Parent",
    "urdu": "والدین",
    "definition": "Parent — اردو معنی: والدین"
  },
  {
    "word": "Park",
    "urdu": "پارک",
    "definition": "Park — اردو معنی: پارک"
  },
  {
    "word": "Parking",
    "urdu": "گاڑی کھڑی کرنے کی جگہ",
    "definition": "Parking — اردو معنی: گاڑی کھڑی کرنے کی جگہ"
  },
  {
    "word": "Part",
    "urdu": "حصہ",
    "definition": "Part — اردو معنی: حصہ"
  },
  {
    "word": "Partner",
    "urdu": "ساتھی",
    "definition": "Partner — اردو معنی: ساتھی"
  },
  {
    "word": "Party",
    "urdu": "دعوت",
    "definition": "Party — اردو معنی: دعوت"
  },
  {
    "word": "Pass",
    "urdu": "گزرنا",
    "definition": "Pass — اردو معنی: گزرنا"
  },
  {
    "word": "Passenger",
    "urdu": "مسافر",
    "definition": "Passenger — اردو معنی: مسافر"
  },
  {
    "word": "Past",
    "urdu": "ماضی",
    "definition": "Past — اردو معنی: ماضی"
  },
  {
    "word": "Path",
    "urdu": "راستہ",
    "definition": "Path — اردو معنی: راستہ"
  },
  {
    "word": "Patient",
    "urdu": "مریض",
    "definition": "Patient — اردو معنی: مریض"
  },
  {
    "word": "Pattern",
    "urdu": "نمونہ",
    "definition": "Pattern — اردو معنی: نمونہ"
  },
  {
    "word": "Pay",
    "urdu": "ادا کرنا",
    "definition": "Pay — اردو معنی: ادا کرنا"
  },
  {
    "word": "Payment",
    "urdu": "ادائیگی",
    "definition": "Payment — اردو معنی: ادائیگی"
  },
  {
    "word": "Peaceful",
    "urdu": "پرامن",
    "definition": "Peaceful — اردو معنی: پرامن"
  },
  {
    "word": "Pen",
    "urdu": "قلم",
    "definition": "Pen — اردو معنی: قلم"
  },
  {
    "word": "Pencil",
    "urdu": "پنسل",
    "definition": "Pencil — اردو معنی: پنسل"
  },
  {
    "word": "Pepper",
    "urdu": "کالی مرچ",
    "definition": "Pepper — اردو معنی: کالی مرچ"
  },
  {
    "word": "Perfectly",
    "urdu": "بالکل درست",
    "definition": "Perfectly — اردو معنی: بالکل درست"
  },
  {
    "word": "Perform",
    "urdu": "انجام دینا",
    "definition": "Perform — اردو معنی: انجام دینا"
  },
  {
    "word": "Performance",
    "urdu": "کارکردگی",
    "definition": "Performance — اردو معنی: کارکردگی"
  },
  {
    "word": "Perhaps",
    "urdu": "شاید",
    "definition": "Perhaps — اردو معنی: شاید"
  },
  {
    "word": "Period",
    "urdu": "مدت",
    "definition": "Period — اردو معنی: مدت"
  },
  {
    "word": "Person",
    "urdu": "شخص",
    "definition": "Person — اردو معنی: شخص"
  },
  {
    "word": "Personal",
    "urdu": "ذاتی",
    "definition": "Personal — اردو معنی: ذاتی"
  },
  {
    "word": "Personality",
    "urdu": "شخصیت",
    "definition": "Personality — اردو معنی: شخصیت"
  },
  {
    "word": "Phone",
    "urdu": "فون",
    "definition": "Phone — اردو معنی: فون"
  },
  {
    "word": "Photo",
    "urdu": "تصویر",
    "definition": "Photo — اردو معنی: تصویر"
  },
  {
    "word": "Photograph",
    "urdu": "تصویر",
    "definition": "Photograph — اردو معنی: تصویر"
  },
  {
    "word": "Photographer",
    "urdu": "فوٹوگرافر",
    "definition": "Photographer — اردو معنی: فوٹوگرافر"
  },
  {
    "word": "Physical",
    "urdu": "جسمانی",
    "definition": "Physical — اردو معنی: جسمانی"
  },
  {
    "word": "Picture",
    "urdu": "تصویر",
    "definition": "Picture — اردو معنی: تصویر"
  },
  {
    "word": "Piece",
    "urdu": "ٹکڑا",
    "definition": "Piece — اردو معنی: ٹکڑا"
  },
  {
    "word": "Pillow",
    "urdu": "تکیہ",
    "definition": "Pillow — اردو معنی: تکیہ"
  },
  {
    "word": "Place",
    "urdu": "جگہ",
    "definition": "Place — اردو معنی: جگہ"
  },
  {
    "word": "Plane",
    "urdu": "ہوائی جہاز",
    "definition": "Plane — اردو معنی: ہوائی جہاز"
  },
  {
    "word": "Plastic",
    "urdu": "پلاسٹک",
    "definition": "Plastic — اردو معنی: پلاسٹک"
  },
  {
    "word": "Plate",
    "urdu": "پلیٹ",
    "definition": "Plate — اردو معنی: پلیٹ"
  },
  {
    "word": "Play",
    "urdu": "کھیلنا",
    "definition": "Play — اردو معنی: کھیلنا"
  },
  {
    "word": "Player",
    "urdu": "کھلاڑی",
    "definition": "Player — اردو معنی: کھلاڑی"
  },
  {
    "word": "Pleasant",
    "urdu": "خوشگوار",
    "definition": "Pleasant — اردو معنی: خوشگوار"
  },
  {
    "word": "Please",
    "urdu": "براہ کرم",
    "definition": "Please — اردو معنی: براہ کرم"
  },
  {
    "word": "Pleased",
    "urdu": "خوش",
    "definition": "Pleased — اردو معنی: خوش"
  },
  {
    "word": "Plenty",
    "urdu": "بہت زیادہ",
    "definition": "Plenty — اردو معنی: بہت زیادہ"
  },
  {
    "word": "Plug",
    "urdu": "پلگ",
    "definition": "Plug — اردو معنی: پلگ"
  },
  {
    "word": "Point",
    "urdu": "نکتہ",
    "definition": "Point — اردو معنی: نکتہ"
  },
  {
    "word": "Police",
    "urdu": "پولیس",
    "definition": "Police — اردو معنی: پولیس"
  },
  {
    "word": "Policeman",
    "urdu": "پولیس اہلکار",
    "definition": "Policeman — اردو معنی: پولیس اہلکار"
  },
  {
    "word": "Policy",
    "urdu": "پالیسی",
    "definition": "Policy — اردو معنی: پالیسی"
  },
  {
    "word": "Politely",
    "urdu": "ادب سے",
    "definition": "Politely — اردو معنی: ادب سے"
  },
  {
    "word": "Politics",
    "urdu": "سیاست",
    "definition": "Politics — اردو معنی: سیاست"
  },
  {
    "word": "Poor",
    "urdu": "غریب",
    "definition": "Poor — اردو معنی: غریب"
  },
  {
    "word": "Popular",
    "urdu": "مقبول",
    "definition": "Popular — اردو معنی: مقبول"
  },
  {
    "word": "Population",
    "urdu": "آبادی",
    "definition": "Population — اردو معنی: آبادی"
  },
  {
    "word": "Position",
    "urdu": "مقام",
    "definition": "Position — اردو معنی: مقام"
  },
  {
    "word": "Possibly",
    "urdu": "ممکنہ طور پر",
    "definition": "Possibly — اردو معنی: ممکنہ طور پر"
  },
  {
    "word": "Post",
    "urdu": "ڈاک",
    "definition": "Post — اردو معنی: ڈاک"
  },
  {
    "word": "Poster",
    "urdu": "اشتہار",
    "definition": "Poster — اردو معنی: اشتہار"
  },
  {
    "word": "Power",
    "urdu": "طاقت",
    "definition": "Power — اردو معنی: طاقت"
  },
  {
    "word": "Powerful",
    "urdu": "طاقتور",
    "definition": "Powerful — اردو معنی: طاقتور"
  },
  {
    "word": "Practise",
    "urdu": "مشق کرنا",
    "definition": "Practise — اردو معنی: مشق کرنا"
  },
  {
    "word": "Prefer",
    "urdu": "ترجیح دینا",
    "definition": "Prefer — اردو معنی: ترجیح دینا"
  },
  {
    "word": "Prepared",
    "urdu": "تیار",
    "definition": "Prepared — اردو معنی: تیار"
  },
  {
    "word": "Presentation",
    "urdu": "پیشکش",
    "definition": "Presentation — اردو معنی: پیشکش"
  },
  {
    "word": "President",
    "urdu": "صدر",
    "definition": "President — اردو معنی: صدر"
  },
  {
    "word": "Press",
    "urdu": "دبانا",
    "definition": "Press — اردو معنی: دبانا"
  },
  {
    "word": "Pressure",
    "urdu": "دباؤ",
    "definition": "Pressure — اردو معنی: دباؤ"
  },
  {
    "word": "Pretty",
    "urdu": "خوبصورت",
    "definition": "Pretty — اردو معنی: خوبصورت"
  },
  {
    "word": "Price",
    "urdu": "قیمت",
    "definition": "Price — اردو معنی: قیمت"
  },
  {
    "word": "Pride",
    "urdu": "فخر",
    "definition": "Pride — اردو معنی: فخر"
  },
  {
    "word": "Primary",
    "urdu": "بنیادی",
    "definition": "Primary — اردو معنی: بنیادی"
  },
  {
    "word": "Print",
    "urdu": "چھاپنا",
    "definition": "Print — اردو معنی: چھاپنا"
  },
  {
    "word": "Printer",
    "urdu": "پرنٹر",
    "definition": "Printer — اردو معنی: پرنٹر"
  },
  {
    "word": "Private",
    "urdu": "نجی",
    "definition": "Private — اردو معنی: نجی"
  },
  {
    "word": "Probably",
    "urdu": "غالباً",
    "definition": "Probably — اردو معنی: غالباً"
  },
  {
    "word": "Process",
    "urdu": "عمل",
    "definition": "Process — اردو معنی: عمل"
  },
  {
    "word": "Produce",
    "urdu": "پیدا کرنا",
    "definition": "Produce — اردو معنی: پیدا کرنا"
  },
  {
    "word": "Product",
    "urdu": "مصنوعات",
    "definition": "Product — اردو معنی: مصنوعات"
  },
  {
    "word": "Production",
    "urdu": "پیداوار",
    "definition": "Production — اردو معنی: پیداوار"
  },
  {
    "word": "Professional",
    "urdu": "پیشہ ور",
    "definition": "Professional — اردو معنی: پیشہ ور"
  },
  {
    "word": "Professor",
    "urdu": "پروفیسر",
    "definition": "Professor — اردو معنی: پروفیسر"
  },
  {
    "word": "Profile",
    "urdu": "پروفائل",
    "definition": "Profile — اردو معنی: پروفائل"
  },
  {
    "word": "Program",
    "urdu": "پروگرام",
    "definition": "Program — اردو معنی: پروگرام"
  },
  {
    "word": "Progress",
    "urdu": "ترقی",
    "definition": "Progress — اردو معنی: ترقی"
  },
  {
    "word": "Project",
    "urdu": "منصوبہ",
    "definition": "Project — اردو معنی: منصوبہ"
  },
  {
    "word": "Proper",
    "urdu": "مناسب",
    "definition": "Proper — اردو معنی: مناسب"
  },
  {
    "word": "Properly",
    "urdu": "درست طریقے سے",
    "definition": "Properly — اردو معنی: درست طریقے سے"
  },
  {
    "word": "Property",
    "urdu": "جائیداد",
    "definition": "Property — اردو معنی: جائیداد"
  },
  {
    "word": "Protect",
    "urdu": "حفاظت کرنا",
    "definition": "Protect — اردو معنی: حفاظت کرنا"
  },
  {
    "word": "Protection",
    "urdu": "تحفظ",
    "definition": "Protection — اردو معنی: تحفظ"
  },
  {
    "word": "Prove",
    "urdu": "ثابت کرنا",
    "definition": "Prove — اردو معنی: ثابت کرنا"
  },
  {
    "word": "Provide",
    "urdu": "فراہم کرنا",
    "definition": "Provide — اردو معنی: فراہم کرنا"
  },
  {
    "word": "Public",
    "urdu": "عوامی",
    "definition": "Public — اردو معنی: عوامی"
  },
  {
    "word": "Publish",
    "urdu": "شائع کرنا",
    "definition": "Publish — اردو معنی: شائع کرنا"
  },
  {
    "word": "Pull",
    "urdu": "کھینچنا",
    "definition": "Pull — اردو معنی: کھینچنا"
  },
  {
    "word": "Push",
    "urdu": "دھکیلنا",
    "definition": "Push — اردو معنی: دھکیلنا"
  },
  {
    "word": "Put",
    "urdu": "رکھنا",
    "definition": "Put — اردو معنی: رکھنا"
  },
  {
    "word": "Quality",
    "urdu": "معیار",
    "definition": "Quality — اردو معنی: معیار"
  },
  {
    "word": "Quantity",
    "urdu": "مقدار",
    "definition": "Quantity — اردو معنی: مقدار"
  },
  {
    "word": "Quarter",
    "urdu": "چوتھائی",
    "definition": "Quarter — اردو معنی: چوتھائی"
  },
  {
    "word": "Quick",
    "urdu": "تیز",
    "definition": "Quick — اردو معنی: تیز"
  },
  {
    "word": "Quickly",
    "urdu": "جلدی سے",
    "definition": "Quickly — اردو معنی: جلدی سے"
  },
  {
    "word": "Quietly",
    "urdu": "خاموشی سے",
    "definition": "Quietly — اردو معنی: خاموشی سے"
  },
  {
    "word": "Quite",
    "urdu": "کافی",
    "definition": "Quite — اردو معنی: کافی"
  },
  {
    "word": "Radio",
    "urdu": "ریڈیو",
    "definition": "Radio — اردو معنی: ریڈیو"
  },
  {
    "word": "Rain",
    "urdu": "بارش",
    "definition": "Rain — اردو معنی: بارش"
  },
  {
    "word": "Raincoat",
    "urdu": "برساتی",
    "definition": "Raincoat — اردو معنی: برساتی"
  },
  {
    "word": "Rainy",
    "urdu": "بارش والا",
    "definition": "Rainy — اردو معنی: بارش والا"
  },
  {
    "word": "Raise",
    "urdu": "اٹھانا",
    "definition": "Raise — اردو معنی: اٹھانا"
  },
  {
    "word": "Range",
    "urdu": "حد",
    "definition": "Range — اردو معنی: حد"
  },
  {
    "word": "Rare",
    "urdu": "نایاب",
    "definition": "Rare — اردو معنی: نایاب"
  },
  {
    "word": "Rarely",
    "urdu": "شاذ و نادر",
    "definition": "Rarely — اردو معنی: شاذ و نادر"
  },
  {
    "word": "Rate",
    "urdu": "شرح",
    "definition": "Rate — اردو معنی: شرح"
  },
  {
    "word": "Rather",
    "urdu": "بلکہ",
    "definition": "Rather — اردو معنی: بلکہ"
  },
  {
    "word": "Reader",
    "urdu": "قاری",
    "definition": "Reader — اردو معنی: قاری"
  },
  {
    "word": "Reading",
    "urdu": "پڑھائی",
    "definition": "Reading — اردو معنی: پڑھائی"
  },
  {
    "word": "Ready",
    "urdu": "تیار",
    "definition": "Ready — اردو معنی: تیار"
  },
  {
    "word": "Reality",
    "urdu": "حقیقت",
    "definition": "Reality — اردو معنی: حقیقت"
  },
  {
    "word": "Realize",
    "urdu": "احساس کرنا",
    "definition": "Realize — اردو معنی: احساس کرنا"
  },
  {
    "word": "Really",
    "urdu": "واقعی",
    "definition": "Really — اردو معنی: واقعی"
  },
  {
    "word": "Reason",
    "urdu": "وجہ",
    "definition": "Reason — اردو معنی: وجہ"
  },
  {
    "word": "Reasonable",
    "urdu": "مناسب",
    "definition": "Reasonable — اردو معنی: مناسب"
  },
  {
    "word": "Recent",
    "urdu": "حالیہ",
    "definition": "Recent — اردو معنی: حالیہ"
  },
  {
    "word": "Recently",
    "urdu": "حال ہی میں",
    "definition": "Recently — اردو معنی: حال ہی میں"
  },
  {
    "word": "Reception",
    "urdu": "استقبالیہ",
    "definition": "Reception — اردو معنی: استقبالیہ"
  },
  {
    "word": "Record",
    "urdu": "ریکارڈ",
    "definition": "Record — اردو معنی: ریکارڈ"
  },
  {
    "word": "Red",
    "urdu": "سرخ",
    "definition": "Red — اردو معنی: سرخ"
  },
  {
    "word": "Reduce",
    "urdu": "کم کرنا",
    "definition": "Reduce — اردو معنی: کم کرنا"
  },
  {
    "word": "Refer",
    "urdu": "حوالہ دینا",
    "definition": "Refer — اردو معنی: حوالہ دینا"
  },
  {
    "word": "Reference",
    "urdu": "حوالہ",
    "definition": "Reference — اردو معنی: حوالہ"
  },
  {
    "word": "Reflect",
    "urdu": "عکس دکھانا",
    "definition": "Reflect — اردو معنی: عکس دکھانا"
  },
  {
    "word": "Refuse",
    "urdu": "انکار کرنا",
    "definition": "Refuse — اردو معنی: انکار کرنا"
  },
  {
    "word": "Regard",
    "urdu": "خیال",
    "definition": "Regard — اردو معنی: خیال"
  },
  {
    "word": "Regular",
    "urdu": "باقاعدہ",
    "definition": "Regular — اردو معنی: باقاعدہ"
  },
  {
    "word": "Regularly",
    "urdu": "باقاعدگی سے",
    "definition": "Regularly — اردو معنی: باقاعدگی سے"
  },
  {
    "word": "Relationship",
    "urdu": "رشتہ",
    "definition": "Relationship — اردو معنی: رشتہ"
  },
  {
    "word": "Relative",
    "urdu": "رشتہ دار",
    "definition": "Relative — اردو معنی: رشتہ دار"
  },
  {
    "word": "Relax",
    "urdu": "آرام کرنا",
    "definition": "Relax — اردو معنی: آرام کرنا"
  },
  {
    "word": "Relaxed",
    "urdu": "پرسکون",
    "definition": "Relaxed — اردو معنی: پرسکون"
  },
  {
    "word": "Release",
    "urdu": "جاری کرنا",
    "definition": "Release — اردو معنی: جاری کرنا"
  },
  {
    "word": "Remain",
    "urdu": "باقی رہنا",
    "definition": "Remain — اردو معنی: باقی رہنا"
  },
  {
    "word": "Remember",
    "urdu": "یاد رکھنا",
    "definition": "Remember — اردو معنی: یاد رکھنا"
  },
  {
    "word": "Remind",
    "urdu": "یاد دلانا",
    "definition": "Remind — اردو معنی: یاد دلانا"
  },
  {
    "word": "Remove",
    "urdu": "ہٹانا",
    "definition": "Remove — اردو معنی: ہٹانا"
  },
  {
    "word": "Rent",
    "urdu": "کرایہ",
    "definition": "Rent — اردو معنی: کرایہ"
  },
  {
    "word": "Repair",
    "urdu": "مرمت کرنا",
    "definition": "Repair — اردو معنی: مرمت کرنا"
  },
  {
    "word": "Repeat",
    "urdu": "دہرانا",
    "definition": "Repeat — اردو معنی: دہرانا"
  },
  {
    "word": "Reply",
    "urdu": "جواب دینا",
    "definition": "Reply — اردو معنی: جواب دینا"
  },
  {
    "word": "Report",
    "urdu": "رپورٹ",
    "definition": "Report — اردو معنی: رپورٹ"
  },
  {
    "word": "Reporter",
    "urdu": "نامہ نگار",
    "definition": "Reporter — اردو معنی: نامہ نگار"
  },
  {
    "word": "Request",
    "urdu": "درخواست",
    "definition": "Request — اردو معنی: درخواست"
  },
  {
    "word": "Require",
    "urdu": "ضرورت ہونا",
    "definition": "Require — اردو معنی: ضرورت ہونا"
  },
  {
    "word": "Research",
    "urdu": "تحقیق",
    "definition": "Research — اردو معنی: تحقیق"
  },
  {
    "word": "Researcher",
    "urdu": "محقق",
    "definition": "Researcher — اردو معنی: محقق"
  },
  {
    "word": "Respectful",
    "urdu": "باادب",
    "definition": "Respectful — اردو معنی: باادب"
  },
  {
    "word": "Responsible",
    "urdu": "ذمہ دار",
    "definition": "Responsible — اردو معنی: ذمہ دار"
  },
  {
    "word": "Restaurant",
    "urdu": "ریستوران",
    "definition": "Restaurant — اردو معنی: ریستوران"
  },
  {
    "word": "Return",
    "urdu": "واپس آنا",
    "definition": "Return — اردو معنی: واپس آنا"
  },
  {
    "word": "Review",
    "urdu": "جائزہ",
    "definition": "Review — اردو معنی: جائزہ"
  },
  {
    "word": "Rich",
    "urdu": "امیر",
    "definition": "Rich — اردو معنی: امیر"
  },
  {
    "word": "Ride",
    "urdu": "سواری کرنا",
    "definition": "Ride — اردو معنی: سواری کرنا"
  },
  {
    "word": "Rightly",
    "urdu": "درست طور پر",
    "definition": "Rightly — اردو معنی: درست طور پر"
  },
  {
    "word": "Ring",
    "urdu": "انگوٹھی",
    "definition": "Ring — اردو معنی: انگوٹھی"
  },
  {
    "word": "Rise",
    "urdu": "اٹھنا",
    "definition": "Rise — اردو معنی: اٹھنا"
  },
  {
    "word": "Risk",
    "urdu": "خطرہ",
    "definition": "Risk — اردو معنی: خطرہ"
  },
  {
    "word": "Road",
    "urdu": "سڑک",
    "definition": "Road — اردو معنی: سڑک"
  },
  {
    "word": "Room",
    "urdu": "کمرہ",
    "definition": "Room — اردو معنی: کمرہ"
  },
  {
    "word": "Round",
    "urdu": "گول",
    "definition": "Round — اردو معنی: گول"
  },
  {
    "word": "Routine",
    "urdu": "معمول",
    "definition": "Routine — اردو معنی: معمول"
  },
  {
    "word": "Rule",
    "urdu": "اصول",
    "definition": "Rule — اردو معنی: اصول"
  },
  {
    "word": "Run",
    "urdu": "دوڑنا",
    "definition": "Run — اردو معنی: دوڑنا"
  },
  {
    "word": "Runner",
    "urdu": "دوڑنے والا",
    "definition": "Runner — اردو معنی: دوڑنے والا"
  },
  {
    "word": "Running",
    "urdu": "دوڑنا",
    "definition": "Running — اردو معنی: دوڑنا"
  },
  {
    "word": "Safely",
    "urdu": "محفوظ طریقے سے",
    "definition": "Safely — اردو معنی: محفوظ طریقے سے"
  },
  {
    "word": "Safety",
    "urdu": "حفاظت",
    "definition": "Safety — اردو معنی: حفاظت"
  },
  {
    "word": "Sail",
    "urdu": "کشتی چلانا",
    "definition": "Sail — اردو معنی: کشتی چلانا"
  },
  {
    "word": "Sale",
    "urdu": "فروخت",
    "definition": "Sale — اردو معنی: فروخت"
  },
  {
    "word": "Salt",
    "urdu": "نمک",
    "definition": "Salt — اردو معنی: نمک"
  },
  {
    "word": "Same",
    "urdu": "ایک جیسا",
    "definition": "Same — اردو معنی: ایک جیسا"
  },
  {
    "word": "Sample",
    "urdu": "نمونہ",
    "definition": "Sample — اردو معنی: نمونہ"
  },
  {
    "word": "Saving",
    "urdu": "بچت",
    "definition": "Saving — اردو معنی: بچت"
  },
  {
    "word": "Say",
    "urdu": "کہنا",
    "definition": "Say — اردو معنی: کہنا"
  },
  {
    "word": "School",
    "urdu": "اسکول",
    "definition": "School — اردو معنی: اسکول"
  },
  {
    "word": "Scientist",
    "urdu": "سائنس دان",
    "definition": "Scientist — اردو معنی: سائنس دان"
  },
  {
    "word": "Screen",
    "urdu": "اسکرین",
    "definition": "Screen — اردو معنی: اسکرین"
  },
  {
    "word": "Sea",
    "urdu": "سمندر",
    "definition": "Sea — اردو معنی: سمندر"
  },
  {
    "word": "Search",
    "urdu": "تلاش",
    "definition": "Search — اردو معنی: تلاش"
  },
  {
    "word": "Seat",
    "urdu": "نشست",
    "definition": "Seat — اردو معنی: نشست"
  },
  {
    "word": "Second",
    "urdu": "دوسرا",
    "definition": "Second — اردو معنی: دوسرا"
  },
  {
    "word": "Secretary",
    "urdu": "سیکرٹری",
    "definition": "Secretary — اردو معنی: سیکرٹری"
  },
  {
    "word": "Section",
    "urdu": "حصہ",
    "definition": "Section — اردو معنی: حصہ"
  },
  {
    "word": "Secure",
    "urdu": "محفوظ",
    "definition": "Secure — اردو معنی: محفوظ"
  },
  {
    "word": "Security",
    "urdu": "سکیورٹی",
    "definition": "Security — اردو معنی: سکیورٹی"
  },
  {
    "word": "See",
    "urdu": "دیکھنا",
    "definition": "See — اردو معنی: دیکھنا"
  },
  {
    "word": "Seed",
    "urdu": "بیج",
    "definition": "Seed — اردو معنی: بیج"
  },
  {
    "word": "Seem",
    "urdu": "لگنا",
    "definition": "Seem — اردو معنی: لگنا"
  },
  {
    "word": "Select",
    "urdu": "منتخب کرنا",
    "definition": "Select — اردو معنی: منتخب کرنا"
  },
  {
    "word": "Selection",
    "urdu": "انتخاب",
    "definition": "Selection — اردو معنی: انتخاب"
  },
  {
    "word": "Sell",
    "urdu": "بیچنا",
    "definition": "Sell — اردو معنی: بیچنا"
  },
  {
    "word": "Seller",
    "urdu": "فروخت کرنے والا",
    "definition": "Seller — اردو معنی: فروخت کرنے والا"
  },
  {
    "word": "Send",
    "urdu": "بھیجنا",
    "definition": "Send — اردو معنی: بھیجنا"
  },
  {
    "word": "Sender",
    "urdu": "بھیجنے والا",
    "definition": "Sender — اردو معنی: بھیجنے والا"
  },
  {
    "word": "Sensible",
    "urdu": "سمجھدار",
    "definition": "Sensible — اردو معنی: سمجھدار"
  },
  {
    "word": "Sensitive",
    "urdu": "حساس",
    "definition": "Sensitive — اردو معنی: حساس"
  },
  {
    "word": "Sentence",
    "urdu": "جملہ",
    "definition": "Sentence — اردو معنی: جملہ"
  },
  {
    "word": "Separate",
    "urdu": "الگ",
    "definition": "Separate — اردو معنی: الگ"
  },
  {
    "word": "Serious",
    "urdu": "سنجیدہ",
    "definition": "Serious — اردو معنی: سنجیدہ"
  },
  {
    "word": "Seriously",
    "urdu": "سنجیدگی سے",
    "definition": "Seriously — اردو معنی: سنجیدگی سے"
  },
  {
    "word": "Serve",
    "urdu": "خدمت کرنا",
    "definition": "Serve — اردو معنی: خدمت کرنا"
  },
  {
    "word": "Service",
    "urdu": "خدمت",
    "definition": "Service — اردو معنی: خدمت"
  },
  {
    "word": "Servant",
    "urdu": "نوکر",
    "definition": "Servant — اردو معنی: نوکر"
  },
  {
    "word": "Session",
    "urdu": "نشست",
    "definition": "Session — اردو معنی: نشست"
  },
  {
    "word": "Set",
    "urdu": "رکھنا",
    "definition": "Set — اردو معنی: رکھنا"
  },
  {
    "word": "Setting",
    "urdu": "ترتیب",
    "definition": "Setting — اردو معنی: ترتیب"
  },
  {
    "word": "Settle",
    "urdu": "طے کرنا",
    "definition": "Settle — اردو معنی: طے کرنا"
  },
  {
    "word": "Several",
    "urdu": "کئی",
    "definition": "Several — اردو معنی: کئی"
  },
  {
    "word": "Severe",
    "urdu": "شدید",
    "definition": "Severe — اردو معنی: شدید"
  },
  {
    "word": "Shade",
    "urdu": "سایہ",
    "definition": "Shade — اردو معنی: سایہ"
  },
  {
    "word": "Shadow",
    "urdu": "پرچھائی",
    "definition": "Shadow — اردو معنی: پرچھائی"
  },
  {
    "word": "Shake",
    "urdu": "ہلانا",
    "definition": "Shake — اردو معنی: ہلانا"
  },
  {
    "word": "Shape",
    "urdu": "شکل",
    "definition": "Shape — اردو معنی: شکل"
  },
  {
    "word": "Share",
    "urdu": "بانٹنا",
    "definition": "Share — اردو معنی: بانٹنا"
  },
  {
    "word": "Sharp",
    "urdu": "تیز",
    "definition": "Sharp — اردو معنی: تیز"
  },
  {
    "word": "Sharply",
    "urdu": "تیزی سے",
    "definition": "Sharply — اردو معنی: تیزی سے"
  },
  {
    "word": "Sheep",
    "urdu": "بھیڑ",
    "definition": "Sheep — اردو معنی: بھیڑ"
  },
  {
    "word": "Sheet",
    "urdu": "چادر",
    "definition": "Sheet — اردو معنی: چادر"
  },
  {
    "word": "Shelf",
    "urdu": "طاق",
    "definition": "Shelf — اردو معنی: طاق"
  },
  {
    "word": "Shiny",
    "urdu": "چمکدار",
    "definition": "Shiny — اردو معنی: چمکدار"
  },
  {
    "word": "Ship",
    "urdu": "جہاز",
    "definition": "Ship — اردو معنی: جہاز"
  },
  {
    "word": "Shirt",
    "urdu": "قمیض",
    "definition": "Shirt — اردو معنی: قمیض"
  },
  {
    "word": "Shoe",
    "urdu": "جوتا",
    "definition": "Shoe — اردو معنی: جوتا"
  },
  {
    "word": "Shop",
    "urdu": "دکان",
    "definition": "Shop — اردو معنی: دکان"
  },
  {
    "word": "Shopkeeper",
    "urdu": "دکاندار",
    "definition": "Shopkeeper — اردو معنی: دکاندار"
  },
  {
    "word": "Shopping",
    "urdu": "خریداری",
    "definition": "Shopping — اردو معنی: خریداری"
  },
  {
    "word": "Shortly",
    "urdu": "جلد",
    "definition": "Shortly — اردو معنی: جلد"
  },
  {
    "word": "Shortage",
    "urdu": "کمی",
    "definition": "Shortage — اردو معنی: کمی"
  },
  {
    "word": "Shoulder",
    "urdu": "کندھا",
    "definition": "Shoulder — اردو معنی: کندھا"
  },
  {
    "word": "Shout",
    "urdu": "چلانا",
    "definition": "Shout — اردو معنی: چلانا"
  },
  {
    "word": "Show",
    "urdu": "دکھانا",
    "definition": "Show — اردو معنی: دکھانا"
  },
  {
    "word": "Shower",
    "urdu": "پھوار",
    "definition": "Shower — اردو معنی: پھوار"
  },
  {
    "word": "Shy",
    "urdu": "شرمیلا",
    "definition": "Shy — اردو معنی: شرمیلا"
  },
  {
    "word": "Sick",
    "urdu": "بیمار",
    "definition": "Sick — اردو معنی: بیمار"
  },
  {
    "word": "Sickness",
    "urdu": "بیماری",
    "definition": "Sickness — اردو معنی: بیماری"
  },
  {
    "word": "Side",
    "urdu": "طرف",
    "definition": "Side — اردو معنی: طرف"
  },
  {
    "word": "Sign",
    "urdu": "نشانی",
    "definition": "Sign — اردو معنی: نشانی"
  },
  {
    "word": "Signal",
    "urdu": "اشارہ",
    "definition": "Signal — اردو معنی: اشارہ"
  },
  {
    "word": "Signature",
    "urdu": "دستخط",
    "definition": "Signature — اردو معنی: دستخط"
  },
  {
    "word": "Significant",
    "urdu": "اہم",
    "definition": "Significant — اردو معنی: اہم"
  },
  {
    "word": "Significantly",
    "urdu": "نمایاں طور پر",
    "definition": "Significantly — اردو معنی: نمایاں طور پر"
  },
  {
    "word": "Silence",
    "urdu": "خاموشی",
    "definition": "Silence — اردو معنی: خاموشی"
  },
  {
    "word": "Silent",
    "urdu": "خاموش",
    "definition": "Silent — اردو معنی: خاموش"
  },
  {
    "word": "Silk",
    "urdu": "ریشم",
    "definition": "Silk — اردو معنی: ریشم"
  },
  {
    "word": "Silver",
    "urdu": "چاندی",
    "definition": "Silver — اردو معنی: چاندی"
  },
  {
    "word": "Similar",
    "urdu": "ملتا جلتا",
    "definition": "Similar — اردو معنی: ملتا جلتا"
  },
  {
    "word": "Similarly",
    "urdu": "اسی طرح",
    "definition": "Similarly — اردو معنی: اسی طرح"
  },
  {
    "word": "Simple",
    "urdu": "سادہ",
    "definition": "Simple — اردو معنی: سادہ"
  },
  {
    "word": "Simply",
    "urdu": "سادگی سے",
    "definition": "Simply — اردو معنی: سادگی سے"
  },
  {
    "word": "Since",
    "urdu": "جب سے",
    "definition": "Since — اردو معنی: جب سے"
  },
  {
    "word": "Sing",
    "urdu": "گانا",
    "definition": "Sing — اردو معنی: گانا"
  },
  {
    "word": "Single",
    "urdu": "اکیلا",
    "definition": "Single — اردو معنی: اکیلا"
  },
  {
    "word": "Singer",
    "urdu": "گلوکار",
    "definition": "Singer — اردو معنی: گلوکار"
  },
  {
    "word": "Singing",
    "urdu": "گانا",
    "definition": "Singing — اردو معنی: گانا"
  },
  {
    "word": "Sit",
    "urdu": "بیٹھنا",
    "definition": "Sit — اردو معنی: بیٹھنا"
  },
  {
    "word": "Site",
    "urdu": "جگہ",
    "definition": "Site — اردو معنی: جگہ"
  },
  {
    "word": "Situation",
    "urdu": "صورتحال",
    "definition": "Situation — اردو معنی: صورتحال"
  },
  {
    "word": "Size",
    "urdu": "سائز",
    "definition": "Size — اردو معنی: سائز"
  },
  {
    "word": "Skilled",
    "urdu": "ماہر",
    "definition": "Skilled — اردو معنی: ماہر"
  },
  {
    "word": "Skin",
    "urdu": "جلد",
    "definition": "Skin — اردو معنی: جلد"
  },
  {
    "word": "Skirt",
    "urdu": "اسکرٹ",
    "definition": "Skirt — اردو معنی: اسکرٹ"
  },
  {
    "word": "Sleep",
    "urdu": "سونا",
    "definition": "Sleep — اردو معنی: سونا"
  },
  {
    "word": "Sleepy",
    "urdu": "نیند آنا",
    "definition": "Sleepy — اردو معنی: نیند آنا"
  },
  {
    "word": "Sleeping",
    "urdu": "سونا",
    "definition": "Sleeping — اردو معنی: سونا"
  },
  {
    "word": "Slow",
    "urdu": "آہستہ",
    "definition": "Slow — اردو معنی: آہستہ"
  },
  {
    "word": "Slowly",
    "urdu": "آہستہ سے",
    "definition": "Slowly — اردو معنی: آہستہ سے"
  },
  {
    "word": "Small",
    "urdu": "چھوٹا",
    "definition": "Small — اردو معنی: چھوٹا"
  },
  {
    "word": "Smart",
    "urdu": "ذہین",
    "definition": "Smart — اردو معنی: ذہین"
  },
  {
    "word": "Smartly",
    "urdu": "سمجھداری سے",
    "definition": "Smartly — اردو معنی: سمجھداری سے"
  },
  {
    "word": "Smell",
    "urdu": "بو",
    "definition": "Smell — اردو معنی: بو"
  },
  {
    "word": "Smile",
    "urdu": "مسکراہٹ",
    "definition": "Smile — اردو معنی: مسکراہٹ"
  },
  {
    "word": "Smoke",
    "urdu": "دھواں",
    "definition": "Smoke — اردو معنی: دھواں"
  },
  {
    "word": "Smoking",
    "urdu": "تمباکو نوشی",
    "definition": "Smoking — اردو معنی: تمباکو نوشی"
  },
  {
    "word": "Smooth",
    "urdu": "ہموار",
    "definition": "Smooth — اردو معنی: ہموار"
  },
  {
    "word": "Softly",
    "urdu": "نرمی سے",
    "definition": "Softly — اردو معنی: نرمی سے"
  },
  {
    "word": "Software",
    "urdu": "سافٹ ویئر",
    "definition": "Software — اردو معنی: سافٹ ویئر"
  },
  {
    "word": "Soil",
    "urdu": "مٹی",
    "definition": "Soil — اردو معنی: مٹی"
  },
  {
    "word": "Soldier",
    "urdu": "سپاہی",
    "definition": "Soldier — اردو معنی: سپاہی"
  },
  {
    "word": "Solve",
    "urdu": "حل کرنا",
    "definition": "Solve — اردو معنی: حل کرنا"
  },
  {
    "word": "Some",
    "urdu": "کچھ",
    "definition": "Some — اردو معنی: کچھ"
  },
  {
    "word": "Somebody",
    "urdu": "کوئی شخص",
    "definition": "Somebody — اردو معنی: کوئی شخص"
  },
  {
    "word": "Somehow",
    "urdu": "کسی نہ کسی طرح",
    "definition": "Somehow — اردو معنی: کسی نہ کسی طرح"
  },
  {
    "word": "Someone",
    "urdu": "کوئی",
    "definition": "Someone — اردو معنی: کوئی"
  },
  {
    "word": "Something",
    "urdu": "کچھ",
    "definition": "Something — اردو معنی: کچھ"
  },
  {
    "word": "Somewhere",
    "urdu": "کہیں",
    "definition": "Somewhere — اردو معنی: کہیں"
  },
  {
    "word": "Son",
    "urdu": "بیٹا",
    "definition": "Son — اردو معنی: بیٹا"
  },
  {
    "word": "Soon",
    "urdu": "جلد",
    "definition": "Soon — اردو معنی: جلد"
  },
  {
    "word": "Sorry",
    "urdu": "معذرت",
    "definition": "Sorry — اردو معنی: معذرت"
  },
  {
    "word": "Sort",
    "urdu": "قسم",
    "definition": "Sort — اردو معنی: قسم"
  },
  {
    "word": "Sound",
    "urdu": "آواز",
    "definition": "Sound — اردو معنی: آواز"
  },
  {
    "word": "Soup",
    "urdu": "سوپ",
    "definition": "Soup — اردو معنی: سوپ"
  },
  {
    "word": "Sour",
    "urdu": "کھٹا",
    "definition": "Sour — اردو معنی: کھٹا"
  },
  {
    "word": "South",
    "urdu": "جنوب",
    "definition": "South — اردو معنی: جنوب"
  },
  {
    "word": "Space",
    "urdu": "جگہ",
    "definition": "Space — اردو معنی: جگہ"
  },
  {
    "word": "Spare",
    "urdu": "اضافی",
    "definition": "Spare — اردو معنی: اضافی"
  },
  {
    "word": "Speak",
    "urdu": "بولنا",
    "definition": "Speak — اردو معنی: بولنا"
  },
  {
    "word": "Speaker",
    "urdu": "مقرر",
    "definition": "Speaker — اردو معنی: مقرر"
  },
  {
    "word": "Speaking",
    "urdu": "بولنا",
    "definition": "Speaking — اردو معنی: بولنا"
  },
  {
    "word": "Specially",
    "urdu": "خاص طور پر",
    "definition": "Specially — اردو معنی: خاص طور پر"
  },
  {
    "word": "Specialist",
    "urdu": "ماہر",
    "definition": "Specialist — اردو معنی: ماہر"
  },
  {
    "word": "Species",
    "urdu": "نوع",
    "definition": "Species — اردو معنی: نوع"
  },
  {
    "word": "Specific",
    "urdu": "مخصوص",
    "definition": "Specific — اردو معنی: مخصوص"
  },
  {
    "word": "Specifically",
    "urdu": "خاص طور پر",
    "definition": "Specifically — اردو معنی: خاص طور پر"
  },
  {
    "word": "Speed",
    "urdu": "رفتار",
    "definition": "Speed — اردو معنی: رفتار"
  },
  {
    "word": "Spell",
    "urdu": "ہجے کرنا",
    "definition": "Spell — اردو معنی: ہجے کرنا"
  },
  {
    "word": "Spelling",
    "urdu": "ہجے",
    "definition": "Spelling — اردو معنی: ہجے"
  },
  {
    "word": "Spend",
    "urdu": "خرچ کرنا",
    "definition": "Spend — اردو معنی: خرچ کرنا"
  },
  {
    "word": "Spending",
    "urdu": "خرچ",
    "definition": "Spending — اردو معنی: خرچ"
  },
  {
    "word": "Spice",
    "urdu": "مصالحہ",
    "definition": "Spice — اردو معنی: مصالحہ"
  },
  {
    "word": "Spicy",
    "urdu": "مصالحے دار",
    "definition": "Spicy — اردو معنی: مصالحے دار"
  },
  {
    "word": "Spider",
    "urdu": "مکڑی",
    "definition": "Spider — اردو معنی: مکڑی"
  },
  {
    "word": "Spin",
    "urdu": "گھمانا",
    "definition": "Spin — اردو معنی: گھمانا"
  },
  {
    "word": "Spiritual",
    "urdu": "روحانی",
    "definition": "Spiritual — اردو معنی: روحانی"
  },
  {
    "word": "Spoon",
    "urdu": "چمچ",
    "definition": "Spoon — اردو معنی: چمچ"
  },
  {
    "word": "Sport",
    "urdu": "کھیل",
    "definition": "Sport — اردو معنی: کھیل"
  },
  {
    "word": "Sportsman",
    "urdu": "کھلاڑی",
    "definition": "Sportsman — اردو معنی: کھلاڑی"
  },
  {
    "word": "Spot",
    "urdu": "دھبہ",
    "definition": "Spot — اردو معنی: دھبہ"
  },
  {
    "word": "Spread",
    "urdu": "پھیلانا",
    "definition": "Spread — اردو معنی: پھیلانا"
  },
  {
    "word": "Spring",
    "urdu": "بہار",
    "definition": "Spring — اردو معنی: بہار"
  },
  {
    "word": "Square",
    "urdu": "چوکور",
    "definition": "Square — اردو معنی: چوکور"
  },
  {
    "word": "Staff",
    "urdu": "عملہ",
    "definition": "Staff — اردو معنی: عملہ"
  },
  {
    "word": "Stage",
    "urdu": "مرحلہ",
    "definition": "Stage — اردو معنی: مرحلہ"
  },
  {
    "word": "Stairs",
    "urdu": "سیڑھیاں",
    "definition": "Stairs — اردو معنی: سیڑھیاں"
  },
  {
    "word": "Stamp",
    "urdu": "ڈاک ٹکٹ",
    "definition": "Stamp — اردو معنی: ڈاک ٹکٹ"
  },
  {
    "word": "Stand",
    "urdu": "کھڑا ہونا",
    "definition": "Stand — اردو معنی: کھڑا ہونا"
  },
  {
    "word": "Standard",
    "urdu": "معیار",
    "definition": "Standard — اردو معنی: معیار"
  },
  {
    "word": "Star",
    "urdu": "ستارہ",
    "definition": "Star — اردو معنی: ستارہ"
  },
  {
    "word": "Start",
    "urdu": "شروع کرنا",
    "definition": "Start — اردو معنی: شروع کرنا"
  },
  {
    "word": "State",
    "urdu": "حالت",
    "definition": "State — اردو معنی: حالت"
  },
  {
    "word": "Statement",
    "urdu": "بیان",
    "definition": "Statement — اردو معنی: بیان"
  },
  {
    "word": "Station",
    "urdu": "اسٹیشن",
    "definition": "Station — اردو معنی: اسٹیشن"
  },
  {
    "word": "Stay",
    "urdu": "ٹھہرنا",
    "definition": "Stay — اردو معنی: ٹھہرنا"
  },
  {
    "word": "Steady",
    "urdu": "مستحکم",
    "definition": "Steady — اردو معنی: مستحکم"
  },
  {
    "word": "Step",
    "urdu": "قدم",
    "definition": "Step — اردو معنی: قدم"
  },
  {
    "word": "Stick",
    "urdu": "چھڑی",
    "definition": "Stick — اردو معنی: چھڑی"
  },
  {
    "word": "Still",
    "urdu": "ابھی تک",
    "definition": "Still — اردو معنی: ابھی تک"
  },
  {
    "word": "Stomach",
    "urdu": "معدہ",
    "definition": "Stomach — اردو معنی: معدہ"
  },
  {
    "word": "Stone",
    "urdu": "پتھر",
    "definition": "Stone — اردو معنی: پتھر"
  },
  {
    "word": "Stop",
    "urdu": "رکنا",
    "definition": "Stop — اردو معنی: رکنا"
  },
  {
    "word": "Store",
    "urdu": "دکان",
    "definition": "Store — اردو معنی: دکان"
  },
  {
    "word": "Storm",
    "urdu": "طوفان",
    "definition": "Storm — اردو معنی: طوفان"
  },
  {
    "word": "Story",
    "urdu": "کہانی",
    "definition": "Story — اردو معنی: کہانی"
  },
  {
    "word": "Straight",
    "urdu": "سیدھا",
    "definition": "Straight — اردو معنی: سیدھا"
  },
  {
    "word": "Straighten",
    "urdu": "سیدھا کرنا",
    "definition": "Straighten — اردو معنی: سیدھا کرنا"
  },
  {
    "word": "Strange",
    "urdu": "عجیب",
    "definition": "Strange — اردو معنی: عجیب"
  },
  {
    "word": "Stranger",
    "urdu": "اجنبی",
    "definition": "Stranger — اردو معنی: اجنبی"
  },
  {
    "word": "Strategy",
    "urdu": "حکمت عملی",
    "definition": "Strategy — اردو معنی: حکمت عملی"
  },
  {
    "word": "Street",
    "urdu": "گلی",
    "definition": "Street — اردو معنی: گلی"
  },
  {
    "word": "Strength",
    "urdu": "طاقت",
    "definition": "Strength — اردو معنی: طاقت"
  },
  {
    "word": "Stress",
    "urdu": "ذہنی دباؤ",
    "definition": "Stress — اردو معنی: ذہنی دباؤ"
  },
  {
    "word": "Strict",
    "urdu": "سخت",
    "definition": "Strict — اردو معنی: سخت"
  },
  {
    "word": "Strictly",
    "urdu": "سختی سے",
    "definition": "Strictly — اردو معنی: سختی سے"
  },
  {
    "word": "Strike",
    "urdu": "مارنا",
    "definition": "Strike — اردو معنی: مارنا"
  },
  {
    "word": "Strong",
    "urdu": "مضبوط",
    "definition": "Strong — اردو معنی: مضبوط"
  },
  {
    "word": "Strongly",
    "urdu": "مضبوطی سے",
    "definition": "Strongly — اردو معنی: مضبوطی سے"
  },
  {
    "word": "Student",
    "urdu": "طالب علم",
    "definition": "Student — اردو معنی: طالب علم"
  },
  {
    "word": "Stuff",
    "urdu": "سامان",
    "definition": "Stuff — اردو معنی: سامان"
  },
  {
    "word": "Stupid",
    "urdu": "احمق",
    "definition": "Stupid — اردو معنی: احمق"
  },
  {
    "word": "Style",
    "urdu": "انداز",
    "definition": "Style — اردو معنی: انداز"
  },
  {
    "word": "Subject",
    "urdu": "مضمون",
    "definition": "Subject — اردو معنی: مضمون"
  },
  {
    "word": "Successful",
    "urdu": "کامیاب",
    "definition": "Successful — اردو معنی: کامیاب"
  },
  {
    "word": "Successfully",
    "urdu": "کامیابی سے",
    "definition": "Successfully — اردو معنی: کامیابی سے"
  },
  {
    "word": "Sudden",
    "urdu": "اچانک",
    "definition": "Sudden — اردو معنی: اچانک"
  },
  {
    "word": "Suddenly",
    "urdu": "اچانک",
    "definition": "Suddenly — اردو معنی: اچانک"
  },
  {
    "word": "Suffer",
    "urdu": "تکلیف اٹھانا",
    "definition": "Suffer — اردو معنی: تکلیف اٹھانا"
  },
  {
    "word": "Sugar",
    "urdu": "چینی",
    "definition": "Sugar — اردو معنی: چینی"
  },
  {
    "word": "Suggest",
    "urdu": "تجویز دینا",
    "definition": "Suggest — اردو معنی: تجویز دینا"
  },
  {
    "word": "Suggestion",
    "urdu": "تجویز",
    "definition": "Suggestion — اردو معنی: تجویز"
  },
  {
    "word": "Suit",
    "urdu": "سوٹ",
    "definition": "Suit — اردو معنی: سوٹ"
  },
  {
    "word": "Suitable",
    "urdu": "موزوں",
    "definition": "Suitable — اردو معنی: موزوں"
  },
  {
    "word": "Suitcase",
    "urdu": "سوٹ کیس",
    "definition": "Suitcase — اردو معنی: سوٹ کیس"
  },
  {
    "word": "Summer",
    "urdu": "گرمیوں کا موسم",
    "definition": "Summer — اردو معنی: گرمیوں کا موسم"
  },
  {
    "word": "Sun",
    "urdu": "سورج",
    "definition": "Sun — اردو معنی: سورج"
  },
  {
    "word": "Sunday",
    "urdu": "اتوار",
    "definition": "Sunday — اردو معنی: اتوار"
  },
  {
    "word": "Sunlight",
    "urdu": "دھوپ",
    "definition": "Sunlight — اردو معنی: دھوپ"
  },
  {
    "word": "Sunny",
    "urdu": "دھوپ والا",
    "definition": "Sunny — اردو معنی: دھوپ والا"
  },
  {
    "word": "Super",
    "urdu": "زبردست",
    "definition": "Super — اردو معنی: زبردست"
  },
  {
    "word": "Supermarket",
    "urdu": "سپر مارکیٹ",
    "definition": "Supermarket — اردو معنی: سپر مارکیٹ"
  },
  {
    "word": "Supper",
    "urdu": "رات کا کھانا",
    "definition": "Supper — اردو معنی: رات کا کھانا"
  },
  {
    "word": "Supply",
    "urdu": "فراہم کرنا",
    "definition": "Supply — اردو معنی: فراہم کرنا"
  },
  {
    "word": "Support",
    "urdu": "مدد",
    "definition": "Support — اردو معنی: مدد"
  },
  {
    "word": "Supporter",
    "urdu": "حامی",
    "definition": "Supporter — اردو معنی: حامی"
  },
  {
    "word": "Supportive",
    "urdu": "مددگار",
    "definition": "Supportive — اردو معنی: مددگار"
  },
  {
    "word": "Suppose",
    "urdu": "فرض کرنا",
    "definition": "Suppose — اردو معنی: فرض کرنا"
  },
  {
    "word": "Surface",
    "urdu": "سطح",
    "definition": "Surface — اردو معنی: سطح"
  },
  {
    "word": "Surprised",
    "urdu": "حیران",
    "definition": "Surprised — اردو معنی: حیران"
  },
  {
    "word": "Surprising",
    "urdu": "حیران کن",
    "definition": "Surprising — اردو معنی: حیران کن"
  },
  {
    "word": "Surprisingly",
    "urdu": "حیرت انگیز طور پر",
    "definition": "Surprisingly — اردو معنی: حیرت انگیز طور پر"
  },
  {
    "word": "Surround",
    "urdu": "گھیرنا",
    "definition": "Surround — اردو معنی: گھیرنا"
  },
  {
    "word": "Surrounding",
    "urdu": "ارد گرد",
    "definition": "Surrounding — اردو معنی: ارد گرد"
  },
  {
    "word": "Survey",
    "urdu": "سروے",
    "definition": "Survey — اردو معنی: سروے"
  },
  {
    "word": "Survive",
    "urdu": "زندہ بچنا",
    "definition": "Survive — اردو معنی: زندہ بچنا"
  },
  {
    "word": "Swear",
    "urdu": "قسم کھانا",
    "definition": "Swear — اردو معنی: قسم کھانا"
  },
  {
    "word": "Sweater",
    "urdu": "سویٹر",
    "definition": "Sweater — اردو معنی: سویٹر"
  },
  {
    "word": "Sweet",
    "urdu": "میٹھا",
    "definition": "Sweet — اردو معنی: میٹھا"
  },
  {
    "word": "Sweetly",
    "urdu": "پیار سے",
    "definition": "Sweetly — اردو معنی: پیار سے"
  },
  {
    "word": "Sweetness",
    "urdu": "مٹھاس",
    "definition": "Sweetness — اردو معنی: مٹھاس"
  },
  {
    "word": "Swim",
    "urdu": "تیرنا",
    "definition": "Swim — اردو معنی: تیرنا"
  },
  {
    "word": "Swimming",
    "urdu": "تیراکی",
    "definition": "Swimming — اردو معنی: تیراکی"
  },
  {
    "word": "Swimmer",
    "urdu": "تیراک",
    "definition": "Swimmer — اردو معنی: تیراک"
  },
  {
    "word": "Swimming Pool",
    "urdu": "سوئمنگ پول",
    "definition": "Swimming Pool — اردو معنی: سوئمنگ پول"
  },
  {
    "word": "Switch",
    "urdu": "سوئچ",
    "definition": "Switch — اردو معنی: سوئچ"
  },
  {
    "word": "System",
    "urdu": "نظام",
    "definition": "System — اردو معنی: نظام"
  },
  {
    "word": "Table",
    "urdu": "میز",
    "definition": "Table — اردو معنی: میز"
  },
  {
    "word": "Tablet",
    "urdu": "ٹیبلٹ",
    "definition": "Tablet — اردو معنی: ٹیبلٹ"
  },
  {
    "word": "Tail",
    "urdu": "دم",
    "definition": "Tail — اردو معنی: دم"
  },
  {
    "word": "Take",
    "urdu": "لینا",
    "definition": "Take — اردو معنی: لینا"
  },
  {
    "word": "Taking",
    "urdu": "لینا",
    "definition": "Taking — اردو معنی: لینا"
  },
  {
    "word": "Talk",
    "urdu": "بات کرنا",
    "definition": "Talk — اردو معنی: بات کرنا"
  },
  {
    "word": "Talkative",
    "urdu": "باتونی",
    "definition": "Talkative — اردو معنی: باتونی"
  },
  {
    "word": "Talking",
    "urdu": "بات چیت",
    "definition": "Talking — اردو معنی: بات چیت"
  },
  {
    "word": "Tall",
    "urdu": "لمبا",
    "definition": "Tall — اردو معنی: لمبا"
  },
  {
    "word": "Tank",
    "urdu": "ٹینکی",
    "definition": "Tank — اردو معنی: ٹینکی"
  },
  {
    "word": "Tape",
    "urdu": "ٹیپ",
    "definition": "Tape — اردو معنی: ٹیپ"
  },
  {
    "word": "Task",
    "urdu": "کام",
    "definition": "Task — اردو معنی: کام"
  },
  {
    "word": "Taste",
    "urdu": "ذائقہ",
    "definition": "Taste — اردو معنی: ذائقہ"
  },
  {
    "word": "Tasty",
    "urdu": "مزے دار",
    "definition": "Tasty — اردو معنی: مزے دار"
  },
  {
    "word": "Tax",
    "urdu": "ٹیکس",
    "definition": "Tax — اردو معنی: ٹیکس"
  },
  {
    "word": "Taxi",
    "urdu": "ٹیکسی",
    "definition": "Taxi — اردو معنی: ٹیکسی"
  },
  {
    "word": "Tea",
    "urdu": "چائے",
    "definition": "Tea — اردو معنی: چائے"
  },
  {
    "word": "Teacher",
    "urdu": "استاد",
    "definition": "Teacher — اردو معنی: استاد"
  },
  {
    "word": "Teaching",
    "urdu": "تدریس",
    "definition": "Teaching — اردو معنی: تدریس"
  },
  {
    "word": "Teamwork",
    "urdu": "اجتماعی کام",
    "definition": "Teamwork — اردو معنی: اجتماعی کام"
  },
  {
    "word": "Tear",
    "urdu": "آنسو",
    "definition": "Tear — اردو معنی: آنسو"
  },
  {
    "word": "Technical",
    "urdu": "تکنیکی",
    "definition": "Technical — اردو معنی: تکنیکی"
  },
  {
    "word": "Technology",
    "urdu": "ٹیکنالوجی",
    "definition": "Technology — اردو معنی: ٹیکنالوجی"
  },
  {
    "word": "Telephone",
    "urdu": "ٹیلی فون",
    "definition": "Telephone — اردو معنی: ٹیلی فون"
  },
  {
    "word": "Television",
    "urdu": "ٹیلی ویژن",
    "definition": "Television — اردو معنی: ٹیلی ویژن"
  },
  {
    "word": "Tell",
    "urdu": "بتانا",
    "definition": "Tell — اردو معنی: بتانا"
  },
  {
    "word": "Temperature",
    "urdu": "درجہ حرارت",
    "definition": "Temperature — اردو معنی: درجہ حرارت"
  },
  {
    "word": "Temporary",
    "urdu": "عارضی",
    "definition": "Temporary — اردو معنی: عارضی"
  },
  {
    "word": "Ten",
    "urdu": "دس",
    "definition": "Ten — اردو معنی: دس"
  },
  {
    "word": "Term",
    "urdu": "مدت",
    "definition": "Term — اردو معنی: مدت"
  },
  {
    "word": "Terrible",
    "urdu": "خوفناک",
    "definition": "Terrible — اردو معنی: خوفناک"
  },
  {
    "word": "Terribly",
    "urdu": "بری طرح",
    "definition": "Terribly — اردو معنی: بری طرح"
  },
  {
    "word": "Test",
    "urdu": "امتحان",
    "definition": "Test — اردو معنی: امتحان"
  },
  {
    "word": "Testing",
    "urdu": "جانچ",
    "definition": "Testing — اردو معنی: جانچ"
  },
  {
    "word": "Text",
    "urdu": "متن",
    "definition": "Text — اردو معنی: متن"
  },
  {
    "word": "Textbook",
    "urdu": "درسی کتاب",
    "definition": "Textbook — اردو معنی: درسی کتاب"
  },
  {
    "word": "Than",
    "urdu": "سے",
    "definition": "Than — اردو معنی: سے"
  },
  {
    "word": "Thank",
    "urdu": "شکریہ ادا کرنا",
    "definition": "Thank — اردو معنی: شکریہ ادا کرنا"
  },
  {
    "word": "Thankful",
    "urdu": "شکر گزار",
    "definition": "Thankful — اردو معنی: شکر گزار"
  },
  {
    "word": "Thanks",
    "urdu": "شکریہ",
    "definition": "Thanks — اردو معنی: شکریہ"
  },
  {
    "word": "That",
    "urdu": "وہ",
    "definition": "That — اردو معنی: وہ"
  },
  {
    "word": "Theatre",
    "urdu": "تھیٹر",
    "definition": "Theatre — اردو معنی: تھیٹر"
  },
  {
    "word": "Their",
    "urdu": "ان کا",
    "definition": "Their — اردو معنی: ان کا"
  },
  {
    "word": "Them",
    "urdu": "انہیں",
    "definition": "Them — اردو معنی: انہیں"
  },
  {
    "word": "Themselves",
    "urdu": "خود",
    "definition": "Themselves — اردو معنی: خود"
  },
  {
    "word": "Then",
    "urdu": "پھر",
    "definition": "Then — اردو معنی: پھر"
  },
  {
    "word": "Theory",
    "urdu": "نظریہ",
    "definition": "Theory — اردو معنی: نظریہ"
  },
  {
    "word": "There",
    "urdu": "وہاں",
    "definition": "There — اردو معنی: وہاں"
  },
  {
    "word": "Therefore",
    "urdu": "لہٰذا",
    "definition": "Therefore — اردو معنی: لہٰذا"
  },
  {
    "word": "These",
    "urdu": "یہ",
    "definition": "These — اردو معنی: یہ"
  },
  {
    "word": "Thick",
    "urdu": "موٹا",
    "definition": "Thick — اردو معنی: موٹا"
  },
  {
    "word": "Thin",
    "urdu": "پتلا",
    "definition": "Thin — اردو معنی: پتلا"
  },
  {
    "word": "Thing",
    "urdu": "چیز",
    "definition": "Thing — اردو معنی: چیز"
  },
  {
    "word": "Thinking",
    "urdu": "سوچ",
    "definition": "Thinking — اردو معنی: سوچ"
  },
  {
    "word": "Third",
    "urdu": "تیسرا",
    "definition": "Third — اردو معنی: تیسرا"
  },
  {
    "word": "Thirst",
    "urdu": "پیاس",
    "definition": "Thirst — اردو معنی: پیاس"
  },
  {
    "word": "Thirsty",
    "urdu": "پیاسا",
    "definition": "Thirsty — اردو معنی: پیاسا"
  },
  {
    "word": "This",
    "urdu": "یہ",
    "definition": "This — اردو معنی: یہ"
  },
  {
    "word": "Though",
    "urdu": "اگرچہ",
    "definition": "Though — اردو معنی: اگرچہ"
  },
  {
    "word": "Thought",
    "urdu": "خیال",
    "definition": "Thought — اردو معنی: خیال"
  },
  {
    "word": "Thoughtful",
    "urdu": "خیال رکھنے والا",
    "definition": "Thoughtful — اردو معنی: خیال رکھنے والا"
  },
  {
    "word": "Thousand",
    "urdu": "ہزار",
    "definition": "Thousand — اردو معنی: ہزار"
  },
  {
    "word": "Thread",
    "urdu": "دھاگا",
    "definition": "Thread — اردو معنی: دھاگا"
  },
  {
    "word": "Throat",
    "urdu": "گلا",
    "definition": "Throat — اردو معنی: گلا"
  },
  {
    "word": "Through",
    "urdu": "کے ذریعے",
    "definition": "Through — اردو معنی: کے ذریعے"
  },
  {
    "word": "Throughout",
    "urdu": "پورے",
    "definition": "Throughout — اردو معنی: پورے"
  },
  {
    "word": "Throw",
    "urdu": "پھینکنا",
    "definition": "Throw — اردو معنی: پھینکنا"
  },
  {
    "word": "Thumb",
    "urdu": "انگوٹھا",
    "definition": "Thumb — اردو معنی: انگوٹھا"
  },
  {
    "word": "Ticket",
    "urdu": "ٹکٹ",
    "definition": "Ticket — اردو معنی: ٹکٹ"
  },
  {
    "word": "Tie",
    "urdu": "باندھنا",
    "definition": "Tie — اردو معنی: باندھنا"
  },
  {
    "word": "Tight",
    "urdu": "تنگ",
    "definition": "Tight — اردو معنی: تنگ"
  },
  {
    "word": "Tightly",
    "urdu": "مضبوطی سے",
    "definition": "Tightly — اردو معنی: مضبوطی سے"
  },
  {
    "word": "Timely",
    "urdu": "بروقت",
    "definition": "Timely — اردو معنی: بروقت"
  },
  {
    "word": "Timer",
    "urdu": "ٹائمر",
    "definition": "Timer — اردو معنی: ٹائمر"
  },
  {
    "word": "Tiny",
    "urdu": "ننھا",
    "definition": "Tiny — اردو معنی: ننھا"
  },
  {
    "word": "Tip",
    "urdu": "مشورہ",
    "definition": "Tip — اردو معنی: مشورہ"
  },
  {
    "word": "Tiptoe",
    "urdu": "پنجوں کے بل چلنا",
    "definition": "Tiptoe — اردو معنی: پنجوں کے بل چلنا"
  },
  {
    "word": "Tired",
    "urdu": "تھکا ہوا",
    "definition": "Tired — اردو معنی: تھکا ہوا"
  },
  {
    "word": "Tiredness",
    "urdu": "تھکاوٹ",
    "definition": "Tiredness — اردو معنی: تھکاوٹ"
  },
  {
    "word": "Tire",
    "urdu": "تھکانا",
    "definition": "Tire — اردو معنی: تھکانا"
  },
  {
    "word": "Tiring",
    "urdu": "تھکا دینے والا",
    "definition": "Tiring — اردو معنی: تھکا دینے والا"
  },
  {
    "word": "Title",
    "urdu": "عنوان",
    "definition": "Title — اردو معنی: عنوان"
  },
  {
    "word": "Today",
    "urdu": "آج",
    "definition": "Today — اردو معنی: آج"
  },
  {
    "word": "Toilet",
    "urdu": "بیت الخلا",
    "definition": "Toilet — اردو معنی: بیت الخلا"
  },
  {
    "word": "Tomato",
    "urdu": "ٹماٹر",
    "definition": "Tomato — اردو معنی: ٹماٹر"
  },
  {
    "word": "Tomorrow",
    "urdu": "کل",
    "definition": "Tomorrow — اردو معنی: کل"
  },
  {
    "word": "Tonight",
    "urdu": "آج رات",
    "definition": "Tonight — اردو معنی: آج رات"
  },
  {
    "word": "Too",
    "urdu": "بھی",
    "definition": "Too — اردو معنی: بھی"
  },
  {
    "word": "Tool",
    "urdu": "اوزار",
    "definition": "Tool — اردو معنی: اوزار"
  },
  {
    "word": "Tooth",
    "urdu": "دانت",
    "definition": "Tooth — اردو معنی: دانت"
  },
  {
    "word": "Toothbrush",
    "urdu": "دانتوں کا برش",
    "definition": "Toothbrush — اردو معنی: دانتوں کا برش"
  },
  {
    "word": "Toothpaste",
    "urdu": "دانتوں کا پیسٹ",
    "definition": "Toothpaste — اردو معنی: دانتوں کا پیسٹ"
  },
  {
    "word": "Top",
    "urdu": "اوپر",
    "definition": "Top — اردو معنی: اوپر"
  },
  {
    "word": "Topic",
    "urdu": "موضوع",
    "definition": "Topic — اردو معنی: موضوع"
  },
  {
    "word": "Total",
    "urdu": "کل",
    "definition": "Total — اردو معنی: کل"
  },
  {
    "word": "Totally",
    "urdu": "مکمل طور پر",
    "definition": "Totally — اردو معنی: مکمل طور پر"
  },
  {
    "word": "Touch",
    "urdu": "چھونا",
    "definition": "Touch — اردو معنی: چھونا"
  },
  {
    "word": "Tough",
    "urdu": "سخت",
    "definition": "Tough — اردو معنی: سخت"
  },
  {
    "word": "Tour",
    "urdu": "دورہ",
    "definition": "Tour — اردو معنی: دورہ"
  },
  {
    "word": "Tourist",
    "urdu": "سیاح",
    "definition": "Tourist — اردو معنی: سیاح"
  },
  {
    "word": "Toward",
    "urdu": "کی طرف",
    "definition": "Toward — اردو معنی: کی طرف"
  },
  {
    "word": "Towel",
    "urdu": "تولیہ",
    "definition": "Towel — اردو معنی: تولیہ"
  },
  {
    "word": "Town",
    "urdu": "قصبہ",
    "definition": "Town — اردو معنی: قصبہ"
  },
  {
    "word": "Toy",
    "urdu": "کھلونا",
    "definition": "Toy — اردو معنی: کھلونا"
  },
  {
    "word": "Track",
    "urdu": "راستہ",
    "definition": "Track — اردو معنی: راستہ"
  },
  {
    "word": "Trade",
    "urdu": "تجارت",
    "definition": "Trade — اردو معنی: تجارت"
  },
  {
    "word": "Traditional",
    "urdu": "روایتی",
    "definition": "Traditional — اردو معنی: روایتی"
  },
  {
    "word": "Tradition",
    "urdu": "روایت",
    "definition": "Tradition — اردو معنی: روایت"
  },
  {
    "word": "Traffic",
    "urdu": "ٹریفک",
    "definition": "Traffic — اردو معنی: ٹریفک"
  },
  {
    "word": "Train",
    "urdu": "ٹرین",
    "definition": "Train — اردو معنی: ٹرین"
  },
  {
    "word": "Trainer",
    "urdu": "تربیت دینے والا",
    "definition": "Trainer — اردو معنی: تربیت دینے والا"
  },
  {
    "word": "Training",
    "urdu": "تربیت",
    "definition": "Training — اردو معنی: تربیت"
  },
  {
    "word": "Translate",
    "urdu": "ترجمہ کرنا",
    "definition": "Translate — اردو معنی: ترجمہ کرنا"
  },
  {
    "word": "Translation",
    "urdu": "ترجمہ",
    "definition": "Translation — اردو معنی: ترجمہ"
  },
  {
    "word": "Translator",
    "urdu": "مترجم",
    "definition": "Translator — اردو معنی: مترجم"
  },
  {
    "word": "Transport",
    "urdu": "نقل و حمل",
    "definition": "Transport — اردو معنی: نقل و حمل"
  },
  {
    "word": "Travel",
    "urdu": "سفر",
    "definition": "Travel — اردو معنی: سفر"
  },
  {
    "word": "Traveler",
    "urdu": "مسافر",
    "definition": "Traveler — اردو معنی: مسافر"
  },
  {
    "word": "Traveling",
    "urdu": "سفر کرنا",
    "definition": "Traveling — اردو معنی: سفر کرنا"
  },
  {
    "word": "Treat",
    "urdu": "سلوک کرنا",
    "definition": "Treat — اردو معنی: سلوک کرنا"
  },
  {
    "word": "Treatment",
    "urdu": "علاج",
    "definition": "Treatment — اردو معنی: علاج"
  },
  {
    "word": "Tree",
    "urdu": "درخت",
    "definition": "Tree — اردو معنی: درخت"
  },
  {
    "word": "Trip",
    "urdu": "سفر",
    "definition": "Trip — اردو معنی: سفر"
  },
  {
    "word": "Trouble",
    "urdu": "پریشانی",
    "definition": "Trouble — اردو معنی: پریشانی"
  },
  {
    "word": "Trousers",
    "urdu": "پتلون",
    "definition": "Trousers — اردو معنی: پتلون"
  },
  {
    "word": "True",
    "urdu": "سچ",
    "definition": "True — اردو معنی: سچ"
  },
  {
    "word": "Truly",
    "urdu": "واقعی",
    "definition": "Truly — اردو معنی: واقعی"
  },
  {
    "word": "Truthful",
    "urdu": "سچا",
    "definition": "Truthful — اردو معنی: سچا"
  },
  {
    "word": "Try",
    "urdu": "کوشش کرنا",
    "definition": "Try — اردو معنی: کوشش کرنا"
  },
  {
    "word": "Trying",
    "urdu": "کوشش",
    "definition": "Trying — اردو معنی: کوشش"
  },
  {
    "word": "Tuesday",
    "urdu": "منگل",
    "definition": "Tuesday — اردو معنی: منگل"
  },
  {
    "word": "Turn",
    "urdu": "موڑنا",
    "definition": "Turn — اردو معنی: موڑنا"
  },
  {
    "word": "Turning",
    "urdu": "موڑ",
    "definition": "Turning — اردو معنی: موڑ"
  },
  {
    "word": "Twice",
    "urdu": "دو بار",
    "definition": "Twice — اردو معنی: دو بار"
  },
  {
    "word": "Type",
    "urdu": "قسم",
    "definition": "Type — اردو معنی: قسم"
  },
  {
    "word": "Typical",
    "urdu": "عام",
    "definition": "Typical — اردو معنی: عام"
  },
  {
    "word": "Typically",
    "urdu": "عام طور پر",
    "definition": "Typically — اردو معنی: عام طور پر"
  },
  {
    "word": "Umbrella",
    "urdu": "چھتری",
    "definition": "Umbrella — اردو معنی: چھتری"
  },
  {
    "word": "Uncle",
    "urdu": "چچا",
    "definition": "Uncle — اردو معنی: چچا"
  },
  {
    "word": "Under",
    "urdu": "نیچے",
    "definition": "Under — اردو معنی: نیچے"
  },
  {
    "word": "Understand",
    "urdu": "سمجھنا",
    "definition": "Understand — اردو معنی: سمجھنا"
  },
  {
    "word": "Understanding",
    "urdu": "سمجھ",
    "definition": "Understanding — اردو معنی: سمجھ"
  },
  {
    "word": "Unfair",
    "urdu": "ناانصافی",
    "definition": "Unfair — اردو معنی: ناانصافی"
  },
  {
    "word": "Unfortunately",
    "urdu": "بدقسمتی سے",
    "definition": "Unfortunately — اردو معنی: بدقسمتی سے"
  },
  {
    "word": "Uniform",
    "urdu": "وردی",
    "definition": "Uniform — اردو معنی: وردی"
  },
  {
    "word": "Union",
    "urdu": "اتحاد",
    "definition": "Union — اردو معنی: اتحاد"
  },
  {
    "word": "Unit",
    "urdu": "اکائی",
    "definition": "Unit — اردو معنی: اکائی"
  },
  {
    "word": "United",
    "urdu": "متحد",
    "definition": "United — اردو معنی: متحد"
  },
  {
    "word": "University",
    "urdu": "جامعہ",
    "definition": "University — اردو معنی: جامعہ"
  },
  {
    "word": "Unknown",
    "urdu": "نامعلوم",
    "definition": "Unknown — اردو معنی: نامعلوم"
  },
  {
    "word": "Unless",
    "urdu": "جب تک نہیں",
    "definition": "Unless — اردو معنی: جب تک نہیں"
  },
  {
    "word": "Unlike",
    "urdu": "کے برعکس",
    "definition": "Unlike — اردو معنی: کے برعکس"
  },
  {
    "word": "Unlikely",
    "urdu": "غیر ممکن",
    "definition": "Unlikely — اردو معنی: غیر ممکن"
  },
  {
    "word": "Unnecessary",
    "urdu": "غیر ضروری",
    "definition": "Unnecessary — اردو معنی: غیر ضروری"
  },
  {
    "word": "Unpleasant",
    "urdu": "ناگوار",
    "definition": "Unpleasant — اردو معنی: ناگوار"
  },
  {
    "word": "Until",
    "urdu": "تک",
    "definition": "Until — اردو معنی: تک"
  },
  {
    "word": "Unusual",
    "urdu": "غیر معمولی",
    "definition": "Unusual — اردو معنی: غیر معمولی"
  },
  {
    "word": "Upstairs",
    "urdu": "اوپر کی منزل",
    "definition": "Upstairs — اردو معنی: اوپر کی منزل"
  },
  {
    "word": "Use",
    "urdu": "استعمال کرنا",
    "definition": "Use — اردو معنی: استعمال کرنا"
  },
  {
    "word": "Used",
    "urdu": "استعمال شدہ",
    "definition": "Used — اردو معنی: استعمال شدہ"
  },
  {
    "word": "Useless",
    "urdu": "بیکار",
    "definition": "Useless — اردو معنی: بیکار"
  },
  {
    "word": "User",
    "urdu": "صارف",
    "definition": "User — اردو معنی: صارف"
  },
  {
    "word": "Usual",
    "urdu": "معمول کا",
    "definition": "Usual — اردو معنی: معمول کا"
  },
  {
    "word": "Usually",
    "urdu": "عام طور پر",
    "definition": "Usually — اردو معنی: عام طور پر"
  },
  {
    "word": "Vacation",
    "urdu": "چھٹیاں",
    "definition": "Vacation — اردو معنی: چھٹیاں"
  },
  {
    "word": "Valuable",
    "urdu": "قیمتی",
    "definition": "Valuable — اردو معنی: قیمتی"
  },
  {
    "word": "Value",
    "urdu": "قدر",
    "definition": "Value — اردو معنی: قدر"
  },
  {
    "word": "Vegetable",
    "urdu": "سبزی",
    "definition": "Vegetable — اردو معنی: سبزی"
  },
  {
    "word": "Vehicle",
    "urdu": "گاڑی",
    "definition": "Vehicle — اردو معنی: گاڑی"
  },
  {
    "word": "Very",
    "urdu": "بہت",
    "definition": "Very — اردو معنی: بہت"
  },
  {
    "word": "Video",
    "urdu": "ویڈیو",
    "definition": "Video — اردو معنی: ویڈیو"
  },
  {
    "word": "View",
    "urdu": "نظارہ",
    "definition": "View — اردو معنی: نظارہ"
  },
  {
    "word": "Viewer",
    "urdu": "دیکھنے والا",
    "definition": "Viewer — اردو معنی: دیکھنے والا"
  },
  {
    "word": "Visit",
    "urdu": "ملاقات کرنا",
    "definition": "Visit — اردو معنی: ملاقات کرنا"
  },
  {
    "word": "Visitor",
    "urdu": "مہمان",
    "definition": "Visitor — اردو معنی: مہمان"
  },
  {
    "word": "Visual",
    "urdu": "بصری",
    "definition": "Visual — اردو معنی: بصری"
  },
  {
    "word": "Vitamin",
    "urdu": "وٹامن",
    "definition": "Vitamin — اردو معنی: وٹامن"
  },
  {
    "word": "Waiting",
    "urdu": "انتظار",
    "definition": "Waiting — اردو معنی: انتظار"
  },
  {
    "word": "Waiter",
    "urdu": "ویٹر",
    "definition": "Waiter — اردو معنی: ویٹر"
  },
  {
    "word": "Waitress",
    "urdu": "ویٹریس",
    "definition": "Waitress — اردو معنی: ویٹریس"
  },
  {
    "word": "Wake",
    "urdu": "جاگنا",
    "definition": "Wake — اردو معنی: جاگنا"
  },
  {
    "word": "Walk",
    "urdu": "چلنا",
    "definition": "Walk — اردو معنی: چلنا"
  },
  {
    "word": "Walker",
    "urdu": "چلنے والا",
    "definition": "Walker — اردو معنی: چلنے والا"
  },
  {
    "word": "Walking",
    "urdu": "چلنا",
    "definition": "Walking — اردو معنی: چلنا"
  },
  {
    "word": "Wall",
    "urdu": "دیوار",
    "definition": "Wall — اردو معنی: دیوار"
  },
  {
    "word": "Wallet",
    "urdu": "بٹوا",
    "definition": "Wallet — اردو معنی: بٹوا"
  },
  {
    "word": "Want",
    "urdu": "چاہنا",
    "definition": "Want — اردو معنی: چاہنا"
  },
  {
    "word": "War",
    "urdu": "جنگ",
    "definition": "War — اردو معنی: جنگ"
  },
  {
    "word": "Wardrobe",
    "urdu": "الماری",
    "definition": "Wardrobe — اردو معنی: الماری"
  },
  {
    "word": "Warmth",
    "urdu": "گرمی",
    "definition": "Warmth — اردو معنی: گرمی"
  },
  {
    "word": "Warn",
    "urdu": "خبردار کرنا",
    "definition": "Warn — اردو معنی: خبردار کرنا"
  },
  {
    "word": "Warning",
    "urdu": "انتباہ",
    "definition": "Warning — اردو معنی: انتباہ"
  },
  {
    "word": "Wash",
    "urdu": "دھونا",
    "definition": "Wash — اردو معنی: دھونا"
  },
  {
    "word": "Washing",
    "urdu": "دھلائی",
    "definition": "Washing — اردو معنی: دھلائی"
  },
  {
    "word": "Waste",
    "urdu": "ضائع کرنا",
    "definition": "Waste — اردو معنی: ضائع کرنا"
  },
  {
    "word": "Watch",
    "urdu": "دیکھنا",
    "definition": "Watch — اردو معنی: دیکھنا"
  },
  {
    "word": "Watching",
    "urdu": "دیکھنا",
    "definition": "Watching — اردو معنی: دیکھنا"
  },
  {
    "word": "Water",
    "urdu": "پانی",
    "definition": "Water — اردو معنی: پانی"
  },
  {
    "word": "Waterfall",
    "urdu": "آبشار",
    "definition": "Waterfall — اردو معنی: آبشار"
  },
  {
    "word": "Watermelon",
    "urdu": "تربوز",
    "definition": "Watermelon — اردو معنی: تربوز"
  },
  {
    "word": "Wave",
    "urdu": "لہر",
    "definition": "Wave — اردو معنی: لہر"
  },
  {
    "word": "Way",
    "urdu": "راستہ",
    "definition": "Way — اردو معنی: راستہ"
  },
  {
    "word": "Weak",
    "urdu": "کمزور",
    "definition": "Weak — اردو معنی: کمزور"
  },
  {
    "word": "Weakness",
    "urdu": "کمزوری",
    "definition": "Weakness — اردو معنی: کمزوری"
  },
  {
    "word": "Wealth",
    "urdu": "دولت",
    "definition": "Wealth — اردو معنی: دولت"
  },
  {
    "word": "Wealthy",
    "urdu": "امیر",
    "definition": "Wealthy — اردو معنی: امیر"
  },
  {
    "word": "Weapon",
    "urdu": "ہتھیار",
    "definition": "Weapon — اردو معنی: ہتھیار"
  },
  {
    "word": "Wear",
    "urdu": "پہننا",
    "definition": "Wear — اردو معنی: پہننا"
  },
  {
    "word": "Weather",
    "urdu": "موسم",
    "definition": "Weather — اردو معنی: موسم"
  },
  {
    "word": "Website",
    "urdu": "ویب سائٹ",
    "definition": "Website — اردو معنی: ویب سائٹ"
  },
  {
    "word": "Wedding",
    "urdu": "شادی",
    "definition": "Wedding — اردو معنی: شادی"
  },
  {
    "word": "Wednesday",
    "urdu": "بدھ",
    "definition": "Wednesday — اردو معنی: بدھ"
  },
  {
    "word": "Week",
    "urdu": "ہفتہ",
    "definition": "Week — اردو معنی: ہفتہ"
  },
  {
    "word": "Weekend",
    "urdu": "اختتام ہفتہ",
    "definition": "Weekend — اردو معنی: اختتام ہفتہ"
  },
  {
    "word": "Weekly",
    "urdu": "ہفتہ وار",
    "definition": "Weekly — اردو معنی: ہفتہ وار"
  },
  {
    "word": "Weight",
    "urdu": "وزن",
    "definition": "Weight — اردو معنی: وزن"
  },
  {
    "word": "Well",
    "urdu": "اچھی طرح",
    "definition": "Well — اردو معنی: اچھی طرح"
  },
  {
    "word": "West",
    "urdu": "مغرب",
    "definition": "West — اردو معنی: مغرب"
  },
  {
    "word": "Western",
    "urdu": "مغربی",
    "definition": "Western — اردو معنی: مغربی"
  },
  {
    "word": "Wet",
    "urdu": "گیلا",
    "definition": "Wet — اردو معنی: گیلا"
  },
  {
    "word": "What",
    "urdu": "کیا",
    "definition": "What — اردو معنی: کیا"
  },
  {
    "word": "Whatever",
    "urdu": "جو کچھ بھی",
    "definition": "Whatever — اردو معنی: جو کچھ بھی"
  },
  {
    "word": "Wheat",
    "urdu": "گندم",
    "definition": "Wheat — اردو معنی: گندم"
  },
  {
    "word": "Wheel",
    "urdu": "پہیہ",
    "definition": "Wheel — اردو معنی: پہیہ"
  },
  {
    "word": "When",
    "urdu": "کب",
    "definition": "When — اردو معنی: کب"
  },
  {
    "word": "Whenever",
    "urdu": "جب بھی",
    "definition": "Whenever — اردو معنی: جب بھی"
  },
  {
    "word": "Where",
    "urdu": "کہاں",
    "definition": "Where — اردو معنی: کہاں"
  },
  {
    "word": "Wherever",
    "urdu": "جہاں بھی",
    "definition": "Wherever — اردو معنی: جہاں بھی"
  },
  {
    "word": "Whether",
    "urdu": "آیا",
    "definition": "Whether — اردو معنی: آیا"
  },
  {
    "word": "Which",
    "urdu": "کون سا",
    "definition": "Which — اردو معنی: کون سا"
  },
  {
    "word": "While",
    "urdu": "جبکہ",
    "definition": "While — اردو معنی: جبکہ"
  },
  {
    "word": "Whisper",
    "urdu": "سرگوشی کرنا",
    "definition": "Whisper — اردو معنی: سرگوشی کرنا"
  },
  {
    "word": "White",
    "urdu": "سفید",
    "definition": "White — اردو معنی: سفید"
  },
  {
    "word": "Who",
    "urdu": "کون",
    "definition": "Who — اردو معنی: کون"
  },
  {
    "word": "Whose",
    "urdu": "کس کا",
    "definition": "Whose — اردو معنی: کس کا"
  },
  {
    "word": "Why",
    "urdu": "کیوں",
    "definition": "Why — اردو معنی: کیوں"
  },
  {
    "word": "Wide",
    "urdu": "چوڑا",
    "definition": "Wide — اردو معنی: چوڑا"
  },
  {
    "word": "Widely",
    "urdu": "وسیع پیمانے پر",
    "definition": "Widely — اردو معنی: وسیع پیمانے پر"
  },
  {
    "word": "Width",
    "urdu": "چوڑائی",
    "definition": "Width — اردو معنی: چوڑائی"
  },
  {
    "word": "Wife",
    "urdu": "بیوی",
    "definition": "Wife — اردو معنی: بیوی"
  },
  {
    "word": "Wild",
    "urdu": "جنگلی",
    "definition": "Wild — اردو معنی: جنگلی"
  },
  {
    "word": "Wildly",
    "urdu": "شدت سے",
    "definition": "Wildly — اردو معنی: شدت سے"
  },
  {
    "word": "Will",
    "urdu": "گا",
    "definition": "Will — اردو معنی: گا"
  },
  {
    "word": "Willing",
    "urdu": "آمادہ",
    "definition": "Willing — اردو معنی: آمادہ"
  },
  {
    "word": "Win",
    "urdu": "جیتنا",
    "definition": "Win — اردو معنی: جیتنا"
  },
  {
    "word": "Winner",
    "urdu": "فاتح",
    "definition": "Winner — اردو معنی: فاتح"
  },
  {
    "word": "Winning",
    "urdu": "جیت",
    "definition": "Winning — اردو معنی: جیت"
  },
  {
    "word": "Winter",
    "urdu": "سردی کا موسم",
    "definition": "Winter — اردو معنی: سردی کا موسم"
  },
  {
    "word": "Wire",
    "urdu": "تار",
    "definition": "Wire — اردو معنی: تار"
  },
  {
    "word": "Wise",
    "urdu": "دانشمند",
    "definition": "Wise — اردو معنی: دانشمند"
  },
  {
    "word": "Wisely",
    "urdu": "دانائی سے",
    "definition": "Wisely — اردو معنی: دانائی سے"
  },
  {
    "word": "With",
    "urdu": "کے ساتھ",
    "definition": "With — اردو معنی: کے ساتھ"
  },
  {
    "word": "Within",
    "urdu": "کے اندر",
    "definition": "Within — اردو معنی: کے اندر"
  },
  {
    "word": "Without",
    "urdu": "کے بغیر",
    "definition": "Without — اردو معنی: کے بغیر"
  },
  {
    "word": "Woman",
    "urdu": "عورت",
    "definition": "Woman — اردو معنی: عورت"
  },
  {
    "word": "Wonder",
    "urdu": "حیران ہونا",
    "definition": "Wonder — اردو معنی: حیران ہونا"
  },
  {
    "word": "Wonderful",
    "urdu": "شاندار",
    "definition": "Wonderful — اردو معنی: شاندار"
  },
  {
    "word": "Wood",
    "urdu": "لکڑی",
    "definition": "Wood — اردو معنی: لکڑی"
  },
  {
    "word": "Wooden",
    "urdu": "لکڑی کا",
    "definition": "Wooden — اردو معنی: لکڑی کا"
  },
  {
    "word": "Word",
    "urdu": "لفظ",
    "definition": "Word — اردو معنی: لفظ"
  },
  {
    "word": "Worker",
    "urdu": "مزدور",
    "definition": "Worker — اردو معنی: مزدور"
  },
  {
    "word": "Working",
    "urdu": "کام کرنا",
    "definition": "Working — اردو معنی: کام کرنا"
  },
  {
    "word": "Workplace",
    "urdu": "کام کی جگہ",
    "definition": "Workplace — اردو معنی: کام کی جگہ"
  },
  {
    "word": "Workshop",
    "urdu": "ورکشاپ",
    "definition": "Workshop — اردو معنی: ورکشاپ"
  },
  {
    "word": "Worldwide",
    "urdu": "دنیا بھر میں",
    "definition": "Worldwide — اردو معنی: دنیا بھر میں"
  },
  {
    "word": "Worry",
    "urdu": "فکر کرنا",
    "definition": "Worry — اردو معنی: فکر کرنا"
  },
  {
    "word": "Worried",
    "urdu": "پریشان",
    "definition": "Worried — اردو معنی: پریشان"
  },
  {
    "word": "Worrying",
    "urdu": "پریشان کن",
    "definition": "Worrying — اردو معنی: پریشان کن"
  },
  {
    "word": "Worse",
    "urdu": "بدتر",
    "definition": "Worse — اردو معنی: بدتر"
  },
  {
    "word": "Worst",
    "urdu": "بدترین",
    "definition": "Worst — اردو معنی: بدترین"
  },
  {
    "word": "Worth",
    "urdu": "قیمت",
    "definition": "Worth — اردو معنی: قیمت"
  },
  {
    "word": "Worthy",
    "urdu": "قابل",
    "definition": "Worthy — اردو معنی: قابل"
  },
  {
    "word": "Would",
    "urdu": "گا",
    "definition": "Would — اردو معنی: گا"
  },
  {
    "word": "Write",
    "urdu": "لکھنا",
    "definition": "Write — اردو معنی: لکھنا"
  },
  {
    "word": "Writer",
    "urdu": "مصنف",
    "definition": "Writer — اردو معنی: مصنف"
  },
  {
    "word": "Writing",
    "urdu": "تحریر",
    "definition": "Writing — اردو معنی: تحریر"
  },
  {
    "word": "Wrong",
    "urdu": "غلط",
    "definition": "Wrong — اردو معنی: غلط"
  },
  {
    "word": "Wrongly",
    "urdu": "غلط طور پر",
    "definition": "Wrongly — اردو معنی: غلط طور پر"
  },
  {
    "word": "Yard",
    "urdu": "صحن",
    "definition": "Yard — اردو معنی: صحن"
  },
  {
    "word": "Yearly",
    "urdu": "سالانہ",
    "definition": "Yearly — اردو معنی: سالانہ"
  },
  {
    "word": "Yell",
    "urdu": "چیخنا",
    "definition": "Yell — اردو معنی: چیخنا"
  },
  {
    "word": "Yellow",
    "urdu": "پیلا",
    "definition": "Yellow — اردو معنی: پیلا"
  },
  {
    "word": "Yesterday",
    "urdu": "گزشتہ کل",
    "definition": "Yesterday — اردو معنی: گزشتہ کل"
  },
  {
    "word": "Yet",
    "urdu": "ابھی تک",
    "definition": "Yet — اردو معنی: ابھی تک"
  },
  {
    "word": "Youth",
    "urdu": "نوجوانی",
    "definition": "Youth — اردو معنی: نوجوانی"
  },
  {
    "word": "Zero",
    "urdu": "صفر",
    "definition": "Zero — اردو معنی: صفر"
  },
  {
    "word": "Zip",
    "urdu": "زپ",
    "definition": "Zip — اردو معنی: زپ"
  },
  {
    "word": "Zone",
    "urdu": "علاقہ",
    "definition": "Zone — اردو معنی: علاقہ"
  },
  {
    "word": "Asked",
    "urdu": "پوچھنا",
    "definition": "Asked — اردو معنی: پوچھنا"
  },
  {
    "word": "Asking",
    "urdu": "پوچھنا",
    "definition": "Asking — اردو معنی: پوچھنا"
  },
  {
    "word": "Asks",
    "urdu": "پوچھنا",
    "definition": "Asks — اردو معنی: پوچھنا"
  },
  {
    "word": "Answered",
    "urdu": "جواب",
    "definition": "Answered — اردو معنی: جواب"
  },
  {
    "word": "Answering",
    "urdu": "جواب",
    "definition": "Answering — اردو معنی: جواب"
  },
  {
    "word": "Answers",
    "urdu": "جواب",
    "definition": "Answers — اردو معنی: جواب"
  },
  {
    "word": "Agreeed",
    "urdu": "متفق ہونا",
    "definition": "Agreeed — اردو معنی: متفق ہونا"
  },
  {
    "word": "Agreeing",
    "urdu": "متفق ہونا",
    "definition": "Agreeing — اردو معنی: متفق ہونا"
  },
  {
    "word": "Agrees",
    "urdu": "متفق ہونا",
    "definition": "Agrees — اردو معنی: متفق ہونا"
  },
  {
    "word": "Arrived",
    "urdu": "پہنچنا",
    "definition": "Arrived — اردو معنی: پہنچنا"
  },
  {
    "word": "Arriving",
    "urdu": "پہنچنا",
    "definition": "Arriving — اردو معنی: پہنچنا"
  },
  {
    "word": "Arrives",
    "urdu": "پہنچنا",
    "definition": "Arrives — اردو معنی: پہنچنا"
  },
  {
    "word": "Avoided",
    "urdu": "بچنا",
    "definition": "Avoided — اردو معنی: بچنا"
  },
  {
    "word": "Avoiding",
    "urdu": "بچنا",
    "definition": "Avoiding — اردو معنی: بچنا"
  },
  {
    "word": "Avoids",
    "urdu": "بچنا",
    "definition": "Avoids — اردو معنی: بچنا"
  },
  {
    "word": "Believed",
    "urdu": "یقین کرنا",
    "definition": "Believed — اردو معنی: یقین کرنا"
  },
  {
    "word": "Believing",
    "urdu": "یقین کرنا",
    "definition": "Believing — اردو معنی: یقین کرنا"
  },
  {
    "word": "Believes",
    "urdu": "یقین کرنا",
    "definition": "Believes — اردو معنی: یقین کرنا"
  },
  {
    "word": "Called",
    "urdu": "بلانا",
    "definition": "Called — اردو معنی: بلانا"
  },
  {
    "word": "Calling",
    "urdu": "بلانا",
    "definition": "Calling — اردو معنی: بلانا"
  },
  {
    "word": "Calls",
    "urdu": "بلانا",
    "definition": "Calls — اردو معنی: بلانا"
  },
  {
    "word": "Carried",
    "urdu": "لے جانا",
    "definition": "Carried — اردو معنی: لے جانا"
  },
  {
    "word": "Carrying",
    "urdu": "لے جانا",
    "definition": "Carrying — اردو معنی: لے جانا"
  },
  {
    "word": "Carries",
    "urdu": "لے جانا",
    "definition": "Carries — اردو معنی: لے جانا"
  },
  {
    "word": "Changed",
    "urdu": "تبدیلی",
    "definition": "Changed — اردو معنی: تبدیلی"
  },
  {
    "word": "Changing",
    "urdu": "تبدیلی",
    "definition": "Changing — اردو معنی: تبدیلی"
  },
  {
    "word": "Changes",
    "urdu": "تبدیلی",
    "definition": "Changes — اردو معنی: تبدیلی"
  },
  {
    "word": "Checked",
    "urdu": "جانچنا",
    "definition": "Checked — اردو معنی: جانچنا"
  },
  {
    "word": "Checking",
    "urdu": "جانچنا",
    "definition": "Checking — اردو معنی: جانچنا"
  },
  {
    "word": "Checks",
    "urdu": "جانچنا",
    "definition": "Checks — اردو معنی: جانچنا"
  },
  {
    "word": "Cleaned",
    "urdu": "صاف",
    "definition": "Cleaned — اردو معنی: صاف"
  },
  {
    "word": "Cleaning",
    "urdu": "صاف",
    "definition": "Cleaning — اردو معنی: صاف"
  },
  {
    "word": "Cleans",
    "urdu": "صاف",
    "definition": "Cleans — اردو معنی: صاف"
  },
  {
    "word": "Climbed",
    "urdu": "چڑھنا",
    "definition": "Climbed — اردو معنی: چڑھنا"
  },
  {
    "word": "Climbing",
    "urdu": "چڑھنا",
    "definition": "Climbing — اردو معنی: چڑھنا"
  },
  {
    "word": "Climbs",
    "urdu": "چڑھنا",
    "definition": "Climbs — اردو معنی: چڑھنا"
  },
  {
    "word": "Closed",
    "urdu": "بند کرنا",
    "definition": "Closed — اردو معنی: بند کرنا"
  },
  {
    "word": "Closing",
    "urdu": "بند کرنا",
    "definition": "Closing — اردو معنی: بند کرنا"
  },
  {
    "word": "Closes",
    "urdu": "بند کرنا",
    "definition": "Closes — اردو معنی: بند کرنا"
  },
  {
    "word": "Compared",
    "urdu": "موازنہ کرنا",
    "definition": "Compared — اردو معنی: موازنہ کرنا"
  },
  {
    "word": "Comparing",
    "urdu": "موازنہ کرنا",
    "definition": "Comparing — اردو معنی: موازنہ کرنا"
  },
  {
    "word": "Compares",
    "urdu": "موازنہ کرنا",
    "definition": "Compares — اردو معنی: موازنہ کرنا"
  },
  {
    "word": "Complained",
    "urdu": "شکایت کرنا",
    "definition": "Complained — اردو معنی: شکایت کرنا"
  },
  {
    "word": "Complaining",
    "urdu": "شکایت کرنا",
    "definition": "Complaining — اردو معنی: شکایت کرنا"
  },
  {
    "word": "Complains",
    "urdu": "شکایت کرنا",
    "definition": "Complains — اردو معنی: شکایت کرنا"
  },
  {
    "word": "Connected",
    "urdu": "جوڑنا",
    "definition": "Connected — اردو معنی: جوڑنا"
  },
  {
    "word": "Connecting",
    "urdu": "جوڑنا",
    "definition": "Connecting — اردو معنی: جوڑنا"
  },
  {
    "word": "Connects",
    "urdu": "جوڑنا",
    "definition": "Connects — اردو معنی: جوڑنا"
  },
  {
    "word": "Cooked",
    "urdu": "کھانا پکانا",
    "definition": "Cooked — اردو معنی: کھانا پکانا"
  },
  {
    "word": "Cooks",
    "urdu": "کھانا پکانا",
    "definition": "Cooks — اردو معنی: کھانا پکانا"
  },
  {
    "word": "Copied",
    "urdu": "نقل",
    "definition": "Copied — اردو معنی: نقل"
  },
  {
    "word": "Copying",
    "urdu": "نقل",
    "definition": "Copying — اردو معنی: نقل"
  },
  {
    "word": "Copies",
    "urdu": "نقل",
    "definition": "Copies — اردو معنی: نقل"
  },
  {
    "word": "Counted",
    "urdu": "گننا",
    "definition": "Counted — اردو معنی: گننا"
  },
  {
    "word": "Counting",
    "urdu": "گننا",
    "definition": "Counting — اردو معنی: گننا"
  },
  {
    "word": "Counts",
    "urdu": "گننا",
    "definition": "Counts — اردو معنی: گننا"
  },
  {
    "word": "Created",
    "urdu": "بنانا",
    "definition": "Created — اردو معنی: بنانا"
  },
  {
    "word": "Creating",
    "urdu": "بنانا",
    "definition": "Creating — اردو معنی: بنانا"
  },
  {
    "word": "Creates",
    "urdu": "بنانا",
    "definition": "Creates — اردو معنی: بنانا"
  },
  {
    "word": "Cried",
    "urdu": "رونا",
    "definition": "Cried — اردو معنی: رونا"
  },
  {
    "word": "Crying",
    "urdu": "رونا",
    "definition": "Crying — اردو معنی: رونا"
  },
  {
    "word": "Cries",
    "urdu": "رونا",
    "definition": "Cries — اردو معنی: رونا"
  },
  {
    "word": "Danced",
    "urdu": "رقص",
    "definition": "Danced — اردو معنی: رقص"
  },
  {
    "word": "Dancing",
    "urdu": "رقص",
    "definition": "Dancing — اردو معنی: رقص"
  },
  {
    "word": "Dances",
    "urdu": "رقص",
    "definition": "Dances — اردو معنی: رقص"
  },
  {
    "word": "Delivered",
    "urdu": "پہنچانا",
    "definition": "Delivered — اردو معنی: پہنچانا"
  },
  {
    "word": "Delivering",
    "urdu": "پہنچانا",
    "definition": "Delivering — اردو معنی: پہنچانا"
  },
  {
    "word": "Delivers",
    "urdu": "پہنچانا",
    "definition": "Delivers — اردو معنی: پہنچانا"
  },
  {
    "word": "Described",
    "urdu": "بیان کرنا",
    "definition": "Described — اردو معنی: بیان کرنا"
  },
  {
    "word": "Describing",
    "urdu": "بیان کرنا",
    "definition": "Describing — اردو معنی: بیان کرنا"
  },
  {
    "word": "Describes",
    "urdu": "بیان کرنا",
    "definition": "Describes — اردو معنی: بیان کرنا"
  },
  {
    "word": "Developed",
    "urdu": "ترقی دینا",
    "definition": "Developed — اردو معنی: ترقی دینا"
  },
  {
    "word": "Developing",
    "urdu": "ترقی دینا",
    "definition": "Developing — اردو معنی: ترقی دینا"
  },
  {
    "word": "Develops",
    "urdu": "ترقی دینا",
    "definition": "Develops — اردو معنی: ترقی دینا"
  },
  {
    "word": "Discovered",
    "urdu": "دریافت کرنا",
    "definition": "Discovered — اردو معنی: دریافت کرنا"
  },
  {
    "word": "Discovering",
    "urdu": "دریافت کرنا",
    "definition": "Discovering — اردو معنی: دریافت کرنا"
  },
  {
    "word": "Discovers",
    "urdu": "دریافت کرنا",
    "definition": "Discovers — اردو معنی: دریافت کرنا"
  },
  {
    "word": "Discussed",
    "urdu": "بحث کرنا",
    "definition": "Discussed — اردو معنی: بحث کرنا"
  },
  {
    "word": "Discussing",
    "urdu": "بحث کرنا",
    "definition": "Discussing — اردو معنی: بحث کرنا"
  },
  {
    "word": "Discusses",
    "urdu": "بحث کرنا",
    "definition": "Discusses — اردو معنی: بحث کرنا"
  },
  {
    "word": "Divided",
    "urdu": "تقسیم کرنا",
    "definition": "Divided — اردو معنی: تقسیم کرنا"
  },
  {
    "word": "Dividing",
    "urdu": "تقسیم کرنا",
    "definition": "Dividing — اردو معنی: تقسیم کرنا"
  },
  {
    "word": "Divides",
    "urdu": "تقسیم کرنا",
    "definition": "Divides — اردو معنی: تقسیم کرنا"
  },
  {
    "word": "Dressed",
    "urdu": "لباس",
    "definition": "Dressed — اردو معنی: لباس"
  },
  {
    "word": "Dressing",
    "urdu": "لباس",
    "definition": "Dressing — اردو معنی: لباس"
  },
  {
    "word": "Dresses",
    "urdu": "لباس",
    "definition": "Dresses — اردو معنی: لباس"
  },
  {
    "word": "Enjoyed",
    "urdu": "لطف اٹھانا",
    "definition": "Enjoyed — اردو معنی: لطف اٹھانا"
  },
  {
    "word": "Enjoying",
    "urdu": "لطف اٹھانا",
    "definition": "Enjoying — اردو معنی: لطف اٹھانا"
  },
  {
    "word": "Enjoys",
    "urdu": "لطف اٹھانا",
    "definition": "Enjoys — اردو معنی: لطف اٹھانا"
  },
  {
    "word": "Entered",
    "urdu": "داخل ہونا",
    "definition": "Entered — اردو معنی: داخل ہونا"
  },
  {
    "word": "Entering",
    "urdu": "داخل ہونا",
    "definition": "Entering — اردو معنی: داخل ہونا"
  },
  {
    "word": "Enters",
    "urdu": "داخل ہونا",
    "definition": "Enters — اردو معنی: داخل ہونا"
  },
  {
    "word": "Explained",
    "urdu": "سمجھانا",
    "definition": "Explained — اردو معنی: سمجھانا"
  },
  {
    "word": "Explaining",
    "urdu": "سمجھانا",
    "definition": "Explaining — اردو معنی: سمجھانا"
  },
  {
    "word": "Explains",
    "urdu": "سمجھانا",
    "definition": "Explains — اردو معنی: سمجھانا"
  },
  {
    "word": "Failed",
    "urdu": "ناکام ہونا",
    "definition": "Failed — اردو معنی: ناکام ہونا"
  },
  {
    "word": "Failing",
    "urdu": "ناکام ہونا",
    "definition": "Failing — اردو معنی: ناکام ہونا"
  },
  {
    "word": "Fails",
    "urdu": "ناکام ہونا",
    "definition": "Fails — اردو معنی: ناکام ہونا"
  },
  {
    "word": "Filled",
    "urdu": "بھرنا",
    "definition": "Filled — اردو معنی: بھرنا"
  },
  {
    "word": "Filling",
    "urdu": "بھرنا",
    "definition": "Filling — اردو معنی: بھرنا"
  },
  {
    "word": "Fills",
    "urdu": "بھرنا",
    "definition": "Fills — اردو معنی: بھرنا"
  },
  {
    "word": "Finished",
    "urdu": "ختم کرنا",
    "definition": "Finished — اردو معنی: ختم کرنا"
  },
  {
    "word": "Finishing",
    "urdu": "ختم کرنا",
    "definition": "Finishing — اردو معنی: ختم کرنا"
  },
  {
    "word": "Finishes",
    "urdu": "ختم کرنا",
    "definition": "Finishes — اردو معنی: ختم کرنا"
  },
  {
    "word": "Fixed",
    "urdu": "ٹھیک کرنا",
    "definition": "Fixed — اردو معنی: ٹھیک کرنا"
  },
  {
    "word": "Fixing",
    "urdu": "ٹھیک کرنا",
    "definition": "Fixing — اردو معنی: ٹھیک کرنا"
  },
  {
    "word": "Fixes",
    "urdu": "ٹھیک کرنا",
    "definition": "Fixes — اردو معنی: ٹھیک کرنا"
  },
  {
    "word": "Followed",
    "urdu": "پیروی کرنا",
    "definition": "Followed — اردو معنی: پیروی کرنا"
  },
  {
    "word": "Following",
    "urdu": "پیروی کرنا",
    "definition": "Following — اردو معنی: پیروی کرنا"
  },
  {
    "word": "Follows",
    "urdu": "پیروی کرنا",
    "definition": "Follows — اردو معنی: پیروی کرنا"
  },
  {
    "word": "Helped",
    "urdu": "مدد",
    "definition": "Helped — اردو معنی: مدد"
  },
  {
    "word": "Helping",
    "urdu": "مدد",
    "definition": "Helping — اردو معنی: مدد"
  },
  {
    "word": "Helps",
    "urdu": "مدد",
    "definition": "Helps — اردو معنی: مدد"
  },
  {
    "word": "Hoped",
    "urdu": "امید",
    "definition": "Hoped — اردو معنی: امید"
  },
  {
    "word": "Hoping",
    "urdu": "امید",
    "definition": "Hoping — اردو معنی: امید"
  },
  {
    "word": "Hopes",
    "urdu": "امید",
    "definition": "Hopes — اردو معنی: امید"
  },
  {
    "word": "Improved",
    "urdu": "بہتر کرنا",
    "definition": "Improved — اردو معنی: بہتر کرنا"
  },
  {
    "word": "Improving",
    "urdu": "بہتر کرنا",
    "definition": "Improving — اردو معنی: بہتر کرنا"
  },
  {
    "word": "Improves",
    "urdu": "بہتر کرنا",
    "definition": "Improves — اردو معنی: بہتر کرنا"
  },
  {
    "word": "Included",
    "urdu": "شامل کرنا",
    "definition": "Included — اردو معنی: شامل کرنا"
  },
  {
    "word": "Includes",
    "urdu": "شامل کرنا",
    "definition": "Includes — اردو معنی: شامل کرنا"
  },
  {
    "word": "Invited",
    "urdu": "دعوت دینا",
    "definition": "Invited — اردو معنی: دعوت دینا"
  },
  {
    "word": "Inviting",
    "urdu": "دعوت دینا",
    "definition": "Inviting — اردو معنی: دعوت دینا"
  },
  {
    "word": "Invites",
    "urdu": "دعوت دینا",
    "definition": "Invites — اردو معنی: دعوت دینا"
  },
  {
    "word": "Joined",
    "urdu": "شامل ہونا",
    "definition": "Joined — اردو معنی: شامل ہونا"
  },
  {
    "word": "Joining",
    "urdu": "شامل ہونا",
    "definition": "Joining — اردو معنی: شامل ہونا"
  },
  {
    "word": "Joins",
    "urdu": "شامل ہونا",
    "definition": "Joins — اردو معنی: شامل ہونا"
  },
  {
    "word": "Jumped",
    "urdu": "چھلانگ لگانا",
    "definition": "Jumped — اردو معنی: چھلانگ لگانا"
  },
  {
    "word": "Jumping",
    "urdu": "چھلانگ لگانا",
    "definition": "Jumping — اردو معنی: چھلانگ لگانا"
  },
  {
    "word": "Jumps",
    "urdu": "چھلانگ لگانا",
    "definition": "Jumps — اردو معنی: چھلانگ لگانا"
  },
  {
    "word": "Laughed",
    "urdu": "ہنسنا",
    "definition": "Laughed — اردو معنی: ہنسنا"
  },
  {
    "word": "Laughing",
    "urdu": "ہنسنا",
    "definition": "Laughing — اردو معنی: ہنسنا"
  },
  {
    "word": "Laughs",
    "urdu": "ہنسنا",
    "definition": "Laughs — اردو معنی: ہنسنا"
  },
  {
    "word": "Listened",
    "urdu": "سننا",
    "definition": "Listened — اردو معنی: سننا"
  },
  {
    "word": "Listening",
    "urdu": "سننا",
    "definition": "Listening — اردو معنی: سننا"
  },
  {
    "word": "Listens",
    "urdu": "سننا",
    "definition": "Listens — اردو معنی: سننا"
  },
  {
    "word": "Lived",
    "urdu": "رہنا",
    "definition": "Lived — اردو معنی: رہنا"
  },
  {
    "word": "Lives",
    "urdu": "رہنا",
    "definition": "Lives — اردو معنی: رہنا"
  },
  {
    "word": "Looked",
    "urdu": "دیکھنا",
    "definition": "Looked — اردو معنی: دیکھنا"
  },
  {
    "word": "Looking",
    "urdu": "دیکھنا",
    "definition": "Looking — اردو معنی: دیکھنا"
  },
  {
    "word": "Looks",
    "urdu": "دیکھنا",
    "definition": "Looks — اردو معنی: دیکھنا"
  },
  {
    "word": "Loved",
    "urdu": "محبت",
    "definition": "Loved — اردو معنی: محبت"
  },
  {
    "word": "Loving",
    "urdu": "محبت",
    "definition": "Loving — اردو معنی: محبت"
  },
  {
    "word": "Loves",
    "urdu": "محبت",
    "definition": "Loves — اردو معنی: محبت"
  },
  {
    "word": "Managed",
    "urdu": "انتظام کرنا",
    "definition": "Managed — اردو معنی: انتظام کرنا"
  },
  {
    "word": "Managing",
    "urdu": "انتظام کرنا",
    "definition": "Managing — اردو معنی: انتظام کرنا"
  },
  {
    "word": "Manages",
    "urdu": "انتظام کرنا",
    "definition": "Manages — اردو معنی: انتظام کرنا"
  },
  {
    "word": "Marrying",
    "urdu": "شادی کرنا",
    "definition": "Marrying — اردو معنی: شادی کرنا"
  },
  {
    "word": "Marries",
    "urdu": "شادی کرنا",
    "definition": "Marries — اردو معنی: شادی کرنا"
  },
  {
    "word": "Moved",
    "urdu": "حرکت کرنا",
    "definition": "Moved — اردو معنی: حرکت کرنا"
  },
  {
    "word": "Moving",
    "urdu": "حرکت کرنا",
    "definition": "Moving — اردو معنی: حرکت کرنا"
  },
  {
    "word": "Moves",
    "urdu": "حرکت کرنا",
    "definition": "Moves — اردو معنی: حرکت کرنا"
  },
  {
    "word": "Needed",
    "urdu": "ضرورت",
    "definition": "Needed — اردو معنی: ضرورت"
  },
  {
    "word": "Needing",
    "urdu": "ضرورت",
    "definition": "Needing — اردو معنی: ضرورت"
  },
  {
    "word": "Needs",
    "urdu": "ضرورت",
    "definition": "Needs — اردو معنی: ضرورت"
  },
  {
    "word": "Noticed",
    "urdu": "نوٹس کرنا",
    "definition": "Noticed — اردو معنی: نوٹس کرنا"
  },
  {
    "word": "Noticing",
    "urdu": "نوٹس کرنا",
    "definition": "Noticing — اردو معنی: نوٹس کرنا"
  },
  {
    "word": "Notices",
    "urdu": "نوٹس کرنا",
    "definition": "Notices — اردو معنی: نوٹس کرنا"
  },
  {
    "word": "Ordered",
    "urdu": "حکم",
    "definition": "Ordered — اردو معنی: حکم"
  },
  {
    "word": "Ordering",
    "urdu": "حکم",
    "definition": "Ordering — اردو معنی: حکم"
  },
  {
    "word": "Orders",
    "urdu": "حکم",
    "definition": "Orders — اردو معنی: حکم"
  },
  {
    "word": "Organized",
    "urdu": "منظم کرنا",
    "definition": "Organized — اردو معنی: منظم کرنا"
  },
  {
    "word": "Organizing",
    "urdu": "منظم کرنا",
    "definition": "Organizing — اردو معنی: منظم کرنا"
  },
  {
    "word": "Organizes",
    "urdu": "منظم کرنا",
    "definition": "Organizes — اردو معنی: منظم کرنا"
  },
  {
    "word": "Painted",
    "urdu": "رنگ کرنا",
    "definition": "Painted — اردو معنی: رنگ کرنا"
  },
  {
    "word": "Paints",
    "urdu": "رنگ کرنا",
    "definition": "Paints — اردو معنی: رنگ کرنا"
  },
  {
    "word": "Passed",
    "urdu": "گزرنا",
    "definition": "Passed — اردو معنی: گزرنا"
  },
  {
    "word": "Passing",
    "urdu": "گزرنا",
    "definition": "Passing — اردو معنی: گزرنا"
  },
  {
    "word": "Passes",
    "urdu": "گزرنا",
    "definition": "Passes — اردو معنی: گزرنا"
  },
  {
    "word": "Planed",
    "urdu": "منصوبہ",
    "definition": "Planed — اردو معنی: منصوبہ"
  },
  {
    "word": "Planing",
    "urdu": "منصوبہ",
    "definition": "Planing — اردو معنی: منصوبہ"
  },
  {
    "word": "Plans",
    "urdu": "منصوبہ",
    "definition": "Plans — اردو معنی: منصوبہ"
  },
  {
    "word": "Played",
    "urdu": "کھیلنا",
    "definition": "Played — اردو معنی: کھیلنا"
  },
  {
    "word": "Playing",
    "urdu": "کھیلنا",
    "definition": "Playing — اردو معنی: کھیلنا"
  },
  {
    "word": "Plays",
    "urdu": "کھیلنا",
    "definition": "Plays — اردو معنی: کھیلنا"
  },
  {
    "word": "Preparing",
    "urdu": "تیار کرنا",
    "definition": "Preparing — اردو معنی: تیار کرنا"
  },
  {
    "word": "Prepares",
    "urdu": "تیار کرنا",
    "definition": "Prepares — اردو معنی: تیار کرنا"
  },
  {
    "word": "Printed",
    "urdu": "چھاپنا",
    "definition": "Printed — اردو معنی: چھاپنا"
  },
  {
    "word": "Printing",
    "urdu": "چھاپنا",
    "definition": "Printing — اردو معنی: چھاپنا"
  },
  {
    "word": "Prints",
    "urdu": "چھاپنا",
    "definition": "Prints — اردو معنی: چھاپنا"
  },
  {
    "word": "Protected",
    "urdu": "حفاظت کرنا",
    "definition": "Protected — اردو معنی: حفاظت کرنا"
  },
  {
    "word": "Protecting",
    "urdu": "حفاظت کرنا",
    "definition": "Protecting — اردو معنی: حفاظت کرنا"
  },
  {
    "word": "Protects",
    "urdu": "حفاظت کرنا",
    "definition": "Protects — اردو معنی: حفاظت کرنا"
  },
  {
    "word": "Pulled",
    "urdu": "کھینچنا",
    "definition": "Pulled — اردو معنی: کھینچنا"
  },
  {
    "word": "Pulling",
    "urdu": "کھینچنا",
    "definition": "Pulling — اردو معنی: کھینچنا"
  },
  {
    "word": "Pulls",
    "urdu": "کھینچنا",
    "definition": "Pulls — اردو معنی: کھینچنا"
  },
  {
    "word": "Pushed",
    "urdu": "دھکیلنا",
    "definition": "Pushed — اردو معنی: دھکیلنا"
  },
  {
    "word": "Pushing",
    "urdu": "دھکیلنا",
    "definition": "Pushing — اردو معنی: دھکیلنا"
  },
  {
    "word": "Pushes",
    "urdu": "دھکیلنا",
    "definition": "Pushes — اردو معنی: دھکیلنا"
  },
  {
    "word": "Raised",
    "urdu": "اٹھانا",
    "definition": "Raised — اردو معنی: اٹھانا"
  },
  {
    "word": "Raising",
    "urdu": "اٹھانا",
    "definition": "Raising — اردو معنی: اٹھانا"
  },
  {
    "word": "Raises",
    "urdu": "اٹھانا",
    "definition": "Raises — اردو معنی: اٹھانا"
  },
  {
    "word": "Reached",
    "urdu": "پہنچنا",
    "definition": "Reached — اردو معنی: پہنچنا"
  },
  {
    "word": "Reaching",
    "urdu": "پہنچنا",
    "definition": "Reaching — اردو معنی: پہنچنا"
  },
  {
    "word": "Reaches",
    "urdu": "پہنچنا",
    "definition": "Reaches — اردو معنی: پہنچنا"
  },
  {
    "word": "Remembered",
    "urdu": "یاد رکھنا",
    "definition": "Remembered — اردو معنی: یاد رکھنا"
  },
  {
    "word": "Remembering",
    "urdu": "یاد رکھنا",
    "definition": "Remembering — اردو معنی: یاد رکھنا"
  },
  {
    "word": "Remembers",
    "urdu": "یاد رکھنا",
    "definition": "Remembers — اردو معنی: یاد رکھنا"
  },
  {
    "word": "Repeated",
    "urdu": "دہرانا",
    "definition": "Repeated — اردو معنی: دہرانا"
  },
  {
    "word": "Repeating",
    "urdu": "دہرانا",
    "definition": "Repeating — اردو معنی: دہرانا"
  },
  {
    "word": "Repeats",
    "urdu": "دہرانا",
    "definition": "Repeats — اردو معنی: دہرانا"
  },
  {
    "word": "Replied",
    "urdu": "جواب دینا",
    "definition": "Replied — اردو معنی: جواب دینا"
  },
  {
    "word": "Replying",
    "urdu": "جواب دینا",
    "definition": "Replying — اردو معنی: جواب دینا"
  },
  {
    "word": "Replies",
    "urdu": "جواب دینا",
    "definition": "Replies — اردو معنی: جواب دینا"
  },
  {
    "word": "Repaired",
    "urdu": "مرمت کرنا",
    "definition": "Repaired — اردو معنی: مرمت کرنا"
  },
  {
    "word": "Repairing",
    "urdu": "مرمت کرنا",
    "definition": "Repairing — اردو معنی: مرمت کرنا"
  },
  {
    "word": "Repairs",
    "urdu": "مرمت کرنا",
    "definition": "Repairs — اردو معنی: مرمت کرنا"
  },
  {
    "word": "Reported",
    "urdu": "رپورٹ",
    "definition": "Reported — اردو معنی: رپورٹ"
  },
  {
    "word": "Reporting",
    "urdu": "رپورٹ",
    "definition": "Reporting — اردو معنی: رپورٹ"
  },
  {
    "word": "Reports",
    "urdu": "رپورٹ",
    "definition": "Reports — اردو معنی: رپورٹ"
  },
  {
    "word": "Returned",
    "urdu": "واپس آنا",
    "definition": "Returned — اردو معنی: واپس آنا"
  },
  {
    "word": "Returning",
    "urdu": "واپس آنا",
    "definition": "Returning — اردو معنی: واپس آنا"
  },
  {
    "word": "Returns",
    "urdu": "واپس آنا",
    "definition": "Returns — اردو معنی: واپس آنا"
  },
  {
    "word": "Saved",
    "urdu": "بچانا",
    "definition": "Saved — اردو معنی: بچانا"
  },
  {
    "word": "Saves",
    "urdu": "بچانا",
    "definition": "Saves — اردو معنی: بچانا"
  },
  {
    "word": "Searched",
    "urdu": "تلاش",
    "definition": "Searched — اردو معنی: تلاش"
  },
  {
    "word": "Searching",
    "urdu": "تلاش",
    "definition": "Searching — اردو معنی: تلاش"
  },
  {
    "word": "Searches",
    "urdu": "تلاش",
    "definition": "Searches — اردو معنی: تلاش"
  },
  {
    "word": "Selected",
    "urdu": "منتخب کرنا",
    "definition": "Selected — اردو معنی: منتخب کرنا"
  },
  {
    "word": "Selecting",
    "urdu": "منتخب کرنا",
    "definition": "Selecting — اردو معنی: منتخب کرنا"
  },
  {
    "word": "Selects",
    "urdu": "منتخب کرنا",
    "definition": "Selects — اردو معنی: منتخب کرنا"
  },
  {
    "word": "Shared",
    "urdu": "بانٹنا",
    "definition": "Shared — اردو معنی: بانٹنا"
  },
  {
    "word": "Sharing",
    "urdu": "بانٹنا",
    "definition": "Sharing — اردو معنی: بانٹنا"
  },
  {
    "word": "Shares",
    "urdu": "بانٹنا",
    "definition": "Shares — اردو معنی: بانٹنا"
  },
  {
    "word": "Shouted",
    "urdu": "چلانا",
    "definition": "Shouted — اردو معنی: چلانا"
  },
  {
    "word": "Shouting",
    "urdu": "چلانا",
    "definition": "Shouting — اردو معنی: چلانا"
  },
  {
    "word": "Shouts",
    "urdu": "چلانا",
    "definition": "Shouts — اردو معنی: چلانا"
  },
  {
    "word": "Smiled",
    "urdu": "مسکراہٹ",
    "definition": "Smiled — اردو معنی: مسکراہٹ"
  },
  {
    "word": "Smiling",
    "urdu": "مسکراہٹ",
    "definition": "Smiling — اردو معنی: مسکراہٹ"
  },
  {
    "word": "Smiles",
    "urdu": "مسکراہٹ",
    "definition": "Smiles — اردو معنی: مسکراہٹ"
  },
  {
    "word": "Solved",
    "urdu": "حل کرنا",
    "definition": "Solved — اردو معنی: حل کرنا"
  },
  {
    "word": "Solving",
    "urdu": "حل کرنا",
    "definition": "Solving — اردو معنی: حل کرنا"
  },
  {
    "word": "Solves",
    "urdu": "حل کرنا",
    "definition": "Solves — اردو معنی: حل کرنا"
  },
  {
    "word": "Started",
    "urdu": "شروع کرنا",
    "definition": "Started — اردو معنی: شروع کرنا"
  },
  {
    "word": "Starting",
    "urdu": "شروع کرنا",
    "definition": "Starting — اردو معنی: شروع کرنا"
  },
  {
    "word": "Starts",
    "urdu": "شروع کرنا",
    "definition": "Starts — اردو معنی: شروع کرنا"
  },
  {
    "word": "Stayed",
    "urdu": "ٹھہرنا",
    "definition": "Stayed — اردو معنی: ٹھہرنا"
  },
  {
    "word": "Staying",
    "urdu": "ٹھہرنا",
    "definition": "Staying — اردو معنی: ٹھہرنا"
  },
  {
    "word": "Stays",
    "urdu": "ٹھہرنا",
    "definition": "Stays — اردو معنی: ٹھہرنا"
  },
  {
    "word": "Stoped",
    "urdu": "رکنا",
    "definition": "Stoped — اردو معنی: رکنا"
  },
  {
    "word": "Stoping",
    "urdu": "رکنا",
    "definition": "Stoping — اردو معنی: رکنا"
  },
  {
    "word": "Stops",
    "urdu": "رکنا",
    "definition": "Stops — اردو معنی: رکنا"
  },
  {
    "word": "Studied",
    "urdu": "مطالعہ",
    "definition": "Studied — اردو معنی: مطالعہ"
  },
  {
    "word": "Studying",
    "urdu": "مطالعہ",
    "definition": "Studying — اردو معنی: مطالعہ"
  },
  {
    "word": "Studies",
    "urdu": "مطالعہ",
    "definition": "Studies — اردو معنی: مطالعہ"
  },
  {
    "word": "Suggested",
    "urdu": "تجویز دینا",
    "definition": "Suggested — اردو معنی: تجویز دینا"
  },
  {
    "word": "Suggesting",
    "urdu": "تجویز دینا",
    "definition": "Suggesting — اردو معنی: تجویز دینا"
  },
  {
    "word": "Suggests",
    "urdu": "تجویز دینا",
    "definition": "Suggests — اردو معنی: تجویز دینا"
  },
  {
    "word": "Supported",
    "urdu": "مدد",
    "definition": "Supported — اردو معنی: مدد"
  },
  {
    "word": "Supporting",
    "urdu": "مدد",
    "definition": "Supporting — اردو معنی: مدد"
  },
  {
    "word": "Supports",
    "urdu": "مدد",
    "definition": "Supports — اردو معنی: مدد"
  },
  {
    "word": "Talked",
    "urdu": "بات کرنا",
    "definition": "Talked — اردو معنی: بات کرنا"
  },
  {
    "word": "Talks",
    "urdu": "بات کرنا",
    "definition": "Talks — اردو معنی: بات کرنا"
  },
  {
    "word": "Tasted",
    "urdu": "ذائقہ",
    "definition": "Tasted — اردو معنی: ذائقہ"
  },
  {
    "word": "Tasting",
    "urdu": "ذائقہ",
    "definition": "Tasting — اردو معنی: ذائقہ"
  },
  {
    "word": "Tastes",
    "urdu": "ذائقہ",
    "definition": "Tastes — اردو معنی: ذائقہ"
  },
  {
    "word": "Thanked",
    "urdu": "شکریہ ادا کرنا",
    "definition": "Thanked — اردو معنی: شکریہ ادا کرنا"
  },
  {
    "word": "Thanking",
    "urdu": "شکریہ ادا کرنا",
    "definition": "Thanking — اردو معنی: شکریہ ادا کرنا"
  },
  {
    "word": "Touched",
    "urdu": "چھونا",
    "definition": "Touched — اردو معنی: چھونا"
  },
  {
    "word": "Touching",
    "urdu": "چھونا",
    "definition": "Touching — اردو معنی: چھونا"
  },
  {
    "word": "Touches",
    "urdu": "چھونا",
    "definition": "Touches — اردو معنی: چھونا"
  },
  {
    "word": "Traveled",
    "urdu": "سفر",
    "definition": "Traveled — اردو معنی: سفر"
  },
  {
    "word": "Travels",
    "urdu": "سفر",
    "definition": "Travels — اردو معنی: سفر"
  },
  {
    "word": "Tried",
    "urdu": "کوشش کرنا",
    "definition": "Tried — اردو معنی: کوشش کرنا"
  },
  {
    "word": "Tries",
    "urdu": "کوشش کرنا",
    "definition": "Tries — اردو معنی: کوشش کرنا"
  },
  {
    "word": "Turned",
    "urdu": "موڑنا",
    "definition": "Turned — اردو معنی: موڑنا"
  },
  {
    "word": "Turns",
    "urdu": "موڑنا",
    "definition": "Turns — اردو معنی: موڑنا"
  },
  {
    "word": "Using",
    "urdu": "استعمال کرنا",
    "definition": "Using — اردو معنی: استعمال کرنا"
  },
  {
    "word": "Uses",
    "urdu": "استعمال کرنا",
    "definition": "Uses — اردو معنی: استعمال کرنا"
  },
  {
    "word": "Visited",
    "urdu": "ملاقات کرنا",
    "definition": "Visited — اردو معنی: ملاقات کرنا"
  },
  {
    "word": "Visiting",
    "urdu": "ملاقات کرنا",
    "definition": "Visiting — اردو معنی: ملاقات کرنا"
  },
  {
    "word": "Visits",
    "urdu": "ملاقات کرنا",
    "definition": "Visits — اردو معنی: ملاقات کرنا"
  },
  {
    "word": "Waited",
    "urdu": "انتظار کرنا",
    "definition": "Waited — اردو معنی: انتظار کرنا"
  },
  {
    "word": "Waits",
    "urdu": "انتظار کرنا",
    "definition": "Waits — اردو معنی: انتظار کرنا"
  },
  {
    "word": "Walked",
    "urdu": "چلنا",
    "definition": "Walked — اردو معنی: چلنا"
  },
  {
    "word": "Walks",
    "urdu": "چلنا",
    "definition": "Walks — اردو معنی: چلنا"
  },
  {
    "word": "Washed",
    "urdu": "دھونا",
    "definition": "Washed — اردو معنی: دھونا"
  },
  {
    "word": "Washes",
    "urdu": "دھونا",
    "definition": "Washes — اردو معنی: دھونا"
  },
  {
    "word": "Watched",
    "urdu": "دیکھنا",
    "definition": "Watched — اردو معنی: دیکھنا"
  },
  {
    "word": "Watches",
    "urdu": "دیکھنا",
    "definition": "Watches — اردو معنی: دیکھنا"
  },
  {
    "word": "Worked",
    "urdu": "کام",
    "definition": "Worked — اردو معنی: کام"
  },
  {
    "word": "Works",
    "urdu": "کام",
    "definition": "Works — اردو معنی: کام"
  },
  {
    "word": "Worries",
    "urdu": "فکر کرنا",
    "definition": "Worries — اردو معنی: فکر کرنا"
  },
  {
    "word": "Borrowed",
    "urdu": "ادھار لینا",
    "definition": "Borrowed — اردو معنی: ادھار لینا"
  },
  {
    "word": "Borrowing",
    "urdu": "ادھار لینا",
    "definition": "Borrowing — اردو معنی: ادھار لینا"
  },
  {
    "word": "Borrows",
    "urdu": "ادھار لینا",
    "definition": "Borrows — اردو معنی: ادھار لینا"
  },
  {
    "word": "Brushed",
    "urdu": "برش کرنا",
    "definition": "Brushed — اردو معنی: برش کرنا"
  },
  {
    "word": "Brushing",
    "urdu": "برش کرنا",
    "definition": "Brushing — اردو معنی: برش کرنا"
  },
  {
    "word": "Brushes",
    "urdu": "برش کرنا",
    "definition": "Brushes — اردو معنی: برش کرنا"
  },
  {
    "word": "Canceled",
    "urdu": "منسوخ کرنا",
    "definition": "Canceled — اردو معنی: منسوخ کرنا"
  },
  {
    "word": "Canceling",
    "urdu": "منسوخ کرنا",
    "definition": "Canceling — اردو معنی: منسوخ کرنا"
  },
  {
    "word": "Cancels",
    "urdu": "منسوخ کرنا",
    "definition": "Cancels — اردو معنی: منسوخ کرنا"
  },
  {
    "word": "Celebrated",
    "urdu": "جشن منانا",
    "definition": "Celebrated — اردو معنی: جشن منانا"
  },
  {
    "word": "Celebrating",
    "urdu": "جشن منانا",
    "definition": "Celebrating — اردو معنی: جشن منانا"
  },
  {
    "word": "Celebrates",
    "urdu": "جشن منانا",
    "definition": "Celebrates — اردو معنی: جشن منانا"
  },
  {
    "word": "Charged",
    "urdu": "قیمت وصول کرنا",
    "definition": "Charged — اردو معنی: قیمت وصول کرنا"
  },
  {
    "word": "Charging",
    "urdu": "قیمت وصول کرنا",
    "definition": "Charging — اردو معنی: قیمت وصول کرنا"
  },
  {
    "word": "Charges",
    "urdu": "قیمت وصول کرنا",
    "definition": "Charges — اردو معنی: قیمت وصول کرنا"
  },
  {
    "word": "Continued",
    "urdu": "جاری رکھنا",
    "definition": "Continued — اردو معنی: جاری رکھنا"
  },
  {
    "word": "Continuing",
    "urdu": "جاری رکھنا",
    "definition": "Continuing — اردو معنی: جاری رکھنا"
  },
  {
    "word": "Continues",
    "urdu": "جاری رکھنا",
    "definition": "Continues — اردو معنی: جاری رکھنا"
  },
  {
    "word": "Controled",
    "urdu": "قابو",
    "definition": "Controled — اردو معنی: قابو"
  },
  {
    "word": "Controling",
    "urdu": "قابو",
    "definition": "Controling — اردو معنی: قابو"
  },
  {
    "word": "Controls",
    "urdu": "قابو",
    "definition": "Controls — اردو معنی: قابو"
  },
  {
    "word": "Covered",
    "urdu": "ڈھانپنا",
    "definition": "Covered — اردو معنی: ڈھانپنا"
  },
  {
    "word": "Covering",
    "urdu": "ڈھانپنا",
    "definition": "Covering — اردو معنی: ڈھانپنا"
  },
  {
    "word": "Covers",
    "urdu": "ڈھانپنا",
    "definition": "Covers — اردو معنی: ڈھانپنا"
  },
  {
    "word": "Crossed",
    "urdu": "پار کرنا",
    "definition": "Crossed — اردو معنی: پار کرنا"
  },
  {
    "word": "Crossing",
    "urdu": "پار کرنا",
    "definition": "Crossing — اردو معنی: پار کرنا"
  },
  {
    "word": "Crosses",
    "urdu": "پار کرنا",
    "definition": "Crosses — اردو معنی: پار کرنا"
  },
  {
    "word": "Damaged",
    "urdu": "نقصان",
    "definition": "Damaged — اردو معنی: نقصان"
  },
  {
    "word": "Damaging",
    "urdu": "نقصان",
    "definition": "Damaging — اردو معنی: نقصان"
  },
  {
    "word": "Damages",
    "urdu": "نقصان",
    "definition": "Damages — اردو معنی: نقصان"
  },
  {
    "word": "Depended",
    "urdu": "انحصار کرنا",
    "definition": "Depended — اردو معنی: انحصار کرنا"
  },
  {
    "word": "Depending",
    "urdu": "انحصار کرنا",
    "definition": "Depending — اردو معنی: انحصار کرنا"
  },
  {
    "word": "Depends",
    "urdu": "انحصار کرنا",
    "definition": "Depends — اردو معنی: انحصار کرنا"
  },
  {
    "word": "Designed",
    "urdu": "ڈیزائن",
    "definition": "Designed — اردو معنی: ڈیزائن"
  },
  {
    "word": "Designing",
    "urdu": "ڈیزائن",
    "definition": "Designing — اردو معنی: ڈیزائن"
  },
  {
    "word": "Designs",
    "urdu": "ڈیزائن",
    "definition": "Designs — اردو معنی: ڈیزائن"
  },
  {
    "word": "Disappeared",
    "urdu": "غائب ہونا",
    "definition": "Disappeared — اردو معنی: غائب ہونا"
  },
  {
    "word": "Disappearing",
    "urdu": "غائب ہونا",
    "definition": "Disappearing — اردو معنی: غائب ہونا"
  },
  {
    "word": "Disappears",
    "urdu": "غائب ہونا",
    "definition": "Disappears — اردو معنی: غائب ہونا"
  },
  {
    "word": "Earned",
    "urdu": "کمانا",
    "definition": "Earned — اردو معنی: کمانا"
  },
  {
    "word": "Earning",
    "urdu": "کمانا",
    "definition": "Earning — اردو معنی: کمانا"
  },
  {
    "word": "Earns",
    "urdu": "کمانا",
    "definition": "Earns — اردو معنی: کمانا"
  },
  {
    "word": "Exercised",
    "urdu": "ورزش",
    "definition": "Exercised — اردو معنی: ورزش"
  },
  {
    "word": "Exercising",
    "urdu": "ورزش",
    "definition": "Exercising — اردو معنی: ورزش"
  },
  {
    "word": "Exercises",
    "urdu": "ورزش",
    "definition": "Exercises — اردو معنی: ورزش"
  },
  {
    "word": "Expected",
    "urdu": "توقع کرنا",
    "definition": "Expected — اردو معنی: توقع کرنا"
  },
  {
    "word": "Expecting",
    "urdu": "توقع کرنا",
    "definition": "Expecting — اردو معنی: توقع کرنا"
  },
  {
    "word": "Expects",
    "urdu": "توقع کرنا",
    "definition": "Expects — اردو معنی: توقع کرنا"
  },
  {
    "word": "Experienced",
    "urdu": "تجربہ",
    "definition": "Experienced — اردو معنی: تجربہ"
  },
  {
    "word": "Experiencing",
    "urdu": "تجربہ",
    "definition": "Experiencing — اردو معنی: تجربہ"
  },
  {
    "word": "Experiences",
    "urdu": "تجربہ",
    "definition": "Experiences — اردو معنی: تجربہ"
  },
  {
    "word": "Faced",
    "urdu": "چہرہ",
    "definition": "Faced — اردو معنی: چہرہ"
  },
  {
    "word": "Facing",
    "urdu": "چہرہ",
    "definition": "Facing — اردو معنی: چہرہ"
  },
  {
    "word": "Faces",
    "urdu": "چہرہ",
    "definition": "Faces — اردو معنی: چہرہ"
  },
  {
    "word": "Feared",
    "urdu": "ڈر",
    "definition": "Feared — اردو معنی: ڈر"
  },
  {
    "word": "Fearing",
    "urdu": "ڈر",
    "definition": "Fearing — اردو معنی: ڈر"
  },
  {
    "word": "Fears",
    "urdu": "ڈر",
    "definition": "Fears — اردو معنی: ڈر"
  },
  {
    "word": "Happened",
    "urdu": "ہونا",
    "definition": "Happened — اردو معنی: ہونا"
  },
  {
    "word": "Happening",
    "urdu": "ہونا",
    "definition": "Happening — اردو معنی: ہونا"
  },
  {
    "word": "Happens",
    "urdu": "ہونا",
    "definition": "Happens — اردو معنی: ہونا"
  },
  {
    "word": "Hated",
    "urdu": "نفرت کرنا",
    "definition": "Hated — اردو معنی: نفرت کرنا"
  },
  {
    "word": "Hating",
    "urdu": "نفرت کرنا",
    "definition": "Hating — اردو معنی: نفرت کرنا"
  },
  {
    "word": "Hates",
    "urdu": "نفرت کرنا",
    "definition": "Hates — اردو معنی: نفرت کرنا"
  },
  {
    "word": "Hided",
    "urdu": "چھپانا",
    "definition": "Hided — اردو معنی: چھپانا"
  },
  {
    "word": "Hiding",
    "urdu": "چھپانا",
    "definition": "Hiding — اردو معنی: چھپانا"
  },
  {
    "word": "Hides",
    "urdu": "چھپانا",
    "definition": "Hides — اردو معنی: چھپانا"
  },
  {
    "word": "Identified",
    "urdu": "شناخت کرنا",
    "definition": "Identified — اردو معنی: شناخت کرنا"
  },
  {
    "word": "Identifying",
    "urdu": "شناخت کرنا",
    "definition": "Identifying — اردو معنی: شناخت کرنا"
  },
  {
    "word": "Identifies",
    "urdu": "شناخت کرنا",
    "definition": "Identifies — اردو معنی: شناخت کرنا"
  },
  {
    "word": "Imagined",
    "urdu": "تصور کرنا",
    "definition": "Imagined — اردو معنی: تصور کرنا"
  },
  {
    "word": "Imagining",
    "urdu": "تصور کرنا",
    "definition": "Imagining — اردو معنی: تصور کرنا"
  },
  {
    "word": "Imagines",
    "urdu": "تصور کرنا",
    "definition": "Imagines — اردو معنی: تصور کرنا"
  },
  {
    "word": "Introduced",
    "urdu": "تعارف کرانا",
    "definition": "Introduced — اردو معنی: تعارف کرانا"
  },
  {
    "word": "Introducing",
    "urdu": "تعارف کرانا",
    "definition": "Introducing — اردو معنی: تعارف کرانا"
  },
  {
    "word": "Introduces",
    "urdu": "تعارف کرانا",
    "definition": "Introduces — اردو معنی: تعارف کرانا"
  },
  {
    "word": "Kicked",
    "urdu": "لات مارنا",
    "definition": "Kicked — اردو معنی: لات مارنا"
  },
  {
    "word": "Kicking",
    "urdu": "لات مارنا",
    "definition": "Kicking — اردو معنی: لات مارنا"
  },
  {
    "word": "Kicks",
    "urdu": "لات مارنا",
    "definition": "Kicks — اردو معنی: لات مارنا"
  },
  {
    "word": "Lifted",
    "urdu": "اٹھانا",
    "definition": "Lifted — اردو معنی: اٹھانا"
  },
  {
    "word": "Lifting",
    "urdu": "اٹھانا",
    "definition": "Lifting — اردو معنی: اٹھانا"
  },
  {
    "word": "Lifts",
    "urdu": "اٹھانا",
    "definition": "Lifts — اردو معنی: اٹھانا"
  },
  {
    "word": "Locked",
    "urdu": "تالا",
    "definition": "Locked — اردو معنی: تالا"
  },
  {
    "word": "Locking",
    "urdu": "تالا",
    "definition": "Locking — اردو معنی: تالا"
  },
  {
    "word": "Locks",
    "urdu": "تالا",
    "definition": "Locks — اردو معنی: تالا"
  },
  {
    "word": "Measured",
    "urdu": "ناپنا",
    "definition": "Measured — اردو معنی: ناپنا"
  },
  {
    "word": "Measuring",
    "urdu": "ناپنا",
    "definition": "Measuring — اردو معنی: ناپنا"
  },
  {
    "word": "Measures",
    "urdu": "ناپنا",
    "definition": "Measures — اردو معنی: ناپنا"
  },
  {
    "word": "Missed",
    "urdu": "یاد کرنا",
    "definition": "Missed — اردو معنی: یاد کرنا"
  },
  {
    "word": "Misses",
    "urdu": "یاد کرنا",
    "definition": "Misses — اردو معنی: یاد کرنا"
  },
  {
    "word": "Placed",
    "urdu": "جگہ",
    "definition": "Placed — اردو معنی: جگہ"
  },
  {
    "word": "Placing",
    "urdu": "جگہ",
    "definition": "Placing — اردو معنی: جگہ"
  },
  {
    "word": "Places",
    "urdu": "جگہ",
    "definition": "Places — اردو معنی: جگہ"
  },
  {
    "word": "Prefered",
    "urdu": "ترجیح دینا",
    "definition": "Prefered — اردو معنی: ترجیح دینا"
  },
  {
    "word": "Prefering",
    "urdu": "ترجیح دینا",
    "definition": "Prefering — اردو معنی: ترجیح دینا"
  },
  {
    "word": "Prefers",
    "urdu": "ترجیح دینا",
    "definition": "Prefers — اردو معنی: ترجیح دینا"
  },
  {
    "word": "Promised",
    "urdu": "وعدہ",
    "definition": "Promised — اردو معنی: وعدہ"
  },
  {
    "word": "Promising",
    "urdu": "وعدہ",
    "definition": "Promising — اردو معنی: وعدہ"
  },
  {
    "word": "Promises",
    "urdu": "وعدہ",
    "definition": "Promises — اردو معنی: وعدہ"
  },
  {
    "word": "Provided",
    "urdu": "فراہم کرنا",
    "definition": "Provided — اردو معنی: فراہم کرنا"
  },
  {
    "word": "Providing",
    "urdu": "فراہم کرنا",
    "definition": "Providing — اردو معنی: فراہم کرنا"
  },
  {
    "word": "Provides",
    "urdu": "فراہم کرنا",
    "definition": "Provides — اردو معنی: فراہم کرنا"
  },
  {
    "word": "Received",
    "urdu": "وصول کرنا",
    "definition": "Received — اردو معنی: وصول کرنا"
  },
  {
    "word": "Receiving",
    "urdu": "وصول کرنا",
    "definition": "Receiving — اردو معنی: وصول کرنا"
  },
  {
    "word": "Receives",
    "urdu": "وصول کرنا",
    "definition": "Receives — اردو معنی: وصول کرنا"
  },
  {
    "word": "Refused",
    "urdu": "انکار کرنا",
    "definition": "Refused — اردو معنی: انکار کرنا"
  },
  {
    "word": "Refusing",
    "urdu": "انکار کرنا",
    "definition": "Refusing — اردو معنی: انکار کرنا"
  },
  {
    "word": "Refuses",
    "urdu": "انکار کرنا",
    "definition": "Refuses — اردو معنی: انکار کرنا"
  },
  {
    "word": "Relaxing",
    "urdu": "آرام کرنا",
    "definition": "Relaxing — اردو معنی: آرام کرنا"
  },
  {
    "word": "Relaxes",
    "urdu": "آرام کرنا",
    "definition": "Relaxes — اردو معنی: آرام کرنا"
  },
  {
    "word": "Removed",
    "urdu": "ہٹانا",
    "definition": "Removed — اردو معنی: ہٹانا"
  },
  {
    "word": "Removing",
    "urdu": "ہٹانا",
    "definition": "Removing — اردو معنی: ہٹانا"
  },
  {
    "word": "Removes",
    "urdu": "ہٹانا",
    "definition": "Removes — اردو معنی: ہٹانا"
  },
  {
    "word": "Rented",
    "urdu": "کرایہ",
    "definition": "Rented — اردو معنی: کرایہ"
  },
  {
    "word": "Renting",
    "urdu": "کرایہ",
    "definition": "Renting — اردو معنی: کرایہ"
  },
  {
    "word": "Rents",
    "urdu": "کرایہ",
    "definition": "Rents — اردو معنی: کرایہ"
  },
  {
    "word": "Rested",
    "urdu": "آرام",
    "definition": "Rested — اردو معنی: آرام"
  },
  {
    "word": "Resting",
    "urdu": "آرام",
    "definition": "Resting — اردو معنی: آرام"
  },
  {
    "word": "Rests",
    "urdu": "آرام",
    "definition": "Rests — اردو معنی: آرام"
  },
  {
    "word": "Rided",
    "urdu": "سواری کرنا",
    "definition": "Rided — اردو معنی: سواری کرنا"
  },
  {
    "word": "Riding",
    "urdu": "سواری کرنا",
    "definition": "Riding — اردو معنی: سواری کرنا"
  },
  {
    "word": "Rides",
    "urdu": "سواری کرنا",
    "definition": "Rides — اردو معنی: سواری کرنا"
  },
  {
    "word": "Signed",
    "urdu": "نشانی",
    "definition": "Signed — اردو معنی: نشانی"
  },
  {
    "word": "Signing",
    "urdu": "نشانی",
    "definition": "Signing — اردو معنی: نشانی"
  },
  {
    "word": "Signs",
    "urdu": "نشانی",
    "definition": "Signs — اردو معنی: نشانی"
  },
  {
    "word": "Smelled",
    "urdu": "بو",
    "definition": "Smelled — اردو معنی: بو"
  },
  {
    "word": "Smelling",
    "urdu": "بو",
    "definition": "Smelling — اردو معنی: بو"
  },
  {
    "word": "Smells",
    "urdu": "بو",
    "definition": "Smells — اردو معنی: بو"
  },
  {
    "word": "Spelled",
    "urdu": "ہجے کرنا",
    "definition": "Spelled — اردو معنی: ہجے کرنا"
  },
  {
    "word": "Spells",
    "urdu": "ہجے کرنا",
    "definition": "Spells — اردو معنی: ہجے کرنا"
  },
  {
    "word": "Spent",
    "urdu": "خرچ کرنا",
    "definition": "Spent — اردو معنی: خرچ کرنا"
  },
  {
    "word": "Spends",
    "urdu": "خرچ کرنا",
    "definition": "Spends — اردو معنی: خرچ کرنا"
  },
  {
    "word": "Switched",
    "urdu": "سوئچ",
    "definition": "Switched — اردو معنی: سوئچ"
  },
  {
    "word": "Switching",
    "urdu": "سوئچ",
    "definition": "Switching — اردو معنی: سوئچ"
  },
  {
    "word": "Switches",
    "urdu": "سوئچ",
    "definition": "Switches — اردو معنی: سوئچ"
  },
  {
    "word": "Translated",
    "urdu": "ترجمہ کرنا",
    "definition": "Translated — اردو معنی: ترجمہ کرنا"
  },
  {
    "word": "Translating",
    "urdu": "ترجمہ کرنا",
    "definition": "Translating — اردو معنی: ترجمہ کرنا"
  },
  {
    "word": "Translates",
    "urdu": "ترجمہ کرنا",
    "definition": "Translates — اردو معنی: ترجمہ کرنا"
  },
  {
    "word": "Trusted",
    "urdu": "بھروسہ",
    "definition": "Trusted — اردو معنی: بھروسہ"
  },
  {
    "word": "Trusting",
    "urdu": "بھروسہ",
    "definition": "Trusting — اردو معنی: بھروسہ"
  },
  {
    "word": "Trusts",
    "urdu": "بھروسہ",
    "definition": "Trusts — اردو معنی: بھروسہ"
  },
  {
    "word": "Apples",
    "urdu": "سیب",
    "definition": "Apples — اردو معنی: سیب"
  },
  {
    "word": "Arms",
    "urdu": "بازو",
    "definition": "Arms — اردو معنی: بازو"
  },
  {
    "word": "Bags",
    "urdu": "بیگ",
    "definition": "Bags — اردو معنی: بیگ"
  },
  {
    "word": "Bananas",
    "urdu": "کیلا",
    "definition": "Bananas — اردو معنی: کیلا"
  },
  {
    "word": "Banks",
    "urdu": "بینک",
    "definition": "Banks — اردو معنی: بینک"
  },
  {
    "word": "Beds",
    "urdu": "بستر",
    "definition": "Beds — اردو معنی: بستر"
  },
  {
    "word": "Bicycles",
    "urdu": "سائیکل",
    "definition": "Bicycles — اردو معنی: سائیکل"
  },
  {
    "word": "Bills",
    "urdu": "بل",
    "definition": "Bills — اردو معنی: بل"
  },
  {
    "word": "Birds",
    "urdu": "پرندہ",
    "definition": "Birds — اردو معنی: پرندہ"
  },
  {
    "word": "Bottles",
    "urdu": "بوتل",
    "definition": "Bottles — اردو معنی: بوتل"
  },
  {
    "word": "Boxes",
    "urdu": "ڈبہ",
    "definition": "Boxes — اردو معنی: ڈبہ"
  },
  {
    "word": "Boys",
    "urdu": "لڑکا",
    "definition": "Boys — اردو معنی: لڑکا"
  },
  {
    "word": "Branches",
    "urdu": "شاخ",
    "definition": "Branches — اردو معنی: شاخ"
  },
  {
    "word": "Brothers",
    "urdu": "بھائی",
    "definition": "Brothers — اردو معنی: بھائی"
  },
  {
    "word": "Buses",
    "urdu": "بس",
    "definition": "Buses — اردو معنی: بس"
  },
  {
    "word": "Buttons",
    "urdu": "بٹن",
    "definition": "Buttons — اردو معنی: بٹن"
  },
  {
    "word": "Cameras",
    "urdu": "کیمرہ",
    "definition": "Cameras — اردو معنی: کیمرہ"
  },
  {
    "word": "Cars",
    "urdu": "گاڑی",
    "definition": "Cars — اردو معنی: گاڑی"
  },
  {
    "word": "Cards",
    "urdu": "کارڈ",
    "definition": "Cards — اردو معنی: کارڈ"
  },
  {
    "word": "Cats",
    "urdu": "بلی",
    "definition": "Cats — اردو معنی: بلی"
  },
  {
    "word": "Chairs",
    "urdu": "کرسی",
    "definition": "Chairs — اردو معنی: کرسی"
  },
  {
    "word": "Childs",
    "urdu": "بچہ",
    "definition": "Childs — اردو معنی: بچہ"
  },
  {
    "word": "Cities",
    "urdu": "شہر",
    "definition": "Cities — اردو معنی: شہر"
  },
  {
    "word": "Classes",
    "urdu": "جماعت",
    "definition": "Classes — اردو معنی: جماعت"
  },
  {
    "word": "Clocks",
    "urdu": "گھڑی",
    "definition": "Clocks — اردو معنی: گھڑی"
  },
  {
    "word": "Clouds",
    "urdu": "بادل",
    "definition": "Clouds — اردو معنی: بادل"
  },
  {
    "word": "Coats",
    "urdu": "کوٹ",
    "definition": "Coats — اردو معنی: کوٹ"
  },
  {
    "word": "Coins",
    "urdu": "سکہ",
    "definition": "Coins — اردو معنی: سکہ"
  },
  {
    "word": "Companies",
    "urdu": "کمپنی",
    "definition": "Companies — اردو معنی: کمپنی"
  },
  {
    "word": "Computers",
    "urdu": "کمپیوٹر",
    "definition": "Computers — اردو معنی: کمپیوٹر"
  },
  {
    "word": "Countries",
    "urdu": "ملک",
    "definition": "Countries — اردو معنی: ملک"
  },
  {
    "word": "Customers",
    "urdu": "گاہک",
    "definition": "Customers — اردو معنی: گاہک"
  },
  {
    "word": "Desks",
    "urdu": "میز",
    "definition": "Desks — اردو معنی: میز"
  },
  {
    "word": "Doctors",
    "urdu": "ڈاکٹر",
    "definition": "Doctors — اردو معنی: ڈاکٹر"
  },
  {
    "word": "Doors",
    "urdu": "دروازہ",
    "definition": "Doors — اردو معنی: دروازہ"
  },
  {
    "word": "Dreams",
    "urdu": "خواب",
    "definition": "Dreams — اردو معنی: خواب"
  },
  {
    "word": "Drivers",
    "urdu": "ڈرائیور",
    "definition": "Drivers — اردو معنی: ڈرائیور"
  },
  {
    "word": "Eggs",
    "urdu": "انڈا",
    "definition": "Eggs — اردو معنی: انڈا"
  },
  {
    "word": "Eyes",
    "urdu": "آنکھ",
    "definition": "Eyes — اردو معنی: آنکھ"
  },
  {
    "word": "Families",
    "urdu": "خاندان",
    "definition": "Families — اردو معنی: خاندان"
  },
  {
    "word": "Fans",
    "urdu": "پنکھا",
    "definition": "Fans — اردو معنی: پنکھا"
  },
  {
    "word": "Farms",
    "urdu": "کھیت",
    "definition": "Farms — اردو معنی: کھیت"
  },
  {
    "word": "Fathers",
    "urdu": "والد",
    "definition": "Fathers — اردو معنی: والد"
  },
  {
    "word": "Fields",
    "urdu": "میدان",
    "definition": "Fields — اردو معنی: میدان"
  },
  {
    "word": "Files",
    "urdu": "فائل",
    "definition": "Files — اردو معنی: فائل"
  },
  {
    "word": "Fingers",
    "urdu": "انگلی",
    "definition": "Fingers — اردو معنی: انگلی"
  },
  {
    "word": "Flowers",
    "urdu": "پھول",
    "definition": "Flowers — اردو معنی: پھول"
  },
  {
    "word": "Friends",
    "urdu": "دوست",
    "definition": "Friends — اردو معنی: دوست"
  },
  {
    "word": "Games",
    "urdu": "کھیل",
    "definition": "Games — اردو معنی: کھیل"
  },
  {
    "word": "Gardens",
    "urdu": "باغ",
    "definition": "Gardens — اردو معنی: باغ"
  },
  {
    "word": "Gates",
    "urdu": "دروازہ",
    "definition": "Gates — اردو معنی: دروازہ"
  },
  {
    "word": "Girls",
    "urdu": "لڑکی",
    "definition": "Girls — اردو معنی: لڑکی"
  },
  {
    "word": "Groups",
    "urdu": "گروہ",
    "definition": "Groups — اردو معنی: گروہ"
  },
  {
    "word": "Guests",
    "urdu": "مہمان",
    "definition": "Guests — اردو معنی: مہمان"
  },
  {
    "word": "Hands",
    "urdu": "ہاتھ",
    "definition": "Hands — اردو معنی: ہاتھ"
  },
  {
    "word": "Hats",
    "urdu": "ٹوپی",
    "definition": "Hats — اردو معنی: ٹوپی"
  },
  {
    "word": "Heads",
    "urdu": "سر",
    "definition": "Heads — اردو معنی: سر"
  },
  {
    "word": "Hills",
    "urdu": "پہاڑی",
    "definition": "Hills — اردو معنی: پہاڑی"
  },
  {
    "word": "Holidays",
    "urdu": "چھٹی",
    "definition": "Holidays — اردو معنی: چھٹی"
  },
  {
    "word": "Homes",
    "urdu": "گھر",
    "definition": "Homes — اردو معنی: گھر"
  },
  {
    "word": "Hospitals",
    "urdu": "ہسپتال",
    "definition": "Hospitals — اردو معنی: ہسپتال"
  },
  {
    "word": "Hotels",
    "urdu": "ہوٹل",
    "definition": "Hotels — اردو معنی: ہوٹل"
  },
  {
    "word": "Houses",
    "urdu": "مکان",
    "definition": "Houses — اردو معنی: مکان"
  },
  {
    "word": "Ideas",
    "urdu": "خیال",
    "definition": "Ideas — اردو معنی: خیال"
  },
  {
    "word": "Islands",
    "urdu": "جزیرہ",
    "definition": "Islands — اردو معنی: جزیرہ"
  },
  {
    "word": "Jobs",
    "urdu": "ملازمت",
    "definition": "Jobs — اردو معنی: ملازمت"
  },
  {
    "word": "Keys",
    "urdu": "چابی",
    "definition": "Keys — اردو معنی: چابی"
  },
  {
    "word": "Kids",
    "urdu": "بچہ",
    "definition": "Kids — اردو معنی: بچہ"
  },
  {
    "word": "Kings",
    "urdu": "بادشاہ",
    "definition": "Kings — اردو معنی: بادشاہ"
  },
  {
    "word": "Kitchens",
    "urdu": "باورچی خانہ",
    "definition": "Kitchens — اردو معنی: باورچی خانہ"
  },
  {
    "word": "Knifes",
    "urdu": "چھری",
    "definition": "Knifes — اردو معنی: چھری"
  },
  {
    "word": "Lakes",
    "urdu": "جھیل",
    "definition": "Lakes — اردو معنی: جھیل"
  },
  {
    "word": "Languages",
    "urdu": "زبان",
    "definition": "Languages — اردو معنی: زبان"
  },
  {
    "word": "Lawyers",
    "urdu": "وکیل",
    "definition": "Lawyers — اردو معنی: وکیل"
  },
  {
    "word": "Lessons",
    "urdu": "سبق",
    "definition": "Lessons — اردو معنی: سبق"
  },
  {
    "word": "Letters",
    "urdu": "خط",
    "definition": "Letters — اردو معنی: خط"
  },
  {
    "word": "Libraries",
    "urdu": "کتب خانہ",
    "definition": "Libraries — اردو معنی: کتب خانہ"
  },
  {
    "word": "Lines",
    "urdu": "لکیر",
    "definition": "Lines — اردو معنی: لکیر"
  },
  {
    "word": "Lists",
    "urdu": "فہرست",
    "definition": "Lists — اردو معنی: فہرست"
  },
  {
    "word": "Machines",
    "urdu": "مشین",
    "definition": "Machines — اردو معنی: مشین"
  },
  {
    "word": "Mans",
    "urdu": "آدمی",
    "definition": "Mans — اردو معنی: آدمی"
  },
  {
    "word": "Maps",
    "urdu": "نقشہ",
    "definition": "Maps — اردو معنی: نقشہ"
  },
  {
    "word": "Markets",
    "urdu": "بازار",
    "definition": "Markets — اردو معنی: بازار"
  },
  {
    "word": "Meals",
    "urdu": "کھانا",
    "definition": "Meals — اردو معنی: کھانا"
  },
  {
    "word": "Meetings",
    "urdu": "اجلاس",
    "definition": "Meetings — اردو معنی: اجلاس"
  },
  {
    "word": "Members",
    "urdu": "رکن",
    "definition": "Members — اردو معنی: رکن"
  },
  {
    "word": "Messages",
    "urdu": "پیغام",
    "definition": "Messages — اردو معنی: پیغام"
  },
  {
    "word": "Minutes",
    "urdu": "منٹ",
    "definition": "Minutes — اردو معنی: منٹ"
  },
  {
    "word": "Mobiles",
    "urdu": "موبائل",
    "definition": "Mobiles — اردو معنی: موبائل"
  },
  {
    "word": "Moments",
    "urdu": "لمحہ",
    "definition": "Moments — اردو معنی: لمحہ"
  },
  {
    "word": "Months",
    "urdu": "مہینہ",
    "definition": "Months — اردو معنی: مہینہ"
  },
  {
    "word": "Mothers",
    "urdu": "والدہ",
    "definition": "Mothers — اردو معنی: والدہ"
  },
  {
    "word": "Mountains",
    "urdu": "پہاڑ",
    "definition": "Mountains — اردو معنی: پہاڑ"
  },
  {
    "word": "Mouses",
    "urdu": "چوہا",
    "definition": "Mouses — اردو معنی: چوہا"
  },
  {
    "word": "Names",
    "urdu": "نام",
    "definition": "Names — اردو معنی: نام"
  },
  {
    "word": "Neighbors",
    "urdu": "پڑوسی",
    "definition": "Neighbors — اردو معنی: پڑوسی"
  },
  {
    "word": "Nights",
    "urdu": "رات",
    "definition": "Nights — اردو معنی: رات"
  },
  {
    "word": "Numbers",
    "urdu": "عدد",
    "definition": "Numbers — اردو معنی: عدد"
  },
  {
    "word": "Offices",
    "urdu": "دفتر",
    "definition": "Offices — اردو معنی: دفتر"
  },
  {
    "word": "Officers",
    "urdu": "افسر",
    "definition": "Officers — اردو معنی: افسر"
  },
  {
    "word": "Oranges",
    "urdu": "مالٹا",
    "definition": "Oranges — اردو معنی: مالٹا"
  },
  {
    "word": "Pages",
    "urdu": "صفحہ",
    "definition": "Pages — اردو معنی: صفحہ"
  },
  {
    "word": "Parents",
    "urdu": "والدین",
    "definition": "Parents — اردو معنی: والدین"
  },
  {
    "word": "Parks",
    "urdu": "پارک",
    "definition": "Parks — اردو معنی: پارک"
  },
  {
    "word": "Parties",
    "urdu": "دعوت",
    "definition": "Parties — اردو معنی: دعوت"
  },
  {
    "word": "Passengers",
    "urdu": "مسافر",
    "definition": "Passengers — اردو معنی: مسافر"
  },
  {
    "word": "Patients",
    "urdu": "مریض",
    "definition": "Patients — اردو معنی: مریض"
  },
  {
    "word": "Pens",
    "urdu": "قلم",
    "definition": "Pens — اردو معنی: قلم"
  },
  {
    "word": "Persons",
    "urdu": "شخص",
    "definition": "Persons — اردو معنی: شخص"
  },
  {
    "word": "Photos",
    "urdu": "تصویر",
    "definition": "Photos — اردو معنی: تصویر"
  },
  {
    "word": "Pictures",
    "urdu": "تصویر",
    "definition": "Pictures — اردو معنی: تصویر"
  },
  {
    "word": "Planes",
    "urdu": "ہوائی جہاز",
    "definition": "Planes — اردو معنی: ہوائی جہاز"
  },
  {
    "word": "Plants",
    "urdu": "پودا",
    "definition": "Plants — اردو معنی: پودا"
  },
  {
    "word": "Plates",
    "urdu": "پلیٹ",
    "definition": "Plates — اردو معنی: پلیٹ"
  },
  {
    "word": "Players",
    "urdu": "کھلاڑی",
    "definition": "Players — اردو معنی: کھلاڑی"
  },
  {
    "word": "Policemans",
    "urdu": "پولیس اہلکار",
    "definition": "Policemans — اردو معنی: پولیس اہلکار"
  },
  {
    "word": "Problems",
    "urdu": "مسئلہ",
    "definition": "Problems — اردو معنی: مسئلہ"
  },
  {
    "word": "Products",
    "urdu": "مصنوعات",
    "definition": "Products — اردو معنی: مصنوعات"
  },
  {
    "word": "Projects",
    "urdu": "منصوبہ",
    "definition": "Projects — اردو معنی: منصوبہ"
  },
  {
    "word": "Questions",
    "urdu": "سوال",
    "definition": "Questions — اردو معنی: سوال"
  },
  {
    "word": "Reasons",
    "urdu": "وجہ",
    "definition": "Reasons — اردو معنی: وجہ"
  },
  {
    "word": "Records",
    "urdu": "ریکارڈ",
    "definition": "Records — اردو معنی: ریکارڈ"
  },
  {
    "word": "Restaurants",
    "urdu": "ریستوران",
    "definition": "Restaurants — اردو معنی: ریستوران"
  },
  {
    "word": "Roads",
    "urdu": "سڑک",
    "definition": "Roads — اردو معنی: سڑک"
  },
  {
    "word": "Rooms",
    "urdu": "کمرہ",
    "definition": "Rooms — اردو معنی: کمرہ"
  },
  {
    "word": "Rules",
    "urdu": "اصول",
    "definition": "Rules — اردو معنی: اصول"
  },
  {
    "word": "Schools",
    "urdu": "اسکول",
    "definition": "Schools — اردو معنی: اسکول"
  },
  {
    "word": "Screens",
    "urdu": "اسکرین",
    "definition": "Screens — اردو معنی: اسکرین"
  },
  {
    "word": "Seasons",
    "urdu": "موسم",
    "definition": "Seasons — اردو معنی: موسم"
  },
  {
    "word": "Seats",
    "urdu": "نشست",
    "definition": "Seats — اردو معنی: نشست"
  },
  {
    "word": "Sentences",
    "urdu": "جملہ",
    "definition": "Sentences — اردو معنی: جملہ"
  },
  {
    "word": "Shops",
    "urdu": "دکان",
    "definition": "Shops — اردو معنی: دکان"
  },
  {
    "word": "Shoes",
    "urdu": "جوتا",
    "definition": "Shoes — اردو معنی: جوتا"
  },
  {
    "word": "Sides",
    "urdu": "طرف",
    "definition": "Sides — اردو معنی: طرف"
  },
  {
    "word": "Sisters",
    "urdu": "بہن",
    "definition": "Sisters — اردو معنی: بہن"
  },
  {
    "word": "Skills",
    "urdu": "مہارت",
    "definition": "Skills — اردو معنی: مہارت"
  },
  {
    "word": "Sounds",
    "urdu": "آواز",
    "definition": "Sounds — اردو معنی: آواز"
  },
  {
    "word": "Spaces",
    "urdu": "جگہ",
    "definition": "Spaces — اردو معنی: جگہ"
  },
  {
    "word": "Spoons",
    "urdu": "چمچ",
    "definition": "Spoons — اردو معنی: چمچ"
  },
  {
    "word": "Sports",
    "urdu": "کھیل",
    "definition": "Sports — اردو معنی: کھیل"
  },
  {
    "word": "Stars",
    "urdu": "ستارہ",
    "definition": "Stars — اردو معنی: ستارہ"
  },
  {
    "word": "Stations",
    "urdu": "اسٹیشن",
    "definition": "Stations — اردو معنی: اسٹیشن"
  },
  {
    "word": "Steps",
    "urdu": "قدم",
    "definition": "Steps — اردو معنی: قدم"
  },
  {
    "word": "Stories",
    "urdu": "کہانی",
    "definition": "Stories — اردو معنی: کہانی"
  },
  {
    "word": "Streets",
    "urdu": "گلی",
    "definition": "Streets — اردو معنی: گلی"
  },
  {
    "word": "Students",
    "urdu": "طالب علم",
    "definition": "Students — اردو معنی: طالب علم"
  },
  {
    "word": "Subjects",
    "urdu": "مضمون",
    "definition": "Subjects — اردو معنی: مضمون"
  },
  {
    "word": "Tables",
    "urdu": "میز",
    "definition": "Tables — اردو معنی: میز"
  },
  {
    "word": "Tasks",
    "urdu": "کام",
    "definition": "Tasks — اردو معنی: کام"
  },
  {
    "word": "Teams",
    "urdu": "ٹیم",
    "definition": "Teams — اردو معنی: ٹیم"
  },
  {
    "word": "Teachers",
    "urdu": "استاد",
    "definition": "Teachers — اردو معنی: استاد"
  },
  {
    "word": "Telephones",
    "urdu": "ٹیلی فون",
    "definition": "Telephones — اردو معنی: ٹیلی فون"
  },
  {
    "word": "Tests",
    "urdu": "امتحان",
    "definition": "Tests — اردو معنی: امتحان"
  },
  {
    "word": "Things",
    "urdu": "چیز",
    "definition": "Things — اردو معنی: چیز"
  },
  {
    "word": "Tickets",
    "urdu": "ٹکٹ",
    "definition": "Tickets — اردو معنی: ٹکٹ"
  },
  {
    "word": "Times",
    "urdu": "وقت",
    "definition": "Times — اردو معنی: وقت"
  },
  {
    "word": "Tools",
    "urdu": "اوزار",
    "definition": "Tools — اردو معنی: اوزار"
  },
  {
    "word": "Tooths",
    "urdu": "دانت",
    "definition": "Tooths — اردو معنی: دانت"
  },
  {
    "word": "Towns",
    "urdu": "قصبہ",
    "definition": "Towns — اردو معنی: قصبہ"
  },
  {
    "word": "Trees",
    "urdu": "درخت",
    "definition": "Trees — اردو معنی: درخت"
  },
  {
    "word": "Trips",
    "urdu": "سفر",
    "definition": "Trips — اردو معنی: سفر"
  },
  {
    "word": "Users",
    "urdu": "صارف",
    "definition": "Users — اردو معنی: صارف"
  },
  {
    "word": "Vegetables",
    "urdu": "سبزی",
    "definition": "Vegetables — اردو معنی: سبزی"
  },
  {
    "word": "Videos",
    "urdu": "ویڈیو",
    "definition": "Videos — اردو معنی: ویڈیو"
  },
  {
    "word": "Visitors",
    "urdu": "مہمان",
    "definition": "Visitors — اردو معنی: مہمان"
  },
  {
    "word": "Walls",
    "urdu": "دیوار",
    "definition": "Walls — اردو معنی: دیوار"
  },
  {
    "word": "Weeks",
    "urdu": "ہفتہ",
    "definition": "Weeks — اردو معنی: ہفتہ"
  },
  {
    "word": "Wifes",
    "urdu": "بیوی",
    "definition": "Wifes — اردو معنی: بیوی"
  },
  {
    "word": "Womans",
    "urdu": "عورت",
    "definition": "Womans — اردو معنی: عورت"
  },
  {
    "word": "Words",
    "urdu": "لفظ",
    "definition": "Words — اردو معنی: لفظ"
  },
  {
    "word": "Workers",
    "urdu": "مزدور",
    "definition": "Workers — اردو معنی: مزدور"
  },
  {
    "word": "Years",
    "urdu": "سال",
    "definition": "Years — اردو معنی: سال"
  },
  {
    "word": "Abroad",
    "urdu": "بیرون ملک",
    "definition": "Abroad — اردو معنی: بیرون ملک"
  },
  {
    "word": "Account",
    "urdu": "کھاتہ",
    "definition": "Account — اردو معنی: کھاتہ"
  },
  {
    "word": "Accountant",
    "urdu": "محاسب",
    "definition": "Accountant — اردو معنی: محاسب"
  },
  {
    "word": "Airport",
    "urdu": "ہوائی اڈہ",
    "definition": "Airport — اردو معنی: ہوائی اڈہ"
  },
  {
    "word": "Ankle",
    "urdu": "ٹخنہ",
    "definition": "Ankle — اردو معنی: ٹخنہ"
  },
  {
    "word": "Autumn",
    "urdu": "خزاں",
    "definition": "Autumn — اردو معنی: خزاں"
  },
  {
    "word": "Avenue",
    "urdu": "سڑک",
    "definition": "Avenue — اردو معنی: سڑک"
  },
  {
    "word": "Award",
    "urdu": "اعزاز",
    "definition": "Award — اردو معنی: اعزاز"
  },
  {
    "word": "Backpack",
    "urdu": "بیگ",
    "definition": "Backpack — اردو معنی: بیگ"
  },
  {
    "word": "Bandage",
    "urdu": "پٹی",
    "definition": "Bandage — اردو معنی: پٹی"
  },
  {
    "word": "Basket",
    "urdu": "ٹوکری",
    "definition": "Basket — اردو معنی: ٹوکری"
  },
  {
    "word": "Bell",
    "urdu": "گھنٹی",
    "definition": "Bell — اردو معنی: گھنٹی"
  },
  {
    "word": "Birthplace",
    "urdu": " جائے پیدائش",
    "definition": "Birthplace — اردو معنی:  جائے پیدائش"
  },
  {
    "word": "Blank",
    "urdu": "خالی",
    "definition": "Blank — اردو معنی: خالی"
  },
  {
    "word": "Cashier",
    "urdu": "خزانچی",
    "definition": "Cashier — اردو معنی: خزانچی"
  },
  {
    "word": "Ceiling",
    "urdu": "چھت",
    "definition": "Ceiling — اردو معنی: چھت"
  },
  {
    "word": "Charger",
    "urdu": "چارجر",
    "definition": "Charger — اردو معنی: چارجر"
  },
  {
    "word": "Cheerful",
    "urdu": "خوش مزاج",
    "definition": "Cheerful — اردو معنی: خوش مزاج"
  },
  {
    "word": "Chest",
    "urdu": "سینہ",
    "definition": "Chest — اردو معنی: سینہ"
  },
  {
    "word": "Chocolate",
    "urdu": "چاکلیٹ",
    "definition": "Chocolate — اردو معنی: چاکلیٹ"
  },
  {
    "word": "Cinema",
    "urdu": "سنیما",
    "definition": "Cinema — اردو معنی: سنیما"
  },
  {
    "word": "Citizen",
    "urdu": "شہری",
    "definition": "Citizen — اردو معنی: شہری"
  },
  {
    "word": "Compliment",
    "urdu": "تعریف",
    "definition": "Compliment — اردو معنی: تعریف"
  },
  {
    "word": "Cousin",
    "urdu": "کزن",
    "definition": "Cousin — اردو معنی: کزن"
  },
  {
    "word": "Curtain",
    "urdu": "پردہ",
    "definition": "Curtain — اردو معنی: پردہ"
  },
  {
    "word": "Customer Service",
    "urdu": "گاہکوں کی خدمت",
    "definition": "Customer Service — اردو معنی: گاہکوں کی خدمت"
  },
  {
    "word": "Daily Routine",
    "urdu": "روزمرہ کا معمول",
    "definition": "Daily Routine — اردو معنی: روزمرہ کا معمول"
  }
];

export default function WordMeaningsPage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filtered = useMemo(() => {
    if (!normalizedQuery) return words;
    const exact = [];
    const startsWith = [];
    const contains = [];
    for (const word of words) {
      const english = word.word.toLocaleLowerCase();
      const urdu = word.urdu;
      if (english === normalizedQuery || urdu === query.trim()) exact.push(word);
      else if (english.startsWith(normalizedQuery) || urdu.startsWith(query.trim())) startsWith.push(word);
      else if ((english + " " + urdu + " " + word.definition).toLocaleLowerCase().includes(normalizedQuery)) contains.push(word);
    }
    return [...exact, ...startsWith, ...contains];
  }, [normalizedQuery, query]);

  return <ToolPage active="/word-meanings" kicker="WORD MEANINGS" title="English Word Meanings in Urdu" description={`Browse ${words.length.toLocaleString()} useful English words with Urdu meanings. Search in English or Urdu to find a word quickly.`}>
    <div className="search-field"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search an English word or Urdu meaning..." aria-label="Search word meanings" /></div>
    <p className="results-count">Showing {filtered.length.toLocaleString()} of {words.length.toLocaleString()} words</p>
    <div className="word-grid">{filtered.map((w) => <article className="word-card" key={w.word}>
      <div><strong>{w.word}</strong><p>{w.definition}</p></div><div className="word-urdu" lang="ur" dir="rtl">{w.urdu}</div>
    </article>)}</div>
    {!filtered.length && <p className="empty-state">No matching words found. Try another spelling or search by Urdu meaning.</p>}
    <p className="disclaimer">Urdu translations are concise learning aids; context can change the best translation for a word. Verb and plural forms may share the core Urdu meaning.</p>
  </ToolPage>;
}
