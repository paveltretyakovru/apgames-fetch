import { Source } from './shared/sources-list/source.model';
import { AdminUser } from './admin-users/admin-user.model';

export interface AdminState {
  users: AdminUser[],
  sources: Source[],
}