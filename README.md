# MyReads Project

This is my personal take of Udacity's MyReads react project, with quality of life functionality and a fresh look. This also happens to be my very first completed React project.

## Demo

#### https://myreads-omaralseddik.netlify.app/#/

## Installation

You can either download the zip file and extract it or download the project through git:

```
git clone https://github.com/OmarAlSeddik/myreads
cd myreads
```

Next, install the dependencies and run:

### npm

```
npm install
npm start
```

### yarn

```
yarn install
yarn start
```

## Backend

The backend API is provided by Udacity. It uses a fixed set of cached search results and is limited to a particular set of search terms.

## Used Libraries/Packages

#### [MUI](https://mui.com/)

#### [Framer Motion](https://www.framer.com/motion/)

#### [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)

## Outsourced Hooks

#### [useDebounce](https://usehooks-typescript.com/react-hook/use-debounce/)

#### [useStickyState](https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/)

## Features

#### Fulfills Udacity's Specifications

This project fulfills all Udacity's MyReads project specifications. The Specs.

#### A User-Friendly Design

This project is designed to provide a more intuitive UI. Navigation between the home page and search page is made more user-friendly through adjacent tabs. Books in their entirety are clickable and will trigger the move menu to pop up instead of having to click on a tiny button to do so. Scrolling through shelves and search results are made horizontal on smaller screen sizes for better navigation.

#### 100% Responsive

This project uses an 18-grid layout and supports screens of all sizes. All components also scale with the user's preferred zoom/font size settings.

#### A Customizable Theme That Sticks

This project queries the user's preferred theme mode from their device settings on the first visit and applies that. The user can alter the theme mode as they wish through a button in the top-right corner of the screen. The user can also change the theme color of the page. This is done through a button in the footer of the homepage. The theme mode and color values are stored in the local storage, so they won't change on refreshes or revisits unless the user deletes their cache.

#### Filter, Multi-Select, and Clear

These are quality of life options available in the header of every shelf on the homepage. Both the filter and multi-select functionalities can be active at the same time.
