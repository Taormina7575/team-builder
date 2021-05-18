import React from 'react';
import Member from './Member';

export default function MemberList({members}) {
    return (
        <div>
            {
                members.map((member, idx) => {
                    return (
                        <Member key={idx} member={member}></Member>
                    )
                    
                })
            }
        </div>
    )
}