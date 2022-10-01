/**
 * Created by Shen.L on 2016/3/17.
 */
;(function ($) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allTabs = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.tabHover = function (options) {
        // don't do anything if touch is supported
        // (plugin causes some issues on mobile)
        if('ontouchstart' in document) return this; // don't want to affect chaining

        // the element we really care about
        // is the dropdown-toggle's parent
        $allTabs = $allTabs.add(this.parent());

        return this.each(function () {
            var $this = $(this);
            $this.hover(function (event) {
                $this.tab('show');
            });
        });
    };

    $(document).ready(function () {
        // apply dropdownHover to all elements with the data-hover="dropdown" attribute
        $('[data-hover="tab"]').tabHover();
    });
})(jQuery);