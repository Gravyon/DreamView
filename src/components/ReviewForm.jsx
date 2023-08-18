import React from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { reviewSchema } from '../validation/reviewSchema';
import { useFormik } from 'formik';

const ReviewForm = () => {
    const onReview = (values, { resetForm }) => {
        try {
            console.log('Review submitted:', values);
            alert('Review submitted');
            resetForm()
        } catch (error) {
            alert(error)
        }

    };

    const { handleChange, handleSubmit, handleReset, values, errors } = useFormik({
        initialValues: { movie: '', name: '', email: '', review: '' },
        validationSchema: reviewSchema,
        onSubmit: onReview,
    });

    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: '100vh' }}>

            <form style={{
                width: '100%',
                maxWidth: '600px',
                padding: '20px',
                margin: '20px',
            }} onSubmit={handleSubmit}
                onReset={handleReset}
            >


                <div
                    style={{
                        // width: '50%',
                        // margin: '30px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',

                    }}
                >
                    <Paper style={{ marginTop: "100px", padding: '40px' }} elevation={3}>
                        <Typography style={{ display: "flex", justifyContent: "left" }} variant="h5" gutterBottom>
                            Deja tu opinion
                        </Typography>
                        <TextField
                            label="Selecciona pelicula"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="movie"
                            id="movie"
                            onChange={handleChange}
                            value={values.movie}
                        />
                        <Typography style={{ color: 'red' }}>{errors.movie}</Typography>
                        <TextField
                            label="Nombre completo"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            value={values.name}
                        />
                        <Typography style={{ color: 'red' }}>{errors.name}</Typography>
                        <TextField
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        <Typography style={{ color: 'red' }}>{errors.email}</Typography>
                        <TextField
                            label="Resena"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            name="review"
                            id="review"
                            onChange={handleChange}
                            value={values.review}
                        />
                        <Typography style={{ color: 'red' }}>{errors.review}</Typography>
                        <div
                            style={{
                                display: 'flex',
                                padding: '5px',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                style={{ backgroundColor: '#554F95' }}
                            >
                                Submit Review
                            </Button>
                            <Button
                                type="reset"
                                variant="contained"

                            >
                                Clear Fields
                            </Button>
                        </div>
                    </Paper>
                </div>
            </form></div>
    );
};

export default ReviewForm;
