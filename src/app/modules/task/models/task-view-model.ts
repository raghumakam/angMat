export class TaskViewModel
{
    public id : number;
    public title : string;
    public description : string;
    public createdAt : Date;
    public status : string[];
    public targetDate : Date;

    constructor() 
    {
        this.status = [];
        this.createdAt = new Date();
    }
}