import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/Entypo';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import FaIcons5 from 'react-native-vector-icons/FontAwesome5';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MedicalRecordsIcon from './medical-records.svg';
import HospitalizationIcon from './hospitalization.svg';
import SurgeryIcon from './surgery.svg';

export const pageIcons = {
	searchIcon: <MaterialIcons name='search' size={30} color='#A9A9A9' />,
	myExamsIcon: <FaIcons5 name='file-medical' size={40} color='#000000' />,
	myRecordIcon: <FaIcons5 name='laptop-medical' size={40} color='#000000' />,
	diseaseIcon: <FaIcons5 name='disease' size={40} color='#000000' />,
	infoIcon: <Feather name='info' size={20} color='#A9A9A9' />,
	examDetailsIcon: <MaterialCommunityIcons name='file-document-edit-outline' size={100} color='#000000' />,
	newExamIcon: <Feather name='file-plus' size={80} color='#000000' />,
	newDiseaseIcon: <MaterialCommunityIcons name='thermometer-plus' size={80} color='#000000' />,
	userDiseaseIcon: <Ionicons name='thermometer' size={80} color='#000000' />,
	annotationsIcon: <FaIcons5 name='notes-medical' size={40} color='#000000' />,
	familyHistoryIcon: <FaIcons5 name='book-medical' size={40} color='#000000' />,
	hospitalizationIcon: <HospitalizationIcon width='40' height='40' fill='#000000' />,
	surgeryIcon: <SurgeryIcon width='50' height='50' fill='#000000' />,
	userIcon: <FaIcons5 name='user-alt' size={60} color='#000000' />,
};

export const inputIcons = {
	emailIcon: <EntypoIcons name='email' size={30} color='#000000' />,
	passwordIcon: <EvilIcons name='lock' size={30} color='#000000' />,
	userIcon: <FaIcons5 name='user' size={30} color='#000000' />,
	dateIcon: <EvilIcons name='calendar' size={30} color='#000000' />,
	cpfIcon: <IonicIcon name='md-card-outline' size={30} color='#000000' />,
	recoveryCodeIcon: <MaterialCommunityIcons name='file-restore-outline' size={30} color='#000000' />,
	diseaseIcon: <FaIcons5 name='disease' size={30} color='#000000' />,
	nameIcon: <MaterialIcons name='drive-file-rename-outline' size={30} color='#000000' />,
	myExamsIcon: <FaIcons5 name='file-medical' size={30} color='#000000' />,
	pdfIcon: <AntDesign name='pdffile1' size={30} color='#000000' />,
	diseaseActive: <Feather name='user-check' size={30} color='#000000' />,
	diseaseInactive: <Feather name='user-x' size={30} color='#000000' />,
};

export const buttonIcons = {
	signInIcon: <FaIcons name='sign-in' size={40} color='#FFFFFF' />,
	signUpIcon: <FaIcons name='pencil-square-o' size={40} color='#FFFFFF' />,
	checkIcon: <Feather name='check' size={40} color='#FFFFFF' />,
	cancelIcon: <MaterialCommunityIcons name='cancel' size={40} color='#FFFFFF' />,
	continueIcon: <Feather name='arrow-right' size={40} color='#FFFFFF' />,
	uploadIcon: <FaIcons5 name='upload' size={40} color='#FFFFFF' />,
	downloadIcon: <FaIcons5 name='file-download' size={40} color='#FFFFFF' />,
	sendEmailIcon: <MaterialCommunityIcons name='email-check-outline' size={40} color='#FFFFFF' />,
	redefinePasswordIcon: <MaterialCommunityIcons name='lock-reset' size={40} color='#FFFFFF' />,
	examEditIcon: <MaterialCommunityIcons name='file-document-edit-outline' size={40} color='#FFFFFF' />,
	terminatedEditExamIcon: <MaterialCommunityIcons name='file-check-outline' size={40} color='#FFFFFF' />,
	deleteExamIcon: <MaterialCommunityIcons name='file-remove-outline' size={40} color='#FFFFFF' />,
	newExamIcon: <Feather name='file-plus' size={40} color='#FFFFFF' />,
	newDiseaseIcon: <MaterialCommunityIcons name='thermometer-plus' size={40} color='#FFFFFF' />,
	deleteIcon: <AntDesign name='delete' size={40} color='#FFFFFF' />,
	calendarCheckIcon: <FaIcons5 name='calendar-check' size={40} color='#FFFFFF' />,
	newPostIt: <MaterialIcons name='post-add' size={40} color='#FFFFFF' />,
	addIcon: <MedicalRecordsIcon fill='#FFF' width='40' height='40' />,
	updateIcon: <MedicalRecordsIcon fill='#FFF' width='40' height='40' />,
};
