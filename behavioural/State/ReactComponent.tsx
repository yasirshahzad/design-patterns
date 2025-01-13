import React, { useEffect, useState } from "react";

interface TaskState {
  start(task: Task): void;
  complete(task: Task): void;
}

class ToDoState implements TaskState {
  start(task: Task): void {
    task.setMessage(`Task "${task.name}" is now In Progress.`);
    task.setState(new InProgressState());
  }

  complete(task: Task): void {
    task.setMessage(`Cannot complete task "${task.name}" that hasn't started.`);
  }
}

class InProgressState implements TaskState {
  start(task: Task): void {
    task.setMessage(`Task "${task.name}" is already In Progress.`);
  }

  complete(task: Task): void {
    task.setMessage(`Task "${task.name}" is now Done.`);
    task.setState(new DoneState());
  }
}

class DoneState implements TaskState {
  start(task: Task): void {
    task.setMessage(`Cannot start task "${task.name}" as it's already Done.`);
  }

  complete(task: Task): void {
    task.setMessage(`Task "${task.name}" is already Done.`);
  }
}

class Task {
  private currentState: TaskState;
  public currentStateName: string; // Track current state name
  public message: string; // Track message for the UI

  constructor(public id: number, public name: string, initialState: TaskState) {
    this.currentState = initialState;
    this.currentStateName = initialState.constructor.name;
    this.message = ""; // Initialize with an empty message

    console.log(id, initialState.constructor);
  }

  setState(state: TaskState): void {
    this.currentState = state;
    this.currentStateName = state.constructor.name;
  }

  setMessage(message: string): void {
    this.message = message;
  }

  start(): void {
    this.currentState.start(this);
  }

  complete(): void {
    this.currentState.complete(this);
  }
}

// Mock API calls
const fetchTasksFromServer = async (): Promise<
  { id: number; name: string; state: string }[]
> => {
  return [
    { id: 1, name: "Task 1", state: "todo" },
    { id: 2, name: "Task 2", state: "inprogress" },
    { id: 3, name: "Task 3", state: "done" },
  ];
};

const updateTaskOnServer = async (task: Task): Promise<void> => {
  console.log(
    `Updating task "${task.name}" with state: ${task.currentStateName}`
  );
};

// Main Component
const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchAndInitializeTasks = async () => {
      const taskData = await fetchTasksFromServer();

      const initializedTasks = taskData.map((data) => {
        let initialState: TaskState;
        switch (data.state) {
          case "inprogress":
            initialState = new InProgressState();
            break;
          case "done":
            initialState = new DoneState();
            break;
          default:
            initialState = new ToDoState();
        }
        return new Task(data.id, data.name, initialState);
      });

      setTasks(initializedTasks);
    };

    fetchAndInitializeTasks();
  }, []);

  const handleStart = async (task: Task) => {
    task.start();
    await updateTaskOnServer(task);
    setTasks([...tasks]); // Trigger re-render
  };

  const handleComplete = async (task: Task) => {
    task.complete();
    await updateTaskOnServer(task);
    setTasks([...tasks]); // Trigger re-render
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <strong>{task.name}</strong>
            </div>
            <div>
              <em>State: {task.currentStateName}</em>
            </div>
            <div>
              <span>{task.message}</span>
            </div>
            <button onClick={() => handleStart(task)}>Start</button>
            <button onClick={() => handleComplete(task)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
