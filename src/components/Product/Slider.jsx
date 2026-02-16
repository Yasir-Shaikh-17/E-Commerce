// src/components/MainBox/Slider.jsx
import { useState } from 'react';
import Box from '@mui/material/Box';
import MuiSlider from '@mui/material/Slider';

export default function Slider() {
    const [value, setValue] = useState([25000, 75000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '90%' }}>
            <MuiSlider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="off"
                min={0}
                max={99999}
                step={1000}
                sx={{
                    height: 5, // track height
                    '& .MuiSlider-thumb': {
                        height: 18,
                        width: 18,
                        backgroundColor: 'white',
                        border: '2px solid #AFD0FF',
                        '&:hover': {
                            boxShadow: 'none', // remove hover glow
                        },
                        '&.Mui-focusVisible': {
                            boxShadow: 'none', // remove focus glow when clicked/tabbed
                        },
                        '&.Mui-active': {
                            boxShadow: 'none', // remove active glow while dragging
                        },
                    },
                    '& .MuiSlider-track': {
                        backgroundColor: '#0D6EFD',
                        borderRadius: 5,
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: '#AFD0FF',
                        borderRadius: 5,
                    },
                }}
            />


            {/* Display min and max values below slider */}
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-1'>
                    <div className='w-1/2 bg-white border-gray-300 flex flex-col gap-0.5'>
                        <div>Min</div>
                        <div className='border border-gray-300 rounded px-2 py-1 w-[90%] text-gray-400 text-sm shadow-lg'>{value[0]}</div>
                    </div>
                    <div className='w-1/2 bg-white border-gray-300 flex flex-col gap-0.5'>
                        <div>Max</div>
                        <div className='border border-gray-300 rounded px-2 py-1 w-[90%] text-gray-400 text-sm shadow-lg'>{value[1]}</div>
                    </div>
                </div>
                <div className='bg-white border border-gray-300 flex justify-center py-1 rounded shadow-lg text-[#0D6EFD] hover:scale-105 transition-all duration-150 active:scale-95 cursor-pointer'>
                    Apply
                </div>
            </div>
        </Box>
    );
}
