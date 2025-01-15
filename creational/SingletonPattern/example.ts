class DB {
    private static instance: DB;
    private constructor() { }

    public static getInstance(): DB {
        if (!this.instance) {
            this.instance = new DB();
        }
        return this.instance;
    }

    read() {
        console.log("reading from DB");
    }
}

// Usage
const db = DB.getInstance();
db.read();
