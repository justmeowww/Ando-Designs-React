import wireframe from "/wireframes/airbnb-clone/0.jpg"

export default function AirBnbClone(){
    return(
        <>
            <div className="documentation-card">
                <h1 className="first-header">Wireframe</h1>
                <p>
                    This wireframe was taken from <a className="inline-link" href="https://scrimba.com/">Scrimba</a> as part of their React course.
                </p>
                <figure>
                    <img className="wireframe" src={wireframe}/>
                    <figcaption>Wireframe</figcaption>
                </figure>
                <h1>Props and Data</h1>
                <p>
                    One of the coolest things about React was the introduction of Props. 
                    It allowed me to reuse the same component while using different sets of data. 
                    For instance, the data used for the Cards were:
                </p>
                <div className="code">
                    <pre>
                        <code>{`
                        import katieZaferes from '/katie-zaferes.png';
                        import mountainBike from '/mountain-bike.png';
                        import weddingPhoto from '/wedding-photography.png';

                        export default [
                            {
                                id: 1,
                                title: "Life Lessons with Katie Zaferes",
                                description: "I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
                                price: 136,
                                coverImg: katieZaferes,
                                stats: {
                                    rating: 5.0,
                                    reviewCount: 6
                                },
                                location: "Online",
                                openSpots: 0,
                            },
                            {
                                id: 2,
                                title: "Learn Wedding Photography",
                                description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
                                price: 125,
                                coverImg: weddingPhoto,
                                stats: {
                                    rating: 5.0,
                                    reviewCount: 30
                                },
                                location: "Online",
                                openSpots: 27,
                            },
                            {
                                id: 3,
                                title: "Group Mountain Biking",
                                description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
                                price: 50,
                                coverImg: mountainBike,
                                stats: {
                                    rating: 4.8,
                                    reviewCount: 2
                                },
                                location: "Norway",
                                openSpots: 3,
                            }
                        ]
                        `}
                        </code>
                    </pre>
                </div>
                <h1>Takeaways</h1>
                <p>
                    With the knowlege from this and my <a className="inline-link" href="../react-facts/summary.html">React Facts</a> project, I believe I am now able to recreate my Photography portfolio. 
                    The entire concept of <a className="inline-link" href="https://www.andophotography.com/" target="_blank">Ando Photography</a> was grids and repeating assets, so this will definitely become more optimized. 
                    However, I do not know how I will incorpate it with my previous method of Image Popups. 
                    I might actually rework Ando Designs first, for it uses simpler methods.
                </p>
            </div>
        </>
    )
}