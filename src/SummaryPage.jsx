import NavPanel from './components/NavPanel.jsx';
import InfoBar from './components/InfoBar.jsx';
import Summary from './components/Summary.jsx';
import websiteData from './websites/websiteInfo.jsx';

export default function SummaryPage({websiteID, selected, isLatest}) {
  return (
    <>
      <div>
        <NavPanel selected={selected}/>
      </div>
      <div className='right-panel'>
        <InfoBar selected = "SUMMARY" {...websiteData[websiteID]}/>
        <Summary {...websiteData[websiteID]}/>
      </div>
    </>
  )
}
