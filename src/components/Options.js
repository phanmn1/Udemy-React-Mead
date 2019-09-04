import React from 'react'
import Option from './Option'

const Options = (props) => {
    return(
            
        <div>
        <button onClick={props.handleDeleteOptions}>remove All</button>
            {
                props.options.map((element) => (
                    <Option 
                        key={element} 
                        optionText={element}
                        handleDeleteOption={props.handleDeleteOption}
                        />
                    
                    ))
            }
        
        </div>
    ) 
}

export default Options