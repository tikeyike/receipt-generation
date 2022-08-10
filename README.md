# Getting up and running with receipt generation

- Clone or download this repository
- Open up the 📁 'receipt-generation' folder in your terminal

Example:

```
C:\Users\{YOUR USERNAME}\Desktop\receipt-generation>
```

On MacOS:

```
{YOUR COMPUTER NAME}:receipt-generation {YOUR USERNAME}$
```

**Note: the folder path will be different depending on where you saved the 📁 `receipt-generation` folder**

- Log into the OneBlink CLI using the following command:

```
oneblink login
```

- Copy and paste the code as prompted
- Set the scope of your project by typing in the following command:

```
oneblink api scope {YOUR API URL}
```

**Note: you will find your API URL under the API Hosting section in the OneBlink Console, or you will need to create a new one by clicking the + button**

- Once your scope has been set, you can then type in the following command:

```
oneblink api deploy
```

- Then press `y`
- By default, this will deploy in a dev environment under your API environment

- To deploy this into a prod environment just append `--env prod` to the end of the previous command like so:

```
oneblink api deploy --env prod
```
