import React from "react";
import {If, Else} from "./If";

export function UserInfo(props) {
    const user = props.user || {}
    return (
        <div>
            {/*  --Simple condition verification--*/}
            {/* <If test={user && user.name}>
                Welcome <strong>{ user.name }</strong>!
            </If>
            <If test={!user || !user.name}>
                Welcome <strong>my friend!</strong>
            </If> */}
                
            {/*  --Complex condition verification--*/}
            <If test={user && user.name}>
                Welcome <strong>{ user.name }</strong>!
                <Else>
                    Welcome <strong>my friend!</strong>
                </Else>
            </If>
        </div>
    )
}