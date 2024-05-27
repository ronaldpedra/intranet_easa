const modalBtn = document.querySelector("#modal-btn")
const popupBtn = document.querySelector("#popup-btn")
const closeBtn = document.querySelector("#close-btn")
const dialog = document.querySelector("dialog")

modalBtn.addEventListener("click", () => {
    dialog.showModal()
})

popupBtn.addEventListener("click", () => {
    dialog.show()
})

closeBtn.addEventListener("click", () => {
    dialog.close()
})