import { useState } from "react";
import * as S from "./Main.styles";
import { useSidebar } from "../commons/SidebarContext";
import SideBar from "./Sidebar";
import { FaPlus } from "react-icons/fa";
import Widget from "./Widget";
import { useRecoilState } from "recoil";
import { darkMode } from "../commons/atoms";
import { useRouter } from 'next/router';

export default function MainPage(): JSX.Element {
    const { sidebarOpen } = useSidebar();
    const [widgets, setWidgets] = useState<string[]>([]);
    const [menuOpen, setMenuOpen] = useState<number | null>(null);

    const [isDarkMode, setIsDarkMode] = useRecoilState(darkMode);

    const addWidget = () => {
        setWidgets([...widgets, `정보 ${widgets.length + 1}`]);
    };

    const moveWidget = (dragIndex: number, hoverIndex: number) => {
        const updatedWidgets = [...widgets];
        const [draggedWidget] = updatedWidgets.splice(dragIndex, 1);
        updatedWidgets.splice(hoverIndex, 0, draggedWidget);
        setWidgets(updatedWidgets);
    };

    const removeWidget = (index: number) => {
        setWidgets(widgets.filter((_, i) => i !== index));
        setMenuOpen(null);
    };

    return (
        <S.Container darkMode={isDarkMode}>
            <SideBar />
            <S.MainContent sidebarOpen={sidebarOpen} darkMode={isDarkMode}>
                {widgets.map((widget, index) => (
                    <Widget
                        key={index}
                        index={index}
                        widget={widget}
                        removeWidget={removeWidget}
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                        moveWidget={moveWidget}
                    />
                ))}
                <S.WidgetAdd darkMode={isDarkMode}>
                    <S.AddWidgetButton onClick={addWidget} darkMode={isDarkMode}>
                        <FaPlus />
                        위젯 추가
                    </S.AddWidgetButton>
                </S.WidgetAdd>
            </S.MainContent>
        </S.Container>
    );
}