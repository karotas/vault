if("serviceWorker"in navigator){
    navigator.serviceWorker.register("sworker.js").then((res)=>{
     
    }).catch((err)=>alert("error"))
}else{
 console.log("service worker not working")
}