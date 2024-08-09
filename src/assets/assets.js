import gptLogo from "./chatgptLogo.svg";
import add from "./add-30.png";
import bookmark from "./bookmark.svg";
import chatgpt from "./chatgpt.svg";
import home from "./home.svg";
import message from "./message.svg";
import rocket from "./rocket.svg";
import send from "./send.svg";
import userIcon from "./user-icon.png";
import hamburger from './hamburger.svg';
import copy from './copy.svg';

export const assets = {
  gptLogo,
  add,
  bookmark,
  chatgpt,
  home,
  message,
  rocket,
  send,
  userIcon,
  hamburger,
  copy
};

export const openAIURL = {
  login: "https://auth.openai.com/authorize?client_id=TdJIcbe16WoTHtN95nyywh5E4yOo6ItG&scope=openid%20email%20profile%20offline_access%20model.request%20model.read%20organization.read%20organization.write&response_type=code&redirect_uri=https%3A%2F%2Fchatgpt.com%2Fapi%2Fauth%2Fcallback%2Flogin-web&audience=https%3A%2F%2Fapi.openai.com%2Fv1&device_id=2ae45e14-1923-45fb-879d-16053b03ee98&prompt=login&screen_hint=login&ext-statsig-tier=production&ext-oai-did=2ae45e14-1923-45fb-879d-16053b03ee98&flow=control&state=xKQsIaeWB8y3nFX9p6kjW2tmTW4d4-Y4lW5qxK4LCO8&code_challenge=JakY2OpC7i7WxFwzBeejXH07AyELcMqWNg5LP0eX6X8&code_challenge_method=S256",
  signUp: "https://auth.openai.com/authorize?client_id=TdJIcbe16WoTHtN95nyywh5E4yOo6ItG&scope=openid%20email%20profile%20offline_access%20model.request%20model.read%20organization.read%20organization.write&response_type=code&redirect_uri=https%3A%2F%2Fchatgpt.com%2Fapi%2Fauth%2Fcallback%2Flogin-web&audience=https%3A%2F%2Fapi.openai.com%2Fv1&device_id=2ae45e14-1923-45fb-879d-16053b03ee98&prompt=login&screen_hint=signup&ext-statsig-tier=production&ext-oai-did=2ae45e14-1923-45fb-879d-16053b03ee98&flow=control&state=aG0XgE6FOL-RfXS4i8uFmw1d_psi-uzMjIzA7__SMCM&code_challenge=fODP9MBKwSiQcLBeR8H9sPCmdIfG287XFqJdeyKdack&code_challenge_method=S256",
}

export const authorURL = {
  url : "/"
}