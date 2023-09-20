import viteLogo from '/mascaria.png'
import green from '/bokchoyCUM.png'
import "./Home.css";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>

      <div className='hero'>
          <div className='content-left'>
            <h1>
             MycoBot 
            </h1>
            <p>
            Introducing the MycoBot <br/><br/>
            Revolutionizing Mushroom Cultivation with Computer Vision

            The Mycobot is a groundbreaking innovation that combines the power of computer vision with advanced automation to create a fully autonomous mushroom cultivation system. Inspired by the challenges of traditional mushroom farming and the demands of future space exploration, the Mycobot represents a leap forward in sustainable food production, scientific research, and technological innovation.  </p>
            <div className='TryCode'>            
              <Link to="/mushroom">
              <div>
              Try Now
              </div>
              </Link>
              <a href='#'>
              <div>
              View Code           
              </div> 
              </a>
            </div>      
          </div>
          
          <div className='content-right logo'>
          <Link to="/mushroom">
          <img src={viteLogo} className="logo react" alt="React logo" />
          </Link>
          </div> 
        </div>

        <div className='hero'>
          <div className='content-right2 logo'>
          <Link to="/green">
          <img src={green} className="logo vite" alt="React logo" width='100%' />
          </Link>
          </div>
          <div className='content-left'>
            <h1>
            VerdeBot
            </h1>
            <p>
            Introducing the VerdeBot: <br/> <br/>
            Transforming Leafy Greens Farming with Cutting-Edge Automation and Computer Vision

The VerdeBot represents a remarkable leap forward in the world of leafy greens farming. This groundbreaking innovation harnesses the power of advanced automation and computer vision to create a fully autonomous system for cultivating leafy greens. Designed to address the challenges of traditional farming and adapt to future agricultural needs, VerdeBot is poised to revolutionize sustainable food production, scientific research, and technological progress.
             </p>
            <div className='TryCode'>            
              <Link to="/green">
              <div>
              Try Now
              </div>
              </Link>
              <a href='#'>
              <div>
              View Code           
              </div> 
              </a>
            </div>      
          </div> 
        </div>
        
        
        
        
        {/* <div className="flex">
          <div className="flex-child">
          <Link to="/green">
            <img src={green} className="logo vite" alt="React logo" />
            </Link>
          </div>
          <div className="flex-child flex flex--vertical">
            <div className="flex-child">
              <h1>Computer Vision 4 Leafy Greens</h1>
            </div>
            <div className="flex-child">
              <h1></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem esse iste voluptate eum ex mollitia temporibus unde eveniet omnis, vel, corrupti sed nobis consequatur quaerat ad sequi aliquid nostrum?</p>
            </div>
          </div>
        </div> */}

</div>

  
  )
}

