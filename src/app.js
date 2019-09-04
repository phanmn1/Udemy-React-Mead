import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'


ReactDOM.render(<IndecisionApp options={['Option1', 'Options 2']}/>, document.getElementById('app'))

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     )
// }

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// )

// ReactDOM.render(<Layout><p>This is inline</p></Layout>, document.getElementById('app'))

// class OldSyntax {
//     constructor() {
//         this.name = "Mike"
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// // -------------
// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}.`;
//     }
    
// }

// const newSyntax = new NewSyntax(); 
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting())