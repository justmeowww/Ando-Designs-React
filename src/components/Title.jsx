import websiteData from '../websites/websiteInfo.jsx';
import WebsiteCard from './WebsiteCard';

export default function Title({title}){
    const websiteCards = websiteData.toReversed().map( x => {
        if(x.year === title){
            return(
                <WebsiteCard
                    key={x.id}
                    {...x}
                />
            )            
        }
    })

    return(
        <>
            <div className='title-card'>
                <h1>{title}</h1>
            </div>
            <div className='website-grid'>
                {websiteCards}
            </div>
        </>
    )
}