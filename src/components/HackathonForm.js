import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FormControl, Select, MenuItem } from '@mui/material';
import CalendarTodayIcon from '../assets/icons/uil_calender.svg'; 

const HackathonForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    level: 'Easy', 
    startDate: '',
    endDate: '',
    image: '',
  });

  const handleFileChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  return (
    <>
      <div style={{ width: '120%', backgroundColor: '#f3f8ff', padding: '20px 0', marginTop: '10px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', marginLeft: '200px', padding: '0 20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {id ? 'Edit Hackathon' : 'Challenge Details'}
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', marginLeft: '200px', fontFamily: 'Arial' }}>
        <form>

          <div style={{ marginBottom: '35px' }}>
            <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
              Challenge Name
            </div>
            <TextField
              type="text"
              placeholder=""
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              variant="outlined" 
              sx={{
                width: '70%',
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                  borderRadius: '5px',
                },
                '& input': {
                  padding: '12px',
                  fontFamily: 'Arial',
                  fontSize: '10px',
                },
              }}
            />
          </div>

          <div style={{ marginBottom: '35px' }}>
            <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
              Start Date
            </div>
            <TextField
              type="text"
              placeholder="Add start date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              variant="outlined"
              sx={{
                width: '70%',
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                  borderRadius: '5px',
                },
                '& input': {
                  padding: '10px',
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={CalendarTodayIcon} alt="calendar icon" style={{ width: '22px', height: '26px' }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div style={{ marginBottom: '35px' }}>
            <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
              End Date
            </div>
            <TextField
              type="text"
              placeholder="Add end date"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              variant="outlined"
              sx={{
                width: '70%',
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                  borderRadius: '5px',
                },
                '& input': {
                  padding: '10px',
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={CalendarTodayIcon} alt="calendar icon" style={{ width: '22px', height: '26px' }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div style={{ marginBottom: '35px' }}>
            <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
              Description
            </div>
            <TextField
              placeholder=""
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              multiline
              rows={9}
              variant="outlined"
              fullWidth
              sx={{
                width: '130%',
                borderRadius: '5px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '5px',
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#999',
                  },
                },
              }}
            />
          </div>

          <div style={{ marginBottom: '35px' }}>
            <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
              Image
            </div>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              style={{ display: 'none' }} 
            />
            <label htmlFor="file-upload">
              <Button
                variant="outlined"
                component="span"
                sx={{ 
                  width: '40%', 
                  textAlign: 'left',
                  padding: '10px',
                  marginTop: '8px',
                  color: '#616161',
                  borderColor: '#d3d3d3',
                  backgroundColor: '#f0f0f0',
                  fontWeight: '600',
                  textTransform: 'none',
                }}
              >
                Upload
                <CloudUploadIcon sx={{ marginLeft: '8px', color: '#616161' }} />
              </Button>
            </label>
          </div>

          <div style={{ marginBottom: '35px' }}>
            <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
              Level Type
            </div>
            <FormControl variant="outlined" sx={{ width: '40%' }}>
              <Select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: '40px',
                    '& fieldset': {
                      borderColor: '#ccc',
                    },
                  },
                  '& .MuiSelect-select': {
                    padding: '8px',
                  },
                }}
              >
                <MenuItem value="Easy">Easy</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Hard">Hard</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div style={{ marginTop: '20px' }}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontFamily: 'Arial, sans-serif',
                textTransform: 'none'
              }}
            >
              {id ? 'Update Challenge' : 'Create Challenge'}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HackathonForm;
