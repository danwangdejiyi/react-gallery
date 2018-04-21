import React from 'react'
import ReactDOM from 'react-dom'
let arr=[1,2,3];
arr.forEach(item=>{console.log(item);});

console.log(Array.from(arr));
ReactDOM.render(
    <div>Hello React</div>,
    document.querySelector('#app')
);