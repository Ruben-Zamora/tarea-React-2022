import { ThemeContext, themes } from "./ThemeContext";
import React, {useContext} from "react";


const MyNewButton = (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme.background,
    color: theme.color,
    border: "1px solid",
    borderRadius: 5
  };

  const updateLightTheme = () => {
    updateTheme(themes.light);
  };

  const onClick = props.handleClick || updateLightTheme;

  return <button onClick={onClick} {...props} style={style} />;
};


export default MyNewButton