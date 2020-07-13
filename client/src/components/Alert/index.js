import React from "react";
import "./alert.css";

function Alert(props) {

    const { alertOn, alertItem, alertType, alertState } = props;

    return (
        <React.Fragment>
            {
                alertOn ? (
                    <div className={`alert uk-alert-${alertState === "successful" ? "success" : "danger"}`} uk-alert="true">
                        <p className="uk-margin-remove-top uk-margin-remove-bottom uk-margin-right uk-flex uk-flex-middle">
                            <span uk-icon={`${alertState === "successful" ? "check" : "ban"}`} className="uk-margin-small-right" />
                            {`${alertItem} ${alertType} ${alertState}`}
                        </p>
                        <span className="alert-close uk-alert-close" uk-close="true" />
                    </div>
                ) : ""
            }
        </React.Fragment>
    )
}

export default Alert;