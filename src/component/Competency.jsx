import React from 'react'
import './competency.css'

function Competency() {
  return (
    <div className="competencies">
        <div className="competency">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Python logo" />
            <p className="competency-name">React JS</p>
        </div>
        <div className="competency">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="JavaScript logo" />
            <p className="competency-name">HTML</p>
        </div>
        <div className="competency">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="Ruby logo" />
            <p className="competency-name">CSS</p>
        </div>  
        <div className="competency">
            <img src="https://www.php.net//images/logos/new-php-logo.svg" alt="Php logo" />
            <p className="competency-name">Php</p>
        </div>
        <div className="competency">
            <img src="https://www.zend.com/sites/default/files/image/2019-09/logo-laravel.jpg" alt="Laravel logo" />
            <p className="competency-name">Laravel</p>
        </div>
        <div className="competency">
            <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg" alt="Java logo" />
            <p className="competency-name">Java</p>
        </div>
        <div className="competency">
            <img src="https://spring.io/img/spring.svg" alt="Spring Boot logo" />
            <p className="competency-name">Spring Boot</p>
        </div>
        <div className="competency">
            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap logo" />
            <p className="competency-name">Bootstrap</p>
        </div>
        <div className="competency">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySql logo" />
            <p className="competency-name">MySql</p>
        </div>
    </div>
  )
}

export default Competency