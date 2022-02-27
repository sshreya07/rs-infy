import React from 'react'
import Navbar from './Navbar'
import pic1 from  '../images/elise-wilcox-KIeRPMBRgtk-unsplash.jpg'
import pic2 from '../images/elvis-bekmanis-RXFwMWhcOi0-unsplash.jpg'
import pic3 from '../images/hamid-tajik-988Gu1p_MZY-unsplash.jpg'
import pic4 from '../images/jonathan-borba-mvasDnG41is-unsplash.jpg'
import pic5 from '../images/kirill-balobanov-2rIs8OH5ng0-unsplash.jpg'
import github from '../images/github-logo.jpg'
import linkedin from '../images/linkedin-logo.png'
import insta from '../images/insta.jpg'

const text1 = document.getElementsByClassName('text1');
const text2 = document.getElementsByClassName('text2');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text1.style.marginLeft = value * 2 + 'px';
    text2.style.marginRight = value * 2 + 'px';
})

const Home = () => {
//     var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 

    return (
        <div className='home'>
            <Navbar/>

            <div className='parallax1'>
                <h1 className='HeroSection' style={{backgroundColor: 'transparent'}}><span className='text1' style={{backgroundColor: 'transparent'}}>DIGITAL DESIGNER</span> <br/>&ensp;&ensp;&ensp; <span className='text2' style={{backgroundColor: 'transparent'}}>AND <span style={{backgroundColor: 'transparent', color:'#ffc107'}}>PHOTOGRAPHER</span></span></h1>
            </div>

            <div id="profile" className='mx-auto'></div>
            <div className='aboutSection container'>
                
                <div className='col-sm-10 mx-auto text-center'>
                    <h3 >Hey there it's me! Ishaani</h3> <br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/><button className='btn btn-warning' style={{marginTop:'3rem'}}>About Me</button>
                </div>
            </div>
            

            <div className='photobundle'>
                <div className='col-sm-2'>
                    <img src={pic1} width='250px' alt='altText'/>
                </div>
                <div className='col-sm-2' style={{marginTop:'4rem'}}><img src={pic2} width='250px' alt='alternateText' /></div>
                <div className='col-sm-2' style={{marginTop:'7rem'}}><img src={pic3} alt='alternateText' width='250px' /></div>
                <div className='col-sm-2' style={{marginTop:'4rem'}}><img src={pic5} alt='alternateText' width='250px' /></div>
                <div className='col-sm-2'><img src={pic4} width='250px' alt='alternateText' /></div>
            </div>

            <div className='parallax2'>
            <h1 className='HeroSection ' style={{backgroundColor: 'transparent'}}>INSTAGRAM FEEDS</h1> </div>

            <div className='photobundle container' id="instaFeed">
                <div className='col-sm-6'><img className='img' src={pic1} alt='alternateText' width='580px' height='700px'  /></div>
                <div className='row col-sm-6'>
                    <div className='col-sm-6'><img className='img' src={pic3} width='280px' height='350px' alt='alternateText'  /></div>
                    <div className='col-sm-6'><img className='img' src={pic2} width='280px' height='350px' alt='alternateText'  /></div>
                    <div className='col-sm-6'><img className='img' src={pic5} width='280px' height='350px' alt='alternateText' style={{paddingTop: '10px'}} /></div>
                    <div className='col-sm-6'><img className='img' src={pic4} width='280px' height='350px' alt='alternateText' style={{paddingTop: '10px'}}/></div>
                </div>
            </div>

            <div className='parallax3'> 
            <h1 id="testimonials" className='HeroSection ' style={{backgroundColor: 'transparent'}}>TESTIMONIALS</h1></div>

                {/* <div class="slideshow-container">

                    <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src={pic1} style={{width:"100%"}} alt='alternateText'/>
                    <div class="text">Caption Text</div>
                    </div>

                    <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src={pic1} style={{width:"100%"}} alt='alternateText'/>
                    <div class="text">Caption Two</div>
                    </div>

                    <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src={pic1} style={{width:"100%"}} alt='alternateText'/>
                    <div class="text">Caption Three</div>
                    </div>

                    <a href={plusSlides(-1)} class="prev" onclick={plusSlides(-1)}>&#10094;</a>
                    <a href={plusSlides(1)} class="next" onclick={plusSlides(1)}>&#10095;</a>
                    </div>
                    <br/>

                    <div style={{textAlign:"center"}}>
                    <span class="dot" onclick={currentSlide(1)}></span>
                    <span class="dot" onclick={currentSlide(2)}></span>
                    <span class="dot" onclick={currentSlide(3)}></span>
                    </div> */}

            <div className='container col-sm-8 '>
               <div className='row' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
               <div className='col-sm-4 text-center'><img src={pic3} width='380px' height='400px' alt='alternateText' style={{marginTop:'3rem'}} /></div>
                <div className='col-sm-4' style={{marginTop:'3rem',backgroundColor:'white',color:'black',height:'400px'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
               </div>
            </div>

            <div className='container col-sm-8 '>
               <div className='text-center' style={{marginTop:'4rem'}}><h4>Follow Me</h4></div>
               <div className=' col-sm-3 mx-auto 'style={{display: "flex",justifyContent: "space-between"}}>
                          <a href="https://github.com/sshreya07" class="nav-link">
                            <button className="btn btn-sm" type="submit" ><img alt='alternateText' src={github} width="30px" height="30px" style={{borderRadius:" 50%"}} /></button>
                          </a>
                          <a href="https://www.linkedin.com/in/sshreya07/" class="nav-link">
                            <button className="btn btn-sm" type="submit"><img alt='alternateText' src={linkedin} width="30px" height="30px" style={{borderRadius:" 50%"}}/></button>
                          </a>
                          <a href="https://www.instagram.com/sshreya07/" class="nav-link">
                            <button className="btn btn-sm" type="submit"><img alt='alternateText' src={insta} width="30px" height="30px" style={{borderRadius:" 50%"}}/></button>
                          </a>
                        </div>
            </div>

        </div>
    )
}


export default Home
