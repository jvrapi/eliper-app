import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

import { RouteProp } from '@react-navigation/native';
import { ErrorComponent, Button, InputComponent, LoadingComponent } from '../../components';
import { getById } from '../../services/exam';
import { Exam } from '../../interfaces/exam';
import { showMessage } from 'react-native-flash-message';
import { Formik as Form } from 'formik';
import * as Yup from 'yup';
import { colors, globalStyles } from '../../assets/styles';
import { fileNameFormatter } from '../../utils/formatter';
import { inputIcons, pageIcons } from '../../assets/icons';

type RootStackParamList = {
  ExamDetails: { id: string };
};

type ExamDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ExamDetails'>;

type Props = {
  route: ExamDetailsScreenRouteProp;
};

const initialValues: Exam = {
  id: '',
  name: '',
  userId: '',
  createdAt: '',
  path: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Preencha este campo'),
});

const ExamDetails: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [exam, setExam] = useState<Exam>(initialValues);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { nameIcon, myExamsIcon } = inputIcons;
  const { examDetailsIcon } = pageIcons;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const { data } = await getById(id);
      setExam(data);
    } catch (error) {
      setHasError(true);
      showMessage({
        message: error.response.data.error,
        type: 'danger',
        icon: 'danger',
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmitForm() {
    return;
  }

  return (
    <SafeAreaView style={styles.container}>
      {!loading && !hasError && (
        <>
          <View>
            {examDetailsIcon}
            <Text>Detalhes do Exame</Text>
          </View>
          <Form
            enableReinitialize
            initialValues={exam}
            onSubmit={handleSubmitForm}
            validationSchema={validationSchema}
            validateOnChange={false}
          >
            {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
              <>
                <View style={globalStyles.inputArea}>
                  <InputComponent
                    label='Nome'
                    errors={touched.name && errors.name ? errors.name : ''}
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={() => setFieldTouched('name')}
                    icon={nameIcon}
                  />
                </View>
                <View style={styles.fileContainer}>
                  <View style={styles.fileCard}>
                    {myExamsIcon}
                    <Text style={styles.fileName}>{fileNameFormatter(exam.path)}</Text>
                  </View>
                </View>
                <Button loading={loading} onPress={() => handleSubmit()} buttonText='Acessar' style={styles.submitButton} />
              </>
            )}
          </Form>
        </>
      )}
      {loading && <LoadingComponent />}
      {hasError && <ErrorComponent />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.screenColor,
  },
  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  fileCard: {
    width: '100%',
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal: 15,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems: 'center',
  },
  fileName: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
  },
  submitButton: {
    marginTop: 40,
  },
});
export default ExamDetails;