window.onload = function() {
    awty.add({
        selector: '.bottom',
        bgcolor: 'red'
    });

    var buttons = document.querySelector('.buttons');

    if (!Element.prototype.addEventListener) {
        // IE8 and below
        buttons.attachEvent('onclick', function(event) {
            // event.srcElement for IE8 support
            var target = event.target || event.srcElement;
            var dataset = target.dataset;
            // If this is IE < 11, we need to get the data attributes explicitly as it does not
            // support the dataset property.
            var percentageComplete = dataset ? dataset['progress'] : target.getAttribute('data-progress');
            awty.update(percentageComplete);
        });
    } else {
        buttons.addEventListener('click', function(event) {
            var target = event.target;
            var dataset = target.dataset;
            // If this is IE < 11, we need to get the data attributes explicitly as it does not
            // support the dataset property.
            var percentageComplete = dataset ? dataset['progress'] : target.getAttribute('data-progress');
            awty.update(percentageComplete);
        });
    }
};
