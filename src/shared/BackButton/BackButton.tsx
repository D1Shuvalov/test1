import {Link} from "react-router-dom";
import vectorBtn from '../../assets/vector.svg'
import './BackButton.css'
import * as ROUTE_PATHS from '../../app/router/routesPaths/paths';

export const BackButton = () => {

  return (
    <Link to={ROUTE_PATHS.ROOT} className='link'>
      <img src={vectorBtn} alt="vector"/>
      Back
    </Link>
  );
}