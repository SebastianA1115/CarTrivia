import axios from "axios";

export const getQuestions = async (difficulty) => {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=28&difficulty=${difficulty}&type=multiple`
  );

  return response.data.results;
};
