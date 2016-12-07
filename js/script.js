$(document).ready(function () {
    $('.buttons-container').on('click', '.shuffle', shuffleTiles);
    $('.buttons-container').on('click', '.sort', sortTiles);

    var tilesContainer = $('.tiles-container');

    function shuffleTiles() {
        var tiles = tilesContainer.children();
        tilesContainer.empty();
        var tilesToShuffle = tiles;
        while (tilesToShuffle.length) {
            tilesContainer.append(tilesToShuffle.splice(Math.floor(Math.random() * tilesToShuffle.length), 1)[0]);
        }
    }

    function sortTiles() {
        var tiles = tilesContainer.children();
        tiles.sort(function (a, b) {
            var ac = parseInt(a.innerText, 10);
            var bc = parseInt(b.innerText, 10);
            return ac - bc
        });

        tilesContainer.html(tiles);
    }
});
