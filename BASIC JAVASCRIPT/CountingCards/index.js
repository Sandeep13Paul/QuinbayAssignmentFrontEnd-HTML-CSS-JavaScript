let count = 0;
function cc(card) {
    // Only change code below this line
    if (card > 1 && card < 7) {
        count++;
    } 
    else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count--;
    }
    if (count > 0) {
        return count + " Bet";
    }
    return count + " Hold";
    // Only change code above this line
}
cc(2); 
cc(3); 
cc(7); 
cc('K'); 
cc('A');