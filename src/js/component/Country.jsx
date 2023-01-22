import React, { useState, useEffect} from "react";

export const Country = (props) => {
    const dataCampus = props.country;
    const [country, setCountry] = useState([])
    const [showCountry, setShowCountry] = useState(false)
    const obj = {};
    console.log(dataCampus)
    console.log(showCountry)

        const countryList= dataCampus.map((item, idx)=>{

            const individualCountry = item.name.split(",").slice(-1)
            const course = item.name.split(",").slice(0, -1)
            //obj[individualCountry] += course;
            //console.log(course)
            
        
            return(
                <li className="list-group-item d-flex justify-content-between mx-2 border-0" key={idx} onMouseOver={(e)=>e.target.style.background = 'lightBlue'}>{individualCountry}</li>
            )

        })
        
    return (
                                            /* INPUT BOX*/ 
        <div className="col">
                <form className="form-floating d-flex align-items-center">
                    <input type="email" className="form-control" id="floatingInputValue" placeholder="Search" onChange={(e)=>setCountry(e.target.value)} onMouseOver={()=> !showCountry ? (setShowCountry(!showCountry)) : null}/>
                    <span className="material-icons" style={{position:"absolute", color:"grey",  left: "85%", top:"40%"}}>
									search
					</span>
                    <label htmlFor="floatingInputValue">Destination</label>
                </form>

                                            {/*DISPLAY OF COUNTRIES*/}
            <div className="w-50 my-1"  style={{position:"absolute", marginLeft:"0.8em"}} onMouseLeave={()=> showCountry ? (setShowCountry(!showCountry)) : null}>
                <div className="row d-flex shadow border" style={{background:"white"}}>
                                <div className="scrollpsy col-8 p-0">
                                    <p className="fw-bolder small mx-3 my-2">Results</p>
                                    <ul className="list-group">
                                        {countryList}
                                    </ul>
                                </div>
                                <div className="col-4 d-flex flex-column align-items-center justify-items-between p-0" style={{background:"#f6f6f6"}}>
                                    <p className="d-flex align-self-start small fw-bolder mx-3 my-2">Selected({"array.length"})</p>
                                    <ul className="list-group w-75">
                                        <li className="list-group-item d-flex justify-content-between py-0 px-2 border-0" style={{background:"#dedede"}}>Selected countries<button className="button btn-close justify-content-end"  aria-label="Close" ></button></li>
                                    </ul>
                                </div>
                </div>
                <div className="row d-flex shadow border">
                    <div className="d-flex justify-content-end p-2" style={{background:"white"}}> 
                        <button type="button" className="btn">Cancel</button>
                        <button type="button" className="confirmButton btn btn-outline-secondary" style={{color:"black"}}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )

}