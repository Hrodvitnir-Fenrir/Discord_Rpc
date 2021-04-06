const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

/**
Remove "//" before line if you whant use it
Details a
 
 
 
 */
rpc.on("ready",() => {
    rpc.setActivity({
        details: "hum",
        //state: "",
        //largeImageKey: "",
        //largeImageText: "",
        //smallImageKey: "",
        //smallImageText: "",
        //buttons: [{ label: "test 3", url: "https://store.steampowered.com" }],
        //startTimestamp: "",
        
        

    });
    console.log("Rich presence is now active");
});

rpc.login({
    clientId: "501063122581454849"
});