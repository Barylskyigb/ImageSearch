The application is using Google CSE to persist images, 10 per time.
(had to create a small [library](https://github.com/Barylskyigb/react-native-google-image-search) for this)

- persists search screen state between app openings
- supports Android back button
- shows Spinners while images are being fetched/loaded
- validates that image links are not broken
- has some styling :)


# Installation
```
git clone https://github.com/Barylskyigb/ImageSearch.git
cd ImageSearch
npm install
```

# Running

```
react-native start
```

```
react-native run-android
react-native run-ios
```

Demo: https://youtu.be/y1xjjIAE_fs  
Release apk: https://www.dropbox.com/s/ftutmfd2umt4gui/SearchImages.apk?dl=0  

P.S: was not tested on iOS yet. Will be fixed today.
