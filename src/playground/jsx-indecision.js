// JSX - Javascript XML 
// const template = (
//     <div>
//         <h1>Indecision App</h1>
//         <p>This is some info</p>
//         <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ol>
//     </div>
// )
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

var userName = 'Mike';
var userAge = 26;
var userLocation = 'Philadelphia';

const onFormSubmit = (e) => {
    //Stop default behavior of form submit where 
    //opitions gets loaded into the URL 
    e.preventDefault();
    //console.log('Form Submitted')
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        rerenderTemplate()
    }

}

const removeAll = (e) => {
    app.options = []
    rerenderTemplate()
}

var appRoot = document.getElementById('app')

const numbers = [55, 101, 1000]

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() *app.options.length); 
    const option = app.options[randomNum]
    //console.log(randomNum);
    alert(option)
}

const rerenderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>Location: { app.options.length > 0 ? "Here are your options" : "No Options" }</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={removeAll}>Remove All</button>            
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }
            </ol>
            <form onSubmit={/* Call the reference the function instead of the actual function so it doesn't return anything */onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
        )

        ReactDOM.render(template, appRoot)
    }


    rerenderTemplate()



