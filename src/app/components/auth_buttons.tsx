"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
    return (
        <button onClick={() => signIn()}>サインイン</button>
    );
};

export const LogoutButton = () => {
    return (
        <button onClick={() => signOut()}>サインアウト</button>
    );
};
