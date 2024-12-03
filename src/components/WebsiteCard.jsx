import './WebsitesGrid.css';

export default function WebsiteCard({title, dateCreated, banner, folderDir}){
    return(
        <>
            <a href={`/websites/${folderDir}/summary`}>
                <img src={banner}/>
                <div className="overlay">
                    <div>
                        <h1>{title}</h1>
                        <p>{dateCreated}</p>                         
                    </div>
                </div>
            </a>
        </>
    )
}