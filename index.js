const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });

async function setActivity() {
    if (!client) {
        return;
    }

    client.setActivity({
        state: "Proje Geliştiriyor",
        details: "github.com/fastuptime",
        startTimestamp: new Date(),
        largeImageKey: "fastlogo",
        largeImageText: "Team FastUptime",
        smallImageKey: "nodejs",
        smallImageText: "FastUptime",
        instance: false,
        buttons: [
            { label: "FastUptime", url: "https://fastuptime.com/" },
            { label: ":heart_hands: Github", url: "https://github.com/fastuptime" }
        ]
    });
}

client.on('ready', async () => {
    await setActivity();
});

client.login({ clientId: "810817447455096862" }).catch(console.error);
