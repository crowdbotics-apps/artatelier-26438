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
      <View style={styles.View_6_628}>
        <View style={styles.View_6_629} />
        <View style={styles.View_6_630} />
      </View>
      <View style={styles.View_6_631}>
        <View style={styles.View_6_632}>
          <View style={styles.View_6_633} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_6_634}
          />
          <View style={styles.View_6_635} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_6_636}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_6_640}
        />
        <View style={styles.View_6_645}>
          <View style={styles.View_6_646}>
            <Text style={styles.Text_6_646}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_6_647} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3530/7e14/afb4d329b775c99f66e6039b35f5ab03"
          }}
          style={styles.ImageBackground_12_23}
        />
      </View>
      <View style={styles.View_6_717}>
        <Text style={styles.Text_6_717}>Manage Profiles</Text>
      </View>
      <View style={styles.View_12_17}>
        <View style={styles.View_12_18}>
          <Text style={styles.Text_12_18}>Thelma</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a88/d59d/89ae27a82b90f7aab89c2c792bcb8c97"
          }}
          style={styles.ImageBackground_12_19}
        />
      </View>
      <View style={styles.View_12_20}>
        <View style={styles.View_12_21}>
          <Text style={styles.Text_12_21}>Kids</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/799e/615c/7a59582ada6eac08b7dee2e80be3bcf1"
          }}
          style={styles.ImageBackground_12_22}
        />
      </View>
      <View style={styles.View_12_14}>
        <View style={styles.View_12_15}>
          <Text style={styles.Text_12_15}>Emenalo</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9f7/1e76/10813484f503535cebbd819a954a86d4"
          }}
          style={styles.ImageBackground_12_16}
        />
      </View>
      <View style={styles.View_6_757}>
        <View style={styles.View_6_758}>
          <Text style={styles.Text_6_758}>Onyeka</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56f7/d5c3/d90f21dccd3489f3774f1e02f0a3c2ba"
          }}
          style={styles.ImageBackground_6_759}
        />
      </View>
      <View style={styles.View_12_13}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a247/b1f3/7d94253484e479356a53a6b1c33d511a"
          }}
          style={styles.ImageBackground_6_729}
        />
        <View style={styles.View_6_716} />
      </View>
      <View style={styles.View_12_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3824/cc4d/f3844e97a33326d6ded224410a562ae1"
          }}
          style={styles.ImageBackground_6_737}
        />
        <View style={styles.View_12_1}>
          <Text style={styles.Text_12_1}>My List</Text>
        </View>
      </View>
      <View style={styles.View_12_12}>
        <View style={styles.View_12_4}>
          <Text style={styles.Text_12_4}>App Settings </Text>
        </View>
        <View style={styles.View_12_6}>
          <Text style={styles.Text_12_6}>Help</Text>
        </View>
        <View style={styles.View_12_5}>
          <Text style={styles.Text_12_5}>Account</Text>
        </View>
        <View style={styles.View_12_7}>
          <Text style={styles.Text_12_7}>Sign Out</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ac8/f8c6/f3ae7eeca18c1892a4edf1196dca0afb"
        }}
        style={styles.ImageBackground_12_2}
      />
      <View style={styles.View_6_662}>
        <View style={styles.View_6_663} />
        <View style={styles.View_6_664}>
          <View style={styles.View_6_665}>
            <View style={styles.View_6_666}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33d5/bf2a/2135b370fc0433b1be2dcea5c7d624df"
                }}
                style={styles.ImageBackground_6_667}
              />
            </View>
            <View style={styles.View_6_670}>
              <Text style={styles.Text_6_670}>Search</Text>
            </View>
          </View>
          <View style={styles.View_6_671}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cee/f3d3/d170c48fa86240a9bd43e1fe6c5ecd3a"
              }}
              style={styles.ImageBackground_6_672}
            />
            <View style={styles.View_6_673}>
              <Text style={styles.Text_6_673}>Coming Soon</Text>
            </View>
          </View>
          <View style={styles.View_6_674}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd68/82c5/63d30e6ee212f89fa7d568609da484d8"
              }}
              style={styles.ImageBackground_6_675}
            />
            <View style={styles.View_6_676}>
              <Text style={styles.Text_6_676}>More</Text>
            </View>
          </View>
          <View style={styles.View_6_677}>
            <View style={styles.View_6_678}>
              <Text style={styles.Text_6_678}>Home</Text>
            </View>
            <View style={styles.View_6_679}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1a2/9cfd/7f16bad82246c651a1f5b9229e8be9e1"
                }}
                style={styles.ImageBackground_6_680}
              />
            </View>
          </View>
          <View style={styles.View_6_686}>
            <View style={styles.View_6_687}>
              <Text style={styles.Text_6_687}>Downloads</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb7a/62b0/660fb6081af0f38f95109062c70546cb"
              }}
              style={styles.ImageBackground_6_688}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_12_11}>
        <View style={styles.View_12_10}>
          <View style={styles.View_6_718} />
          <View style={styles.View_6_748}>
            <View style={styles.View_6_747}>
              <View style={styles.View_6_725} />
              <View style={styles.View_6_728}>
                <View style={styles.View_6_726} />
                <View style={styles.View_6_727}>
                  <Text style={styles.Text_6_727}>Copy Link</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_6_746}>
              <View style={styles.View_6_719}>
                <Text style={styles.Text_6_719}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non
                  accumsan accumsan quis. Massa,
                </Text>
              </View>
              <View style={styles.View_6_720}>
                <Text style={styles.Text_6_720}>Terms &amp; Conditions</Text>
              </View>
              <View style={styles.View_6_745}>
                <View style={styles.View_6_648}>
                  <Text style={styles.Text_6_648}>
                    Tell friends about Netflix.
                  </Text>
                </View>
                <View style={styles.View_6_744}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/186c/555c/55e28982bd897cc5dd1e3570aa6f9286"
                    }}
                    style={styles.ImageBackground_6_733}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d271/aadf/a128a2fb62c868b788789f98896fffb8"
                    }}
                    style={styles.ImageBackground_6_742}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_13_889}>
            <View style={styles.View_13_885} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a19/3124/a7f88131330724756dda86bbf775b3d6"
              }}
              style={styles.ImageBackground_6_760}
            />
          </View>
          <View style={styles.View_12_8}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c65/fe93/59e573f773a1738e9a2824147a4c9ff5"
              }}
              style={styles.ImageBackground_6_740}
            />
            <View style={styles.View_12_0}>
              <Text style={styles.Text_12_0}>More</Text>
            </View>
          </View>
          <View style={styles.View_13_888}>
            <View style={styles.View_13_883} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6f0/a9f1/5bf4a010d8fc7710b881fbeb79336410"
              }}
              style={styles.ImageBackground_6_749}
            />
          </View>
          <View style={styles.View_13_887}>
            <View style={styles.View_13_884} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40e3/f99e/a89f698f35b8048a4ab12bfcca62ca53"
              }}
              style={styles.ImageBackground_6_754}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_12_32}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7071/7408/2f77d7edc9ec3a3404a44bc7083df27f"
          }}
          style={styles.ImageBackground_I12_32_6_497}
        />
        <View style={styles.View_I12_32_6_496}>
          <Text style={styles.Text_I12_32_6_496}>4</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d623/ce52/bff7faf2f1f2acf2284d49e4439c0463"
        }}
        style={styles.ImageBackground_13_890}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d623/ce52/bff7faf2f1f2acf2284d49e4439c0463"
        }}
        style={styles.ImageBackground_13_892}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d623/ce52/bff7faf2f1f2acf2284d49e4439c0463"
        }}
        style={styles.ImageBackground_13_891}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_6_628: {
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
  View_6_629: {
    width: wp("100%"),
    height: hp("4.33099699802086%"),
    top: hp("-0.12374627785604275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_6_630: {
    width: wp("32.36714884440104%"),
    height: hp("0.6187138661660784%"),
    minHeight: hp("0.6187138661660784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81640625%"),
    top: hp("2.4748546829640503%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_6_631: {
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
  View_6_632: {
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
  View_6_633: {
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
  ImageBackground_6_634: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009093571230361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  View_6_635: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_6_636: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_6_640: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_6_645: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_646: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475409%")
  },
  Text_6_646: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_6_647: {
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
  ImageBackground_12_23: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%")
  },
  View_6_717: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666666666666%"),
    top: hp("24.18032786885246%")
  },
  Text_6_717: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.25,
    textTransform: "none"
  },
  View_12_17: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("11.748633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_12_18: {
    width: wp("11.466666666666667%"),
    top: hp("8.702525154488983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5973307291666643%")
  },
  Text_12_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.350000381469727,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6759999990463257,
    textTransform: "none"
  },
  ImageBackground_12_19: {
    width: wp("16.53333333333333%"),
    height: hp("8.517364335190402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_12_20: {
    width: wp("17.19466552734375%"),
    minWidth: wp("17.19466552734375%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666667%"),
    top: hp("12.021857923497267%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_12_21: {
    width: wp("6.666666666666667%"),
    top: hp("8.278009800311649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.295312499999987%")
  },
  Text_12_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.350000381469727,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7030399441719055,
    textTransform: "none"
  },
  ImageBackground_12_22: {
    width: wp("17.19466552734375%"),
    height: hp("8.10188283034361%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 7.279999732971191,
    borderTopRightRadius: 7.279999732971191,
    borderBottomLeftRadius: 7.279999732971191,
    borderBottomRightRadius: 7.279999732971191
  },
  View_12_14: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("12.34712444367956%"),
    minHeight: hp("12.34712444367956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("11.202185792349727%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_12_15: {
    width: wp("13.333333333333334%"),
    top: hp("9.045531059223446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.072005208333333%")
  },
  Text_12_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.350000381469727,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.783301591873169,
    textTransform: "none"
  },
  ImageBackground_12_16: {
    width: wp("19.466666666666665%"),
    height: hp("9.387895969745239%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8.11111068725586,
    borderTopRightRadius: 8.11111068725586,
    borderBottomLeftRadius: 8.11111068725586,
    borderBottomRightRadius: 8.11111068725586
  },
  View_6_757: {
    width: wp("17.410469563802085%"),
    minWidth: wp("17.410469563802085%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.200000000000003%"),
    top: hp("12.021857923497267%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_758: {
    width: wp("11.466666666666667%"),
    top: hp("8.930585684020665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9266927083333307%")
  },
  Text_6_758: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.350000381469727,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4413553774356842,
    textTransform: "none"
  },
  ImageBackground_6_759: {
    width: wp("17.410469563802085%"),
    height: hp("8.205753597405439%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4.570248126983643,
    borderTopRightRadius: 4.570248126983643,
    borderBottomLeftRadius: 4.570248126983643,
    borderBottomRightRadius: 4.570248126983643
  },
  View_12_13: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.80000000000001%"),
    top: hp("12.021857923497267%")
  },
  ImageBackground_6_729: {
    width: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    top: hp("1.6393442622950847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.73333333333332%")
  },
  View_6_716: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(140, 135, 135, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_12_3: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("62.704918032786885%")
  },
  ImageBackground_6_737: {
    width: wp("8.799999999999999%"),
    height: hp("4.508196721311475%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_1: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("0.2732240437158424%")
  },
  Text_12_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.25,
    textTransform: "none"
  },
  View_12_12: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("18.852459016393443%"),
    minHeight: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("69.94535519125684%")
  },
  View_12_4: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_12_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_12_6: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770483%")
  },
  Text_12_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_12_5: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885249%")
  },
  Text_12_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_12_7: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.754098360655732%")
  },
  Text_12_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_12_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67.89617486338798%")
  },
  View_6_662: {
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
  View_6_663: {
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
  View_6_664: {
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
  View_6_665: {
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
  View_6_666: {
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
  ImageBackground_6_667: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  View_6_670: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109537%")
  },
  Text_6_670: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_671: {
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
  ImageBackground_6_672: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  View_6_673: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295097%")
  },
  Text_6_673: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_674: {
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
  ImageBackground_6_675: {
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
  View_6_676: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666515%"),
    top: hp("1.502732240437183%")
  },
  Text_6_676: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_677: {
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
  View_6_678: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109537%")
  },
  Text_6_678: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_679: {
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
  ImageBackground_6_680: {
    width: wp("5.333333333333334%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%")
  },
  View_6_686: {
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
  View_6_687: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109537%")
  },
  Text_6_687: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  ImageBackground_6_688: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%")
  },
  View_12_11: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33.7431693989071%"),
    minHeight: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.551912568306008%")
  },
  View_12_10: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33.7431693989071%"),
    minHeight: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_718: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33.7431693989071%"),
    minHeight: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 26, 26, 1)"
  },
  View_6_748: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.595628415300549%")
  },
  View_6_747: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.480874316939893%")
  },
  View_6_725: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_6_728: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.73333333333333%"),
    top: hp("0%")
  },
  View_6_726: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_6_727: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("4.748894217235795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.1366120218579212%")
  },
  Text_6_727: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.05908203125,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.289682537317276,
    textTransform: "none"
  },
  View_6_746: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_719: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737704%")
  },
  Text_6_719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.781095504760742,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.18000000715255737,
    textTransform: "none"
  },
  View_6_720: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.519125683060114%")
  },
  Text_6_720: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 8.781095504760742,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.18000000715255737,
    textTransform: "none"
  },
  View_6_745: {
    width: wp("67.46666666666667%"),
    minWidth: wp("67.46666666666667%"),
    height: hp("3.4153008070148405%"),
    minHeight: hp("3.4153008070148405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_648: {
    width: wp("58.666666666666664%"),
    minWidth: wp("58.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.6830601092896202%")
  },
  Text_6_648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.634330749511719,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05387468263506889,
    textTransform: "none"
  },
  View_6_744: {
    width: wp("6.400000508626302%"),
    minWidth: wp("6.400000508626302%"),
    height: hp("3.4153008070148405%"),
    minHeight: hp("3.4153008070148405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_733: {
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_742: {
    width: wp("6.400000508626302%"),
    height: hp("3.278688785156917%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_889: {
    width: wp("12.648632812499999%"),
    minWidth: wp("12.648632812499999%"),
    height: hp("4.883016784334443%"),
    minHeight: hp("4.883016784334443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.3513671875%"),
    top: hp("25.5464480874317%")
  },
  View_13_885: {
    width: wp("9.066690063476562%"),
    minWidth: wp("9.066690063476562%"),
    height: hp("4.335166326637477%"),
    minHeight: hp("4.335166326637477%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6272786458333286%"),
    top: hp("0.11909828811395329%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8.31113338470459,
    borderTopRightRadius: 8.31113338470459,
    borderBottomLeftRadius: 8.31113338470459,
    borderBottomRightRadius: 8.31113338470459
  },
  ImageBackground_6_760: {
    width: wp("12.648632812499999%"),
    minWidth: wp("12.648632812499999%"),
    height: hp("4.883016784334443%"),
    minHeight: hp("4.883016784334443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_12_8: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    top: hp("23.633879781420774%")
  },
  ImageBackground_6_740: {
    width: wp("9.866666666666667%"),
    height: hp("5.05464480874317%"),
    top: hp("-2.6056675750396607e-7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_0: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000114%"),
    top: hp("3.5519128288727586%")
  },
  Text_12_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.722221374511719,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.25,
    textTransform: "none"
  },
  View_13_888: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("4.590164247106333%"),
    minHeight: hp("4.590164247106333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("25.5464480874317%")
  },
  View_13_883: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("4.590164247106333%"),
    minHeight: hp("4.590164247106333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 183, 66, 1)",
    borderTopLeftRadius: 8.800000190734863,
    borderTopRightRadius: 8.800000190734863,
    borderBottomLeftRadius: 8.800000190734863,
    borderBottomRightRadius: 8.800000190734863
  },
  ImageBackground_6_749: {
    width: wp("7.110684712727864%"),
    height: hp("3.656998618704374%"),
    top: hp("0.5044135891023203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2307942708333321%")
  },
  View_13_887: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("4.590164247106333%"),
    minHeight: hp("4.590164247106333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("25.5464480874317%")
  },
  View_13_884: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("4.590164247106333%"),
    minHeight: hp("4.590164247106333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(57, 81, 133, 1)",
    borderTopLeftRadius: 9.800000190734863,
    borderTopRightRadius: 9.800000190734863,
    borderBottomLeftRadius: 9.800000190734863,
    borderBottomRightRadius: 9.800000190734863
  },
  ImageBackground_6_754: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0.9016401780759011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333357%")
  },
  View_12_32: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("100.95628415300546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I12_32_6_497: {
    flexGrow: 1,
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I12_32_6_496: {
    flexGrow: 1,
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.6830601092896273%")
  },
  Text_I12_32_6_496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  ImageBackground_13_890: {
    width: wp("4.779112108129387e-7%"),
    minWidth: wp("4.779112108129387e-7%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("53.551912568306015%")
  },
  ImageBackground_13_892: {
    width: wp("4.779112108129387e-7%"),
    minWidth: wp("4.779112108129387e-7%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("53.551912568306015%")
  },
  ImageBackground_13_891: {
    width: wp("4.779112108129387e-7%"),
    minWidth: wp("4.779112108129387e-7%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("53.551912568306015%")
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
