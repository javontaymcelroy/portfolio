import React from 'react';

class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var settingsArt = {
      className: 'center',
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };

    return (
      <>
        <div className='break'>
          <img src={angel} alt='projects-break' className='angel' />
          <div className='break-title-left'>
            <h1>DIGITAL ART & ILLUSTRATION</h1>
            <p>
              Apart from being a Web Developer and UI / UX Designer, I am also a
              Digital Artist and Illustrator! I have a good eye for detail and
              enjoy adding life to the projects and pieces that I work on and
              create! Here are couple of some of my favorite illustrations!
            </p>
          </div>
        </div>
        <div className='art-container'>
          {artArray.map(piece => (
            <div key={piece.id}>
              <img src={piece.artImg} className='art-image' alt='artwork' />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Art;
