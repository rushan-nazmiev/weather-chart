import './styles/style.scss'
import {InitCanvas} from "./init.canvas";

const random = {
    1 : Array.from({length: 1200}, () => Math.floor(Math.random() * 1550)),
    2 : Array.from({length: 1200}, () => Math.floor(Math.random() * 550)),
    3 : Array.from({length: 1200}, () => Math.floor(Math.random() * 350))
}

let init = new InitCanvas(random);
init.init();
