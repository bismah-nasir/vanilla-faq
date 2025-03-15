const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        const accordionDescription = this.nextElementSibling;
        const plusIcon = this.querySelector('.plus-icon');
        const minusIcon = this.querySelector('.minus-icon');

        const isOpen = this.classList.contains('active');

        accordionDescription.style.maxHeight = isOpen ? accordionDescription.scrollHeight + 'px' : null;
        plusIcon.style.display = isOpen ? 'none' : 'block';
        minusIcon.style.display = isOpen ? 'block' : 'none';
    });
});