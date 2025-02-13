import {Link} from 'react-router-dom'
import './button.css'
const Button = () => {
  return (
    <button>
      <Link to={'/contact'} class="btn2"><span class="spn2">Contact Me</span></Link>
  </button>
  
  )
}

export default Button
