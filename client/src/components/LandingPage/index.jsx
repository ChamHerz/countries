import style from './landingPage.module.css';
import video from '../../video/Globo.mp4';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className={style.container}>
      <video muted autoPlay loop className={style.video}>
        {/* etiqueta video funciona usando import, variable y atributos muted y autoPlay(P mayúscula) */}
        <source src={video} type="video/mp4" />
      </video>
      <Link to="home" className={style.button}>
        HENRY COUNTRIES
      </Link>
    </div>
  );
}

export default LandingPage;
