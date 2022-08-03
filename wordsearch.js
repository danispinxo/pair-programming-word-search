const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    let verticalJoinArray = [];
    for (let i = 0; i < letters[0].length; i++) {
        verticalJoinArray.push([]);
    }
    // [[], [], []]

    for (let x = 0; x < letters.length; x++) {
        for (let y = 0; y < letters[x].length; y++) {
            verticalJoinArray[y].push(letters[x][y]);
        }
    }

    let verticalJoin = verticalJoinArray.map(ls => ls.join(''));
    for (vl of verticalJoin) {
        if (vl.includes(word)) return true;
    }
    return false;
}

const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'LARRY');

  console.log(result);

module.exports = wordSearch