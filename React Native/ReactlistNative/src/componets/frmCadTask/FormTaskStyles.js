import { StyleSheet } from "react-native";

export const FormTaskStyles = StyleSheet.create({
    formTaskBox: {
        width: "100%",
        // height: 200,
        
        // borderWidth: 2,
        // borderStyle: "solid",
        // borderColor: "white",
        backgroundColor: "#1D2135"
    },

   taskInputName: {
    width: "100%",
    height: 40,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
   },
   taskButton: {
        width: "100%",
        height: 40,
        padding: 10,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: "#60A771"

   },
   taskButtonText: {
    color: "#fff",
    textAlign: "center",
    verticalAlign: "center"
   }
})