import andoPhotography from '/banners/ando-photography.png';
import andoPhotography2 from '/previews/ando-photography.jpg';
import andoDesigns from '/banners/ando-designs.png';
import andoDesignsDeprec from '/banners/ando-designs-deprec.png';
import reactFacts from '/banners/react-facts.png';
import reactFacts2 from '/previews/react-facts.jpg';
import airbnbClone from '/banners/airbnb-clone.png';
import airbnbClone2 from '/previews/airbnb-clone.jpg';
import karaokeMachine from '/banners/karaoke-machine.png';
import karaokeMachine2 from '/previews/karaoke-machine.jpg';

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
        description: `A website dedicated to showcase the skills of photography to garner an audience of potential clients for future bookings.
        
        In essence, the site is coded purely in HTML and CSS with a layout inspired by most web applications. The main aspect of this website was to incorporate a Photo Gallery Grid in CSS for each gallery. It is also the first website created to make it easier to make other websites with the same design.
        `,
        frameworks: "JavaScript"
    },
    {
        id: 1,
        title: "Ando Designs (Deprecated)",
        dateCreated: "2024.10.27",
        year: 2024,
        status: "UNMAINTAINED",
        banner: andoDesignsDeprec,
        preview: "",
        link: "https://ando-designs.netlify.app/",
        git: "https://github.com/justmeowww/Ando-Designs",
        folderDir: "ando-designs-deprec",
        description: `It is this very website that is dedicated to showcase all my other websites I've designed and created. It is more of a central hub to make it easier for clients to find my works easily because of its organization.

        As of December 3rd, 2024, I have decided to rewrite the entire site from scratch to incorportate React. You can still visit the old site and view the repo.
        `,
        frameworks: "None"
    },
    {
        id: 2,
        title: "React Facts",
        dateCreated: "2024.11.19",
        year: 2024,
        status: "UNMAINTAINED",
        banner: reactFacts,
        preview: reactFacts2,
        link: "https://deft-lokum-9b4131.netlify.app/",
        git: "https://github.com/justmeowww/React-Facts",
        folderDir: "react-facts",
        description: `This website was created while learning the fundamentals of React, which was mainly separating HTML elements into components and learning the syntax. 
        
        The website itself is fairly simple, a static page that displays some facts about React. Since React can't be used without a framework anymore (I'm not quite sure actually), I had to use Vite alongside React.
        `,
        frameworks: "React, Vite"
    },
    {
        id: 3,
        title: "AirBnb Clone",
        dateCreated: "2024.11.29",
        year: 2024,
        status: "UNMAINTAINED",
        banner: airbnbClone,
        preview: airbnbClone2,
        link: "https://kaleidoscopic-crisp-a1aa49.netlify.app/",
        git: "https://github.com/justmeowww/Airbnb-Clone/",
        folderDir: "airbnb-clone",
        description: `This website was created while learning how React props are made. It is a simple AirBnb clone that uses data from another JavaScript file to create a grid.
        `,
        frameworks: "React, Vite"
    },
    {
        id: 4,
        title: "Ando Designs",
        dateCreated: "2024.12.03",
        year: 2024,
        status: "MAINTAINED",
        banner: andoDesigns,
        preview: "",
        link: "https://andoportfolio.com/",
        git: "https://github.com/justmeowww/Ando-Designs-React",
        folderDir: "ando-designs",
        description: `A complete overhaul of my Portfolio site. This was done to fully learn React and all of its functions. Although, the main things I used from React are components and one data sheet. 
        
        With this one data sheet, I was able to generate multiple pages to showcase my websites. Sadly, there are some hard-coded data only in the documentation pages. I had to hard-code them because each page is vastly different from each other.

        Another note, I did not realize Vite can only really make single-paged applications. I had to learn another library (React Router) to create multiple pages.
        `,
        frameworks: "React, React Router, Vite"
    },
    {
        id: 5,
        title: "Karaoke Machine",
        dateCreated: "TBA",
        year: 2024,
        status: "INDEV",
        banner: karaokeMachine,
        preview: karaokeMachine2,
        link: "https://example.com/",
        git: "https://example.com/",
        folderDir: "karaoke-machine",
        description: `This is a side project for me and my friends. I wanted a way to host karaoke nights without having to go out and pay. Karaoke at home is also fine and all, but we can only pass around one device to queue songs. With this, everyone should be able to queue up songs from their own device.
        
        This is a long-term project that is currently in development. I am unsure when I'll ever finish it. With that being said, there is no website link to visit.

        Another note, I cannot link to the GitHub page, because my files contain an authorization key to use Google's APIs.
        `,
        frameworks: "Axios, React, ReactPlayer, React Router, Vite, YouTube Data API v3"
    },
]