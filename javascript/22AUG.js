// drawing cats ==> Single lin comment.
/**
 * 
 * Multi-line comment goes here.
 */

var drawCats = function (howManyCats) {
    for (let index = 1; index <= howManyCats; index++) {
        console.log(index+" =^.^=");
    }
}

drawCats(8) // you can take the input from user, instead of 8.
