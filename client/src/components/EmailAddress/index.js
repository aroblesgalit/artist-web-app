import React from "react";

function EmailAddress(props) {

    const { email } = props;

    return (
        <a href={`mailto:${email}`} className="uk-margin-small">{email}</a>
    )
}

export default EmailAddress;