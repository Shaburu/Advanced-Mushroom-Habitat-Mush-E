import viteLogo from '/mascaria.png'

import "./Home.css";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>

      <div className='hero'>
          <div className='content-left'>
            <h1>
              Computer Vision 4 Mushrooms
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi error eos
            laudantium necessitatibus illo! Eius laudantium doloremque animi, 
            velit incidunt ullam nulla voluptates alias labore earum dolorum corporis corrupti?
            </p>
            <button>
              Try Now
            </button>
            <button>
              View Code
            </button>        
          </div>
          
          <div className='content-right'>
          <Link to="/green">
          <img src={viteLogo} className="logo react" alt="React logo" />
          </Link>
          </div>
          
          
        </div>
        
        
        
        <div className="flex">
          <div className="flex-child">
          <Link to="/green">
            <img src={viteLogo} className="logo react" alt="React logo" />
            </Link>
          </div>
          <div className="flex-child flex flex--vertical">
            <div className="flex-child">
              <h1>right top</h1>
            </div>
            <div className="flex-child">
              <h1>right bottom</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem esse iste voluptate eum ex mollitia temporibus unde eveniet omnis, vel, corrupti sed nobis consequatur quaerat ad sequi aliquid nostrum?</p>
            </div>
          </div>
        </div>
</div>

  
  )
}

