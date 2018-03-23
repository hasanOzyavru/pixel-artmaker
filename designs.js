// Select color input

const colorPick = document.getElementById('colorPicker');
colorPick.addEventListener('change', function () {
	// console.log(colorPick.value);
})

// Select size input

const gridHeight = document.getElementById('inputHeight');
gridHeight.addEventListener('input', function () {
	//console.log(gridHeight.value);
})

const gridWidth = document.getElementById('inputWeight');
gridWidth.addEventListener('input', function () {
	//console.log(gridWidth.value);
})

// When size is submitted by the user, call makeGrid()

const formSize = document.getElementById('sizePicker');
formSize.addEventListener('submit', function (e) {
	e.preventDefault();
	makeGrid(gridHeight.value, gridWidth.value);
})

// Define table element in JS
const tablo = document.getElementById('pixelCanvas');

function makeGrid(rowCount, columnCount) {

	// Your code goes here!

	for (let i = 0; i < rowCount; i++) {
		const row = document.createElement('tr');
		for (let j = 0; j < columnCount; j++) {
			const col = document.createElement('td');
			row.appendChild(col);
		}
		tablo.appendChild(row);
	}

}

// when pointer is up on a cell, then it is filled with selected color
tablo.addEventListener('pointerup', function (e) {
	e.target.style.background = colorPick.value;
})



