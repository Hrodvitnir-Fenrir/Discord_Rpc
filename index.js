const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready",() => {
    rpc.setActivity({
        details: "Test",
        state: "test2",
        largeImageKey: "r6",
        //largeImageText: "",
        //smallImageKey: "",
        //smallImageText: "",
        buttons: [{ label: "test 3", url: "https://store.steampowered.com" }],
        //startTimestamp: "",
        
        

    });
    console.log("Rich presence is now active");
});

rpc.login({
    clientId: "501063122581454849"
});