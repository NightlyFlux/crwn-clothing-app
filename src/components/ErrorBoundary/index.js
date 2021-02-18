import { Component } from 'react'
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './styled'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasErrored: false,
    }
  }

  static getDerivedStateFromError() {
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(info)
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
          <ErrorImageText>A Dog Ate this Page! 😩👌</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return <div>{this.props.children}</div>
  }
}
