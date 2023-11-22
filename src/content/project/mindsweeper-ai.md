---
title: Minesweeper AI
tags: [Algorithm, Artificial Intelligence, p5js, Game]
image:
  src: /images/minesweeper-ai.png
  alt: ""
timestamp: 2022-03-52
description: An AI capable of playing minesweeper.
codeLink: https://github.com/nextdrought/minesweeper-ai
demoLink: https://minesweeper-elliott.netlify.app/
---

A minesweeper AI that uses a combination of logical deduction and probability to play minesweeper. This project was built with p5.js. This solves constrained satisfaction problems using a backtracking algorithm. The algorithm is as follows:

1. If the number of unopened cells is equal to the number of mines, flag all unopened cells.
2. If the number of flagged cells is equal to the number of mines, open all unopened cells.
