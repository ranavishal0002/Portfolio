import React from 'react';
import './education.css';
import BVICAM from '../../assets/bvicam-img.jpeg';
import Rajdhani from '../../assets/rajdhani-college-img.jpg';
import SBM from '../../assets/sbm-img.jpeg';
import JaswantLal from '../../assets/jaswantLal-img.webp';

const Education = () => {
    return (
        <section id='education'>
            <span className='skillTitle'>Education <br /></span>
            <span className='skillDesc'>Details about my education</span>
            <div id='educationSystem'>
                <div className='EducateHere'>
                    <img src={BVICAM} alt="BVICAM" className='PremisesImg' />
                    <div className='skillBarText'>
                        <h2>BVICAM</h2>
                        <p>Masters in Computer Application(BVICAM)<br />2022-2024</p>
                        <a href='https://bvicam.in/'>Read More</a>
                    </div>
                </div>
                <div className='EducateHere'>
                    <img src={Rajdhani} alt="Rajdhani" className='PremisesImg' />
                    <div className='skillBarText'>
                        <h2>Rajdhani</h2>
                        <p>B.Sc(Honors) Chemistry<br /> 2018-2021</p>
                        <a href='https://www.rajdhanicollege.ac.in/'>Read More</a>
                    </div>
                </div>
                <div className='EducateHere'>
                    <img src={SBM} alt="S.B.MILLS SR. SEC. SCHOOL" className='PremisesImg' />
                    <div className='skillBarText'>
                        <h2>S.B.MILLS SR. SEC. SCHOOL</h2>
                        <p>Science<br />2016-2018</p>
                        <a href='https://www.sbmschool.in/'>Read More</a>
                    </div>
                </div>
                <div className='EducateHere'>
                    <img src={JaswantLal} alt="Ch. Jaswant Lal Public School" className='PremisesImg' />
                    <div className='skillBarText'>
                        <h2>Ch. Jaswant Lal Public School</h2>
                        <p>High School<br />2015-2016</p>
                        <a href='https://www.sbmschool.in/'>Read More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
