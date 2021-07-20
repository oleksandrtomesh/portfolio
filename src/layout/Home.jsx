import { forwardRef } from 'react';
import mainPhoto from '../assets/images/main-photo.jpeg';
import { Icon } from '../components/common/icon/Icon';


export const Home = forwardRef((props, ref) => {
    return(
        <section ref={ref} className="home">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4 text-center">
                        <div className="main-photo">
                            <img src={mainPhoto} alt="main photo" />
                        </div>
                        <h4 className="mt-3">Oleksandr Tomesh</h4>
                        <p className="fw-light">Junior Front End Developer</p>
                        <p><Icon type="bi-telephone"/>+48 536 251 788</p>
                        <div className="social-media">
                            <a href="mailto: oleksandrtomes@gmail.com">
                                <Icon type="bi-envelope"/>
                            </a>
                            <a href="https://github.com/oleksandrtomesh">
                                <Icon type="bi-github"/>
                            </a>
                            <a href="https://www.instagram.com/aleksashka2654/">
                                <Icon type="bi-instagram"/>
                            </a>
                            <a href="https://www.linkedin.com/in/oleksandr-tomesh-ba514a14b/">
                                <Icon type="bi-linkedin"/>
                            </a>
                            <a href="https://drive.google.com/file/d/1Xc76IuoebG4zi1lB8DQ9NZVVvXyzo_FV/view?usp=sharing">
                                <Icon type="bi-file-earmark-person"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 about-me">
                        <h1>About me</h1>
                        <p>First of all, I am an accuracy-oriented and dedicated individual with a pro-active approach and the crucial ability to operate both independently and in fast-paced team environments. I am a self-taught developer. I’ve delivered working application utilising JavaScript, Material UI, React, Redux, WebSocket and Axios. Also, I made web pages using HTML5, CSS3 and vanilla JavaScript. I'm currently teaching myself Typescript and more advanced JavaScript  because I want to work on big projects. </p>
                        <p>I believe my dedication, work ethic and passion for software development will make me a valuable addition to the development team. I would love to have the chance to speak with you further about the role and how I can make a positive contribution to your organization. </p>
                        <div className="row interests">
                            <div className="col-lg-6 col-md-6">
                                <h3>Interests</h3>
                                <ul>
                                    <li>foreign languages;</li>
                                    <li>healthy lifestyle;</li>
                                    <li>personal development;</li>
                                    <li>meditation;</li>
                                    <li>yoga</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <h3>Personality</h3>
                                <ul>
                                    <li>ability to work in a team</li>
                                    <li>fast learning</li>
                                    <li>creativity</li>
                                    <li>determination in achieving goals</li>
                                    <li>resistance to stress</li>
                                    <li>ability to work under time pressure</li>
                                    <li>zoom on development</li>
                                    <li>initiative in generating new ideas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})