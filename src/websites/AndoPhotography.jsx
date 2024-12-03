import homeOld from '/wireframes/ando-photography/0.jpg';
import photoAlbumOld1 from '/wireframes/ando-photography/1.jpg';
import photoAlbumOld2 from '/wireframes/ando-photography/2.jpg';
import home from '/wireframes/ando-photography/3.jpg';
import otherWorks from '/wireframes/ando-photography/4.jpg';
import photoAlbum from '/wireframes/ando-photography/5.jpg';
import contact from '/wireframes/ando-photography/6.jpg';

export default function AndoPhotography(){
    return(
        <>
            <div className="documentation-card">
                <h1 className='first-header'>Wireframe</h1>
                <p>
                    I wouldn't really call this a true wireframe, because I only used Figma to create the sketches of the website. 
                    There are no functions to prototype the wireframe because I went straight to coding.
                </p>
                <div className='slideshow'>
                    <figure>
                        <img src={home} alt='Home'/>
                        <figcaption>Home</figcaption>
                    </figure>
                    <figure>
                        <img src={otherWorks} alt='Other Works'/>
                        <figcaption>Other Works</figcaption>
                    </figure>
                    <figure>
                        <img src={photoAlbum} alt='Photo Album'/>
                        <figcaption>Photo Album</figcaption>
                    </figure>
                    <figure>
                        <img src={contact} alt='Contact'/>
                        <figcaption>Contact</figcaption>
                    </figure>
                </div>
                <p>
                    However, there was actually another draft that looked completely different from the final product. 
                    The only reason why I decided to switch to the final was because the first draft had no "containers". 
                    I didn't know where I wanted to place anything because the main subject became the photos. 
                    For instance, I needed to somehow add little details like the Album Name and Clients. 
                    I also just hated it because it looked so boring.
                </p>
                <div className='slideshow'>
                    <figure>
                        <img src={homeOld} alt='Old Home'/>
                        <figcaption>Old Home</figcaption>
                    </figure>
                    <figure>
                        <img src={photoAlbumOld1} alt='Old Photo Album Draft 1'/>
                        <figcaption>Old Photo Album Draft 1</figcaption>
                    </figure>
                    <figure>
                        <img src={photoAlbumOld2} alt='Old Photo Album Draft 2'/>
                        <figcaption>Old Photo Album Draft 2</figcaption>
                    </figure>
                </div>
                <p>
                    It is also interesting to note that <span style={{fontStyle:"italic"}}>Photo Album Draft 2</span> is where the final version takes inspiration from.
                </p>
                <h1>Image Popups</h1>
                <p>
                    Image Popups were interesting to make. 
                    Especially in this case where the image popup was actually a gallery. 
                    On mobile only, you can see the gallery actually snaps in place for swiping.
                </p>
                <p>
                    Anyways, I really didn't like how I made it. 
                    The entire gallery/popup is already loaded into the HTML with <code className='inline-code'>visibility: hidden;</code>. 
                    To open the popup, each image is made with an anchor tag with <code className='inline-code'>onclick=openImage()</code> to call a function that changes the property to <code className='inline-code'>visibility = "visible";</code>. 
                    Inside the popup also has the same function but to set it back to hidden.
                </p>
                <h2>JavaScript</h2>
                <div className="code">
                    <pre>
                        <code>{`
                        function openImage() {
                            let popup = document.getElementById("popup");
                            popup.style.visibility = "visible";
                            return false;
                        }
                        
                        function closeImage() {
                            let popup = document.getElementById("popup");
                        `}
                        </code>
                    </pre>
                </div>
                <h1>Gallery Creation</h1>
                <p>
                    When I first created the website, all the galleries were painstakingly copied and pasted for photos. 
                    It was really tiring and tedious, especially when creating a photography porfolio with multiple galleries. 
                </p>
                <p>
                    My solution was to create a JavaScript function that inputs the image folder directory and number of images to create a grid. 
                    The code itself uses a series of string concatenations to create the image and innerHTML to add to the page. 
                    I have to admit, this method is most likely to be unoptimized on website with high traffic. 
                    Everytime a page loads, the code runs again to create the grid instead of loading a cached page with the grid already made.
                </p>
                <p>
                    You can view the code I wrote below. 
                    On another note, there was probably a better way to write this code that isn't so cluttered.
                </p>
                <h2>JavaScript</h2>
                <div className='code'>
                    <pre>
                        <code>{`
                        function createGallery(numOfPhotos, folderDir){
                            let photos = document.getElementById("photos");
                            for(let i = 0; i < numOfPhotos; i++) {
                                let imgTag = '<a href="#';
                                let imgTag2 = imgTag.concat(i, '" onclick="openImage();"><img src="');
                                let path = imgTag2.concat(folderDir, i, '.jpg"', "/></a>");
                                photos.innerHTML += path;
                            }
                        
                            let fullPhotos = document.getElementById("fullPhotos");
                            for(let i = 0; i < numOfPhotos; i++) {
                                let imgTag = '<img src="';
                                let path = imgTag.concat(folderDir, i, '.jpg" id="', i, '"/>');
                                fullPhotos.innerHTML += path;
                            }
                            return false;
                        }
                        `}
                        </code>
                    </pre>
                </div>
                <h2>HTML</h2>
                <div className='code'>
                    <pre>
                        <code>{`
                        ...
                        <section>
                            <div class="gallery" id="photos"></div>
                        </section>
                        ...
                        <div class="popup" id="popup" onclick="closeImage()">
                            <div class="slider" id="fullPhotos"></div>
                        </div>
                        <script>
                            createGallery(8, '20240524_adoShow/');
                        </script>
                        `}
                        </code>
                    </pre>
                </div>
                <h1>Takeaways</h1>
                <p>
                    Honestly, I wanted to use this website as a template website to create my website portfolio website. 
                    However, after going ahead with Ando Designs, I had to rewrite a lot of things in the CSS file. 
                    The one problem I have and couldn't fix was the navigation buttons. 
                    It was the first thing I learned and it uses <code className="inline-code">&lt;button&gt;</code> instead of an anchor tag. 
                    Every other button, besides the navigation, uses anchor tags and attempting to change the button breaks the website. 
                    It would've been better and easier to write from scratch.
                </p>
                <p>
                    I would like to say, as my first website, this taught me a lot. 
                    I've learned how to create buttons with hover effects, image grids, and image gallery popups that will surely help in future projects. 
                </p>
            </div>
        </>
    )
}