const React = require('react')
const ReactDOM = require('react-dom')

const PULL_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  PENDING: 'PENDING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED'
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      translationsStatus: PULL_STATUS.NOT_STARTED
    }

    this.onPull = this.onPull.bind(this)
  }

  onPull() {
    this.setState({
      translationsStatus: PULL_STATUS.PENDING
    }, () => {
      fetch('/pull').then(() => {
        this.setState({
          translationsStatus: PULL_STATUS.SUCCEEDED
        })
      }).catch(() => {
        this.setState({
          translationsStatus: PULL_STATUS.FAILED
        })
      })
    })
  }

  render() {
    return (
      <div className="App">
        <button className="pull" onClick={this.onPull}>
          Pull Translations
        </button>
        <div className="messaging">
          <p>{this.state.translationsStatus === PULL_STATUS.PENDING && 'Pulling...'}</p>
          <p>{this.state.translationsStatus === PULL_STATUS.SUCCEEDED && 'Translations sent to github!'}</p>
          <p>{this.state.translationsStatus === PULL_STATUS.FAILED && 'Translations could not be sent. Please try again.'}</p>

        </div>
      </div>
    )
  }
}

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl)