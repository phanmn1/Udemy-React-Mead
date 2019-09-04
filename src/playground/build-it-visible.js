class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.onButtonClick = this.onButtonClick.bind(this)
        this.state = {
            visible: false
        }
    }

    onButtonClick() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    
    render() {
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.onButtonClick}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
            { this.state.visible && (
                <div>
                    <p>Hey. These are some details you can see!</p>
                </div>)
            }
        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/> , document.getElementById('app'))
// var appRoot = document.getElementById('app')

// let visible = false;

// const onButtonClick = () => {
//     visible = !visible;
//     rerender()
// }

// const rerender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onButtonClick}>{visible ? 'Hide Details' : 'Show Details'}</button>
//             { visible && (
//                 <div>
//                     <p>Hey. These are some details you can see!</p>
//                 </div>)
//             }
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// rerender()