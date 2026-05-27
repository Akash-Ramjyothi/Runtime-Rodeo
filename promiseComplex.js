const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        console.log("No matter what happens, I will definitely be called.");
    });

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "12345";

        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000)
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment success");
    });
}

function validateCart(cart) {
    return true;
}