import React from "react";

const Searchbox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightsest-blue" 
            type="search" placeholder="Search Robot" 
            onChange={searchChange}/>
        </div>
    )
}

export default Searchbox;