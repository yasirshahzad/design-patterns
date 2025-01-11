interface Request { username: string, password: string };

interface IHandler {
    handle: (request: Request) => IHandler;
}

abstract class Hanlder implements IHandler {
    private next: Hanlder | null = null;


    public setNext(handler: Hanlder): Hanlder {
        this.next = handler;
        return handler;
    }

    public handleNext(request: Request) {
        if (this.next == null) {
            return true;
        }

        return this.handle(request);
    }

    public abstract handle(request: Request): IHandler;


}
