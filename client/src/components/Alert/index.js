import React from "react";

function Alert(props) {

    const { alertOn, alertItem, alertType, alertState } = props;

    return (
        <React.Fragment>
            {
                alertOn ? (
                    <p
                        className={`uk-text-${alertState === "successful" ? "success" : "danger"} uk-text-light uk-text-small uk-flex uk-flex-middle`}
                    >
                    <span uk-icon={`${alertState === "successful" ? "check" : "ban"}`}  className="uk-margin-small-right" />
                        {`${alertItem} ${alertType} ${alertState}`}
                    </p>
                ) : ""
            }
        </React.Fragment>
    )
}

export default Alert;