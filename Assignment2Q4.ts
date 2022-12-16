class item {
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;

    constructor(id:number,name:string,price:number,category:string)
    {
        this.itemid = id;
        this.itemname = name;
        this.itemprice = price;
        this.category = category;

    }
    ItemDetails = ()=> {console.log("itemid:" +this.itemid,"itemname:" +this.itemname,"itemprice:" +this.itemprice,"category:" +this.category);
}
}

let items = new item(1,'smart watch',900,'Electronics');
items.ItemDetails();
