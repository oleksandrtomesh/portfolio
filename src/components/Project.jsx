import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { CustomButton } from './common/button/CustomButton';
export const Project = ({name, description, imgUrl, githubUrl, deployUrl}) => {

    return (
        <div className="projects__item">
            <div className="row">
                <div className="col-lg-8 col-md-8">
                    <div className="projects__item--title">
                        <h3>{name}</h3>
                    </div>
                    <div className="projects__item--description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                        <img src={imgUrl} alt="placeholder" className="img-fluid rounded float-end" style={{ width: '15rem', height: '7rem'}} />
                </div>
                <div className="projects__item--buttons">
                        <span>
                            <CustomButton icon={faGithub} url={githubUrl} title="Code" />
                        </span>
                        <span>
                            <CustomButton icon={faGlobe} url={deployUrl} title="More Details" />
                        </span>
                    </div>
            </div>
        </div>
    )
}   
