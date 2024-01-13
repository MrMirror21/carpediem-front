import axios from "axios";
import { apiClient } from './ApiClient';

export const getKeywords= (textData, navigate) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `/keywords/result?content=${textData}`,
    headers: { 
    },
  };
  
  apiClient.request(config)
  .then((response) => {
    navigate("/roulette", {
      state: {
        data : response.data.result.map(element => element.optionTitle)
      }
    })
    .catch((error) => {
      console.log(error);
    });
  })
}

// 클라이언트에서 직접 gpt에 요청하는 코드
export const getPrompt = async (textData, navigate) => {
  const apiKey = import.meta.env.VITE_APP_GPT_KEY;
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/v1/chat/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    withCredentials: true,
    data: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are keyword creator, you have to generate 10 keywords of activity or places related to my questions. Each keyword should be seperated by comma. There's no need to numbering keywords. you must respond within 10 seconds.",
        },
        { role: "user", content: `${textData}` },
      ],
      max_tokens: 500,
    },
  };
  console.log(textData);
  axios
    .request(config)
    .then((response) => {
      console.log(response.data.choices[0].message.content);
      const keywords = response.data.choices[0].message.content;
      const keywordsArr = keywords.split(", ");
      console.log(keywordsArr);
      navigate("/roulette", {
        state: {
          data: keywordsArr,
        },
      });
  })
  .catch((error) => {
    console.log(error);
  })
};