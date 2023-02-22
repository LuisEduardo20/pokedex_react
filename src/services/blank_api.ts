import axios from "axios";

export const blank_api = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
