const aedes=require("aedes")();

const PORT=1883;


const server=require("net").createServer(aedes.handle);

aedes.on("publish",async function(packete,client){
    try{
       
        const topic=packete.topic;
        const payload=packete.payload.toString();
        if(topic=="server") {
         const res=await fetch("http://localhost:5000/update",{
             method:"POST",
             headers:{"Content-Type":"application/json"},
             body:payload,
         })
         
      }
    }catch(error){

    }
})



aedes.on('client',function(client){
    console.log(client.id);
})

server.listen(PORT,function(){
    console.log(`MQTT broker running @ port : ${PORT}`);
});
