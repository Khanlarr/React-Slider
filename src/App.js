import React ,{Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Slider from "react-slick";

export default class CenterMode extends Component {
  state={
    sliders:[
      {
       id:"1",
       image:"img/person-1_rfzshl.jpg",
       name:"SUSAN ANDERSEN",
       title:"The Boss",
       body:"Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag."
      },
      {
        id:"2",
        image:"img/person-2_ipcjws.jpg",
        name:"MARIA FERGUSON",
        title:"Office Manager",
        body:"Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache."
       },
       {
        id:"3",
        image:"img/person-3_ipa0mj.jpg",
        name:"JOHN DOE",
        title:"Regular Guy",
        body:"Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami."
       },
       {
        id:"4",
        image:"img/person-1_aufeoq.jpg",
        name:"PETER SMITH",
        title:"Product Designer",
        body:"Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo."
       }
    ]
  }
  render() {
    var settings = {
      className: "center",
      dots:false,
      autoplay:true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div className='slider'>
         <h2  className='reviews'><span>/</span> Reviews</h2>
        <div className='homeslider'>
        <Slider {...settings}>
        {
          this.state.sliders.map((sld)=>{
            return(
              <div className='div'>  
              <img src={sld.image} alt="" />
              <h1>{sld.name}</h1>
              <h3>{sld.title}</h3>
              <p>{sld.body}</p>
              <i class="fa-solid fa-anchor"></i>
             </div>
            ) 
          })
        }
        </Slider>
     </div>
      </div>
    );
  }
}