// src/certificateSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  certificateList: [
    { id: 1, url: 'certificate1.pdf', title: 'Certificate 1' },
    { id: 2, url: 'certificate2.pdf', title: 'Certificate 2' },
    // Add more certificates here
  ],
};

const certificateSlice = createSlice({
  name: 'certificates',
  initialState,
  reducers: {},
});

export const selectCertificates = (state) => state.certificates.certificateList;

export default certificateSlice.reducer;
