import React, { Component } from 'react'
import './App.css';

const api = {
  key: "5a7e1c52a43e7cb60172d92caaea9356",
  base: "https://api.openweathermap.org/data/2.5/weather"
}

class App extends Component {
  constructor() {
    super()

    this.state = {}
  }

  searchInput = (e) => {
    if (e.key == 'Enter') {
      let query = e.target.value
      this.fetchWeather(query)
    }
  }

  fetchWeather = (query) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=5a7e1c52a43e7cb60172d92caaea9356`)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.setState({
          city: result.name,
          country: result.sys.country,
          temp: result.main.temp,
          description: result.weather[0].main,
          icon: `http://openweathermap.org/img/w/${result.weather[0].icon}.png`
        })
      })
  }

  dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} - ${date} - ${month} - ${year}`
  }

  backgroundColor = () => {
    if (this.state.temp > 90) {
      return "scorching"
    } else if (this.state.temp > 80) {
      return "hot"
    } else if (this.state.temp > 70) {
      return "cool"
    } else if (this.state.temp > 60) {
      return "chilly"
    } else if (this.state.temp > 50) {
      return "cold"
    } else if (this.state.temp > 40) {
      return "very-cold"
    } else {
      return 'freezing'
    }
  }

  render() {
    return (
      <div className={this.backgroundColor()} >
        <div className="main">
          <div className="search-box">
            <input type='text' onKeyPress={this.searchInput} className="search-bar" placeholder="Search..."></input>
          </div>
          {(typeof this.state.city != 'undefined') ? (
            <div>
              <div className="location-box">
                <div className="location">{this.state.city}, {this.state.country}</div>
                <div className="date">{this.dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(this.state.temp)}°</div>
                <div className="weather">{this.state.description} <img className="icon" src={this.state.icon} ></img></div>
                
              </div>
            </div>
          ) : ('')}
          
        </div>
      </div>
    )
  }
}

export default App;
