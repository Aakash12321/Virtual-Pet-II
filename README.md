# Virtual Pet II

Look after a virtual dog: feed it, restock its milk, and see when it was last fed. Food stock and feeding time are saved online.

## How to play
- Click **Feed your dog** to give it a bottle of milk.
- Click **Add food to storage** to restock.
- The last feeding time is shown at the top.

## Run it locally
Browsers block games that load images and scripts straight from disk, so serve the folder with any small web server:

```bash
git clone https://github.com/Aakash12321/Virtual-Pet-II.git
cd Virtual-Pet-II
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser. (The VS Code **Live Server** extension works too.)

## Firebase
This game stores its data in a Firebase Realtime Database. The connection settings are in `index.html` (`firebaseConfig`). To use your own database, create a Firebase project, enable the Realtime Database and paste your project's config there.

## Built with
- p5.js
- p5.play
- Firebase Realtime Database

## Known gaps
The dog and milk pictures (`images/dogImg.png`, `images/dogImg1.png`, `images/Milk.png`) still need to be added to this repo for the game to load.
