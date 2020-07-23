import React, {Component} from "react";
import ClassChild from "./ClassChild"
import FuncChild from "./FuncChild"

class Parent extends Component {
    constructor() {
        super()

        this.state = {
            num: 0,
            name: "Morgan",
            favColor: "green",
            favGiantRobot: "Iron Giant"
        }
        this.addNum = this.addNum.bind(this);
        this.subtractNum = this.subtractNum.bind(this);
    }

    addNum(){
        this.setState({
            num: this.state.num + 1
        })
    }

    subtractNum(){
        this.setState({
            num: this.state.num - 1
        })
    }
 
    render(){
        return <div>
            <h1>This is the parent component</h1>
            <ClassChild 
                num={this.state.num} 
                add={this.addNum} 
                sub={this.subtractNum}/> 
            <FuncChild
                name={this.state.name}
                color={this.state.favColor}
                robot={this.state.favGiantRobot}/>
        </div>
    }
}

export default Parent


//The thing on the left is the name of the prop; the thing on the right of the equal sign is the value of the prop.

