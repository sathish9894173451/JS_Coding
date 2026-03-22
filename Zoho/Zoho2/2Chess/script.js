document.addEventListener("DOMContentLoaded", () => {
    const chessboard = document.getElementById('chessboard');
    createChessboard(chessboard);
});

function createChessboard(chessboard) {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add((row + col) % 2 === 0 ? 'light' : 'dark');
            square.dataset.row = row;
            square.dataset.col = col;
            square.addEventListener('click', () => {
                highlightSquares(square);
                getAttackedSquares(square);
            });
            chessboard.appendChild(square);
        }
    }
}

function highlightSquares(square) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(sq => sq.classList.remove('highlighted', 'attacked'));
    square.classList.add('highlighted');
}

function getAttackedSquares(square) {
    const row = parseInt(square.dataset.row);
    const col = parseInt(square.dataset.col);

    const directions = [
        { row: 1, col: 1 },
        { row: 1, col: -1 },
        { row: -1, col: 1 },
        { row: -1, col: -1 }
    ];

    directions.forEach(direction => {
        let r = row + direction.row;
        let c = col + direction.col;
        while (r >= 0 && r < 8 && c >= 0 && c < 8) {
            const sq = document.querySelector(`.square[data-row='${r}'][data-col='${c}']`);
            sq.classList.add('attacked');
            r += direction.row;
            c += direction.col;
        }
    });
}
