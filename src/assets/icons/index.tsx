import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/Entypo';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import FaIcons5 from 'react-native-vector-icons/FontAwesome5';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const pageIcons = {
  searchIcon: <MaterialIcons name='search' size={30} color='#a9a9a9' />,
  myExamsIcon: <FaIcons5 name='file-medical' size={40} color='#000000' />,
  myRecordIcon: <FaIcons5 name='book-medical' size={40} color='#000000' />,
  infoIcon: <Feather name='info' size={20} color='#a9a9a9' />,
  examDetailsIcon: <FaIcons5 name='laptop-medical' size={100} color='#000000' />,
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
};

export const buttonIcons = {
  signInIcon: <FaIcons name='sign-in' size={30} color='#FFFFFF' />,
  signUpIcon: <FaIcons name='pencil-square-o' size={30} color='#FFFFFF' />,
  checkIcon: <Feather name='check' size={30} color='#FFFFFF' />,
  continueIcon: <Feather name='arrow-right' size={30} color='#FFFFFF' />,
  uploadIcon: <FaIcons5 name='upload' size={30} color='#FFFFFF' />,
  downloadIcon: <FaIcons5 name='file-download' size={30} color='#FFFFFF' />,
  sendEmailIcon: <MaterialCommunityIcons name='email-check-outline' size={30} color='#FFFFFF' />,
  redefinePasswordIcon: <MaterialCommunityIcons name='lock-reset' size={30} color='#FFFFFF' />,
  editExamIcon: <MaterialCommunityIcons name='file-document-edit-outline' size={30} color='#FFFFFF' />,
};
