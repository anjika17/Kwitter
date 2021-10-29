const firebaseConfig = {
      apiKey: "AIzaSyDUPRZ1EXWHGU4dKhLKyzHUNMREW8I3aH0",
      authDomain: "kwitter2-639d2.firebaseapp.com",
      databaseURL: "https://kwitter2-639d2-default-rtdb.firebaseio.com",
      projectId: "kwitter2-639d2",
      storageBucket: "kwitter2-639d2.appspot.com",
      messagingSenderId: "503379011820",
      appId: "1:503379011820:web:c362050cc131d4bb479dc9",
      measurementId: "G-NP0S6QQR9N"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
   msg = document.getElementById("msg").value ;
   firebase.database().ref(room_name).push({
    name:user_name ,
    message:msg ,
    like:0     
   });
   document.getElementById("msg").value = ""; 
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
