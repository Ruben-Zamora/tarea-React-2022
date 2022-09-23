import { ThemeContext, themes } from "./ThemeContext";
import React from "react";


class MyButton extends React.Component {
  render() {
    const { theme, updateTheme } = this.context;
    const style = {
      backgroundColor: theme.background,
      color: theme.color,
      border: "1px solid",
      borderRadius: 5,
      margin: "1rem"
    };

    const updateLightTheme = () => {
      updateTheme(themes.light);
    };

    const onClick = this.props.handleClick || 
      updateLightTheme;

    return <button 
      onClick={onClick} 
      style={style} 
      {...this.props} 
    />;
  }
}


// Esto es importante (asignar el context)
MyButton.contextType = ThemeContext;

export default MyButton