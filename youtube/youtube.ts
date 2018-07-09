class Youtube {

    private title: String;
    private uploader: String;
    private viewCount: number;
    private uploadDate: String;
    private videoLink: String;
    private relatedVideosLink: String[];
    private comments: String[];
    private categories: String[];
    private subscriptions: String[];

    getTitle = ()=>{
        return this.title;
    }

    getUploader = ()=>{
        return this.uploader;
    }

    getViewCount = ()=>{
        return this.viewCount;
    }

    getUploadDate = ()=>{
        return this.uploadDate;
    }

    getVideoLink = ()=>{
        return this.videoLink;
    }

    getRelatedVideosLink = ()=>{
        return this.relatedVideosLink;
    }

    getComments = ()=>{
        return this.comments;
    }
    setComments = (comments)=>{
        this.comments = comments;
    }

    getCategories = ()=>{
        return this.categories;
    }

    getSubscription = ()=>{
        return this.subscriptions;
    }


}