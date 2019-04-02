import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
    this.interval = props.interval;
  }

  updateTime() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.updateTime();
    }, this.interval);
  }

  render() {
    console.log(this.state.time);
    return (
      <div>
        <p>Time is : </p>
        <div>{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
