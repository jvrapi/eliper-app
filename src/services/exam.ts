import { AxiosResponse } from 'axios';
import { Exam } from '../interfaces/exam';
import api, { DeleteResponse } from './api';

const baseUrl = '/exam';

export async function getAll(userId: string): Promise<AxiosResponse<Exam[]>> {
	const response = await api.get(`${baseUrl}/${userId}`);
	return response;
}

export async function getById(examId: string): Promise<AxiosResponse<Exam>> {
	const response = await api.get(`${baseUrl}/details/${examId}`);
	return response;
}

export async function updateExam(exam: FormData): Promise<AxiosResponse<Exam>> {
	const response = await api.put(`${baseUrl}/`, exam, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return response;
}

export async function deleteExam(examId: string) {
	const response = await api.delete(`${baseUrl}/${examId}`);
	return response;
}

export async function deleteMany(exams: string[]): Promise<AxiosResponse<DeleteResponse[]>> {
	const response = await api.delete(`${baseUrl}`, {
		data: exams,
	});
	return response;
}

export async function save(exam: FormData) {
	const response = await api.post(`${baseUrl}/`, exam, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	return response;
}
