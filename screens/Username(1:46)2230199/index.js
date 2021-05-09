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
      <View style={styles.View_1_47}>
        <View style={styles.View_1_48} />
        <View style={styles.View_1_49} />
      </View>
      <View style={styles.View_1_50}>
        <View style={styles.View_1_51}>
          <View style={styles.View_1_52} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1_53}
          />
          <View style={styles.View_1_54} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_1_55}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_1_59}
        />
        <View style={styles.View_1_64}>
          <View style={styles.View_1_65}>
            <Text style={styles.Text_1_65}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_1_66} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560c/966e/2f56ec7879a9275fdb26c85e39c2d263"
        }}
        style={styles.ImageBackground_1_67}
      />
      <View style={styles.View_1_113}>
        <Text style={styles.Text_1_113}>Add Profile</Text>
      </View>
      <View style={styles.View_6_694}>
        <View style={styles.View_1_97}>
          <Text style={styles.Text_1_97}>Emenalo</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c76/e9da/db99ce7e20bae98c810ab59ae936b44b"
          }}
          style={styles.ImageBackground_1_93}
        />
      </View>
      <View style={styles.View_6_696}>
        <View style={styles.View_1_99}>
          <Text style={styles.Text_1_99}>Thelma</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d212/6ec6/2b8256d04f69e1e99f2fb7f26868d6ca"
          }}
          style={styles.ImageBackground_1_95}
        />
      </View>
      <View style={styles.View_6_695}>
        <View style={styles.View_1_98}>
          <Text style={styles.Text_1_98}>Onyeka</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6c3/c110/55b51193bcb5feb63868aa0dd9adc8d2"
          }}
          style={styles.ImageBackground_1_94}
        />
      </View>
      <View style={styles.View_6_697}>
        <View style={styles.View_1_100}>
          <Text style={styles.Text_1_100}>Kids</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5b7/d155/49aea6e2e28056fcccbf5681a40605a3"
          }}
          style={styles.ImageBackground_1_96}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9b/e5f8/4598246804f539ea64a4cb2edea0ffdd"
        }}
        style={styles.ImageBackground_1_101}
      />
      <View style={styles.View_1_112}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b399/1937/6b409a2623d702d13a74187249e8c620"
          }}
          style={styles.ImageBackground_1_111}
        />
        <View style={styles.View_1_110}>
          <View style={styles.View_1_107} />
          <View style={styles.View_1_109} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_47: {
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
  View_1_48: {
    width: wp("100%"),
    height: hp("4.33099699802086%"),
    top: hp("-0.12374627785604275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_49: {
    width: wp("32.36714884440104%"),
    height: hp("0.6187138661660784%"),
    minHeight: hp("0.6187138661660784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642252604167%"),
    top: hp("2.4748546829640503%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_50: {
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
  View_1_51: {
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
  View_1_52: {
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
  ImageBackground_1_53: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009093571230361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_1_54: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_55: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_1_59: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_1_64: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_65: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475409%")
  },
  Text_1_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1_66: {
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
  ImageBackground_1_67: {
    width: wp("36.8%"),
    height: hp("5.081326844262295%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_1_113: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("83.19672131147541%")
  },
  Text_1_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.25,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6759999990463257,
    textTransform: "none"
  },
  View_6_694: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("30.327868852459016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_97: {
    flexGrow: 1,
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000002%"),
    top: hp("12.84153005464481%")
  },
  Text_1_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.25,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6759999990463257,
    textTransform: "none"
  },
  ImageBackground_1_93: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_6_696: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("49.86338797814208%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_99: {
    flexGrow: 1,
    width: wp("12.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.200000000000003%"),
    top: hp("12.841530054644807%")
  },
  Text_1_99: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.25,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6759999990463257,
    textTransform: "none"
  },
  ImageBackground_1_95: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_6_695: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.333333333333336%"),
    top: hp("30.327868852459016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_98: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.93333333333333%"),
    top: hp("12.84153005464481%")
  },
  Text_1_98: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.25,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6759999990463257,
    textTransform: "none"
  },
  ImageBackground_1_94: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_6_697: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.333333333333336%"),
    top: hp("49.86338797814208%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_100: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("12.841530054644807%")
  },
  Text_1_100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.25,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6759999990463257,
    textTransform: "none"
  },
  ImageBackground_1_96: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_1_101: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333332%")
  },
  View_1_112: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("74.59016393442623%")
  },
  ImageBackground_1_111: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_110: {
    width: wp("8.376068623860677%"),
    minWidth: wp("8.376068623860677%"),
    height: hp("4.2910187622237075%"),
    minHeight: hp("4.2910187622237075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5640950520833314%"),
    top: hp("1.313577453946806%")
  },
  View_1_107: {
    width: wp("1.8846153259277343%"),
    minWidth: wp("1.8846153259277343%"),
    height: hp("4.2910187622237075%"),
    minHeight: hp("4.2910187622237075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.141031901041668%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_109: {
    width: wp("8.376068623860677%"),
    minWidth: wp("8.376068623860677%"),
    height: hp("0.9654793582978796%"),
    minHeight: hp("0.9654793582978796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000008138020834991266%"),
    top: hp("1.609133110671749%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
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
