import React from "react"
import PropTypes from "prop-types"
// import style from "../stylesheets/memo-window.scss"

const memoWindow = {
  position: "fixed",
  bottom: 150,
  width: "90%",
  height: "80%",
  marginLeft: "5%",
  marginRight: "5%",
  background: "#000",
  opacity: "20%",
}

const memoButton = {
  position: "fixed",
  bottom: "10px",
  left: "10px",
  height: "100px",
  width: "100px",

  textAlign: "center",
  textDecoration: "none",
  lineHeight: "100px",
  outline: "none",
  fontSize: "25px",

  // border: "3px solid #000",
  // padding: "2pt",
  backgroundColor: "#000",
  // // filter:alpha(opacity="85)",
  // MozOpacity: "0.85",
  // KhtmlOpacity: "0.85",
  opacity: "0.85",
  color: "#fff",

  // // textShadow: "0 -1px 1px #FFF, -1px 0 1px #FFF, 1px 0 1px #aaa,
  // // -webkit-box-shadow: 1px 1px 2px #E7E7E7,
  // // -moz-box-shadow: 1px 1px 2px #E7E7E7,
  WebkitBorderRadius: 60,
  MozBorderRadius: 60,
}

class MemoWindow extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div style={memoWindow}>Memo Window</div>
      </React.Fragment>
    )
  }
}

class MemoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick() {
    const isOpen = this.state.isOpen;
    this.setState({
      isOpen: !isOpen,
    });
    console.log(this.state.isOpen);
  }

  render () {
    return (
      <React.Fragment>
        <button
          style={memoButton}
          onClick={() => this.handleClick()}
        >
          MEMO
        </button>
        {this.state.isOpen && (
          <MemoWindow />
        )}
      </React.Fragment>
    );
  }
}

export default MemoButton

