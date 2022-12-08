/**
 * Thực hành
 1. Phân tích
    - Header
    - Slider
    - Content
        + About
        + Tour
        + Contact
        + Image
        
    - Footer
 2. Dựng base
 3. Xây dựng từng phần theo phân tích
 4. Hoàn thiện

 * Những thành phần thường có của 1 giao diện website:
 1. Header ( Đầu trang )
 2. Navigation ( Điều hướng )
 3. Breadcrumb ()
 4. Sidebar ( Thanh bên trái hoặc phải màn hình)
 5. Slider
 6. Banner
 7. Content
 8. Footer ( Chân trang )
 */

const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalcontainer = document.querySelector('.js-modal-container');

function showBuyTickets() {
    modal.classList.add('open');
}

function hideBuyTickets() {
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalcontainer.addEventListener('click', function(event) {
    event.stopPropagation()    
})
