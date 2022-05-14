# Task description
    Create a web app with the given design. The app is a TV application based on web technology with react.js
    lib. In the design file you can find two screens. We also sent to you the data folder with the assets files
    (images, videos), and JSON data file where you can get all the video data you needed for the task.

    1. Main menu with icons
    2. Main featured video
    3. Trending now section

# 1. Main menu
    At the left side of the screen you can see main menu icons (Search, Home, TV shows, movies, genres,
    watch later). On hover the menu will be opened by an animation float from left to right with the background
    translation from 0 opacity to 80. At the opened view we have profile info icons with their name and additional
    menu items at the bottom side (language, get help, exit)

# 2. Main featured video
    At the left top side of the screen we can see a featured video block that contains the last featured movie. The
    block features video cover image, category name (Movie), movie logo in transparent PNG format, release
    year, MPA rating, duration, short description, and two buttons (play and more info).

# 3. Trending now section
    At this section you need get all the trending videos with max 50 counts sorted by last added or created at
    from the JSON file, and place with carousel view, on the screen must be viewed only first 8 elements, after
    scrolling or dragging with mouse the carousel must show the others from right side, the move component on
    this section contain only movies cover.
    If a user clicks on any movie, they need to change the top featured section content like image, category, title,
    description and save the movie ID in session storage and during the next render time (ex. When the user
    refreshes the page) need to sort the movie list by the last clicked (seen) videos at the first position and then
    the rest videos with default order