// Animations initialization
new WOW().init();

//remove data modal
  $('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
    $(".modal-content").html('<div class="modal-body text-center"><img src="/img/gif/loading.gif" /></div>');
  });
  $.fn.modal.Constructor.prototype.enforceFocus = function() {};