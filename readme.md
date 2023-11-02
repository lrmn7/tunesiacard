# __About__
**tunesiacard** is a futuristic music card library designed for Discord bots.

# __Installation__
```
npm install tunesiacard
```

# __Example__
This example code will generate a music card image and save it.
```js
(async () => {
    const { tunesiacard } = require("tunesiacard");
    const fs = require("fs");

    const card = new tunesiacard()
        .setName("Bad Habits")
        .setAuthor("By Ed Sheeran")
        .setColor("auto")
        .setTheme("classic")
        .setBrightness(50)
        .setThumbnail("https://cdn.discordapp.com/attachments/1168583777036017825/1168921841767817347/tunesia.png")
        .setProgress(10)
        .setStartTime("0:00")
        .setEndTime("3:00")

    const cardBuffer = await card.build();

    fs.writeFileSync(`tunesiacard.png`, cardBuffer);
    console.log("Done!");
})()
```

# __Output__
This is the **classic** output of tunesiacard.
![classic](https://cdn.discordapp.com/attachments/1168583777036017825/1168921841767817347/tunesia.png)

## Original code 
[A3PIRE](https://github.com/A3PIRE/musicard.git)