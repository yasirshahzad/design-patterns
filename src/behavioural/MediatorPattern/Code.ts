interface Colleague {
    receiveMessage(message: string): void;
    requestLanding(): void;
    getName(): string;
}

interface IMediator {
    addPlane(plane: Colleague): void;
    notifyPlanes(message: string): void;
    requestForLanding(plane: Colleague): boolean;
    finishLanding(plane: Colleague): void;
}

class Plane implements Colleague {
    private mediator: IMediator;
    public name: string;

    constructor(name: string, mediator: IMediator) {
        this.mediator = mediator;
        this.name = name;
    }

    receiveMessage(message: string): void {
        console.log(this.name, "received:", message);
    }

    requestLanding(): void {
        console.log(this.name, "is requesting to land.");
        const requestResponse = this.mediator.requestForLanding(this);

        if (requestResponse) {
            console.log(this.name, "landing granted. Landing now...");
            setTimeout(() => {
                console.log(this.name, "has landed successfully.");
                this.mediator.finishLanding(this);
            }, 2000);
        } else {
            console.log(this.name, "landing denied. Waiting for clearance...");
        }
    }

    getName(): string {
        return this.name

    }
}

class ControlRoom implements IMediator {
    private currentLandingPlane: Colleague | null = null;
    private planes: Colleague[] = [];

    addPlane(plane: Colleague): void {
        this.planes.push(plane);
    }

    notifyPlanes(message: string): void {
        for (const plane of this.planes) {
            plane.receiveMessage(message);
        }
    }

    finishLanding(plane: Colleague): void {
        if (this.currentLandingPlane === plane) {
            console.log(plane.getName(), "has completed landing. Runway is now clear.");
            this.currentLandingPlane = null;
            this.notifyPlanes("Runway is now clear.");
        }
    }

    requestForLanding(plane: Colleague): boolean {
        if (this.currentLandingPlane) {
            console.log(plane.getName(), "landing request denied. Runway is occupied by", this.currentLandingPlane.getName());
            return false;
        } else {
            this.currentLandingPlane = plane;
            console.log(plane.getName(), "landing request accepted.");
            this.notifyPlanes(`${plane.getName()} is landing. Please hold your positions.`);
            return true;
        }
    }
}

// Creating instances
const controlRoom = new ControlRoom();
const planeA = new Plane("Plane A", controlRoom);
const planeB = new Plane("Plane B", controlRoom);
const planeC = new Plane("Plane C", controlRoom);

// Adding planes to the control room
controlRoom.addPlane(planeA);
controlRoom.addPlane(planeB);
controlRoom.addPlane(planeC);

// Simulating landing requests
planeA.requestLanding();
planeB.requestLanding();
setTimeout(() => {
    planeC.requestLanding();
}, 3000);
