import {Component} from 'react'

import Loader from 'react-loader-spinner'
import CoursesList from '../CoursesList'

import './index.css'

class TechEra extends Component {
  state = {courseData: '', loder: true}

  componentDidMount() {
    this.getCourseDetail()
  }

  getCourseDetail = async () => {
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const data = await fetch(url, options)
    const fetchedData = await data.json()
    this.setState({courseData: fetchedData.courses, loder: false})
  }

  render() {
    const {courseData, loder} = this.state
    return (
      <div>
        <nav className="NavBarElement">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </nav>
        <div className="SubContainer2">
          {loder ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="listContainer">
              {courseData.map(each => (
                <CoursesList Details={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default TechEra
