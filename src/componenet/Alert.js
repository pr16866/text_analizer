import React from 'react'

export default function Alert(props) {
    return (
props.alert && <div>
            <div className={`alert alert-${props.alert.color}`} role="alert">
                <b>{props.alert.message}</b>
            </div>
        </div>
    )
}

