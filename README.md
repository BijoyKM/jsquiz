# Javascript Quiz
This website provides twenty Javascript quiz questions for the user. 

![Javascript AmIResponsive Image](/assets/images/readmeimages/jsQuizAmIResponsive.jpg "Javascript AmIResponsive Image")

The website can be viewed here. [Javascript Quiz](https://bijoykm.github.io/jsquiz/)

# Index – Table of Contents
- [User Experience (UX)](#user-experience-ux)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgments](#acknowledgments)

# User Experience (UX)
## User Stories
* ## As a Website Owner:
1. The website provide a simple program to play Javascript Quiz.
2. The website provide very few and clear buttons to navigate through and out of the quiz.
3. The multiple choice questions has definitely helped in solidifying mine and users Javascript knowledge.

* ## As a Website User:
1. To use the website to play the quiz with clear and informative buttons.
2. Upon clicking on answers, the correct answer in shown in green color(hsl(163, 90%, 23%)) and wrong answer in light red color hsl(0, 89%, 65%). If correct answer is chosen the Score value is incremented by 1.
3. To use Next to go to the next question and to Exit button to goto the homepage. The question index is also incremented by 1 when the Next button is pressed.


# 1. Strategy
* The main purpose for creating this website is to develop a Javascript Quiz by using and implementing Javascript, HTML and CSS.
* To provide users a interesting quiz based on Javascript to increase and revise their knowledge.

# 2. Scope
* The scope of this website is provide easy to navigate quiz based on Javascript.
* The single page website is plain, simple and information provided is clear and concise.
* The webpage can be accessed on all kinds of devices.

# 3. Structure
* Users will find that the single page website with four navigation buttons, which is common to most quiz websites, is simply laid out with easy organisation of information.
* These are the Start, Next, Exit and Restart buttons.
* Each question has four options, when clicked on the correct option the background color of that answer button turns to green color(hsl(163, 90%, 23%)) and the Score value is incremented by 1. All wrong answers buttons are turned to light red color hsl(0, 89%, 65%).
* The footer section provides information on the disclaimer notice.

# 4. Skeleton
## Wireframes
The Wireframes were made by Balsamiq.
* [index.html](/assets/images/readmeimages/homePage.jpg)
* [questionPage](/assets/images/readmeimages/questionPage.jpg)
* [exitPage](/assets/images/readmeimages/exitPage.jpg)
* [startAgain](/assets/images/readmeimages/startAgain.jpg)

# 5. Surface
* ## Color
![Color Scheme Image](/assets/images/readmeimages/jsQuizColorSchemejpg.jpg "Color Scheme Image")
The main page and background is in Cadetblue color. This includes for the Start, Next and Exit Buttons. Aliceblue is used as the background for the question box. The answer button before selection is in Cadetblue. Correct answer is in Cadetblue color. Wrongs answers are in hsl(0, 89%, 65%) lighter red color. Black and white is used for texts.

* ## Font
Verdana, Geneva, Tahoma, sans-serif font-family were used for this website.


# Features
## Existing Features
### Main Page
![Main Page Image](/assets/images/readmeimages/mainpage.jpg "Main Page Image")

* This page is the main landing page throughout quiz which provides the basic layout with header, Start Button and quiz information.

### Question Page
![Question Page Image](/assets/images/readmeimages/Questionsscreen.jpg "Questions Page Image")

* Provides questions and answer set. 

### Answer Selection Page
![Answer Selection Page Image](/assets/images/readmeimages/answerSelectionPage.jpg "Answer Selection Page Image")

* Once answer is selected the page will provide the correct answer in Green color and wrong answers in Red color. The Next and Exit button also appears after the answer selection.

### Exit Selection Page
![Exit Selection Page Image](/assets/images/readmeimages/exitSelectionPage.jpg "Exit Selection Page Image")

* When Exit button is clicked it will prompt for confirmation. If Ok is pressed it will bring back to the Main Page.

### Start Again Page
![Start Again Page Image](/assets/images/readmeimages/startAgainPage.jpg "Start Again Page Image")

* When Start Again is clicked it will restart the quiz and bring back to Question Page.

### Footer Section
![Footer Section Image](/assets/images/readmeimages/footerSection.jpg "Footer Section Image")

* Footer section is providing the Disclaimer Notice.

## Bugs
* There are no known bugs in the project.

*   ## Future Implementation
* Unfortunately to time contraints the Score card option is not implemented. I would like to add it in the future implementation.
* I would also love to add Help button to each question, when a wrong answer is selected. This will help the user to understand the concepts more.



# Technologies Used

* ## Languages
1. [Javascript](https://www.javascript.com/)
2. [HTML5](https://en.wikipedia.org/wiki/HTML5)
3. [CSS3](https://en.wikipedia.org/wiki/CSS)

* ## Misc. Software
* [Balsamiq](https://balsamiq.com/) : Wireframes are built in Basamiq.
* [Gitpod](https://gitpod.io/) : Gitpod was used as an environment, and code was pushed to Github.It is used for version control as well as it allows to commit the code at different stages as and when required.
* [Github](https://github.com/) : Github is used as repository storage for the project.
* [MS Photos](https://www.microsoft.com/en-us/p/photo-editor-free/9wzdncrdt2g5) : MS Photos was used to resize the images.
* [Favicon](http://favicon.io/) : Favicon generator was used to create the Favicon icon.



# Testing
* ## HTML Validator
At various stages HTML Validator testing was done and returned no errors.

![HTML Validator](/assets/images/readmeimages/jsQuizHtmlValidator.jpg "HTML Validator Image")



* ## CSS Validator
At various stages CSS Validator testing was done and returned no errors.

![CSS Validator](/assets/images/readmeimages/jsQuizCssValidator.jpg "CSS Validator Image")



* ## JSHint Validator
At various stages JSHint Validator testing was done and returned no major errors.

![JSHint Validator](/assets/images/readmeimages/script.jsValidator.jpg "script.js Validator Image")

The variable questions is declared in questions.js. The variable score is declared in index.html.



![JSHint Validator](/assets/images/readmeimages/questions.jsValidator.jpg "questions.js Validator Image")

The questions variable is used in script.js



* ## Lighthouse
At various stages Lighthouse testing was done.

![Lighthouse Testing](/assets/images/readmeimages/jsQuizLighthouse.jpg "Lighthouse Testing Image")



* ## Browser Compatability
The website was tested on the following browsers:
* Google Chrome : Version 105.0.5195.127 (Official Build) (64-bit)
* Mozilla Firefox : Version 105.0.1 (64-bit)
* Microsoft Edge : Version 105.0.1343.53 (Official build) (64-bit)

## Manual Testing
* Main landing page throughout quiz which provides the basic layout with header, Start Button and quiz information, is responsive to smaller screens.
* Start Button when pressed, brings to the questions screen with four answer buttons. 
* Once answer is selected the page will provide the correct answer in Green color and wrong answers in Red color.
* Next Button will bring to the next available question set.
* Exit Button will confirm the action and exit the quiz.
* On the last question page, Next and Exit buttons will be replaced by the Restart button. This will bring back to the Question Page.




# Deployment
The website is deployed using GitHub Pages:
1. Once you are in your repository, click on Settings.
2. Click on GitHub Pages.
3. Click on Branches and select "main" from the dropdown.
4. Once "main" is selected, the page will be refreshed automatically and the page will indicate successful deployment and the link to the address will appear.
5. Further changes will automatically deploy when you will be using the 'git push' command from your gitpod environment.

The website can be viewed here. [Javascript Quiz](https://bijoykm.github.io/jsquiz/)



# Credits

* ## Images
*   [Favicon](https://favicon.io/) generator was used to create Favicon.
*   [MS Photos](https://www.microsoft.com/en-us/p/photo-editor-free/9wzdncrdt2g5) was used to resize the images
*   [Am I Responsive](https://ui.dev/amiresponsive) was used to generate the website responsive image used in README.MD

* ## Coding


*   [Build A Quiz App With JavaScript](https://youtu.be/riDzcEQbX6k) This quiz project is inspired by this tutorial. 
*   'Love Maths' project has really helped in understanding the concepts.
*   [Flexbox Playground](https://flexbox.tech/) helped in implementing flexboxes.
*   [Code Institute](https://codeinstitute.net/ie/) classes and videos helped in most of the concepts especially in form building, UX etc in addition to everything else.
*   [W3C](https://www.w3schools.com/html/) helped in quick understanding and testing of various Javascript, HTML and CSS concepts.
*   [JavaScript - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript) helped in quick understanding and testing of various Javascript concepts.
*   [InterviewBit](https://www.interviewbit.com/javascript-mcq/) The multiple choice questions used in quiz are from InterviewBit.



# Acknowledgments

I would like to thank and acknowledge the following people:
* My Mentor Rahul Lakhanpal for all his feedback, guidance and support for this project.
* Code Institute, Kasia and Kenan for their helpful advice during the weekly stand-up meetings.
* Slack Community and also MSLETB A and B group students.