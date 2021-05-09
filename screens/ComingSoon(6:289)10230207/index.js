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
      <View style={styles.View_6_293}>
        <View style={styles.View_6_294}>
          <View style={styles.View_6_295} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_6_296}
          />
          <View style={styles.View_6_297} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_6_298}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_6_302}
        />
        <View style={styles.View_6_307}>
          <View style={styles.View_6_308}>
            <Text style={styles.Text_6_308}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_309} />
      <View style={styles.View_6_310} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae31/9e48/3bb8bb3c73b61d7f470879dae068c004"
        }}
        style={styles.ImageBackground_6_420}
      />
      <View style={styles.View_6_411} />
      <View style={styles.View_6_415}>
        <View style={styles.View_6_412}>
          <Text style={styles.Text_6_412}>New Arrival</Text>
        </View>
        <View style={styles.View_6_413}>
          <Text style={styles.Text_6_413}>El Chapo</Text>
        </View>
        <View style={styles.View_6_414}>
          <Text style={styles.Text_6_414}>Nov 6</Text>
        </View>
      </View>
      <View style={styles.View_6_416}>
        <View style={styles.View_6_417}>
          <Text style={styles.Text_6_417}>New Arrival</Text>
        </View>
        <View style={styles.View_6_418}>
          <Text style={styles.Text_6_418}>Peaky Blinders</Text>
        </View>
        <View style={styles.View_6_419}>
          <Text style={styles.Text_6_419}>Nov 6</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cac/03f0/7a2ba58830db75fae3a82ff2186b455b"
        }}
        style={styles.ImageBackground_6_421}
      />
      <View style={styles.View_6_433}>
        <View style={styles.View_6_312}>
          <Text style={styles.Text_6_312}>Notifications</Text>
        </View>
        <View style={styles.View_6_432}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4a4/f303/d5eecec5f3cfa56d76e67ce0969122d6"
            }}
            style={styles.ImageBackground_6_428}
          />
          <View style={styles.View_6_423}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f63/dd8a/26ca14dfc44b4cfda85340ecfbb7ac72"
              }}
              style={styles.ImageBackground_6_424}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_6_462}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53ae/a1f7/1fcc6ae8111714c5b497484f39a478d8"
          }}
          style={styles.ImageBackground_6_422}
        />
        <View style={styles.View_6_461}>
          <View style={styles.View_6_460}>
            <View style={styles.View_6_436}>
              <View style={styles.View_6_435}>
                <Text style={styles.Text_6_435}>Share</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae50/1033/af9c0e4b6f3d34f1f97d8c782cabf797"
                }}
                style={styles.ImageBackground_6_426}
              />
            </View>
            <View style={styles.View_6_459}>
              <View style={styles.View_6_458}>
                <Text style={styles.Text_6_458}>Remind Me</Text>
              </View>
              <View style={styles.View_6_437}>
                <View style={styles.View_6_429}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a35/b32f/ee8bcfbafef6ff81ff065336b662393f"
                    }}
                    style={styles.ImageBackground_6_430}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_6_457}>
            <View style={styles.View_6_438}>
              <Text style={styles.Text_6_438}>Season 1 Coming December 14</Text>
            </View>
            <View style={styles.View_6_456}>
              <View style={styles.View_6_441}>
                <Text style={styles.Text_6_441}>Steamy</Text>
              </View>
              <View style={styles.View_6_448}>
                <Text style={styles.Text_6_448}>.</Text>
              </View>
              <View style={styles.View_6_449}>
                <Text style={styles.Text_6_449}>.</Text>
              </View>
              <View style={styles.View_6_453}>
                <Text style={styles.Text_6_453}>.</Text>
              </View>
              <View style={styles.View_6_454}>
                <Text style={styles.Text_6_454}>.</Text>
              </View>
              <View style={styles.View_6_455}>
                <Text style={styles.Text_6_455}>.</Text>
              </View>
              <View style={styles.View_6_443}>
                <Text style={styles.Text_6_443}>Slow Burn</Text>
              </View>
              <View style={styles.View_6_442}>
                <Text style={styles.Text_6_442}>Soapy</Text>
              </View>
              <View style={styles.View_6_444}>
                <Text style={styles.Text_6_444}>Suspenseful</Text>
              </View>
              <View style={styles.View_6_445}>
                <Text style={styles.Text_6_445}>Teen</Text>
              </View>
              <View style={styles.View_6_446}>
                <Text style={styles.Text_6_446}>Mystery</Text>
              </View>
            </View>
            <View style={styles.View_6_440}>
              <Text style={styles.Text_6_440}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non
                accumsan accumsan quis. Massa, id ut ipsum aliquam enim non
                posuere pulvinar diam.
              </Text>
            </View>
            <View style={styles.View_6_439}>
              <Text style={styles.Text_6_439}>Castle &amp; Castle</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_6_463}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d765/aed1/17de7b5d0d6a23d531c9ee5f87bf9cf3"
          }}
          style={styles.ImageBackground_6_464}
        />
        <View style={styles.View_6_465}>
          <View style={styles.View_6_466}>
            <View style={styles.View_6_467}>
              <View style={styles.View_6_468}>
                <Text style={styles.Text_6_468}>Share</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae50/1033/af9c0e4b6f3d34f1f97d8c782cabf797"
                }}
                style={styles.ImageBackground_6_469}
              />
            </View>
            <View style={styles.View_6_471}>
              <View style={styles.View_6_472}>
                <Text style={styles.Text_6_472}>Remind Me</Text>
              </View>
              <View style={styles.View_6_473}>
                <View style={styles.View_6_475}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a35/b32f/ee8bcfbafef6ff81ff065336b662393f"
                    }}
                    style={styles.ImageBackground_6_476}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_6_478}>
            <View style={styles.View_6_479}>
              <Text style={styles.Text_6_479}>Season 1 Coming December 14</Text>
            </View>
            <View style={styles.View_6_480}>
              <View style={styles.View_6_481}>
                <Text style={styles.Text_6_481}>Steamy</Text>
              </View>
              <View style={styles.View_6_482}>
                <Text style={styles.Text_6_482}>.</Text>
              </View>
              <View style={styles.View_6_483}>
                <Text style={styles.Text_6_483}>.</Text>
              </View>
              <View style={styles.View_6_484}>
                <Text style={styles.Text_6_484}>.</Text>
              </View>
              <View style={styles.View_6_485}>
                <Text style={styles.Text_6_485}>.</Text>
              </View>
              <View style={styles.View_6_486}>
                <Text style={styles.Text_6_486}>.</Text>
              </View>
              <View style={styles.View_6_487}>
                <Text style={styles.Text_6_487}>Slow Burn</Text>
              </View>
              <View style={styles.View_6_488}>
                <Text style={styles.Text_6_488}>Soapy</Text>
              </View>
              <View style={styles.View_6_489}>
                <Text style={styles.Text_6_489}>Suspenseful</Text>
              </View>
              <View style={styles.View_6_490}>
                <Text style={styles.Text_6_490}>Teen</Text>
              </View>
              <View style={styles.View_6_491}>
                <Text style={styles.Text_6_491}>Mystery</Text>
              </View>
            </View>
            <View style={styles.View_6_492}>
              <Text style={styles.Text_6_492}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non
                accumsan accumsan quis. Massa, id ut ipsum aliquam enim non
                posuere pulvinar diam.
              </Text>
            </View>
            <View style={styles.View_6_493}>
              <Text style={styles.Text_6_493}>Tiny Pretty Things</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_13_55}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c10/16ba/2ce30cb2dfebad5a3e786394b6115c77"
          }}
          style={styles.ImageBackground_13_56}
        />
        <View style={styles.View_13_57}>
          <View style={styles.View_13_58}>
            <View style={styles.View_13_59}>
              <View style={styles.View_13_60}>
                <Text style={styles.Text_13_60}>Share</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae50/1033/af9c0e4b6f3d34f1f97d8c782cabf797"
                }}
                style={styles.ImageBackground_13_61}
              />
            </View>
            <View style={styles.View_13_63}>
              <View style={styles.View_13_64}>
                <Text style={styles.Text_13_64}>Remind Me</Text>
              </View>
              <View style={styles.View_13_65}>
                <View style={styles.View_13_67}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a35/b32f/ee8bcfbafef6ff81ff065336b662393f"
                    }}
                    style={styles.ImageBackground_13_68}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_13_70}>
            <View style={styles.View_13_71}>
              <Text style={styles.Text_13_71}>Season 1 Coming December 14</Text>
            </View>
            <View style={styles.View_13_72}>
              <View style={styles.View_13_73}>
                <Text style={styles.Text_13_73}>Steamy</Text>
              </View>
              <View style={styles.View_13_74}>
                <Text style={styles.Text_13_74}>.</Text>
              </View>
              <View style={styles.View_13_75}>
                <Text style={styles.Text_13_75}>.</Text>
              </View>
              <View style={styles.View_13_76}>
                <Text style={styles.Text_13_76}>.</Text>
              </View>
              <View style={styles.View_13_77}>
                <Text style={styles.Text_13_77}>.</Text>
              </View>
              <View style={styles.View_13_78}>
                <Text style={styles.Text_13_78}>.</Text>
              </View>
              <View style={styles.View_13_79}>
                <Text style={styles.Text_13_79}>Slow Burn</Text>
              </View>
              <View style={styles.View_13_80}>
                <Text style={styles.Text_13_80}>Soapy</Text>
              </View>
              <View style={styles.View_13_81}>
                <Text style={styles.Text_13_81}>Suspenseful</Text>
              </View>
              <View style={styles.View_13_82}>
                <Text style={styles.Text_13_82}>Teen</Text>
              </View>
              <View style={styles.View_13_83}>
                <Text style={styles.Text_13_83}>Mystery</Text>
              </View>
            </View>
            <View style={styles.View_13_84}>
              <Text style={styles.Text_13_84}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non
                accumsan accumsan quis. Massa, id ut ipsum aliquam enim non
                posuere pulvinar diam.
              </Text>
            </View>
            <View style={styles.View_13_85}>
              <Text style={styles.Text_13_85}>Tiny Pretty Things</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_6_376}>
        <View style={styles.View_6_377} />
        <View style={styles.View_6_378}>
          <View style={styles.View_6_379}>
            <View style={styles.View_6_380}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9b1/3ac4/e57f810616fc1ba08cdf0f6edc5ecd8f"
                }}
                style={styles.ImageBackground_6_381}
              />
            </View>
            <View style={styles.View_6_384}>
              <Text style={styles.Text_6_384}>Search</Text>
            </View>
          </View>
          <View style={styles.View_6_385}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d34/8f5f/f01671f7e87452e5b8a4a3ab57c77181"
              }}
              style={styles.ImageBackground_6_386}
            />
            <View style={styles.View_6_387}>
              <Text style={styles.Text_6_387}>Coming Soon</Text>
            </View>
          </View>
          <View style={styles.View_6_388}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f88/138a/c8b4fcf8bdf3d41bcc9ca77fef55ac64"
              }}
              style={styles.ImageBackground_6_389}
            />
            <View style={styles.View_6_390}>
              <Text style={styles.Text_6_390}>More</Text>
            </View>
          </View>
          <View style={styles.View_6_391}>
            <View style={styles.View_6_392}>
              <Text style={styles.Text_6_392}>Home</Text>
            </View>
            <View style={styles.View_6_393}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1a2/9cfd/7f16bad82246c651a1f5b9229e8be9e1"
                }}
                style={styles.ImageBackground_6_394}
              />
            </View>
          </View>
          <View style={styles.View_6_400}>
            <View style={styles.View_6_401}>
              <Text style={styles.Text_6_401}>Downloads</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb7a/62b0/660fb6081af0f38f95109062c70546cb"
              }}
              style={styles.ImageBackground_6_402}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_12_28}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7071/7408/2f77d7edc9ec3a3404a44bc7083df27f"
          }}
          style={styles.ImageBackground_6_497}
        />
        <View style={styles.View_6_496}>
          <Text style={styles.Text_6_496}>4</Text>
        </View>
      </View>
      <View style={styles.View_6_290}>
        <View style={styles.View_6_291} />
        <View style={styles.View_6_292} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_6_293: {
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
  View_6_294: {
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
  View_6_295: {
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
  ImageBackground_6_296: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009093571230361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  View_6_297: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_6_298: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_6_302: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_6_307: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_308: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475409%")
  },
  Text_6_308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_6_309: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("198.9071038251366%"),
    minHeight: hp("198.9071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_6_310: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.841530054644808%"),
    backgroundColor: "rgba(66, 66, 66, 1)"
  },
  ImageBackground_6_420: {
    width: wp("30.133333333333333%"),
    minWidth: wp("30.133333333333333%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("13.524590163934427%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_6_411: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.721311475409834%"),
    backgroundColor: "rgba(66, 66, 66, 1)"
  },
  View_6_415: {
    width: wp("17.961354573567707%"),
    minWidth: wp("17.961354573567707%"),
    height: hp("6.338467624018102%"),
    minHeight: hp("6.338467624018102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%"),
    top: hp("14.071038251366119%")
  },
  View_6_412: {
    width: wp("17.961354573567707%"),
    minWidth: wp("17.961354573567707%"),
    minHeight: hp("1.4605576874779873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_412: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.719536781311035,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.037645064294338226,
    textTransform: "none"
  },
  View_6_413: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4389548379866817%")
  },
  Text_6_413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.719536781311035,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.037645064294338226,
    textTransform: "none"
  },
  View_6_414: {
    width: wp("7.127521769205729%"),
    minWidth: wp("7.127521769205729%"),
    minHeight: hp("1.4605576874779873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.87790967597336%")
  },
  Text_6_414: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.509531021118164,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.037645064294338226,
    textTransform: "none"
  },
  View_6_416: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("6.338467624018102%"),
    minHeight: hp("6.338467624018102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%"),
    top: hp("22.950819672131146%")
  },
  View_6_417: {
    width: wp("17.961354573567707%"),
    minWidth: wp("17.961354573567707%"),
    minHeight: hp("1.4605576874779873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_417: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.719536781311035,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.037645064294338226,
    textTransform: "none"
  },
  View_6_418: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4389548379866817%")
  },
  Text_6_418: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.719536781311035,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.037645064294338226,
    textTransform: "none"
  },
  View_6_419: {
    width: wp("7.127521769205729%"),
    minWidth: wp("7.127521769205729%"),
    minHeight: hp("1.4605576874779873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.877909675973363%")
  },
  Text_6_419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.509531021118164,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.037645064294338226,
    textTransform: "none"
  },
  ImageBackground_6_421: {
    width: wp("30.133333333333333%"),
    minWidth: wp("30.133333333333333%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("22.404371584699454%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_6_433: {
    width: wp("33.22666829427084%"),
    minWidth: wp("33.22666829427084%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7.786885245901639%")
  },
  View_6_312: {
    width: wp("26.293334960937496%"),
    minWidth: wp("26.293334960937496%"),
    minHeight: hp("1.7269160578159686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333334%"),
    top: hp("0.40983606557376984%")
  },
  Text_6_312: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.906246185302734,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04638908430933952,
    textTransform: "none"
  },
  View_6_432: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_428: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_423: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.5464480874316928%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_424: {
    width: wp("2.566666666666667%"),
    height: hp("1.5028144492477666%"),
    top: hp("-0.00008338136099617088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333357%")
  },
  View_6_462: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52.595628415300546%"),
    minHeight: hp("52.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.01639344262295%")
  },
  ImageBackground_6_422: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_6_461: {
    width: wp("94.6%"),
    minWidth: wp("94.6%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("29.371584699453557%")
  },
  View_6_460: {
    width: wp("33.82222290039063%"),
    minWidth: wp("33.82222290039063%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666666%"),
    top: hp("0%")
  },
  View_6_436: {
    width: wp("7.422222391764323%"),
    minWidth: wp("7.422222391764323%"),
    height: hp("5.4500996740789365%"),
    minHeight: hp("5.4500996740789365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000006%"),
    top: hp("0%")
  },
  View_6_435: {
    width: wp("7.422222391764323%"),
    minWidth: wp("7.422222391764323%"),
    minHeight: hp("1.2007478807793288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.24935179329961%")
  },
  Text_6_435: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.131156921386719,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030542802065610886,
    textTransform: "none"
  },
  ImageBackground_6_426: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_6_459: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_458: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("4.234972677595621%")
  },
  Text_6_458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.131156921386719,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030542802065610886,
    textTransform: "none"
  },
  View_6_437: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_429: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_430: {
    width: wp("5.6000000000000005%"),
    height: hp("3.2788677945163083%"),
    top: hp("-0.00018187559367532913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3999999999999915%")
  },
  View_6_457: {
    width: wp("94.6%"),
    minWidth: wp("94.6%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.2404371584699305%")
  },
  View_6_438: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_456: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.524590163934448%")
  },
  View_6_441: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.229508196721298%")
  },
  Text_6_441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_448: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.93623046875%"),
    top: hp("0%")
  },
  Text_6_448: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_6_449: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.06666666666667%"),
    top: hp("0%")
  },
  Text_6_449: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_6_453: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0%")
  },
  Text_6_453: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_6_454: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.26666666666667%"),
    top: hp("0%")
  },
  Text_6_454: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_6_455: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%"),
    top: hp("0%")
  },
  Text_6_455: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_6_443: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("1.229508196721298%")
  },
  Text_6_443: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_442: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("1.229508196721298%")
  },
  Text_6_442: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_444: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_6_444: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_445: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    top: hp("1.0928961748633697%")
  },
  Text_6_445: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_446: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_6_446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_440: {
    width: wp("94.6%"),
    minWidth: wp("94.6%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.69398907103826%")
  },
  Text_6_440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.140909194946289,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030563583597540855,
    textTransform: "none"
  },
  View_6_439: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.023474854849738%")
  },
  Text_6_439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.662282943725586,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05120747163891792,
    textTransform: "none"
  },
  View_6_463: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52.595628415300546%"),
    minHeight: hp("52.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88.9344262295082%")
  },
  ImageBackground_6_464: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_6_465: {
    width: wp("94.6%"),
    minWidth: wp("94.6%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("29.37158469945355%")
  },
  View_6_466: {
    width: wp("33.82222290039063%"),
    minWidth: wp("33.82222290039063%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666666%"),
    top: hp("0%")
  },
  View_6_467: {
    width: wp("7.422222391764323%"),
    minWidth: wp("7.422222391764323%"),
    height: hp("5.4500996740789365%"),
    minHeight: hp("5.4500996740789365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000006%"),
    top: hp("0%")
  },
  View_6_468: {
    width: wp("7.422222391764323%"),
    minWidth: wp("7.422222391764323%"),
    minHeight: hp("1.2007478807793288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.249351793299596%")
  },
  Text_6_468: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.131156921386719,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030542802065610886,
    textTransform: "none"
  },
  ImageBackground_6_469: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_6_471: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_472: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("4.234972677595636%")
  },
  Text_6_472: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.131156921386719,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030542802065610886,
    textTransform: "none"
  },
  View_6_473: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_475: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_476: {
    width: wp("5.6000000000000005%"),
    height: hp("3.2788677945163083%"),
    top: hp("-0.0001834389941848258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3999999999999915%")
  },
  View_6_478: {
    width: wp("94.6%"),
    minWidth: wp("94.6%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%")
  },
  View_6_479: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_480: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.524590163934434%")
  },
  View_6_481: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.229508196721298%")
  },
  Text_6_481: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_482: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.93623046875%"),
    top: hp("0%")
  },
  Text_6_482: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_6_483: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.06666666666667%"),
    top: hp("0%")
  },
  Text_6_483: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_6_484: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0%")
  },
  Text_6_484: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_6_485: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.26666666666667%"),
    top: hp("0%")
  },
  Text_6_485: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_6_486: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%"),
    top: hp("0%")
  },
  Text_6_486: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_6_487: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("1.229508196721298%")
  },
  Text_6_487: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_488: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("1.229508196721298%")
  },
  Text_6_488: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_489: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_6_489: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_490: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    top: hp("1.0928961748633697%")
  },
  Text_6_490: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_491: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_6_491: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_6_492: {
    width: wp("94.6%"),
    minWidth: wp("94.6%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038246%")
  },
  Text_6_492: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.140909194946289,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030563583597540855,
    textTransform: "none"
  },
  View_6_493: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.023474854849738%")
  },
  Text_6_493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.662282943725586,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05120747163891792,
    textTransform: "none"
  },
  View_13_55: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52.595628415300546%"),
    minHeight: hp("52.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("143.85245901639345%")
  },
  ImageBackground_13_56: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_57: {
    width: wp("94.6%"),
    minWidth: wp("94.6%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("29.371584699453535%")
  },
  View_13_58: {
    width: wp("33.82222290039063%"),
    minWidth: wp("33.82222290039063%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666666%"),
    top: hp("0%")
  },
  View_13_59: {
    width: wp("7.422222391764323%"),
    minWidth: wp("7.422222391764323%"),
    height: hp("5.4500996740789365%"),
    minHeight: hp("5.4500996740789365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000006%"),
    top: hp("0%")
  },
  View_13_60: {
    width: wp("7.422222391764323%"),
    minWidth: wp("7.422222391764323%"),
    minHeight: hp("1.2007478807793288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.249347624231575%")
  },
  Text_13_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.131156921386719,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030542802065610886,
    textTransform: "none"
  },
  ImageBackground_13_61: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_13_63: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_64: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("4.234972677595636%")
  },
  Text_13_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.131156921386719,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030542802065610886,
    textTransform: "none"
  },
  View_13_65: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_67: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_68: {
    width: wp("5.6000000000000005%"),
    height: hp("3.2788677945163083%"),
    top: hp("-0.0001834389941848258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3999999999999915%")
  },
  View_13_70: {
    width: wp("94.6%"),
    minWidth: wp("94.6%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%")
  },
  View_13_71: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_13_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_13_72: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.52459016393442%")
  },
  View_13_73: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2295081967213264%")
  },
  Text_13_73: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_13_74: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.93623046875%"),
    top: hp("0%")
  },
  Text_13_74: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_13_75: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.06666666666667%"),
    top: hp("0%")
  },
  Text_13_75: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_13_76: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0%")
  },
  Text_13_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_13_77: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.26666666666667%"),
    top: hp("0%")
  },
  Text_13_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_13_78: {
    width: wp("1.460869598388672%"),
    minWidth: wp("1.460869598388672%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%"),
    top: hp("0%")
  },
  Text_13_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.78152847290039,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04330296441912651,
    textTransform: "none"
  },
  View_13_79: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("1.2295081967213264%")
  },
  Text_13_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_13_80: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("1.2295081967213264%")
  },
  Text_13_80: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_13_81: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_13_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_13_82: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    top: hp("1.092896174863398%")
  },
  Text_13_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_13_83: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_13_83: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.397770881652832,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.03127436339855194,
    textTransform: "none"
  },
  View_13_84: {
    width: wp("94.6%"),
    minWidth: wp("94.6%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.69398907103826%")
  },
  Text_13_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.140909194946289,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030563583597540855,
    textTransform: "none"
  },
  View_13_85: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.023474854849752%")
  },
  Text_13_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.662282943725586,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05120747163891792,
    textTransform: "none"
  },
  View_6_376: {
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
  View_6_377: {
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
  View_6_378: {
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
  View_6_379: {
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
  View_6_380: {
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
  ImageBackground_6_381: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  View_6_384: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109537%")
  },
  Text_6_384: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_385: {
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
  ImageBackground_6_386: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0%")
  },
  View_6_387: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295097%")
  },
  Text_6_387: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_388: {
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
  ImageBackground_6_389: {
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
  View_6_390: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666515%"),
    top: hp("1.502732240437183%")
  },
  Text_6_390: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_391: {
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
  View_6_392: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109537%")
  },
  Text_6_392: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_393: {
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
  ImageBackground_6_394: {
    width: wp("5.333333333333334%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%")
  },
  View_6_400: {
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
  View_6_401: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109537%")
  },
  Text_6_401: {
    color: "rgba(140, 135, 135, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  ImageBackground_6_402: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%")
  },
  View_12_28: {
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
  ImageBackground_6_497: {
    flexGrow: 1,
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_496: {
    flexGrow: 1,
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.6830601092896273%")
  },
  Text_6_496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.199999809265137,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25999999046325684,
    textTransform: "none"
  },
  View_6_290: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.33099699802086%"),
    minHeight: hp("4.33099699802086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.4207650273224%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    overflow: "hidden"
  },
  View_6_291: {
    width: wp("100%"),
    height: hp("4.33099699802086%"),
    top: hp("-0.12374627785604275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_6_292: {
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
  View_2: { height: 1500 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
