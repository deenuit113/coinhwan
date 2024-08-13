import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "../util/firebase";
import * as S from "./Login.styles"
import { useSidebar } from "../sidebar/SidebarContext";
import { useRecoilState } from "recoil";
import { darkMode } from "../atoms";
import SideBar from "../sidebar/Sidebar";
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginPage(): JSX.Element {

    const { sidebarOpen } = useSidebar();
    const [isDarkMode] = useRecoilState(darkMode);

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("User Info:", user);
        } catch (error) {
            console.error("Error during login", error);
        }
    };

    return (
        <S.Container $darkMode={isDarkMode}>
            <SideBar />
                <S.MainContent sidebarOpen={sidebarOpen} $darkMode={isDarkMode}>
                    <h1>Login Page</h1>
                    <S.LoginButton onClick={handleLogin}>
                        <GoogleIcon /> Sign in with Google
                    </S.LoginButton>
                </S.MainContent>
        </S.Container>
    );
}