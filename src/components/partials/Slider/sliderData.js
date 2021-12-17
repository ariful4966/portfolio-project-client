
import fullStack from "../../../assets/images/slider/fullStack.png";
import mobile from "../../../assets/images/slider/mobile.png";
import server from "../../../assets/images/slider/server.png";
import web from "../../../assets/images/slider/webApp.png";

export const sliderData = [
    {
        title: "Web Application Development",
        subTitle: 'FontEnd Development',
        body: `Hi! React is awesome javascript library. React can react web application using multiple small components. For that website will be supper fast. There are many diffrent type of hooks like useState, useEffect, useParam etc. every hook can complete her own task. like state handling, data fatching etc. React can include multiple node packages. Differnce type of package handle diffrence task. For this reason the developed react website is faster.`,
        thumbnail: web
    },
    {
        title: 'Mobile Application Development',
        subTitle: 'Mobile App development using React Native',
        body: `React-Native is an awesome creation of the React team of
        developers. If you can create mobile applications, the
        applications will run on both the ISO and Android platforms.
        It can create any type of mobile application. React and
        react-native are combined in every app. Like handling the
        state using the useState hook or get data faching use
        useEffect hook`,
        thumbnail: mobile,

    }, 
    {
        title: "Backend Server Development",
        subTitle: "NodeJS ExpressJS with MongoDB Database",
        body: `NodeJS is the most powerful platform in the web world. The
        backend server of nodeJS is awesome. It can be a very fast
        service of data using only Javascript. They can be added to
        many packages of NPM, like mongoose, express, etc. The MongoDB
        database can be very useful with this platform. It's a better
        experience. Other databases can also be used with this runtime
        platform.`,
        thumbnail: server,

    },
    {
        title: "FullStack Website Development",
        subTitle: "FontEnd+Backend Using React+Node with MongoDB Databse",
        body: `UI Design in ReactJS. React is a library. Using this, I can create a single-page web application using the backend API. The Node server generates all control and validation checks based on the user role.I can include the MongoDB database with this. MongoDB is a non-relational database, but for practical purposes, I establish a relationship with another collection.`,
        thumbnail: fullStack

    }
]