import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CalendarTodayIcon from '../assets/icons/uil_calender.svg'; // Importing SVG as a URL
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageFillIcon from '../assets/icons/bi_image-fill.svg';

// Import your hackathon data
import hackathons from '../data/dummy';

const EditForm = () => {
  const { id } = useParams(); // Get hackathon ID from URL params
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    image: '',
    level: '',
  });
  const [imagePreview, setImagePreview] = useState(''); // State for image preview

  useEffect(() => {
    // Fetch the hackathon data based on ID
    const hackathon = hackathons.find(h => h.id === parseInt(id));
    if (hackathon) {
      setFormData({
        name: hackathon.name,
        startDate: hackathon.startDate,
        endDate: hackathon.endDate,
        description: hackathon.description,
        level: hackathon.level,
        image: hackathon.image || ''
      });
      // Set the image preview if there's an image
      if (hackathon.image) {
        setImagePreview(hackathon.image);
      }
    }
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
    const fileURL = URL.createObjectURL(file);
    setImagePreview(fileURL);
  };

  const handleLevelChange = (event) => {
    setFormData({ ...formData, level: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      {/* Full-width background color section */}
      <div style={{ width: '120%', backgroundColor: '#f3f8ff', padding: '20px 0', marginTop: '10px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', marginLeft: '200px', padding: '0 20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
            Edit Hackathon
          </h1>
        </div>
      </div>

      {/* Form section */}
      <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', marginLeft: '200px', fontFamily: 'Arial' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
                Challenge Name
              </div>
              <TextField
                label=""
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                sx={{
                  width: '70%',
                  borderRadius: '5px',
                  '& .MuiOutlinedInput-root': {
                    height: '40px',
                  },
                  '& input': {
                    padding: '12px',
                    fontFamily: 'Arial',
                    fontSize: '16px',
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
                Start Date
              </div>
              <TextField
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                placeholder="Add start date"
                variant="outlined"
                fullWidth
                sx={{
                  width: '70%',
                  borderRadius: '5px',
                  '& .MuiOutlinedInput-root': {
                    height: '40px',
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
            </Grid>

            <Grid item xs={12}>
              <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
                End Date
              </div>
              <TextField
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                placeholder="Add end date"
                variant="outlined"
                fullWidth
                sx={{
                  width: '70%',
                  borderRadius: '5px',
                  '& .MuiOutlinedInput-root': {
                    height: '40px',
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
            </Grid>

            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: "start" }}>
                {/* Image Preview */}
                <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
                  Image
                </div>
                {imagePreview && (
                  <div style={{ width: '300px', height: '150px', overflow: 'hidden', borderRadius: '15px', marginBottom: '10px' }}>
                    <img 
                      src={imagePreview} 
                      alt="Image Preview" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                )}

                {/* Change Image Button */}
                <label htmlFor="file-upload" style={{ marginTop: '10px', display: 'flex', alignItems: 'start', cursor: 'pointer' }}>
                  <img src={ImageFillIcon} alt="Change image icon" style={{ width: '22px', height: '22px', marginRight: '10px' }} />
                  <span style={{ marginRight: '10px', color: '#0b9931', fontWeight: 'bold' }}>
                    Change image
                  </span>
                  <ArrowForwardIcon style={{ color: '#0b9931' }} />
                </label>
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
                Level
              </div>
              <Select
                name="level"
                value={formData.level}
                onChange={handleLevelChange}
                variant="outlined"
                fullWidth
                sx={{
                  width: '40%',
                  borderRadius: '5px',
                  '& .MuiOutlinedInput-root': {
                    height: '40px',
                  },
                  '& .MuiSelect-select': {
                    padding: '8px', // Adjust padding to ensure proper text alignment
                  },
                }}
              >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{
                  padding: '10px 29px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontFamily: 'Arial, sans-serif',
                  textTransform: 'none',
                }}
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default EditForm;
