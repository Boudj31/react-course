import React from "react";

export default function HTMLDetail({ summary, content }) {
    return <details>
        <summary>{ summary }</summary>
        <p>{ content }</p>

    </details>
}