import NavPanel from './components/NavPanel';
import InfoBar from './components/InfoBar';
import Summary from './components/Summary.jsx';
import websiteData from './websites/websiteInfo.jsx';

export default function Home() {
  const websiteID = 0;
  return (
    <>
      <div>
        <NavPanel selected="LATEST"/>
      </div>
      <div className='right-panel'>
        <InfoBar selected = "SUMMARY" {...websiteData[websiteID]}/>
        <Summary {...websiteData[websiteID]}/>
      </div>
    </>
  )
}
