import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Footer = ({homeRef}) => (
    <footer className="footer">
        <div className="container">
            <div className="row text-center pt-3 pb-1">
                <p> &copy; Oleksandr Tomesh</p>
            </div>
        </div>

        <span className="shadow rounded-circle btn-primary back-to-top" onClick={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}>
            <FontAwesomeIcon className="back-to-top__icon" icon={faChevronUp} />
        </span>
    </footer>
)