import React, { useEffect } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { AnswersInterface, QuestionaryInterface } from '../../../interface';
import QuestionaryForm from '../../components/questionaryForm';
import Modal from '../../components/modal';
import { getQuestionary, postAnswerQuestionary } from '../../redux/actions';

type QuestionaryProps  = {
  onGetQuestionary: () => void;
  onPostAnswerQuestionary: (data: AnswersInterface) => void;
  questionaryData: QuestionaryInterface;
  fetchQuestionary: string;
  fetchAnswer: string;
}

const Questionary = ({ onGetQuestionary, questionaryData, fetchQuestionary, onPostAnswerQuestionary, fetchAnswer }: QuestionaryProps) => {

  useEffect(() => {
    onGetQuestionary()
  }, [])

  const submitQuestionary = (value: any) => {
    const answers = Object.keys(value).map( (key: string) =>{
      return({ id: key, option: { id: value[key] } })
    })
    const data = { id: '1',  answers }
    onPostAnswerQuestionary(data)
  }
  
  return (
    <View style={styles.container}>
      <Modal
        visible={fetchAnswer === 'FETCHED'}
      >
        <Text style={styles.titleStyle}>Haz respondido el cuestionario con éxito</Text>
        <Button color='#091e5a' title='Volver a realizar el cuestionario' onPress={() => onGetQuestionary()} />
      </Modal>
      <ScrollView style={styles.questionaryContainer}>
        { fetchQuestionary === 'FETCHING' && <Text>Loading...</Text> }
        { fetchQuestionary === 'FETCHED' && 
          <QuestionaryForm questions={questionaryData.questions} onSubmit={submitQuestionary} fetchAnswer={fetchAnswer}/> 
        }
        { fetchQuestionary === 'FETCHING_ERROR' && <Text>Error al cargar el cuestionario</Text> }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // paddingTop: 30,
    paddingRight: 10,
    paddingLeft: 10,
  },
  titleContainer: {
  },
  titleStyle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  questionaryContainer: {
    // marginTop: 10
  }
});


const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetQuestionary: () => {
      dispatch(getQuestionary());
    },
    onPostAnswerQuestionary: (value: AnswersInterface) => {
      dispatch(postAnswerQuestionary(value));
    },
  };
};

const mapStateToProps = (state: any) => {
  return {
    ...state.questionary,
    ...state.answer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionary);