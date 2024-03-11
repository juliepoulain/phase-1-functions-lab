// Code your solution in this file!

function distanceFromHqInBlocks(myBlock) {
  return Math.abs(myBlock - 42);
}

function distanceFromHqInFeet(myBlock) {
  const blocks = distanceFromHqInBlocks(myBlock);
  return (blocks * 264);
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    const distance = Math.abs((endingBlock-startingBlock)*264)
    return distance
}

function calculatesFarePrice(startingBlock, endingBlock) {
    const distance = distanceTravelledInFeet(startingBlock,endingBlock)
    if (distance < 400){
        return 0
    }
    if (distance < 2000){
        return ((distance-400)*.02)
    }
    if (distance < 2500){
        return 25
    };
    return 'cannot travel that far'
}