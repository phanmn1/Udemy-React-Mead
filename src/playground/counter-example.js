class Counter extends React.Component {

    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10)

            if(!isNaN(count)) {
                this.setState(() => ({count}))
            }
        } catch (e) {
            //Do nothing at all
        }
        
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count)
            console.log('saving data')
        }
    }

    handleAddOne(){
        //PrevState state obj before update is applied
        this.setState((prevState) => {
            //Only provide the the specific values that you want to update
            return {
                count: prevState.count + 1
            }
        })  
        //console.log(this.state.count)
    }

    handleMinusOne() {
        this.setState((prevState) => {
            //Only provide the the specific values that you want to update
            return {
                count: prevState.count - 1
            }
        })  
        console.log("Minus One")
    }

    handleReset(){
        this.setState(() => {
            //Only provide the the specific values that you want to update
            return {
                count: 0
            }
        })  
        console.log("Minus One")
    }


    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// }



ReactDOM.render(<Counter count={3}/> , document.getElementById('app'))

// let count = 0
// const addOne = () => { 
//     count++ 
//     renderCounterApp()
// }
// const minusOne = () => {
//     count--
//     renderCounterApp()
// }
// const reset = () => {
//     count = 0
//     renderCounterApp()
// }

// var appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button> 
//             <button onClick={reset}>reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp();