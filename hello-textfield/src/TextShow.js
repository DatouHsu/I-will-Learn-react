import React from 'react'

const TextShow = (props) => (
    <h1>{props.text}</h1>
)

TextShow.prototype = {
    text: React.PropTypes.string,
}

export default TextShow