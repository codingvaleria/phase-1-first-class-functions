
function receivesAFunction(receiveMe) {
    receiveMe();

}


function returnsANamedFunction() {
    let myOrder = function () {
    }

    return myOrder;
}

function returnsAnAnonymousFunction() {

    return function () {

    }

}