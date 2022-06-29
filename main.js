// アコーディオン
$('.accordion-title').click(function() {
    $(this).next().toggleClass('is-open');
    $(this).toggleClass('is-active');
})