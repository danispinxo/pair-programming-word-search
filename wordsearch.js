const wordSearch = (letters, word) => {
    if (word.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    let reverseHorizontalJoin = letters;

    for (let h of reverseHorizontalJoin) {
        h = h.reverse();
    }
    
    reverseHorizontalJoin = reverseHorizontalJoin.map(ls => ls.join(''));

    for (hl of reverseHorizontalJoin) {
        if (hl.includes(word)) {
            return true;
        }
    }

    let verticalJoinArray = [];
    for (let i = 0; i < letters[0].length; i++) {
        verticalJoinArray.push([]);
    } 

    for (let x = 0; x < letters.length; x++) {
        for (let y = 0; y < letters[x].length; y++) {
            verticalJoinArray[y].push(letters[x][y]);
        }
    }
    let verticalJoin = verticalJoinArray.map(ls => ls.join(''));

    let reverseVerticalJoinArray = verticalJoinArray;
    for (let j of reverseVerticalJoinArray) {
        j = j.reverse();
    }
    let reverseVerticalJoin = reverseVerticalJoinArray.map(vls => vls.join(''));

    for (vl of verticalJoin) {
        if (vl.includes(word)) {
            return true;
        }
    }
    for (vl of reverseVerticalJoin) {
        if (vl.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch