import React from "react";

function EmailAddress(props) {

    const { email } = props;

    return (
        <a href={`mailto:${email}`} className="uk-text-small">{email}</a>
    )
}

export default EmailAddress;