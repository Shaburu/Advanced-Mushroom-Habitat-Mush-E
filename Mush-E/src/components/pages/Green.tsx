import './Green.css'
import { useState } from 'react'
import home from '/home.svg';

export const Green = () => {
  // const [data, setData] = useState<{ members: string[] }>({ members: [] });
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  // useEffect(() => {
  //   fetch("/members")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! Status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((responseData) => {
  //       setData(responseData);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("/members")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! Status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((responseData) => {
  //       setData(responseData);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //       console.log(data)
  //     });
  // }, []);
  

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }
  const [isAgarShown, setIsAgarShown] = useState(false);
  const [isSpawnShown, setIsSpawnShown] = useState(false);
  const [isBulkShown, setIsBulkShown] = useState(false);

  const handleAgarClick = () => {
    setIsAgarShown(!isAgarShown); // Toggle the state
    setIsSpawnShown(false);
    setIsBulkShown(false);
  };

  const handleSpawnClick = () => {
    setIsAgarShown(false);
    setIsSpawnShown(!isSpawnShown); // Toggle the state
    setIsBulkShown(false);
  };

  const handleBulkClick = () => {
    setIsAgarShown(false);
    setIsSpawnShown(false);
    setIsBulkShown(!isBulkShown); // Toggle the state
  };

  return (
    <div className="greenDiv">
      <div className="mushroomButton">
        {/* <button onClick={handleAgarClick}>Contam </button>
        <button onClick={handleSpawnClick}>Live</button>
        <button onClick={handleBulkClick}>Bulk Substrate</button> */}
        
        <button onClick={handleAgarClick}>Detecting and R&D</button>
        <button onClick={handleSpawnClick}>Monitoring</button>
        <button onClick={handleBulkClick}>Timeline</button>
      </div>
      <div className="mushroomContent">
      {isAgarShown && (
        <div className="display-block">
          <div className="mush">
            <div className="mushIdentity">
              <div>Name: ${}</div>
              <div>Species: ${}</div>
              <div>Type: ${}</div>
              <div>Edible: ${}</div>
              <div>Habitat: ${}</div>
            </div>
            <div className="mushImage">
              Identify the Greens by Image
              <div className="mushroomButton">
              <button >Upload</button>
              
              </div>
              
            </div>
          </div>
          <div className="mushStats">
            <div>
              <h2>Potential Market</h2>
                <div>
                  $MARKET DATA
                </div>
            </div>
            <div>
             <h2>Current Market price</h2>
                  $Market Price data
            </div>
            <div>
             <h2>Add to Inventory data</h2>
             <div className="buttons">
                <div className="addButton">
                    ADD
                </div>
                <div className="addButton2">
                    SHOW
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSpawnShown && (
        <div className="display-block LiveShow">
          <div className="livefeed">
            LIVE FEED
          </div>
          <div className="mushStats">
            <div>
              <h2>CAM1</h2>       
            </div>
            <div>
             <h2>CAM2</h2>
            </div>
            <div>
             <h2>CAM3</h2>
            </div>
          </div>
          <div className="monitorStats">
                <div className="monitorItems">
                  <div> <h1>No</h1> </div>
                  <div>Contam Detected</div>
                </div>
                <div className="monitorItems">
                  <div> <h1>32°C</h1> </div>
                  <div>Temperature</div>
                </div>
                <div className="monitorItems">
                  <div> <h1>29°C</h1>  </div>
                  <div>Humidity</div>
                </div>
                <div className="monitorItems">
                  <div> <h1>1309<sub>ppm</sub></h1> </div>
                  <div>CO<sub>2</sub> Percentage</div>
                </div>
          </div>
          <div className="monitorGraph">
            Monitor Graph
          </div>
        </div>
      )}
      {isBulkShown && (
        <div className="display-block">
           <div className="timelineActionsToday">
              Actions Needing your Attention Today
              <div>
                <div>Ship Orders: <br/>29</div>
                <div>Pick Up: <br/>3</div>
                <div>Incubate: <br/>2 Batches</div>
                <div>Inoculate: <br/>10 Grain Jars </div>
                <div>Cross: <br/>Strains</div>
                <div>Ship Orders: <br/>29</div>
              </div>
            </div>
            <div className="timelineActions">
                <div className="actionsItems">
                  <div> Delivery </div>
                  <div className="Itemsquare">      
                  <img src={home}  alt="Your SVG" className="svgcolor"/>
                  </div>
                </div>
                <div className="actionsItems">
                  <div> Shipped </div>
                  <div className="Itemsquare">      
                  <img src={home}  alt="Your SVG" className="svgcolor"/>
                  </div>                </div>
                <div className="actionsItems">
                  <div> To Order </div>
                  <div className="Itemsquare">      
                  <img src={home}  alt="Your SVG" className="svgcolor"/>
                  </div>                </div>
                <div className="actionsItems">
                  <div> Grievance </div>
                  <div className="Itemsquare">      
                  <img src={home}  alt="Your SVG" className="svgcolor"/>
                  </div>                </div>
                <div className="actionsItems">
                  <div> Inventory </div>
                  <div className="Itemsquare">      
                  <img src={home}  alt="Your SVG" className="svgcolor"/>
                  </div>
                </div>
            </div>
            <div className="calenderGraph">
              <div className="graph">GRAPHS</div>
              <div className="calender">Calender
              </div>
              
            </div>
        </div>
      )}
      </div>
    
    </div>
  );
};
