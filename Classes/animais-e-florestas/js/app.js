// $(document).ready(function () {

//     var classActive = 'active';

//     $('.animais .tab-menu a').first().addClass(classActive);
//     $('.animais .item').first().addClass(classActive);

//     $('.animais .tab-menu a').click(function (e) {
//         e.preventDefault();
//         var itemId = $(this).attr('href');

//         $('.animais .tab-menu a, .animais .item').removeClass(classActive);
//         $(this).addClass(classActive);
//         $(itemId).addClass(classActive);
//     });

//     $('.florestas .tab-menu a').first().addClass(classActive);
//     $('.florestas .item').first().addClass(classActive);

//     $('.florestas .tab-menu a').click(function (e) {
//         e.preventDefault();
//         var itemId = $(this).attr('href');

//         $('.florestas .tab-menu a, .florestas .item').removeClass(classActive);
//         $(this).addClass(classActive);
//         $(itemId).addClass(classActive);
//     });
// });


$('[data-group]').each(function () {

    var $allTargert = $(this).find('[data-target]'),
        $allClick = $(this).find('[data-click]'),
        activeClass = 'active';

    $allTargert.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    $allClick.click(function (e) {
        e.preventDefault();

        var id = $(this).data('click'),
            $target = $('[data-target="' + id + '"]');

        $allClick.removeClass(activeClass);
        $allTargert.removeClass(activeClass);

        $target.addClass(activeClass);
        $(this).addClass(activeClass);
    });
});