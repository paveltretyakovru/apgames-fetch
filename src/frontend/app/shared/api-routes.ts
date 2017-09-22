export const serverHost = 'http://localhost:3002';
export const apiRoutes: any = {
  // Admin
  loadAdminState: `${serverHost}/api/admin/`,

  // Users
  login: `${serverHost}/api/user/login`,
  addUser: `${serverHost}/api/user/add`,
  loadUsers: `${serverHost}/api/user/list`,
  updateUserSources: `${serverHost}/api/user/sources`, // post

  // Sources
  loadSources: `${serverHost}/api/sources`, // get
};