import React from "react";
import {Link} from "react-router-dom";

const BookTerm = (props) => {
    return (
        <tr>
            <th scope={"col"}>{props.term.name}</th>
            <th scope={"col"}>{props.term.category}</th>
            <th scope={"col"}>{props.term.author.name}</th>
            <th scope={"col"}>{props.term.available_copies}</th>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
            </td>
        </tr>
    );
}

export default BookTerm;