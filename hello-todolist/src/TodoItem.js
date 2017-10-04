inport React from 'react'

const TodoItem = (props) => {
    
      const handleClick = () => {
            //實際上呼叫的是由上層元件從props.onItemClick傳入的方法(上層元件的方法)
            props.onItemClick(props.index)
      }
    
      return <li onClick={handleClick}>{props.text}</li>
    }
}

TodoItem.propTypes = {
    text: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    onItemClick: React.PropTypes.func,
  }

export default TodoItem