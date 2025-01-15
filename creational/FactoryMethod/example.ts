interface DBProduct {
    read(): void;
    write(): void;
    connect(): void;
    disconnect(): void;
}

class MySQL implements DBProduct {
    read(): void {
        console.log("Reading from MySQL DB");
    }
    write(): void {
        console.log("Writing to MySQL DB");
    }
    connect(): void {
        console.log("Connecting to MySQL database...");
    }
    disconnect(): void {
        console.log("Disconnecting from MySQL database...");
    }
}

class MSSQL implements DBProduct {
    read(): void {
        console.log("Reading from MSSQL DB");
    }
    write(): void {
        console.log("Writing to MSSQL DB");
    }
    connect(): void {
        console.log("Connecting to MSSQL database...");
    }
    disconnect(): void {
        console.log("Disconnecting from MSSQL database...");
    }
}

abstract class DBFactory {
    instance: DBProduct = this.createDB();

    protected abstract createDB(): DBProduct;

    public static getInstance () {}
}

class MSSQLFactory extends DBFactory {
    protected createDB(): DBProduct {
        return new MSSQL();
    }
}

class MySQLFactory extends DBFactory {
    protected createDB(): DBProduct {
        return new MySQL(); // Corrected to return MySQL instance
    }
}

