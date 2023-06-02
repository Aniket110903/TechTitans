import geyser from "../assets/geyser.png";
import waterpurifer from "../assets/waterpurifer.png";
import airpurifer from "../assets/airpurifer.png";
import carpenter from "../assets/carpenter.jpeg";
import eletrician from "../assets/electrician.jpeg";
import plumber from "../assets/plumber.jpeg";
import ceiling from "../assets/ceilingpainting.jpeg";
import door from "../assets/doorpainting.jpeg";
import wall from "../assets/wallpainting.jpeg";
function ServicesComponent() {
    return (
        <>
            <div id="services">
                    <div class="service">
                    <h1 style={{fontSize:'2.5rem' ,fontWeight:500 }}> Services Provided</h1>
                    </div>
                    <hr class="hr"></hr>
                    <div className="appliances" id="appliances">
                        <h2 style={{fontSize:'2rem' ,fontWeight:500 }}>Appliances</h2>
                        <p>Servicing,Repair,Installation & Uninstallation</p>
                        <div className=" grid grid-cols-1 md:grid-cols-3 justify-center my-10px mx-30px">
                            <div class="box ease-in-out duration-300" id="item-1">
                            <img src={geyser} className=" ease-in-out duration-300" alt=""></img>
                            <h5 style={{fontWeight:500}}>Geyser Repair</h5>
                            <p>Start @249</p>
                            </div>
                            <div class="box" id="item-2">
                            <img src={waterpurifer} className=" ease-in-out duration-300" alt=""/>
                            <h5 style={{fontWeight:500}}>Waterpurifer Repair</h5>
                            <p>Start @349</p>
                            </div>
                            <div class="box" id="item-3">
                            <img src={airpurifer} className=" ease-in-out duration-300" alt=""/>
                            <h5 style={{fontWeight:500}}>Airpurifer Repair</h5>
                            <p>Start @449</p>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                    <hr class="hr"></hr>
                    <div class="painting" id="painting">
                        <h2 style={{fontSize:'2rem' ,fontWeight:500 }}>Home Painting</h2>
                        <p>Paint your Home,offices</p>
                        <div className=" grid grid-cols-1 md:grid-cols-3 justify-center my-10px mx-30px">
                            <div class="box " id="item-1">
                            <img src={wall} className=" ease-in-out duration-300" alt=""></img>
                            <p>wallpainting</p>
                            </div>
                            <div class="box" id="item-2">
                            <img src={door} className=" ease-in-out duration-300" alt=""/>
                            <p>Door Painting</p> 
                            </div>
                            <div class="box" id="item-3">
                            <img src={ceiling} className=" ease-in-out duration-300" alt=""/>
                            <p>Ceiling Painting</p>
                            </div>
                        </div>
                    </div>
                    <hr class="hr"></hr>
                    <div class="repair" id="repair">
                        <h2 style={{fontSize:'2.5rem' ,fontWeight:500 }}>Home Repair</h2>
                        <p>Repair any sort of building Destruction</p>
                        <div className=" grid grid-cols-1 md:grid-cols-3 justify-center my-10px mx-30px">
                            <div class="box " id="item-1">
                            <img src={carpenter} className=" ease-in-out duration-300" alt=""></img>
                            <p>Carpenter</p>
                            </div>
                            <div class="box" id="item-2">
                            <img src={eletrician} className=" ease-in-out duration-300" alt=""/>
                            <p>Eletricians</p> 
                            </div>
                            <div class="box" id="item-3">
                            <img src={plumber} className=" ease-in-out duration-300" alt=""/>
                            <p>Plumber</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
        </>
    );
}

export default ServicesComponent;