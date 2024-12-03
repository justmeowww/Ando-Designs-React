import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SummaryPage from './SummaryPage.jsx';
import websiteData from './websites/websiteInfo.jsx';
import WebsitesPage from './WebsitesPage.jsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AndoPhotography from './websites/AndoPhotography.jsx';
import AndoDesignsDeprec from './websites/AndoDesignsDeprec.jsx';
import ReactFacts from './websites/ReactFacts.jsx';
import AirBnbClone from './websites/AirBnbClone.jsx';
import AndoDesignsReact from './websites/AndoDesignsReact.jsx';

const websiteSummary = websiteData.map( x => {
    return(
      <Route key={x.id} path={`/websites/${x.folderDir}/summary`} element={<SummaryPage websiteID={x.id} selected="WEBSITES"/>}/>
    )
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SummaryPage websiteID={websiteData[websiteData.length-1].id} selected="LATEST"/>}/>
      <Route path="/index" element={<SummaryPage websiteID={websiteData[websiteData.length-1].id} selected="LATEST"/>}/>
      <Route path="/websites" element={<WebsitesPage/>}/>
      <Route path="/summary" element={<Navigate to={`/websites/${websiteData[websiteData.length-1].folderDir}/summary`}/>}/>
      <Route path="/documentation" element={<Navigate to={`/websites/${websiteData[websiteData.length-1].folderDir}/documentation`}/>}/>
      {websiteSummary}
      <Route path={`/websites/ando-photography/documentation`} element={<AndoPhotography/>}/>
      <Route path={`/websites/ando-designs-deprec/documentation`} element={<AndoDesignsDeprec/>}/>
      <Route path={`/websites/react-facts/documentation`} element={<ReactFacts/>}/>
      <Route path={`/websites/airbnb-clone/documentation`} element={<AirBnbClone/>}/>
      <Route path={`/websites/ando-designs-react/documentation`} element={<AndoDesignsReact/>}/>
    </Routes>
  </BrowserRouter>,
)
