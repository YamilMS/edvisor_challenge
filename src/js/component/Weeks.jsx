import React, { useState, useEffect} from "react";

export const Weeks = () => {
    const [numWeeks, setNumWeeks] = useState(0)

    const downWeeks= () =>{
        if(numWeeks>0){
            setNumWeeks(numWeeks -1)
        }
    }
        
    return (
                                            /* INPUT BOX*/ 
        <div className="col">
                <form className="form-floating d-flex align-items-center">
                    <input type="email" className="form-control" id="floatingInputValue" placeholder="Weeks" value={numWeeks} onChange={(e)=>setNumWeeks(e.target.value)} />
                    <div className="d-flex flex-column h-50 m-0" style={{position:"absolute",  left: "90%", top:"25%", marginRight:"1em"}}>
                        <div className="h-50"><i onClick={()=> setNumWeeks(numWeeks + 1)} className="arrow up h-50"></i></div>
                        <div className="h-50"><i onClick={downWeeks} className="arrow down h-50"></i></div> 
                    </div>
                    <label htmlFor="floatingInputValue">Min. number of weeks</label>
                </form>
        </div>
    )

}