import type { TipTapEditorProps } from "../../types";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';
import classNames from "classnames/bind";
import styles from "./TiptapEditor.module.scss";

const cx = classNames.bind(styles);
const TiptapEditor = ({ value, onChange }: TipTapEditorProps) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        onUpdate: ({ editor }) => {
            onChange?.(editor.getHTML());
        },
    });

    return (
        <div className={cx("wrapper")}>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} className={cx("wrapper__content")} />
        </div>
    );
};

export default TiptapEditor;