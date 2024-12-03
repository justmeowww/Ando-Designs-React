export default function AndoDesigns(){
    return(
        <>
            <div className="documentation-card">
                <h1 className="first-header">Wireframes</h1>
                <p>
                    As this is just a complete overhaul, I did not need to use a wireframe to make it. 
                    I simply referenced the website and recreated it.
                </p>
                <h1>Websites Database File</h1>
                <p>
                    React is amazing. 
                    I absolutely love the fact that I can create a website with just one database. 
                    Although, the only problem is I'm not actually using a database software just yet. 
                    I am just using a file with JavaScript objects.
                </p>
                <h2>Object Layout (websiteInfo.jsx)</h2>
                <div className="code">
                    <pre>
                        <code>{`
                        export default [
                            {
                                id: 0,
                                title: "Ando Photography",
                                dateCreated: "2024.09.10",
                                year: 2024,
                                status: "MAINTAINED",
                                banner: andoPhotography,
                                preview: andoPhotography2,
                                link: "https://andophotography.com/",
                                git: "https://github.com/justmeowww/Ando-Photography",
                                folderDir: "ando-photography",
                                description: \`A website dedicated to showcase the skills of photography to garner an audience of potential clients for future bookings.
                                
                                In essence, the site is coded purely in HTML and CSS with a layout inspired by most web applications. The main aspect of this website was to incorporate a Photo Gallery Grid in CSS for each gallery. It is also the first website created to make it easier to make other websites with the same design.
                                \`,
                                frameworks: "JavaScript"
                            },
                        ...
                        `}
                        </code>
                    </pre>
                </div>
                <h1>Vite and React Router</h1>
                <p>
                    One of the first things I realized when I was creating components for this site was the unavailability of going to different pages. 
                    Vite appears to only be able to create single-paged apps and this site could not work around that. 
                    Apparently Vite lacks its own Router. 
                    I'm not quite sure what it is yet, but it's something Next.js has included. 
                    After some reasearch, I ended up finding a library called React Router that works perfectly.
                </p>
                <p>
                    Using React Router, it allowed me to create links that loaded other React Components without loading new html files. 
                    This entire website runs only on one: <code className="inline-code">index.html</code>
                </p>
                <h2>Route Structure</h2>
                <div className="code">
                    <pre>
                        <code>{`
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<SummaryPage websiteID={websiteData[websiteData.length-1].id} selected="LATEST"/>}/>
                                <Route path="/index" element={<SummaryPage websiteID={websiteData[websiteData.length-1].id} selected="LATEST"/>}/>
                                <Route path="/websites" element={<WebsitesPage/>}/>
                                <Route path="/summary" element={<Navigate to={\`/websites/\${websiteData[websiteData.length-1].folderDir}/summary\`}/>}/>
                                <Route path="/documentation" element={<Navigate to={\`/websites/\${websiteData[websiteData.length-1].folderDir}/documentation\`}/>}/>
                                {websiteSummary}
                                {websiteDocumentation}
                            </Routes>
                        </BrowserRouter>
                        `}
                        </code>
                    </pre>
                </div>
                <p>
                    If you also noticed, I was able to automatically generate a list of Routes straight from my database. 
                    This allowed me to not have to manually type it out for every new page.
                </p>
                <h2>JavaScript XML</h2>
                <div className="code">
                    <pre>
                        <code>{`
                        const websiteSummary = websiteData.map( x => {
                            return(
                                <Route key={x.id} path={\`/websites/\${x.folderDir}/summary\`} element={<SummaryPage websiteID={x.id} selected="WEBSITES"/>}/>
                            )
                        })

                        const websiteDocumentation = websiteData.map( x => {
                            return(
                                <Route key={x.id} path={\`/websites/\${x.folderDir}/documentation\`} element={<DocumentationPage websiteID={x.id} selected="WEBSITES"/>}/>
                            )
                        })
                        `}
                        </code>
                    </pre>
                </div>
                <h1>Hard-Coded Documentation</h1>
                <p>
                    Although I was able to create this entire website with one database, I was not able to do the same for the documentation pages. 
                    Each websites' documentation is just vastly different and is basically a blog. 
                    To still be able to use React, I basically created components and made each documentation as if it were plain HTML.
                </p>
                <p>
                    One of the only problems I encounted doing this was making it compatible with the autogenerated pages. 
                    The solution I came up with was to use a <code className="inline-code">switch</code> statement that used the website's ID to return the right component. 
                    This also makes it so that it will have a default page if I did not finish writing its documentation. 
                </p>
                <div className="code">
                    <pre>
                        <code>{`
                        function docPage(websiteID){
                            switch(websiteID) {
                                case 0:
                                    return(<AndoPhotography/>)
                                case 1:
                                    return(<AndoDesignsDeprec/>)
                                ...
                                default:
                                    return(<NoDoc/>)
                            }
                        }
                        `}
                        </code>
                    </pre>
                </div>
                <h1>Organization and Folder Structure</h1>
                <p>
                    I'm not sure if this is right, but every image I used, I put into the public folder. 
                    Other than that, I tried to be as organized as possible to make it easier to find things.
                </p>
                <div className="code">
                    <pre>
                        <code>{`
                        .
                        ├── public/
                        │   ├── banners/
                        │   │   └── ...
                        │   ├── previews/
                        │   │   └── ...
                        │   └── wireframes/
                        │       └── ...
                        ├── src/
                        │   ├── assets
                        │   ├── components
                        │   └── websites
                        └── index.html
                        `}
                        </code>
                    </pre>
                </div>
                <p>
                    I used <a className="inline-link" href="https://tree.nathanfriend.com/">tree.nathanfriend.com</a> to make this tree.
                </p>
                <h1>Takeaways</h1>
                <p>
                    This project took about 4 days to make. 
                    Well, not really because I only worked on it for 5 hours a day. 
                    Anyways, I am actually proud of myself for being able to make this entire website and only finishing 2 out of 4 projects from <a className="inline-link" href="https://www.scrimba.com/" target="_blank">Scrimba</a>. 
                    I would say that I still have a lot to learn and that this website is the real beginning to my Front-end Development career. 
                </p>
                <p>
                    As of right now, I will finish the course to grasp a better knowledge of React. 
                    I will also see if I can create fun applications with React on the side.
                </p>
            </div>
        </>
    )
}