import wireframe from "/wireframes/react-facts/0.jpg"

export default function ReactFacts(){
    return(
        <>
            <div className="documentation-card">
                <h1 className="first-header">Wireframe</h1>
                <p>
                    The wireframe was taken from <a className="inline-link" href="https://www.scrimba.com/" target="_blank">Scrimba</a> as part of their React course.
                </p>
                <figure>
                    <img className="wireframe" src={wireframe} alt="Wireframe"/>
                    <figcaption>Wireframe</figcaption>
                </figure>
                <h1>Next.js vs Vite</h1>
                <p>
                    Initially when I was going throught <a className="inline-link" href="https://www.scrimba.com/" target="_blank">Scrimba's</a> course, I did not use a library. 
                    There was a roundabout way of using React that was not recommended at all and I could not use it to create components. 
                    That was when I had to go through <a className="inline-link" href="https://react.dev/learn/start-a-new-react-project" target="_blank">React's documentation</a> to figure out how to get started. 
                    They recommended <a className="inline-link" href="https://nextjs.org/" target="_blank">Next.js</a>, a full-stack React framework. 
                    However, when I was going through learning it with their own documentation, I was quick to realize that Next.js is overly complicated for my needs. 
                    The file structure was a huge learning curve, and I had to learn its syntax alonside React. 
                    I was actually able to make this website through it, but I will not be uploading it to GitHub. 
                    I think after a while, I will end up learning <a className="inline-link" href="https://nextjs.org/" target="_blank">Next.js</a>.
                </p>
                <p>
                    What I did end up using is <a className="inline-link" href="https://vite.dev/" target="_blank">Vite</a>, a front-end web development framework. 
                    I don't know why React did not include this in their recommendations, but I found this to be a lot more simpler to use. 
                    The file structure is very similar to when I was just writing websites in pure HTML and CSS.
                </p>
                <h1>Takeaways</h1>
                <p>
                    Overall, learning React is pretty fun. 
                    It definitely feels more organized and less cluttered than writing in only HTML and CSS. 
                    Hopefully, I'll be able to learn more about React besides the fundamentals. 
                    Right now, it's just reorganizing how I write.
                </p>
                <p>
                    As for future plans, I do plan on rewriting Ando Photography and Portfolio using React, for it is more useful than plain HTML.
                </p>
            </div>
        </>
    )
}