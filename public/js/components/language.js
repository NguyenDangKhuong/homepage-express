import React from 'react'
import ReactDOM from 'react-dom'

let lang = localStorage.getItem('lang')

export default class Language extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      languageTitle: <span className="language-title-icons">VN</span>
    }
  }

  componentDidMount() {
    if (lang === 'en') {
      this.setState({
        languageTitle: <span className="language-title-icons">EN</span>
      })
    } else if (lang === 'vi') {
      this.setState({
        languageTitle: <span className="language-title-icons">VN</span>
      })
    } else if (lang === 'jp') {
      this.setState({
        languageTitle: <span className="language-title-icons">JP</span>
      })
    }
  }

  changeEnglish = () => {
    this.setState({
      languageTitle: <span className="language-title-icons">EN</span>
    })
    localStorage.setItem('lang', 'en')
  }

  changeVietnamese = () => {
    this.setState({
      languageTitle: <span className="language-title-icons">VN</span>
    })
    localStorage.setItem('lang', 'vi')
  }

  changeJapanese = () => {
    this.setState({
      languageTitle: <span className="language-title-icons">JP</span>
    })
    localStorage.setItem('lang', 'jp')
  }

  render() {
    let {languageTitle} = this.state

    return (
      <div className="language-dropdown">
        <div className="dropdown">
          <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {languageTitle}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/change-lang/en" onClick={this.changeEnglish}>
              <div className="language-title">English</div>
            </a>
            <a className="dropdown-item" href="/change-lang/vi" onClick={this.changeVietnamese}>
              <div className="language-title">Tiếng Việt</div>
            </a>
            <a className="dropdown-item" href="/change-lang/jp" onClick={this.changeJapanese}>
              <div className="language-title">日本語</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<Language/>, document.getElementById('language-dropdown'))