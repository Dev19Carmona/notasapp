import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import { useGrades } from "../../hooks/useGradesContainer";
import { RadioButton, Text } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
const GradesContainer = () => {
  const {
    handleGradesControl,
    validationSchema,
    initialValues,
    students = [],
  } = useGrades();
  const [notas, setNotas] = useState([]);

  const handleChangeNota = (index, materia, text) => {
    const updatedNotas = [...notas];
    if (!updatedNotas[index]) {
      updatedNotas[index] = { name: students[index], notas: {} };
    }
    updatedNotas[index].notas[materia] = text;
    setNotas(updatedNotas);
  };

  const handleGuardarNotas = () => {
    // Aquí puedes acceder a las notas de cada estudiante y materia
    console.log('Notas de estudiantes:', notas);
  };

//   const [notas, setNotas] = useState({
//     nota1: "",
//     nota2: "",
//     nota3: "",
//     nota4: "",
//   });

//   const handleChangeNota = (materia, text) => {
//     // Actualiza el estado de las notas según la materia ingresada
//     setNotas({ ...notas, [materia]: text });
//   };

//   const handleGuardarNotas = () => {
//     console.log(notas);
//   };
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 25 }}>
        Control De notas PDM
      </Text>

      {/* <PaperProvider>
        {students.map((student, i) => (
          <View
            key={i}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>{student}</Text>
            <View style={styles.inputs}>
              <TextInput
                style={styles.input}
                placeholder="Nota 1"
                value={notas.nota1}
                onChangeText={(text) => handleChangeNota("nota1", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Nota 2"
                value={notas.nota2}
                onChangeText={(text) => handleChangeNota("nota2", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Nota 3"
                value={notas.nota3}
                onChangeText={(text) => handleChangeNota("nota3", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Nota 4"
                value={notas.nota4}
                onChangeText={(text) => handleChangeNota("nota4", text)}
              />
            </View>
          </View>
        ))}
        <Button title="Guardar Notas" onPress={handleGuardarNotas} />
      </PaperProvider> */}

       <PaperProvider>
      <View style={styles.container}>
        {students.map((student, index) => (
          <View key={index}>

            <Text>{student}:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nota 1"
              value={notas[index]?.notas.nota1 || ''}
              onChangeText={(text) => handleChangeNota(index, 'nota1', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Nota 2"
              value={notas[index]?.notas.nota2 || ''}
              onChangeText={(text) => handleChangeNota(index, 'nota2', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Nota 3"
              value={notas[index]?.notas.nota3 || ''}
              onChangeText={(text) => handleChangeNota(index, 'nota3', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Nota 4"
              value={notas[index]?.notas.nota4 || ''}
              onChangeText={(text) => handleChangeNota(index, 'nota4', text)}
            />
          </View>
        ))}
      </View>
        <Button title="Guardar Notas" onPress={handleGuardarNotas} />
    </PaperProvider>
    </View>
  );
};
const styles = StyleSheet.create({
  data: {
    backgroundColor: "green",
    width: "10%",
    borderColor: "black",
    borderWidth: "2px",
  },
  student: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "blue",
  },
  formik: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  container: {
    height: "95%",
    marginTop: "10%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    margin: 10,
    padding: 5,
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "black",
  },
  inputs: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default GradesContainer;
