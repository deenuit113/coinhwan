import styled from "@emotion/styled";

export const Sidebar = styled.div<{ open: boolean, darkMode: boolean }>`
    width: 20%;
    height: 85vh;
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background-color: ${({ darkMode }) => (darkMode ? '#f0f0f0' : '#333')};
    overflow-y: auto;
    z-index: 1001;
    position: fixed;
    top: 12vh;
    left: ${({ open }) => (open ? "0" : "-20%")};
    transition: left 0.3s ease;
    padding-left: 15px;
    padding-right: 15px;

    @media all and (min-width:359px) and (max-width: 799px) {
        width: 30%;
        left: ${({ open }) => (open ? "0" : "-40%")};
    }
`;

export const Menu = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const MenuItem = styled.li`
    padding: 1rem;
    cursor: pointer;
    width: 90%;
`;

export const MenuTitle = styled.div<{ darkMode: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    color: ${({ darkMode }) => (darkMode ? '#333' : '#f0f0f0')};
    cursor: pointer;
    width: 100%;
`;

export const Icon = styled.span<{ darkMode: boolean }>`
    cursor: pointer;
    margin-left: 0.5rem;

    .FaAngleDown {
        color: ${({ darkMode }) => (darkMode ? '#333' : '#f0f0f0')};
    }
`;

export const SubMenu = styled.ul<{ darkMode: boolean }>`
    list-style-type: none;
    padding-left: 1rem;
    margin: 0;

    li {
        padding: 0.5rem;
        color: ${({ darkMode }) => (darkMode ? '#333' : '#f0f0f0')};

        &:hover {
            background-color: #e0e0e0;
        }
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;