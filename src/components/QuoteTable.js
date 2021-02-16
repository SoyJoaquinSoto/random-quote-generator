import React from "react"
import QuoteText from "./QuoteText.js"
import QuoteAuthor from "./QuoteAuthor.js"

export default class QuoteTable extends React.Component {
    render() {
        return (
            <div className={`bg-red-100 h-5/6 w-5/6 m-auto`}>
                <QuoteText />
                <QuoteAuthor />
            </div>
        );
    }
}