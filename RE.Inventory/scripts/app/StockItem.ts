export class StockItem {
    Id : number;
    Name: string;
    Selected: boolean;
    Age: Date;

    public static create(): StockItem {
        var stockItem = new StockItem();
        stockItem.Name = "Super Dummy";
        stockItem.Id = 77;
        return stockItem;
    } 

};
