import React from "react";

export function Button({text, onClick}) {
    return (
        <button type="button" className="btn-nav" onClick={onClick}>
            {text}
        </button>
    )
}