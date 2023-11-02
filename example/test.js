(async () => {
    const { tunesiacard } = require("tunesiacard");
    const fs = require("fs");

    const card = new tunesiacard()
        .setName("Bad Habits")
        .setAuthor("By Ed Sheeran")
        .setColor("auto")
        .setTheme("dynamic")
        .setBrightness(50)
        .setThumbnail("https://cdn.discordapp.com/attachments/1168583777036017825/1168921841767817347/tunesia.png")
        .setProgress(10)
        .setStartTime("0:00")
        .setEndTime("3:00")

    const cardBuffer = await card.build();

    fs.writeFileSync(`tunesiacard.png`, cardBuffer);
    console.log("Done!");
})()