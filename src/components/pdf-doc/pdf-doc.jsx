import { Document, Page, View, Image, Text, Link } from '@react-pdf/renderer';
import styles from './pdf-doc.style';
const BillboardPdfDetails = ({name, location, status, amount}) => {
    return (
        <Document title="billboard summary">
            <Page style={styles.body}>
                <View style={styles.header}>
                    <Image style={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AizKwGgJ9qZEHWDmuyccP0zfqjM8ct94rg&usqp=CAU"/>
                    <Text style={styles.title}>billboard details</Text>
                </View>
                <Image style={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AizKwGgJ9qZEHWDmuyccP0zfqjM8ct94rg&usqp=CAU" />
                <Text style={styles.content}>
                    billboard name: {name}
                </Text>
                <Text style={styles.content}>
                    billboard location: {location}
                </Text>
                <Text style={styles.content}>
                    billboard status: {status}
                </Text>
                <Text style={styles.amount}>
                    amount: {amount}
                </Text>
                <Text style={styles.greet} >Have a nice day</Text>
                <Text style={styles.courtsey} >Optimum exposures team</Text>
                <View>
                    <Text style={styles.phone} >+234 80 986 44421</Text>
                    <Link style={styles.website} src="https://oe-zabuni.herokuapp.com/" >optimumexposures.com</Link>
                </View>
                <View style={styles.footer} >
                    <Text>Need Help?Visit our Help Centre</Text>
                    <Text>Tracking Number: <Text>{17190751}</Text></Text>
                </View>
            </Page>
    </Document>
    )
    
}

export default BillboardPdfDetails;