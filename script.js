// Mobile Menu Toggle
let menuBtn = document.getElementById("menuBtn")
let navLinks = document.getElementById("navLinks")

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active")
    })
}


// Search + Filter (Collections Page)
let search = document.getElementById("search")
let filter = document.getElementById("filter")
let products = document.querySelectorAll(".card")

function showProducts() {

    if (!search || !filter) {
        return
    }

    let searchValue = search.value.toLowerCase()
    let filterValue = filter.value

    for (let i = 0; i < products.length; i++) {

        let productName = products[i].querySelector("h3").textContent.toLowerCase()

        let matchSearch = productName.includes(searchValue)

        let matchFilter = false

        if (filterValue == "all") {
            matchFilter = true
        }
        else if (products[i].classList.contains(filterValue)) {
            matchFilter = true
        }

        if (matchSearch && matchFilter) {
            products[i].style.display = "block"
        }
        else {
            products[i].style.display = "none"
        }

    }

}

if (search) {
    search.addEventListener("keyup", showProducts)
}

if (filter) {
    filter.addEventListener("change", showProducts)
}


// Contact Form Alert
let contactForm = document.getElementById("contactForm")

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault()

        alert("Message Sent Successfully!")

        contactForm.reset()

    })

}