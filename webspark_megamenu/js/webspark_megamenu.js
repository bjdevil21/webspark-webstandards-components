(function ($, Drupal) {
  Drupal.behaviors.webspark_megamenu = {
    attach: function() {
      var h = window.location.href;
      h = h.replace(/\/$/,'');
      var u = window.location.protocol+'//'+window.location.hostname;
      var a = null;
      var url = getUrlVars()["url"];

      if (h == u) {
        a = 'active';
      }
      var b = '<li class="tb-megamenu-item level-1 mega '+a+'" data-id="1092" data-level="1" data-type="menu_item" data-class="" data-xicon="" data-caption="" data-alignsub="" data-group="0" data-hidewcol="0" data-hidesub="0"><a href="'+u+'"><i class="fa fa-home icon-white"><span style="display:none">Home</span></i></a></li>';
      $('.tb-megamenu-nav').prepend(b);
    }
  }
})(jQuery, Drupal);
