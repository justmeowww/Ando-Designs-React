import NavPanel from './components/NavPanel.jsx';
import Title from './components/Title.jsx'

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
