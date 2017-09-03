// In the assignment I handed up, the below code was on its own outside a function.
// However, for uploading it to GitHub I have decided to put it in its own
// function - displayMatrixAddition - which is called onload on the body.

window.addEventListener('load', displayMatrixAddition, false);

function displayMatrixAddition() {
	document.write(
		"[[1, 2], [12, 9]] + [[-2, 3], [23, -4]] = " +
		printMatrix(add([[1, 2], [12, 9]], [[-2, 3], [23, -4]])) +
		"<br>"
	);
	document.write(
		"[[1, -2], [2, 11]] + [[2, -5], [14, 4]] + [[8, -5], [10, 6]] = " +
		printMatrix(add([[1, -2], [2, 11]], [[2, -5], [14, 4]], [[8, -5], [10, 6]])) +
		"<br>"
	);
	document.write(
		"[[4, 2], [-2, -3], [12, -7]] + [[0, 2], [7, 8], [-21, 4] = " +
		printMatrix(add([[4, 2], [-2, -3], [12, -7]], [[0, 2], [7, 8], [-21, 4]])) +
		"<br>"
	);
}

function add() {
	var noMatrices = arguments.length;
	var verticalSide = arguments[0].length;
	var horizontalSide = arguments[0][0].length;

	for (var i = 1; i < noMatrices; i++) {
		for (var j = 0; j < verticalSide; j++) {
			for (var k = 0; k < horizontalSide; k++) {
				arguments[i][j][k] += arguments[i - 1][j][k];
				// As i - 1 is being assigned to i, final result ends up in last element of array
			}
		}
	}
	return arguments[noMatrices - 1];
}

function printMatrix(matrix) {
	/* This function just makes the arrays returned by add() display more nicely */
	var rows = matrix.length;
	var cols = matrix[0].length;
	var matrixString = "[";
	
	for (var i = 0; i < rows; i++) {
		matrixString += "["; // + matrix[i] + "]";
		for (var j = 0; j < cols; j++) {
			matrixString += matrix[i][j];
			if (j < cols - 1) { // Unless after the very last element,
				matrixString +=", "; // add commas and spaces between the elements so they're less squashed
			}
		}
		matrixString += "]";
		if (i < rows - 1) { // Unless after the very last subarray,
			matrixString += ", "; // add commas and spaces between the arrays so they aren't all bunched up
		}
	}
	matrixString += "]";
	
	return matrixString;
}


