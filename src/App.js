// ===================== DEPENDANCIES / COMPONENTS  ===================== //
import React from 'react';
import { Component } from 'react';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';

// ===================== STYLES ===================== //
import './App.scss';
import Home from './components/Home';

// ===================== ASSETS ===================== //
import pokestat from './assets/images/pokestat.png';
import pokestatthumbnail from './assets/images/pokestat_thumbnail.png';

import cinema3000 from './assets/images/Cinema3000.png';
import cinema3000Thumbnail from './assets/images/cinema3000_thumbnail.png';
import spectreThumbnail from './assets/images/spectre_thumbnail.png';

import spectre from './assets/images/spectre.png';
import blackhole from './assets/images/blackholescreenshot.png';
import blackholeFull from './assets/images/blackhole_full.png';
import hercules from './assets/images/hercules.png';
import herculesFull from './assets/images/hercules_full.png';
import nasa from './assets/images/nasa_redesign.png';
import nasaFull from './assets/images/nasa_full.png';

import micah from './assets/images/Micah.jpg';
import kuzco from './assets/images/Kuzco-background.jpg';
import beyonce from './assets/images/Witch-Beyonce-final.jpg';
import manu from './assets/images/Manu.jpg';
import natural from './assets/images/Natrual.jpg';
import xj9 from './assets/images/XJ9.jpg';
import Project from './components/Project';

// ===================== PROJECT ARRAY ===================== //
const projectsArray = [
  {
    id: 1,
    projectName: 'Pokéstat',
    projectType: 'Web Development',
    projectImg: pokestat,
    projectThumbnail: pokestatthumbnail,
    projectRole: 'Front-End Developer & UI / UX Designer',
    projectDesc:
      'Pokéstat is a Pokémon Pokedex web application that allows users to browse, discover, search, and catch Pokémon! Through animated and holographic imagery, this application gives an experience unlike any other like it! I had the pleasure of working on this project with 5 other incredibly talented developers! My main contributions to this project was the Home, Dashboard, Pokémon progress bar graphs, search and filtering through Pokémon, and UI / UX design.',
    githubUrl: 'https://github.com/pokepokepokedex/pokedex-frontend',
    projectUrl: 'https://pokestat.netlify.com/home',
    languages: 'React.js / CSS / Axios / Node.js / Postgres'
  },
  {
    id: 2,
    projectName: 'Cinema3000',
    projectType: 'Web Development',
    projectImg: cinema3000,
    projectThumbnail: cinema3000Thumbnail,
    projectRole: 'Front-End Developer & UI / UX Designer',
    projectDesc:
      "Cinema3000 is a TV and Movie web application, similar to Netflix or Hulu that allows users to discover and watch any movie or television series. Cinema 3000 utilizes 3 APIs, TMDB, YouTube, and VideoSpider. I worked on this project with 3 other developers. My main contribution was the idea, Movie component, TV component, Single Movie Component, Single TV Component, Genre Pages Components, Cast components, and more. On top of developing the app, I was also the UI / UX designer as well who's responsibility was to ensure some design consistencies was kept throughout the app and the CSS.",
    githubUrl: '',
    projectUrl: '',
    languages: 'React.js / CSS / Axios'
  },
  {
    id: 3,
    projectName: 'Spectre',
    projectType: 'Web Development',
    projectImg: spectre,
    projectThumbnail: spectreThumbnail,
    projectRole: 'Front-End Developer & UI / UX Designer',
    projectDesc:
      'Spectre is a TV web application that allows users to discover, search, and watch any of their favorite tv shows. Spectre utilizes three APIs, the TVMb, YouTube api, and VideoSpider api. This project was built over the course of three days, with small updates and tweaks afterwards.',
    githubUrl: 'https://github.com/javontaymcelroy/spectre',
    projectUrl: 'https://spectretv.netlify.com/',
    languages: 'React.js / CSS / Axios'
  },
  {
    id: 4,
    projectName: 'NASA - Redesign',
    projectType: 'Web Design',
    projectImg: nasaFull,
    projectThumbnail: nasa,
    projectRole: 'UI / UX Designer',
    projectDesc:
      "One of my earliest pieces while learning and practicing UI / UX design. I'm a big fan of NASA and I noticed that their app was a bit outdated, so I redesigned it. I wanted to keep the flow of their current design, but modernize the style. Round out some of the boxes and really attempt to bring that futuristic space aesthetic to this design. I went through all of NASA's pages and redesigned each one, this project took about a day to complete.",
    githubUrl: null,
    projectUrl:
      'https://www.behance.net/gallery/73414189/NASA-Mobile-App-Redesign',
    languages: 'Adobe Photoshop CC'
  },
  {
    id: 5,
    projectName: 'BlackHole',
    projectType: 'Web Development',
    projectImg: blackholeFull,
    projectThumbnail: blackhole,
    projectRole: 'Front-End Developer & UI / UX Designer',
    projectDesc:
      "BlackHole is a React-Web App that is the best stress reliever ever made! Ever wanted to rant to your boss? Let your friend have a piece of your mind? Or just had a bad day and need a place to rant? Blackhole is the place for that! Type out your feeling and send it off to the Blackhole, never to be seen again!...Or you can store it for up to 7 days if you'd like!",
    githubUrl: 'https://github.com/black-hole-lambda-build-week/back-end',
    projectUrl: 'https://black-hole-build-week.netlify.com/',
    languages: 'React.js / CSS / Axios'
  },
  {
    id: 6,
    projectName: 'Hercules',
    projectType: 'Web Development',
    projectImg: herculesFull,
    projectThumbnail: hercules,
    projectRole: 'Front-End Developer & UI / UX Designer',
    projectDesc: '',
    githubUrl: '',
    projectUrl: '',
    languages: 'React.js / SASS / Axios / Node.js / Express'
  }
];

// ===================== ART ARRAY ===================== //
const artArray = [
  {
    artImg: micah
  },
  {
    artImg: kuzco
  },
  {
    artImg: beyonce
  },
  {
    artImg: manu
  },
  {
    artImg: natural
  },
  {
    artImg: xj9
  }
];

// ===================== COMPONENT ===================== //
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsArray,
      artArray
    };
  }
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Route
          render={props => (
            <Home
              {...props}
              projectsArray={this.state.projectsArray}
              artArray={this.state.artArray}
            />
          )}
          exact
          path='/'
        />
        <Route
          render={props => (
            <Project
              {...props}
              projectsArray={this.state.projectsArray}
              artArray={this.state.artArray}
            />
          )}
          exact
          path='/:id'
        />
      </div>
    );
  }
}

export default App;
