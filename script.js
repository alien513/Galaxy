/*************************************************************/
/*  1. Make a player move by pressing keys                   */
/*  2. Make shots                                            */
/*      - Create bullet                                      */
/*      - Make the bullet move                               */
/*      - Check if a bullet hit an enemy or an asteroid      */
/*  3. Choose a player and start the Game                    */
/*  4. Create enemies and make them move                     */
/*  5. Create life                                           */
/*  6. If an enemy passed through the player, decrease life  */
/*  7. If lives have run out, end the game                   */
/*************************************************************/

let app = document.querySelector('#game-elements');

isGameOver = false;

// Random number from min to (max+1)
function randomInteger(min,max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}