var firebaseConfig = {
      apiKey: "AIzaSyBFQHkQ4aycc5L7XJ7gRY0uhLt50cXPKD8",
      authDomain: "kwitter-ef3d8.firebaseapp.com",
      databaseURL: "https://kwitter-ef3d8-default-rtdb.firebaseio.com",
      projectId: "kwitter-ef3d8",
      storageBucket: "kwitter-ef3d8.appspot.com",
      messagingSenderId: "235717380298",
      appId: "1:235717380298:web:edfaf84306385535af4c33",
      measurementId: "G-NT8DCF0QJX"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name") ;
document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";
function addRoom(){
room_name = document.getElementById("room_name").value ; 
 firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"     
 })  ;
 localStorage.setItem("room_name" , room_name) ;  
 window.location = "kwitter_page.html" ;
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+ Room_names);
row = "<div class='room_name' id=" +  Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>" ;
      //End code
      });
});
}
 getData();
 function redirectToRoomName(name){
console.log(name) ;
localStorage.setItem("room_name" , name) ;
window.location = "kwitter_page.html" ;
 }

 function logout(){
  localStorage.removeItem("user_name")  ;
  localStorage.removeItem("room_name")   ;
  window.location = "index.html" ;
 }

 