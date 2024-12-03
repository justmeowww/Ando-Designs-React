import wireframe from '/wireframes/ando-designs-deprec/0.jpg';

export default function AndoDesignsDeprec(){
    return(
        <>
            <div className="documentation-card">
                <h1 className="first-header">Wireframe</h1>
                <p>
                    Likewise with Ando Portfolio, the Wireframe is more of a rough drafted created in Figma. 
                    Since this website was based on Ando Portfolio, I didn't really need to have other drafts for the Summary and Documentation pages.
                </p>
                <figure>
                    <img className='wireframe' src={wireframe} alt='Wireframe'/>
                    <figcaption>Wireframe</figcaption>
                </figure>
                <p>
                    I also decided to add the "Libraries" section to list out what libraries I may have used and a shortcut to the GitHub page.
                </p>
                <h1>Status Label</h1>
                <p>
                    For a Website Portfolio, I wanted to add a simple status bar on what websites I'm still currently maintaining. 
                    I know this could've been done with a simple class, but I decided to make a script instead that checked whether the status text says "MAINTAINED". 
                    Any other text would make the status bar red.
                </p>
                <h2>JavaScript</h2>
                <div className='code'>
                    <pre>
                        <code>{`
                        function pageStatus() {
                            let pageStatus = document.getElementById("status");
                            if(pageStatus.textContent == "MAINTAINED"){
                                pageStatus.style.backgroundColor = "green";
                            } else {
                                pageStatus.style.backgroundColor = "darkred";
                            }
                        }
                        `}
                        </code>
                    </pre>
                </div>
                <h1>Takeaways</h1>
                <p>
                    I absolutely hated using Ando Portfolio as the template for this website. 
                    The number one reason was the stylesheet being poorly made. 
                    The Class names were all over the place and I had to rewrite some of them. 
                    If I could, I would've rewrote the entire website instead, however, that would be more of a waste of time.
                </p>
            </div>
        </>
    )
}