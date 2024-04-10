import React from 'react';
import './skills.css';
import JavaImg from '../../assets/java-img.png';
import JSImg from '../../assets/JS-img.png';
import ReactImg from '../../assets/react-img.png';
import NodeImg from '../../assets/nodejs-img.png';
import ExpressImg from '../../assets/expressjs-img.png';
import MongoImg from '../../assets/mongo-img.png';
import SqlImg from '../../assets/sql-img.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>Skills & Ability <br/></span>
            <span className='skillDesc'>Mastery is not an end but a journey, and skills are the stepping stones along the way</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={JavaImg} alt="Java-img" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>JAVA</h2>
                        <p>★★★★☆</p>

                    </div>
                </div>
                <div className='skillBar'>
                    <img src={JSImg} alt="JavaScript-img" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>JavaScript</h2>
                        <p>★★★★☆</p>

                    </div>
                </div>
                <div className='skillBar'>
                    <img src={NodeImg} alt="Node-img" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>NodeJS</h2>
                        <p>★★★★☆</p>

                    </div>
                </div>
                <div className='skillBar'>
                    <img src={ExpressImg} alt="Express.js-img" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>ExpressJS</h2>
                        <p>★★★★☆</p>

                    </div>
                </div>
                <div className='skillBar'>
                    <img src={ReactImg} alt="React-img" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>ReactJS</h2>
                        <p>★★☆☆☆</p>

                    </div>
                </div>
                <div className='skillBar'>
                    <img src={MongoImg} alt="Mongo-img" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>MongoDb</h2>
                        <p>★★★☆☆</p> 

                    </div>
                </div>
                <div className='skillBar'>
                    <img src={SqlImg} alt="Sql-img" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>MySql</h2>
                        <p>★★★★☆</p> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
