import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1_24}>
        <View style={styles.View_1_25} />
        <View style={styles.View_1_26} />
      </View>
      <View style={styles.View_1_27}>
        <View style={styles.View_1_28}>
          <View style={styles.View_1_29} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1_30}
          />
          <View style={styles.View_1_31} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_1_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_1_36}
        />
        <View style={styles.View_1_41}>
          <View style={styles.View_1_42}>
            <Text style={styles.Text_1_42}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_1_43} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/052a/dea2/173c77a04095707311a19b06939eda6a"
        }}
        style={styles.ImageBackground_1_44}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_24: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.33099699802086%"),
    minHeight: hp("4.33099699802086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.55737704918033%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    overflow: "hidden"
  },
  View_1_25: {
    width: wp("100%"),
    height: hp("4.33099699802086%"),
    top: hp("-0.12374627785604275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_26: {
    width: wp("32.36714884440104%"),
    height: hp("0.6187138661660784%"),
    minHeight: hp("0.6187138661660784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642456054688%"),
    top: hp("2.4748546829640503%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_27: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_28: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68888346354167%"),
    top: hp("2.367943101893357%")
  },
  View_1_29: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_1_30: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009093571230361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_1_31: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_32: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_1_36: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_1_41: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_42: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475409%")
  },
  Text_1_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1_43: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100.5464480874317%"),
    minHeight: hp("100.5464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_1_44: {
    width: wp("55.2%"),
    height: hp("7.621990266393443%"),
    top: hp("45.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
