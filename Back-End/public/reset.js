document.getElementById('form').addEventListener('submit', handleReset);


function handleReset(e){
    e.preventDefault();
  
const email=document.getElementById("email").value;

    axios.post('http://52.65.52.207:80/password/forgotpassword',  {email:email})
    .then(r=>{
window.location.href="http://52.65.52.207:80/login.html"
    })
    .catch(e=>{
        document.getElementById("mydiv").innerHTML=`<h5>${e.response.data.message}</h5>`;
    });

   
}
console.log("hii");