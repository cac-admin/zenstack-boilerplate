"use client";

import MDEditor from "@uiw/react-md-editor";

export default function MDViewer({ value }: { value: string }) {
    return (
        <div className="container min-h-full">
            <MDEditor.Markdown
                source={value}
                style={{
                    background: 'unset',
                    borderRadius: "1.4rem",
                    padding: "0.5rem",
                    font: "inherit",
                    minHeight: "36rem",
                }}
            />
        </div>
    );
}
