/*
    Name: jQuery grid
    Plugin Url: https://umkka.github.io/jquery-grid
    Author: Umkka 
    Author Url: http://umkka.net  
    Year: 2016
*/

jQuery.fn.msrItems = function(options, load){
    return this.each(function() {
        var msr = $(this);
        if (typeof options == 'object' || !options) {
            lCount = 0, count = msr.find('.msrItem').length, col = 2, mar = 10;
            if (options) {
                if (options.colums) col = options.colums;
                if (options.margin) mar = options.margin;
            }
            init();
        } else if (options == 'init' || options == 'refresh') {
            msr.height(0), lCount = 0, count = msr.find('.msrItem').length;
            init();
        } else if (options == 'destroy')
            msr.find('.msrItem').each(function(index, el){
                setElement(el, 'initial', 'auto', 'initial', 'initial');
            });
        else if (options == "doload")
            doload();
        else 
            $.error('Method does not exist');
        function init() {
            width = (msr.width() - (col - 1) * mar) / col;
            left = [0], height = [0];
            for (var i = 1; i < col; i++) {
                left[i] = left[i - 1] + width + mar;
                height[i] = 0;
            }
            msr.css('position', 'relative').find('.msrItem').each(function(i, el) {
                setElement(el, 'absolute', width, left[lCount], height[lCount]);
                update($(el), i);
            });
        }
        function doload() {
            count = load.length;
            $.each(load, function(i, el) {
                item = $(msr).append(el).find('.msrItem').last();
                setElement(item, 'absolute', width, left[lCount], height[lCount]);
                update(item, i);
            });
        }
        function update(el, i) {
            height[lCount] += el.height() + mar;
            lCount ++;
            if (lCount == col) lCount = 0;
            if (i == count - 1 || lCount == 0) msr.height(Math.max(...height));
        }
        function setElement(el, pos, width, left, top) {
            $(el).css({
                'position': pos,
                'width': width,
                'left': left,
                'top': top
            });
        }
    });
};