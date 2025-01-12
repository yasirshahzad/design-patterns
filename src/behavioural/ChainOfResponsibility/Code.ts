interface IRequest { username: string, password: string };


abstract class Handler {
    private next: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.next = handler;
        return handler;
    }

    protected handleNext(request: IRequest): boolean {
        // Forward the request to the next handler if it exists
        if (this.next) {
            return this.next.handle(request); // Fix: Call `next.handle` instead of `this.handle`
        }

        // No more handlers in the chain
        return true;
    }

    public abstract handle(request: IRequest): boolean;
}



class LoginHandler extends Handler {
    public handle(request: IRequest) {
        if (request.username !== 'admin' || request.password !== '1234') {
            console.log('Login failed');
            return false;
        } else {
            console.log('Login Success');
            return super.handleNext(request);
        }
    }
}

class AdminHandler extends Handler {
    public handle(request: IRequest) {
        if (request.username !== 'admin') {
            console.log('User is not admin');
            return false;
        } else {
            console.log('Admin access granted');
            return super.handleNext(request);
        }
    }
}


const baseHandler = new LoginHandler().setNext(new AdminHandler());
baseHandler.handle({ username: 'admin', password: '1234' });




