var firebaseConfig = {
    apiKey: "AIzaSyAgu58BwOKyv0oAf5PyUro8eY4wJ54efMU",
    authDomain: "kwitter-cdfbb.firebaseapp.com",
    databaseURL: "https://kwitter-cdfbb-default-rtdb.firebaseio.com",
    projectId: "kwitter-cdfbb",
    storageBucket: "kwitter-cdfbb.appspot.com",
    messagingSenderId: "715179351068",
    appId: "1:715179351068:web:45b141623dee01b796d3d9",
    measurementId: "G-WYP1TKEKTM"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username= localStorage.getItem("username");
  roomname= localStorage.getItem("room_name");
  

  function send(){

msg= document.getElementById("message").value;
firebase.database().ref(roomname).push({
    name:username,
    message:msg,
    like:0
    });
    
    
      }