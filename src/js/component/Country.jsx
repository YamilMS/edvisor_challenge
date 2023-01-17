import React, { useState, useEffect} from "react";

export const Country = (props) => {
    const [countryCampus, setCountryCampus] = useState([]);
    const dataCampus = props.country

    useEffect(()=>{
		const getCountry = () => {
            dataCampus.map(item => setCountryCampus([...countryCampus, item.name]))
        }
		getCountry();
	},[])

    //console.log(countryCampus)
   
    return (
        <div className="col form-floating">
			<select className="form-select form-select-lg h-100" aria-label=".form-select-lg example" >
			<option defaultValue key="0">Country</option>
        { dataCampus.map((item, idx)=>{
            let x = item.name.split(",").slice(-1)
            console.log(x)
            return(
                <option value={idx} key={idx+1}>{item.name.split()}</option>
            )
        })}
            </select>
            <label className="mx-3" htmlFor="floatingSelect">Destination</label>
		</div>
    )

}