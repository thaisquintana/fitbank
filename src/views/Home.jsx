import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CharListActions from '../store/ducks/charList'

class Home extends Component {
  componentDidMount() {
    const { charListRequest } = this.props
    charListRequest()
  }

  render() {
    const { charList } = this.props
    return (
      <main className="main">
        <div className="card-main">
          <ul className="card-list">
            {charList.map(char => (
              <li className="card-view" key={char.id}>
                <div className="card-cover">
                  <a href={char.urls[0].url} target="_blank">
                    <img
                      src={`${char.thumbnail.path}/portrait_uncanny.${
                        char.thumbnail.extension
                      }`}
                      alt={char.name}
                      title={char.name}
                    />
                  </a>
                </div>
                <h5>
                  <a
                    className="card-title"
                    href={char.urls[0].url}
                    target="_blank"
                  >
                    {char.name}
                  </a>
                </h5>
                <p className="card-details">
                  <a href={char.urls[1].url} target="_blank">
                    mais detalhes [+]
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  charList: state.charList.data
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(CharListActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
