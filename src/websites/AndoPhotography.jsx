import NavPanel from "../components/NavPanel"
import InfoBar from "../components/InfoBar"
import websiteData from "./websiteInfo"
import wireframe from "/wireframes/airbnb-clone/0.jpg"

export default function NoDoc(){
    return(
        <>
            <div>
                <NavPanel selected="WEBSITES"/>
            </div>
            <div className='right-panel'>
                <InfoBar selected = "DOCUMENTATION" {...websiteData[0]}/>
                <div className="documentation-card">
                    <p>
                        This website currently has no documentation.
                    </p>
                </div>
            </div>
        </>
    )
}