import React from 'react';
import styled from 'styled-components'

const Title = styled.h3`
 font-size: 3rem;
 font-weight: bolder;
`
const Info = styled.p`
 font-size: 2rem;
 font-weight: bold;
`

const Bio = styled.p`
 font-size: 1.5rem;
`

export default function Member({member}) {
    console.log(member)
    return (
        <div>
            <Title>{member.title}</Title>
            <Info>{member.fname}</Info>
            <Info>{member.lname}</Info>
            <Info>{member.age}</Info>
            <Bio>{member.Biography}</Bio>
        </div>
    )
}