define(['knockout', 'text!./widget.html'], function(ko, htmlString) {
    function LikeWidgetViewModel(params) {
            this.chosenValue = params.value;
        }

        LikeWidgetViewModel.prototype.like = function() {
            this.chosenValue('like');
        };

        LikeWidgetViewModel.prototype.dislike = function() {
            this.chosenValue('dislike');
        };
 
    // Return component definition
    return { viewModel: LikeWidgetViewModel, template: htmlString };
});