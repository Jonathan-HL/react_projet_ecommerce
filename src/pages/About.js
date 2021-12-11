 import React from 'react';
 import aboutimg from '../img/aboutimg.jpg'
 
 const About = () => {
     return (
         <div className='about-app'>
             <div className='banner-black'>
                    <h1>ABOUT</h1>
             </div>
             <div className='about-container'>
                <img src={aboutimg} alt="aboutimg" />
                <div className='about-text'>
                    <h4>Our story</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptatum tenetur perspiciatis, provident ipsa numquam voluptatibus nihil. Id esse a libero dolor vero quas, minima hic veniam dignissimos earum, iste labore omnis placeat ipsa. Fugit sequi autem quod sint laboriosam. Asperiores in perferendis sed fugiat vitae veritatis, autem blanditiis, voluptas facere necessitatibus nemo, odio molestiae laudantium? Adipisci, sed. Quia ad sapiente blanditiis voluptatum alias delectus! Debitis sapiente illum quam vitae quidem fuga assumenda, saepe, nisi quaerat expedita exercitationem sed, eius omnis voluptatem doloribus ullam temporibus ad maiores aperiam earum! Temporibus dolore quibusdam sequi, corporis enim tempore inventore voluptate quisquam deleniti!</p>
                    <p className='about-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam totam, iusto officia eligendi dolorum asperiores voluptates rem delectus temporibus omnis maxime dicta facere, laboriosam officiis vero nihil fuga veniam nam? <br /> <br />
                    - Lorem job's</p>
                </div>
             </div>
         </div>
     );
 };
 
 export default About;