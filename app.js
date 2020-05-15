(function(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCxMGUDE0OH9A9D3vTCFD8JLEb2FmzBqT4",
        authDomain: "eventapp-2a640.firebaseapp.com",
        databaseURL: "https://eventapp-2a640.firebaseio.com",
        projectId: "eventapp-2a640",
        storageBucket: "eventapp-2a640.appspot.com",
        messagingSenderId: "1049251593270",
        appId: "1:1049251593270:web:4e68f955dc723257126c97",
        measurementId: "G-QYNRRX2F78"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();

    // console.log(firebase);
    // console.log( firebase.database() );

    const preObject = document.getElementById('object');

    const dbRef = firebase.database().ref();
    const dbRefObject = dbRef.child('screen');

    dbRefObject.on('value', function(snap){ 
        let bkg_color = snap.val();
        console.log( `Novo bkg: ${bkg_color}`);
        document.getElementsByTagName("body")[0].style.background = bkg_color;
    });
})()