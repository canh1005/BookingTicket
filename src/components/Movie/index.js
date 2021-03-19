import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { cardMovie } from '../../material-ui/style'



export default function Movie(props) {
    const {actionArea, card, content, title, subtitle, img} = cardMovie();
    const {movie} = props;
    return (
       
        <CardActionArea className={actionArea}>
            <Card className={card}>
                <CardMedia className={img} image={movie.hinhAnh}/>
                <CardContent className={content}>
                    <Typography className={title} variant={'h2'}>
                        {movie.tenPhim}
                    </Typography>
                    <Typography className={subtitle}>{movie.moTa}</Typography>
                    <Link to={`/detail/${movie.maPhim}`}>Chi Tiết</Link>
                </CardContent>
            </Card>
        </CardActionArea>
        
    )
}
