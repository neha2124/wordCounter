import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const inputElement = useRef();
  const [value, setValue] = useState("");
  // console.log(value.split(""));
  const inputFocus = () => {
    inputElement.current.focus();
  };
  const characterCount = (value) => {
    return value.split("").filter((count) => {
      return count !== " ";
    }).length;
  };
  console.log(characterCount(value));
  const wordCount = (value) => {
    return value.split(" ").filter((count) => {
      return count !== "";
    }).length;
  };
  const sentenceCount = (value) => {
    const stop = /[.?!]/;
    const sentence = value.split(stop);
    return sentence.length - 1;
  };

  useEffect(() => {
    inputFocus();
  }, []);
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <div className="result-container">
        <span>charcter :{characterCount(value)}</span>
        <span>word :{wordCount(value)}</span>
        <span>sentence:{sentenceCount(value)}</span>
        <span>paragraph :</span>
      </div>
      <textArea
        name="textContent"
        rows={20}
        cols={50}
        id={"textarea"}
        ref={inputElement}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
