import { useEffect } from "react";
import * as S from "../main/Login.styles"

export default function KakaoLogin(): JSX.Element {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        document.body.appendChild(script);
        const kakaoAppKey: string | undefined = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
        script.onload = () => {
            if (window.Kakao && kakaoAppKey !== undefined) {
                window.Kakao.init(kakaoAppKey); // 카카오 앱 키를 사용하여 초기화
                console.log(window.Kakao.isInitialized()); // Kakao SDK 초기화 확인
              } else {
                console.error("Kakao App Key is undefined.");
              }
        };
    }, []);

    const onClickKakaoLogin = () => {
        if (!window.Kakao?.Auth) return; // Kakao가 초기화되지 않았다면 함수 종료

        window.Kakao.Auth.login({
            success: function (authObj: any) {
                console.log(authObj);
                window.Kakao?.API.request({
                    url: "/v2/user/me",
                    success: (res: any) => {
                        console.log(res);
                    },
                    fail: function (error: any) {
                        console.log(error);
                    },
                });
            },
            fail: function (err: any) {
                console.error(err);
            },
        });
    };


    return (
        <>
            <S.KakaoLoginButton onClick={onClickKakaoLogin}>
                <p>카카오 아이디로 로그인</p>
            </S.KakaoLoginButton>
        </>
    );
}