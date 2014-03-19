arewethereyet
=============

Simple Dependencyless Progress Meter

Tested to work in IE8+ and the rest of the world.

## Usage ##

Include the following CSS in style document:

    .progress {
        position: absolute;
        background-color: #333;
        width: 0;
        height: 5px;
        z-index: 9999;
        transition: width 1s ease,
                    height .2s ease;
    }

Include the js just before the closing body tag of your document:

    <script src="/js/awty.min.js"></script>

Add it's most simple you can just call:

    awty.add();

And when you need to update the progress, simply call update passing the percentage complete.

    awty.update(10);

Now this is where it can get a little more interesting. With the above, AWTY will use it's defaults
in terms of the color of the progress meter, where inside the container it adds the element and the
element into which it is inject.

If however, you want to customize any of these, you can use the options object as described below.
A sample usage of options would be as follows:

    var options = {
        selector: '.top',
        bgcolor: red
    };
    awty.add(options);

From here on, you just call the update function as demonstrated before.

## Options ##

The options parameter is an object that allows you to customize the progress meter.
The properties are as follows:

    {
        selector: '.meter',
        position: 'beforebegin',
        bgcolor: '#fefefe'
    }

### selector [optional, default='body'] ###

Here you can specify any valid CSS 2.1 selector.

### position [optional, default='afterbegin'] ###

For a full list and explanation of the values, see the position property
of http://mdn.io/insertAdjacentHTML

### bgcolor [optional, default='#000'] ###

The background color of the progress meter.
