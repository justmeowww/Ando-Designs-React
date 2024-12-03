import NavPanel from "../components/NavPanel"
import InfoBar from "../components/InfoBar"
import websiteData from "./websiteInfo"
import wireframe from "/wireframes/airbnb-clone/0.jpg"

export default function AirBnbClone({isLatest}){
    return(
        <>
            <div>
                {isLatest === true 
                ?   <NavPanel selected="LATEST"/>
                :   <NavPanel selected="WEBSITES"/>
                }
            </div>
            <div className='right-panel'>
                <InfoBar selected = "DOCUMENTATION" {...websiteData[3]}/>
                <div className="documentation-card">
                    <h1>Wireframe</h1>
                    <p>
                        This wireframe was taken from <a className="inline-link" href="https://scrimba.com/">Scrimba</a> as part of their React course.
                    </p>
                    <figure>
                        <img className="wireframe" src={wireframe}/>
                        <figcaption>Test</figcaption>
                    </figure>
                    <h1>Props and Data</h1>
                    <p>
                        One of the coolest things about React was the introduction of Props. 
                        It allowed me to reuse the same component while using different sets of data. 
                        For instance, the data used for the Cards were:
                    </p>
                </div>
            </div>
        </>
    )
}