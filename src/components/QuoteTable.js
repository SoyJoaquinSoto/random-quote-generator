import React from "react";
import axios from "axios";
import QuoteText from "./QuoteText.js";
import QuoteAuthor from "./QuoteAuthor.js";

export default function QuoteTable() {
  return (
    <div className={`h-auto w-5/6 m-auto`}>
      <QuoteText />
      <QuoteAuthor />
    </div>
  );
}
