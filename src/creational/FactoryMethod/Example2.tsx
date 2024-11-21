import { useEffect } from "react";

interface Notification {
  sendNotification(input: string): void;
}

class EmailNotification implements Notification {
  sendNotification(input: string): void {
    console.log(`Sending Email: ${input}`);
  }
}

class SMSNotification implements Notification {
  sendNotification(input: string): void {
    console.log(`Sending SMS: ${input}`);
  }
}

abstract class NotificationFactory {
  // Marked as abstract to enforce overriding
  abstract createNotification(): Notification;

  // this method is common between SMS and Email notification therefore it will pulled up - Generalization

  sendNotification(message: string): void {
    const notification = this.createNotification();
    notification.sendNotification(message);
  }
}
class SMSNotificationService extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}

class EmailNotificationService extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

export default function Example2() {
  // Client code
  useEffect(() => {
    const emailService = new EmailNotificationService();
    emailService.sendNotification("Hello via Email!");

    const smsService = new SMSNotificationService();
    smsService.sendNotification("Hello via SMS!");
  }, []);

  return <div>Example2</div>;
}
