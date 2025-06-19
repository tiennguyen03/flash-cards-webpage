# Web Development Project 2 - *Name of App Here*

Submitted by: **Your Name Here**

This web app: **insert description**

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

# Flash Card App

## Introduction
This is a web application that helps users learn and memorize country flags through interactive flashcards.

## Requirements Status

1. [x] The app displays the title of the card set
   - Implemented "Guess The Country Flag" as main title
   - Title is clearly visible at the top of the application

2. [x] A short description of the card set is displayed
   - Added description: "Test your knowledge of country flags from around the world!"
   - Description appears below the title

3. [x] A list of card pairs is created
   - Created 8 card pairs
   - Each pair contains a flag image and corresponding country name
   - Countries included: France, Brazil, Canada, China, Germany, Japan, Russia, UK

4. [x] The total number of cards in the set is displayed
   - Shows "Total Cards: 8"
   - Counter is visible above the flashcard

5. [x] Card set is represented as a list of card pairs
   - Implemented using an array of objects
   - Each object contains question (flag image) and answer (country name)

6. [x] A single card at a time is displayed
   - Only one flashcard is shown on screen
   - Clear, focused display for better learning

7. [x] Only one half of the information pair is displayed at a time
   - Front shows flag image
   - Back shows country name
   - Never shows both simultaneously

8. [x] Clicking on the card flips it over
   - Smooth flip animation implemented
   - Interactive and intuitive user experience

9. [x] Clicking on a flipped card flips it back
   - Works in both directions
   - Allows quick review of both sides

10. [x] Clicking on the next button displays a random new card
    - Random selection implemented
    - Prevents predictable sequence
    - Enhances learning through varied repetition

## Technical Implementation
- Built with React + Vite
- Uses CSS3 for animations
- Implements React hooks for state management
- Responsive design for various screen sizes

## Features
- Interactive flashcard interface
- Smooth card flip animations
- Random card selection
- Visual flag images
- Simple and intuitive controls

## Future Enhancements
- Add progress tracking
- Include more countries and flags
- Implement scoring system
- Add difficulty levels
- Save user progress