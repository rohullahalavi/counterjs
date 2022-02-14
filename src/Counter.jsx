import { Component } from "react";
import "./style.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 12,
      msg: ["Click"],
    };
  }

  handleIncrement() {
      this.setState({count: this.state.count + 1});
  }

  styles = {
    color: "#FFF",
    backgroundColor: "#00F",
  };

  render() {
    return (
      <div>
        <div
          className="p-2 bg-danger d-flex justify-content-center align-items-center     "
          style={this.styles}
        >
          <div className="h2 m-0 px-2 rounded counter-color">
            {this.state.count}
          </div>
            <button className="btn btn-primary mx-2" onClick={()=>this.handleIncrement()} >{this.state.msg[0]}</button>
        </div>
      </div>
    );
  }
}

export default Counter;
