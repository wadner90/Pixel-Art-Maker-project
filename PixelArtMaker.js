$(document).ready(function() {
  $('#sizepicker').submit(function makeGrid(grid) {
      $('table tr').remove();
    var rows = $('#input_height').val();
    var cols = $('#input_width').val();
      for (var i = 1; i <= rows; i++) {
        $('table').append('<tr></tr>');
        for (var j = 1; j <= cols; j++) {
          $('tr:last').append('<td></td>');
          $('td').attr("class", 'cells');
        }
      }
      grid.preventDefault();

      $('.cells').click(function(event) {
        var paint = $('#colorpicker').val();
        $(event.target).css('background-color', paint);

      });
  });
});