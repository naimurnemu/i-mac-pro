/* spacification select function */
function setPriceBySpacification(item, cost) {
    const itemSelection = document.getElementById(item + "-cost");
    itemSelection.innerText = cost;

    totalPrice();
}
// collect value function
function getValue(section) {
    const item = document.getElementById(section + "-cost");
    const itemValue = parseInt(item.innerText);
    return itemValue;
}

// calculate total function
function totalPrice() {
    const productCost = getValue("product");
    const memoryCost = getValue("memory");
    const storageCost = getValue("storage");
    const deliveryCost = getValue("delivery");
    const totalCost = productCost + memoryCost + storageCost + deliveryCost;

    // set total price
    document.getElementById("total-price").innerText = totalCost;
}

/* Memory cost */
// 8Gb
document
    .getElementById("memory-8gb-cost")
    .addEventListener("click", function () {
        setPriceBySpacification("memory", 0);
    });

// 16GB
document
    .getElementById("memory-16gb-cost")
    .addEventListener("click", function () {
        setPriceBySpacification("memory", 180);
    });

/* Storage cost  */
// 256GB
document
    .getElementById("256gb-ssd-cost")
    .addEventListener("click", function () {
        setPriceBySpacification("storage", 0);
    });

// 512GB
document
    .getElementById("512gb-ssd-cost")
    .addEventListener("click", function () {
        setPriceBySpacification("storage", 100);
    });
// 256GB
document.getElementById("1tb-ssd-cost").addEventListener("click", function () {
    setPriceBySpacification("storage", 180);
});

/* Shiping cost */

// free-delivery
document
    .getElementById("free-shiping-cost")
    .addEventListener("click", function () {
        setPriceBySpacification("delivery", 0);
    });

// premium delivery
document
    .getElementById("paid-shiping-cost")
    .addEventListener("click", function () {
        setPriceBySpacification("delivery", 20);
    });
