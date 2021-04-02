export const BackgroundHome = `.home { \n
    color: $white;\n
    text-align: center;\n
    .title {\n
        font-size: 1.5rem;\n
        font-weight: bold;\n
        &:hover: {\n
            cursor: pointer;\n
        }\n
    }\n
    .subtitle {\n
        fontSize: 1.25rem;\n
    }\n
    .paragraph {\n
        fontSize: 12px,\n
    }\n
    .button {\n
        border-radius: 20px;\n
        padding: 10px;\n
        margin: 5px;\n
        border: none;\n
        background-color: $white;\n
        color: $black;\n
        &:hover: {\n
            transition: background-color 1s ease, color 1.05s ease, border .9s;\n
            background-color: 'transparent';\n
            color: $white;\n
            border: 1px solid $white;\n
            cursor: pointer;\n
        }\n
        &:focus: {\n
            outline: none\n
        }\n
    }\n
}`;