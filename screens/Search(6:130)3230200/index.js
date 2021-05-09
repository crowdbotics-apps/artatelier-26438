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
      <View style={styles.View_6_131}>
        <View style={styles.View_6_132} />
        <View style={styles.View_6_133} />
      </View>
      <View style={styles.View_6_134}>
        <View style={styles.View_6_135}>
          <View style={styles.View_6_136} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_6_137}
          />
          <View style={styles.View_6_138} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_6_139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_6_143}
        />
        <View style={styles.View_6_148}>
          <View style={styles.View_6_149}>
            <Text style={styles.Text_6_149}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_6_150} />
      </View>
      <View style={styles.View_6_171}>
        <Text style={styles.Text_6_171}>Top Searches</Text>
      </View>
      <View style={styles.View_6_202}>
        <View style={styles.View_6_176}>
          <View style={styles.View_6_172} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f6/8f2a/e2fbb1fad3def3b6b41bf43fec82f995"
            }}
            style={styles.ImageBackground_6_174}
          />
        </View>
        <View style={styles.View_6_181}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501f/5490/29bb332758752b6e01d88fc0d3df761f"
            }}
            style={styles.ImageBackground_6_178}
          />
          <View style={styles.View_6_154}>
            <Text style={styles.Text_6_154}>Citation</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_221}>
        <View style={styles.View_6_222}>
          <View style={styles.View_6_223} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b992/fe21/df8b1d0c33d288a255ae00cce7608301"
            }}
            style={styles.ImageBackground_6_224}
          />
        </View>
        <View style={styles.View_6_225}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501f/5490/29bb332758752b6e01d88fc0d3df761f"
            }}
            style={styles.ImageBackground_6_226}
          />
          <View style={styles.View_6_229}>
            <Text style={styles.Text_6_229}>Ozark</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_203}>
        <View style={styles.View_6_204}>
          <View style={styles.View_6_205} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c5d/253c/d579085f13bce79967c12d2843577734"
            }}
            style={styles.ImageBackground_6_206}
          />
        </View>
        <View style={styles.View_6_207}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501f/5490/29bb332758752b6e01d88fc0d3df761f"
            }}
            style={styles.ImageBackground_6_208}
          />
          <View style={styles.View_6_211}>
            <Text style={styles.Text_6_211}>The Setup</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_230}>
        <View style={styles.View_6_231}>
          <View style={styles.View_6_232} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8729/5805/e9c6fb5f186b67780cef4b023aa84429"
            }}
            style={styles.ImageBackground_6_233}
          />
        </View>
        <View style={styles.View_6_234}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501f/5490/29bb332758752b6e01d88fc0d3df761f"
            }}
            style={styles.ImageBackground_6_235}
          />
          <View style={styles.View_6_238}>
            <Text style={styles.Text_6_238}>Your Excellency</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_201}>
        <View style={styles.View_6_177}>
          <View style={styles.View_6_173} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7398/fbc4/fbb3b85ab214aeb6726e7c3c2900bce6"
            }}
            style={styles.ImageBackground_6_175}
          />
        </View>
        <View style={styles.View_6_190}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501f/5490/29bb332758752b6e01d88fc0d3df761f"
            }}
            style={styles.ImageBackground_6_191}
          />
          <View style={styles.View_6_194}>
            <Text style={styles.Text_6_194}>Oloture</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_239}>
        <View style={styles.View_6_240}>
          <View style={styles.View_6_241} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3539/5e8d/dfe053458bcf89f4db561c91cc325031"
            }}
            style={styles.ImageBackground_6_242}
          />
        </View>
        <View style={styles.View_6_243}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501f/5490/29bb332758752b6e01d88fc0d3df761f"
            }}
            style={styles.ImageBackground_6_244}
          />
          <View style={styles.View_6_247}>
            <Text style={styles.Text_6_247}>The Governor</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_212}>
        <View style={styles.View_6_213}>
          <View style={styles.View_6_214} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b86/a5e9/247b588b7dfae43921a819570c782cc2"
            }}
            style={styles.ImageBackground_6_215}
          />
        </View>
        <View style={styles.View_6_216}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501f/5490/29bb332758752b6e01d88fc0d3df761f"
            }}
            style={styles.ImageBackground_6_217}
          />
          <View style={styles.View_6_220}>
            <Text style={styles.Text_6_220}>Breaking Bad</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_257}>
        <View style={styles.View_6_258} />
        <View style={styles.View_6_259}>
          <View style={styles.View_6_260}>
            <View style={styles.View_6_261}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d039/09fa/3fb8097d6de03ed3a7f60cca678dd032"
                }}
                style={styles.ImageBackground_6_262}
              />
            </View>
            <View style={styles.View_6_265}>
              <Text style={styles.Text_6_265}>Search</Text>
            </View>
          </View>
          <View style={styles.View_6_266}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cee/f3d3/d170c48fa86240a9bd43e1fe6c5ecd3a"
              }}
              style={styles.ImageBackground_6_267}
            />
            <View style={styles.View_6_268}>
              <Text style={styles.Text_6_268}>Coming Soon</Text>
            </View>
          </View>
          <View style={styles.View_6_269}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f88/138a/c8b4fcf8bdf3d41bcc9ca77fef55ac64"
              }}
              style={styles.ImageBackground_6_270}
            />
            <View style={styles.View_6_271}>
              <Text style={styles.Text_6_271}>More</Text>
            </View>
          </View>
          <View style={styles.View_6_272}>
            <View style={styles.View_6_273}>
              <Text style={styles.Text_6_273}>Home</Text>
            </View>
            <View style={styles.View_6_274}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1a2/9cfd/7f16bad82246c651a1f5b9229e8be9e1"
                }}
                style={styles.ImageBackground_6_275}
              />
            </View>
          </View>
          <View style={styles.View_6_281}>
            <View style={styles.View_6_282}>
              <Text style={styles.Text_6_282}>Downloads</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb7a/62b0/660fb6081af0f38f95109062c70546cb"
              }}
              style={styles.ImageBackground_6_283}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_6_409}>
        <View style={styles.View_6_169} />
        <View style={styles.View_6_408}>
          <View style={styles.View_6_170}>
            <Text style={styles.Text_6_170}>
              Search for a show, movie, genre, e.t.c.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f554/f1a3/48d64c8f39afcb3d7e4dca2a10102c32"
            }}
            style={styles.ImageBackground_6_285}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3d/a3bc/558e0074df8926972babddd98bb5d996"
            }}
            style={styles.ImageBackground_6_287}
          />
        </View>
      </View>
      <View style={styles.View_12_35}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7071/7408/2f77d7edc9ec3a3404a44bc7083df27f"
          }}
          style={styles.ImageBackground_I12_35_6_497}
        />
        <View style={styles.View_I12_35_6_496}>
          <Text style={styles.Text_I12_35_6_496}>4</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_6_131: {
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
  View_6_132: {
    width: wp("100%"),
    height: hp("4.33099699802086%"),
    top: hp("-0.12374627785604275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_6_133: {
    width: wp("32.36714884440104%"),
    height: hp("0.6187138661660784%"),
    minHeight: hp("0.6187138661660784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81643880208333%"),
    top: hp("2.4748546829640503%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_6_134: {
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
  View_6_135: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.367943101893357%")
  },
  View_6_136: {
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
  ImageBackground_6_137: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009093571230361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  View_6_138: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_6_139: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_6_143: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_6_148: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_149: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475409%")
  },
  Text_6_149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_6_150: {
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
  View_6_171: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("15.983606557377051%")
  },
  Text_6_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21.74821662902832,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07339449226856232,
    textTransform: "none"
  },
  View_6_202: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.584699453551913%")
  },
  View_6_176: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_172: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 66, 66, 1)"
  },
  ImageBackground_6_174: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_6_181: {
    width: wp("58.4%"),
    minWidth: wp("58.4%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("3.142076502732241%")
  },
  ImageBackground_6_178: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333334%")
  },
  View_6_154: {
    width: wp("19.55555623372396%"),
    minWidth: wp("19.55555623372396%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_154: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7511110901832581,
    textTransform: "none"
  },
  View_6_221: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64.75409836065575%")
  },
  View_6_222: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_223: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 66, 66, 1)"
  },
  ImageBackground_6_224: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_6_225: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("2.7322404371584526%")
  },
  ImageBackground_6_226: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%")
  },
  View_6_229: {
    width: wp("19.55555623372396%"),
    minWidth: wp("19.55555623372396%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.7511110901832581,
    textTransform: "none"
  },
  View_6_203: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.169398907103826%")
  },
  View_6_204: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_205: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 66, 66, 1)"
  },
  ImageBackground_6_206: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_6_207: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_6_208: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%")
  },
  View_6_211: {
    width: wp("19.55555623372396%"),
    minWidth: wp("19.55555623372396%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7511110901832581,
    textTransform: "none"
  },
  View_6_230: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86.33879781420765%")
  },
  View_6_231: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_232: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 66, 66, 1)"
  },
  ImageBackground_6_233: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_6_234: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_6_235: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%")
  },
  View_6_238: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_238: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7511110901832581,
    textTransform: "none"
  },
  View_6_201: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.37704918032787%")
  },
  View_6_177: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_173: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 66, 66, 1)"
  },
  ImageBackground_6_175: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_6_190: {
    width: wp("58.4%"),
    minWidth: wp("58.4%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_6_191: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333334%")
  },
  View_6_194: {
    width: wp("19.55555623372396%"),
    minWidth: wp("19.55555623372396%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_194: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7511110901832581,
    textTransform: "none"
  },
  View_6_239: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.5464480874317%")
  },
  View_6_240: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_241: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 66, 66, 1)"
  },
  ImageBackground_6_242: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_6_243: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_6_244: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%")
  },
  View_6_247: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7511110901832581,
    textTransform: "none"
  },
  View_6_212: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.96174863387978%")
  },
  View_6_213: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_214: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 66, 66, 1)"
  },
  ImageBackground_6_215: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_6_216: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_6_217: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%")
  },
  View_6_220: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7511110901832581,
    textTransform: "none"
  },
  View_6_257: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.86338797814209%")
  },
  View_6_258: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_6_259: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("1.0928961748633697%")
  },
  View_6_260: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    top: hp("0%")
  },
  View_6_261: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_262: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  View_6_265: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109537%")
  },
  Text_6_265: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_266: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.26666666666667%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_6_267: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  View_6_268: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295097%")
  },
  Text_6_268: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_269: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.73333333333333%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_6_270: {
    width: wp("5.599999491373698%"),
    minWidth: wp("5.599999491373698%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_271: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666515%"),
    top: hp("1.502732240437183%")
  },
  Text_6_271: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_272: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_273: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109537%")
  },
  Text_6_273: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_274: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_275: {
    width: wp("5.333333333333334%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%")
  },
  View_6_281: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.333333333333336%"),
    top: hp("0%")
  },
  View_6_282: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109537%")
  },
  Text_6_282: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  ImageBackground_6_283: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%")
  },
  View_6_409: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%")
  },
  View_6_169: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 66, 66, 1)"
  },
  View_6_408: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("1.502732240437159%")
  },
  View_6_170: {
    width: wp("65.21481526692709%"),
    minWidth: wp("65.21481526692709%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("0%")
  },
  Text_6_170: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 12.212963104248047,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20666667819023132,
    textTransform: "none"
  },
  ImageBackground_6_285: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.6830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_287: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%")
  },
  View_12_35: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("100.95628415300546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I12_35_6_497: {
    flexGrow: 1,
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I12_35_6_496: {
    flexGrow: 1,
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.6830601092896273%")
  },
  Text_I12_35_6_496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
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
