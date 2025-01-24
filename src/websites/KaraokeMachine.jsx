import wireframe from "/wireframes/karaoke-machine/0.png"

export default function KaraokeMachine(){
    return(
        <>
            <div className="documentation-card">
                <h1 className="first-header">Wireframe</h1>
                <p>
                    I wanted to create a simple design with no distractions. If anything, the website was made to look like a simple game. The Home page being the Start Menu with a Host and Join Lobby button.
                </p>
                <figure>
                    <img className="wireframe" src={wireframe} alt="Wireframe"/>
                    <figcaption>Player Page</figcaption>
                </figure>
                <p>
                    As for the actual music player itself, I wanted it to have all the basics of a karaoke machine: a Video Player, Video Name, Who Queued, and a Queue List.
                </p>
                <p>
                    Also, with the Queue List, the background changes colours with whomever queued the song.
                </p>
                <h1>YouTube Data API v3 (Get Title)</h1>
                <p>
                    One of the first things I needed to learn for this was how to use YouTube's API. 
                    I needed a way for users to enter a YouTube link and to grab the video title.
                </p>
                <p>
                    There were 2 types of links, to my knowledge: <span className="inline-link">"https://youtu.be/"</span> and <span className="inline-link">"https://www.youtube.com/"</span>. 
                    I made a simple script that takes these types of links and grabs the videoID from them. 
                    The code itself is pretty messy but since it's only one line, it shouldn't affect the speed.
                </p>
                <h2>{`setVideoID()`}</h2>
                <div className="code">
                    <pre>
                        <code>{`
                        if(AAAA[trackNum].videoURL.includes("https://youtu.be/")){
                            setVideoID((AAAA[trackNum].videoURL.split("https://youtu.be/")[1].split("?")[0]));
                        } else if(AAAA[trackNum].videoURL.includes("https://www.youtube.com/")){
                            setVideoID((AAAA[trackNum].videoURL.split("https://www.youtube.com/")[1].split("watch?v=")[1]));
                        }
                        ...
                        `}
                        </code>
                    </pre>
                </div>
                <p>
                    After getting the video title, it gets placed into an array object queue to prevent wasting "tokens" from YouTube.
                </p>
                <h1>ReactPlayer</h1>
                <p>
                    This was actually just a simple library I needed. 
                    The <code className="inline-code">{`<video>`}</code> tag was limited in it's capabilities of what React can do. 
                    With ReactPlayer, I was able to use `onReady` and `onEnded` attributes that called on React functions states. 
                    This allowed the video queue to work and change.
                </p>
            </div>
        </>
    )
}