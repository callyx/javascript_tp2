import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

class Cell extends React.Component {
render() {
  return <div> onMouseOver=() => this.handleMouseOver()</div>; 
}

handleMouseOver(){
	cellStyle.backgroundColor = "red";
	return () => <div style={cellStyle}>?</div>;
}

handlerMouseOut(){
	cellStyle.backgroundColor = "white";
	return () => <div style={cellStyle}>?</div>;
}


}

export default Cell;
