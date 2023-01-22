import React, { useState, useEffect} from "react";

export const Provider = (props) => {
    const dataProvider = props.provider;
    const [provider, setProvider] = useState([])
    const [showProvider, setShowProvider] = useState(false)
    const obj = {};
    
    /*
        const countryList= dataCampus.map((item, idx)=>{

            const individualCountry = item.name.split(",").slice(-1)
            const course = item.name.split(",").slice(0, -1)
            //obj[individualCountry] += course;
            //console.log(course)
            
        
            return(
                <li className="list-group-item d-flex justify-content-between mx-2 border-0" key={idx} onMouseOver={(e)=>e.target.style.background = 'lightBlue'}>{individualCountry}</li>
            )

        })
    */

    return (
                                            /* INPUT BOX*/ 
        <div className="col">
                <form className="form-floating d-flex align-items-center">
                    <input type="email" className="form-control" id="floatingInputValue" placeholder="Search" value={"Any"} onChange={(e)=>setProvider(e.target.value)} onMouseOver={()=> !showProvider ? (setShowProvider(!showProvider)) : null}/>
                    <span className="material-icons" style={{position:"absolute", color:"grey",  left: "85%", top:"40%"}}>
									search
					</span>
                    <label htmlFor="floatingInputValue">Provider</label>
                </form>
    


        </div>
    )

}