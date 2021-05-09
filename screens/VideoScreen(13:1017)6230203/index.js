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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fcb/28ef/7aeab524cdb845980abe87dc67c54a4a"
        }}
        style={styles.ImageBackground_13_1037}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/02ac/66f526ac55f56b842aeeacdac6e8feff"
        }}
        style={styles.ImageBackground_13_1128}
      />
      <View style={styles.View_13_1092}>
        <View style={styles.View_13_1064}>
          <View style={styles.View_13_1039}>
            <Text style={styles.Text_13_1039}>Speed (1x)</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98c6/4ba9/e4def8d4709418c7459ef288a6395cb3"
            }}
            style={styles.ImageBackground_13_1053}
          />
        </View>
        <View style={styles.View_13_1065}>
          <View style={styles.View_13_1049}>
            <Text style={styles.Text_13_1049}>Lock</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3abe/4149/51c00a331f384783eea90d190c119668"
            }}
            style={styles.ImageBackground_13_1055}
          />
        </View>
        <View style={styles.View_13_1090}>
          <View style={styles.View_13_1051}>
            <Text style={styles.Text_13_1051}>Audio &amp; Subtitles</Text>
          </View>
          <View style={styles.View_13_1057}>
            <View style={styles.View_13_1089}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10e7/b6b3/14a14b5410399de85e9c51a3e165f736"
                }}
                style={styles.ImageBackground_13_1058}
              />
              <View style={styles.View_13_1088}>
                <View style={styles.View_13_1080} />
                <View style={styles.View_13_1082} />
                <View style={styles.View_13_1085} />
                <View style={styles.View_13_1086} />
                <View style={styles.View_13_1087} />
                <View style={styles.View_13_1084} />
                <View style={styles.View_13_1083} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_13_1091}>
          <View style={styles.View_13_1052}>
            <Text style={styles.Text_13_1052}>Next Ep.</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a5f/6f2c/ab2be34f4dcd6330c09712cdfcfc6cac"
            }}
            style={styles.ImageBackground_13_1059}
          />
        </View>
        <View style={styles.View_13_1079}>
          <View style={styles.View_13_1050}>
            <Text style={styles.Text_13_1050}>Episodes</Text>
          </View>
          <View style={styles.View_13_1078}>
            <View style={styles.View_13_1069} />
            <View style={styles.View_13_1066} />
            <View style={styles.View_13_1068} />
          </View>
        </View>
      </View>
      <View style={styles.View_13_1118}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/648e/d42d/e2b8c31ddea0ac439c0f066eec50de87"
          }}
          style={styles.ImageBackground_13_1117}
        />
        <View style={styles.View_13_1109}>
          <View style={styles.View_13_1041}>
            <Text style={styles.Text_13_1041}>10</Text>
          </View>
          <View style={styles.View_13_1061}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e53/724d/ca79f9e257fe2504bd56cff6c3504997"
              }}
              style={styles.ImageBackground_13_1062}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aa9/d33a/2bf9ec27e2156b1fe51a0b8819008340"
            }}
            style={styles.ImageBackground_13_1108}
          />
        </View>
        <View style={styles.View_13_1110}>
          <View style={styles.View_13_1111}>
            <Text style={styles.Text_13_1111}>10</Text>
          </View>
          <View style={styles.View_13_1112}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e53/724d/ca79f9e257fe2504bd56cff6c3504997"
              }}
              style={styles.ImageBackground_13_1113}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aa9/d33a/2bf9ec27e2156b1fe51a0b8819008340"
            }}
            style={styles.ImageBackground_13_1115}
          />
        </View>
        <View style={styles.View_13_1123}>
          <Text style={styles.Text_13_1123}>54:67</Text>
        </View>
      </View>
      <View style={styles.View_13_1129}>
        <View style={styles.View_13_1122}>
          <View style={styles.View_13_1097}>
            <View style={styles.View_13_1095} />
            <View style={styles.View_13_1096} />
          </View>
          <View style={styles.View_13_1119}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b542/5d7d/164b4ffd316b0646223e43637e64903f"
              }}
              style={styles.ImageBackground_13_1120}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/182f/48cb/e23a9a7ea35af371f714c3b491c39139"
          }}
          style={styles.ImageBackground_13_1125}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_13_1037: {
    width: wp("78.07881773399015%"),
    minWidth: wp("78.07881773399015%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.960591133004927%"),
    top: hp("0%")
  },
  ImageBackground_13_1128: {
    width: wp("86.57635467980296%"),
    minWidth: wp("86.57635467980296%"),
    height: hp("5.866668701171875%"),
    minHeight: hp("5.866668701171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%"),
    top: hp("71.73333333333333%")
  },
  View_13_1092: {
    width: wp("79.76191478409791%"),
    minWidth: wp("79.76191478409791%"),
    height: hp("5.866668192545573%"),
    minHeight: hp("5.866668192545573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.497536945812808%"),
    top: hp("85.86666666666667%")
  },
  View_13_1064: {
    width: wp("8.723316286585014%"),
    minWidth: wp("8.723316286585014%"),
    height: hp("4.533332824707031%"),
    minHeight: hp("4.533332824707031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7999999999999972%")
  },
  View_13_1039: {
    width: wp("6.280787707549599%"),
    minWidth: wp("6.280787707549599%"),
    minHeight: hp("3.7777773539225263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.442518713439039%"),
    top: hp("0.3777832031249915%")
  },
  Text_13_1039: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.8149995803833,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2918333411216736,
    textTransform: "none"
  },
  ImageBackground_13_1053: {
    width: wp("2.093595824218149%"),
    height: hp("4.533332824707031%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_1065: {
    width: wp("5.4084561728491565%"),
    minWidth: wp("5.4084561728491565%"),
    height: hp("4.533332824707031%"),
    minHeight: hp("4.533332824707031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.857142857142858%"),
    top: hp("0.7999999999999972%")
  },
  View_13_1049: {
    width: wp("2.878694346385636%"),
    minWidth: wp("2.878694346385636%"),
    minHeight: hp("3.7777773539225263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.52977192695505%"),
    top: hp("0.3777832031249915%")
  },
  Text_13_1049: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.8149995803833,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2918333411216736,
    textTransform: "none"
  },
  ImageBackground_13_1055: {
    width: wp("2.093595824218149%"),
    height: hp("4.533332824707031%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_1090: {
    width: wp("13.782839469721752%"),
    minWidth: wp("13.782839469721752%"),
    height: hp("4.533333333333333%"),
    minHeight: hp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.75369458128078%"),
    top: hp("0.7999999999999972%")
  },
  View_13_1051: {
    width: wp("9.94458034120757%"),
    minWidth: wp("9.94458034120757%"),
    minHeight: hp("3.7777773539225263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8382694639008648%"),
    top: hp("0.3777832031249915%")
  },
  Text_13_1051: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.8149995803833,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2918333411216736,
    textTransform: "none"
  },
  View_13_1057: {
    width: wp("2.965927593813741%"),
    minWidth: wp("2.965927593813741%"),
    height: hp("4.533332824707031%"),
    minHeight: hp("4.533332824707031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_13_1089: {
    width: wp("2.4716062498797338%"),
    minWidth: wp("2.4716062498797338%"),
    height: hp("3.7777773539225263%"),
    minHeight: hp("3.7777773539225263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24717734952278647%"),
    top: hp("0.3777832031249915%")
  },
  ImageBackground_13_1058: {
    width: wp("2.4716062498797338%"),
    height: hp("3.7777773539225263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_1088: {
    width: wp("2.0063628116851957%"),
    minWidth: wp("2.0063628116851957%"),
    height: hp("1.6999998728434247%"),
    minHeight: hp("1.6999998728434247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27619159867609966%"),
    top: hp("0.5666666666666771%")
  },
  View_13_1080: {
    width: wp("0.610632144758854%"),
    height: hp("0.1888888676961263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.4166666269302368,
    borderTopRightRadius: 1.4166666269302368,
    borderBottomLeftRadius: 1.4166666269302368,
    borderBottomRightRadius: 1.4166666269302368
  },
  View_13_1082: {
    width: wp("0.610632144758854%"),
    height: hp("0.1888888676961263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6978753752309146%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.4166666269302368,
    borderTopRightRadius: 1.4166666269302368,
    borderBottomLeftRadius: 1.4166666269302368,
    borderBottomRightRadius: 1.4166666269302368
  },
  View_13_1085: {
    width: wp("0.610632144758854%"),
    height: hp("0.1888888676961263%"),
    top: hp("0.5666666666666629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6978753752309146%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.4166666269302368,
    borderTopRightRadius: 1.4166666269302368,
    borderBottomLeftRadius: 1.4166666269302368,
    borderBottomRightRadius: 1.4166666269302368
  },
  View_13_1086: {
    width: wp("0.610632144758854%"),
    height: hp("0.1888888676961263%"),
    top: hp("1.1333333333333258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.4166666269302368,
    borderTopRightRadius: 1.4166666269302368,
    borderBottomLeftRadius: 1.4166666269302368,
    borderBottomRightRadius: 1.4166666269302368
  },
  View_13_1087: {
    width: wp("0.610632144758854%"),
    height: hp("0.1888888676961263%"),
    top: hp("1.5111002604166544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6978753752309146%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.4166666269302368,
    borderTopRightRadius: 1.4166666269302368,
    borderBottomLeftRadius: 1.4166666269302368,
    borderBottomRightRadius: 1.4166666269302368
  },
  View_13_1084: {
    width: wp("0.610632144758854%"),
    height: hp("0.1888888676961263%"),
    top: hp("0.5666666666666629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.4166666269302368,
    borderTopRightRadius: 1.4166666269302368,
    borderBottomLeftRadius: 1.4166666269302368,
    borderBottomRightRadius: 1.4166666269302368
  },
  View_13_1083: {
    width: wp("0.610632144758854%"),
    height: hp("0.1888888676961263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3957507504618363%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1.4166666269302368,
    borderTopRightRadius: 1.4166666269302368,
    borderBottomLeftRadius: 1.4166666269302368,
    borderBottomRightRadius: 1.4166666269302368
  },
  View_13_1091: {
    width: wp("7.594427099368842%"),
    minWidth: wp("7.594427099368842%"),
    height: hp("5.866666158040364%"),
    minHeight: hp("5.866666158040364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.16748768472905%"),
    top: hp("0%")
  },
  View_13_1052: {
    width: wp("4.885057158070832%"),
    minWidth: wp("4.885057158070832%"),
    minHeight: hp("3.7777773539225263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.709359605911345%"),
    top: hp("1.0666666666666487%")
  },
  Text_13_1052: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.8149995803833,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2918333411216736,
    textTransform: "none"
  },
  ImageBackground_13_1059: {
    width: wp("2.7093593710161783%"),
    height: hp("5.866666158040364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_1079: {
    width: wp("8.112683789483432%"),
    minWidth: wp("8.112683789483432%"),
    height: hp("3.7777776082356773%"),
    minHeight: hp("3.7777776082356773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.51231527093596%"),
    top: hp("1.0666829427083258%")
  },
  View_13_1050: {
    width: wp("5.4084561728491565%"),
    minWidth: wp("5.4084561728491565%"),
    minHeight: hp("3.7777773539225263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.704218220828203%"),
    top: hp("0.000016276041662877105%")
  },
  Text_13_1050: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.8149995803833,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2918333411216736,
    textTransform: "none"
  },
  View_13_1078: {
    width: wp("2.093595824218149%"),
    minWidth: wp("2.093595824218149%"),
    height: hp("3.399998982747396%"),
    minHeight: hp("3.399998982747396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.18889973958333428%")
  },
  View_13_1069: {
    width: wp("1.9191295642570911%"),
    minWidth: wp("1.9191295642570911%"),
    height: hp("2.4555554707845055%"),
    minHeight: hp("2.4555554707845055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1744763604525872%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_13_1066: {
    width: wp("1.9191295642570911%"),
    minWidth: wp("1.9191295642570911%"),
    height: hp("2.4555554707845055%"),
    minHeight: hp("2.4555554707845055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9444498697916686%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_13_1068: {
    width: wp("1.9191295642570911%"),
    minWidth: wp("1.9191295642570911%"),
    height: hp("2.4555554707845055%"),
    minHeight: hp("2.4555554707845055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08722314693657296%"),
    top: hp("0.5666666666666629%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_13_1118: {
    width: wp("74.26108374384236%"),
    minWidth: wp("74.26108374384236%"),
    height: hp("40.005224609375%"),
    minHeight: hp("40.005224609375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.458128078817737%"),
    top: hp("35.733333333333334%")
  },
  ImageBackground_13_1117: {
    width: wp("4.556650246305419%"),
    height: hp("11.84000040690104%"),
    minHeight: hp("11.84000040690104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.20197044334975%"),
    top: hp("2.3999511718749957%")
  },
  View_13_1109: {
    width: wp("6.910647312408598%"),
    minWidth: wp("6.910647312408598%"),
    height: hp("16.686051432291666%"),
    minHeight: hp("16.686051432291666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_1041: {
    width: wp("2.60401218395515%"),
    minWidth: wp("2.60401218395515%"),
    minHeight: hp("4.337349446614583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2033992072044306%"),
    top: hp("7.143880208333329%")
  },
  Text_13_1041: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.06842613220215,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3350602686405182,
    textTransform: "none"
  },
  View_13_1061: {
    width: wp("2.2977121945085197%"),
    minWidth: wp("2.2977121945085197%"),
    height: hp("4.311856079101563%"),
    minHeight: hp("4.311856079101563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5553140875153915%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_1062: {
    width: wp("1.8088982023041826%"),
    height: hp("3.999799601236979%"),
    top: hp("0.14449869791666714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2688854198737687%")
  },
  ImageBackground_13_1108: {
    width: wp("6.910647312408598%"),
    minWidth: wp("6.910647312408598%"),
    height: hp("14.96385498046875%"),
    minHeight: hp("14.96385498046875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7222005208333329%")
  },
  View_13_1110: {
    width: wp("6.910647312408598%"),
    minWidth: wp("6.910647312408598%"),
    height: hp("16.686054484049478%"),
    minHeight: hp("16.686054484049478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.06403940886699%"),
    top: hp("0%")
  },
  View_13_1111: {
    width: wp("2.60401218395515%"),
    minWidth: wp("2.60401218395515%"),
    minHeight: hp("4.337349446614583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.203399207204427%"),
    top: hp("7.143880208333329%")
  },
  Text_13_1111: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.06842613220215,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3350602686405182,
    textTransform: "none"
  },
  View_13_1112: {
    width: wp("2.2977121945085197%"),
    minWidth: wp("2.2977121945085197%"),
    height: hp("4.311856079101563%"),
    minHeight: hp("4.311856079101563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5553140875153986%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_1113: {
    width: wp("1.8088982023041826%"),
    height: hp("3.999799601236979%"),
    top: hp("0.14449869791666714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2688854198737687%")
  },
  ImageBackground_13_1115: {
    width: wp("6.910647312408598%"),
    minWidth: wp("6.910647312408598%"),
    height: hp("14.96385498046875%"),
    minHeight: hp("14.96385498046875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7222005208333329%")
  },
  View_13_1123: {
    width: wp("2.832512315270936%"),
    minWidth: wp("2.832512315270936%"),
    minHeight: hp("2.405228678385417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.42857142857142%"),
    top: hp("37.599999999999994%")
  },
  Text_13_1123: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.050466537475586,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.1511056125164032,
    textTransform: "none"
  },
  View_13_1129: {
    width: wp("2.46305442208727%"),
    minWidth: wp("2.46305442208727%"),
    height: hp("56.00000000000001%"),
    minHeight: hp("56.00000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%"),
    top: hp("6.933333333333333%")
  },
  View_13_1122: {
    width: wp("2.3399017127276642%"),
    minWidth: wp("2.3399017127276642%"),
    height: hp("40.266666666666666%"),
    minHeight: hp("40.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.73333333333333%")
  },
  View_13_1097: {
    width: wp("0.8620693178599691%"),
    minWidth: wp("0.8620693178599691%"),
    height: hp("33.86666666666667%"),
    minHeight: hp("33.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7389162561576361%"),
    top: hp("6.400000000000006%")
  },
  View_13_1095: {
    width: wp("0.8620689655172413%"),
    minWidth: wp("0.8620689655172413%"),
    height: hp("33.86666666666667%"),
    minHeight: hp("33.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 74, 74, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_13_1096: {
    width: wp("0.8620689655172413%"),
    minWidth: wp("0.8620689655172413%"),
    height: hp("19.2%"),
    minHeight: hp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.666666666666664%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_13_1119: {
    width: wp("2.3399014778325125%"),
    minWidth: wp("2.3399014778325125%"),
    height: hp("5.066666666666666%"),
    minHeight: hp("5.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_1120: {
    width: wp("1.7549261083743841%"),
    height: hp("3.8%"),
    top: hp("0.6333333333333364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29248768472906406%")
  },
  ImageBackground_13_1125: {
    width: wp("2.4630541871921183%"),
    height: hp("5.333333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 375 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
