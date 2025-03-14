import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SummaryPage from './SummaryPage.jsx';
import DocumentationPage from './DocumentationPage.jsx';
import websiteData from './websites/websiteInfo.jsx';
import WebsitesPage from './WebsitesPage.jsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AboutPage from './AboutPage.jsx';
import NotFound from './NotFound.jsx';

const websiteSummary = websiteData.map( x => {
    return(
      <Route key={x.id} path={`/websites/${x.folderDir}/summary`} element={<SummaryPage websiteID={x.id} selected="WEBSITES"/>}/>
    )
})

const websiteDocumentation = websiteData.map( x => {
  return(
    <Route key={x.id} path={`/websites/${x.folderDir}/documentation`} element={<DocumentationPage websiteID={x.id} selected="WEBSITES"/>}/>
  )
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SummaryPage websiteID={websiteData[websiteData.length-1].id} selected="LATEST"/>}/>
      <Route path="/index" element={<SummaryPage websiteID={websiteData[websiteData.length-1].id} selected="LATEST"/>}/>
      <Route path="/websites" element={<WebsitesPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/summary" element={<Navigate to={`/websites/${websiteData[websiteData.length-1].folderDir}/summary`}/>}/>
      <Route path="/documentation" element={<Navigate to={`/websites/${websiteData[websiteData.length-1].folderDir}/documentation`}/>}/>
      {websiteSummary}
      {websiteDocumentation}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>,
)
