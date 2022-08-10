import './App.css';
import  React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '250px',
  height: '250px',
  bgcolor: '#ff007f',
  border: '2px solid #000',
  boxShadow: '24',
  p: '4',
};

function EditModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{
        border: '1px solid lightgray',
        borderRadius: '30px',
        color: 'black',
      
      }}>
        <Typography sx={{
          textTransform: 'none',
          fontWeight: '525',}}>
          Edit
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        </Box>
      </Modal>
    </div>
  );
}

function App() {
  return (
    <Box className="App" sx={{ 
      p: '100px',
  }}>
  
   <Stack direction="row" spacing={2}>
    <Paper elevation={3} sx={{ 
      borderRadius: '12px',
      display: 'grid',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 8px',
      gap: '16px',
      left: '0%',
      right: '0%',
      top:' 0%',
      bottom: '0.37%',
      background: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
      width: '90%',
      }}>
        
        <Grid container direction={"row"} justifyContent={'space-between'} display="flex">
          <Grid item >
          <Typography sx={{
            marginLeft: '16px',
            marginTop: '6px',
            fontWeight: '600',
            fontSize: '16px',
          }}>
            Education
          </Typography>
          </Grid>
         <Grid item></Grid>
          <Grid item>
            <Box sx={{ marginRight: '16px', }}>
              <EditModal />
            </Box>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <Box sx={{
          marginX: '16px',
          marginY: '16px',
          height: 'auto',
          display: 'grid',
        }}>
          <Grid container direction={'row'} wrap={'none'} >
            <Grid item>
              <Avatar 
              alt=''
              src='' 
              sx={{ 
                width: 48,
               height: 48,
               }}

              />
            </Grid>
            <Grid container item sx={{
              marginX: '16px',
            }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <Typography 
              sx={{
                fontSize: '16px',

              }}>
              Diploma in Graphic Design
              </Typography>
              <Typography  sx={{
                color: 'gray',
                fontSize: '14px',
                }}>
                Algonquin College of Applied Arts and Technology - 
                </Typography><Typography  sx={{
                color: 'gray',
                fontSize: '14px'
                }}>
                Ottawa, Ontario 
                </Typography>
              </Box>
            </Grid>
            <Grid item >
              <Typography sx={{
              fontSize: '14px',
              color: 'gray',
              width: '84px', 
            }}>
                1999 - 2001
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{
          marginX: '16px',
          marginY: '16px',
          height: 'auto',
          display: 'grid',
        }}>
          <Grid container direction={'row'} wrap={'none'} >
            <Grid item>
              <Avatar 
              alt=''
              src='' 
              sx={{ 
                width: 48,
               height: 48,
               }}

              />
            </Grid>
            <Grid container item sx={{
              marginX: '16px',
            }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <Typography 
              sx={{
                fontSize: '16px',

              }}>
              Diploma in Graphic Design
              </Typography>
              <Typography  sx={{
                color: 'gray',
                fontSize: '14px',
                }}>
                Algonquin College of Applied Arts and Technology - 
                </Typography><Typography  sx={{
                color: 'gray',
                fontSize: '14px'
                }}>
                Ottawa, Ontario 
                </Typography>
              </Box>
            </Grid>
            <Grid item >
              <Typography sx={{
              fontSize: '14px',
              color: 'gray',
              width: '84px', 
            }}>
                1999 - 2001
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Stack>
  </Box>
  
  );
}

export default App;
