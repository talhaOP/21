const msg = document.getElementById("message")
const total = document.getElementById("total")
const ctotal = document.getElementById("ctotal")
const player_cards = document.getElementById("player_cards")
const computer_cards = document.getElementById("comp_cards")

const start_btn = document.getElementById("start_btn")
const reset_btn = document.getElementById("reset_btn")

var pcard = []
var ccard = []
var sum = 0
var csum = 0


var win = false
var game = true

var sgame = false
var player=prompt("enter the name")
var amount=prompt("enter the amount")



function get_random() {
    var random = Math.floor(Math.random() * 13 + 1)

    if (random > 10) {
        return 10
    } else if (random == 1) {
        return 11
    } else {
        return random
    }
}


function start() {


    pcard = []
    var num1 = get_random()
    var num2 = get_random()

    var num3 = get_random()
    var num4 = get_random()


    sum = num1 + num2

    csum = num3 + num4

    pcard = [num1, num2]
    ccard = [num3, num4]

    sgame = true
    game = true


    render()
}


function render() {
    player_cards.innerHTML = "Player : "
    // computer_cards.innerHTML = "Computer : "

    for (let i = 0; i < pcard.length; i++) {

        player_cards.innerHTML += `${pcard[i]} `;
        //computer_cards.innerHTML += `${ccard[i]} `;
        console.log(pcard[i])
    }


    total.innerHTML = `Total : ${sum}`
    ctotal.innerHTML = `Comp Total: ${csum}`

    if (sum < 21) {
        msg.style.color = "black"
        msg.innerHTML = "Want to draw another card?"

    }

    else if (sum == 21) {
        amount*=2
        message.innerHTML=`congrats ${player},you won Rs.${amount}`
        msg.innerHTML = "You Win!"
        win = true
        game = false
        sgame = false
        msg.style.color = "greenyellow"
    }

    else {
        msg.innerHTML = `Sorry ${player }, your ${amount} is gaya`
        msg.style.color = "Red"
        game = false
        sgame = false
    }
}

function new_card() {

    if (win == false && game == true && sgame == true) {
        var num = get_random();

        pcard.push(num)
        ccard.push(cnum)

        sum += num

        console.log(pcard)

        while (csum < 17) {
            var cnum = get_random()
            csum += cnum
        }
        render()
        winner()
    }
}

function winner() {
   if(sgame=true) {
    while (csum < 17 || sum<csum ) {
        var cnum = get_random()
        csum += cnum
    }
    ctotal.innerHTML = ` Comp Total : ${csum}`
    if (sum < 21 || (csum <= 21 && csum > sum)) {
        msg.innerHTML = `Sorry ${player }, your ${amount} is gaya`
    } else if (sum == csum) {
        msg.innerHTML = "DRAW"
    } else { 
        amount*=2
        message.innerHTML=`congrats ${player},you won Rs.${amount}`
    }
    game=false
}
}