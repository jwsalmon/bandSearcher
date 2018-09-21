var config = {
    apiKey: "AIzaSyCwBkD1a9nm9CqM2w15tCv6Tf0HvJcmNaw",
    authDomain: "project1-14a42.firebaseapp.com",
    databaseURL: "https://project1-14a42.firebaseio.com",
    projectId: "project1-14a42",
    storageBucket: "",
    messagingSenderId: "950709385156"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  function saveBandToIten(user,artist,venueName,venueCity,priceMin,priceMax){
    
        user = {
        artist: artist,
        venueName: venueName,
        venueCity: venueCity,
        priceMax: priceMax,
        priceMin: priceMin

      };
    
      // Uploads artist data to user in database
      database.ref().push(user);
  }

  //add code to load iteniary from firebase for given user
  function loadIten(user){
      
  }