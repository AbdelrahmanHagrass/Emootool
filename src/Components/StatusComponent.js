import React from "react"
import recommendations from '../recommendations/recommend.json'
import styled from "styled-components"
import _ from "lodash"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    margin: 0px 15px;
`

const Link = styled.a`
    font-size: 20px;
    font-weight: 700;
    font-family: Quicksand,sans-serif;
    padding-bottom:5px;
    margin-bottom: 5px;
    color: blue;
`

const Text = styled.div`
    font-family: Quicksand,sans-serif;
    font-size: 20px;
    font-weight: 700
`

const Title = styled.div`
    text-decoration: underline;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 15px;
`
const RecommendationWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Status({ status, userToUnfollow }) {
    return (
        <Container>
            {recommendations.map((emotion) => {
                return emotion.label.toLocaleLowerCase() === status.label ?
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Your Status is <div style={{ color: emotion.color }} >{emotion.label} </div> </h1>
                        <Title>Our Advice</Title>
                        <Text>"{emotion.advice}"</Text>
                        <Title>Our Recommendation</Title>
                        <RecommendationWrapper>
                            {_.shuffle(emotion.content).slice(0, 3).map(r => {
                                return <Link target="_blank" href={r.link}>{r.title}</Link>
                            })}
                        </RecommendationWrapper>
                        {userToUnfollow &&
                            <>
                                <Title>User You should Unfollow</Title>
                                <div style={{ fontSize: 15, marginBottom: 10 }}>{userToUnfollow}</div>
                            </>
                        }
                    </div> :
                    <div></div>
            })}
        </Container>
    )
}