import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CustomButton = ({icon, title, url}) => {


    return(
    <a href={url} _blank class="btn btn-outline-primary btn-sm mr-2">
        <FontAwesomeIcon icon={icon} className="mr-1" />
        {title}
    </a>
    )
}