This document outlines the folder structure of this project and describes the contents of each main directory and file.

## Folder Structure
.
├── css/
├── images/
├── js/
├── src/
├── index.html
├── LICENSE
├── package.json
└── README.md

## Folder Descriptions

### `css/`
*   Contains all the CSS (Cascading Style Sheets) files used to style the website and test pages. These files define the visual appearance of the HTML elements.

### `images/`
*   This directory stores image files. Specifically, it contains the logos of each session replay script provider that was analyzed in this project.

### `js/`
*   This folder holds JavaScript files. It primarily contains the altered (modified) versions of the session recording scripts from each analyzed provider. These are the scripts that were subject to static analysis and modification.

### `src/`
*   The `src/` (source) directory contains the HTML files for the custom test sites created for each provider. These pages were used for dynamic analysis to observe the behavior of the recording scripts in a controlled environment.

## File Descriptions

*   **`index.html`**: The main HTML file, likely serving as the entry point or homepage for the test environment or project presentation.
*   **`LICENSE`**: Contains the license information under which this project is distributed.
*   **`package.json`**: A standard file for Node.js projects, typically listing project dependencies and scripts. (Even if not a complex Node.js app, it's common for web projects).
*   **`README.md`**: This file, providing information about the project structure.