import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const ContainerStructure = (props) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container >

                <Typography component="div" style={{ }} >
                    {props.children}
                </Typography>


            </Container>
        </React.Fragment>
    );
};

export default ContainerStructure;
