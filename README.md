# Discord_Rpc
Discord rich presence in js with full customisation
## How to setup :
- First you need to create an app on discord website
    - For that go [here](https://discord.com/developers/applications)
    - Create a new app, name it, copy your "application id" and add your images in "Rich Presence" tab if you want

- Do a ```npm install``` in the code directory

- Uncommant a line if you want use it's features in index.js   
    Don't leave empty an uncommanted line

- In ```rpc.setActivity``` you have
  
| Value                   | Definition                                                                                                                                                                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| details                 | This is the first line under the name of the game                                                                                                                             |
| state                   | This is the second line under the details, you can't have this line without details !                                                                                         |
| largeImageKey           | This is the name of the large image in your app on discord website.                                                                                                           |
| largeImageText          | This is the text when your cursor are on the large image.                                                                                                                     |
| smallImageKey           | This is the name of the small image in your app on discord website, you can't have this images without the large image !                                                      |
| smallImageText          | This is the text when your cursor are on the small image.                                                                                                                     |
| bouttons                | This is an array to add 1 or 2 interactive buttons and attatch a link. <br> Ex: ```{label: "Steam", url: "https://store.steampowered.com"}```                                 |
| startTimestamp          | This is to setup the start time with timestamp. You can get timestamp [here](https://www.epochconverter.com/) <br> You can only have start or end. Not both at the same time. |
| endTimestamp            | This is to setup the countdown with timestamp. You can get timestamp [here](https://www.epochconverter.com/) <br> You can only have start or end. Not both at the same time.  |
| partySize <br> partyMax | This is two numbers on the right of the state, you must activate both and Size need to be < or = than Max. <br> You need to have a state active.                              |
