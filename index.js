const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready",() => {
    rpc.setActivity({
        // details: "",
        // state: "",
        // largeImageKey: "",
        // largeImageText: "",
        // smallImageKey: "",
        // smallImageText: "",
        //buttons: [],
        // startTimestamp: 0,
        // endTimestamp: 0,
        // partyId: "",
        // partySize: "",
        // partyMax: "",
        // matchSecret: "",
        // joinSecret: "",
        // spectateSecret: "",
    });
    console.log("Rich presence is now active");
});

rpc.login({
    clientId: "501063122581454849"
});