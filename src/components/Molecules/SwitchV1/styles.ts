import { StyleSheet } from 'react-native';
import { color } from '../../../themes/theme';
 
export const styles = (isActive) => StyleSheet.create({
    container: {
        backgroundColor: isActive ? color.primary : color.lightGray,
        width: 80,
        height: 36,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: isActive ? 'flex-end' : 'flex-start',
        padding: 4,
        overflow: 'hidden'
    },
    pointer: {
        backgroundColor: color.white,
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})