import { Button, Space } from "antd";
import { BoldOutlined, ItalicOutlined, UnorderedListOutlined } from "@ant-design/icons";
import type { MenuBarProps } from "../../types";


const MenuBar = ({ editor }: MenuBarProps) => {
    if (!editor) return null;

    return (
        <div className="editor-toolbar">
            <Space size={4}>
                <Button
                    type={editor.isActive('bold') ? 'primary' : 'text'}
                    icon={<BoldOutlined />}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                />
                <Button
                    type={editor.isActive('italic') ? 'primary' : 'text'}
                    icon={<ItalicOutlined />}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                />
                <Button
                    type={editor.isActive('bulletList') ? 'primary' : 'text'}
                    icon={<UnorderedListOutlined />}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className="ml-2"
                >
                    List
                </Button>
                <Button
                    type={editor.isActive('heading', { level: 2 }) ? 'primary' : 'text'}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                >
                    H2
                </Button>
            </Space>
        </div>
    );
};
export default MenuBar;