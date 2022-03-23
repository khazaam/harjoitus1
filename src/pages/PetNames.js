import '@mui/material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Icon, Input, Typography } from '@mui/material';
import React from 'react';
import '../App.css'
import { useState } from 'react';

const SecondAssigmentPets = () => {

    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The message you sent was: ${message}`)
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <header>
                <Card sx={{maxWidth:900}}>
                    <CardMedia
                        component="img"
                        height="10%"
                        image="https://thumbs.dreamstime.com/z/lab-dog-1696457.jpg"
                        alt="labrador doggo"
                    />
                    <CardContent>
                        <Typography id="typoGraph">This is a dog</Typography>
                        <Typography variant="body1">
                            This is a labrador dog. They are extremely active dogs!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Input id="outlined-basic" label="Send message to dog" variant="outlined" type="text" value={message} onChange={(e) => setMessage(e.target.value)}></Input>
                        <Button type="submit">SEND MESSAGE</Button>
                    </CardActions>
                </Card>
            </header>
        </div>
        </form>

        );
    };

export default SecondAssigmentPets;