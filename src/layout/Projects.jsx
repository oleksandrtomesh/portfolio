import { forwardRef, useEffect, useState } from 'react';
import { Project } from '../components/Project';
import { firebase } from '../firebase';


export const Projects = forwardRef((props, ref) => {

    const [projects, setProjects] = useState([])
    const [filterProjects, setFilterProjects] = useState([])

    useEffect(() => {
        firebase.firestore().collection('projects').get().then((result) => {
            const data = result.docs.map(project => {
                return {
                    ...project.data(),
                    projectId: project.id
                }
            })
            setProjects(data)
            setFilterProjects(data)
        })
    }, [])

    const filterItems = (e) => {
        if (e.target.getAttribute('data-id') === 'all'){
            setFilterProjects(projects)
        } else {
            const newList = projects.filter(project => project.filter === e.target.getAttribute('data-id'))
            setFilterProjects(newList)
        }
    }

    return(
        <section ref={ref} className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className="fs-1 pb-3">Projects</h1>
                    </div>
                    <div className="col-lg-8">
                        <div class="btn-group" role="group">
                            <button type="button" className="btn btn-outline-primary btn-sm" data-id="all" onClick={filterItems}>All</button>
                            <button type="button" className="btn btn-outline-primary btn-sm" data-id="js" onClick={filterItems}>HTML CSS JavaScript</button>
                            <button type="button" className="btn btn-outline-primary btn-sm" data-id="react" onClick={filterItems}>React</button>
                        </div>
                        {filterProjects.map(project => {
                            return(
                                <Project 
                                    key={project.id} 
                                    name={project.name} 
                                    description={project.description}
                                    imgUrl={project.imgUrl}
                                    githubUrl={project.githubUrl}
                                    deployUrl={project.deployUrl}
                                />
                            )
                        } )}
                    </div>
                </div>
            </div>
        </section>
    )
})