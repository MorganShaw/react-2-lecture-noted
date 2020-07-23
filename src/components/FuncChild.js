import React from "react";


const FuncChild = (props) => {
    return <div>
            <h1>This is the child functional component</h1>
            <p>Hi! My name is {props.name}, and I love the color {props.color}. Someday, I'm going to have my very own {props.robot}.</p>
        </div>
}

export default FuncChild

//Receive props inside its parameter. Then {props.name}. Doesn't use this keyword. 