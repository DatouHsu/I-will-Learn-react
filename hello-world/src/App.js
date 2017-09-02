//集中整合所有的元件，它是整個應用的元件控制中心

import React, {Component} from 'react'
import HelloWorld from './HelloWorld'

//元件都是由React.Component類別繼承而來的
class App extends Component {
  //render方法定義
  render() {
    return (
      <HelloWorld text="今天就開始學React!" />
    )
  }
}

export default App