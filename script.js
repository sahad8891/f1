const API = "https://YOUR_BACKEND_URL.onrender.com"

function signup(){

fetch(API+"/signup",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
username:document.getElementById("su_user").value,
password:document.getElementById("su_pass").value
})
})
.then(r=>r.json())
.then(d=>alert(d.message))

}


function login(){

fetch(API+"/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
username:document.getElementById("li_user").value,
password:document.getElementById("li_pass").value
})
})
.then(r=>r.json())
.then(d=>alert(d.status))

}



function predict(){

let form = new FormData()

form.append("video",document.getElementById("video").files[0])
form.append("q1",document.getElementById("q1").value)
form.append("q2",document.getElementById("q2").value)
form.append("q3",document.getElementById("q3").value)
form.append("q4",document.getElementById("q4").value)
form.append("q5",document.getElementById("q5").value)

fetch(API+"/predict",{
method:"POST",
body:form
})
.then(r=>r.json())
.then(d=>{

document.getElementById("result").innerHTML=
"Prediction: "+d.prediction+
"<br>Risk Level: "+d.risk_level+
"<br>Score: "+d.score

})

}
