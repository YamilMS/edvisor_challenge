import React, { useState, useEffect} from "react";

export const Country = (props) => {
    
    const countryCampus = props.country
    console.log(countryCampus.map(item=>item.id))
   /* */
    return (
        <option value="4">HOLA</option>
    )

}