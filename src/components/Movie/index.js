import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Dialog, DialogContentText } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cardMovie } from '../../material-ui/style'



export default function Movie(props) {
    const { actionArea, card, content, title, subtitle, img, button, buttonShadow } = cardMovie();
    const { movie } = props;
    const [isOpen, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <CardActionArea className={actionArea}>
            <Card className={card}>
                <CardMedia className={img} image={movie.hinhAnh} />
                <CardContent className={content}>
                    <Typography className={title}>
                        {movie.tenPhim}
                    </Typography>
                    <Typography className={subtitle}>Đánh giá: {movie.danhGia}/10 điểm</Typography>
                    <Button className={button}>
                        <Link to={`/detail/${movie.maPhim}`}>Chi Tiết<Button className={buttonShadow} ></Button></Link>
                    </Button>
                    <Button className={button} onClick={() => setOpen(true)}>Trailer
                    <Button className={buttonShadow}></Button>
                    </Button>
                    <Dialog open={isOpen} onClose={handleClose}>
                        <DialogContentText>
                            <iframe src={movie.trailer}
                                allowfullscreen
                                title='video' width='500px' height="300px"/>
                        </DialogContentText>
                    </Dialog>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}
