import { AuthProvider } from "@pankod/refine-core";
export const authProvider: AuthProvider = {
    login: ({ username, password, remember }) => {
        if (username === "admin") {
            localStorage.setItem("username", username);
            return Promise.resolve();
        }

        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem("username")
            ? Promise.resolve()
            : Promise.reject(),
    getPermissions: () => Promise.resolve(["admin"]),

}