class Facebook{
    private mobileNumber:number;
    private emailid:string;
    private permanentAddress:Address;
    private birthday:string;
    private presentJob:Job;
    private pastJob:Job;
    private college:string[];
    private currentAddress:Address;
    private pastAddress:Address;
    private relationship:String[];
    private professionalSkills: string[];
    private friends: Friends[];

    getMobileNumber = ()=>{
        return this.mobileNumber;
    }
    getEmailid = ()=>{
        return this.emailid;
    }
    getPermanentAddress = ()=>{
        return this.permanentAddress;
    }
    getBirthday = ()=>{
        return this.birthday;
    }
    getPresentJob = ()=>{
        return this.presentJob;
    }
    getPastJob = ()=>{
        return this.pastJob;
    }
    getCollege = ()=>{
        return this.college;
    }
    getCurrentAddress = ()=>{
        return this.currentAddress;
    }
    getPastAddress = ()=>{
        return this.pastAddress;
    }
    getRelationship =()=>{
        return this.relationship;
    }
    getProfessionalSkills = () =>{
        return this.professionalSkills;
    }
    getFriends = () =>{
        return this.friends;
    }

}

class Address{
    private city:String;
    private State:String;
    private moveDate:String;
}

class Friends{
    private name:String;
    private mutualFriends:number;
    private profilePictureLink:String;
    private totalFriends:number;
}

class Job{
    private company:String;
    private jobTitle:String;
    private jobDuration:String[];
    private state:String; 
}