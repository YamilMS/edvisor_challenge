import React, { useState, useEffect} from "react";

export const Country = (props) => {
    const dataCampus = props.country;
    const [country, setCountry] = useState([])
    const [showCountry, setShowCountry] = useState(false)
    const obj = {};
    console.log(country)
    console.log(showCountry)

    /*
        { dataCampus.map((item, idx)=>{

            const individualCountry = item.name.split(",").slice(-1)
            const course = item.name.split(",").slice(0, -1)
            //obj[individualCountry] += course;
            //console.log(course)
            
        
            return(
                <option value={individualCountry} key={idx+1}>{individualCountry}</option>
            )

        })}
        */
    return (
        <div className="col">
                <form className="form-floating d-flex align-items-center">
                    <input type="email" className="form-control" id="floatingInputValue" placeholder="Search" onChange={(e)=>setCountry(e.target.value)} onMouseOver={()=> !showCountry ? (setShowCountry(true)) : null}/>
                    <span className="material-icons" style={{position:"absolute",  left: "80%", top:"40%", marginRight:"1em"}}>
									search
					</span>
                    <label htmlFor="floatingInputValue">Destination</label>
                </form>
               
            <div className="w-50 my-1"  style={{position:"absolute"}} onMouseLeave={()=> showCountry ? (setShowCountry(false)) : null}>
                <div className="row d-flex shadow border" style={{background:"white"}}>
                                <div className="col-7 p-0">
                                    <p className="fw-bolder small mx-3 my-2">Results</p>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between mx-2 border-0" onMouseOver={(e)=>e.target.style.background = 'lightBlue'}>Country to select</li>
                                    </ul>
                                </div>
                                <div className="col-5 d-flex flex-column align-items-center justify-items-between p-0" style={{background:"#f6f6f6"}}>
                                    <p className="d-flex align-self-start small fw-bolder mx-3 my-2">Selected({})</p>
                                    <ul className="list-group w-75">
                                        <li className="list-group-item d-flex justify-content-between py-0 px-2 border-0" style={{background:"#dedede"}}>Selected countries<button className="button btn-close justify-content-end"  aria-label="Close" ></button></li>
                                    </ul>
                                </div>
                </div>
                <div className="row d-flex shadow border">
                    <div className="d-flex justify-content-end p-2" style={{background:"white"}}> 
                        <button type="button" className="btn">Cancel</button>
                        <button type="button" className="btn btn-outline-secondary" style={{color:"black"}}>Secondary</button>
                    </div>
                </div>
            </div>
        </div>
    )

}