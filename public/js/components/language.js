import React from 'react'
import ReactDOM from 'react-dom'

export default class Language extends React.Component{
  constructor(props){
    super(props)
    this.state={
      languageTitle:  <span className="language-title-icons">EN</span>
    }
  }

  changeEnglish = () => {
    this.setState({
      languageTitle: '<span className="language-title-icons">EN</span>'
    })
  }

  changeVietnamese = () => {
    this.setState({
      languageTitle: '<span className="language-title-icons">VN</span>'
    })

  }

  changeJapanese = () => {

    this.setState({
      languageTitle: '<span className="language-title-icons">JP</span>'
    })
  }

  
  render(){
    let {languageTitle} = this.state

    return(
      <div className="language-dropdown">
        <div className="dropdown">
          <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {languageTitle}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#" onClick={this.changeEnglish}><div className="language-title">English</div></a>
            <a className="dropdown-item" href="#" onClick={this.changeVietnamese}><div className="language-title">Tiếng
              Việt</div></a>
            <a className="dropdown-item" href="#" onClick={this.changeJapanese}><div className="language-title">日本語</div></a>
          </div>
        </div>
      </div>
    )
  }
}



ReactDOM.render(<Language/>, document.getElementById('language-dropdown'))