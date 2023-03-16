import {Component} from 'react'
import './index.css'

class CoursesList extends Component {
  render() {
    const {Details} = this.props
    const {name} = Details
    console.log(Details)
    return (
      <li className="logoContainer">
        <img src={Details.logo_url} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}

export default CoursesList
