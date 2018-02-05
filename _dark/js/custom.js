// Resize nav on scroll
// $(document).ready(function() {
//   var nav = $(".navbar");
//   $(window).scroll(function() {
//     var topPos = $(this).scrollTop();
//     if (topPos > 1) {
//       $(nav).css({
//    'background' : '#1d1f27',
//    'padding' : '0.5rem 1.5rem'
// });
//     } else {
//       $(nav).css({
//    'background' : '#30323d',
//    'padding' : '1.5rem'
// });
//     }
//   });
//   });

// Form upload change title (should change to the image)
function readUrl(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let imgData = e.target.result;
      let imgName = input.files[0].name;
      input.setAttribute("data-title", imgName);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

// Auto resize text boxes
$.each($('textarea'), function() {
  var offset = this.offsetHeight - this.clientHeight;
  var resizeTextarea = function(el) {
    $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
  };
  $(this).on('keyup input', function() { resizeTextarea(this); });
});

// Modal for screenshots and video
$(document).ready(function() {
  var $imageSrc;
  $('#screens img').click(function() {
    $imageSrc = $(this).data('bigimage');
  });
  $('#myModal').on('shown.bs.modal', function (e) {
    $("#image").attr('src', $imageSrc  );
  })
  $('#myModal').on('hide.bs.modal', function (e) {
    $("#image").attr('src','');
  })
});

// Position sticky fallback
function posStickySupported() {
  var elem = document.createElement('div');
  elem.style.cssText = 'position:sticky';
  if (elem.style.position.match('sticky')) return true;
  return false;
}
if (!posStickySupported()) {
  var elementStuck = document.querySelector('.sticky');
  var elementPosition = elementStuck.getBoundingClientRect();
  var placeholder = document.createElement('div');
  placeholder.style.width = elementPosition.width + 'px';
  placeholder.style.height = elementPosition.height + 'px';
  var isAdded = false;

  window.addEventListener('scroll', function() {
    if (window.pageYOffset >= elementPosition.top && !isAdded) {
      elementStuck.classList.add('no-stick');
      elementStuck.parentNode.insertBefore(placeholder, elementStuck);
      isAdded = true;
    } else if (window.pageYOffset < elementPosition.top && isAdded) {
      elementStuck.classList.remove('no-stick');
      elementStuck.parentNode.removeChild(placeholder);
      isAdded = false;
    }
  });
}