import { StyleSheet } from "react-native";

export const TaskItemStyles = StyleSheet.create({
    cardBox: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginBottom: 15,
        backgroundColor: "#31364D",
        borderRadius: 5
    },
    cardText: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
    },

    cardButton: {
        width: 45,
        height: 45,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 15,

        borderWidth: 1,
        borderStyle: "solid",
        // borderColor: "#fff",
        borderRadius: 5
    },
    cardButtonEditColor:{
        borderColor: "#9ABAEE",
    },
    
    cardButtonThashColor:{
        borderColor: "#B75D63",
    },
    cardButtonImage: {
    }

    
})
