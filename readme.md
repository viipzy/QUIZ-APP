

# Quiz Application

This project is a responsive, browser-based quiz application developed using **HTML, CSS (SCSS)**, and **JavaScript**. The application focuses on user experience, timing accuracy, and clear feedback during assessments.



## Overview

The quiz application allows users to enter their name, read instructions, and take a timed multiple-choice quiz. Each question is limited to a fixed duration, with automatic progression and real-time feedback. Results are calculated and displayed at the end of the quiz.


## SCREENSHOTS
[LANDING PAGE](./cache/landing_page.png)

[INSTRUCTION PAGE](./cache/instruction_page.png)

[QUIZ PAGE](./cache/quiz_interface.png)

[RESULT PAGE](./cache/result.png)

## Features

* Name capture before quiz start
* Timed questions (15 seconds per question)
* Automatic transition when time expires
* Instant feedback on selected answers
* Skip functionality with answer reveal
* Progress tracking across questions
* Submit option on final question
* Result summary with score and percentage
* Responsive, mobile-first layout
* Data persistence using `localStorage`



## Application Flow

1. User enters their name on the landing page
2. Instructions are displayed before starting the quiz
3. Each question runs on a 15-second timer
4. When time expires or an answer is selected, the correct answer is revealed
5. The quiz proceeds automatically or via user action
6. Final results are calculated and displayed on completion



## Stacks Used

* HTML5
* SCSS (compiled to CSS)
* JavaScript
* Browser Local Storage



## Key Learnings

* Managing timers and state in JavaScript
* Implementing user feedback for correct and incorrect actions
* Building mobile-first responsive layouts
* Structuring front-end projects for scalability
* Handling user data persistence without a backend



## Usage

Open `index.html` in any modern browser to start the application. No external dependencies or server setup required.



## Notes

This project was built to demonstrate practical front-end development skills, clean code structure, and user-focused design patterns.

## Author 

 **Ifeoluwa Awosanya**
 [LinkedIN](https://www.linkedin.com/in/awosanya-ifeoluwavictor)
 [Demo Link](https://quiz-app-wine-six-91.vercel.app/quiz.html)
 
