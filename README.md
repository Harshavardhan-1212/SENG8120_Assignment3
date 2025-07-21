# SENG8120 Modern Automated Testing 

Version: Alpaca

## Purpose

This repository contains implementations and automated tests for functions related to painting and measurement calculations. The focus is on apply modern automated testing principles to example functions with strict input validation, comprehensive unit tests and robust error handling.

## Assignment 3 Overview  

This assignment includes the following core functions:  
- **calculateCanvasSize**: Computes the total perimeter of a rectangular canvas given length and width
- **calculateCanvasPerimeter**: Computes perimeter given length and width  
- **calculateCanvasDiagonal**: Computes diagonal length using Pythagoras theorem  
- **calculatePaintCost**: Computes total paint cost given quantity and unit price  
- **calculateTotalCost**: Sums paint and labor costs  
- **convertAreaToSquareFeet**: Converts metric area to imperial units  
- **estimatePaintingTime**: Estimates painting time based on area and speed  
- **paintRequiredCalculator**: Computes paint quantity needed based on coverage  
- **paintRequiredForMultipleCoats**: Extends paint requirement for multiple coats

Each function:  
- Accepts inputs as strings for robustness  
- Converts negative inputs to positive values automatically  
- Returns `NaN` if inputs are invalid or zero-division occurs  
- Is accompanied by a Jest unit tests covering positive, zero, negative and invalid input cases

## Repository Structure

```
├── calculateCanvasDiagonal/
│   ├── calculateCanvasDiagonal.ts
│   └── calculateCanvasDiagonal.test.ts
├── calculateCanvasPerimeter/
│   ├── calculateCanvasPerimeter.ts
│   └── calculateCanvasPerimeter.test.ts
├── calculateCanvasSize/
│   ├── calculateCanvasSize.ts
│   └── calculateCanvasSize.test.ts
├── calculatePaintCost/
│   ├── calculatePaintCost.ts
│   └── calculatePaintCost.test.ts
├── calculateTotalCost/
│   ├── calculateTotalCost.ts
│   └── calculateTotalCost.test.ts
├── convertAreaToSquareFeet/
│   ├── convertAreaToSquareFeet.ts
│   └── convertAreaToSquareFeet.test.ts
├── estimatePaintingTime/
│   ├── estimatePaintingTime.ts
│   └── estimatePaintingTime.test.ts
├── paintRequiredCalculator/
│   ├── paintRequiredCalculator.ts
│   └── paintRequiredCalculator.test.ts
├── paintRequiredForMultipleCoats/
│   ├── paintRequiredForMultipleCoats.ts
│   └── paintRequiredForMultipleCoats.test.ts
├── main.ts

## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```

## Author

**Harshavardhan Reddy Singireddy**  
*Date: 20-07-2025*