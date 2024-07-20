import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Box, TextField, Button, Typography, Container, Paper, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                flexDirection: 'row',
            }}
        >
            {/* Image section */}
            <Box
                sx={{
                    flex: 1,
                    background: `url('https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=2516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center`,
                    backgroundSize: 'cover',
                    display: { xs: 'none', md: 'block' }
                }}
            />
            {/* Login form section */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'background.paper',
                }}
            >
                <Container maxWidth="xs">
                    <Paper elevation={10} sx={{ p: 4, borderRadius: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Login
                            </Typography>
                        </Box>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <TextField
                                required
                                fullWidth
                                label="Email"
                                type="email"
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                            />
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                variant="outlined"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={isLoading}
                            >
                                Login
                            </Button>
                            {error && (
                                <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                                    {error}
                                </Typography>
                            )}
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default Login;


// import React, { useState } from 'react';
// import { useLogin } from '../hooks/useLogin';
// import { Box, TextField, Button, Typography, Container } from '@mui/material';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const { login, isLoading, error } = useLogin();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await login(email, password);
//     };

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 height: '85vh',
//                 overflow: 'hidden',
//                 flexDirection: 'row',
//                 '& img': {
//                     maxWidth: '100%',
//                     maxHeight: '100%',
//                     objectFit: 'cover',
//                 }
//             }}
//         >
//             {/* Image section */}
//             <Box
//                 sx={{
//                     flex: 1,
//                     background: `url('https://images.unsplash.com/photo-1638272467190-4ff6f773315c?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center`,
//                     backgroundSize: 'cover',
//                     height: '100vh',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//             >
//                 {/* You can add an overlay here if you want to enhance readability of text */}
//             </Box>
//             {/* Login form section */}
//             <Box
//                 sx={{
//                     flex: 1,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     backgroundColor: 'background.paper',
//                     height: '100vh',
//                     padding: 0
//                 }}
//             >
//                 <Container maxWidth="xs">
//                     <Typography variant="h4" component="h1" gutterBottom>
//                         Login
//                     </Typography>
//                     <form onSubmit={handleSubmit}>
//                         <TextField
//                             required
//                             fullWidth
//                             label="Email"
//                             type="email"
//                             margin="normal"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             variant="outlined"
//                             sx={{ mb: 2 }}
//                         />
//                         <TextField
//                             required
//                             fullWidth
//                             label="Password"
//                             type="password"
//                             margin="normal"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             variant="outlined"
//                             sx={{ mb: 2 }}
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             color="primary"
//                             sx={{ mt: 2 }}
//                             disabled={isLoading}
//                         >
//                             Login
//                         </Button>
//                         {error && (
//                             <Typography color="error" variant="body2" sx={{ mt: 2 }}>
//                                 {error}
//                             </Typography>
//                         )}
//                     </form>
//                 </Container>
//             </Box>
//         </Box>
//     );
// };

// export default Login;
