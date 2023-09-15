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
             Mushrooms Bot 
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi error eos
            laudantium necessitatibus illo! Eius laudantium doloremque animi, 
            velit incidunt ullam nulla voluptates alias labore earum dolorum corporis corrupti?
            </p>
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
              Leafy Greens Bot
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi error eos
            laudantium necessitatibus illo! Eius laudantium doloremque animi, 
            velit incidunt ullam nulla voluptates alias labore earum dolorum corporis corrupti?
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

