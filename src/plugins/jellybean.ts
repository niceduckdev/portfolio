const jellybean = {
    name: "jellybean",
    type: "dark",
    colors: {
        "editor.background": "#121212",
        "editor.foreground": "#dedede",
        "editorLineNumber.foreground": "#929292",
    },
    tokenColors: [
        {
            scope: ["comment", "punctuation.definition.comment"],
            settings: {
                foreground: "#929292",
                fontStyle: "italic",
            },
        },
        {
            scope: ["string", "punctuation.definition.string"],
            settings: {
                foreground: "#94b979",
            },
        },
        {
            scope: ["keyword", "storage.type", "storage.modifier"],
            settings: {
                foreground: "#e27373",
                fontStyle: "bold",
            },
        },
        {
            scope: [
                "constant.numeric",
                "constant.language",
                "constant.character",
            ],
            settings: {
                foreground: "#ffba7b",
            },
        },
        {
            scope: ["entity.name.function", "support.function"],
            settings: {
                foreground: "#97bedc",
            },
        },
        {
            scope: ["entity.name.type", "support.type", "support.class"],
            settings: {
                foreground: "#e1c0fa",
            },
        },
        {
            scope: ["entity.other.attribute-name"],
            settings: {
                foreground: "#00988e",
            },
        },
    ],
};

export default jellybean;
