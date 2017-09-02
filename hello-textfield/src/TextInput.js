import React from 'react'
import TextShow from './TextShow'

class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    handleChange = (e) => { 
        this.setState({text: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.text}
                    placeholder={this.props.initText}
                    onChange={this.handleChange}
                />
                <TextShow text={this.state.text}/>
            </div>
        )
    }
}

export default TextInput


