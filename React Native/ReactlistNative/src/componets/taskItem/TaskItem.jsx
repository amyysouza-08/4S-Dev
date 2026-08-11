import {Text, View} from "react-native"
import { TaskItemStyles } from "./TaskItemStyles"   

export const TaskItem = () => {
    return (
        <View style={TaskItemStyles.taskItem}>
            <Text>Task Item Component</Text>
        </View>
    )
}