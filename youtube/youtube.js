var Youtube = /** @class */ (function () {
    function Youtube() {
        var _this = this;
        this.getTitle = function () {
            return _this.title;
        };
        this.getUploader = function () {
            return _this.uploader;
        };
        this.getViewCount = function () {
            return _this.viewCount;
        };
        this.getUploadDate = function () {
            return _this.uploadDate;
        };
        this.getVideoLink = function () {
            return _this.videoLink;
        };
        this.getRelatedVideosLink = function () {
            return _this.relatedVideosLink;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.setComments = function (comments) {
            _this.comments = comments;
        };
        this.getCategories = function () {
            return _this.categories;
        };
        this.getSubscription = function () {
            return _this.subscriptions;
        };
    }
    return Youtube;
}());
