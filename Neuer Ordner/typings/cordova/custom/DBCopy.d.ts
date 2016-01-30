
interface sqlDB {
    copy(dbname: string, location: number, success: any, error: any): void; 

    remove(dbname: string, location: number, success: any, error: any): void; 
}
