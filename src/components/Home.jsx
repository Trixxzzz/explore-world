import React from 'react';
import vg from '../assets/2.webp';
import {AiFillGoogleCircle,AiFillYoutube,AiFillAmazonCircle,AiFillInstagram} from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
    <main>
        <h1>
            ExploreWorld
        </h1>
        <p>Solution to all your problems </p>
    </main>
    </div>
    <div className='home2'>
        <img src={vg} alt='Graphics'/>
        
        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
        </div>
    </div>
    <div className='home3' id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>This is just a practice website for the languages we have used into it such as HTML, CSS,JavaScript. I hope you did enjoy what I have tried to make to show my skills!
                Thankyou for giving me your precious time.
            </p>
        </div>
    </div>
    <div className='home4' id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <a href="https://www.google.com/" target={"blank"}>Google</a>

                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <a href="https://www.amazon.in/" target={"blank"}>Amazon</a>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                        <a href="https://www.youtube.com/" target={"blank"}>Youtube</a>

                </div>
                <div style={{animationDelay:"1.0s"}}>
                    <AiFillInstagram/>
                        <a href="https://www.instagram.com/" target={"blank"}>Instagram</a>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home