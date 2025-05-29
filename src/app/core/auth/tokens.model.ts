import { User } from './user.model';

// TODO: Averiguar el tipo real.
export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  roles: string[];
  permissions: string[];
  user: User;
}
