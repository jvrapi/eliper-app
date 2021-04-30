import { AxiosResponse } from 'axios';
import { Exam } from '../interfaces/exam';
import api from './api';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

const baseUrl = '/exam';

export async function getAll(userId: string): Promise<AxiosResponse<Exam[]>> {
  const response = await api.get(`${baseUrl}?id=${userId}`);
  return response;
}

export async function getById(examId: string): Promise<AxiosResponse<Exam>> {
  const response = await api.get(`${baseUrl}/details/${examId}`);
  return response;
}

export async function updateExam(exam: FormData) {
  const response = await api.put(`${baseUrl}/`, exam, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
}
