import './style.css';
import { getUserInfo } from './print';
import lodash from "lodash";

console.log()

console.log(getUserInfo());

function component() {
  const element = document.createElement('div');

  element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = "<span>我是你爸爸000000</span>";
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());