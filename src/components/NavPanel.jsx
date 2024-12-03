import Logo from '/andoDesignsLogo.png';
import './NavPanel.css'

export default function NavPanel({selected}) {
    return(
        <div className='nav-panel'>
            <div>
                <img src={Logo} alt='Site logo'/>
                <div className='line-break'></div>
                <p>
                    The purpose of this site is to showcase a variety of website that I’ve personally made. 
                    I written them all from scratch and they are hosted on a server. 
                    I will try to provide documentation on how each website was created as well.
                </p>
                {selected === "LATEST"
                ?   <a className='button selected' href='/index'>
                        LATEST
                    </a>
                :   <a className='button' href='/index'>
                        LATEST
                    </a>
                }

                {selected === "WEBSITES"
                ?   <a className='button selected' href='/websites'>
                        WEBSITES
                    </a>
                :   <a className='button' href='/websites'>
                        WEBSITES
                    </a>
                }

                {selected === "ABOUT"
                ?   <a className='button selected' href='/index'>
                        ABOUT
                    </a>
                :   <a className='button' href='/index'>
                        ABOUT
                    </a>
                }

            </div>
        </div>
    )
}