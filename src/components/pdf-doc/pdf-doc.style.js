import { StyleSheet } from '@react-pdf/renderer';

const pdfDocStyles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingHorizontal: 65,
  },
  header: {
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  content: {
    textTransform: 'capitalize',
    marginVertical: 15,
  },
});

export default pdfDocStyles;
