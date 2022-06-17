import { useLogout } from "@pankod/refine-core";

export const LogoutButton = () => {
    const { mutate: logout } = useLogout();

    return <button onClick={() => logout()}>Logout</button>;
};