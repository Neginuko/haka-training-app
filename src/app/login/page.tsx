import { LoginButton, LogoutButton } from "@/app/components/auth_buttons";

export default async function Home() {
    return (
        <main>
            <div>
                <LoginButton/>
                <LogoutButton/>
            </div>
        </main>
    );
};