import { App } from './app.reducer';
import { Task } from './tasks/task/task.model';
import { User } from './user/user.model'; 
import { UserAdminState as UserAdmin } from './user/user-admin/user-admin-state.model';

export interface AppState {
  app: App,
  user: User,
  tasks: Task[],
  userAdmin: UserAdmin,
}