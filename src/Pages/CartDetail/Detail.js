import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from 'material-ui-rating';
import { useLocation } from 'react-router-dom';
import Reviews from './Reviews';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '800px',
        marginTop: '50px',
        padding: '50px',
        boxShadow: 'none'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5%',
        width: '40%',
    },
    content: {

        alignItems: 'center',

    },
    cover: {
        width: '60%',
        borderRadius: '20px',
        backgroundColor: 'grey'
    },

}));

const CartDetail = (props) => {
    const location = useLocation();
    console.log(location.state.detail);
    const classes = useStyles();
    const theme = useTheme();
    const src = 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';




    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={location.state.detail.image}
                    title="Live from space album cover"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>

                        <h1 style={{ fontWeight: 'bold', lineHeight: '100px', fontSize: '50px', color: 'black' }}>
                          {location.state.detail.name}
                        </h1>
                        <p >
                        <Rating
                                    value={5}
                                    max={5}
                                    onChange={(value) => console.log(`Rated with value ${value}`)}
                                    style={{display: 'inline'}}
                                />  (1 customer review)
                        </p>
                        <h2 style={{ fontWeight: 'bold', lineHeight: '50px', fontSize: '40px', color: 'black' }}>
                          {`$ ${location.state.detail.price}`}
                        </h2>
                        <p style={{ fontSize: '18px', marginTop: '40px', color: 'grey' }}>
                        {location.state.detail.description}
                        </p>
                        <div style={{ marginTop: '40px' }}>
                            <input type='number' style={{ fontSize: '18px', width: '90px', borderRadius: '50px', fontWeight: 'bold', padding: '10px', paddingLeft: '25px', border: '1px solid black' }} />
                            <button style={{ fontSize: '20px', width: '200px', borderRadius: '50px', padding: '10px', paddingLeft: '25px', marginLeft: '20px', border: 'none', backgroundColor: 'red', color: 'white', fontWeight: 'normal' }}>Add to cart</button>
                        </div>
                        <h5 style={{ marginTop: '40px', fontWeight: 'normal' }}>
                            Category: <span style={{ color: 'red' }}> Headphone</span>
                        </h5>

                    </CardContent>

                </div>

            </Card>

            <hr style={{ marginTop: '50px' }} />
            <Reviews />
        </>
    );
}

export default CartDetail;