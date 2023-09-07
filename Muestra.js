import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Field, Formik } from "formik";
import { RadioButton, Text } from "react-native-paper";
import { Icon } from "react-native-elements";

const RegisterForm = ({
  initialValues,
  validationSchema,
  handleRegister,
  candidates,
  page,
}) => {
  const RadioInput = ({ field, form, label, value }) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <RadioButton
        value={value}
        status={field.value === value ? "checked" : "unchecked"}
        onPress={() => form.setFieldValue(field.name, value)}
      />
      <Text>{label}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.buttonChangePage}>
        <Icon
          name={page ? "leaderboard" : "how_to_vote"}
          color={"white"}
          onPress={() => {}}
        />
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 25 }}>
        Puesto de Votacion
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ handleBlur, handleChange, handleSubmit, values, resetForm }) => (
          <View style={styles.formik}>
            <TextInput
              style={styles.input}
              placeholder="Cedula"
              onChangeText={handleChange("identification")}
              value={values.identification}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              onChangeText={handleChange("name")}
              value={values.name}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Edad"
              onChangeText={handleChange("age")}
              value={values.age}
              autoCapitalize="none"
            />
            {candidates.map((candidate, i) => (
              <View key={i}>
                <Field
                  component={RadioInput}
                  name="eleccion"
                  label={candidate}
                  value={candidate}
                />
              </View>
            ))}

            <Button title="Votar" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  
  formik: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  container: {
    height: "95%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    margin: 10,
    padding: 30,
    flex: 1,
    justifyContent: "space-evenly",
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
});
