$(document).ready(function(){
    console.log('hello');

$('.buttons-container').on('click', '.shuffle', shuffleTiles);

$('.buttons-container').on('click', '.sort', sortTiles);


});
var tilesContainer = $('.tiles-container');
var tiles = tilesContainer.children();
var tilesToShuffle = tiles;


function shuffleTiles(){
    tilesContainer.empty();

        while(tilesToShuffle.length)
        {
            tilesContainer.append(tilesToShuffle.splice(Math.floor(Math.random() * tilesToShuffle.length), 1)[0]);
        }
        tilesToShuffle=tilesContainer.children();
        return false;
}

function sortTiles(){
    tiles=tilesContainer.children();
    tiles.sort(function(a, b){
        var ac =parseInt( a.innerText,10);
        var bc =parseInt( b.innerText,10);
      return ac-bc});

    tilesContainer.html(tiles);

    return false;
}

