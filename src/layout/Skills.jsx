import { faBootstrap, faCss3, faGit, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { forwardRef, useState } from 'react'
import { Skill } from '../components/Skill'

export const Skills = forwardRef((props, ref) => {

    const [icons] = useState([
        {type: faHtml5, title: 'HTML5' }, 
        {type: faCss3, title: 'CSS3, SASS' },
        {type: faJs, title: 'JavaScript, TypeScript' }, 
        {type: faReact, title: 'ReactJS with Redux' }, 
        {type: faGit, title: 'Git' },
        {type: faBootstrap, title: 'Bootstrap, MaterialUI' } 
        ])

    const mapIcons = icons.map((icon, index) => {
        return <Skill key={index} icon={icon.type} title={icon.title} />
    })

    return (
        <section ref={ref} className="skills">
            <div className="container">
                <h1 className="text-center pb-2">Skills:</h1>
                <div className="row">
                    {mapIcons}
                </div>
            </div>
            
        </section>
    )
})