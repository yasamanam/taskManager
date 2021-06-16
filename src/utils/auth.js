export const isLoggedIn = () => {
  /*
   * Check if user is logged in and has token
   */
  if (localStorage.getItem("token")) {
    return true;
  }

  return false;
};

export const logout = () => {
  /*
   * Clear localStorage
   */

  localStorage.clear();
  window.location.reload();
};
