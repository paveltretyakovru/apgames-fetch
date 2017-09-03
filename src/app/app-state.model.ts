import { Task } from './tasks/task/task.model';
import { User } from './user/user.model'; 

export interface AppState {
  user: User,
  tasks: Task[],
}