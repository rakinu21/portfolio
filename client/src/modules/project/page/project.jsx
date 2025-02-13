

import Contact from '../../contact/pages/contact'
import Reordering from '../components/firstPageProject/firstPageProject'
import Horizontal from '../components/HorizontalScrollProject/Horizontal'
import LastPage from '../components/lastPage/lastPage'
import './project.scss'

const Project = () => {
  return (
    <div className='project'>
           <Reordering/>
      <Horizontal />
      <Contact/>
    </div>
  )
}

export default Project