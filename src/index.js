import './style.css';
import { getUserInfo } from './print';


console.log(getUserInfo());

function component() {
  const element = document.createElement('div');

  element.innerHTML = "<span>我是你爸爸</span>";
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());