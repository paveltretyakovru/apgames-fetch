import { Source } from './shared/filters/sources/source.model';
import { AdminUser } from './admin-users/admin-user.model';

export interface AdminState {
  users: AdminUser[],
  sources: Source[],
}