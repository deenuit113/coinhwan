import { FaBitcoin, FaEthereum } from "react-icons/fa";

export const availableWidgets = [
    { type: 'bitcoin', name: '비트코인 가격', icon: <FaBitcoin /> },
    { type: 'ethereum', name: '이더리움 가격', icon: <FaEthereum /> },
    // 필요한 경우 다른 코인도 추가
];
