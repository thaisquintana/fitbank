import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CharactersActions from '../store/ducks/characters'

class Home extends Component {
  componentDidMount() {
    const { charactersRequest } = this.props
    charactersRequest()
  }

  render() {
    const { char } = this.props
    return (
      <main className="main">
        <div className="card-main">
          <ul className="card-list">
            {/* {character.map(char => (
              <li className="sidenav__list-item" key={char.data.results} />
            ))}
            {character.map(char => (
              <li className="card-view" key={char.results.id}>
                {/* <div className="card-cover">
                  <img
                    src={`char.thumbnail/${
                      char.portrait_uncanny
                    }/char.extension`}
                    alt="Captain America #13"
                    title="Captain America #13"
                  />
                </div> */}
            {/* <h5>
                  <a className="card-title" href={char.results.urls.detail}>
                    {char.results.name}
                  </a>
                </h5>
                <p className="creators">
                  <a href="//www.marvel.com/comics/creators/267/jim_krueger">
                    Krueger,
                  </a>
                  <a href="//www.marvel.com/comics/creators/1362/thomas_yeates">
                    Yeates
                  </a>
                </p> */}
            ))} */}
          </ul>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  char: state.characters.data.data
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(CharactersActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
