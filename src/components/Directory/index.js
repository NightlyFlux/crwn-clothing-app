import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/selectors'
import MenuItem from '../MenuItem'
import './styles.scss'

const Directory = () => {
  const sections = useSelector(selectDirectorySections)
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

export default Directory
