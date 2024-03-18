import React, { MouseEventHandler } from "react";

export default function Button(props: {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children: React.ReactNode
}) {
    return (
        <button
            type="submit"
            className={`${props.className} w-full h-12 mt-2 text-grey-67 bg-grey-22 text-left px-6 rounded-lg `}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}
