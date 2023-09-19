import React from 'react';

// Destructuring syntax is a JavaScript expression that allows you to unpack array values or object properties into different variables.
//The "handleClick" function comes from the rendered component in this case Button,
//and this updates the click number and the function is responsible for handling all that logic. 
function Button({ text, isClickButton, handleClick}) {
    return (
      <Button
      className={ isClickButton ? "click-button" : "restar-button" }
//The addEventlistener method is a listener that tells the browser to listen for user interaction. The advantage is that it is written entirely in JS, without having to touch the HTML.
      onClick={handleClick}>
        {text}
      </Button>
    );
} 

export default Button;