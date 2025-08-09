import { useState } from "react";
import React from "react";
import BackgroundDecoration from "../src/components/BackgroundDecoration";

function App(){

    const [resources, setResources]=useState([{id:1,resourceType:'',count:1,region:''}])

    const addResource = () => {
        const newId = Math.max(...resources.map(r=>r.id))+1;
        setResources(...resources,{id:newId, resourceType:'', count:1, region:''});

    };

    const deleteResource = (Id) => {

    }


    return(
        <div className="App">
        <BackgroundDecoration/>

        <div className="container">
        <div className="header"></div>

        <div className="main-content"></div>


        </div>




        </div>
        


    )

}

export default App
