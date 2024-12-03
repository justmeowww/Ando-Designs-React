import NavPanel from "./components/NavPanel";
import InfoBar from "./components/InfoBar";
import websiteData from "./websites/websiteInfo";
import AndoPhotography from './websites/AndoPhotography';
import AirBnbClone from './websites/AirBnbClone';
import NoDoc from "./websites/NoDoc";
import './components/InfoBar.css';
import AndoDesignsDeprec from "./websites/AndoDesignsDeprec";
import ReactFacts from "./websites/ReactFacts";

function docPage(websiteID){
    switch(websiteID) {
        case 0:
            return(<AndoPhotography/>)
        case 1:
            return(<AndoDesignsDeprec/>)
        case 2:
            return(<ReactFacts/>)
        case 3:
            return(<AirBnbClone/>)
        default:
            return(<NoDoc/>)
    }
}



export default function DocumentationPage({isLatest, websiteID}){

    return(
        <>
            <div>
                {isLatest === true 
                ?   <NavPanel selected="LATEST"/>
                :   <NavPanel selected="WEBSITES"/>
                }
            </div>
            <div className='right-panel'>
                <InfoBar selected = "DOCUMENTATION" {...websiteData[websiteID]}/>
                {docPage(websiteID)}
            </div>
        </>
    )
}