function onSubmit() {
    alert('Your Order is accepted')
    setTimeout(function () {alert('Your Order is being cooked')}, 3000)
    setTimeout(function () {alert('Your Order is ready')}, 8000)
    setTimeout(function () {alert('Order is out for delivery')}, 10000)
    setTimeout(function () {alert('Oredr delivered')}, 12000)
}