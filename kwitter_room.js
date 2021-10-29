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

 