import React from 'react';







function App() {
  const handelclick = () =>{
   alert("Mail ID : zaheemass009@gmail.com \n phone no: 9789893978")

  }
  return(
    
  <div>
  
  <nav className= "navbar">
  <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#portfolio">PortFolio</a></li>
      <li><a href="#Service">Service</a></li>
      <li><a href="#aboutme">About</a></li>
  </ul>
</nav>

<section id="home">
  <div className= "main">
      <h1 className="headings">I AM <br />Mohamed Fazil</h1>
      <h2 className="subtop">FullStack Developer| Youtuber | Python Programmer</h2>
      <button onClick={handelclick} className="btn">Hire me</button>
  </div>
</section>

<section id="portfolio">
  <h1 className="headings">
      <span className = "ziczacchange">O</span> R <span class = "ziczacchange">T</span> F 
         <span className = "ziczacchange">O</span> L <span class = "ziczacchange">I</span> O        
      
  </h1>
  <div id = "pic">
      <img src="./image/tindog.jpg" alt="" />
      <div id = "intro">
          <h2>Tin-Dog</h2>
          <p>Tin-Dog is a unique website designed specifically for dogs, 
              inspired by the popular dating app Tinder. It serves as a platform 
              for dog owners to connect their furry friends with potential playmates or companions. 
              Just like Tinder, Tin-Dog allows users to create profiles for their dogs, 
              browse through other dog profiles, and make connections. 
              This interactive and fun website aims to bring together dog owners in a lighthearted and social way, 
              fostering friendships and playdates for our beloved canine companions. So, unleash the fun and let your dog 
              find their perfect match on Tin-Dog! 
          </p>
          <button className="btn2"><a className="link" href="https://dogs-74320.web.app/" target="_blank" rel="noreferrer">Previw-Site</a></button>     
           </div>
  </div>

  <div id = "pic">
      <img src="../src/image/vk.jpg" alt=""/>
      <div id = "intro">
          <h2>Vibe Knock</h2>
          <p>Vibe-Knock is a personalized music player website designed to showcase your favorite music 
              collection. Although it is still a work in progress and not fully responsive, the site offers 
              a glimpse of the sample music selection. With an intuitive interface, users can explore and enjoy
               the featured tracks. Stay tuned as further improvements are made to enhance the website's 
               responsiveness and overall user experience. Get ready to immerse yourself in the world of 
               music with Vibe-Knock. 
          </p>
          <button className="btn2"><a className ="link" href="https://vibe-knock.web.app/" target="_blank" rel="noreferrer">Previw-Site</a></button>      
              
      </div>
  </div>

  <div id = "pic">
      <img src="../src/image/bt.jpg" alt=""/>
      <div id = "intro">
          <h2>Black Ticket</h2>
          <p>Black-Ticket is a responsive website that offers a convenient platform to book cinema tickets. 
              With a user-friendly interface, moviegoers can easily browse through available movies, showtimes,
               and theater locations. The website provides a seamless booking experience, allowing users to select 
               their preferred seats and complete transactions securely. Whether you're a film enthusiast or planning a 
               night out at the movies, Black-Ticket simplifies the process of reserving your seats, ensuring an enjoyable 
               and hassle-free cinema experience. 
          </p> 
          <button className="btn2"><a className ="link" href="https://black-ticket-7f652.web.app/" target="_blank" rel="noreferrer">Previw-Site</a></button>      
      </div>
  </div>
</section>

<section id = "Service">
  <h1 className="headings">S E R V I C E S</h1>
  <div className="row">
      <div className="box">
          <h1 className="headings">
              Web Designs
          </h1>
          <p>Web design is a fascinating field that combines creativity and technical skills to 
              craft visually appealing and functional websites. It involves the careful selection of color schemes, 
              typography, layouts, and user interface elements to create an engaging online experience. With a keen eye 
              for detail and a passion for aesthetics, Zaheer brings a unique perspective to web design. His proficiency in 
              HTML, CSS, and JavaScript allows him to transform concepts into reality, ensuring seamless navigation and 
              optimal user interaction.</p>
          <button onClick={handelclick} className="btns">Hire me</button>    
      </div>
  
      <div className="box">
          <h1 className="headings">
              UX/UI Designer
          </h1>
          <p>UX/UI design is an integral part of creating meaningful and enjoyable digital experiences for users. 
              Zaheer is a talented UX/UI designer who understands the importance of blending usability with aesthetics.
               With a user-centric approach, Zaheer delves deep into understanding the target audience, their needs, 
               and goals, to create intuitive and engaging interfaces. His expertise lies in wireframing, prototyping, 
               and conducting user research to ensure the final design is optimized for usability and accessibility. 
               </p>
          <button onClick={handelclick} className="btns2">Hire me</button>      
      </div>
  
      <div className="box">
          <h1 className="headings">
              Python Developer
          </h1>
          <p>Zaheer is a highly skilled Python developer who combines his passion for coding with a flair for design.
               With an extensive knowledge of Python programming language and its libraries, Zaheer has the ability to 
               develop efficient and robust applications. His creative mindset and attention to detail allow him to design 
               clean and intuitive user interfaces that enhance the overall user experience. Zaheer's expertise extends 
               beyond writing code - he understands the importance of user-centered design principles and leverages 
               his skills to create visually appealing and user-friendly applications</p>
               <button onClick={handelclick} className="btns3">Hire me</button> 
      </div>
  </div>
</section>

<section id = "aboutme">
  <h1 className="headings">
      ABOUT ME
  </h1>
  <div id = "pic">
      
      <div id = "intro">
          
          <p className="move">Hello, I'm Zaheer, a passionate front-end developer with a diverse skill set in web development. 
              I have a solid foundation in HTML, CSS (including the Bootstrap framework), and JavaScript, 
              which allows me to bring captivating and interactive designs to life. Additionally, 
              I am proficient in Python programming, which adds versatility to my repertoire. 
              I take great pride in my attention to detail, and I approach each project with creativity and 
              a problem-solving mindset. I believe in creating user-friendly experiences that engage and 
              delight visitors, all while adhering to best practices and ensuring cross-browser compatibility. 
              I am excited about the prospect of working on challenging projects that allow me to push the 
              boundaries of my capabilities and deliver outstanding results. 
             <h4 className= "move">Thank you for taking the time to review my portfolio. <br />I look forward to connecting with you soon! </h4>
          </p>
           
      </div>
  </div>

</section>

<footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul className="footer-links">
          <li><a href="#portfolio">Web-Designer</a></li>
          <li><a href="#Service">UX/UI Design</a></li>
          <li><a href="#Service">Python Developer</a></li>
          
        </ul>
      </div>

      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li><a href="#aboutme">About Us</a></li>
          <li><a href="#Service">Service</a></li>
          <li><a href="#portfolio">PortFolio</a></li>
          <li><a href="#home">Home</a></li>
        </ul>
      </div>
    </div>
    
  </div>
  <div className="container">
    <div className="row">

      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook" href="https://www.youtube.com/@twingalatta7499" target="_blank" rel="noreferrer"><i class="fa fa-youtube"></i></a></li>
          <li><a className="twitter" href="https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2FZahemass&sa=D&sntz=1&usg=AOvVaw2nV4FDsh4McXJdHJvplT6W" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a></li>
          <li><a className="dribbble" href="https://www.google.com/url?q=https%3A%2F%2Finstagram.com%2Ftwingalatta%3Figshid%3DMzRlODBiNWFlZA%3D%3D&sa=D&sntz=1&usg=AOvVaw0L9W7NRnMv7d7sLL7e_H_t" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a></li>
          <li><a className="linkedin" href="https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmohammed-zaheer-m-425793215%2F&sa=D&sntz=1&usg=AOvVaw3PeTpxG7mgFgPr0hVKqIaL" target="_blank" rel="noreferrer"><i class="fa fa-linkedin"></i></a></li>   
        </ul>
      </div>
    </div>
  </div>
</footer>
</div>

);
}

export default App;
