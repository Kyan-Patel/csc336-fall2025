


    // Welcome toast (bottom-right)
window.onload = function () {
    Toastify({
        text: "Welcome! Hope you enjoy your 🌯",
        duration: 5000,
        gravity: "top",
        position: "right",
        close: true,
        style: {
            background: "linear-gradient(to right, #ff5f6d, #ffc371)"
        }
    }).showToast();}

    // Special Offer button toast (top-left)

    document.getElementById("special-offer-btn").addEventListener("click", function () {
    const offers = [
        "Buy 1 Get 1 Free on all Kebabs today!",
        "Free drink with any kebab combo!",
        "$5 off for students!"
    ];

    offers.forEach((offer, index) => {
        Toastify({
            text: offer,
            duration: 4000,
            close: true,
            stopOnFocus: true,
            gravity: "top",
            position: "left",
            className: "top-left-toast",
            style: { 
                background: "linear-gradient(to right, #ff5f6d, #ffc371)"
            },
            offset: { y: index * 60 } 
        }).showToast();
    });
});


