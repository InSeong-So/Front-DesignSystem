declare type TextareaBorderProps = {
    state: 'inactive' | 'active' | 'focus' | 'error' | 'disabled';
    theme?: string;
};
export declare const TextareaBorder: import("styled-components").StyledComponent<"div", any, TextareaBorderProps, never>;
declare type TextareaProps = {
    disabled?: boolean;
    hasNotScrollBar?: boolean;
    theme?: string;
    height: string;
};
export declare const Textarea: import("styled-components").StyledComponent<"textarea", any, TextareaProps, never>;
export declare const TextareaWrapper: import("styled-components").StyledComponent<"div", any, {
    width: string;
}, never>;
export declare const LabelWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Description: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const AsteriskWrapper: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const CharLimitWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type CharCountProps = {
    error: boolean;
};
export declare const CharCount: import("styled-components").StyledComponent<"span", any, CharCountProps, never>;
export {};
