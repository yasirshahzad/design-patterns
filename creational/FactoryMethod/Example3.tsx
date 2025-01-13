import React, { useEffect } from "react";

interface DB {
  connect(): void;
  readData(query: string): any; // Method to read data
  createData(record: any): void; // Method to insert data
}
class MySQL implements DB {
  connect() {
    console.log("MySQL connected");
  }

  readData(query: string): any {
    console.log(`Reading data from MySQL with query: ${query}`);
    return { data: "Sample MySQL Data" }; // Mocked data
  }

  createData(record: any): void {
    console.log(`Inserting data into MySQL: ${JSON.stringify(record)}`);
  }
}

class PostgreSQL implements DB {
  connect() {
    console.log("PostgreSQL connected");
  }

  readData(query: string): any {
    console.log(`Reading data from PostgreSQL with query: ${query}`);
    return { data: "Sample PostgreSQL Data" }; // Mocked data
  }

  createData(record: any): void {
    console.log(`Inserting data into PostgreSQL: ${JSON.stringify(record)}`);
  }
}

abstract class DatabaseFactory {
  private db: DB | null = null;

  abstract createDb(): DB;

  getDB(): DB {
    if (!this.db) {
      this.db = this.createDb();
      this.db.connect(); // Ensure connection is established
    }
    return this.db;
  }
}

class MySQLFactory extends DatabaseFactory {
  createDb(): DB {
    return new MySQL();
  }
}

class PostgreSQLFactory extends DatabaseFactory {
  createDb(): DB {
    return new PostgreSQL();
  }
}

export default function Example3() {
  useEffect(() => {
    function databaseOperations(factory: DatabaseFactory) {
      const db = factory.getDB();

      // Perform database operations
      const data = db.readData("SELECT * FROM users");
      console.log("Retrieved Data:", data);

      db.createData({ id: 1, name: "John Doe" });
    }

    // Usage
    const mySQLFactory = new MySQLFactory();
    databaseOperations(mySQLFactory);
    // Output:
    // MySQL connected
    // Reading data from MySQL with query: SELECT * FROM users
    // Retrieved Data: { data: 'Sample MySQL Data' }
    // Inserting data into MySQL: {"id":1,"name":"John Doe"}

    const postgreSQLFactory = new PostgreSQLFactory();
    databaseOperations(postgreSQLFactory);
    // Output:
    // PostgreSQL connected
    // Reading data from PostgreSQL with query: SELECT * FROM users
    // Retrieved Data: { data: 'Sample PostgreSQL Data' }
    // Inserting data into PostgreSQL: {"id":1,"name":"John Doe"}
  }, []);
  return <div>Example3</div>;
}
