import moment from "moment";

export class Expense {
    id;
    day;
    createdAt;
    category;
    description;
    amount;
    
    constructor({ day, createdAt, category, description, amount, id = 0 } = {}) {
        this.day = day || moment().format("YYYY-MM-DD");
        this.createdAt = createdAt || new Date().getTime()
        this.category = category = '';
        this.description = description || '';
        this.amount = amount || '';
        this.id = id;
    }

}