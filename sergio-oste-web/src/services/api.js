// src/services/api.js
import axios from 'axios';

const API_URL =  'http://localhost:3001/api';

export const fetchLiteraryNotes = async () => {
    try {
        const response = await axios.get(`${API_URL}/literary-notes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching literary notes:', error);
        return [];
    }
};

export const fetchLiteraryNoteById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/literary-notes/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching literary note with id ${id}:`, error);
        return null;
    }
};