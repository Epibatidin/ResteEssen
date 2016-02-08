export class StockItem {
    Id: number;
    Quantity: number;
    Name: string;
    Color:string;
    Age: Date;

    public static create(): StockItem {
        var stockItem = new StockItem();
        stockItem.Name = "Super Dummy";
        stockItem.Id = 77;
        return stockItem;
    } 
};
