import React from 'react'

const ThemeContext = React.createContext({
  theme: ''
})

class ThemeProvider extends React.Component{
  state = {
    theme: ''
  }
  setTheme = () => {
  }
  render() {
    const {children} = this.props
    const {theme} = this.state
    const {setTheme} = this
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    )
  }
}

export {ThemeProvider}
export default ThemeContext
