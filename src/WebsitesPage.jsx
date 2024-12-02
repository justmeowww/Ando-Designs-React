import NavPanel from './components/NavPanel.jsx';
import InfoBar from './components/InfoBar.jsx';
import Summary from './components/Summary.jsx';
import Title from './components/Title.jsx'
import websiteData from './websites/websiteInfo.jsx';

export default function WebsitePage() {
  return (
    <>
      <div>
        <NavPanel selected="WEBSITES"/>
      </div>
      <div className='right-panel'>
        <Title title={2024}/>
      </div>
    </>
  )
}
