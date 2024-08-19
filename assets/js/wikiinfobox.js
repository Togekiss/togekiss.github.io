var CollapsibleGroup = {
  init: function($content) {
      var $collapsibleGroups = $content.find('.pi-collapse');

      $collapsibleGroups.each(function(index) {
          var $group = $collapsibleGroups.eq(index),
              $header = $group.find('.pi-header:first');

          $header.click(function() {
              $group.toggleClass('pi-collapse-closed');
              $(window).trigger('scroll');
          });
      });
  }
};

$(document).ready(function() {
  CollapsibleGroup.init($(document));
});
