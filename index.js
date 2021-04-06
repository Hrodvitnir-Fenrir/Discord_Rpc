const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready",() => {
    rpc.setActivity({
        //details: "hum",   // This is the first line under the name of the game
        //state: "",        // This is the second line under the details, you can't have this line without details !
        //largeImageKey: "",    // This is the name of the large image in your app on discord website
        //largeImageText: "",   // This is the text when your cursor are on the large image
        //smallImageKey: "",    //This is the name of the small image in your app on discord website, you can't have this images without the large image !
        //smallImageText: "",   // This is the text when your cursor are on the small image
        //buttons: [{ label: "B1", url: "https://store.steampowered.com" }, {label: "B2", url: "https://www.google.com"},],    // You can have 2 buttons 
        //startTimestamp: "",
        //endTimestamp: "",
        //partyId: "",
        //partySize: "",
        //partyMax: "",
        //matchSecret: "",
        //joinSecret: "",
        //spectateSecret: "",
    });
    console.log("Rich presence is now active");
});

rpc.login({
    clientId: "501063122581454849"
});