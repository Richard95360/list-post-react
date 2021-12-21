import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'
import useWindowSize from './hooks/useWindowSize'

const Header = ({title}) => {
       const  {width, height} = useWindowSize()
    return (
      <header className="Header">
          <h1>{title}</h1>
          {width < 758 ? <FaMobileAlt/> : width < 992 ? <FaTabletAlt/> : <FaLaptop/>}
          {height > 947 ? <FaMobileAlt/> : null}
      </header>
    )
}

export default Header
