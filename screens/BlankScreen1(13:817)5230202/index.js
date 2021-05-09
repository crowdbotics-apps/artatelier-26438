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
      <View style={styles.View_13_818}>
        <View style={styles.View_13_819} />
        <View style={styles.View_13_820} />
      </View>
      <View style={styles.View_13_821}>
        <View style={styles.View_13_822}>
          <View style={styles.View_13_823} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_13_824}
          />
          <View style={styles.View_13_825} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_13_826}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_13_830}
        />
        <View style={styles.View_13_835}>
          <View style={styles.View_13_836}>
            <Text style={styles.Text_13_836}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_13_837} />
      </View>
      <View style={styles.View_13_902}>
        <View style={styles.View_13_845}>
          <Text style={styles.Text_13_845}>All</Text>
        </View>
        <View style={styles.View_13_901}>
          <Text style={styles.Text_13_901}>My List</Text>
        </View>
        <View style={styles.View_13_900}>
          <Text style={styles.Text_13_900}>Movies</Text>
        </View>
        <View style={styles.View_13_899}>
          <Text style={styles.Text_13_899}>TV Shows</Text>
        </View>
      </View>
      <View style={styles.View_13_897}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7109/0f51/e97303e32e2b14eed06b0b4de95ddc66"
          }}
          style={styles.ImageBackground_13_896}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acae/b1ae/eda1b92f1c0cafd56d1e08210ffbc396"
          }}
          style={styles.ImageBackground_13_894}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_13_818: {
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
  View_13_819: {
    width: wp("100%"),
    height: hp("4.33099699802086%"),
    top: hp("-0.12373793971995894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_13_820: {
    width: wp("32.36714884440104%"),
    height: hp("0.6187138661660784%"),
    minHeight: hp("0.6187138661660784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81640625%"),
    top: hp("2.4748588520320993%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_13_821: {
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
  View_13_822: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68893229166667%"),
    top: hp("2.367943101893357%")
  },
  View_13_823: {
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
  ImageBackground_13_824: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009093571230361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_13_825: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_13_826: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_13_830: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_13_835: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_836: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475409%")
  },
  Text_13_836: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_13_837: {
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
  View_13_902: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("33.60655737704918%")
  },
  View_13_845: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333333%"),
    top: hp("0%")
  },
  Text_13_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.67673110961914,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.41200003027915955,
    textTransform: "none"
  },
  View_13_901: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("21.72131147540984%")
  },
  Text_13_901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.67673110961914,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.41200003027915955,
    textTransform: "none"
  },
  View_13_900: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("14.48087431693989%")
  },
  Text_13_900: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.67673110961914,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.41200003027915955,
    textTransform: "none"
  },
  View_13_899: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469952%")
  },
  Text_13_899: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 23.68000030517578,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.41200003027915955,
    textTransform: "none"
  },
  View_13_897: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333333%"),
    top: hp("92.62295081967213%")
  },
  ImageBackground_13_896: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_894: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%")
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
