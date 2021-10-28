import React, { FC, createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

type Props = {
    setIsLoggedIn?: Dispatch<SetStateAction<boolean>>,
    isLoggedIn: boolean,
    token: string
}

const AuthContext = createContext<Props>({
    isLoggedIn: false,
    token: ''
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: FC = ({
    children,
}) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const props = {
        isLoggedIn,
        setIsLoggedIn,
        token: isLoggedIn ? "username:password" : "",
    }

    return (
        <AuthContext.Provider
            value={props}
        >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider