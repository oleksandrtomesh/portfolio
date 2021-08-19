import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const Skill = ({icon, title}) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-4 text-center ">
            <FontAwesomeIcon icon={icon} size='8x' color="#795548"/>
            <div className="skills__icon-title">
                <h5>{title}</h5>
            </div>
        </div>
    )
}