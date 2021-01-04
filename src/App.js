// ===================== DEPENDANCIES / COMPONENTS  ===================== //
import React from "react";
import { Component } from "react";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";
import CaseStudyProject from "./components/caseStudy.js";
import Home from "./components/Home";

// ===================== SCSS STYLESHEET ===================== //
import "./App.scss";
import "./AppMobileResponsive.scss";

// ===================== IMAGES ===================== //
import pokestat from "./assets/images/pokestat.png";
import pokestatthumbnail from "./assets/images/pokestat_thumbnail.jpg";
import cinema3000 from "./assets/images/Cinema3000.png";
import cinema3000Thumbnail from "./assets/images/Cinema3000.jpg";
import spectreThumbnail from "./assets/images/spectre_thumbnail.jpg";
import spectre from "./assets/images/spectre.png";
import blackhole from "./assets/images/blackhole_full.jpg";
import blackholeFull from "./assets/images/blackhole_full.png";
import hercules from "./assets/images/hercules.jpg";
import herculesFull from "./assets/images/hercules_full.png";
import nasa from "./assets/images/nasa.png";
import nasaFull from "./assets/images/nasa_full.png";
import dandiThumb from "./assets/images/caseStudies/dandi_thumbnail.jpg";
import sectionTwoImg from "./assets/images/caseStudies/sectionTwoImage.png";
import mockupOneImg from "./assets/images/caseStudies/mockupOne.jpg";
import sectionFourImg from "./assets/images/caseStudies/sectionFourImage.png";
// import sectionFiveImg from "./assets/images/caseStudies/sectionFiveImage.png";
import sectionSixImg from "./assets/images/caseStudies/onboarding_flow.png";
import sectionSevenImg from "./assets/images/caseStudies/rewards_flow.png";
// import sectionEightImg from "./assets/images/caseStudies/sectionEightImage.png";

// ===================== VIDEOS ===================== //
import dandiScroll from "./video/dandi_scroll.mp4";
import sectionThreeVid from "./video/dandi_post_videos.mp4";
import sectionFiveVid from "./video/dandi_post_flow.mp4";
import sectionEightImg from "./video/beyonce.mp4";

// ===================== ART ILLUSTRATIONS ===================== //
import micah from "./assets/images/Micah.jpg";
import kuzco from "./assets/images/Kuzco-background.jpg";
import beyonce from "./assets/images/Witch-Beyonce-final.jpg";
import manu from "./assets/images/Manu.jpg";
import natural from "./assets/images/Natrual.jpg";
import xj9 from "./assets/images/XJ9.jpg";
import Yzma from "./assets/images/Yzma.jpg";
import kehlani from "./assets/images/kehlani.jpg";
import posiedon from "./assets/images/Posiedon.jpg";
import storm from "./assets/images/Storm.jpg";
import Project from "./components/Project";

// ===================== CASE STUDIES ARRAY ===================== //
const projectsArray = [
  {
    id: 1,
    projectName: "Dandi",
    tagline: "Do good. Feel Good.",
    date: "May 2019",
    projectType: "UX Engineer | Product Designer + Case Study",
    projectThumbnail: dandiThumb,
    caseHero: dandiThumb,
    projectRole: "UI / UX Engineer | Product Designer",
    sectionOne:
      "Do good, feel good. A mobile app that rewards users for doing good",
    sectionOneBody:
      "Humanitas A.I. brought me onto their team to solve a problem: how can we build a social media platform that encourages people to give time and / or money to causes and non-profit organizations in a genuine and authentic way. In recent years, we’ve seen how social media can play a big role in humanitarianism and activism, how people can tell their truths from their own perspectives. People want to give, whether it be time or money, so how do we create the space for that? How can we promote the right organizations that takes action and helps their community, and how can we get people interested and involved.",
    sectionOneVideo: dandiScroll,
    sectionTwo: "Visual Identity",
    sectionTwoBody:
      "Dandi should be easy and familiar to users while being exciting and fun. The brand look and feel is inspiring, refreshing, free and easy.",
    sectionTwoImage: sectionTwoImg,
    mockupOne: mockupOneImg,
    sectionThree:
      "Post videos and show the world how you are changing your community",
    sectionThreeBody:
      "Using video allows people and organizations to share with the world how they are helping change their community in a positive way. Video allows users to quickly give updates on what’s going on locally or around the world, spread and share ideas, and spread awareness on causes that matter.",
    sectionThreeImage: sectionThreeVid,
    sectionFour: "Follow organizations and track their impact",
    sectionFourBody:
      "Organizations have the ability to quickly and easily post updates to their profile for their followers and people around the world to see how they have been using their donations to help impact their community. It is to create a sense of trust and to show people that you are taking action and are actively changing the communities on a daily basis.",
    sectionFourImage: sectionFourImg,
    sectionFive: "A familiar flow to create cause videos",
    sectionFiveBody:
      "Posting videos should be quick and easy, with little thought required in that process. I made sure to keep this flow short and sweet to encourage users to post more frequently. Since Dandi is an app that focuses on various specific causes, users can quickly tap and select a cause tag so their videos are easily filtered and organized for other users to search and discover.",
    sectionFiveImage: sectionFiveVid,
    sectionSix: "Onboarding New Users",
    sectionSixSubHeader: "Building a fast and easy Onboarding Experience",
    sectionSixBody:
      "Users can quickly onboard the Dandi app by either logging in through Facebook or using Sign in with Apple for iPhone. They can also use the traditional Sign Up flow which includes a fast and easy three-step process. It is important to get users onboarded as quick as possible so they can begin browsing, creating videos, give, and earn points and rewards.",
    sectionSixImage: sectionSixImg,
    sectionSeven: "Making Users Feel Good About Doing Good",
    sectionSevenBody:
      "It was important to reassure users that their good deeds aren’t going unnoticed and it is something they should feel good about doing. We introduced the idea of points and leaderboards which users can earn and climb up as they post content and give time or money on the app. ",
    sectionSevenImage: sectionSevenImg,
    sectionEight: "Rewarding Users with Real World Opportunities",
    sectionEightBody:
      "One thing we wanted to bring to the Dandi app was a way to reward users as they accumulated points and leveled up. As users level up, they gain access to special and exclusive opportunities and rewards.",
    sectionEightImage: sectionEightImg,
    closingHead: "What Did I Learn?",
    closingSubHead:
      "Understanding what makes people give and how to build trust",
    closingBody:
      "Designing and building a social media platform has taught me how to think in multiple perspectives as well as convey messages through design that can resonate with various groups of people. Critical problem solving and understand how to help make non-profit organizations more modern and help them reach larger audiences was a big part of my job. I had to understand at the core, what makes a person want to give and how I could help make that process more trustworthy and efficient for both users and non-profits.",

    caseStudy: true,
  },
  // ===================== DEVELOPER PROJECTS ARRAY ===================== //
  {
    id: 2,
    projectName: "Pokéstat",
    projectType: "Web Development",
    projectImg: pokestat,
    projectThumbnail: pokestatthumbnail,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc:
      "Pokéstat is a Pokémon Pokedex web application that allows users to browse, discover, search, and catch Pokémon! Through animated and holographic imagery, this application gives an experience unlike any other like it! I had the pleasure of working on this project with 5 other incredibly talented developers! My main contributions to this project was the Home, Dashboard, Pokémon progress bar graphs, search and filtering through Pokémon, and UI / UX design.",
    githubUrl: "https://github.com/pokepokepokedex/pokedex-frontend",
    projectUrl: "https://pokestat.netlify.com/home",
    languages: "React.js / CSS / Axios / Node.js / Postgres",
    caseStudy: false,
  },
  {
    id: 3,
    projectName: "Cinema3000",
    projectType: "Web Development",
    projectImg: cinema3000,
    projectThumbnail: cinema3000Thumbnail,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc:
      "Cinema3000 is a TV and Movie web application, similar to Netflix or Hulu that allows users to discover and watch any movie or television series. Cinema 3000 utilizes 3 APIs, TMDB, YouTube, and VideoSpider. I worked on this project with 3 other developers. My main contribution was the idea, Movie component, TV component, Single Movie Component, Single TV Component, Genre Pages Components, Cast components, and more. On top of developing the app, I was also the UI / UX designer as well who's responsibility was to ensure some design consistencies was kept throughout the app and the CSS.",
    githubUrl: "https://github.com/project-tvmv/project-tvmv",
    projectUrl: "https://cinema3000.netlify.com/",
    languages: "React.js / CSS / Axios",
    caseStudy: false,
  },
  {
    id: 4,
    projectName: "Spectre",
    projectType: "Web Development",
    projectImg: spectre,
    projectThumbnail: spectreThumbnail,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc:
      "Spectre is a TV web application that allows users to discover, search, and watch any of their favorite tv shows. Spectre utilizes three APIs, the TVMb, YouTube api, and VideoSpider api. This project was built over the course of three days, with small updates and tweaks afterwards.",
    githubUrl: "https://github.com/javontaymcelroy/spectre",
    projectUrl: "https://spectretv.netlify.com/",
    languages: "React.js / CSS / Axios",
    caseStudy: false,
  },
  {
    id: 5,
    projectName: "NASA",
    projectType: "Mobile Design",
    projectImg: nasaFull,
    projectThumbnail: nasa,
    projectRole: "UI / UX Designer",
    projectDesc:
      "One of my earliest pieces while learning and practicing UI / UX design. I'm a big fan of NASA and I noticed that their app was a bit outdated, so I redesigned it. I wanted to keep the flow of their current design, but modernize the style. Round out some of the boxes and really attempt to bring that futuristic space aesthetic to this design. I went through all of NASA's pages and redesigned each one, this project took about a day to complete.",
    githubUrl: null,
    projectUrl:
      "https://www.behance.net/gallery/73414189/NASA-Mobile-App-Redesign",
    languages: "Adobe Photoshop CC",
    caseStudy: false,
  },
  {
    id: 6,
    projectName: "BlackHole",
    projectType: "Web Development",
    projectImg: blackholeFull,
    projectThumbnail: blackhole,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc:
      "BlackHole is a React-Web App that is the best stress reliever ever made! Ever wanted to rant to your boss? Let your friend have a piece of your mind? Or just had a bad day and need a place to rant? Blackhole is the place for that! Type out your feeling and send it off to the Blackhole, never to be seen again!...Or you can store it for up to 7 days if you'd like!",
    githubUrl: "https://github.com/black-hole-lambda-build-week/back-end",
    projectUrl: "https://black-hole-build-week.netlify.com/",
    languages: "React.js / CSS / Axios",
    caseStudy: false,
  },
  {
    id: 7,
    projectName: "Hercules",
    projectType: "Web Development",
    projectImg: herculesFull,
    projectThumbnail: hercules,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc:
      "Hercules is a workout tracking web app that allows users to track their reps and how much they lift during their workouts. Users can create their own workouts, tracking their progress and also see how well they are improving overtime! This was a project I built fully from the ground up. From the UI / UX Designer, to the Front-End, and the Back-End. This project took roughly 3 days to produce.",
    githubUrl: "https://github.com/javontaymcelroy/hercules-frontend",
    projectUrl: "https://hercules-app.netlify.com/",
    languages: "React.js / SASS / Axios / Node.js / Express",
    caseStudy: false,
  },
];

// ===================== ART ARRAY ===================== //
const artArray = [
  {
    id: 1,
    artImg: micah,
  },
  {
    id: 2,
    artImg: kuzco,
  },
  {
    id: 3,
    artImg: beyonce,
  },
  {
    id: 4,
    artImg: manu,
  },
  {
    id: 5,
    artImg: natural,
  },
  { id: 6, artImg: xj9 },
  // {
  //   id: 7,
  //   artImg: dannyPhantom
  // },
  {
    id: 8,
    artImg: Yzma,
  },
  {
    id: 9,
    artImg: kehlani,
  },
  {
    id: 10,
    artImg: posiedon,
  },
  {
    id: 11,
    artImg: storm,
  },
];

// ===================== COMPONENT ===================== //
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsArray,
      artArray,
    };
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          render={(props) => (
            <Home
              {...props}
              projectsArray={this.state.projectsArray}
              artArray={this.state.artArray}
            />
          )}
          exact
          path="/"
        />
        <Route
          render={(props) => (
            <CaseStudyProject
              {...props}
              projectsArray={this.state.projectsArray}
              artArray={this.state.artArray}
            />
          )}
          exact
          path="/:id/:projectName"
        />
        <Route
          render={(props) => (
            <Project
              {...props}
              projectsArray={this.state.projectsArray}
              artArray={this.state.artArray}
            />
          )}
          exact
          path="/:id"
        />
      </div>
    );
  }
}

export default App;
