import React, { useContext, useEffect, useState } from 'react';
import { Formik as Form, FormikHelpers } from 'formik';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Yup from 'yup';
import { buttonIcons } from '../../assets/icons';
import HospitalizationDateIcon from '../../assets/icons/hospital-date.svg';
import HospitalizationIcon from '../../assets/icons/hospitalization.svg';
import MedicalMaskIcon from '../../assets/icons/medical-mask.svg';
import NewHospitalizationIcon from '../../assets/icons/new-hospitalization.svg';
import StethoscopeIcon from '../../assets/icons/stethoscope.svg';
import { colors, globalStyles } from '../../assets/styles';
import { Button, InputButton, InputComponent, ModalComponent, MultiSelect } from '../../components';
import { MultiSelectItems } from '../../components/MultiSelect';
import AuthContext from '../../contexts/auth';
import { Save } from '../../interfaces/hospitalization';
import { getAll } from '../../services/disease';
import { save } from '../../services/hospitalization';
import { DateTimeToBrDate } from '../../utils/function';

const initialValues: Save = {
  userId: '',
  entranceDate: '',
  exitDate: '',
  location: '',
  reason: '',
  diseases: [''],
};

const validationSchema = Yup.object().shape({});

const NewHospitalization: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { checkIcon, addIcon } = buttonIcons;
  const [items, setItems] = useState<MultiSelectItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitButton, setSubmitLoading] = useState(false);
  const [showEntranceDatePicker, setShowEntranceDatePicker] = useState(false);
  const [showExitDatePicker, setShowExitDatePicker] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const { data } = await getAll();
      const formattedData = data.map(disease => ({ ...disease, selected: false }));
      setItems(formattedData);
    } catch {
      showMessage({
        message: 'Ops! Aconteceu alguma coisa',
        type: 'danger',
        icon: 'danger',
      });
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmitForm(values: Save, { resetForm }: FormikHelpers<Save>) {
    values.diseases = items.filter(item => item.selected).map(item => item.id);
    values.userId = user?.id as string;
    setSubmitLoading(true);
    try {
      await save(values);
      resetForm();
      const formattedData = items.map(disease => ({ ...disease, selected: false }));
      setItems(formattedData);
      showMessage({
        message: 'Informações salvas com sucesso!',
        type: 'success',
        icon: 'success',
      });
    } catch {
      showMessage({
        message: 'Erro ao tentar salvar as informações, pode tentar de novo?',
        type: 'danger',
        icon: 'danger',
      });
    } finally {
      setSubmitLoading(false);
    }
  }

  function diseasesInputLabel() {
    const itemsSelected = items.filter(item => item.selected);
    if (itemsSelected.length === 0) {
      return '';
    }
    if (itemsSelected.length === 1) {
      return itemsSelected[0].name;
    }
    if (itemsSelected.length === 2) {
      return `${itemsSelected[0].name}, ${itemsSelected[1].name}`;
    }
    return `${itemsSelected[0].name}, ${itemsSelected[1].name}, ...`;
  }

  function onSelectedItem(itemId: string) {
    const arrayFormatted = items.map(item => {
      if (item.id === itemId) {
        item.selected = !item.selected;
      }
      return item;
    });

    setItems(arrayFormatted);
  }

  return (
    <SafeAreaView style={styles.container}>
      {!loading && !hasError && (
        <>
          <View style={styles.header}>
            <View style={globalStyles.iconContainer}>{<NewHospitalizationIcon fill='#000' width='80' height='80' />}</View>
            <Text style={styles.title}>Nova internação</Text>
          </View>
          <Form initialValues={initialValues} onSubmit={handleSubmitForm} validationSchema={validationSchema} validateOnChange={false}>
            {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched, setFieldValue }) => (
              <>
                <View style={globalStyles.inputArea}>
                  <InputComponent
                    value={values.location}
                    label='Aonde aconteceu a internação?'
                    onChangeText={handleChange('location')}
                    errors={touched.location && errors.location ? errors.location : ''}
                    onBlur={() => setFieldTouched('location')}
                    editable={!submitButton}
                    icon={<HospitalizationIcon fill='#000' width='35' height='35' />}
                  />
                  <InputComponent
                    value={values.reason}
                    label='Qual o motivo da internação?'
                    onChangeText={handleChange('reason')}
                    errors={touched.reason && errors.reason ? errors.reason : ''}
                    onBlur={() => setFieldTouched('reason')}
                    editable={!submitButton}
                    icon={<StethoscopeIcon fill='#000' width='40' height='40' />}
                  />

                  <InputButton
                    label='Quando começou a internação?'
                    errors={touched.entranceDate && errors.entranceDate ? errors.entranceDate : ''}
                    value={DateTimeToBrDate(values.entranceDate)}
                    onBlur={() => setFieldTouched('.entranceDate')}
                    disabled={submitButton}
                    onPress={() => setShowEntranceDatePicker(true)}
                    icon={<HospitalizationDateIcon fill='#000' width='40' height='40' />}
                  />

                  <InputButton
                    label='Quando terminou a internação?'
                    errors={touched.exitDate && errors.exitDate ? errors.exitDate : ''}
                    value={DateTimeToBrDate(values.exitDate ? values.exitDate : '')}
                    onBlur={() => setFieldTouched('exitDate')}
                    disabled={submitButton}
                    onPress={() => setShowExitDatePicker(true)}
                    icon={<HospitalizationDateIcon fill='#000' width='40' height='40' />}
                  />

                  <InputButton
                    label='Quais foram as doenças durante a internação?'
                    errors={touched.diseases && errors.diseases ? errors.diseases : ''}
                    value={diseasesInputLabel()}
                    onBlur={() => setFieldTouched('diseases')}
                    disabled={submitButton}
                    onPress={() => setShowModal(true)}
                    icon={<MedicalMaskIcon fill='#000' width='40' height='40' />}
                  />

                  <DateTimePickerModal
                    isVisible={showEntranceDatePicker}
                    mode='date'
                    onConfirm={date => {
                      setShowEntranceDatePicker(false);
                      setFieldValue('entranceDate', date);
                    }}
                    onCancel={() => setShowEntranceDatePicker(false)}
                  />

                  <DateTimePickerModal
                    isVisible={showExitDatePicker}
                    mode='date'
                    onConfirm={date => {
                      setShowExitDatePicker(false);
                      setFieldValue('exitDate', date);
                    }}
                    onCancel={() => setShowExitDatePicker(false)}
                  />
                </View>
                <Button loading={submitButton} onPress={handleSubmit} buttonText='Salvar' style={styles.submitButton} icon={addIcon} />

                <ModalComponent showModal={showModal} close={() => setShowModal(false)}>
                  <View style={modalStyles.container}>
                    <Text style={modalStyles.textHeader}>Selecione uma doença</Text>
                    <View style={modalStyles.scrollContainer}>
                      <MultiSelect listItems={items} inputLabelText='Toque aqui para listar as doenças' onSelectedItem={onSelectedItem} />
                    </View>
                    <Button onPress={() => setShowModal(false)} buttonText='Finalizado' icon={checkIcon} style={modalStyles.submitButton} />
                  </View>
                </ModalComponent>
              </>
            )}
          </Form>
        </>
      )}
    </SafeAreaView>
  );
};

export default NewHospitalization;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.screenColor,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginTop: 10,
  },
  scrollContainer: {
    width: '100%',
  },
  submitButton: {
    alignSelf: 'center',
  },
});

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },

  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  scroll: {
    width: '100%',
    padding: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6d6d6',
    marginBottom: 20,
    height: 50,
    borderRadius: 15,
  },

  shadow: {
    shadowColor: '#2974FA',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  submitButton: {
    marginVertical: 10,
  },
});