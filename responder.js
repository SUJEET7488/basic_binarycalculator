'use strict';
import { ArithmeticOperation,ArithmeticOperationKey } from "./keyListeners.js";
let btn=document.getElementById('calc-keys');
let content=document.getElementById('content');
btn.addEventListener('click',ArithmeticOperation,false);
document.addEventListener('keydown',ArithmeticOperationKey,false);
