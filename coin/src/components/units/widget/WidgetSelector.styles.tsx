import styled from "styled-components";

export const SelectorContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.9);
    border-top: 1px solid #ccc;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1002;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SelectorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
`;

export const WidgetOptionContainer = styled.div<{darkMode: boolean}>`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    overflow-x: auto; /* 수평 스크롤바를 허용 */
    white-space: nowrap; /* 자식 요소들이 한 줄로 표시되도록 */

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color:  ${({ darkMode }) => (darkMode ? '#888' : '#f0f0f0')};
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
`

export const WidgetOption = styled.div`
    display: inline-block;
    margin: 10px;
    cursor: pointer;
    width: 250px; /* 위젯의 폭에 맞춤 */
`;