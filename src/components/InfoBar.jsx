import './InfoBar.css';

export default function InfoBar({title, dateCreated, status, link, git, selected}) {
    let colorStatus = false;
    if(status === "MAINTAINED"){
        colorStatus = true;
    }

    return(
        <>
            <div className='title-card' id='top'>
                <h1>{title}</h1>
                <p>{dateCreated}</p>
                {colorStatus
                ? status && <p className='status'>{status}</p>
                : status && <p className='status' style={{backgroundColor:"darkred"}}>{status}</p>
                }
            </div>
            <div className='info-bar'>
                {selected === "SUMMARY"
                ?   <a className='info-button selected' href='/index'>
                        SUMMARY
                    </a>
                :   <a className='info-button' href='/index'>
                        SUMMARY
                    </a>
                }

                {selected === "DOCUMENTATION"
                ?   <a className='info-button selected' href='./documentation'>
                        DOCUMENTATION
                    </a>
                :   <a className='info-button' href='./documentation'>
                        DOCUMENTATION
                    </a>
                }

                <a className='info-button' href={link} target='_blank'>
                    VISIT SITE
                </a>
                <a className='git-button' href={git} target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                </a>
            </div>
        </>
    )
}