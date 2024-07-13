import { useState } from 'react';


function AddProduct() {
 
  const [screen,setScreen] = useState("");

  const resetWatch=()=>{
    setScreen(0)
  }

  const appendToResult = (value) => {
    setScreen(prev => prev + value);
  }

  const calculate = () => {
    try {
      setScreen(eval(screen).toString());
    } catch (error) {
      setScreen("Error");
    }
  }
       return(
        <div>
          <div class="calculator">
          <input type="text" id="result" value={screen} readonly></input>
          <br />
          <button onClick={() => appendToResult("1")}>1</button>
        <button onClick={() => appendToResult("2")}>2</button>
        <button onClick={() => appendToResult("3")}>3</button>
        <button onClick={() => appendToResult("+")}>+</button>
        <br />
        <button onClick={() => appendToResult("4")}>4</button>
        <button onClick={() => appendToResult("5")}>5</button>
        <button onClick={() => appendToResult("6")}>6</button>
        <button onClick={() => appendToResult("-")}>-</button>
        <br />
        <button onClick={() => appendToResult("7")}>7</button>
        <button onClick={() => appendToResult("8")}>8</button>
        <button onClick={() => appendToResult("9")}>9</button>
        <button onClick={() => appendToResult("*")}>*</button>
        <br />
        <button onClick={() => appendToResult("0")}>0</button>
        <button onClick={() => appendToResult(".")}>.</button>
        <button onClick={resetWatch}>C</button>
        <button onClick={() => appendToResult("/")}>/</button>
        <br />
        <button onClick={calculate}>=</button>
          </div>
        </div>
       )
 }
 export default AddProduct;