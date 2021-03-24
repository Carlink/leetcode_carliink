/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = (asteroids) => {
    let lastLength = asteroids.length
    while(true) {
        console.log('before collision', asteroids)
        let removeFlag = false
        let experimentalInvesrseArray = []
        for (let asteroidIndex = asteroids.length -1; asteroidIndex > 0; asteroidIndex--) {
            let left = asteroids[asteroidIndex - 1]
            let right = asteroids[asteroidIndex]
            let wichRemove = removeLeftOrRight(left, right)
            
            if(wichRemove != 'none') {
                asteroids = explodeAsteroid(asteroids, wichRemove)
                removeFlag = true
                if(wichRemove == 'both')
                    asteroidIndex = asteroidIndex - 1
            } else {
                experimentalInvesrseArray.push(asteroids.pop())
            }
        }
        if(asteroids.length > 0)
            experimentalInvesrseArray.push(asteroids.pop())
        asteroids = experimentalInvesrseArray.reverse()
        console.log('experimentalInvesrseArray', experimentalInvesrseArray)
        console.log('after collision', asteroids)
        if(removeFlag == false){
            console.log('should break while', removeFlag)
            break;
        } else {
            removeFlag = false
        }
    }
    return asteroids
};

let isPositive = number => {
    return number > 0
}

let removeLeftOrRight = (left, right) => {
    let remove = 'none'
    if(Math.abs(left) === Math.abs(right) && left > right)
        remove = 'both'
    else {
        if(isPositive(left) && !isPositive(right)){
            if(Math.abs(left) > Math.abs(right)){
                remove = 'right'
            } else {
                remove = 'left'
                
            }
        }
    }
    console.log('remove', left, right, remove)
    return remove
}

let explodeAsteroid = (asteroids, wichRemove) => {
    let saveAsteroid = null;
    if(wichRemove === 'left') {
        saveAsteroid = asteroids.pop()
        asteroids.pop()
        asteroids.push(saveAsteroid)
    }
    else if(wichRemove === 'right') {
        asteroids.pop()
    }
    else if(wichRemove === 'both') {
        asteroids.pop()
        asteroids.pop()
    }
    console.log('after remove', asteroids)
    return asteroids
}




let ast = [-2,1,1,-1]
console.log(asteroidCollision(ast))