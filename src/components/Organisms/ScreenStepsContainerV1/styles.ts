import { StyleSheet } from 'react-native';
import { color } from '../../../themes/theme';

interface Insets {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export const styles = (insets : Insets) => StyleSheet.create({
  container: {
    display: "flex",
      flex: 1,
      backgroundColor: color.white,
      paddingHorizontal: 16,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContent: {
    width: '60%'
  },
  image: {
    width: '40%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    marginTop: 24,
    paddingBottom: 16,
    gap: 16,
    justifyContent: "space-between",
  },
  indicatorContainer: {
    paddingTop: 24,
    gap: 24,
    height: 'auto',
  },
});