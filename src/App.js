import React from "react"

export default class App extends React.Component {

    randomColor() {
        const colors = [
            "gray",
            "red",
            "yellow",
            "green",
            "blue",
            "indigo",
            "purple",
            "pink",
        ]
        return colors[Math.floor(Math.random() * 8)];
    }

    render() {
        return (
            <div className={`bg-${this.randomColor()}-500 h-screen w-screen grid grid-cols-2 gap-4`}>
                
            </div>
        );
    }
}