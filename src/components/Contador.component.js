import React from "react";
import "../styles/Contador.css"

function Contador({ numCLics }) {
    return(
        <div className="contador">
            {numCLics}
        </div>
    );
}

export default Contador