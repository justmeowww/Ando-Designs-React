import wireframe from "/wireframes/crawfish-pot/default.jpg"

export default function CrawfishPot(){
    return(
        <>
            <div className="documentation-card">
                <h1 className="first-header">Wireframe</h1>
                <p>
                    The wireframe was commissioned from the restaurant to somebody else. 
                    It was given to me to use to develop this website.
                </p>
                <figure>
                    <img className="wireframe" src={wireframe} alt="Wireframe"/>
                    <figcaption>Temporary Image</figcaption>
                </figure>
                <h1>Menu Items</h1>
                <p>
                    As this website is written entirely in React, I was able to make a datasheet of all of their menu items and make it easily adjustable for my client.
                </p>
                <p>
                    With the said datasheet, you can easily add any item and the website will automatically sort them for you.
                </p>
                <h1>Formspree</h1>
                <p>
                    This is actually the first time I made a form for a website. Initially, the form was made with PHP to have some functionality, however, I use Netlify to host my websites. The problem is, Netlify does not support PHP.
                </p>
                <p>
                    That is where Formspree came in. Formspree mostly handled the Contact Forms and Application Forms. However, I am using the free plan, which limited to only 50 total submissions a month with no file attachments.
                </p>
                <h1>Takeaways</h1>
                <p>
                    This is my first commissioned website that truly tested my skills as a web developer. 
                    There isn't much documentation I can write about because this was made with all the knowledge I've acquired. 
                    Since it is also a commission, I will not be providing the GitHub link.
                </p>
            </div>
        </>
    )
}