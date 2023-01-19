import React, { useState, useEffect} from "react";

export const Country = (props) => {
    const dataCampus = props.country;
    const [test, setTest]= useState([])
    const obj = {};

    
    return (
        <div className="col form-floating">
			<select className="form-select form-select-lg h-100" aria-label=".form-select-lg example" >
			<option defaultValue key="0">Country</option>
        { dataCampus.map((item, idx)=>{

            const individualCountry = item.name.split(",").slice(-1)
            const course = item.name.split(",").slice(0, -1)
            obj[individualCountry] += course;
            console.log(course)
            

            return(
                <option value={idx} key={idx+1}>{individualCountry}</option>
            )

        })}

            </select>
            <label className="mx-3" htmlFor="floatingSelect">Destination</label>
		</div>
    )

}