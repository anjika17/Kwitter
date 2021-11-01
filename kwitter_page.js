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
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message =  message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>" ;
message_with_tag = "<h4 class ='message_h4'>" + message + "</h4>" ;
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value = " + like + "onclick = 'updateLike(this.id)'>" ;
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like : " + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag ;
document.getElementById("output").innerHTML = row ;
//End code
      } });  }); }
getData();
function updateLike(firebase_message_id){ 
   console.log("clicked on like button - " + firebase_message_id)    ;
  button_id = firebase_message_id ; 
  like = document.getElementById(button_id).value;
  updated_likes = Number(like) + 1; 
console.log(updated_likes);
firebase.database().ref(room_name).child(firebase_message_id).update({
like : updated_likes 
});
}
function logout(){
localStorage.removeItem("user_name") ;
localStorage.removeItem("room_name");
window.location = "index.html" ;
}