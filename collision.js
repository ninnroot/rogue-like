
/**
 * 
 * @param {Player} player 
 * @param {EnemySystem} enemySystem 
 */
function checkCollisions(player, enemySystem){

    for(let b = 0; b < player.bulletSystem.bullets.length; b++){
        for(let e = 0; e < enemySystem.enemies.length; e++){
            if (isInside(player.bulletSystem.bullets[b].location, player.bulletSystem.bullets[b].size, enemySystem.enemies[e].location, enemySystem.enemies[e].size)){
                enemySystem.enemies[e].performBulletHit(player.bulletSystem.bullets[b])
            }
        }
    }

}

/**
 * Checks if two bodies are touching.
 * @param {p5.Vector} locA 
 * @param {number} sizeA 
 * @param {p5.Vector} locB 
 * @param {number} sizeB 
 * @returns {boolean}
 */
function isInside(locA, sizeA, locB, sizeB){

    return dist(locA.x, locA.y, locB.x, locB.y) <= sizeA/2 + sizeB/2
}