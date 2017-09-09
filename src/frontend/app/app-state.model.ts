import { App } from './app.reducer';
import { Task } from './tasks/task/task.model';
import { User } from './user/user.model'; 
import { AdminState } from './admin/admin-state.model';

export interface AppState {
  app: App,
  user: User,
  tasks: Task[],
  admin: AdminState,
}