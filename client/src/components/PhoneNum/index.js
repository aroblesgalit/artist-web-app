import React from "react";

function PhoneNum(props) {

    const { phone } = props;

    let phoneToArr = phone.toString().split("");
    phoneToArr.splice(3, 0, "-");
    phoneToArr.splice(7, 0, "-");

    return (
        <a href={`tel:+${phone}`} className="uk-text-small">{phoneToArr}</a>
    )
}

export default PhoneNum;