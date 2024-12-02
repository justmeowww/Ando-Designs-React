import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SummaryPage from './SummaryPage.jsx'
import websiteData from './websites/websiteInfo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SummaryPage websiteID={websiteData[websiteData.length-1].id} selected="LATEST"/>
  </StrictMode>,
)
