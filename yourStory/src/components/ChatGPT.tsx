import { useState } from "react";
import axios from "axios";
// import openAI from "openai";

const ChatGPT = () => {
  //   openAI.api_key = "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";
  const apiKey = "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";
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const sendToGPT = async () => {
    try {
      axios
        .post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: input,
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
          }
        )
        .then((res) => {
          setResponse(res.data.choices[0].message.content);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        id="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={sendToGPT}>
        Submit
      </button>

      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatGPT;
