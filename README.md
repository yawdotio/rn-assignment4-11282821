# rn-assignment4-11282821
Third assignment for mobile app development

This repository contains the fourth assignment for mobile app development. The main entry point of the application is `App.js`. It is a simple UI for a job marketing mobile application built with react.

## Installation

To install the application, follow these steps:

1. Clone the repository: `git clone https://github.com/yawadubempong/rn-assignment4-11282821.git`
2. Navigate to the project directory: `cd rn-assignment4-11282821/Jobiz`
3. Install the dependencies: `npm install`

## Running the Application

To run the application, use the command: `npm start`


## Requirements

- React Native 
- Expo CLI

## Structure

The `App.js` file primarily consists of a single React component, `App`, which returns the main application layout.

The layout is wrapped in a `View` component with a style of `container`. The `container` style applies a background color, centers the child components, and sets the position and height of the container.


## Components

This excerpt from `App.js` uses a combination of built-in React Native components and custom components. Here's a breakdown:

1. `Navigation Container`: This is a React Native component that allows the app to switch between different screens that have been creaared using a `Stack` object. The stack is the set of screens in the app.

2. `Login Screen`: This is the initial route of the application and is rendering the `Login Component` from the component directory.
    - `Font Awesome`: Font awesome components were used to create the logos for the social login section.

3. `Home Screen`: The home screen renders the `Home Component` from the component directory.

    * This screen will have the following custom component
    - `Search`: This component is a styled search bar
    - `Featured`: This component renders a horizontal scroll list of job postings.
    - `Popular`: This component renders a vertical scroll list of job postings.


## React native components 

4. `View`: This is a fundamental React Native component used for layout. It's similar to a `<div>` in HTML. Here, it's used to group related elements together. The outer `View` has a style of `styles.heading`, which  defines the layout and appearance of the heading section.

5. `Text`: This is a React Native component used to display text. Here, it's used to display a greeting ("Hello, Devs") and the number of tasks for the day. The greeting has a `fontSize` of `30` and a `fontWeight` of `"bold"`, making it larger and bolder than the default text.

6. `Image`: This is a React Native component used to display images. Here, it's used to display an image from the local `assets` directory. The `style` prop is set to `styles.devIcon`, which defines the size and position of the image.


## Styles

The styles for the `Login`and `Home`, component are defined in a `StyleSheet.create` block. Here's a brief overview of some of the styles:

- `container`: This style is applied to the main `View` component. It sets the `flex` to `1`, which means the `View` will expand to fill its parent. The `backgroundColor` is set to `#F7F0E8`. The `alignItems` property is set to `"center"`, which centers the child components horizontally. The `position` is set to `"relative"`, and `top` is set to `0`, which positions the `View` at the top of its parent. The `height` is set to `900`, and `paddingHorizontal` is set to `12`, which adds horizontal padding.

- `heading`: This style is not fully shown in the provided excerpt, but it's  applied to a heading text in the application.

- `jobcard`: This style styles the job postings in an aesthetic card, with company logos displayed for each job posting.


## Screenshots

![Home Screenshot](./Jobiz/assets/Home.jpg)

![Login Screenshot](./Jobiz/assets/Login.jpg)
