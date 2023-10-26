import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authentication } from '../AuthHelper/Firebase-config';
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
display: flex;
flex-direction: column; 
`
const LoginMessage = styled.div`
font-size: 20px;
margin-top: -20px;
margin-bottom: -20px;
`
const Button = styled.div`
background-color: #2caae1;
font-size: 20px;
color: white;
width: 119px;
height: 32px;
border-radius: 16px;
margin-right: 10px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
align-self: end;
margin-top: 15px;
padding-bottom:3px;
margin-bottom: 15px;
`
const Label = styled.div`
color: black;
font-size: 20px;
margin-left: 60px;
margin-top: 10px;
margin-bottom: -20px;
align-self: flex-start;
`

const LoginScreen = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState()
    const signIn = () => {
        const provider = new TwitterAuthProvider();
        signInWithPopup(authentication, provider).then(async (res) => {
            // Getting credentials
            const credential = TwitterAuthProvider.credentialFromResult(res);
            // Access Token
            const accessToken = credential.accessToken;
            // Secret Access Token
            const accessTokenSecret = credential.secret;
            localStorage.setItem('user', JSON.stringify({ ...res.user, handle: res._tokenResponse.screenName }));
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('accessTokenSecret', accessTokenSecret);
            setUser(res.user)
        }).catch(err => {
            console.log("error", err)
        })
    }
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user'))) {
            navigate('/Main')
        }
    }, [navigate])

    useEffect(() => {
        if (user) {
            navigate('/Main')
        }
    }, [user, navigate])

    return (
        <Container>
            <Label>EmoTool</Label>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img alt="twitter-logo" src={require('../assets/twitter-logo.png')} />
                <LoginMessage>Login Into Your Twitter Account</LoginMessage>
            </div>

            <Button onClick={signIn}>Login</Button>
        </Container>
    );
}
export default LoginScreen;
