import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: ${({ theme }) => theme.backgroundColor};
`;

export const MainContent = styled.div<{ sidebarOpen: boolean }>`
    width: ${({ sidebarOpen }) => (sidebarOpen ? "85%" : "100%")};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "15%" : "0")};
    transition: width 0.3s ease, margin-left 0.3s ease;
    padding: 1rem;
    height: 90%;
    overflow-y: auto;
    border: 3px solid red;
    flex-direction: column;

    #naverIdLogin {
        margin-bottom: 15px;
    }

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color:  ${({ theme }) => theme.scrollbarThumbColor};
        border-radius: 6px;
        transition: background-color 0.3s ease;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 8px;
    }

    &:hover {
        &::-webkit-scrollbar {
            width: 12px;
        }
    }

    @media all and (min-width:359px) and (max-width: 799px) {
        margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "15%" : "0")};
    }
`;

export const PageTitle = styled.h1`

`

export const LoginButton = styled.button`
    width: 230px;
    display: flex;
    font-weight: bolder;
    padding: 10px 20px 10px 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    align-text: center;
    flex-direction: row;
    svg {
        vertical-align: middle;
    }
    &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
`

export const KakaoLoginButton = styled.button`
    width: 230px;
    display: flex;
    font-weight: bolder;
    padding: 10px 20px 10px 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    height: 50px;
    justify-content: flex-end;
    align-items: center;
    align-text: center;
    flex-direction: row;
    &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
`