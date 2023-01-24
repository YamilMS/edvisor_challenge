import React, { useState, useEffect} from "react";

export const Country = (props) => {
    const dataCampus = props.country;
    const [country, setCountry] = useState([])
    const [showCountry, setShowCountry] = useState(false)
    console.log(country)

    
    const selectCountry = (e) =>{
        if(!country.includes(e.target.id)){
            setCountry([...country, e.target.id]);
            e.target.style.background = 'lightBlue';
            e.target.querySelector('span').style.display= 'block';
        } else {
            e.target.style.background = 'transparent';
            e.target.querySelector('span').style.display= 'none';
            setCountry(country.filter((item, idx) => item !== e.target.id))
        }
        /*
        country.map((item, index)=>{
            const elm = document.getElementById(item)
            elm.style.background= 'lightBlue';
            elm.querySelector('span').style.display= 'block';
        })
        */
    }

    const deleteCountry= (e)=>{
		const newSelectCountry= country.filter((item, idx)=>idx !== parseInt(e.target.id));
		setCountry(newSelectCountry);
        country.map((item, index)=>{
            const elm = document.getElementById(item)
            if(parseInt(e.target.id) === index){
                elm.style.background= 'transparent';
                elm.querySelector('span').style.display= 'none';
            }
        })
	}
   
    const countryList= dataCampus.map((item, idx)=>{
        const individualCountry = item.name.split(",").slice(0, -1);
        const course = item.name.split(", ").slice(0, -1);
        return(
            <li className="list-group-item d-flex justify-content-between mx-2 border-0" key={idx} value={idx} id={individualCountry} onClick={selectCountry}>
                {individualCountry}
                <span className="material-icons" id={idx} style={{color:"#1b7ced", display:"none"}}>
                    done
                </span>
            </li>
        )
    })

    const countrySelected = country.map((item, idx) =>{
        return(
            <li className="list-group-item d-flex justify-content-between my-2 py-0 px-2 border-0" key={idx} id={idx} style={{background:"#dedede"}}>
                {item}
                <button className="d-flex align-self-center px-2 button btn-close justify-content-end" id={idx} onClick={deleteCountry}  aria-label="Close" ></button>
            </li>
        )
    })
        
    return (
                                            /* INPUT BOX*/ 
        <div className="col">
                <form className="form-floating d-flex align-items-center">
                    <input type="email" className="form-control" id="floatingInputValue" defaultValue={"Search"} onChange={(e)=>setCountry([...country, e.target.value])} onClick={()=>!showCountry ? (setShowCountry(!showCountry)) : null}/>
                    <span className="material-icons" style={{position:"absolute", color:"grey",  left: "85%", top:"40%"}}>
									search
					</span>
                    <label htmlFor="floatingInputValue">Destination</label>
                </form>

                                            {/*DISPLAY OF COUNTRIES*/}
            { showCountry ? (
                <div className="w-50 my-1"  style={{position:"absolute", marginLeft:"0.8em"}} onMouseLeave={()=> showCountry ? (setShowCountry(!showCountry)) : null}>
                <div className="row d-flex shadow border" style={{background:"white"}}>
                                <div className="scrollpsy col-8 p-0">
                                    <p className="fw-bolder small mx-3 my-2">Results</p>
                                    <ul className="list-group">
                                        {countryList}
                                    </ul>
                                </div>
                                <div className="scrollpsy col-4 d-flex flex-column align-items-center justify-items-between p-0" style={{background:"#f6f6f6"}}>
                                    <p className="d-flex align-self-start small fw-bolder mx-3 my-2">Selected({country.length})</p>
                                    <ul className="list-group w-75">
                                       {countrySelected}
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
            ) :(
                <div className="w-50 my-1"  style={{position:"absolute", marginLeft:"0.8em", display:"none"}} onMouseLeave={()=> showCountry ? (setShowCountry(!showCountry)) : null}>
                <div className="row d-flex shadow border" style={{background:"white"}}>
                                <div className="scrollpsy col-8 p-0">
                                    <p className="fw-bolder small mx-3 my-2">Results</p>
                                    <ul className="list-group">
                                        {countryList}
                                    </ul>
                                </div>
                                <div className="col-4 d-flex flex-column align-items-center justify-items-between p-0" style={{background:"#f6f6f6"}}>
                                    <p className="d-flex align-self-start small fw-bolder mx-3 my-2">Selected({country.length})</p>
                                    <ul className="list-group w-75">
                                       {countrySelected}
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
            )
            }                                
            
        </div>
    )

}