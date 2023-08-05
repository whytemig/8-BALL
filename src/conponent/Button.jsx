import React, { useState } from "react";

const Button = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState('');
  const data = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  const quote = data[Math.ceil(Math.random() * data.length)];


  const handleChange = (e) => {
      setAnswer("");
     setQuestion(e.target.value);
  };

  const handleClick = () => {
      if (question === '') {
          setAnswer("");
      } else {
          setTimeout(() => {
              setAnswer(quote)
      }, 1000);
    }
  };

  return (
    <>
      <div className="magic">
        <label>Question?</label>

        <input
          type="text"
          name="question"
          id="question"
          value={question}
                  onChange={handleChange}
                  className="input"
        />
        <button type="submit" onClick={handleClick}>
          Submit
              </button>
               <h4>{ answer }</h4>
      </div>
    </>
  );
};

export default Button;
