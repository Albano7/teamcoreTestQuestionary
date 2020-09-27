import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { QuestionsInterface, QuestionOptionInterface } from '../../../interface';
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper'

type QuestionaryFormProps  = {
  questions: Array<QuestionsInterface>
  onSubmit: (values: any) => void
  fetchAnswer: string
}

const QuestionaryForm = ({ questions, onSubmit, fetchAnswer }: QuestionaryFormProps) => {
  return (
    <Formik
     initialValues={{}}
     onSubmit={values => {
      Object.keys(values).length !== questions.length?
        ToastAndroid.show(`Faltan ${questions.length - Object.keys(values).length} preguntas por responder`, 5)
        :
        onSubmit(values)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }: any) => (
        <View style={styles.container}>
          {questions.map((question: QuestionsInterface, key: number) =>
            <View key={`question-${question.id}-${key}`}>
              <Text style={styles.textQuestion}>{question.question_text}</Text>
              <RadioButton.Group onValueChange={value => setFieldValue(question.id, value)} value={values[question.id]? values[question.id] : ''}>
                {question.question_options.map((option: QuestionOptionInterface, key: number) =>
                  <View style={styles.optionContainer} key={`option-${option.id}-${key}`}>
                    <RadioButton value={option.id.toString()} color='#091e5a'/>
                    <Text>{option.option_text}</Text>
                  </View>
                )}
              </RadioButton.Group>
            </View>
          )}
          <View style={styles.buttonContainer}>
            { fetchAnswer === 'FETCHING'?
              <Text>Loading...</Text>
              :
              <TouchableOpacity onPress={handleSubmit} style={styles.buttonSubmit}>
                <Text style={styles.textButton}>Guardar</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      )}
   </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  textQuestion: {
    fontSize: 20,
    marginTop: 20
  },
  buttonSubmit: {
    backgroundColor: '#091e5a',
    borderRadius: 10,
    width: 100,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    margin:20
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});


export default QuestionaryForm;