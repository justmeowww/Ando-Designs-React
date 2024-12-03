export default function Summary({preview, description, frameworks}){
    return(
        <>
            <div className='summary-card'>
                {preview != "" && <img src={preview} alt='Preview of site'/>}
                <div className='description'>
                    <p style={{whiteSpace:"pre-line"}}>{description}</p>
                    <div className='frameworks'>
                        <h1>Frameworks and Libraries</h1>
                        <div className='line-break' style={{margin: "0px",width: "80%"}}></div>
                        <p>{frameworks}</p>
                    </div>
                </div>
            </div>
        </>
    )
}