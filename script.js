let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

function add1PointH(){
    let homeScoreNum = parseInt(homeScore.textContent);
    homeScoreNum = add1Point(homeScoreNum);
    homeScore.textContent = homeScoreNum;
}

function add2PointH(){
    let homeScoreNum = parseInt(homeScore.textContent);
    homeScoreNum = add2Point(homeScoreNum);
    homeScore.textContent = homeScoreNum;
}

function add3PointH(){
    let homeScoreNum = parseInt(homeScore.textContent);
    homeScoreNum = add3Point(homeScoreNum);
    homeScore.textContent = homeScoreNum;
}

function add1PointG(){
    let guestScoreNum = parseInt(guestScore.textContent);
    guestScoreNum = add1Point(guestScoreNum);
    guestScore.textContent = guestScoreNum;
}

function add2PointG(){
    let guestScoreNum = parseInt(guestScore.textContent);
    guestScoreNum = add2Point(guestScoreNum);
    guestScore.textContent = guestScoreNum;
}

function add3PointG(){
    let guestScoreNum = parseInt(guestScore.textContent);
    guestScoreNum = add3Point(guestScoreNum);
    guestScore.textContent = guestScoreNum;
}

function add1Point(scoreNum){
    scoreNum++;
    return scoreNum;    
}

function add2Point(scoreNum){
    scoreNum += 2;
    return scoreNum;
}

function add3Point(scoreNum){
    scoreNum += 3;
    return scoreNum;
}

function resetScore(){
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}