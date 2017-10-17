import React, { Component } from 'react';

class ComponentInput extends Component {

  static propTypes = {
    onSubmit: propTypes.func
  }

  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  // private method
  _saveUsername (username) {
    localStorage.setItem('username', username)
  }

  handleUsernameBlur (event) {
    this._saveUsername(event.target.value)
  }

  componentDidMount () {
    this.textarea.focus()
  }

  //不依賴DOM操作的組件啟動的操作都可以放在componentsWillMount中進行
  componentWillMount () {
    this._loadUsername()
  }

  _loadUsername () {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const {username, content} = this.state
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
    }
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div className='comment-input'>
      <div className='comment-field'>
        <span className='comment-field-name'>使用者：</span>
        <div className='comment-field-input'>
          <input 
            value = {this.state.username}
            onBlur={this.handleUsernameBlur.bind(this)}
            onChange = {this.handleUsernameChange.bind(this)}
          />
        </div>
      </div>
      <div className='comment-field'>
        <span className='comment-field-name'>評論内容：</span>
        <div className='comment-field-input'>
          <textarea 
            ref={(textarea) => this.textarea = textarea}
            value = {this.state.content}
            onChange = {this.handleContentChange.bind(this)}
          />
        </div>
      </div>
      <div className='comment-field-button'>
        <button onClick = {this.handleSubmit.bind(this)}>
          發布
        </button>
      </div>
    </div>
    )
  }
}

export default ComponentInput;