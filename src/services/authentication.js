import axios from "axios";

const api_key = process.env.REACT_APP_TMBD_KEY;
const baseURL = "https://api.themoviedb.org/3/";

export const movieApi = axios.create({
  baseURL,
  params: {
    api_key,
  },
});

export default async function getToken() {
  try {
    const { data } = await movieApi.get("authentication/token/new");
    const { request_token, success } = data;
    if (success) {
      localStorage.setItem("request_token", request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log("ERROR ENCOUNTERED");
  }
}

export async function createSession() {
  try {
    const token = localStorage.getItem("request_token");
    const { data: {session_id} } = await movieApi.post("authentication/session/new", {
      request_token: token,
    });
    localStorage.setItem("session_id", session_id);
    return session_id;
  } catch (error) {
    console.log("ERROR ENCOUNTERED");
    return false;
  }
}
