# Media Player Widget

A React media player widget with playback controls, volume control, seeking, mute/unmute, and fullscreen mode. This widget is styled using Tailwind CSS.

## Features

- **Play/Pause**: Toggle playback of the current track.
- **Volume Control**: Adjust the volume of the audio.
- **Seeking**: Jump to different parts of the track.
- **Mute/Unmute**: Mute or unmute the audio.
- **Fullscreen Mode**: Toggle fullscreen mode for the widget.
- **Track Information Display**: Show the current track name.
- **Time Display**: Show the elapsed time and total duration of the track.

## Installation

To use the media player widget in your project, you need to have Node.js and npm installed. If you haven't installed them yet, you can download them from [nodejs.org](https://nodejs.org/).

1. **Install the Package**:

   ```bash
   npm install media-player-widget
   ```

## Usage

### 1. Basic Setup

To use the media player widget in your React project, follow these steps:

1. **Import the Component**:

   ```javascript
   import React from "react";
   import MediaPlayerController from "media-player-widget";

   const App = () => {
     const yourPlaylist = [
       { title: "Track 1", src: "path_to_track_1.mp3" },
       { title: "Track 2", src: "path_to_track_2.mp3" },
       { title: "Track 3", src: "path_to_track_3.mp3" },
     ];
     return (
       <div className="app">
         <MediaPlayerController playlist={yourPlaylist} />
       </div>
     );
   };

   export default App;
   ```

2. **Ensure Tailwind CSS is Set Up**:

If you haven't set up Tailwind CSS in your project, follow these steps:

- Install Tailwind CSS:

  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

- Configure Tailwind to remove unused styles in production by editing the `tailwind.config.js` file:

  ```javascript
  module.exports = {
    purge: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
      "node_modules/media-player-widget/lib/**.js",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  ```

- Add the Tailwind directives to your CSS file (e.g., `src/index.css`):

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### 2. Customization

You can customize the media player by passing different props and modifying the Tailwind CSS classes.

### 3. Advanced Usage

Here is an example of the media player widget with additional functionality and customization:

```javascript
import React from "react";
import MediaPlayerController from "media-player-widget";

const App = () => {
  const yourPlaylist = [
    { title: "Track 1", src: "path_to_track_1.mp3" },
    { title: "Track 2", src: "path_to_track_2.mp3" },
    { title: "Track 3", src: "path_to_track_3.mp3" },
  ];
  return (
    <div className="app p-4">
      <h1 className="text-2xl font-bold mb-4">My Media Player</h1>
      <MediaPlayerController playlist={yourPlaylist} />
    </div>
  );
};

export default App;
```

### 4. Fullscreen Mode and Playlist

You can manage fullscreen mode and extend a playlist of tracks below the media player as demonstrated in the usage example.

## Author

- **Muahmmad Zaid Dildar** - [GitHub Profile](https://github.com/Zaid-Dildar)

## Acknowledgments

- Thanks to the open-source community for their valuable contributions and resources.
- Special thanks to the developers and designers who have inspired this project.

## Links

- [GitHub Repository](https://github.com/Zaid-Dildar/media-player-widget)
