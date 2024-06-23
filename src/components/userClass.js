import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state.count;
    return (
      <div className="user-cart">
        <p>
          <b>Count : {this.state.count}</b>
        </p>
        <button
          className="count-btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <p>Name :{name}</p>
        <p>Location : Gurugram</p>
        <p>Email : akumarjha431@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
