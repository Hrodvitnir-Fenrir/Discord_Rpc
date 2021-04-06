const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready",() => {
    rpc.setActivity({
        details: "Giga",
        // state: "",
        // largeImageKey: "",
        // largeImageText: "",
        // smallImageKey: "",
        // smallImageText: "",
        // buttons: [{}],
        // startTimestamp: "",
        // endTimestamp: "",
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