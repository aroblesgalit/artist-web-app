import React from "react";

function Alert(props) {

    const { alertOn, alertItem, alertType, alertState } = props;

    return (
        <React.Fragment>
            {
                alertOn ? (
                    <p
                        className={`uk-text-${alertState === "successful" ? "success" : "danger"} uk-text-light`}
                    >
                        {`${alertItem} ${alertType} ${alertState}`}
                    </p>
                ) : ""
            }
        </React.Fragment>
    )
}

export default Alert;