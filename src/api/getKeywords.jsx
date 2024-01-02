import axios from "axios";
import FormData from "form-data";

axios.defaults.withCredentials = true;

export const getKeywords = ({ textData, navigate }) => {
  let data = new FormData();
  data.append("data", textData);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `http://3.39.187.248/search/result`,
    headers: {},
    withCredentials: true,
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(response);
      navigate("/roulette", {
        state: {
          data: response.data.map((element) => element.optiontitle),
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

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
    });
};

// 룰렛 페이지로 정보 넘기는 테스트용 함수
export const getKeywordsTest = (textData, navigate) => {
  navigate("/roulette", {
    state: {
      data: dummyData.data.map((element) => element.optionTitle),
    },
  });
};

//
const dummyData = {
  status: 202,
  message: "조회에 성공하였습니다",
  data: [
    {
      optionTitle: "스키/스노보드",
    },
    {
      optionTitle: "눈싸움",
    },
    {
      optionTitle: "눈사람 만들기",
    },
    {
      optionTitle: "스케이트보드",
    },
    {
      optionTitle: "스케이팅",
    },
    {
      optionTitle: "빙하 탐험",
    },
    {
      optionTitle: "야외 캠프파이어",
    },
    {
      optionTitle: "눈에 편한 캠핑",
    },
    {
      optionTitle: "워커 췬",
    },
    {
      optionTitle: "눈썰매",
    },
  ],
  succeess: true,
};
