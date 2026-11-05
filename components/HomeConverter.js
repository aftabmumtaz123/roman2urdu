"use client";
import { useState } from "react";
import Converter from "./Converter";

export default function HomeConverter() {
  const [direction, setDirection] = useState("toUrdu");
  const heading = direction === "toUrdu" ? "Roman Urdu to Urdu Converter" : "Urdu to Roman Urdu Converter";
  return <>
    <div className="section-heading converter-title-heading"><h2>{heading}</h2></div>
    <Converter direction={direction} onDirectionChange={setDirection} />
  </>;
}
