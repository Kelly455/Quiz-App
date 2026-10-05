# Quiz App

An interactive quiz application built with HTML, CSS, and vanilla JavaScript.
Users can answer questions, move through the quiz, and receive an interactive
experience as the application updates the interface based on their progress.

## Features
- Display quiz questions and multiple-choice answers
- Select an answer and highlight the chosen option
- Navigate through the quiz using the Next button
- Track progress with a running question counter
- Calculate and display a final score at the end of the quiz
- Restart the quiz from the beginning

## Built With
- HTML5
- CSS3
- JavaScript (vanilla, no frameworks or libraries)

## How to Run
1. Clone or download this repository
2. Open index.html in a web browser
3. No installation, dependencies, or build process is required

## What I Learned

This project taught me how important it is to understand what happens when
event listeners are attached to the same element. I encountered a bug where
two nextBtn.addEventListener blocks were responding to the same click, causing
the quiz state to change twice during a single event. I also learned that
JavaScript can correctly add or remove a CSS class without producing any visible
change if the corresponding CSS rule has not been defined. These problems helped
me better understand the connection between event handling, application logic,
and the visual behavior of a web page.
