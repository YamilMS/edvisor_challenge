import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Country = () => {
    const {store, actions} = useContext(Context);
    const [displayCountry, setDisplayCountry] = useState([]);
    const [showCountry, setShowCountry] = useState(false);
    const [country, setCountry] = useState([]);
    const locations = store.countryLocation;
    const campuses= store.providerSelected;
    console.log("Para testear", locations);
    console.log('Esto es la store', campuses);

    // Function that handle the locations selected in the country field and do the changes in the style when selected or deselected
    const selectCountry = (e) =>{
        if(!displayCountry.includes(e.target.id)){
            setDisplayCountry([...displayCountry, e.target.id]);
            e.target.style.background = 'lightBlue';
            e.target.querySelector('span').style.display= 'block';
        } else if( e.target.querySelector('span').style.display==null){
            pass;
        } else {
            e.target.style.background = 'transparent';
            e.target.querySelector('span').style.display= 'none';
            setDisplayCountry(displayCountry.filter((item, idx) => item !== e.target.id))
        }
    }

    // Function that handle the delete action from the X span in the country field
    const deleteCountry= (e)=>{
		const newSelectCountry= displayCountry.filter((item, idx)=>idx !== parseInt(e.target.id));
		setDisplayCountry(newSelectCountry);
        displayCountry.map((item, index)=>{
            const elm = document.getElementById(item)
            if(parseInt(e.target.id) === index){
                elm.style.background= 'transparent';
                elm.querySelector('span').style.display= 'none';
            }
        })
	}
   
    // Generating the elements in the country fields with all the locations.
    const countryList= locations.map((item, idx)=>{
        const individualCountry = item.name.split(",");
        return(
            <li className="list-group-item d-flex justify-content-between mx-2 border-0" key={idx} value={idx} id={individualCountry} onClick={selectCountry}>
                {individualCountry}
                <span className="material-icons" id={individualCountry} style={{color:"#1b7ced", display:"none"}}>
                    done
                </span>
            </li>
        )
    })

    // Generating the element populated with the locations once selected.
    const countrySelected = displayCountry.map((item, idx) =>{
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
                    <input type="email" className="form-control" id="floatingInputValue" value={country.length>0 ? `${country.length} Selected` : "Search"} onChange={(e)=>setDisplayCountry([...country, e.target.value])} onClick={()=>!showCountry ? (setShowCountry(!showCountry)) : null}/>
                    <span className="material-icons" style={{position:"absolute", color:"grey",  left: "85%", top:"40%"}}>
									search
					</span>
                    <label htmlFor="floatingInputValue">Destination</label>
                </form>

                                            {/*DISPLAY OF COUNTRIES*/}
    
                <div className="w-50 my-1"  style={{position:"absolute", marginLeft:"0.8em", display:`${showCountry ? "inline" : "none"}`}} onMouseLeave={()=>{ showCountry ? (setShowCountry(!showCountry)) : null; setCountry(displayCountry)}}>
                <div className="row d-flex shadow border" style={{background:"white"}}>
                                <div className="scrollpsy col-8 p-0">
                                    <p className="fw-bolder small mx-3 my-2">Results</p>
                                    <ul className="list-group">
                                        {countryList}
                                    </ul>
                                </div>
                                <div className="scrollpsy col-4 d-flex flex-column align-items-center justify-items-between p-0" style={{background:"#f6f6f6"}}>
                                    <p className="d-flex align-self-start small fw-bolder mx-3 my-2">Selected({displayCountry.length})</p>
                                    <ul className="list-group w-75">
                                       {countrySelected}
                                    </ul>
                                </div>
                </div>
                <div className="row d-flex shadow border">
                    <div className="d-flex justify-content-end p-2" style={{background:"white"}}> 
                        <button type="button" className="btn">Cancel</button>
                        <button type="button" className="confirmButton btn btn-outline-secondary" onClick={()=> setCountry(displayCountry)} style={{color:"black"}}>Confirm</button>
                    </div>
                </div>
            </div>                             
        
        </div>
    )

}