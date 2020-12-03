## 🛑 Work in progress 🛑

## Graph coloring algorithms with visualization.
#### Algorithms and Complexity @DIT.UOI - University of Ioannina

#### TLDR: This is a Node.js desktop application built with Electron.js, Express.js, Handlebars and 3D force-directed graph component using ThreeJS/WebGL.

## Links
* [Online Demo](https://andreaszorpidis.github.io/aac/demo.html)
* [Full paper [GR]](./paper.pdf)

## Abstract
 The graph coloring problem is an NP-hard combination optimization problem. It involves assigning a color to each vertex of a graph so that adjacent vertices are colored differently, while the minimum number of different colors is used. In the present assignment, four graph coloring algorithms are implemented (First Fit, DSATUR, Recursive Largest First, Backtracking DSATUR) along with the three-dimensional visualization of these graphs in real time. The main application is built using JavaScript and the visualization of the data is done with WebGL using the Three.js component 3d-force-graph. The application can be executed in three different ways, locally on the computer using Electron.js in the form of an executable application, in the Browser/Client locally using Node.js and in the Browser/Client via the cloud respectively.

## Quick start
* Clone this repo
```
git clone https://github.com/AndreasZorpidis/aac.git
```
* and enter into the directory.
```
cd aac/app
```
* Install the dependencies required.
```
npm install
```
* Run the server at http://localhost:3000
```
npm start
```
* Or build the app as a Windows executable.
```
electron-packager . AAC --platform=win32  --arch=x64 --overwrite echo 'Built for Windows'
```